const homeworkText = String.raw`
# h2b1|2.6|教材第二章 · 第39页|2.4 · 一维无限深势阱
题干|2.4　一粒子在一维势场⏎$$U(x)=\begin{cases}\infty,&x<0\\0,&0\leq x\leq a\\\infty,&x>a\end{cases}$$⏎中运动，求粒子的能级和对应的波函数。
切入|阱外不能出现，先在 $0<x<a$ 写定态方程，再用两端的零边界。
列式|$\phi''+2mE\phi/\hbar^2=0$。令 $k^2=2mE/\hbar^2$，写 $\phi=A\sin kx+B\cos kx$。$E=0$ 时是直线解，两端为零只给零解；$E<0$ 时指数解也只能同时在两端为零而平凡。
步骤|左端 $\sin0=0,\cos0=1$，故 $B=0$。右端要 $A\sin ka=0$，非零波函数需 $A\ne0$，所以 $ka=n\pi$。归一用 $\sin^2u=(1-\cos2u)/2$，积分为 $a/2$，选 $A=\sqrt{2/a}$。
考场|$\phi_n=\sqrt{2/a}\sin(n\pi x/a)$（阱外为零），$E_n=n^2\pi^2\hbar^2/(2ma^2)$，$n=1,2,\ldots$。
# h2book5|2.6|教材第二章 · 第39页|2.5 · 归一化因子
题干|2.5　证明（2.6.14）式中的归一化因子是 $A'=\dfrac{1}{\sqrt a}$。
注记|教材式（2.6.14）见所附课文页。阱内 $|x|<a$ 时 $\psi_n=A'\sin\!\left[\frac{n\pi}{2a}(x+a)\right]$，$n$ 为正整数；$|x|\ge a$ 时 $\psi_n=0$。
切入|积分只在势阱的两面墙之间进行。这个阱的宽度是 $2a$。
列式|$1=|A'|^2\int_{-a}^a\sin^2[\frac{n\pi}{2a}(x+a)]\,dx$。
步骤|令 $u=\frac{n\pi}{2a}(x+a)$，于是 $dx=\frac{2a}{n\pi}du$。当 $x=-a$ 时 $u=0$，当 $x=a$ 时 $u=n\pi$。用 $\sin^2u=(1-\cos 2u)/2$，$\int_0^{n\pi}\sin^2u\,du=[u/2-\sin(2u)/4]_0^{n\pi}=n\pi/2$。乘回换元系数后，积分为 $a$。
考场|归一化给 $|A'|^2a=1$。选取正实整体常数，得 $A'=1/\sqrt a$。
# h2c5|2.7|教材第二章 · 第39页|2.6 · 第一激发态的概率密度
题干|2.6　求一维谐振子处在第一激发态时概率密度最大的位置。
切入|把波函数平方后再找峰。奇函数波函数的密度是偶函数。
列式|$\rho=Cx^2e^{-\alpha^2x^2}$，$\rho'=2Cxe^{-\alpha^2x^2}(1-\alpha^2x^2)$。
步骤|驻点为 $0,\pm1/\alpha$。原点是节点，密度为零；两端趋零，正半轴在 $1/\alpha$ 前升后降，负半轴由对称性得到另一个峰。
考场|最可几位置 $x=\pm1/\alpha=\pm\sqrt{\hbar/(m\omega)}$。
# h2b2|2.5|教材第二章 · 第39页|2.7 · 定态波函数的宇称
题干|2.7　在一维势场中运动的粒子，势能对原点对称：$U(-x)=U(x)$，证明粒子的定态波函数具有确定的宇称。
注记|解析按通常的一维非简并束缚态证明，并说明简并时如何选定宇称的基。
切入|把解 $\phi(x)$ 反射成 $\phi(-x)$，看能量是否改变。
列式|设 $P\phi(x)=\phi(-x)$。两次求导消去反射给的负号，偶势不变，所以 $[H,P]=0$。
步骤|非简并时同能量的解只能相差一个常数，$\phi(-x)=c\phi(x)$。再把 $x$ 替成 $-x$，得 $\phi(x)=c^2\phi(x)$，故 $c=\pm1$。一般有简并时，可以在该能量子空间选定宇称的基，任意线性组合则可能没有确定宇称。
考场|由 $[H,P]=0$ 且 $P^2=I$，可取共同本征函数，$P$ 本征值为 $\pm1$；非简并定态本身具有确定宇称。
# h2book9|2.8|教材第二章 · 第39页|2.9 · 分段势中的束缚态
题干|2.9　分子间的范德瓦耳斯力所产生的势能可以近似地表示为⏎$$U(x)=\begin{cases}\infty,&x<0\\U_0,&0\leq x<a\\-U_1,&a\leq x\leq b\\0,&b<x\end{cases}\text{，}$$⏎求束缚态的能级所满足的方程。
切入|束缚态在最右侧趋于零，左端无限高墙要求 $\psi(0)=0$。在有限势能跳跃处，波函数和一阶导数都要接上。
列式|按势垒 $U_0>0$、阱深 $U_1>0$ 的情形，束缚能量满足 $-U_1<E<0$。记 $q=\sqrt{2m(U_0-E)}/\hbar$，$k=\sqrt{2m(E+U_1)}/\hbar$，$\kappa=\sqrt{-2mE}/\hbar$。
步骤|左段指数通解用 $\psi(0)=0$ 消去偶组合，得到 $C\sinh(qx)$。令 $C=1$ 暂定整体尺度，则 $\psi(a)=\sinh(qa)$、$\psi'(a)=q\cosh(qa)$。中段用 $\psi(x)=\psi(a)\cos[k(x-a)]+\psi'(a)\sin[k(x-a)]/k$，在 $a$ 处自动接上这两个值。右段取衰减解 $\psi(b)e^{-\kappa(x-b)}$，于是在 $b$ 只需令中段导数满足 $\psi'(b)=-\kappa\psi(b)$。把中段函数和导数代进去，就得到能级方程。
考场|令 $d=b-a$，则 $[q\cosh(qa)+\kappa\sinh(qa)]\cos(kd)+[\kappa q\cosh(qa)/k-k\sinh(qa)]\sin(kd)=0$。在 $-U_1<E<0$ 中取其根。
# h3-2|3.4|教材第三章 · 第75页|3.2 · 氢原子基态
题干|3.2　氢原子处在基态 $\psi(r,\theta,\varphi)=\dfrac{1}{\sqrt{\pi a_0^3}}e^{\frac{r}{a_0}}$，求：⏎（1）$r$ 的期望值；⏎（2）势能 $-\dfrac{e^2}{r}$ 的期望值；⏎（3）最概然的半径；⏎（4）动能的期望值；⏎（5）动量的概率分布函数。
注记|你提供的教材照片印的是正指数，原题区照录。正指数在全空间无法归一化。另一份第三章作业材料写的是 $e^{-r/a_0}$，以下解析按这一衰减形式计算，库仑势系数记为 $\gamma=e^2$。
切入|半径积分前先把角度积掉，留下球壳密度 $4r^2e^{-2r/a_0}/a_0^3$。
列式|对（1）、（2）分别把 $r$、$1/r$ 乘进球壳密度。用 $\int_0^\infty r^n e^{-br}dr=n!/b^{n+1}$，它由分部积分递推，$b=2/a_0$。
步骤|（1）$4(3!)(a_0/2)^4/a_0^3=3a_0/2$。（2）$-\gamma\cdot4(a_0/2)^2/a_0^3=-\gamma/a_0$。（3）球壳密度导数含 $r(1-r/a_0)$，正半轴峰在 $a_0$。（4）用 $T=E-V$、$E=-\gamma/(2a_0)$ 得 $\gamma/(2a_0)$。（5）取极轴沿 $\mathbf p$，角积分为 $4\pi\sin(kr)/(kr)$，$k=p/\hbar$。径向用 $\int_0^\infty r e^{-br}\sin kr\,dr=2bk/(b^2+k^2)^2$，其中 $b=1/a_0$；代入归一化的傅里叶变换再取模平方。
考场|前四项依次为 $3a_0/2,-\gamma/a_0,a_0,\gamma/(2a_0)$。动量矢量密度 $|\tilde\psi(\mathbf p)|^2=\frac{8a_0^3}{\pi^2\hbar^3}[1+(a_0p/\hbar)^2]^{-4}$；若只问模长，乘 $4\pi p^2$。
# h3-3|2.4|教材第三章 · 第75页|3.3 · 电子运动产生的电流密度
题干|3.3　证明氢原子中电子运动所产生的电流密度在球坐标系中的分量是⏎$$J_{er}=J_{e\theta}=0,\qquad J_{e\varphi}=-\frac{e\hbar m}{m_e r\sin\theta}|\psi_{nlm}|^2.$$
切入|电流密度是概率流乘电子电荷 $-e$。把 $\psi$ 写成实函数 $f(r,\theta)$ 乘 $e^{im\varphi}$。
列式|$\mathbf J=-e(\hbar/m_e)\operatorname{Im}(\psi^*\nabla\psi)$。球坐标的方位梯度分量是 $(r\sin\theta)^{-1}\partial_\varphi$。
步骤|径向乘积 $\psi^*\partial_r\psi=f\,\partial_rf$ 为实数，极角同理。方位导数给 $\partial_\varphi\psi=im\psi$，虚部就是 $m|\psi|^2$。负号来自电子带负电，$m$ 是磁量子数。
考场|$J_r=J_\theta=0$，$J_\varphi=-e\hbar m|\psi|^2/(m_e r\sin\theta)$。
# h3-4|3.2|教材第三章 · 第75页|3.4 · 圆周电流与磁旋比
题干|3.4　由上题可知，氢原子中的电流可以看成是由许多圆周电流组成的（图 3.7）。⏎（1）求一圆周电流的磁矩；⏎（2）证明氢原子磁矩为⏎$$M=M_z=-\frac{me\hbar}{2m_e}\quad\text{（SI 单位），}$$⏎原子磁矩与角动量之比为⏎$$\frac{M_z}{L_z}=-\frac{e}{2m_e}\quad\text{（SI 单位），}$$⏎这个比值称为磁旋比。
注记|图 3.7 是绕 $z$ 轴的细电流环。环半径为 $r\sin\theta$，横截面为 $dS$，沿方位方向的电流密度为 $J_{e\varphi}$。
切入|圆环半径 $R=r\sin\theta$。环形细管横截面 $ds$ 携带电流 $dI=J_\varphi ds$。
列式|SI 制下 $\mu_z=I\pi R^2$，右手定方向；高斯制下公式多除以光速 $c$。体积元 $d\tau=2\pi R\,ds$。
步骤|$d\mu_z=\pi R^2 J_\varphi ds=\frac12R J_\varphi d\tau$。代 $J_\varphi=-e\hbar m|\psi|^2/(m_eR)$ 后，$R$ 正好抵消，积分只剩 $\int|\psi|^2d\tau=1$。与 $L_z=m\hbar$ 比较；$m=0$ 时两者同为零，用比例关系表达。
考场|SI 制 $\mu_z=-e\hbar m/(2m_e)$，$\mu_z=-eL_z/(2m_e)$；高斯制两式多除以 $c$。
# h3-5|3.2|教材第三章 · 第75页|3.5 · 刚性转子
题干|3.5　一刚性转子转动惯量为 $I$，它的能量的经典表示式是 $H=\dfrac{L^2}{2I}$。$L$ 为角动量。求与此对应的量子体系在下列情况下的定态能量及波函数：⏎（1）转子绕一固定轴转动；⏎（2）转子绕一固定点转动。
切入|固定轴只需一个角 $\varphi$；固定点需 $\theta,\varphi$ 两角。动能都写成相应角动量平方除以 $2I$。
列式|固定轴 $-\hbar^2F''/(2I)=EF$。可同时取 $L_z$ 本征函数，$-i\hbar F'=m\hbar F$。固定点 $L^2\Phi=2IE\Phi$。
步骤|（1）一阶方程解为 $C e^{im\varphi}$。转一整圈回到同一方向，要求 $Ce^{im\varphi}(e^{2\pi im}-1)=0$。$C$ 还未求，但非零态保证可约掉该前因子。于是 $m\in\mathbb Z$。归一时 $\int_0^{2\pi}|C|^2d\varphi=2\pi|C|^2=1$，选 $C=(2\pi)^{-1/2}$。（2）球坐标的 $L^2$ 是 $-\hbar^2$ 乘球面上的二阶微分算符。代入 $L^2\Phi=2IE\Phi$ 后两边除以 $\hbar^2$，记 $\lambda=2IE/\hbar^2$，角方程为 $-\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta\Phi)-\frac1{\sin^2\theta}\partial_\varphi^2\Phi=\lambda\Phi$。取 $\Phi=\Theta(\theta)e^{im\varphi}$，对 $\varphi$ 求两次导得到 $-m^2\Phi$，对 $\theta$ 求导时指数因子不变。消去共有的 $e^{im\varphi}$ 得 $\frac1{\sin\theta}\frac d{d\theta}(\sin\theta\,\Theta_\theta)+[\lambda-m^2/\sin^2\theta]\Theta=0$。令 $u=\cos\theta$，则 $du/d\theta=-\sin\theta$，所以 $\sin\theta\,\Theta_\theta=-(1-u^2)\Theta_u$。再对 $\theta$ 求导并除以 $\sin\theta$，两个负号抵消，得 $\frac d{du}[(1-u^2)\Theta_u]$。展开得到 $(1-u^2)\Theta_{uu}-2u\Theta_u+[\lambda-m^2/(1-u^2)]\Theta=0$。在两极 $u=\pm1$ 保持正则给 $\lambda=\ell(\ell+1)$，对应连带勒让德函数，与方位角因子合起来就是球谐函数。比如 $m=0$ 时，代 $\Theta=u$ 有 $\Theta_u=1,\Theta_{uu}=0$，于是 $(-2+\lambda)u=0$，得到 $\lambda=2$，对应 $\ell=1$。
考场|固定轴 $F_m=e^{im\varphi}/\sqrt{2\pi}$，$E_m=\hbar^2m^2/(2I)$；固定点 $\Phi_{\ell m}=Y_{\ell m}$，$E_\ell=\hbar^2\ell(\ell+1)/(2I)$，$m=-\ell,\ldots,\ell$。
# h3-6|3.6|教材第三章 · 第75页|3.6 · 动量与动能的期望值
题干|3.6　设 $t=0$ 时，粒子的状态为⏎$$\psi(x)=A\left[\sin^2kx+\frac12\cos kx\right]\text{，}$$⏎求此时粒子的动量期望值和动能期望值。
注记|教材题干未写归一化区间。解析采用整数个周期的周期边界，作为明确的计算约定。
切入|用 $\sin^2kx=(1-\cos2kx)/2$，把函数拆成动量本征波。
列式|系数为常数项 $A/2$、$\pm k$ 项各 $A/4$、$\pm2k$ 项各 $-A/4$。归一平面波本身有 $1/\sqrt L$，所以展开系数要再乘 $\sqrt L$。
步骤|总概率是 $|A|^2L(1/4+4/16)=|A|^2L/2$，故 $|A|^2L=2$。动量 $0$ 概率 $1/2$，$\pm\hbar k,\pm2\hbar k$ 各 $1/8$。成对相反的动量抵消；平方平均为 $2(\hbar k)^2/8+2(2\hbar k)^2/8=5\hbar^2k^2/4$。
考场|在周期归一化下 $\langle p\rangle=0$，$\langle T\rangle=\langle p^2\rangle/(2m)=5\hbar^2k^2/(8m)$。
# h3-8|3.6|教材第三章 · 第76页|3.8 · 无限深方势阱的能量分布
题干|3.8　在一维无限深方势阱中运动的粒子，势阱的宽度为 $a$，如果粒子的状态由波函数⏎$$\psi(x)=Ax(a-x)$$⏎描写，$A$ 为归一化因子，求粒子能量的概率分布和能量的期望值。
切入|先求 $A$，再用能量本征函数做投影。
列式|$\int_0^a x^2(a-x)^2dx=a^5(1/3-1/2+1/5)=a^5/30$，$A=\sqrt{30/a^5}$。令 $k_n=n\pi/a$，投影含 $I=\int_0^a x(a-x)\sin(k_nx)dx$。
步骤|第一次分部积分的边界项为零，因为 $x(a-x)$ 两端为零。第二次分部积分中 $\sin(k_nx)$ 两端为零，剩 $I=(2/k_n^2)\int_0^a\sin(k_nx)dx=2[1-(-1)^n]/k_n^3$。乘 $A\sqrt{2/a}$ 得 $c_n$。另用 $\psi''=-2A$，$\langle E\rangle=(\hbar^2/m)A^2\int_0^ax(a-x)dx=5\hbar^2/(ma^2)$。
考场|偶 $n$ 概率零，奇 $n$ 概率 $960/(\pi^6n^6)$，$E_n=n^2\pi^2\hbar^2/(2ma^2)$，$\langle E\rangle=5\hbar^2/(ma^2)$。
# h3-9|3.7|教材第三章 · 第76页|3.9 · 氢原子的能量与角动量
题干|3.9　设氢原子处于状态⏎$$\psi(r,\theta,\varphi)=\frac12R_{21}(r)Y_{1,0}(\theta,\varphi)-\frac{\sqrt3}{2}R_{21}(r)Y_{1,-1}(\theta,\varphi)\text{，}$$⏎求氢原子能量、角动量平方及角动量 $z$ 分量的可能值，这些可能值出现的概率和这些力学量的期望值。
切入|两项的 $n,\ell$ 相同，$m$ 不同。只有测 $L_z$ 才区分这两项。
列式|$E_n=-13.6\,\mathrm{eV}/n^2$，$L^2=\ell(\ell+1)\hbar^2$，$L_z=m\hbar$。系数平方为 $1/4,3/4$。
步骤|测能量时两个概率加成 1；测 $L^2$ 同理。测 $L_z$ 分别得 $0$ 与 $-\hbar$，平均值是 $0\cdot1/4-\hbar\cdot3/4$。负号在振幅平方中消失，测量结果的负号来自 $m=-1$。
考场|$E=-3.4\,\mathrm{eV}$、$L^2=2\hbar^2$ 均确定；$P(L_z=0)=1/4$、$P(L_z=-\hbar)=3/4$，$\langle L_z\rangle=-3\hbar/4$。
# h3-10|3.3|教材第三章 · 第76页|3.10 · 硬壁球形空腔
题干|3.10　一粒子在硬壁球形空腔中运动，势能为⏎$$U(r)=\begin{cases}\infty,&r\geq a\\0,&r<a\end{cases}\text{，}$$⏎求粒子的能级和定态波函数。
切入|空间是球对称的，分离成径向 $R$ 和球谐函数。
列式|$R''+2R'/r+[k^2-\ell(\ell+1)/r^2]R=0$，$k^2=2mE/\hbar^2$。径向解由两类球贝塞尔函数组成。
步骤|原点的正则性去掉第二类 $y_\ell(kr)$，保留 $j_\ell(kr)$。壁上 $R(a)=0$，所以 $ka$ 只能是 $j_\ell$ 的正零点 $z_{\ell s}$。归一时 $N^{-2}=\int_0^ar^2j_\ell^2(z_{\ell s}r/a)dr$。例如 $\ell=0$，$j_0(z)=\sin z/z$，正零点是 $s\pi$。
考场|$E_{\ell s}=\hbar^2 z_{\ell s}^2/(2ma^2)$，$\psi=N j_\ell(z_{\ell s}r/a)Y_{\ell m}$（球内），$m=-\ell,\ldots,\ell$。
# h3-11|3.8|教材第三章 · 第76页|3.11 · 第 3.6 题的不确定关系
题干|3.11　求第 3.6 题中粒子位置和动量的不确定关系：$\overline{(\Delta x)^2}\,\overline{(\Delta p)^2}=?$
注记|沿用 3.6 的归一化约定。这里按一个对称周期计算，所求是两个方差的乘积。
切入|$\rho$ 是偶函数，因此 $\langle x\rangle=0$；3.6 已给 $\langle p\rangle=0$。
列式|令 $u=kx$，$\Delta x^2=(\pi k^2)^{-1}\int_{-\pi}^{\pi}u^2(\sin^2u+\tfrac12\cos u)^2du$，$\Delta p^2=5\hbar^2k^2/4$。
步骤|平方展开为 $1/2+\frac14\cos u-\frac38\cos2u-\frac14\cos3u+\frac18\cos4u$。对 $j\ge1$，分部积分两次给 $\int_{-\pi}^{\pi}u^2\cos(ju)du=4\pi(-1)^j/j^2$，边界的正弦项为零。常数项给 $\pi^3/3$，合并得 $\Delta x^2=k^{-2}(\pi^2/3-355/288)$。周期坐标的 $x$ 乘法一般不保持动量算符的周期定义域，标准实直线的对易子论证需另核对。
考场|对指定周期，$\overline{(\Delta x)^2}\,\overline{(\Delta p)^2}=\frac{5\hbar^2}{4}\left(\frac{\pi^2}{3}-\frac{355}{288}\right)$。
# h3-12|3.8|教材第三章 · 第76页|3.12 · 高斯波包的不确定关系
题干|3.12　粒子处于状态⏎$$\psi(x)=\left(\frac{1}{2\pi\xi^2}\right)^{\frac14}\exp\left[\frac{i}{\hbar}p_0x-\frac{x^2}{4\xi^2}\right]\text{，}$$⏎式中 $\xi$ 为常量。求粒子的动量期望值，并计算不确定关系 $\overline{(\Delta x^2)}\,\overline{(\Delta p)^2}$。
注记|第一因子的平方位置按题图保留。解析按通常的两个方差相乘计算。
切入|先读出 $|\psi|^2$ 的高斯均值与方差，再对波函数求导。
列式|$p\psi=(p_0+i\hbar x/(2\xi^2))\psi$，$\langle x\rangle=0$，$\langle x^2\rangle=\xi^2$。
步骤|把上式乘 $\psi^*$ 积分，第二项是奇函数积分，故 $\langle p\rangle=p_0$。$\Delta p^2=\int|(p-p_0)\psi|^2dx=(\hbar^2/(4\xi^4))\int x^2|\psi|^2dx=\hbar^2/(4\xi^2)$。
考场|$\langle p\rangle=p_0$，$\overline{(\Delta x)^2}=\xi^2$，$\overline{(\Delta p)^2}=\hbar^2/(4\xi^2)$，两个方差相乘为 $\hbar^2/4$。
# h3-13|3.8|教材第三章 · 第76页|3.13 · 氢原子基态能量的估计
题干|3.13　利用不确定关系估计氢原子的基态能量。
切入|把束缚范围记为 $r$，局域越紧，典型动量越大。
列式|作数量级估计 $p\sim\hbar/r$，于是 $E(r)\sim\hbar^2/(2\mu r^2)-\gamma/r$。
步骤|令导数 $-\hbar^2/(\mu r^3)+\gamma/r^2=0$，得到 $r=\hbar^2/(\mu\gamma)$。二阶导在该点为正；$r$ 很小时动能项占优，远处能量趋近 0，所以该点给最低估计。代回时势能项的绝对值是动能项的两倍。
考场|特征尺度 $r\sim\hbar^2/(\mu\gamma)$，$E_{\min}\sim-\mu\gamma^2/(2\hbar^2)$，氢原子约 $-13.6\,\mathrm{eV}$。这是尺度估算。
# h2a1|2.1|云课堂 · 第一次作业|第 1 题 · 一维运动的粒子
题干|1　一维运动的粒子处在 $\psi(x)=\begin{cases}Axe^{-\lambda x}&(x>0)\\0&(x\leq0)\end{cases}$ 的状态，其中 $\lambda>0$，求：⏎（1）将此函数归一化；⏎（2）粒子坐标的几率分布函数；⏎（3）在何处找到粒子的几率最大。
切入|先取模平方。因为左半轴上波函数为零，归一化积分从 0 到无穷。
列式|$1=|A|^2\int_0^\infty x^2e^{-2\lambda x}dx$。换元 $u=2\lambda x$ 后，$x^2dx=u^2du/(2\lambda)^3$。
步骤|分部积分两次，$\int_0^\infty u^2e^{-u}du=2\int_0^\infty ue^{-u}du=2$。端点的多项式乘指数项都为零。选实正 $A=2\lambda^{3/2}$，所以 $\rho=4\lambda^3 x^2e^{-2\lambda x}$（$x>0$）。对密度求导得到 $8\lambda^3xe^{-2\lambda x}(1-\lambda x)$；在 $1/\lambda$ 前正、后负，且两端为零。
考场|由归一化 $1=|A|^2/(4\lambda^3)$ 得 $\psi=2\lambda^{3/2}xe^{-\lambda x}$（右半轴）。$\rho=|\psi|^2$，由 $\rho'=0$ 及导数变号得 $x_{\max}=1/\lambda$。
# h2a2|2.7|云课堂 · 第一次作业|第 2 题 · 线性谐振子
题干|2　一个势能为 $U(x)=\dfrac12\mu\omega^2x^2$ 的线性谐振子处在 $\Psi(x,t)=Ae^{-\frac12\alpha^2x^2-\frac{i}{2}\omega t}$ 的状态，其 $\alpha=\sqrt{\dfrac{\mu\omega}{\hbar}}$，求：⏎（1）归一化因子；⏎（2）在何处发现振子的几率最大。
注记|照片中指数里的 $i$ 有墨迹遮挡，采用你此前确认的 $i$。
切入|纯虚指数 $e^{-i\omega t/2}$ 和它的共轭相乘是 1。
列式|$1=|A|^2\int_{\mathbb R}e^{-\alpha^2x^2}dx$。换 $u=\alpha x$，$dx=du/\alpha$，两端仍是无穷。
步骤|高斯积分给 $1=|A|^2\sqrt\pi/\alpha$，取 $A=\sqrt{\alpha/\sqrt\pi}$。密度导数为 $-2\alpha^2x\rho$，原点左侧为正、右侧为负，故在原点取最大。
考场|$\rho=|A|^2e^{-\alpha^2x^2}$，归一化得 $A=(\alpha^2/\pi)^{1/4}$，最大值位置 $x=0$。
# h2b3|2.6|云课堂 · 第二次作业|第 1 题 · 能量的可能值
题干|1. 设粒子在宽度为 $a$ 的一维无限深势阱中运动，若粒子处于状态 $\Psi(x)=\dfrac{4}{\sqrt a}\sin\dfrac{\pi x}{a}\cos^2\dfrac{\pi x}{a}$，试求粒子能量的可能值及其相应几率。
切入|找能量本征态就是找 $\sin(n\pi x/a)$，先处理 $\cos^2$。
列式|令 $u=\pi x/a$，$\sin u\cos^2u=(\sin u+\sin3u)/4$，可用 $\cos^2u=(1+\cos2u)/2$ 和积化和差推出。
步骤|改写得 $\Psi=(\sin u+\sin3u)/\sqrt a=(\phi_1+\phi_3)/\sqrt2$。两基函数正交，系数平方和等于 1。由于 $E_n=n^2E_1$，$E_3=9E_1$。
考场|$\Psi=(\phi_1+\phi_3)/\sqrt2$，故测得 $E_1=\pi^2\hbar^2/(2ma^2)$ 或 $E_3=9E_1$，概率均为 $1/2$。
# h2b4|2.6|云课堂 · 第二次作业|第 2 题 · 距势阱左壁的几率
题干|2. 若在一维无限深势阱中运动的粒子的量子数为 $n$，试求：⏎（1）距势阱的左壁 $\dfrac14$ 宽度内发现粒子的几率是多少？⏎（2）$n$ 取何值时上述几率最大？⏎（3）当 $n\to\infty$ 时，这个几率的极限是多少？这个结果说明了什么问题？
切入|积分区域只取 $0$ 到 $a/4$，仍使用整个势阱上归一的波函数。
列式|$P_n=\frac2a\int_0^{a/4}\sin^2(n\pi x/a)dx=\frac14-\frac{\sin(n\pi/2)}{2n\pi}$。
步骤|$n$ 为偶数时正弦为 0。$n=1\bmod4$ 时正弦为 1，概率低于 $1/4$。$n=3\bmod4$ 时正弦为 −1，这一组的增量 $1/(2n\pi)$ 随 $n$ 下降，所以最大在 $n=3$。高 $n$ 时增量被 $1/(2n\pi)$ 夹到零，区间概率趋于经典均匀分布的长度比例。
考场|$P_n=1/4-\sin(n\pi/2)/(2n\pi)$；$P_{\max}=1/4+1/(6\pi)$（$n=3$），极限 $1/4$。
# h2b5|2.6|云课堂 · 第二次作业|第 3 题 · 最低能级与波长
题干|3. 原子或分子中的电子可以粗略地看成是一维无限深势阱中的粒子。设势阱宽度为 $1\,\text{Å}$，求：⏎（1）两个最低能级间的间隔；⏎（2）电子在这两个能级间跃迁，发出的光其波长是多少？
切入|能级序列按 $n^2$ 变化，最低两个是 $n=1,2$。
列式|$\Delta E=E_2-E_1=3\pi^2\hbar^2/(2m_ea^2)$，光子满足 $\Delta E=hc/\lambda$。
步骤|$a=10^{-10}\,\mathrm m$。代 $m_e\approx9.11\times10^{-31}\,\mathrm{kg}$、$\hbar\approx1.055\times10^{-34}\,\mathrm{J\,s}$，得 $\Delta E\approx1.81\times10^{-17}\,\mathrm J\approx113\,\mathrm{eV}$。用 $hc\approx1240\,\mathrm{eV\,nm}$ 得 $\lambda\approx11.0\,\mathrm{nm}$。
考场|$\Delta E=3E_1\approx113\,\mathrm{eV}$，$\lambda=hc/\Delta E\approx11.0\,\mathrm{nm}$。
# h2b6|2.6|云课堂 · 第二次作业|第 4 题 · 三维无限深势阱
题干|4. 粒子在宽度分别为 $a_1$、$a_2$、和 $a_3$ 的三维无限深势阱中运动，求其能级和波函数。
切入|三方向互相独立，波函数可写成三个一维函数的乘积。
列式|$H=H_x+H_y+H_z$。代 $\psi=X(x)Y(y)Z(z)$ 后，$H_x$ 只对 $X$ 作用，所以三个分能量相加。
步骤|每方向都满足两端为零，得到 $k_i=n_i\pi/a_i$，$n_i\ge1$。每个因子系数是 $\sqrt{2/a_i}$，三重归一积分分成三个等于 1 的一维积分。
考场|$E=\frac{\pi^2\hbar^2}{2m}\sum_{i=1}^3 n_i^2/a_i^2$，$\psi=\sqrt{8/(a_1a_2a_3)}\prod_{i=1}^3\sin(n_i\pi x_i/a_i)$，盒外为零。
`;
