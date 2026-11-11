"use strict";
const main = document.querySelector("main");
const sidebar = document.querySelector("#sidebar");
const key = "quantum-review-23:v1";
const chapters = { "2": "波函数与薛定谔方程", "3": "量子力学中的力学量" };
const lessons = parse(lessonText + "\n" + observableText).map(({ header: [id, title, subtitle], fields }) => ({ id, title, subtitle, fields }));
const questions = parse(homeworkText + "\n" + examText).map(({ header: [id, section, source, title], fields }) => ({ id, section, source, title, fields }));
const lessonMap = new Map(lessons.map(item => [item.id, item]));
const questionMap = new Map(questions.map(item => [item.id, item]));
const filters = { query: "", chapter: "", source: "" };
let state = { lessons: {}, questions: {}, last: "" };
let storageAvailable = true;
try {
  const previous = JSON.parse(localStorage.getItem(key));
  if (previous && typeof previous === "object") state = { ...state, ...previous };
} catch {
  storageAvailable = false;
}

function parse(text) {
  return text.trim().split(/\n(?=# )/).map(record => {
    const [heading, ...lines] = record.trim().split(/\r?\n/);
    const fields = Object.fromEntries(lines.filter(Boolean).map(line => {
      const separator = line.indexOf("|");
      return [line.slice(0, separator), line.slice(separator + 1)];
    }));
    return { header: heading.slice(2).split("|"), fields };
  });
}

function citations({ id, source }) {
  if (source.startsWith("教材")) return [source + "习题", ...(id === "h2book5" ? ["教材第二章式（2.6.14）"] : [])];
  if (source === "云课堂 · 第一次作业") return ["《云课堂第一次作业.jpg》"];
  if (source === "云课堂 · 第二次作业") return ["《云课堂第二次作业.jpg》"];
  if (id.startsWith("e20")) return ["《2020应物量子力学期中卷（已做）.docx》"];
  if (id.startsWith("e21")) return ["《量子力学21级回忆.docx》"];
  if (id.startsWith("e22a")) return ["《22级量子力学期中考试回忆（不完整，可能有错误，仅供参考）.docx》"];
  return ["《量子力学22级回忆 (1).docx》"];
}

function save() {
  try {
    localStorage.setItem(key, JSON.stringify(state));
    return true;
  } catch {
    storageAvailable = false;
    return false;
  }
}

