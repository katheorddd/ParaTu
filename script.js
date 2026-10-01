// ===== CONFIGURA AQUÍ =====
const PASS='3009';
const WORDS=['Que te vaya muy bien en tu examen','Eres muy lindoppp','Gracias por perdonarme','Eres muy TIERNO','TIERNO 🏎️','tqm niñito que se duerme tarde 🏀','<3','Niñito hermosop','De lejitos jsjs','Un regalito peque','Eres increíble','Sigue brillando'];
const SL=[
 '<div class="big t1">30</div><div class="big t2" style="font-size:clamp(30px,9vw,46px)">de septiembre</div>',
 '<div class="t2">Espero que te guste<br> niñito tierno <b> es algo pequeñito</b> ✨</div>',
 '<div class="t2">Hoy se regalan...</div><div class="road"><div class="car">🏎️</div></div>',
 '<div class="big hw">HOT WHEELS</div><div class="t2">pero como ando lejitos toca asip 🔥</div>',
 '<div class="t2">Y como te encanta el <b>básquet</b> quise hacerte algo especial.</div><div class="court"><div class="hoop"></div><div class="bx"><span class="by">🏀</span></div></div>',
 '<div class="big t1" style="font-size:clamp(40px,13vw,90px)">¡CANASTA!</div><div class="t2">Espero te guste </div>'];
const BG=['#ff5a1f66','#8a4dff77','#3fd0ff55','#ff3d8b66','#b6ff3b44','#ffd23f55'];
const LETTER={to:'Para ti 💙',body:['Holi tutis, quise hacerte esto no porque me lo hayas pedido, sino porque andaba buscando una excusa para hacerte la página JAJAJSJSJ. Yyy gracias de verdad por estos días, porque me la he estado pasando muy bien contigo. Hasta en mi chambita me dicen qué pasó conmigo de la noche a la mañana porque cargo otra cara y ando toda diferente JAJAJA. Y es que, después de tanta cosa que pasó y de que me haya alejado de ti por las razones que ya sabes, todavía no puedo creer que me sigas hablando. Y no es que no quiera hablarte, CLAROOO que quiero, me fascina hablar contigo y ya de paso responderte, ¿qué somos? JAJAJA.','Creo que ya te llegué a decir que yo no considero a los casi algo como algo malo ni nada por el estilo, pero desde que me alejé de ti siempre has estado en mi cabeza. No te imaginas la infinidad de veces que te había querido escribir y por miedo a que pudiera lastimarte no lo hacía. Aun así, me alegra muchísimo que después de todo sigamos hablando y que estos días hayan sido tan bonitos. Siento que contigo puedo volver a ser yo y disfrutar de esas pequeñas cosas que quizá parecen simples, pero que a mí me hacen demasiado feliz.','Tú eres demasiado, demasiado lindo, hermoso, precioso, todo un niño tierno y alguien a quien quiero muchísimo jsjsjs. No sé exactamente qué vaya a pasar ni quiero apresurar nada, pero sí quería que supieras que me haces muy feliz y que me encanta tenerte otra vez cerquita. Gracias por estos días, por hablar conmigo, por seguir aquí y por hacerme sonreír tanto. Te quiero muchísimo, tutis. 🫶🏻'],from:'Con cariño katy ✨'};
// ==========================
const $=s=>document.querySelector(s);
function show(id){document.querySelectorAll('.sc').forEach(e=>e.classList.toggle('on',e.id===id));gRun=false;if(id==='game')gStart();if(id==='gal'){document.querySelectorAll('#gal .btn').forEach(b=>{b.classList.remove('show');setTimeout(()=>b.classList.add('show'),2500)})}}
function burst(a){for(let i=0;i<24;i++){const e=document.createElement('div');e.className='em';e.textContent=a[i%a.length];e.style.left=Math.random()*100+'vw';e.style.top=(60+Math.random()*40)+'vh';e.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),3500)}}
// Lock
let code='';const boxes=$('#boxes');
for(let i=0;i<4;i++)boxes.innerHTML+='<div class="box"></div>';
[1,2,3,4,5,6,7,8,9,'',0].forEach(n=>{const b=document.createElement('button');b.textContent=n;if(n==='')b.style.visibility='hidden';
 b.onclick=()=>{if(code.length>=4)return;code+=n;[...boxes.children].forEach((x,i)=>x.textContent=code[i]?'★':'');if(code.length===4)setTimeout(chk,250)};$('#pad').appendChild(b)});
