const homeworkText = String.raw`
# h2a1|2.1|第二章 · 第一次作业|第1题 · 右半轴上的波函数
题干|一维粒子在 $x>0$ 时 $\psi=Axe^{-\lambda x}$，在 $x\le0$ 时为零，$\lambda>0$。求（1）归一化波函数（2）位置概率分布（3）最可几位置。
切入|先取模平方。因为左半轴上波函数为零，归一化积分从 0 到无穷。
列式|$1=|A|^2\int_0^\infty x^2e^{-2\lambda x}dx$。换元 $u=2\lambda x$ 后，$x^2dx=u^2du/(2\lambda)^3$。
步骤|分部积分两次，$\int_0^\infty u^2e^{-u}du=2\int_0^\infty ue^{-u}du=2$。端点的多项式乘指数项都为零。选实正 $A=2\lambda^{3/2}$，所以 $\rho=4\lambda^3 x^2e^{-2\lambda x}$（$x>0$）。对密度求导得到 $8\lambda^3xe^{-2\lambda x}(1-\lambda x)$；在 $1/\lambda$ 前正、后负，且两端为零。
考场|由归一化 $1=|A|^2/(4\lambda^3)$ 得 $\psi=2\lambda^{3/2}xe^{-\lambda x}$（右半轴）。$\rho=|\psi|^2$，由 $\rho'=0$ 及导数变号得 $x_{\max}=1/\lambda$。
# h2a2|2.7|第二章 · 第一次作业|第2题 · 带时间相位的高斯态
题干|线性谐振子 $U=m\omega^2x^2/2$，$\Psi=Ae^{-\alpha^2x^2/2-i\omega t/2}$，$\alpha=\sqrt{m\omega/\hbar}$。求（1）归一化因子（2）何处发现振子最可能。题图遮挡处的 $i$ 由此前复习对话补足。
切入|纯虚指数 $e^{-i\omega t/2}$ 和它的共轭相乘是 1。
列式|$1=|A|^2\int_{\mathbb R}e^{-\alpha^2x^2}dx$。换 $u=\alpha x$，$dx=du/\alpha$，两端仍是无穷。
步骤|高斯积分给 $1=|A|^2\sqrt\pi/\alpha$，取 $A=\sqrt{\alpha/\sqrt\pi}$。密度导数为 $-2\alpha^2x\rho$，原点左侧为正、右侧为负，故在原点取最大。
考场|$\rho=|A|^2e^{-\alpha^2x^2}$，归一化得 $A=(\alpha^2/\pi)^{1/4}$，最大值位置 $x=0$。
# h2a3|2.5|第二章 · 第一次作业|第3题 · 判断三个波函数是否为定态
题干|判断（1）$u(x)e^{ix-iEt/\hbar}+U(x)e^{-ix-iEt/\hbar}$，（2）$u(x)e^{-iE_1t/\hbar}+u(x)e^{-iE_2t/\hbar}$（$E_1\ne E_2$），（3）$u(x)e^{-iEt/\hbar}+u(x)e^{iEt/\hbar}$。第一式保留题图中的大小写。按题意假定所列波函数是在同一时间无关体系中讨论的候选表达式。
切入|看整式能否提出一个共同的单频时间相位。
列式|（1）提出 $e^{-iEt/\hbar}$。（2）提出第一个时间因子后，第二项仍含 $e^{-i(E_2-E_1)t/\hbar}$。（3）用欧拉公式合并。
步骤|（1）得到 $[u(x)e^{ix}+U(x)e^{-ix}]e^{-iEt/\hbar}$，方括号只依赖位置，若为非零方程解则为定态。（2）两个不同频率无法合成单一频率，密度包含 $2|u|^2[1+\cos((E_2-E_1)t/\hbar)]$。（3）等于 $2u\cos(Et/\hbar)$，一般也不是定态，$E=0$ 是退化例外。第二、三式用同一个空间因子而配不同能量，在同一固定哈密顿量下通常也不构成有效解。
考场|（1）可提共同能量相位，是定态形式。（2）在 $E_1\ne E_2$ 时不能。（3）$E\ne0$ 时密度随时间变化。
# h2b1|2.6|第二章 · 第二次作业|第1题 · 从零求无限深势阱
题干|粒子在 $0\le x\le a$ 内势能为 0，阱外势能无穷大。求能级与波函数。
切入|阱外不能出现，先在 $0<x<a$ 写定态方程，再用两端的零边界。
列式|$\phi''+2mE\phi/\hbar^2=0$。令 $k^2=2mE/\hbar^2$，写 $\phi=A\sin kx+B\cos kx$。$E=0$ 时是直线解，两端为零只给零解；$E<0$ 时指数解也只能同时在两端为零而平凡。
步骤|左端 $\sin0=0,\cos0=1$，故 $B=0$。右端要 $A\sin ka=0$，非零波函数需 $A\ne0$，所以 $ka=n\pi$。归一用 $\sin^2u=(1-\cos2u)/2$，积分为 $a/2$，选 $A=\sqrt{2/a}$。
考场|$\phi_n=\sqrt{2/a}\sin(n\pi x/a)$（阱外为零），$E_n=n^2\pi^2\hbar^2/(2ma^2)$，$n=1,2,\ldots$。
# h2b2|2.5|第二章 · 第二次作业|第2题 · 对称势的宇称
题干|一维势 $U(-x)=U(x)$。证明定态波函数具有确定宇称。对通常的一维非简并束缚态给出结论，并说明一般简并情形。
切入|把解 $\phi(x)$ 反射成 $\phi(-x)$，看能量是否改变。
列式|设 $P\phi(x)=\phi(-x)$。两次求导消去反射给的负号，偶势不变，所以 $[H,P]=0$。
步骤|非简并时同能量的解只能相差一个常数，$\phi(-x)=c\phi(x)$。再把 $x$ 替成 $-x$，得 $\phi(x)=c^2\phi(x)$，故 $c=\pm1$。一般有简并时，可以在该能量子空间选定宇称的基，任意线性组合则可能没有确定宇称。
考场|由 $[H,P]=0$ 且 $P^2=I$，可取共同本征函数，$P$ 本征值为 $\pm1$；非简并定态本身具有确定宇称。
# h2b3|2.6|第二章 · 第二次作业|第3题 · 三角函数改写成能量展开
题干|宽为 $a$ 的无限深势阱中，$\Psi(x)=\frac4{\sqrt a}\sin(\pi x/a)\cos^2(\pi x/a)$。求能量的可能值及相应概率。
切入|找能量本征态就是找 $\sin(n\pi x/a)$，先处理 $\cos^2$。
列式|令 $u=\pi x/a$，$\sin u\cos^2u=(\sin u+\sin3u)/4$，可用 $\cos^2u=(1+\cos2u)/2$ 和积化和差推出。
步骤|改写得 $\Psi=(\sin u+\sin3u)/\sqrt a=(\phi_1+\phi_3)/\sqrt2$。两基函数正交，系数平方和等于 1。由于 $E_n=n^2E_1$，$E_3=9E_1$。
考场|$\Psi=(\phi_1+\phi_3)/\sqrt2$，故测得 $E_1=\pi^2\hbar^2/(2ma^2)$ 或 $E_3=9E_1$，概率均为 $1/2$。
# h2b4|2.6|第二章 · 第二次作业|第4题 · 势阱左四分之一
题干|无限深势阱的粒子处于第 $n$ 能级。求（1）离左壁 $a/4$ 内的概率（2）哪些 $n$ 使概率最大（3）$n\to\infty$ 的极限及其意义。
切入|积分区域只取 $0$ 到 $a/4$，仍使用整个势阱上归一的波函数。
列式|$P_n=\frac2a\int_0^{a/4}\sin^2(n\pi x/a)dx=\frac14-\frac{\sin(n\pi/2)}{2n\pi}$。
步骤|$n$ 为偶数时正弦为 0。$n=1\bmod4$ 时正弦为 1，概率低于 $1/4$。$n=3\bmod4$ 时正弦为 −1，这一组的增量 $1/(2n\pi)$ 随 $n$ 下降，所以最大在 $n=3$。高 $n$ 时增量被 $1/(2n\pi)$ 夹到零，区间概率趋于经典均匀分布的长度比例。
考场|$P_n=1/4-\sin(n\pi/2)/(2n\pi)$；$P_{\max}=1/4+1/(6\pi)$（$n=3$），极限 $1/4$。
# h2b5|2.6|第二章 · 第二次作业|第5题 · 一埃势阱的跃迁
题干|把电子近似看成宽 $1\,\text{Å}$ 的一维无限深势阱中的粒子。（1）求最低两个能级间隔（2）求由高向低跃迁的发射波长。
切入|能级序列按 $n^2$ 变化，最低两个是 $n=1,2$。
列式|$\Delta E=E_2-E_1=3\pi^2\hbar^2/(2m_ea^2)$，光子满足 $\Delta E=hc/\lambda$。
步骤|$a=10^{-10}\,\mathrm m$。代 $m_e\approx9.11\times10^{-31}\,\mathrm{kg}$、$\hbar\approx1.055\times10^{-34}\,\mathrm{J\,s}$，得 $\Delta E\approx1.81\times10^{-17}\,\mathrm J\approx113\,\mathrm{eV}$。用 $hc\approx1240\,\mathrm{eV\,nm}$ 得 $\lambda\approx11.0\,\mathrm{nm}$。
考场|$\Delta E=3E_1\approx113\,\mathrm{eV}$，$\lambda=hc/\Delta E\approx11.0\,\mathrm{nm}$。
# h2b6|2.6|第二章 · 第二次作业|第6题 · 三维矩形势阱
题干|粒子在宽分别为 $a_1,a_2,a_3$ 的三维无限深势阱中运动。求能级和波函数。把坐标原点取在一个角上。
切入|三方向互相独立，波函数可写成三个一维函数的乘积。
列式|$H=H_x+H_y+H_z$。代 $\psi=X(x)Y(y)Z(z)$ 后，$H_x$ 只对 $X$ 作用，所以三个分能量相加。
步骤|每方向都满足两端为零，得到 $k_i=n_i\pi/a_i$，$n_i\ge1$。每个因子系数是 $\sqrt{2/a_i}$，三重归一积分分成三个等于 1 的一维积分。
考场|$E=\frac{\pi^2\hbar^2}{2m}\sum_{i=1}^3 n_i^2/a_i^2$，$\psi=\sqrt{8/(a_1a_2a_3)}\prod_{i=1}^3\sin(n_i\pi x_i/a_i)$，盒外为零。
# h2c5|2.7|第二章 · 第三次作业|2.5 · 谐振子第一激发态的密度峰
题干|求一维谐振子第一激发态最可能的位置。$\phi_1$ 正比于 $x e^{-\alpha^2x^2/2}$，$\alpha=\sqrt{m\omega/\hbar}$。
切入|把波函数平方后再找峰。奇函数波函数的密度是偶函数。
列式|$\rho=Cx^2e^{-\alpha^2x^2}$，$\rho'=2Cxe^{-\alpha^2x^2}(1-\alpha^2x^2)$。
步骤|驻点为 $0,\pm1/\alpha$。原点是节点，密度为零；两端趋零，正半轴在 $1/\alpha$ 前升后降，负半轴由对称性得到另一个峰。
考场|最可几位置 $x=\pm1/\alpha=\pm\sqrt{\hbar/(m\omega)}$。
# h2c10|2.7|第二章 · 第三次作业|2.10 · 电场中的带电谐振子
题干|电荷 $q$ 的谐振子受外电场 $\mathcal E$，$V(x)=m\omega^2x^2/2-q\mathcal E x$。求能量本征值和本征函数。也见 22 级期中回忆二。
切入|配方会把一次项变成振动中心的平移。
列式|设 $x_0=q\mathcal E/(m\omega^2)$，$V_0=m\omega^2 x_0^2/2$。展开 $(x-x_0)^2$ 检查一次项的符号。
步骤|$V=\frac12m\omega^2(x-x_0)^2-V_0$。令 $y=x-x_0$ 后 $dy/dx=1$，二阶导数形式保持，积分限仍是整条实轴。新方程 $H_0(y)\psi=(E+V_0)\psi$，所以等间隔保持，只整体降低 $V_0$。
考场|$E_n=\hbar\omega(n+1/2)-q^2\mathcal E^2/(2m\omega^2)$，$\psi_n(x)=\phi_n^{(0)}(x-x_0)$。
# h2c11|2.7|第二章 · 第三次作业|2.11 · 半边谐振子
题干|$x<0$ 势能为无穷，$x>0$ 势能为 $m\omega^2x^2/2$。求能级。
切入|墙在原点，要求 $\psi(0)=0$。哪些整轴振子本征函数在原点为零？
列式|整轴第 $n$ 态的宇称是 $(-1)^n$，因此取 $n=2j+1$，$j=0,1,2,\ldots$。
步骤|每个右半轴解可以奇延拓到左半轴。墙上波函数为零，所以延拓后连续，且一阶导从两侧相同，可作为整轴谐振子解。归一的奇态两侧各占一半，截到右侧须乘 $\sqrt2$。
考场|$E_j=(2j+3/2)\hbar\omega$，右侧本征函数为 $\sqrt2\phi_{2j+1}$，左侧为零。
# h3-1|2.7|第三章 · 教材题|3.1 · 谐振子基态的能量分配
题干|基态 $\psi=\sqrt{\alpha/\sqrt\pi}\,e^{-\alpha^2x^2/2-i\omega t/2}$。求（1）势能期望（2）动能期望（3）动量概率密度。
切入|取模平方先消掉时间相位。$|\psi|^2$ 是方差 $1/(2\alpha^2)$ 的高斯。
列式|$\int x^2e^{-\alpha^2x^2}dx=\sqrt\pi/(2\alpha^3)$，可对 $\int e^{-sx^2}dx=\sqrt{\pi/s}$ 关于 $s$ 求导得到。
步骤|$\langle V\rangle=m\omega^2/(4\alpha^2)=\hbar\omega/4$。总能量为 $\hbar\omega/2$，所以 $\langle T\rangle=\hbar\omega/4$。动量振幅为 $(2\pi\hbar)^{-1/2}\int e^{-ipx/\hbar}\psi\,dx$。高斯积分 $\int e^{-\alpha^2x^2/2-iqx}dx=\sqrt{2\pi}e^{-q^2/(2\alpha^2)}/\alpha$，令 $q=p/\hbar$ 后取模平方。
考场|$\langle V\rangle=\langle T\rangle=\hbar\omega/4$，$|\tilde\psi(p)|^2=(\sqrt\pi\hbar\alpha)^{-1}e^{-p^2/(\hbar^2\alpha^2)}$。
# h3-2|3.4|第三章 · 教材题|3.2 · 氢原子基态的五个量
题干|$\psi=e^{-r/a_0}/\sqrt{\pi a_0^3}$。求（1）平均半径（2）势能平均（3）最可几半径（4）平均动能（5）动量概率密度。记库仑势为 $-\gamma/r$。
切入|半径积分前先把角度积掉，留下球壳密度 $4r^2e^{-2r/a_0}/a_0^3$。
列式|对（1）、（2）分别把 $r$、$1/r$ 乘进球壳密度。用 $\int_0^\infty r^n e^{-br}dr=n!/b^{n+1}$，它由分部积分递推，$b=2/a_0$。
步骤|（1）$4(3!)(a_0/2)^4/a_0^3=3a_0/2$。（2）$-\gamma\cdot4(a_0/2)^2/a_0^3=-\gamma/a_0$。（3）球壳密度导数含 $r(1-r/a_0)$，正半轴峰在 $a_0$。（4）用 $T=E-V$、$E=-\gamma/(2a_0)$ 得 $\gamma/(2a_0)$。（5）取极轴沿 $\mathbf p$，角积分为 $4\pi\sin(kr)/(kr)$，$k=p/\hbar$。径向用 $\int_0^\infty r e^{-br}\sin kr\,dr=2bk/(b^2+k^2)^2$，其中 $b=1/a_0$；代入归一化的傅里叶变换再取模平方。
考场|前四项依次为 $3a_0/2,-\gamma/a_0,a_0,\gamma/(2a_0)$。动量矢量密度 $|\tilde\psi(\mathbf p)|^2=\frac{8a_0^3}{\pi^2\hbar^3}[1+(a_0p/\hbar)^2]^{-4}$；若只问模长，乘 $4\pi p^2$。
# h3-3|2.4|第三章 · 教材题|3.3 · 氢原子电子的电流密度
题干|证明在 $\psi_{n\ell m}$ 态中，球坐标电流密度的径向、极角分量为零，并求方位分量。
切入|电流密度是概率流乘电子电荷 $-e$。把 $\psi$ 写成实函数 $f(r,\theta)$ 乘 $e^{im\varphi}$。
列式|$\mathbf J=-e(\hbar/m_e)\operatorname{Im}(\psi^*\nabla\psi)$。球坐标的方位梯度分量是 $(r\sin\theta)^{-1}\partial_\varphi$。
步骤|径向乘积 $\psi^*\partial_r\psi=f\,\partial_rf$ 为实数，极角同理。方位导数给 $\partial_\varphi\psi=im\psi$，虚部就是 $m|\psi|^2$。负号来自电子带负电，$m$ 是磁量子数。
考场|$J_r=J_\theta=0$，$J_\varphi=-e\hbar m|\psi|^2/(m_e r\sin\theta)$。
# h3-4|3.2|第三章 · 教材题|3.4 · 电流环与轨道磁矩
题干|（1）求圆周电流磁矩。（2）用 3.3 的氢原子电流证明轨道磁矩及磁旋比。
切入|圆环半径 $R=r\sin\theta$。环形细管横截面 $ds$ 携带电流 $dI=J_\varphi ds$。
列式|SI 制下 $\mu_z=I\pi R^2$，右手定方向；高斯制下公式多除以光速 $c$。体积元 $d\tau=2\pi R\,ds$。
步骤|$d\mu_z=\pi R^2 J_\varphi ds=\frac12R J_\varphi d\tau$。代 $J_\varphi=-e\hbar m|\psi|^2/(m_eR)$ 后，$R$ 正好抵消，积分只剩 $\int|\psi|^2d\tau=1$。与 $L_z=m\hbar$ 比较；$m=0$ 时两者同为零，用比例关系表达。
考场|SI 制 $\mu_z=-e\hbar m/(2m_e)$，$\mu_z=-eL_z/(2m_e)$；高斯制两式多除以 $c$。
# h3-5|3.2|第三章 · 教材题|3.5 · 刚性转子的两种转动
题干|刚性转子（1）绕固定轴（2）绕固定点。求两种情况下的定态能量及波函数。
切入|固定轴只需一个角 $\varphi$；固定点需 $\theta,\varphi$ 两角。动能都写成相应角动量平方除以 $2I$。
列式|固定轴 $-\hbar^2F''/(2I)=EF$。可同时取 $L_z$ 本征函数，$-i\hbar F'=m\hbar F$。固定点 $L^2\Phi=2IE\Phi$。
步骤|（1）一阶方程解为 $C e^{im\varphi}$。转一整圈回到同一方向，要求 $Ce^{im\varphi}(e^{2\pi im}-1)=0$。$C$ 还未求，但非零态保证可约掉该前因子。于是 $m\in\mathbb Z$。归一时 $\int_0^{2\pi}|C|^2d\varphi=2\pi|C|^2=1$，选 $C=(2\pi)^{-1/2}$。（2）球坐标的 $L^2$ 是 $-\hbar^2$ 乘球面上的二阶微分算符。代入 $L^2\Phi=2IE\Phi$ 后两边除以 $\hbar^2$，记 $\lambda=2IE/\hbar^2$，角方程为 $-\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta\Phi)-\frac1{\sin^2\theta}\partial_\varphi^2\Phi=\lambda\Phi$。取 $\Phi=\Theta(\theta)e^{im\varphi}$，对 $\varphi$ 求两次导得到 $-m^2\Phi$，对 $\theta$ 求导时指数因子不变。消去共有的 $e^{im\varphi}$ 得 $\frac1{\sin\theta}\frac d{d\theta}(\sin\theta\,\Theta_\theta)+[\lambda-m^2/\sin^2\theta]\Theta=0$。令 $u=\cos\theta$，则 $du/d\theta=-\sin\theta$，所以 $\sin\theta\,\Theta_\theta=-(1-u^2)\Theta_u$。再对 $\theta$ 求导并除以 $\sin\theta$，两个负号抵消，得 $\frac d{du}[(1-u^2)\Theta_u]$。展开得到 $(1-u^2)\Theta_{uu}-2u\Theta_u+[\lambda-m^2/(1-u^2)]\Theta=0$。在两极 $u=\pm1$ 保持正则给 $\lambda=\ell(\ell+1)$，对应连带勒让德函数，与方位角因子合起来就是球谐函数。比如 $m=0$ 时，代 $\Theta=u$ 有 $\Theta_u=1,\Theta_{uu}=0$，于是 $(-2+\lambda)u=0$，得到 $\lambda=2$，对应 $\ell=1$。
考场|固定轴 $F_m=e^{im\varphi}/\sqrt{2\pi}$，$E_m=\hbar^2m^2/(2I)$；固定点 $\Phi_{\ell m}=Y_{\ell m}$，$E_\ell=\hbar^2\ell(\ell+1)/(2I)$，$m=-\ell,\ldots,\ell$。
# h3-6|3.6|第三章 · 教材题|3.6 · 三角波函数的平均动量与动能
题干|$\psi=A(\sin^2kx+\frac12\cos kx)$，求平均动量和平均动能。所见材料未注明归一化区间，下文采用整数个周期 $L$ 的周期边界。
切入|用 $\sin^2kx=(1-\cos2kx)/2$，把函数拆成动量本征波。
列式|系数为常数项 $A/2$、$\pm k$ 项各 $A/4$、$\pm2k$ 项各 $-A/4$。归一平面波本身有 $1/\sqrt L$，所以展开系数要再乘 $\sqrt L$。
步骤|总概率是 $|A|^2L(1/4+4/16)=|A|^2L/2$，故 $|A|^2L=2$。动量 $0$ 概率 $1/2$，$\pm\hbar k,\pm2\hbar k$ 各 $1/8$。成对相反的动量抵消；平方平均为 $2(\hbar k)^2/8+2(2\hbar k)^2/8=5\hbar^2k^2/4$。
考场|在周期归一化下 $\langle p\rangle=0$，$\langle T\rangle=\langle p^2\rangle/(2m)=5\hbar^2k^2/(8m)$。
# h3-7|3.6|第三章 · 教材题|3.7 · 右半轴波函数的动量分布
题干|$\psi(x)=Axe^{-\lambda x}$（$x\ge0$），$x<0$ 时为零，$\lambda>0$。求（1）动量概率密度（2）平均动量。
切入|先用第一次作业第 1 题的归一化，再对右半轴做傅里叶变换。
列式|$A=2\lambda^{3/2}$。令 $b=\lambda+ip/\hbar$，动量振幅是 $A(2\pi\hbar)^{-1/2}\int_0^\infty xe^{-bx}dx$。
步骤|分部积分，$[-xe^{-bx}/b]_0^\infty=0$，剩 $(1/b)\int_0^\infty e^{-bx}dx=1/b^2$。因为 $|b^2|^2=|b|^4=[\lambda^2+(p/\hbar)^2]^2$，动量密度是 $p$ 的偶函数。乘 $p$ 后变奇，整个实轴上正负部分抵消。
考场|$|\tilde\psi(p)|^2=2\lambda^3/\{\pi\hbar[\lambda^2+(p/\hbar)^2]^2\}$，$\langle p\rangle=0$。
# h3-8|3.6|第三章 · 教材题|3.8 · 抛物线形的阱内波函数
题干|宽 $a$ 的无限深势阱中 $\psi=Ax(a-x)$，阱外为零。求能量分布与平均值。
切入|先求 $A$，再用能量本征函数做投影。
列式|$\int_0^a x^2(a-x)^2dx=a^5(1/3-1/2+1/5)=a^5/30$，$A=\sqrt{30/a^5}$。令 $k_n=n\pi/a$，投影含 $I=\int_0^a x(a-x)\sin(k_nx)dx$。
步骤|第一次分部积分的边界项为零，因为 $x(a-x)$ 两端为零。第二次分部积分中 $\sin(k_nx)$ 两端为零，剩 $I=(2/k_n^2)\int_0^a\sin(k_nx)dx=2[1-(-1)^n]/k_n^3$。乘 $A\sqrt{2/a}$ 得 $c_n$。另用 $\psi''=-2A$，$\langle E\rangle=(\hbar^2/m)A^2\int_0^ax(a-x)dx=5\hbar^2/(ma^2)$。
考场|偶 $n$ 概率零，奇 $n$ 概率 $960/(\pi^6n^6)$，$E_n=n^2\pi^2\hbar^2/(2ma^2)$，$\langle E\rangle=5\hbar^2/(ma^2)$。
# h3-9|3.7|第三章 · 教材题|3.9 · 氢原子叠加态的三种测量
题干|$\psi=\frac12R_{21}Y_{10}-\frac{\sqrt3}{2}R_{21}Y_{1,-1}$。求能量、$L^2$、$L_z$ 的可能值、概率及平均值。
切入|两项的 $n,\ell$ 相同，$m$ 不同。只有测 $L_z$ 才区分这两项。
列式|$E_n=-13.6\,\mathrm{eV}/n^2$，$L^2=\ell(\ell+1)\hbar^2$，$L_z=m\hbar$。系数平方为 $1/4,3/4$。
步骤|测能量时两个概率加成 1；测 $L^2$ 同理。测 $L_z$ 分别得 $0$ 与 $-\hbar$，平均值是 $0\cdot1/4-\hbar\cdot3/4$。负号在振幅平方中消失，测量结果的负号来自 $m=-1$。
考场|$E=-3.4\,\mathrm{eV}$、$L^2=2\hbar^2$ 均确定；$P(L_z=0)=1/4$、$P(L_z=-\hbar)=3/4$，$\langle L_z\rangle=-3\hbar/4$。
# h3-10|3.3|第三章 · 教材题|3.10 · 硬壁球形空腔
题干|半径 $a$ 的球内 $V=0$，球外 $V=\infty$。求定态能级和波函数。
切入|空间是球对称的，分离成径向 $R$ 和球谐函数。
列式|$R''+2R'/r+[k^2-\ell(\ell+1)/r^2]R=0$，$k^2=2mE/\hbar^2$。径向解由两类球贝塞尔函数组成。
步骤|原点的正则性去掉第二类 $y_\ell(kr)$，保留 $j_\ell(kr)$。壁上 $R(a)=0$，所以 $ka$ 只能是 $j_\ell$ 的正零点 $z_{\ell s}$。归一时 $N^{-2}=\int_0^ar^2j_\ell^2(z_{\ell s}r/a)dr$。例如 $\ell=0$，$j_0(z)=\sin z/z$，正零点是 $s\pi$。
考场|$E_{\ell s}=\hbar^2 z_{\ell s}^2/(2ma^2)$，$\psi=N j_\ell(z_{\ell s}r/a)Y_{\ell m}$（球内），$m=-\ell,\ldots,\ell$。
# h3-11|3.8|第三章 · 教材题|3.11 · 3.6 态的方差
题干|求 3.6 态的位置、动量不确定度。归一化区间未明，沿用对称单周期 $[-\pi/k,\pi/k]$；位置是该周期坐标的取值。
切入|$\rho$ 是偶函数，因此 $\langle x\rangle=0$；3.6 已给 $\langle p\rangle=0$。
列式|令 $u=kx$，$\Delta x^2=(\pi k^2)^{-1}\int_{-\pi}^{\pi}u^2(\sin^2u+\tfrac12\cos u)^2du$，$\Delta p^2=5\hbar^2k^2/4$。
步骤|平方展开为 $1/2+\frac14\cos u-\frac38\cos2u-\frac14\cos3u+\frac18\cos4u$。对 $j\ge1$，分部积分两次给 $\int_{-\pi}^{\pi}u^2\cos(ju)du=4\pi(-1)^j/j^2$，边界的正弦项为零。常数项给 $\pi^3/3$，合并得 $\Delta x^2=k^{-2}(\pi^2/3-355/288)$。周期坐标的 $x$ 乘法一般不保持动量算符的周期定义域，标准实直线的对易子论证需另核对。
考场|对指定周期，$\Delta p^2=5\hbar^2k^2/4$，$\Delta x^2=(\pi^2/3-355/288)/k^2$；不确定度乘积取两方差乘积的平方根。
# h3-12|3.8|第三章 · 教材题|3.12 · 高斯波包的不确定度
题干|$\psi=(2\pi\xi^2)^{-1/4}e^{ip_0x/\hbar-x^2/(4\xi^2)}$。求动量期望及 $\Delta x\Delta p$。
切入|先读出 $|\psi|^2$ 的高斯均值与方差，再对波函数求导。
列式|$p\psi=(p_0+i\hbar x/(2\xi^2))\psi$，$\langle x\rangle=0$，$\langle x^2\rangle=\xi^2$。
步骤|把上式乘 $\psi^*$ 积分，第二项是奇函数积分，故 $\langle p\rangle=p_0$。$\Delta p^2=\int|(p-p_0)\psi|^2dx=(\hbar^2/(4\xi^4))\int x^2|\psi|^2dx=\hbar^2/(4\xi^2)$。
考场|$\langle p\rangle=p_0$，$\Delta x=\xi$，$\Delta p=\hbar/(2\xi)$，乘积 $\hbar/2$。
# h3-13|3.8|第三章 · 教材题|3.13 · 用测不准估算氢原子基态
题干|利用位置和动量的测不准关系估算氢原子基态能量，取势能 $-\gamma/r$。
切入|把束缚范围记为 $r$，局域越紧，典型动量越大。
列式|作数量级估计 $p\sim\hbar/r$，于是 $E(r)\sim\hbar^2/(2\mu r^2)-\gamma/r$。
步骤|令导数 $-\hbar^2/(\mu r^3)+\gamma/r^2=0$，得到 $r=\hbar^2/(\mu\gamma)$。二阶导在该点为正；$r$ 很小时动能项占优，远处能量趋近 0，所以该点给最低估计。代回时势能项的绝对值是动能项的两倍。
考场|特征尺度 $r\sim\hbar^2/(\mu\gamma)$，$E_{\min}\sim-\mu\gamma^2/(2\hbar^2)$，氢原子约 $-13.6\,\mathrm{eV}$。这是尺度估算。
# h3x1|3.5|第三章 · 算符题组|3.1 · 厄密部分与反厄密部分
题干|若 $A,B$ 厄密，证明 $(AB+BA)/2$ 与 $(AB-BA)/(2i)$ 厄密。证明任意 $F$ 可分为 $F_++iF_-$，$F_\pm$ 厄密。
切入|伴随既翻转乘积次序，也对标量做复共轭。
列式|$(AB)^\dagger=BA$，$(BA)^\dagger=AB$，$(1/(2i))^*=-1/(2i)$。
步骤|和式交换两个加项，保持原样。差式中乘积次序翻转贡献一个负号，标量共轭再贡献一个负号，抵消。对一般 $F$，取 $F_+=(F+F^\dagger)/2$，$F_-=(F-F^\dagger)/(2i)$；同样可逐个取伴随证明厄密。
考场|写出上述两个伴随等式并验算 $F_++iF_-=(F+F^\dagger+F-F^\dagger)/2=F$。
# h3x3|3.1|第三章 · 算符题组|3.3 · 整函数的对易子
题干|若 $F(x,p)$ 是按 $x$ 在左、$p$ 在右展开的整函数，证明 $[p,F]=-i\hbar\partial_xF$、$[x,F]=i\hbar\partial_pF$。
切入|先证一个单项 $x^mp^n$，保持原来的乘法顺序。
列式|由 $[A,BC]=[A,B]C+B[A,C]$ 递推，$[p,x^m]=-mi\hbar x^{m-1}$，$[x,p^n]=ni\hbar p^{n-1}$。
步骤|$p$ 与 $p^n$ 对易，所以第一式只对 $x^m$ 生效，结果仍乘右侧的 $p^n$。第二式中 $x$ 与 $x^m$ 对易，只作用于 $p^n$。再按线性逐项相加，整函数情形在可逐项运算的公共定义域上理解。
考场|单项结果分别为 $-mi\hbar x^{m-1}p^n$ 和 $ni\hbar x^mp^{n-1}$，对级数求和即得。
# h3x5|3.1|第三章 · 算符题组|3.5 · 保持次序的矢量算符恒等式
题干|用 Levi-Civita 符号验证标量三重积，并将 $A\times(B\times C)$ 和 $(A\times B)\times C$ 展开为分量。算符分量一般不对易。
切入|$\varepsilon_{xyz}=1$，交换两个下标会变号，重复下标为零。展开时只重命名求和指标，保留 $A,B,C$ 的先后。
列式|标量三重积为 $\sum_{ijk}\varepsilon_{ijk}A_iB_jC_k$。三重叉乘会出现两个 $\varepsilon$ 的缩并。
步骤|以第一式的 $x$ 分量为例，$A_y(B_xC_y-B_yC_x)-A_z(B_zC_x-B_xC_z)$。加入相消的 $A_xB_xC_x$，可写 $\sum_j(A_j B_x C_j-A_jB_j C_x)$。第二式展开 $x$ 分量为 $(A_zB_x-A_xB_z)C_z-(A_xB_y-A_yB_x)C_y$，同样可加相消项。
考场|$[A\times(B\times C)]_i=\sum_j(A_jB_iC_j-A_jB_jC_i)$，$[(A\times B)\times C]_i=\sum_j(A_jB_iC_j-A_iB_jC_j)$。标量三重积两种括法均给 $\varepsilon_{ijk}A_iB_jC_k$。
# h3x7|3.2|第三章 · 算符题组|3.7 · 角动量与整函数的对易子
题干|$L=\mathbf r\times\mathbf p$。证明 $[L,F]=i\hbar(\partial_{\mathbf p}F\times\mathbf p-\mathbf r\times\partial_{\mathbf r}F)$，导数按原算符顺序定义。
切入|先写 $L_i=\sum_{jk}\varepsilon_{ijk}r_j p_k$，每一项用乘积对易规则。
列式|$[r_jp_k,F]=r_j[p_k,F]+[r_j,F]p_k$，再用算符题组 3.3 的分量公式。
步骤|第一项是 $-i\hbar r_j\partial_{r_k}F$，第二项是 $i\hbar(\partial_{p_j}F)p_k$。乘 $\varepsilon_{ijk}$ 求和后各自组成一个叉积。偏导和算符的位置来自乘积公式，不能自行交换。
考场|写分量乘积公式并代入两基本对易式，即得题设矢量式。
# h3x9|3.1|第三章 · 算符题组|3.9 · 双重对易子
题干|计算 $[[\nabla^2,x^ly^mz^n],r^2]$。
切入|把 $f=x^ly^mz^n$、$g=r^2$ 看成乘法算符，取任意测试函数 $u$。
列式|$\nabla^2(fu)=f\nabla^2u+2\nabla f\cdot\nabla u+(\nabla^2 f)u$。
步骤|减去 $f\nabla^2u$ 后，第一部分 $2\nabla f\cdot\nabla$ 有导数，第二部分只是乘法。和 $g$ 再取对易，第二部分消失，第一部分只留下 $2\nabla f\cdot\nabla g$。$\nabla g=2\mathbf r$，而 $x\partial_x f+y\partial_y f+z\partial_zf=(l+m+n)f$。
考场|$[[\nabla^2,f],r^2]=4(l+m+n)x^ly^mz^n$，结果是乘法算符。
`;