function escape(value) {
  const characters = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(value ?? "").replace(/[&<>"']/g, character => characters[character]);
}

function format(value) {
  return String(value ?? "").split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g).map((part, index) => {
    if (index % 2 === 0) return escape(part);
    const displayMode = part.startsWith("$$");
    const marker = displayMode ? 2 : 1;
    return '<span class="math-token">' + katex.renderToString(part.slice(marker, -marker), {
      displayMode, strict: "ignore", throwOnError: false, output: "htmlAndMathml"
    }) + "</span>";
  }).join("");
}

function fieldsOutsideMath(value) {
  const parts = [""];
  for (const [index, token] of value.split(/(\$[^$\n]+\$)/g).entries()) {
    if (index % 2) {
      parts[parts.length - 1] += token;
    } else {
      const [first, ...rest] = token.split("|");
      parts[parts.length - 1] += first;
      parts.push(...rest);
    }
  }
  return parts;
}

function explanation(value) {
  const sentences = [""];
  for (const [index, token] of value.split(/(\$[^$\n]+\$)/g).entries()) {
    if (index % 2) {
      sentences[sentences.length - 1] += token;
    } else {
      const [first, ...rest] = token.split(/(?<=。)/);
      sentences[sentences.length - 1] += first;
      sentences.push(...rest);
    }
  }
  const paragraphs = [];
  for (const sentence of sentences.filter(Boolean)) {
    const last = paragraphs[paragraphs.length - 1];
    if (last && last.length < 110) paragraphs[paragraphs.length - 1] += sentence;
    else paragraphs.push(sentence);
  }
  return paragraphs.map(paragraph => "<p>" + format(paragraph) + "</p>").join("");
}

function button(route, label, variant = "") {
  return '<a class="button ' + variant + '" href="#' + route + '">' + format(label) + "</a>";
}

function header(title, description, back = "") {
  return '<header class="page-head">' + back + "<h1>" + format(title) + "</h1><p class=\"muted\">" +
    format(description) + "</p></header>";
}

function lessonLinks(chapter, active = "") {
  return '<div class="side-list">' + lessons.filter(item => item.id[0] === chapter).map(item =>
    '<a class="side-link" href="#lesson/' + item.id + '"' + (item.id === active ? ' aria-current="page"' : "") +
    '><span class="number">' + item.id + "</span><span>" + escape(item.title) + "</span>" +
    (state.lessons[item.id]?.passed ? '<span class="side-count" aria-label="测验通过">✓</span>' : "") + "</a>"
  ).join("") + "</div>";
}

function drawSidebar(active = "") {
  sidebar.innerHTML = '<p class="side-label">课程目录</p>' + Object.entries(chapters).map(([id, title]) =>
    '<details class="side-group" open><summary>第' + (id === "2" ? "二" : "三") + "章 · " + title + "</summary>" +
    lessonLinks(id, active) + "</details>"
  ).join("");
}

function questionLinks(items, empty = "没有符合条件的题目。") {
  if (!items.length) return '<p class="muted">' + empty + "</p>";
  return '<ul class="list">' + items.map(item => {
    const status = state.questions[item.id]?.status;
    return '<li><a href="#question/' + item.id + '"><span>' + format(item.title) + "<small>" + escape(item.source) +
      " · 对应 " + item.section + "</small></span>" + (status
        ? '<span class="status ' + (status === "已掌握" ? "" : "retry") + '">' + escape(status) + "</span>"
        : '<span aria-hidden="true">→</span>') + "</a></li>";
  }).join("") + "</ul>";
}

function home() {
  const passed = lessons.filter(item => state.lessons[item.id]?.passed).length;
  const [previousPage, previousId] = state.last.split("/");
  const canResume = previousPage === "lesson" ? lessonMap.has(previousId) : questionMap.has(previousId);
  return '<section class="hero"><div><span class="tag">第二、三章复习</span><h1>量子力学</h1>' +
    '<p>从看懂波函数开始，一步步学会推公式、做作业和写期中题。</p><div class="actions">' +
    button(canResume ? state.last : "lesson/2.1", canResume ? "继续上次学习" : "从第一节开始", "primary") +
    button("bank", "浏览作业与期中", "secondary") + '</div></div><div class="formula-board">' +
    format("$i\\hbar\\frac{\\partial\\Psi}{\\partial t}=\\hat H\\Psi$") +
    "<p>波函数如何随时间变化</p></div></section>" +
    '<section class="section"><div class="section-head"><h2>课程目录</h2><span class="muted">' + passed +
    ' / 16 节测验通过</span></div><progress class="progress" aria-label="课程测验通过进度" max="16" value="' +
    passed + '"></progress><div class="chapter-grid section">' + Object.entries(chapters).map(([id, title]) =>
      '<section class="card chapter-card"><header><h3>第' + (id === "2" ? "二" : "三") + "章 · " + title +
      "</h3></header>" + lessonLinks(id) + "</section>"
    ).join("") + "</div></section>";
}

function reveal(label, body) {
  return '<details class="reveal"><summary>' + label + "</summary><p>" + format(body) + "</p></details>";
}

function lessonPage(item) {
  const { id, title, subtitle, fields } = item;
  const previous = state.lessons[id] ?? {};
  const quiz = fieldsOutsideMath(fields["测验"]);
  const practice = fieldsOutsideMath(fields["练习"]);
  const index = lessons.indexOf(item);
  const related = questions.filter(question => question.section === id);
  const parts = [["基础", "前置知识"], ["概念", "概念讲解"], ["推导", "分步推导"], ["例题", "例题演示"]];
  const cards = parts.map(([name, label]) => {
    const value = fields[name];
    const separator = value.indexOf("|");
    return '<section class="card ' + (name === "例题" ? "example" : "") + '"><span class="eyebrow">' + label +
      "</span><h2>" + format(value.slice(0, separator)) + "</h2>" + explanation(value.slice(separator + 1)) + "</section>";
  }).join("");
  const choices = quiz.slice(1, 4).map((choice, i) =>
    '<label><input type="radio" name="choice" value="' + i + '"' + (previous.choice === i ? " checked" : "") +
    " required><span>" + format(choice) + "</span></label>"
  ).join("");
  const feedback = previous.passed ? "答对了。" + quiz[5] : previous.wrong ? "这次答错了，已加入错题回顾。" : "";
  const source = id.startsWith("2.") ? "《2波函数与薛定谔方程.pptx》" : "《第三章  量子力学中的力学量.pptx》";
  return header(id + " " + title, subtitle, '<p class="breadcrumb"><a href="#home">学习首页</a> / 第' +
    (id[0] === "2" ? "二" : "三") + "章</p>") + '<div class="reader">' + cards +
    '<section class="card practice"><span class="eyebrow">独立练习 · 站内自编</span><h2>' + format(practice[0]) +
    "</h2><p>" + format(practice[1]) + "</p>" + reveal("看提示", practice[2]) + reveal("核对解答", practice[3]) + "</section>" +
    '<section class="card" id="quiz"><h2>本节小测</h2><p class="source">来源　站内自编，依据本节课件</p>' +
    '<form id="quiz-form"><fieldset style="border:0;padding:0;margin:0;min-width:0"><legend>' + format(quiz[0]) +
    '</legend><div class="quiz-options">' + choices + '</div></fieldset><button class="button primary">提交答案</button></form>' +
    '<p class="feedback' + (previous.wrong ? " retry" : "") + '" id="quiz-feedback" aria-live="polite">' +
    format(feedback) + "</p></section>" +
    (related.length ? '<section class="card"><h2>对应作业与期中题</h2>' + questionLinks(related) + "</section>" : "") +
    '<p class="source">课节来源　' + source + "。本节例题、练习和小测为站内自编或教学改写。</p>" +
    '<div class="lesson-footer">' + (index ? button("lesson/" + lessons[index - 1].id, "← 上一节") : button("home", "← 课程目录")) +
    (index + 1 < lessons.length ? button("lesson/" + lessons[index + 1].id, "下一节 →", "primary") : button("bank", "进入题库 →", "primary")) +
    "</div></div>";
}

function bank() {
  const sources = [...new Set(questions.map(item => item.source))].sort((a, b) => a.localeCompare(b, "zh"));
  return header("作业与期中", "按章节、作业批次或试卷筛选。每题都标有来源，可以直接回到相关课节。") +
    '<div class="card filterbar"><label>搜索题目<input id="query" type="search" placeholder="题号、知识点或题干" value="' +
    escape(filters.query) + '"></label><label>章节<select id="chapter"><option value="">全部章节</option>' +
    Object.keys(chapters).map(id => '<option value="' + id + '"' + (filters.chapter === id ? " selected" : "") +
      ">第" + (id === "2" ? "二" : "三") + "章</option>").join("") +
    '</select></label><label>题目来源<select id="source"><option value="">全部来源</option>' + sources.map(source =>
      '<option value="' + escape(source) + '"' + (filters.source === source ? " selected" : "") + ">" + escape(source) + "</option>"
    ).join("") + '</select></label></div><p class="muted" id="bank-count" aria-live="polite"></p><div id="bank-results"></div>' +
    '<details class="reveal"><summary>来源核对说明</summary><p>教材按勾选照片收录，云课堂按两张作业截图收录，试卷按应物期中卷和三份往年回忆材料收录。原题区保留各份材料的文字、符号和小问，公式用 LaTeX 排版。回忆版以回忆材料为准。补充条件和材料差异见题页的题源注记。</p></details>';
}

const steps = [["切入", "切入提示"], ["列式", "列式提示"], ["步骤", "详细解析"], ["考场", "考场写法"]];

function questionPage(item) {
  const { id, section, title, source, fields } = item;
  const entry = state.questions[id] ?? {};
  const original = fields["题干"].split("⏎").map(line => {
    const className = line.startsWith("$$") ? ' class="original-formula"' : "";
    return "<p" + className + ">" + format(line) + "</p>";
  }).join("");
  const sourceNote = fields["注记"] ?
    '<aside class="source-note"><strong>题源注记</strong><p>' + format(fields["注记"]) + "</p></aside>" : "";
  return header(title, source, '<p class="breadcrumb"><a href="#bank">作业与期中</a></p>') +
    '<div class="reader"><section class="card"><h2>原题</h2><div class="original-question">' + original +
    '</div><div class="source"><strong>题源</strong><ul>' +
    citations(item).map(source => "<li>" + escape(source) + "</li>").join("") +
    "</ul></div>" + sourceNote + '<div class="actions section">' + button("lesson/" + section, "补基础 · " + section + " " + lessonMap.get(section).title) +
    '</div></section><section class="card practice"><h2>先自己做</h2><div class="notes"><label for="notes">作答草稿</label>' +
    '<textarea id="notes" placeholder="写下已知条件、打算用的公式，或卡住的那一步。">' + escape(entry.note) +
    '</textarea><p class="source" id="save-status" aria-live="polite">' + (storageAvailable ? "草稿保存在当前浏览器。" : "浏览器存储不可用。") +
    "</p></div>" + steps.map(([name, label], index) => '<section hidden class="step" data-step="' + index + '"><h3>' + label +
      "</h3>" + explanation(fields[name]) + "</section>").join("") +
    '<button type="button" id="next-step" class="button primary">展开切入提示</button></section><section class="card">' +
    '<h2>记录掌握情况</h2><div class="actions">' + ["已掌握", "待复习", "错题"].map(status =>
      '<button type="button" class="button ' + (entry.status === status ? "primary" : "") + '" data-status="' + status +
      '" aria-pressed="' + (entry.status === status) + '">' + status + "</button>"
    ).join("") + '</div><p class="feedback" id="mark-feedback" aria-live="polite"></p></section></div>';
}

function review() {
  const passed = lessons.filter(item => state.lessons[item.id]?.passed).length;
  const mistakes = lessons.filter(item => state.lessons[item.id]?.wrong);
  const marked = questions.filter(item => state.questions[item.id]?.status);
  const mastered = marked.filter(item => state.questions[item.id].status === "已掌握");
  const pending = marked.filter(item => state.questions[item.id].status !== "已掌握");
  return header("错题与进度", storageAvailable ? "学习记录保存在当前浏览器。点击题目即可重做。" : "浏览器存储不可用，记录仅在当前会话保留。") +
    '<div class="card metrics"><div class="metric"><strong>' + passed + ' / 16</strong><span>课节小测通过</span></div>' +
    '<div class="metric"><strong>' + mastered.length + '</strong><span>已掌握题目</span></div>' +
    '<div class="metric"><strong>' + (pending.length + mistakes.length) + "</strong><span>待复习</span></div></div>" +
    '<section class="section"><h2>作业和期中错题</h2>' + questionLinks(pending, "暂无待复习题。") + "</section>" +
    '<section class="section"><h2>课节小测错题</h2>' + (mistakes.length ? '<ul class="list">' + mistakes.map(item =>
      '<li><a href="#lesson/' + item.id + '/quiz"><span>' + item.id + " " + escape(item.title) +
      "</span><span>重做 →</span></a></li>").join("") + "</ul>" : '<p class="muted">暂无小测错题。</p>') + "</section>" +
    '<section class="section"><h2>已掌握的题目</h2>' + questionLinks(mastered, "暂无标记。") + "</section>";
}

function bindBank() {
  function update() {
    const query = filters.query.trim().toLowerCase();
    const items = questions.filter(item =>
      (!filters.chapter || item.section[0] === filters.chapter) &&
      (!filters.source || item.source === filters.source) &&
      (!query || [item.title, item.source, item.section, item.fields["题干"], ...citations(item)]
        .some(value => value.toLowerCase().includes(query)))
    );
    document.querySelector("#bank-count").textContent = "找到 " + items.length + " 道题";
    document.querySelector("#bank-results").innerHTML = questionLinks(items);
  }
  for (const filter of Object.keys(filters)) {
    document.getElementById(filter).addEventListener(filter === "query" ? "input" : "change", event => {
      filters[filter] = event.target.value;
      update();
    });
  }
  update();
}

function bindLesson(item) {
  document.querySelector("#quiz-form").addEventListener("submit", event => {
    event.preventDefault();
    const answer = new FormData(event.target).get("choice");
    if (answer === null) return;
    const choice = Number(answer);
    const quiz = fieldsOutsideMath(item.fields["测验"]);
    const passed = choice === Number(quiz[4]);
    state.lessons[item.id] = { choice, passed, wrong: !passed };
    const persisted = save();
    const feedback = document.querySelector("#quiz-feedback");
    feedback.classList.toggle("retry", !passed);
    feedback.innerHTML = format((passed ? "答对了。" + quiz[5] : "这次答错了，已加入错题回顾。") +
      (persisted ? "" : " 当前浏览器未能保存。"));
    drawSidebar(item.id);
  });
}

function bindQuestion(item) {
  const next = document.querySelector("#next-step");
  let index = 0;
  next.addEventListener("click", () => {
    const panel = document.querySelector('[data-step="' + index + '"]');
    panel.hidden = false;
    index += 1;
    next.hidden = index === steps.length;
    if (!next.hidden) next.textContent = "展开" + steps[index][1];
    panel.tabIndex = -1;
    panel.focus();
  });
  const entry = () => state.questions[item.id] ?? (state.questions[item.id] = {});
  document.querySelector("#notes").addEventListener("input", event => {
    entry().note = event.target.value;
    document.querySelector("#save-status").textContent = save() ? "草稿已保存。" : "浏览器存储不可用。";
  });
  const marks = [...document.querySelectorAll("[data-status]")];
  for (const mark of marks) {
    mark.addEventListener("click", () => {
      entry().status = mark.dataset.status;
      const persisted = save();
      for (const other of marks) {
        other.classList.toggle("primary", other === mark);
        other.setAttribute("aria-pressed", String(other === mark));
      }
      document.querySelector("#mark-feedback").textContent =
        "已标记为" + mark.dataset.status + "。" + (persisted ? "" : " 当前浏览器未能保存。");
    });
  }
}

function render() {
  const [route, id, target] = location.hash.slice(1).split("/");
  const item = route === "lesson" ? lessonMap.get(id) : route === "question" ? questionMap.get(id) : null;
  const nav = route === "question" ? "bank" : route === "lesson" || !route ? "home" : route;
  for (const tab of document.querySelectorAll("[data-nav]")) {
    if (tab.dataset.nav === nav) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  }
  if (item) {
    state.last = route + "/" + id;
    save();
  }
  drawSidebar(item ? (item.section ?? item.id) : "");
  if (route === "lesson" && item) {
    main.innerHTML = lessonPage(item);
    bindLesson(item);
  } else if (route === "question" && item) {
    main.innerHTML = questionPage(item);
    bindQuestion(item);
  } else if (route === "bank") {
    main.innerHTML = bank();
    bindBank();
  } else if (route === "review") {
    main.innerHTML = review();
  } else {
    main.innerHTML = home();
  }
  document.title = "量子力学第二、三章";
  if (target === "quiz") document.querySelector("#quiz")?.scrollIntoView();
  else window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => {
  if (location.hash !== "#main") render();
  main.focus({ preventScroll: true });
});
render();