function chk(){if(code===PASS){go(0);show('story')}else{boxes.classList.add('shake');setTimeout(()=>{boxes.classList.remove('shake');code='';[...boxes.children].forEach(x=>x.textContent='')},450)}}
// Story
const st=$('#story');let idx=0,timer;
SL.forEach(s=>{const d=document.createElement('div');d.className='slide';d.innerHTML=s;st.appendChild(d)});
$('#dots').innerHTML=SL.map(()=>'<i></i>').join('');
function go(n){clearTimeout(timer);if(n>=SL.length){show('gal');return}idx=Math.max(0,n);st.style.setProperty('--bg',BG[idx]);
 document.querySelectorAll('.slide').forEach((s,i)=>{s.classList.toggle('on',i===idx);if(i===idx)[s.querySelector('.car'),s.querySelector('.by'),s.querySelector('.bx')].forEach(x=>{if(x){x.style.animation='none';x.offsetWidth;x.style.animation=''}})});
 document.querySelectorAll('#dots i').forEach((d,i)=>d.classList.toggle('on',i===idx));
 timer=setTimeout(()=>go(idx+1),idx===2||idx===4?3800:3200)}
st.onclick=()=>go(idx+1);
$('#sback').onclick=e=>{e.stopPropagation();go(idx-1)};
$('#gback').onclick=()=>{go(0);show('story')};
$('#play').onclick=()=>show('game');$('#ggback').onclick=()=>show('gal');
$('#open').onclick=$('#w1').onclick=()=>{const p=$('#paper');p.innerHTML=`<h3>${LETTER.to}</h3>`+LETTER.body.map(t=>`<p>${t}</p>`).join('')+`<p>${LETTER.from}</p>`;p.scrollTop=0;show('letter');burst(['💙','🏎️','🏀','✨'])};
$('#lback').onclick=()=>show('gal');$('#w2').onclick=()=>$('#win').classList.remove('on');
// Música (tu canción: cancion.mp3, misma carpeta)
const song=new Audio('cancion.mp3');song.loop=true;song.volume=.7;let muted=false,started=false;
function music(){if(started)return;started=true;song.play().catch(()=>{started=false})}
document.addEventListener('pointerdown',music,{once:true});
$('#mute').onclick=e=>{e.stopPropagation();music();muted=!muted;song.muted=muted;$('#mute').textContent=muted?'🔇':'🔊'};
document.addEventListener('visibilitychange',()=>{if(!started||muted)return;document.hidden?song.pause():song.play().catch(()=>{})});
// Dibujo balón
function ball(c,x,y,r){const g=c.createRadialGradient(x-r/3,y-r/3,r/6,x,y,r);g.addColorStop(0,'#ff9a52');g.addColorStop(1,'#d2480f');c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,7);c.fill();c.strokeStyle='#2a0d02';c.lineWidth=Math.max(1,r/12);c.beginPath();c.arc(x,y,r,0,7);c.moveTo(x,y-r);c.lineTo(x,y+r);c.moveTo(x-r,y);c.lineTo(x+r,y);c.stroke()}
// Galaxia
const cv=$('#cv'),ctx=cv.getContext('2d');let W,H;
function rs(){const D=devicePixelRatio||1;W=innerWidth;H=innerHeight;cv.width=W*D;cv.height=H*D;ctx.setTransform(D,0,0,D,0,0)}
rs();addEventListener('resize',rs);
const stars=Array.from({length:700},()=>({a:Math.random()*6.28,r:60+Math.pow(Math.random(),.7)*520,y:(Math.random()-.5)*60,s:Math.random()*1.6+.4,c:['#8fe0ff','#fff','#ffb3d6','#d6ff8f'][Math.random()*4|0]}));
const WC=['#6fd6ff','#ffd23f','#ff6fb0','#b6ff3b','#c4a2ff','#ff8a50'];
const words=WORDS.concat(WORDS).map((t,i,a)=>({t,a:i/a.length*6.28,r:150+Math.random()*320,c:WC[i%6]}));
function draw(t){
 const S=Math.min(W/1000,H/700),cx=W/2,cy=H*.52,rot=t/9000;
 ctx.clearRect(0,0,W,H);
 const g=ctx.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H)*.7);g.addColorStop(0,'#1a1260');g.addColorStop(1,'#02040f');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 for(const s of stars){const an=s.a+rot*(1.5-s.r/400),d=(Math.sin(an)+1)/2;
  ctx.globalAlpha=.25+d*.75;ctx.fillStyle=s.c;const z=s.s*(.6+d*.8)*Math.max(.8,S*1.4);
  ctx.fillRect(cx+Math.cos(an)*s.r*S*1.6,cy+Math.sin(an)*s.r*S*.5+s.y*S,z,z)}
 ctx.globalAlpha=1;
 const R=80*S+20,rx=R,ry=R*.3,lw=Math.max(S,.5);
 ctx.shadowColor='#3fd0ff';ctx.shadowBlur=40;ctx.strokeStyle='#3fd0ff';ctx.lineWidth=10*lw;ctx.beginPath();ctx.ellipse(cx,cy,rx*1.5,ry*1.5,0,0,7);ctx.stroke();
 ctx.shadowColor='#ff3d8b';ctx.strokeStyle='#ff3d8b';ctx.lineWidth=6*lw;ctx.beginPath();ctx.ellipse(cx,cy,rx*1.25,ry*1.25,0,0,7);ctx.stroke();
 ctx.shadowColor='#ff5a1f';ctx.strokeStyle='#ff5a1f';ctx.lineWidth=7*lw;ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,Math.PI,7);ctx.stroke();ctx.shadowBlur=0;
 ball(ctx,cx,cy-ry*.2-Math.abs(Math.sin(t/650))*R*1.6+ry,R*.38);
 ctx.shadowColor='#ff5a1f';ctx.shadowBlur=18;ctx.strokeStyle='#ff5a1f';ctx.lineWidth=7*lw;ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,0,Math.PI);ctx.stroke();ctx.shadowBlur=0;
 const ws=words.map(w=>{const an=w.a+rot;return{w,an,d:(Math.sin(an)+1)/2}}).sort((a,b)=>a.d-b.d);
 ctx.textAlign='center';
 for(const o of ws){const w=o.w;ctx.font=`500 ${Math.round((12+o.d*12)*Math.max(.8,S*1.5))}px Fredoka,sans-serif`;
  const tw=ctx.measureText(w.t).width/2+8,x=Math.max(tw,Math.min(W-tw,cx+Math.cos(o.an)*w.r*S*1.6)),y=cy+Math.sin(o.an)*w.r*S*.5+ry*.2;
  ctx.globalAlpha=.35+o.d*.65;ctx.fillStyle=w.c;ctx.shadowColor=w.c;ctx.shadowBlur=10;ctx.fillText(w.t,x,y)}
 ctx.globalAlpha=1;ctx.shadowBlur=0;
 requestAnimationFrame(draw)}
