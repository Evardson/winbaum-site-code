(function(){if(window.wbL)return;
var SEL='.landowner_cta-band .landowner_button-light,[data-wbl-open]',MAXP=3,MAXB=10485760,RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function ic(p,w){w=w||18;return '<svg width="'+w+'" height="'+w+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
var I={user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',cam:'<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',send:'<path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4z"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',back:'<path d="M15 5l-7 7 7 7"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',plus:'<path d="M12 5v14M5 12h14"/>'};
var ST=[{k:'loc',ic:'pin',ph:'Country, region and nearest town',ty:'text',ac:'off'},{k:'name',ic:'user',ph:'Full name',ty:'text',ac:'name'},{k:'email',ic:'mail',ph:'name@email.com',ty:'email',ac:'email'},{k:'photos',ic:'cam'}];
var A={},P=[],uid=0,cur=0,M,C,B,last,H,F,busy=0,wait=0;
function first(){return (A.name||'').trim().split(' ')[0]}
function esc(t){var d=document.createElement('div');d.textContent=t==null?'':String(t);return d.innerHTML}
function host(){H=document.querySelector('[data-wblf]');F=H&&H.querySelector('form')}
function logo(){var i=document.querySelector('.nav_brand img');return i?(i.currentSrc||i.src):'https://cdn.prod.website-files.com/6a22ae12d1ef679d8c4fdf43/6a2949f34b22543ef9664cba_winbaum-lockup-light%202.svg'}
function build(){if(M)return;M=document.createElement('div');M.className='wbl';M.hidden=true;M.setAttribute('role','dialog');M.setAttribute('aria-modal','true');M.setAttribute('aria-labelledby','wbl-h');
M.innerHTML='<div class="wbl-bg" data-x></div><div class="wbl-c"><div class="wbl-top"><div class="wbl-l"></div><div class="wbl-ds" aria-hidden="true"><i></i><i></i><i></i><i></i></div><button type="button" class="wbl-ib wbl-x" data-x aria-label="Close">'+ic(I.x,20)+'</button></div><div class="wbl-b"></div></div>';
document.body.appendChild(M);C=M.querySelector('.wbl-c');B=M.querySelector('.wbl-b');
M.addEventListener('click',function(e){if(e.target.closest('[data-x]'))close()});
M.addEventListener('keydown',key)}
function top(i){var l=M.querySelector('.wbl-l');if(i>0&&i<4){l.innerHTML='<button type="button" class="wbl-ib wbl-bk" aria-label="Back">'+ic(I.back,20)+'</button>';l.firstChild.addEventListener('click',function(){if(!busy)go(cur-1)})}else{l.innerHTML='<img src="'+logo()+'" alt="Winbaum" width="81" height="22">'}
[].forEach.call(M.querySelectorAll('.wbl-ds i'),function(d,j){d.className=i>3?'d':j<i?'d':j===i?'a':''})}
function head(i){var h;if(i===0)h='Where is your land?';else if(i===1)h='What’s your name?';else if(i===2)h='Nice to meet you, <em>'+esc(first())+'</em>. What’s your email?';else h='Add a few photos of the land';return '<h2 class="wbl-h" id="wbl-h">'+h+'</h2>'}
function go(i){if(i<0)return;cur=i;top(i);var s=ST[i],o='<p class="wbl-st">'+ic(I[s.ic],18)+'<span>Step '+(i+1)+' of 4'+(i===3?' · Optional':'')+'</span></p>'+head(i);
if(s.k==='photos'){o+='<p class="wbl-sub">The view, the access road and the plot itself help us judge it faster. Up to '+MAXP+' photos.</p><div class="wbl-ph" aria-live="polite"></div><p class="wbl-er" role="alert"></p><button type="button" class="wbl-go g" data-go>Send my land details '+ic(I.send,18)+'</button><p class="wbl-kb">No photos to hand? You can send without them.</p>'}
else{o+='<label for="wbl-i" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">'+esc(s.ph)+'</label><input class="wbl-i" id="wbl-i" type="'+s.ty+'" autocomplete="'+s.ac+'" placeholder="'+esc(s.ph)+'"'+(s.ty==='email'?' inputmode="email" autocapitalize="off" spellcheck="false"':'')+'><p class="wbl-er" role="alert"></p><button type="button" class="wbl-go" data-go>Continue '+ic(I.arrow,18)+'</button><p class="wbl-kb k">Press <b>Enter ↵</b></p>'}
B.innerHTML=o;C.scrollTop=0;var inp=B.querySelector('.wbl-i');if(inp){inp.value=A[s.k]||'';inp.addEventListener('input',function(){A[s.k]=inp.value;err('')});var fz=function(){try{inp.focus({preventScroll:true})}catch(e){inp.focus()}};fz();if(document.activeElement!==inp)setTimeout(fz,60)}
B.querySelector('[data-go]').addEventListener('click',next);
if(s.k==='photos'){draw();setTimeout(function(){var b=B.querySelector('.wbl-add input')||B.querySelector('[data-go]');if(b)try{b.focus({preventScroll:true})}catch(e){}},60)}}
function draw(){var g=B&&B.querySelector('.wbl-ph');if(!g)return;var o=P.map(function(p){return '<div class="wbl-t '+p.st+'" data-u="'+p.u+'"><img src="'+p.url+'" alt=""><span class="wbl-pb"><i style="width:'+Math.round(p.pr*100)+'%"></i></span><span class="wbl-ok" aria-hidden="true">'+ic(I.check,14)+'</span><span class="wbl-em">'+esc(p.msg||'')+'</span><button type="button" class="wbl-rm" aria-label="Remove photo">'+ic(I.x,14)+'</button></div>'}).join('');
if(P.length<MAXP)o+='<label class="wbl-add"><span>'+ic(P.length?I.plus:I.cam,22)+'</span><span class="tx"><b>'+(P.length?'Add another':'Choose photos')+'</b><small>'+(matchMedia('(pointer:coarse)').matches?'From your camera roll':'or drop them here')+'</small></span><input class="wbl-fi" type="file" accept="image/*" multiple></label>';
g.className='wbl-ph'+(P.length?'':' e1');g.innerHTML=o;
var fi=g.querySelector('.wbl-fi');if(fi)fi.addEventListener('change',function(){add(fi.files);fi.value=''});
[].forEach.call(g.querySelectorAll('.wbl-rm'),function(b){b.addEventListener('click',function(){rm(+b.parentNode.getAttribute('data-u'))})});
if(!g.__d){g.__d=1;['dragenter','dragover'].forEach(function(ev){g.addEventListener(ev,function(e){e.preventDefault();g.classList.add('dr')})});['dragleave','drop'].forEach(function(ev){g.addEventListener(ev,function(e){e.preventDefault();if(ev==='drop'||!g.contains(e.relatedTarget))g.classList.remove('dr')})});g.addEventListener('drop',function(e){if(e.dataTransfer&&e.dataTransfer.files)add(e.dataTransfer.files)})}}
function bar(p){var t=B&&B.querySelector('.wbl-t[data-u="'+p.u+'"] .wbl-pb i');if(t)t.style.width=Math.round(p.pr*100)+'%'}
function add(fl){var n=0,skip=0;[].forEach.call(fl||[],function(f){if(P.length>=MAXP){skip++;return}if(f.type&&!/^image\//.test(f.type)){n++;return}var p={u:++uid,file:f,url:URL.createObjectURL(f),st:'up',pr:0,fid:null};P.push(p);up(p)});draw();err(skip?'You can add up to '+MAXP+' photos.':n?'Please choose image files (JPG, PNG or HEIC).':'')}
function rm(u){P=P.filter(function(p){if(p.u!==u)return true;p.gone=1;if(p.xhr)try{p.xhr.abort()}catch(e){}try{URL.revokeObjectURL(p.url)}catch(e){}return false});draw();err('');chk()}
function prep(f){return new Promise(function(res){var u=URL.createObjectURL(f),im=new Image();im.onload=function(){var w=im.naturalWidth,h=im.naturalHeight,m=Math.max(w,h);if(f.size<=1800000&&m<=2600&&/jpe?g|png|webp/i.test(f.type)){URL.revokeObjectURL(u);return res(f)}var s=Math.min(1,2400/m),cv=document.createElement('canvas');cv.width=Math.max(1,Math.round(w*s));cv.height=Math.max(1,Math.round(h*s));var cx=cv.getContext('2d');cx.fillStyle='#fff';cx.fillRect(0,0,cv.width,cv.height);cx.drawImage(im,0,0,cv.width,cv.height);URL.revokeObjectURL(u);cv.toBlob(function(b){if(!b)return res(f.size<=MAXB?f:null);var n=(f.name||'land-photo').replace(/\.[^.]+$/,'')+'.jpg';try{res(new File([b],n,{type:'image/jpeg'}))}catch(e){b.name=n;res(b)}},'image/jpeg',.86)};im.onerror=function(){URL.revokeObjectURL(u);res(f.size<=MAXB?f:null)};im.src=u})}
function up(p){var site=document.documentElement.getAttribute('data-wf-site');function bad(m){if(p.gone)return;p.st='err';p.msg=m||'Upload failed';draw();chk()}
prep(p.file).then(function(f){if(p.gone)return;if(!f||f.size>MAXB)return bad('Too large (max 10 MB)');var nm=f.name||'land-photo.jpg',q=new URLSearchParams({name:nm,size:f.size});
return fetch('https://formdata.webflow.com/api/v1/form/'+site+'/signFile?'+q.toString()).then(function(r){return r.json().then(function(j){if(!r.ok||!j||!j.s3Url)throw j;return j})}).then(function(j){if(p.gone)return;var fd=new FormData(),k;for(k in j.postData)fd.append(k,j.postData[k]);fd.append('file',f,j.fileName);var x=new XMLHttpRequest();p.xhr=x;x.open('POST',j.s3Url);x.upload.onprogress=function(e){if(e.lengthComputable){p.pr=Math.min(.98,e.loaded/e.total);bar(p)}};x.onload=function(){p.xhr=null;if(p.gone)return;if(x.status>=200&&x.status<300){p.st='ok';p.pr=1;p.fid=j.fileId;draw();chk()}else bad()};x.onerror=function(){p.xhr=null;bad()};x.send(fd)})}).catch(function(e){var m=e&&e.msg||'';bad(/FileType/.test(m)?'File type not allowed':/FileSize/.test(m)?'Too large (max 10 MB)':'Upload failed')})}
function chk(){if(wait&&!P.some(function(p){return p.st==='up'})){wait=0;busy=0;send()}}
function err(t,html){var e=B&&B.querySelector('.wbl-er');if(!e)return;if(html)e.innerHTML=t;else e.textContent=t;var inp=B.querySelector('.wbl-i');if(inp)inp.setAttribute('aria-invalid',t?'true':'false')}
function next(){if(busy)return;var s=ST[cur],v=(A[s.k]||'').trim();
if(s.k==='loc'&&v.length<2)return err('Please tell us where your land is.');
if(s.k==='name'&&v.length<2)return err('Please enter your name.');
if(s.k==='email'&&!/^[^ @]+@[^ @]+[.][^ @]{2,}$/.test(v))return err('Please enter a valid email address.');
if(s.k==='photos')return send();
A[s.k]=v;go(cur+1)}
function key(e){if(e.key==='Escape'){e.preventDefault();close();return}
if(e.key==='Tab'){var f=[].filter.call(M.querySelectorAll('button,input,a[href]'),function(x){return !x.disabled&&(x.offsetParent!==null||x.classList.contains('wbl-fi'))});if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}return}
if(e.key==='Enter'&&!M.classList.contains('dn')&&e.target.tagName==='INPUT'&&e.target.type!=='file'){e.preventDefault();next()}}
function reset(){A={};P.forEach(function(p){p.gone=1;if(p.xhr)try{p.xhr.abort()}catch(e){}try{URL.revokeObjectURL(p.url)}catch(e){}});P=[];busy=0;wait=0}
function open(src){build();last=src||document.activeElement;if(M.classList.contains('dn')){M.classList.remove('dn');reset()}M.hidden=false;go(0);document.documentElement.classList.add('wbl-on');requestAnimationFrame(function(){requestAnimationFrame(function(){M.classList.add('on')})})}
function close(){if(!M||M.hidden)return;M.classList.remove('on');document.documentElement.classList.remove('wbl-on');setTimeout(function(){M.hidden=true},320);if(last&&last.focus)try{last.focus({preventScroll:true})}catch(e){}}
function setF(n,v){if(!F)return;var el=F.querySelector('[data-name="'+n+'"]')||F.querySelector('[name="'+n+'"]');if(el)el.value=v}
function send(){host();var b=B.querySelector('[data-go]');if(!F){fail();return}
if(P.some(function(p){return p.st==='up'})){wait=1;busy=1;b.disabled=true;b.innerHTML='Uploading photos…';return}
busy=1;b.disabled=true;b.innerHTML='Sending…';err('');
var ok=P.filter(function(p){return p.st==='ok'&&p.fid});
setF('Land location',A.loc.trim());setF('Name',A.name.trim());setF('Email',A.email.trim());setF('Page',location.href);
[].forEach.call(F.querySelectorAll('input[type=file]'),function(el,i){if(ok[i])el.setAttribute('data-value',ok[i].fid);else el.removeAttribute('data-value')});
var dn=H.querySelector('.w-form-done'),fl=H.querySelector('.w-form-fail');F.style.display='';if(dn)dn.style.display='none';if(fl)fl.style.display='none';
var t,mo,fin=function(v){if(!busy)return;busy=0;clearTimeout(t);if(mo)mo.disconnect();window.removeEventListener('submit',guard);if(v)done(ok.length);else fail()};
function vis(el){return el&&getComputedStyle(el).display!=='none'}
if(window.MutationObserver){mo=new MutationObserver(function(){if(vis(dn))fin(true);else if(vis(fl))fin(false)});[dn,fl].forEach(function(el){if(el)mo.observe(el,{attributes:true,attributeFilter:['style','class']})})}
function guard(e){if(e.target===F&&!e.defaultPrevented){e.preventDefault();fin(false)}}
window.addEventListener('submit',guard);t=setTimeout(function(){fin(vis(dn))},25000);
F.noValidate=true;var sb=F.querySelector('[type=submit]');try{if(F.requestSubmit)F.requestSubmit(sb||undefined);else if(sb)sb.click();else fin(false)}catch(x){fin(false)}}
function fail(){busy=0;wait=0;var b=B.querySelector('[data-go]');if(b){b.disabled=false;b.innerHTML='Try again '+ic(I.send,18)}err('We couldn’t send this just now. Please try again, or use the full form further down this page.')}
function done(n){M.classList.add('dn');top(4);try{if(typeof window.fbq==='function')window.fbq('track','Lead',{content_name:'Land owner quick inquiry'});if(typeof window.gtag==='function')window.gtag('event','generate_lead',{form_name:'Land owner quick inquiry'})}catch(e){}
B.innerHTML='<span class="wbl-ok2">'+ic(I.check,28)+'</span><h2 class="wbl-h" id="wbl-h">Thank you, <em>'+esc(first())+'</em>.</h2><p class="wbl-p">Your land in <b>'+esc(A.loc)+'</b>'+(n?' and your '+(n>1?n+' photos':'photo'):'')+' '+(n?'are':'is')+' with our team. We’ll reply to <b>'+esc(A.email)+'</b> with an honest first opinion.</p><button type="button" class="wbl-go" data-x>Close</button>';
setTimeout(function(){var x=B.querySelector('[data-x]');if(x)x.focus()},60)}
function pos(b,e){var r=b.getBoundingClientRect();b.style.setProperty('--wbx',Math.round(e.clientX-r.left)+'px');b.style.setProperty('--wby',Math.round(e.clientY-r.top)+'px')}
function arm(){[].forEach.call(document.querySelectorAll(SEL),function(b){if(b.__wbl)return;b.__wbl=1;if(b.matches('.landowner_cta-band .landowner_button-light')&&!b.querySelector('.wbl-ba')){var s=document.createElement('span');s.className='wbl-ba';s.setAttribute('aria-hidden','true');s.innerHTML=ic(I.arrow,18);b.appendChild(s)}b.setAttribute('aria-haspopup','dialog');b.addEventListener('pointerenter',function(e){pos(b,e)});b.addEventListener('pointerdown',function(e){pos(b,e)})})}
window.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest(SEL);if(!b)return;host();if(!F)return;e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();if(b.classList.contains('is-go'))return;b.classList.add('is-go');setTimeout(function(){open(b);setTimeout(function(){b.classList.remove('is-go')},700)},RM?0:260)},true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){host();arm()});else{host();arm()}
window.wbL={open:open}})();
