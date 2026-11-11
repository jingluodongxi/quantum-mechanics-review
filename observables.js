const observableText = String.raw`
# 3.1|算符的运算规则|先看清谁作用在谁身上
基础|函数输入与输出|算符把一个函数变成另一个函数。设 $D=d/dx$，$X$ 表示乘以 $x$。对 $f=x^2$，先 $X$ 后 $D$ 得 $D(Xf)=3x^2$；先 $D$ 后 $X$ 得 $X(Df)=2x^2$。写 $DXf$ 时最右边先作用。
概念|线性、乘积与对易|线性指 $A(af+bg)=aAf+bAg$，$a,b$ 为常数。对易子 $[A,B]=AB-BA$ 衡量次序改变的效果。单位算符 $I$ 把函数原样返回。加法可交换，乘法一般不可交换。
推导|用测试函数证明对易子|$[X,D]f=x f'-(xf)'$。乘积求导给 $(xf)'=f+xf'$，相减只剩 $-f$。对所有适用的 $f$ 都成立，所以 $[X,D]=-I$。类似地展开 $ABC-BCA$，加减 $BAC$ 可得 $[A,BC]=[A,B]C+B[A,C]$，整个过程中保留原顺序。
例题|求 $[x^2,p_x]$|$p_x=-i\hbar D$。作用在 $f$ 上得 $-i\hbar x^2f'+i\hbar(2xf+x^2f')=2i\hbar xf$。因此 $[x^2,p_x]=2i\hbar x$。
练习|换一下次序|已知 $[x,p_x]=i\hbar I$，求 $[p_x,x]$ 和 $[x,x]$。|按定义把两项写出来。|第一项变号，$[p_x,x]=-i\hbar I$；第二项相减为零。
测验|$ABf$ 中哪一个算符先对 $f$ 作用？|$A$|$B$|两个相加|1|乘积代表 $A(Bf)$。
# 3.2|动量算符与角动量算符|从平面波到转动量子化
基础|平面波与旋转角度|$d e^{ikx}/dx=ik e^{ikx}$，所以 $-i\hbar d/dx$ 作用后得到 $\hbar k$ 倍原函数。旋转角 $\varphi$ 增加 $2\pi$ 后回到同一个构型，普通无自旋转子的角波函数必须单值。
概念|动量和角动量|$\mathbf p=-i\hbar\nabla$，$\mathbf L=\mathbf r\times\mathbf p$。例如 $L_z=xp_y-yp_x=-i\hbar\partial_\varphi$。$L^2=L_x^2+L_y^2+L_z^2$，$[L_x,L_y]=i\hbar L_z$，其余分量循环类推，$[L^2,L_z]=0$。
推导|平面转子为何只许整数|固定轴转动时 $H=L_z^2/(2I)$，$I$ 是转动惯量。先解 $L_zF=m_\ell\hbar F$，两边除以 $-i\hbar$ 得 $F'=im_\ell F$。解为 $F=C e^{im_\ell\varphi}$。$F(\varphi+2\pi)=F(\varphi)$ 给 $C e^{im_\ell\varphi}(e^{2\pi im_\ell}-1)=0$。非零态可约去前因子，于是 $m_\ell$ 是整数。归一化积分是 $2\pi|C|^2$，选 $C=1/\sqrt{2\pi}$。
例题|同能的两个旋转方向|$m_\ell=1$ 和 $-1$ 分别给 $L_z=\hbar$ 和 $-\hbar$，但能量都等于 $\hbar^2/(2I)$，因为能量只含 $m_\ell^2$。$m_\ell=0$ 只有一个平面转子本征态。
练习|角波函数的两个结果|若 $\Psi=(F_1+F_{-1})/\sqrt2$，分别测 $L_z$ 与 $H$ 会得到什么？|先看两种测量是否区分正负号。|$L_z=\pm\hbar$ 各半，能量 $\hbar^2/(2I)$ 的概率为 1。
测验|整数条件由什么给出？|归一化积分本身|绕一圈后的单值性|转动惯量必须是整数|1|周期性要求 $e^{2\pi im_\ell}=1$。
# 3.3|电子在库仑场中的运动|把三维方程拆成径向和角向
基础|球坐标与体积元|用 $r,\theta,\varphi$ 表示距离、极角和方位角。一个薄球壳的体积约为 $4\pi r^2dr$，一般微元是 $r^2\sin\theta\,dr\,d\theta\,d\varphi$。积分中的 $r^2$ 来自几何体积。
概念|中心势、约化质量与分离变量|氢样体系的相对运动用约化质量 $\mu=m_em_N/(m_e+m_N)$，$V=-\gamma/r$，$\gamma=Ze^2/(4\pi\varepsilon_0)$。中心势只依赖 $r$，可写 $\psi=R(r)Y_{\ell m_\ell}$，角向给 $L^2Y=\hbar^2\ell(\ell+1)Y$。
推导|从三维到一维形式|球坐标下 $H=-\frac{\hbar^2}{2\mu r^2}\frac d{dr}(r^2\frac d{dr})+\frac{L^2}{2\mu r^2}-\frac\gamma r$。乘积态代入后，$L^2$ 只对 $Y$ 作用。令 $u=rR$，则 $r^2R'=ru'-u$，求导是 $ru''$。两边乘 $r$ 得 $-\frac{\hbar^2}{2\mu}u''+[\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}-\frac\gamma r]u=Eu$。取物理正则解 $u(0)=0$，束缚态还需在远处衰减。
例题|角动量项为什么像势能|$\ell=1$ 时，有效势为 $\hbar^2/(\mu r^2)-\gamma/r$。第一项在 $r$ 小时增长得更快，表现为离心势垒。$\ell=0$ 时这项消失。
练习|径向归一化|若 $Y$ 已在整个球面上归一化，$R$ 和 $u$ 的归一化积分分别怎么写？|把体积元与角积分分开。|$\int_0^\infty r^2|R|^2dr=1$，也就是 $\int_0^\infty|u|^2dr=1$。
测验|角动量为 $\ell=0$ 时，径向有效势中离心项如何？|等于零|等于库仑项|在原点有限但非零|0|系数 $\ell(\ell+1)$ 为零。
# 3.4|氢原子|区分能级、空间密度和径向概率
基础|概率密度与球壳概率|空间密度 $|\psi|^2$ 是每单位体积的概率。在球对称态中，半径落在 $[r,r+dr]$ 的概率等于密度乘球壳体积，即 $4\pi r^2|\psi|^2dr$。
概念|主量子数与简并|设 $a=\hbar^2/(\mu\gamma)$，氢样能谱 $E_n=-\mu\gamma^2/(2\hbar^2n^2)$。$n=1,2,\ldots$，$\ell=0,\ldots,n-1$，$m_\ell=-\ell,\ldots,\ell$。忽略自旋和精细结构时，固定 $n$ 的轨道简并度为 $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$。
推导|束缚态为何出现 $n$|写 $E=-\hbar^2\kappa^2/(2\mu)$，令 $\rho=2\kappa r$。正则性和远处衰减提示 $u=\rho^{\ell+1}e^{-\rho/2}v$。代入径向方程得 $\rho v''+(2\ell+2-\rho)v'+(1/(\kappa a)-\ell-1)v=0$。幂级数要在非负整数 $n_r$ 终止以保留平方可积解，所以 $1/(\kappa a)=n_r+\ell+1=n$。
例题|最可几半径|基态 $\psi=(\pi a^3)^{-1/2}e^{-r/a}$，球壳密度 $P(r)=4r^2e^{-2r/a}/a^3$。求导得到 $(8/a^3)r e^{-2r/a}(1-r/a)$。$r>0$ 时导数先正后负，峰在 $r=a$。空间密度本身则在原点最高。
练习|数第二能级的态|列出 $n=2$ 的所有 $(\ell,m_\ell)$。|先列 $\ell$，再对每个 $\ell$ 从 $-\ell$ 数到 $\ell$。|$(0,0)$ 和 $(1,-1),(1,0),(1,1)$，共四个轨道态。
测验|基态的最可几半径是多少？|0|$a$|$3a/2$|1|找球壳密度的峰；$3a/2$ 是平均半径。
# 3.5|厄密算符的本征值与本征函数|共轭、实本征值和正交性
基础|内积与共轭转置|定义 $\langle u,v\rangle=\int u^*v\,d\tau$，第一槽复共轭。矩阵的 $A^\dagger$ 等于转置再复共轭。在同一适当定义域上，厄密性表现为 $\langle u,Av\rangle=\langle Au,v\rangle$。对微分算符还要看边界项。
概念|本征方程|$Au=au$ 表示作用后只改变一个倍数。对归一化 $u$，$\langle u,Au\rangle=a$，而 $\langle Au,u\rangle=a^*$，相等故 $a$ 是实数。
推导|为什么不同本征值对应正交|设 $Au=au,Av=bv$。$\langle u,Av\rangle=b\langle u,v\rangle$，$\langle Au,v\rangle=a^*\langle u,v\rangle=a\langle u,v\rangle$。相减得 $(b-a)\langle u,v\rangle=0$。若 $b\ne a$，只剩内积为零；同值子空间可用正交化选基。
例题|动量算符与边界项|分部积分给 $\int_a^b u^*(-i\hbar v')dx=[-i\hbar u^*v]_a^b+\int_a^b(-i\hbar u')^*v\,dx$。周期条件使两端乘积相同，边界项为零。判定真正的自伴性时还要核对伴随算符定义域。
练习|乘积是否厄密|若 $A,B$ 各自厄密，何时 $AB$ 在共同适用的定义域上也满足厄密性？|先把共轭顺序反过来。|$(AB)^\dagger=B^\dagger A^\dagger=BA$，因此需要 $AB=BA$。
测验|$(AB)^\dagger$ 的顺序是？|$A^\dagger B^\dagger$|$B^\dagger A^\dagger$|$AB$|1|伴随乘积的顺序反转。
# 3.6|算符与力学量的关系|从一次测量到平均值和守恒
基础|加权平均与投影|若结果是 $a_i$，概率为 $p_i$，平均值是 $\sum_i p_i a_i$。量子中，展开系数 $c_i=\langle u_i,\psi\rangle$ 给 $p_i=|c_i|^2$。同一本征值若有多个正交分量，把对应概率相加。
概念|测量与期望值|对归一态，$\langle A\rangle=\langle\psi,A\psi\rangle$。在离散正交本征基中把 $\psi=\sum_i c_i u_i$ 代入，正交性使非对角项消去，留下 $\sum_i |c_i|^2a_i$。连续动量用密度 $|\tilde\psi(p)|^2$，按动量区间积分。
推导|平均值为什么随时间变化|对 $\langle\psi,A\psi\rangle$ 求导有三项。用 $\partial_t\psi=H\psi/(i\hbar)$，左槽复共轭得到相反号，再把 $H$ 移到右槽。故 $\frac{d\langle A\rangle}{dt}=\langle\partial_t A\rangle+\frac1{i\hbar}\langle[A,H]\rangle$。若算符不显含时间且与 $H$ 对易，则守恒。
例题|位置和动量的演化|$H=p^2/(2m)+V(x)$。$[x,p^2]=[x,p]p+p[x,p]=2i\hbar p$，故 $d\langle x\rangle/dt=\langle p\rangle/m$。又 $[p,V]=-i\hbar V'$，所以 $d\langle p\rangle/dt=-\langle V'\rangle$。
练习|只可能测到哪些能量|若能量值 $E,3E$ 的概率各为 $1/2$，平均能量是多少？一次测量能得到这个平均值吗？|分别列出谱和概率加权结果。|平均是 $2E$；在 $E>0$ 且题设只有这两种结果时，单次测量只有 $E$ 或 $3E$。
测验|对不显含时间的算符，哪个条件足以保证守恒？|$[A,H]=0$|$A+H=0$ 以外都不行|$\langle A\rangle$ 必须为零|0|对易子项和显式时间导数项都为零。
# 3.7|共同本征函数|判断哪些量可以同时确定
基础|先在一个本征子空间里看|若 $Au=au$ 且 $[A,B]=0$，则 $A(Bu)=B(Au)=aBu$。这意味着 $B$ 把 $A$ 的本征子空间映到它自己，其中也包括零向量。
概念|共同本征基与完全集|在课内离散情形，对易的厄密算符可在每个简并子空间里继续对角化，选出共同本征基。完全集要求本征值的组合足以区分所选基态。氢原子忽略自旋时可用 $H,L^2,L_z$。
推导|为什么任意态仍可能没有确定值|共同本征态 $u_j$ 同时满足 $Au_j=a_j u_j$、$Bu_j=b_j u_j$。叠加态中若两个 $a_j$ 不同，作用 $A$ 后各分量获得不同倍数，整体一般无法提出一个共同本征值。因此对易只允许同时确定的态，给定态仍要逐个判断。
例题|氢原子量子数的作用|固定 $n=2$ 时能量不能区分 $2s$ 和 $2p$；$L^2$ 可用 $\ell=0,1$ 区分。对三个 $2p$ 态再测 $L_z$，可用 $m_\ell=-1,0,1$ 区分。
练习|简并子空间内再选基|在二维空间里 $A=2I$，$B$ 在基 $e_1,e_2$ 中的矩阵是 $\begin{pmatrix}0&1\\1&0\end{pmatrix}$。找一组共同本征向量。|$B$ 把两坐标交换，试一下和与差。|$(e_1+e_2)/\sqrt2$ 和 $(e_1-e_2)/\sqrt2$，$A$ 本征值都为 2，$B$ 分别为 $1,-1$。
测验|两个对易的厄密算符，在任意态下都有确定值吗？|总是有|只有态属于相应的共同本征子空间才有|只要态已归一就有|1|归一化只保证总概率为 1。
# 3.8|测不准关系|从方差推到位置和动量的限制
基础|方差和标准差|$\Delta A=\sqrt{\langle A^2\rangle-\langle A\rangle^2}$。例如 $-2,2$ 各半时平均为零，平方平均为 4，标准差为 2。标准差描述重复制备同一态后测量结果的散布。
概念|罗伯逊关系|对适当定义域内的归一态，$\Delta A\Delta B\ge\frac12|\langle[A,B]\rangle|$。$[x,p_x]=i\hbar I$ 给 $\Delta x\Delta p_x\ge\hbar/2$。右侧为零时，此不等式只给出平凡下界。
推导|从柯西–施瓦茨到对易子|令 $u=(A-\langle A\rangle)\psi$、$v=(B-\langle B\rangle)\psi$。两范数正好是 $\Delta A,\Delta B$。柯西–施瓦茨给乘积至少为 $|\langle u,v\rangle|$，而模至少是虚部的绝对值。用 $\operatorname{Im}z=(z-z^*)/(2i)$，交换两内积后均值常数消去，留下 $\langle[A,B]\rangle/(2i)$。
例题|用不确定关系估算零点能|取均值为零，设 $s=\Delta x$，则谐振子 $\langle H\rangle\ge\hbar^2/(8ms^2)+m\omega^2s^2/2$。对 $s$ 求导得 $-\hbar^2/(4ms^3)+m\omega^2s=0$，于是 $s^2=\hbar/(2m\omega)$。代入两项各是 $\hbar\omega/4$，合计 $\hbar\omega/2$，基态高斯达到下界。
练习|角动量的不确定性|在 $L_z$ 本征值为 $m_\ell\hbar$ 的态，给出 $\Delta L_x\Delta L_y$ 的下界。|把 $[L_x,L_y]=i\hbar L_z$ 代入。|下界是 $|m_\ell|\hbar^2/2$。
测验|$\langle A\rangle=0$ 时，$\Delta A$ 必定为零吗？|必定|不一定，要看 $\langle A^2\rangle$|只在 $\langle A^2\rangle>0$ 时为零|1|均值可以因正负抵消，平方项不会。
`;