requestAnimationFrame(draw);
// Juego de básquet
const gc=$('#gc'),g=gc.getContext('2d');let gW,gH,gRun=false,sc=0,bl,hp,fx=[],dr=null,msg=0,won=false,shots=0,sk=1;
function gStart(){const D=devicePixelRatio||1;gW=innerWidth;gH=innerHeight;gc.width=gW*D;gc.height=gH*D;g.setTransform(D,0,0,D,0,0);sk=gH/700;
 hp={x:gW/2,y:gH*.3,hw:Math.min(gW*.14,64)};rb();gRun=true;requestAnimationFrame(gl)}
function rb(){bl={x:gW/2,y:gH*.8,vx:0,vy:0,r:Math.min(gW*.07,28),fly:false,sc:false}}
gc.onpointerdown=e=>{if(!bl.fly)dr={sx:e.clientX,sy:e.clientY,cx:e.clientX,cy:e.clientY}};
gc.onpointermove=e=>{if(dr){dr.cx=e.clientX;dr.cy=e.clientY}};
function vel(){let vx=-(dr.cx-dr.sx)*.12*sk,vy=-(dr.cy-dr.sy)*.12*sk,l=Math.hypot(vx,vy),m=25*sk;if(l>m){vx*=m/l;vy*=m/l}return[vx,vy]}
gc.onpointerup=()=>{if(!dr)return;if(dr.cy-dr.sy>25){const[vx,vy]=vel();bl.vx=vx;bl.vy=vy;bl.fly=true;$('#tip').style.opacity=0}dr=null};
function gl(t){if(!gRun)return;const gr=.47*sk;
 hp.x=sc>=3?gW/2+Math.sin(t/900)*gW*.26:gW/2;
 const bg=g.createLinearGradient(0,0,0,gH);bg.addColorStop(0,'#3b1590');bg.addColorStop(1,'#0a0f3a');g.fillStyle=bg;g.fillRect(0,0,gW,gH);
 g.fillStyle='#c4622a';g.fillRect(0,gH*.9,gW,gH*.1);g.fillStyle='#ffd23f';g.fillRect(0,gH*.9,gW,4);
 const bw=hp.hw*2.6;g.fillStyle='#ffffff26';g.strokeStyle='#fff';g.lineWidth=3;g.fillRect(hp.x-bw/2,hp.y-hp.hw*1.5,bw,hp.hw*1.5);g.strokeRect(hp.x-bw/2,hp.y-hp.hw*1.5,bw,hp.hw*1.5);
 const ry=hp.hw*.25;g.strokeStyle='#ff5a1f';g.lineWidth=6;g.beginPath();g.ellipse(hp.x,hp.y,hp.hw,ry,0,Math.PI,7);g.stroke();
 if(bl.fly){const py=bl.y;bl.vy+=gr;bl.x+=bl.vx;bl.y+=bl.vy;
  for(const s of[-1,1]){const px=hp.x+s*hp.hw,dx=bl.x-px,dy=bl.y-hp.y,d=Math.hypot(dx,dy)||1,m=bl.r+4;if(d<m){const nx=dx/d,ny=dy/d,vn=bl.vx*nx+bl.vy*ny;if(vn<0){bl.vx=(bl.vx-1.6*vn*nx)*.8;bl.vy=(bl.vy-1.6*vn*ny)*.8}bl.x=px+nx*m;bl.y=hp.y+ny*m}}
  if(!bl.sc&&bl.vy>0&&py<hp.y&&bl.y>=hp.y&&Math.abs(bl.x-hp.x)<hp.hw-bl.r*.2){bl.sc=true;sc++;msg=70;$('#sc').textContent=sc;
   for(let i=0;i<30;i++)fx.push({x:hp.x,y:hp.y,vx:(Math.random()-.5)*10,vy:-Math.random()*9,l:50,c:WC[i%6]});
   if(sc===5&&!won){won=true;setTimeout(()=>{$('#win').classList.add('on');burst(['🏆','🏎️','🏀'])},900)}}
  if(bl.y>gH+60||bl.x<-80||bl.x>gW+80||(bl.sc&&bl.y>hp.y+gH*.3))rb()}
 ball(g,bl.x,bl.y,bl.r);
 g.strokeStyle='#ff5a1f';g.lineWidth=6;g.beginPath();g.ellipse(hp.x,hp.y,hp.hw,ry,0,0,Math.PI);g.stroke();
 g.strokeStyle='#fffb';g.lineWidth=1.5;for(let i=0;i<=6;i++){const a=-hp.hw+i*hp.hw/3;g.beginPath();g.moveTo(hp.x+a,hp.y);g.lineTo(hp.x+a*.55,hp.y+hp.hw*.7);g.stroke()}
 if(dr&&!bl.fly&&dr.cy-dr.sy>25){const[vx,vy]=vel();let x=bl.x,y=bl.y,u=vx,v=vy;g.fillStyle='#b6ff3b';for(let i=0;i<40;i++){v+=gr;x+=u;y+=v;if(i%3==0){g.globalAlpha=1-i/45;g.beginPath();g.arc(x,y,4,0,7);g.fill()}}g.globalAlpha=1}
 fx=fx.filter(p=>p.l>0);for(const p of fx){p.vy+=.4;p.x+=p.vx;p.y+=p.vy;p.l--;g.globalAlpha=p.l/50;g.fillStyle=p.c;g.fillRect(p.x,p.y,6,6)}g.globalAlpha=1;
 if(msg>0){g.fillStyle='#ffd23f';g.strokeStyle='#ff3d8b';g.lineWidth=6;g.font=`${40+msg/3}px Bangers,Impact,sans-serif`;g.textAlign='center';g.strokeText('¡CANASTA!',gW/2,gH*.5);g.fillText('¡CANASTA!',gW/2,gH*.5);msg--}
 requestAnimationFrame(gl)}
