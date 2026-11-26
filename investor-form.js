(function(){if(window.wbI)return;
var SEL='[data-wbi-open],a[href="#become-investor"],.wdg-btn[data-v="join"]',HASH='#become-investor',RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function ic(p,w){w=w||18;return '<svg width="'+w+'" height="'+w+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
var I={target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".6"/>',coins:'<ellipse cx="12" cy="6.5" rx="7" ry="2.8"/><path d="M5 6.5v5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-5"/><path d="M5 11.5v5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-5"/>',home:'<path d="M3.5 11 12 4l8.5 7"/><path d="M6 9.2V20h12V9.2"/><path d="M10 20v-5h4v5"/>',hand:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',send:'<path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4z"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',back:'<path d="M15 5l-7 7 7 7"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>'};
var BL=['M23 13.5c7.8-.6 15 4 15.6 11.2.6 7.6-5.4 13-13.4 13.6-8.4.6-15.6-3.6-16-11-.4-7.2 6-13.2 13.8-13.8z','M10 27.5c1.6-7 9-11.8 17-11 7.6.8 12.6 6.4 11.6 12.6-1 6.6-8.2 10.2-16 9.8-8.8-.4-14.2-5-12.6-11.4z','M14.5 15.5c5-4.4 13.6-4.6 19-.4 5.4 4.2 6 12.4 1.2 17.6-5 5.4-14.4 6.4-20 2-5.6-4.4-5.4-14.6-.2-19.2z'];
function stk(x,y,n,r){r=r||7;var h=3.6,o=[],i,t;for(i=0;i<n;i++){t=y-(i+1)*h;o.push('M'+(x-r)+' '+t+'v'+h+'a'+r+' 2.8 0 0 0 '+(2*r)+' 0v-'+h)}t=y-n*h;o.push('M'+(x-r)+' '+t+'a'+r+' 2.8 0 1 0 '+(2*r)+' 0a'+r+' 2.8 0 1 0 -'+(2*r)+' 0');return o}
var ICO={
inc:[1,['M10 15.5a2.5 2.5 0 0 1 2.5-2.5h19a2.5 2.5 0 0 1 2.5 2.5v7.5','M10 15.5V34a2.5 2.5 0 0 0 2.5 2.5H27','M10 20h24','M16 10v5','M28 10v5','M15 25h3','M21 25h3','M15 30.5h3','C:36,33,6.5','M36 30v6','M33 33h6']],
wealth:[2,['M6 38.5h36','M10.5 38.5v-6h4v6','M17.5 38.5v-10h4v10','M24.5 38.5v-14h4v14','M31.5 38.5v-19h4v19','M9 25l8.5-7.5 6 4.5L37 9.5','M31 9.5h6v6']],
spot:[0,['M6 38.5h36','M9 38.5L22 12l13 26.5','M14.5 38.5L22 23l7.5 15.5','M20 38.5v-5.5h4v5.5','C:38,11,2.8','M38 5v1.6','M38 15.4v1.6','M32 11h1.6','M42.4 11h1.6','M33.8 6.8l1.1 1.1','M41.1 14.1l1.1 1.1','M42.2 6.8l-1.1 1.1','M34.9 14.1l-1.1 1.1']],
explore:[0,['C:24,24,12.5','M29.2 18.8l-3.2 7.2-7.2 3.2 3.2-7.2z','M24 9v2','M24 37v2','M9 24h2','M37 24h2']],
b1:[1,stk(24,36,2,8)],
b2:[1,stk(17.5,36,3).concat(stk(31.5,36,2))],
b3:[1,stk(11.5,36,2,6).concat(stk(24,36,4,6),stk(36.5,36,3,6))],
b4:[2,['M12.5 19.5l5.5-7.5h12l5.5 7.5L24 36z','M12.5 19.5h23','M18 12l6 7.5 6-7.5','M18.5 19.5L24 36','M29.5 19.5L24 36','M39 7v4.5','M36.75 9.25h4.5','M9.5 29v3.5','M7.75 30.75h3.5']],
yes:[1,['M6 23L19 12l13 11','M9 20.5V36h20V20.5','M16 36v-7h6v7','C:36.5,32.5,6.5','M33.6 32.6l2 2 3.8-4']],
first:[0,['C:16,29,7','C:16,29,2.4','M21.2 24.3L36 10.5','M30.6 15.5l3.6 3.6','M34.4 12l3 3','M39 25v4.5','M36.75 27.25h4.5']],
look:[2,['C:21,21,11','M29 29l9 9','M15.5 22.5l5.5-4.8 5.5 4.8','M17 21.4V27h8v-5.6']],
passive:[1,['M8 13v25.5','M40 13v25.5','M5 38.5h38','M8 17.5c5 12.5 27 12.5 32 0','M14 22.5c5.5 4 14.5 4 20 0','M29 6h4l-4 4.5h4','M35.5 2.5h3l-3 3.5h3']],
some:[0,['C:17,17,4.6','M8.5 35c.9-5.6 4.2-9 8.5-9s7.6 3.4 8.5 9','C:32,19,4','M27 28.2c1.4-1.4 3.1-2.2 5-2.2 3.8 0 6.6 3 7.4 7.8']],
self:[2,['M14 13.5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5V37a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 14 37z','M20 8.5h8v4.5h-8z','M18.5 21l1.6 1.6 3-3.2','M26 21h4','M18.5 27.5l1.6 1.6 3-3.2','M26 27.5h4','M18.5 34h2.5','M26 34h4']]};
function svgI(k){var v=ICO[k];if(!v)return '';return '<svg class="wbi-ico" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path class="bl" d="'+BL[v[0]]+'"/><g class="ln">'+v[1].map(function(p){if(p.indexOf('C:')===0){var c=p.slice(2).split(',');return '<circle cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'"/>'}return '<path d="'+p+'"/>'}).join('')+'</g></svg>'}
var ST=[
{k:'goal',f:'Goal',ic:'target',h:'What’s your main goal with an Airbnb cabin investment?',s:'Pick the one that fits you best.',e:'Please pick your main goal to continue.',o:[['Extra monthly income','inc'],['Build long-term wealth','wealth'],['Own a vacation spot I can also rent','spot'],['Just exploring for now','explore']]},
{k:'budget',f:'Budget',ic:'coins',h:'How much are you roughly looking to invest?',s:'A rough range is fine. It helps us pick the right cabin examples for you.',e:'Please pick a rough range to continue.',o:[['Under €50k','b1'],['€50k–€150k','b2'],['€150k–€300k','b3'],['€300k+','b4']]},
{k:'rentals',f:'Owns rentals',ic:'home',h:'Do you already own any rental properties?',s:'Either answer is fine. It helps us tailor the numbers we send you.',e:'Please pick one answer to continue.',o:[['Yes','yes'],['No, this would be my first','first'],['Not yet, but I’ve been looking','look']]},
{k:'inv',f:'Involvement',ic:'hand',h:'How hands-on do you want to be?',s:'Pick what sounds most like you.',e:'Please pick one answer to continue.',o:[['Fully passive (someone else manages it)','passive'],['Somewhat involved','some'],['I want to manage it myself','self']]},
{k:'email',f:'Email',ic:'mail',h:'What’s the best email to send you some real cabin examples + numbers?',s:'We’ll send real Winbaum cabin examples with the numbers behind them.',ph:'name@email.com'}];
var N=ST.length,A={},cur=0,M,C,B,last,H,F,busy=0,auto;
function esc(t){var d=document.createElement('div');d.textContent=t==null?'':String(t);return d.innerHTML}
function host(){H=document.querySelector('[data-wbif]');F=H&&H.querySelector('form')}
function logo(){var i=document.querySelector('.nav_brand img');return i?(i.currentSrc||i.src):'https://cdn.prod.website-files.com/6a22ae12d1ef679d8c4fdf43/6a2949f34b22543ef9664cba_winbaum-lockup-light%202.svg'}
function fz(el){if(!el)return;var f=function(){try{el.focus({preventScroll:true})}catch(e){el.focus()}};f();if(document.activeElement!==el)setTimeout(f,60)}
function build(){if(M)return;M=document.createElement('div');M.className='wbl wbi';M.hidden=true;M.setAttribute('role','dialog');M.setAttribute('aria-modal','true');M.setAttribute('aria-labelledby','wbi-h');
var d='';for(var j=0;j<N;j++)d+='<i></i>';
M.innerHTML='<div class="wbl-bg" data-x></div><div class="wbl-c"><div class="wbl-top"><div class="wbl-l"></div><div class="wbl-ds" aria-hidden="true">'+d+'</div><button type="button" class="wbl-ib wbl-x" data-x aria-label="Close">'+ic(I.x,20)+'</button></div><div class="wbl-b"></div></div>';
document.body.appendChild(M);C=M.querySelector('.wbl-c');B=M.querySelector('.wbl-b');
M.addEventListener('click',function(e){if(e.target.closest('[data-x]'))close()});
M.addEventListener('keydown',key)}
function top(i){var l=M.querySelector('.wbl-l');if(i>0&&i<N){l.innerHTML='<button type="button" class="wbl-ib wbl-bk" aria-label="Back">'+ic(I.back,20)+'</button>';l.firstChild.addEventListener('click',function(){if(!busy)go(cur-1)})}else{l.innerHTML='<img src="'+logo()+'" alt="Winbaum" width="81" height="22">'}
[].forEach.call(M.querySelectorAll('.wbl-ds i'),function(d,j){d.className=i>=N?'d':j<i?'d':j===i?'a':''})}
function go(i){if(i<0)return;clearTimeout(auto);cur=i;top(i);var s=ST[i],o='<p class="wbl-st">'+ic(I[s.ic],18)+'<span>Step '+(i+1)+' of '+N+'</span></p><h2 class="wbl-h" id="wbi-h">'+s.h+'</h2><p class="wbl-sub" id="wbi-s">'+s.s+'</p>';
if(s.o){o+='<div class="wbi-opts" role="radiogroup" aria-labelledby="wbi-h" aria-describedby="wbi-s">'+s.o.map(function(t,j){var on=A[s.k]===t[0];return '<button type="button" class="wbi-opt" role="radio" aria-checked="'+(on?'true':'false')+'"><kbd aria-hidden="true">'+String.fromCharCode(65+j)+'</kbd>'+svgI(t[1])+'<span class="wbi-lb">'+esc(t[0])+'</span><span class="ck" aria-hidden="true">'+ic(I.check,12)+'</span></button>'}).join('')+'</div><p class="wbl-er" role="alert"></p><button type="button" class="wbl-go" data-go>Continue '+ic(I.arrow,18)+'</button><p class="wbl-kb k">Press <b>A–'+String.fromCharCode(64+s.o.length)+'</b> to choose</p>'}
else{o+='<label for="wbi-i" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Email address</label><input class="wbl-i" id="wbi-i" type="email" autocomplete="email" placeholder="'+esc(s.ph)+'" inputmode="email" autocapitalize="off" spellcheck="false"><p class="wbl-er" role="alert"></p><button type="button" class="wbl-go g" data-go>Send me the examples '+ic(I.send,18)+'</button><p class="wbi-legal">By submitting you agree to get emails from Winbaum about cabin investments. Unsubscribe any time. <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></p>'}
B.innerHTML=o;C.scrollTop=0;
if(s.o){var bs=[].slice.call(B.querySelectorAll('.wbi-opt'));bs.forEach(function(b,j){b.addEventListener('click',function(){pick(j)})});fz(B.querySelector('.wbi-opt[aria-checked="true"]')||bs[0])}
else{var inp=B.querySelector('.wbl-i');inp.value=A[s.k]||'';inp.addEventListener('input',function(){A[s.k]=inp.value;err('')});fz(inp)}
B.querySelector('[data-go]').addEventListener('click',next)}
function pick(j){var s=ST[cur];if(!s||!s.o||busy)return;A[s.k]=s.o[j][0];err('');[].forEach.call(B.querySelectorAll('.wbi-opt'),function(b,k){b.setAttribute('aria-checked',k===j?'true':'false');if(k===j)fz(b)});clearTimeout(auto);var c=cur;auto=setTimeout(function(){if(cur===c&&!M.hidden)next()},RM?0:340)}
function err(t){var e=B&&B.querySelector('.wbl-er');if(!e)return;e.textContent=t;var inp=B.querySelector('.wbl-i');if(inp)inp.setAttribute('aria-invalid',t?'true':'false')}
function next(){if(busy)return;clearTimeout(auto);var s=ST[cur],v=(A[s.k]||'').trim().replace(/\s+/g,' ');
if(s.o&&!v)return err(s.e);
if(!s.o&&!/^[^ @]+@[^ @]+[.][^ @]{2,}$/.test(v))return err('Please enter a valid email address.');
A[s.k]=v;if(cur===N-1)return send();go(cur+1)}
function key(e){if(e.key==='Escape'){e.preventDefault();close();return}
if(e.key==='Tab'){var f=[].filter.call(M.querySelectorAll('button,input,a[href]'),function(x){return !x.disabled&&x.offsetParent!==null});if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}return}
var s=ST[cur];if(s&&s.o&&!M.classList.contains('dn')&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key&&e.key.length===1){var j=e.key.toUpperCase().charCodeAt(0)-65;if(j>=0&&j<s.o.length){e.preventDefault();pick(j);return}}
if(s&&s.o&&/^Arrow(Up|Down|Left|Right)$/.test(e.key)&&e.target.classList&&e.target.classList.contains('wbi-opt')){var bs=[].slice.call(B.querySelectorAll('.wbi-opt')),k=bs.indexOf(e.target),d=/Up|Left/.test(e.key)?-1:1;e.preventDefault();fz(bs[(k+d+bs.length)%bs.length]);return}
if(e.key==='Enter'&&!M.classList.contains('dn')&&e.target.tagName==='INPUT'){e.preventDefault();next()}}
function open(src){build();last=src||document.activeElement;if(M.classList.contains('dn')){M.classList.remove('dn');A={}}busy=0;M.hidden=false;go(0);document.documentElement.classList.add('wbl-on');requestAnimationFrame(function(){requestAnimationFrame(function(){M.classList.add('on')})})}
function close(){if(!M||M.hidden)return;clearTimeout(auto);M.classList.remove('on');document.documentElement.classList.remove('wbl-on');setTimeout(function(){M.hidden=true},320);if(location.hash===HASH&&history.replaceState)try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}if(last&&last.focus)try{last.focus({preventScroll:true})}catch(e){}}
function setF(n,v){if(!F)return;var el=F.querySelector('[data-name="'+n+'"]')||F.querySelector('[name="'+n+'"]');if(el)el.value=v}
function send(){host();var b=B.querySelector('[data-go]');if(!F){fail();return}
busy=1;b.disabled=true;b.innerHTML='Sending…';err('');
ST.forEach(function(s){setF(s.f,A[s.k]||'')});setF('Page',location.href);
var dn=H.querySelector('.w-form-done'),fl=H.querySelector('.w-form-fail');F.style.display='';if(dn)dn.style.display='none';if(fl)fl.style.display='none';
var t,mo,fin=function(v){if(!busy)return;busy=0;clearTimeout(t);if(mo)mo.disconnect();window.removeEventListener('submit',guard);if(v)done();else fail()};
function vis(el){return el&&getComputedStyle(el).display!=='none'}
if(window.MutationObserver){mo=new MutationObserver(function(){if(vis(dn))fin(true);else if(vis(fl))fin(false)});[dn,fl].forEach(function(el){if(el)mo.observe(el,{attributes:true,attributeFilter:['style','class']})})}
function guard(e){if(e.target===F&&!e.defaultPrevented){e.preventDefault();fin(false)}}
window.addEventListener('submit',guard);t=setTimeout(function(){fin(vis(dn))},25000);
F.noValidate=true;var sb=F.querySelector('[type=submit]');try{if(F.requestSubmit)F.requestSubmit(sb||undefined);else if(sb)sb.click();else fin(false)}catch(x){fin(false)}}
function fail(){busy=0;var b=B.querySelector('[data-go]');if(b){b.disabled=false;b.innerHTML='Try again '+ic(I.send,18)}err('We couldn’t send that just now. Please try again in a moment.')}
function done(){M.classList.add('dn');top(N);try{if(typeof window.fbq==='function')window.fbq('track','Lead',{content_name:'Investor interest'});if(typeof window.gtag==='function')window.gtag('event','generate_lead',{form_name:'Investor interest'})}catch(e){}
B.innerHTML='<span class="wbl-ok2">'+ic(I.check,28)+'</span><h2 class="wbl-h" id="wbi-h">Thanks, you’re <em>all set</em>.</h2><p class="wbl-p">We’ll send real cabin examples and numbers to <b>'+esc(A.email)+'</b>. In the meantime, see how short-term rentals perform near you.</p><a class="wbl-go" href="/investors" data-item="investor-form-success">Check Airbnb Profitability '+ic(I.arrow,18)+'</a><button type="button" class="wbl-ln" data-x>Close</button>';
setTimeout(function(){var x=B.querySelector('a.wbl-go');if(x)x.focus()},60)}
function arm(){[].forEach.call(document.querySelectorAll(SEL),function(b){if(b.__wbi)return;b.__wbi=1;b.setAttribute('aria-haspopup','dialog')})}
window.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest(SEL);if(!b)return;host();if(!F)return;e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();if(b.classList.contains('is-go'))return;if(b.closest('.nav_menu-mobile')){var mb=document.querySelector('a.menu-button');if(mb&&mb.offsetParent!==null)try{mb.click()}catch(x){}}b.classList.add('is-go');setTimeout(function(){open(b);setTimeout(function(){b.classList.remove('is-go')},500)},RM?0:150)},true);
function hash(){if(location.hash===HASH){host();if(F&&(!M||M.hidden))open()}}
function init(){host();arm();hash()}
window.addEventListener('hashchange',hash);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
window.wbI={open:open}})();
