var wt=Object.defineProperty;var Fe=e=>{throw TypeError(e)};var yt=(e,t,s)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>yt(e,typeof t!="symbol"?t+"":t,s),Ne=(e,t,s)=>t.has(e)||Fe("Cannot "+s);var a=(e,t,s)=>(Ne(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,i)=>(Ne(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),g=(e,t,s)=>(Ne(e,t,"access private method"),s);var Le=(e,t,s,i)=>({set _(r){f(e,t,r,s)},get _(){return a(e,t,i)}});var Ue=(e,t,s)=>(i,r)=>{let n=-1;return o(0);async function o(l){if(l<=n)throw new Error("next() called multiple times");n=l;let d,c=!1,h;if(e[l]?(h=e[l][0][0],i.req.routeIndex=l):h=l===e.length&&r||void 0,h)try{d=await h(i,()=>o(l+1))}catch(u){if(u instanceof Error&&t)i.error=u,d=await t(u,i),c=!0;else throw u}else i.finalized===!1&&s&&(d=await s(i));return d&&(i.finalized===!1||c)&&(i.res=d),i}},bt=Symbol(),xt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:i=!1}=t,n=(e instanceof it?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:i}):{}};async function Et(e,t){const s=await e.formData();return s?Rt(s,t):{}}function Rt(e,t){const s=Object.create(null);return e.forEach((i,r)=>{t.all||r.endsWith("[]")?Ot(s,r,i):s[r]=i}),t.dot&&Object.entries(s).forEach(([i,r])=>{i.includes(".")&&(Tt(s,i,r),delete s[i])}),s}var Ot=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Tt=(e,t,s)=>{let i=e;const r=t.split(".");r.forEach((n,o)=>{o===r.length-1?i[n]=s:((!i[n]||typeof i[n]!="object"||Array.isArray(i[n])||i[n]instanceof File)&&(i[n]=Object.create(null)),i=i[n])})},Qe=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},jt=e=>{const{groups:t,path:s}=St(e),i=Qe(s);return Ct(i,t)},St=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,i)=>{const r=`@${i}`;return t.push([r,s]),r}),{groups:t,path:e}},Ct=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[i]=t[s];for(let r=e.length-1;r>=0;r--)if(e[r].includes(i)){e[r]=e[r].replace(i,t[s][1]);break}}return e},Oe={},kt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const i=`${e}#${t}`;return Oe[i]||(s[2]?Oe[i]=t&&t[0]!==":"&&t[0]!=="*"?[i,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Oe[i]=[e,s[1],!0]),Oe[i]}return null},De=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},At=e=>De(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let i=s;for(;i<t.length;i++){const r=t.charCodeAt(i);if(r===37){const n=t.indexOf("?",i),o=t.indexOf("#",i),l=n===-1?o===-1?void 0:o:o===-1?n:Math.min(n,o),d=t.slice(s,l);return At(d.includes("%25")?d.replace(/%25/g,"%2525"):d)}else if(r===63||r===35)break}return t.slice(s,i)},Pt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let i="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))i+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&i===""?s.push("/"):s.push(i);const n=r.replace("?","");i+="/"+n,s.push(i)}else i+="/"+r}),s.filter((r,n,o)=>o.indexOf(r)===n)},Ie=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?De(e,st):e):e,tt=(e,t,s)=>{let i;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const d=o+t.length+2,c=e.indexOf("&",d);return Ie(e.slice(d,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(i=/[%+]/.test(e),!i)return}const r={};i??(i=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const o=e.indexOf("&",n+1);let l=e.indexOf("=",n);l>o&&o!==-1&&(l=-1);let d=e.slice(n+1,l===-1?o===-1?void 0:o:l);if(i&&(d=Ie(d)),n=o,d==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),i&&(c=Ie(c))),s?(r[d]&&Array.isArray(r[d])||(r[d]=[]),r[d].push(c)):r[d]??(r[d]=c)}return t?r[t]:r},Nt=tt,It=(e,t)=>tt(e,t,!0),st=decodeURIComponent,ze=e=>De(e,st),ne,S,$,rt,nt,Me,U,Ke,it=(Ke=class{constructor(e,t="/",s=[[]]){v(this,$);p(this,"raw");v(this,ne);v(this,S);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});v(this,U,e=>{const{bodyCache:t,raw:s}=this,i=t[e];if(i)return i;const r=Object.keys(t)[0];return r?t[r].then(n=>(r==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,S,s),f(this,ne,{})}param(e){return e?g(this,$,rt).call(this,e):g(this,$,nt).call(this)}query(e){return Nt(this.url,e)}queries(e){return It(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,i)=>{t[i]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await xt(this,e))}json(){return a(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,U).call(this,"text")}arrayBuffer(){return a(this,U).call(this,"arrayBuffer")}blob(){return a(this,U).call(this,"blob")}formData(){return a(this,U).call(this,"formData")}addValidatedData(e,t){a(this,ne)[e]=t}valid(e){return a(this,ne)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return a(this,S)}get matchedRoutes(){return a(this,S)[0].map(([[,e]])=>e)}get routePath(){return a(this,S)[0].map(([[,e]])=>e)[this.routeIndex].path}},ne=new WeakMap,S=new WeakMap,$=new WeakSet,rt=function(e){const t=a(this,S)[0][this.routeIndex][1][e],s=g(this,$,Me).call(this,t);return s&&/\%/.test(s)?ze(s):s},nt=function(){const e={},t=Object.keys(a(this,S)[0][this.routeIndex][1]);for(const s of t){const i=g(this,$,Me).call(this,a(this,S)[0][this.routeIndex][1][s]);i!==void 0&&(e[s]=/\%/.test(i)?ze(i):i)}return e},Me=function(e){return a(this,S)[1]?a(this,S)[1][e]:e},U=new WeakMap,Ke),_t={Stringify:1},at=async(e,t,s,i,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(r?r[0]+=e:r=[e],Promise.all(n.map(l=>l({phase:t,buffer:r,context:i}))).then(l=>Promise.all(l.filter(Boolean).map(d=>at(d,t,!1,i,r))).then(()=>r[0]))):Promise.resolve(e)},Mt="text/plain; charset=UTF-8",_e=(e,t)=>({"Content-Type":e,...t}),ge,me,_,ae,M,j,we,oe,ce,Y,ye,be,z,ie,Ge,Dt=(Ge=class{constructor(e,t){v(this,z);v(this,ge);v(this,me);p(this,"env",{});v(this,_);p(this,"finalized",!1);p(this,"error");v(this,ae);v(this,M);v(this,j);v(this,we);v(this,oe);v(this,ce);v(this,Y);v(this,ye);v(this,be);p(this,"render",(...e)=>(a(this,oe)??f(this,oe,t=>this.html(t)),a(this,oe).call(this,...e)));p(this,"setLayout",e=>f(this,we,e));p(this,"getLayout",()=>a(this,we));p(this,"setRenderer",e=>{f(this,oe,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,j,new Response(a(this,j).body,a(this,j)));const i=a(this,j)?a(this,j).headers:a(this,Y)??f(this,Y,new Headers);t===void 0?i.delete(e):s!=null&&s.append?i.append(e,t):i.set(e,t)});p(this,"status",e=>{f(this,ae,e)});p(this,"set",(e,t)=>{a(this,_)??f(this,_,new Map),a(this,_).set(e,t)});p(this,"get",e=>a(this,_)?a(this,_).get(e):void 0);p(this,"newResponse",(...e)=>g(this,z,ie).call(this,...e));p(this,"body",(e,t,s)=>g(this,z,ie).call(this,e,t,s));p(this,"text",(e,t,s)=>!a(this,Y)&&!a(this,ae)&&!t&&!s&&!this.finalized?new Response(e):g(this,z,ie).call(this,e,t,_e(Mt,s)));p(this,"json",(e,t,s)=>g(this,z,ie).call(this,JSON.stringify(e),t,_e("application/json",s)));p(this,"html",(e,t,s)=>{const i=r=>g(this,z,ie).call(this,r,t,_e("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,_t.Stringify,!1,{}).then(i):i(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(a(this,ce)??f(this,ce,()=>new Response),a(this,ce).call(this,this)));f(this,ge,e),t&&(f(this,M,t.executionCtx),this.env=t.env,f(this,ce,t.notFoundHandler),f(this,be,t.path),f(this,ye,t.matchResult))}get req(){return a(this,me)??f(this,me,new it(a(this,ge),a(this,be),a(this,ye))),a(this,me)}get event(){if(a(this,M)&&"respondWith"in a(this,M))return a(this,M);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,M))return a(this,M);throw Error("This context has no ExecutionContext")}get res(){return a(this,j)||f(this,j,new Response(null,{headers:a(this,Y)??f(this,Y,new Headers)}))}set res(e){if(a(this,j)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,j).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const i=a(this,j).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of i)e.headers.append("set-cookie",r)}else e.headers.set(t,s)}f(this,j,e),this.finalized=!0}get var(){return a(this,_)?Object.fromEntries(a(this,_)):{}}},ge=new WeakMap,me=new WeakMap,_=new WeakMap,ae=new WeakMap,M=new WeakMap,j=new WeakMap,we=new WeakMap,oe=new WeakMap,ce=new WeakMap,Y=new WeakMap,ye=new WeakMap,be=new WeakMap,z=new WeakSet,ie=function(e,t,s){const i=a(this,j)?new Headers(a(this,j).headers):a(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of n)o.toLowerCase()==="set-cookie"?i.append(o,l):i.set(o,l)}if(s)for(const[n,o]of Object.entries(s))if(typeof o=="string")i.set(n,o);else{i.delete(n);for(const l of o)i.append(n,l)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ae);return new Response(e,{status:r,headers:i})},Ge),b="ALL",Ht="all",$t=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",ct=class extends Error{},Ft="__COMPOSED_HANDLER",Lt=e=>e.text("404 Not Found",404),We=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},C,x,lt,k,G,Te,je,le,Ut=(le=class{constructor(t={}){v(this,x);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");v(this,C,"/");p(this,"routes",[]);v(this,k,Lt);p(this,"errorHandler",We);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,k,t),this));p(this,"fetch",(t,...s)=>g(this,x,je).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,i,r)=>t instanceof Request?this.fetch(s?new Request(t,s):t,i,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),i,r)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(g(this,x,je).call(this,t.request,t,void 0,t.request.method))})});[...$t,Ht].forEach(n=>{this[n]=(o,...l)=>(typeof o=="string"?f(this,C,o):g(this,x,G).call(this,n,a(this,C),o),l.forEach(d=>{g(this,x,G).call(this,n,a(this,C),d)}),this)}),this.on=(n,o,...l)=>{for(const d of[o].flat()){f(this,C,d);for(const c of[n].flat())l.map(h=>{g(this,x,G).call(this,c.toUpperCase(),a(this,C),h)})}return this},this.use=(n,...o)=>(typeof n=="string"?f(this,C,n):(f(this,C,"*"),o.unshift(n)),o.forEach(l=>{g(this,x,G).call(this,b,a(this,C),l)}),this);const{strict:i,...r}=t;Object.assign(this,r),this.getPath=i??!0?t.getPath??Ze:Pt}route(t,s){const i=this.basePath(t);return s.routes.map(r=>{var o;let n;s.errorHandler===We?n=r.handler:(n=async(l,d)=>(await Ue([],s.errorHandler)(l,()=>r.handler(l,d))).res,n[Ft]=r.handler),g(o=i,x,G).call(o,r.method,r.path,n)}),this}basePath(t){const s=g(this,x,lt).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,i){let r,n;i&&(typeof i=="function"?n=i:(n=i.optionHandler,i.replaceRequest===!1?r=d=>d:r=i.replaceRequest));const o=n?d=>{const c=n(d);return Array.isArray(c)?c:[c]}:d=>{let c;try{c=d.executionCtx}catch{}return[d.env,c]};r||(r=(()=>{const d=se(this._basePath,t),c=d==="/"?0:d.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const l=async(d,c)=>{const h=await s(r(d.req.raw),...o(d));if(h)return h;await c()};return g(this,x,G).call(this,b,se(t,"*"),l),this}},C=new WeakMap,x=new WeakSet,lt=function(){const t=new le({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,k,a(this,k)),t.routes=this.routes,t},k=new WeakMap,G=function(t,s,i){t=t.toUpperCase(),s=se(this._basePath,s);const r={basePath:this._basePath,path:s,method:t,handler:i};this.router.add(t,s,[i,r]),this.routes.push(r)},Te=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},je=function(t,s,i,r){if(r==="HEAD")return(async()=>new Response(null,await g(this,x,je).call(this,t,s,i,"GET")))();const n=this.getPath(t,{env:i}),o=this.router.match(r,n),l=new Dt(t,{path:n,matchResult:o,env:i,executionCtx:s,notFoundHandler:a(this,k)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await a(this,k).call(this,l)})}catch(h){return g(this,x,Te).call(this,h,l)}return c instanceof Promise?c.then(h=>h||(l.finalized?l.res:a(this,k).call(this,l))).catch(h=>g(this,x,Te).call(this,h,l)):c??a(this,k).call(this,l)}const d=Ue(o[0],this.errorHandler,a(this,k));return(async()=>{try{const c=await d(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return g(this,x,Te).call(this,c,l)}})()},le),dt=[];function zt(e,t){const s=this.buildAllMatchers(),i=((r,n)=>{const o=s[r]||s[b],l=o[2][n];if(l)return l;const d=n.match(o[0]);if(!d)return[[],dt];const c=d.indexOf("",1);return[o[1][c],d]});return this.match=i,i(e,t)}var Ce="[^/]+",pe=".*",ve="(?:|/.*)",re=Symbol(),Wt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===pe||e===ve?1:t===pe||t===ve?-1:e===Ce?1:t===Ce?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,X,A,ee,qt=(ee=class{constructor(){v(this,J);v(this,X);v(this,A,Object.create(null))}insert(t,s,i,r,n){if(t.length===0){if(a(this,J)!==void 0)throw re;if(n)return;f(this,J,s);return}const[o,...l]=t,d=o==="*"?l.length===0?["","",pe]:["","",Ce]:o==="/*"?["","",ve]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(d){const h=d[1];let u=d[2]||Ce;if(h&&d[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw re;if(c=a(this,A)[u],!c){if(Object.keys(a(this,A)).some(w=>w!==pe&&w!==ve))throw re;if(n)return;c=a(this,A)[u]=new ee,h!==""&&f(c,X,r.varIndex++)}!n&&h!==""&&i.push([h,a(c,X)])}else if(c=a(this,A)[o],!c){if(Object.keys(a(this,A)).some(h=>h.length>1&&h!==pe&&h!==ve))throw re;if(n)return;c=a(this,A)[o]=new ee}c.insert(l,s,i,r,n)}buildRegExpStr(){const s=Object.keys(a(this,A)).sort(Bt).map(i=>{const r=a(this,A)[i];return(typeof a(r,X)=="number"?`(${i})@${a(r,X)}`:Wt.has(i)?`\\${i}`:i)+r.buildRegExpStr()});return typeof a(this,J)=="number"&&s.unshift(`#${a(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,X=new WeakMap,A=new WeakMap,ee),ke,xe,Ve,Kt=(Ve=class{constructor(){v(this,ke,{varIndex:0});v(this,xe,new qt)}insert(e,t,s){const i=[],r=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,d=>{const c=`@\\${o}`;return r[o]=[c,d],o++,l=!0,c}),!l)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=r.length-1;o>=0;o--){const[l]=r[o];for(let d=n.length-1;d>=0;d--)if(n[d].indexOf(l)!==-1){n[d]=n[d].replace(l,r[o][1]);break}}return a(this,xe).insert(n,t,i,a(this,ke),s),i}buildRegExp(){let e=a(this,xe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,n,o)=>n!==void 0?(s[++t]=Number(n),"$()"):(o!==void 0&&(i[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,i]}},ke=new WeakMap,xe=new WeakMap,Ve),Gt=[/^$/,[],Object.create(null)],Se=Object.create(null);function ht(e){return Se[e]??(Se[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Vt(){Se=Object.create(null)}function Yt(e){var c;const t=new Kt,s=[];if(e.length===0)return Gt;const i=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[w,y])=>h?1:w?-1:u.length-y.length),r=Object.create(null);for(let h=0,u=-1,w=i.length;h<w;h++){const[y,E,P]=i[h];y?r[E]=[P.map(([R])=>[R,Object.create(null)]),dt]:u++;let m;try{m=t.insert(E,u,y)}catch(R){throw R===re?new ct(E):R}y||(s[u]=P.map(([R,F])=>{const Ee=Object.create(null);for(F-=1;F>=0;F--){const[Re,N]=m[F];Ee[Re]=N}return[R,Ee]}))}const[n,o,l]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let w=0,y=s[h].length;w<y;w++){const E=(c=s[h][w])==null?void 0:c[1];if(!E)continue;const P=Object.keys(E);for(let m=0,R=P.length;m<R;m++)E[P[m]]=l[E[P[m]]]}const d=[];for(const h in o)d[h]=s[o[h]];return[n,d,r]}function te(e,t){if(e){for(const s of Object.keys(e).sort((i,r)=>r.length-i.length))if(ht(s).test(t))return[...e[s]]}}var W,B,Ae,ut,Ye,Jt=(Ye=class{constructor(){v(this,Ae);p(this,"name","RegExpRouter");v(this,W);v(this,B);p(this,"match",zt);f(this,W,{[b]:Object.create(null)}),f(this,B,{[b]:Object.create(null)})}add(e,t,s){var l;const i=a(this,W),r=a(this,B);if(!i||!r)throw new Error(ot);i[e]||[i,r].forEach(d=>{d[e]=Object.create(null),Object.keys(d[b]).forEach(c=>{d[e][c]=[...d[b][c]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const d=ht(t);e===b?Object.keys(i).forEach(c=>{var h;(h=i[c])[t]||(h[t]=te(i[c],t)||te(i[b],t)||[])}):(l=i[e])[t]||(l[t]=te(i[e],t)||te(i[b],t)||[]),Object.keys(i).forEach(c=>{(e===b||e===c)&&Object.keys(i[c]).forEach(h=>{d.test(h)&&i[c][h].push([s,n])})}),Object.keys(r).forEach(c=>{(e===b||e===c)&&Object.keys(r[c]).forEach(h=>d.test(h)&&r[c][h].push([s,n]))});return}const o=et(t)||[t];for(let d=0,c=o.length;d<c;d++){const h=o[d];Object.keys(r).forEach(u=>{var w;(e===b||e===u)&&((w=r[u])[h]||(w[h]=[...te(i[u],h)||te(i[b],h)||[]]),r[u][h].push([s,n-c+d+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,B)).concat(Object.keys(a(this,W))).forEach(t=>{e[t]||(e[t]=g(this,Ae,ut).call(this,t))}),f(this,W,f(this,B,void 0)),Vt(),e}},W=new WeakMap,B=new WeakMap,Ae=new WeakSet,ut=function(e){const t=[];let s=e===b;return[a(this,W),a(this,B)].forEach(i=>{const r=i[e]?Object.keys(i[e]).map(n=>[n,i[e][n]]):[];r.length!==0?(s||(s=!0),t.push(...r)):e!==b&&t.push(...Object.keys(i[b]).map(n=>[n,i[b][n]]))}),s?Yt(t):null},Ye),q,D,Je,Xt=(Je=class{constructor(e){p(this,"name","SmartRouter");v(this,q,[]);v(this,D,[]);f(this,q,e.routers)}add(e,t,s){if(!a(this,D))throw new Error(ot);a(this,D).push([e,t,s])}match(e,t){if(!a(this,D))throw new Error("Fatal error");const s=a(this,q),i=a(this,D),r=s.length;let n=0,o;for(;n<r;n++){const l=s[n];try{for(let d=0,c=i.length;d<c;d++)l.add(...i[d]);o=l.match(e,t)}catch(d){if(d instanceof ct)continue;throw d}this.match=l.match.bind(l),f(this,q,[l]),f(this,D,void 0);break}if(n===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(a(this,D)||a(this,q).length!==1)throw new Error("No active router has been determined yet.");return a(this,q)[0]}},q=new WeakMap,D=new WeakMap,Je),fe=Object.create(null),K,T,Q,de,O,H,V,he,Qt=(he=class{constructor(t,s,i){v(this,H);v(this,K);v(this,T);v(this,Q);v(this,de,0);v(this,O,fe);if(f(this,T,i||Object.create(null)),f(this,K,[]),t&&s){const r=Object.create(null);r[t]={handler:s,possibleKeys:[],score:0},f(this,K,[r])}f(this,Q,[])}insert(t,s,i){f(this,de,++Le(this,de)._);let r=this;const n=jt(s),o=[];for(let l=0,d=n.length;l<d;l++){const c=n[l],h=n[l+1],u=kt(c,h),w=Array.isArray(u)?u[0]:c;if(w in a(r,T)){r=a(r,T)[w],u&&o.push(u[1]);continue}a(r,T)[w]=new he,u&&(a(r,Q).push(u),o.push(u[1])),r=a(r,T)[w]}return a(r,K).push({[t]:{handler:i,possibleKeys:o.filter((l,d,c)=>c.indexOf(l)===d),score:a(this,de)}}),r}search(t,s){var d;const i=[];f(this,O,fe);let n=[this];const o=Qe(s),l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c],w=c===h-1,y=[];for(let E=0,P=n.length;E<P;E++){const m=n[E],R=a(m,T)[u];R&&(f(R,O,a(m,O)),w?(a(R,T)["*"]&&i.push(...g(this,H,V).call(this,a(R,T)["*"],t,a(m,O))),i.push(...g(this,H,V).call(this,R,t,a(m,O)))):y.push(R));for(let F=0,Ee=a(m,Q).length;F<Ee;F++){const Re=a(m,Q)[F],N=a(m,O)===fe?{}:{...a(m,O)};if(Re==="*"){const L=a(m,T)["*"];L&&(i.push(...g(this,H,V).call(this,L,t,a(m,O))),f(L,O,N),y.push(L));continue}const[gt,$e,ue]=Re;if(!u&&!(ue instanceof RegExp))continue;const I=a(m,T)[gt],mt=o.slice(c).join("/");if(ue instanceof RegExp){const L=ue.exec(mt);if(L){if(N[$e]=L[0],i.push(...g(this,H,V).call(this,I,t,a(m,O),N)),Object.keys(a(I,T)).length){f(I,O,N);const Pe=((d=L[0].match(/\//))==null?void 0:d.length)??0;(l[Pe]||(l[Pe]=[])).push(I)}continue}}(ue===!0||ue.test(u))&&(N[$e]=u,w?(i.push(...g(this,H,V).call(this,I,t,N,a(m,O))),a(I,T)["*"]&&i.push(...g(this,H,V).call(this,a(I,T)["*"],t,N,a(m,O)))):(f(I,O,N),y.push(I)))}}n=y.concat(l.shift()??[])}return i.length>1&&i.sort((c,h)=>c.score-h.score),[i.map(({handler:c,params:h})=>[c,h])]}},K=new WeakMap,T=new WeakMap,Q=new WeakMap,de=new WeakMap,O=new WeakMap,H=new WeakSet,V=function(t,s,i,r){const n=[];for(let o=0,l=a(t,K).length;o<l;o++){const d=a(t,K)[o],c=d[s]||d[b],h={};if(c!==void 0&&(c.params=Object.create(null),n.push(c),i!==fe||r&&r!==fe))for(let u=0,w=c.possibleKeys.length;u<w;u++){const y=c.possibleKeys[u],E=h[c.score];c.params[y]=r!=null&&r[y]&&!E?r[y]:i[y]??(r==null?void 0:r[y]),h[c.score]=!0}}return n},he),Z,Xe,Zt=(Xe=class{constructor(){p(this,"name","TrieRouter");v(this,Z);f(this,Z,new Qt)}add(e,t,s){const i=et(t);if(i){for(let r=0,n=i.length;r<n;r++)a(this,Z).insert(e,i[r],s);return}a(this,Z).insert(e,t,s)}match(e,t){return a(this,Z).search(e,t)}},Z=new WeakMap,Xe),ft=class extends Ut{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Jt,new Zt]})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Be=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,i=e.match(s);if(!i)return;let r=t[i[1]];return r&&r.startsWith("text")&&(r+="; charset=utf-8"),r},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,is=(...e)=>{let t=e.filter(r=>r!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),i=[];for(const r of s)r===".."&&i.length>0&&i.at(-1)!==".."?i.pop():r!=="."&&i.push(r);return i.join("/")||"."},pt={br:".br",zstd:".zst",gzip:".gz"},rs=Object.keys(pt),ns="index.html",as=e=>{const t=e.root??"./",s=e.path,i=e.join??is;return async(r,n)=>{var h,u,w,y;if(r.finalized)return n();let o;if(e.path)o=e.path;else try{if(o=decodeURIComponent(r.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((h=e.onNotFound)==null?void 0:h.call(e,r.req.path,r)),n()}let l=i(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(o):o);e.isDir&&await e.isDir(l)&&(l=i(l,ns));const d=e.getContent;let c=await d(l,r);if(c instanceof Response)return r.newResponse(c.body,c);if(c){const E=e.mimes&&Be(l,e.mimes)||Be(l);if(r.header("Content-Type",E||"application/octet-stream"),e.precompressed&&(!E||es.test(E))){const P=new Set((u=r.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(m=>m.trim()));for(const m of rs){if(!P.has(m))continue;const R=await d(l+pt[m],r);if(R){c=R,r.header("Content-Encoding",m),r.header("Vary","Accept-Encoding",{append:!0});break}}}return await((w=e.onFound)==null?void 0:w.call(e,l,r)),r.body(c)}await((y=e.onNotFound)==null?void 0:y.call(e,l,r)),await n()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let i;t&&t.namespace?i=t.namespace:i=__STATIC_CONTENT;const r=s[e];if(!r)return null;const n=await i.get(r,{type:"stream"});return n||null},cs=e=>async function(s,i){return as({...e,getContent:async n=>os(n,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,i)},ls=e=>cs(e);const He=new ft;He.use("/static/*",ls({root:"./public"}));He.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Valentine's Day ❤️</title>
        <link rel="stylesheet" href="/static/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <!-- Floating Hearts Background -->
        <div class="hearts-container" id="hearts-container"></div>
        
        <!-- Music Control -->
        <button class="music-control" id="music-control" aria-label="Toggle Music">
            <span id="music-icon">🎵</span>
        </button>
        
        <!-- Hidden Audio Element -->
        <audio id="background-music" loop>
            <source src="https://www.bensound.com/bensound-music/bensound-love.mp3" type="audio/mpeg">
        </audio>

        <!-- SECTION 1: CINEMATIC INTRO -->
        <section class="intro-section" id="intro-section">
            <div class="sparkles" id="sparkles"></div>
            <div class="intro-content">
                <h1 class="intro-title" id="intro-title">Happy Valentine's Day, My Favorite Person ❤️</h1>
                <p class="intro-subtitle" id="intro-subtitle">2 months… and already so many beautiful moments.</p>
                <button class="start-button" id="start-button">Start Our Story 💖</button>
            </div>
        </section>

        <!-- SECTION 2: HOW IT STARTED -->
        <section class="timeline-section" id="timeline-section">
            <div class="container">
                <h2 class="section-title fade-in">How We Started...</h2>
                <div class="timeline">
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">💬</div>
                        <div class="timeline-content">
                            <h3>The First Conversation</h3>
                            <p class="typewriter">That moment when we started talking and time just... disappeared.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">😊</div>
                        <div class="timeline-content">
                            <h3>The First Laugh</h3>
                            <p class="typewriter">When I realized your laugh was my new favorite sound.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">💭</div>
                        <div class="timeline-content">
                            <h3>The Realization</h3>
                            <p class="typewriter">The moment we both knew... this feels different. This feels right.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">🤗</div>
                        <div class="timeline-content">
                            <h3>The Comfort</h3>
                            <p class="typewriter">Finding someone who feels like home. That's you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: OUR FUTURE ADVENTURES -->
        <section class="adventures-section" id="adventures-section">
            <div class="container">
                <h2 class="section-title fade-in">The Adventures Waiting for Us...</h2>
                <div class="adventure-grid">
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🌍</div>
                            <h3>Traveling Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Watching sunsets in new places, mountain trips, beach walks, and late-night city strolls. Creating stories everywhere we go.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🍫</div>
                            <h3>Chocolate Dates</h3>
                        </div>
                        <div class="card-back">
                            <p>Trying new cafes, sharing desserts, feeding each other chocolate playfully, and finding our favorite spots together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🎬</div>
                            <h3>Movie Nights</h3>
                        </div>
                        <div class="card-back">
                            <p>Arguing over what to watch, falling asleep during movies, random pillow fights, and making every night an adventure.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">📸</div>
                            <h3>Creating Memories</h3>
                        </div>
                        <div class="card-back">
                            <p>Taking silly selfies, random dance videos, laughing at nothing, and capturing every beautiful moment together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🧠</div>
                            <h3>Growing Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Supporting each other's goals, motivating during tough days, and celebrating every small win on this journey.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🌟</div>
                            <h3>Making Magic</h3>
                        </div>
                        <div class="card-back">
                            <p>Creating our own little world, building inside jokes, having spontaneous adventures, and just being happy together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: A LETTER TO HER -->
        <section class="letter-section" id="letter-section">
            <div class="container">
                <div class="letter-container fade-in">
                    <div class="letter-header">💌</div>
                    <div class="letter-content" id="letter-content">
                        <!-- Content will be added via JavaScript typewriter effect -->
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: SURPRISE BUTTON -->
        <section class="surprise-section" id="surprise-section">
            <div class="container">
                <button class="surprise-button" id="surprise-button">Click for a Surprise ❤️</button>
            </div>
        </section>

        <!-- Surprise Modal -->
        <div class="surprise-modal" id="surprise-modal">
            <div class="surprise-content">
                <div class="gift-box" id="gift-box">🎁</div>
                <div class="surprise-message" id="surprise-message">
                    <h2>You are already my favorite adventure.</h2>
                    <p>Every moment with you is a gift 💝</p>
                </div>
            </div>
        </div>

        <!-- SECTION 6: MEMORY GALLERY -->
        <section class="gallery-section" id="gallery-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Beautiful Moments 📸</h2>
                <p class="gallery-note fade-in">✨ You can easily add your own photos by editing the gallery data in script.js</p>
                <div class="gallery-grid" id="gallery-grid">
                    <!-- Gallery items will be dynamically generated -->
                </div>
            </div>
        </section>

        <!-- SECTION 7: OUR MINI BUCKET LIST -->
        <section class="bucketlist-section" id="bucketlist-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Mini Bucket List 💕</h2>
                <p class="bucketlist-subtitle fade-in">Adventures we'll check off together...</p>
                <div class="bucketlist-grid">
                    <div class="bucket-item fade-in" data-id="1">
                        <div class="checkbox"></div>
                        <span>Travel somewhere new together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="2">
                        <div class="checkbox"></div>
                        <span>Try 10 new cafes</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="3">
                        <div class="checkbox"></div>
                        <span>Watch the sunrise together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="4">
                        <div class="checkbox"></div>
                        <span>Have a spontaneous day trip</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="5">
                        <div class="checkbox"></div>
                        <span>Create 100 inside jokes</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="6">
                        <div class="checkbox"></div>
                        <span>Dance in the rain</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="7">
                        <div class="checkbox"></div>
                        <span>Cook a meal together (and not burn it)</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="8">
                        <div class="checkbox"></div>
                        <span>Take a thousand silly photos</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="9">
                        <div class="checkbox"></div>
                        <span>Build a playlist of "our songs"</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="10">
                        <div class="checkbox"></div>
                        <span>Just keep being this happy together</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <p>Made with endless love 💖</p>
            <p class="footer-note">2 months down, countless adventures to go...</p>
        </footer>

        <script src="/static/script.js"><\/script>
    </body>
    </html>
  `));const qe=new ft,ds=Object.assign({"/src/index.tsx":He});let vt=!1;for(const[,e]of Object.entries(ds))e&&(qe.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),qe.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{qe as default};
