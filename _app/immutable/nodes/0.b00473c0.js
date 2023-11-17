import{g as _t,s as Dt,c as Mt,u as Ft,d as Nt,e as Vt}from"../chunks/scheduler.4f32addc.js";import{S as kt,i as Bt,d as Wt,t as $t}from"../chunks/index.390a2d35.js";import{w as xt,r as Ht}from"../chunks/index.d8eea519.js";const zt=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:zt},Symbol.toStringTag,{value:"Module"}));const H=Math.min,k=Math.max,G=Math.round,K=Math.floor,F=t=>({x:t,y:t}),It={left:"right",right:"left",bottom:"top",top:"bottom"},jt={start:"end",end:"start"};function st(t,e,n){return k(t,H(e,n))}function U(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(B(t))?"y":"x"}function lt(t){return yt(et(t))}function Xt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=Z(r)),[r,Z(r)]}function Yt(t){const e=Z(t);return[rt(t),e,rt(e)]}function rt(t){return t.replace(/start|end/g,e=>jt[e])}function qt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Ut(t,e,n,o){const i=Q(t);let s=qt(B(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(rt)))),s}function Z(t){return t.replace(/left|right|bottom|top/g,e=>It[e])}function Qt(t){return{top:0,right:0,bottom:0,left:0,...t}}function vt(t){return typeof t!="number"?Qt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function mt(t,e,n){let{reference:o,floating:i}=t;const s=et(e),r=lt(e),c=ct(r),a=B(e),l=s==="y",m=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let f;switch(a){case"top":f={x:m,y:o.y-i.height};break;case"bottom":f={x:m,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Q(e)){case"start":f[r]-=g*(n&&l?-1:1);break;case"end":f[r]+=g*(n&&l?-1:1);break}return f}const Jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=mt(l,o,a),g=o,f={},d=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:b,reset:v}=await p({x:m,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:l,platform:r,elements:{reference:t,floating:e}});if(m=x??m,u=y??u,f={...f,[w]:{...f[w],...b}},v&&d<=50){d++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(l=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:m,y:u}=mt(l,g,a)),h=-1;continue}}return{x:m,y:u,placement:g,strategy:i,middlewareData:f}};async function bt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=U(e,t),d=vt(f),w=c[g?u==="floating"?"reference":"floating":u],p=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:m,strategy:a})),x=u==="floating"?{...r.floating,x:o,y:i}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},v=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:y,strategy:a}):x);return{top:(p.top-v.top+d.top)/b.y,bottom:(v.bottom-p.bottom+d.bottom)/b.y,left:(p.left-v.left+d.left)/b.x,right:(v.right-p.right+d.right)/b.x}}const Kt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:a}=e,{element:l,padding:m=0}=U(t,e)||{};if(l==null)return{};const u=vt(m),g={x:n,y:o},f=lt(i),d=ct(f),h=await r.getDimensions(l),w=f==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=s.reference[d]+s.reference[f]-g[f]-s.floating[d],v=g[f]-s.reference[f],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let L=E?E[y]:0;(!L||!await(r.isElement==null?void 0:r.isElement(E)))&&(L=c.floating[y]||s.floating[d]);const V=b/2-v/2,I=L/2-h[d]/2-1,j=H(u[p],I),X=H(u[x],I),O=j,Y=L-h[d]-X,A=L/2-h[d]/2+V,S=st(O,A,Y),T=!a.arrow&&Q(i)!=null&&A!=S&&s.reference[d]/2-(A<O?j:X)-h[d]/2<0,_=T?A<O?A-O:A-Y:0;return{[f]:g[f]+_,data:{[f]:S,centerOffset:A-S-_,...T&&{alignmentOffset:_}},reset:T}}}),Gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:m=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:h=!0,...w}=U(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=B(i),x=B(c)===c,y=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=g||(x||!h?[Z(c)]:Yt(c));!g&&d!=="none"&&b.push(...Ut(c,h,d,y));const v=[c,...b],E=await bt(e,w),L=[];let V=((o=s.flip)==null?void 0:o.overflows)||[];if(m&&L.push(E[p]),u){const O=Xt(i,r,y);L.push(E[O[0]],E[O[1]])}if(V=[...V,{placement:i,overflows:L}],!L.every(O=>O<=0)){var I,j;const O=(((I=s.flip)==null?void 0:I.index)||0)+1,Y=v[O];if(Y)return{data:{index:O,overflows:V},reset:{placement:Y}};let A=(j=V.filter(S=>S.overflows[0]<=0).sort((S,T)=>S.overflows[1]-T.overflows[1])[0])==null?void 0:j.placement;if(!A)switch(f){case"bestFit":{var X;const S=(X=V.map(T=>[T.placement,T.overflows.filter(_=>_>0).reduce((_,Pt)=>_+Pt,0)]).sort((T,_)=>T[1]-_[1])[0])==null?void 0:X[0];S&&(A=S);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function Zt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=B(n),c=Q(n),a=et(n)==="y",l=["left","top"].includes(r)?-1:1,m=s&&a?-1:1,u=U(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof d=="number"&&(f=c==="end"?d*-1:d),a?{x:f*m,y:g*l}:{x:g*l,y:f*m}}const te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Zt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},ee=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...a}=U(t,e),l={x:n,y:o},m=await bt(e,a),u=et(B(i)),g=yt(u);let f=l[g],d=l[u];if(s){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=f+m[w],y=f-m[p];f=st(x,f,y)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=d+m[w],y=d-m[p];d=st(x,d,y)}const h=c.fn({...e,[g]:f,[u]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function N(t){return At(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(At(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function At(t){return t instanceof Node||t instanceof R(t).Node}function D(t){return t instanceof Element||t instanceof R(t).Element}function P(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function gt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ne(t){return["table","td","th"].includes(N(t))}function at(t){const e=ft(),n=C(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function oe(t){let e=z(t);for(;P(e)&&!nt(e);){if(at(e))return e;e=z(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(N(t))}function C(t){return R(t).getComputedStyle(t)}function ot(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gt(t)&&t.host||M(t);return gt(e)?e.host:e}function Rt(t){const e=z(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&J(e)?e:Rt(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Rt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=R(i);return s?e.concat(r,r.visualViewport||[],J(i)?i:[],r.frameElement&&n?q(r.frameElement):[]):e.concat(i,q(i,[],n))}function Ot(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=P(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=G(n)!==s||G(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function ut(t){return D(t)?t:t.contextElement}function $(t){const e=ut(t);if(!P(e))return F(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ot(e);let r=(s?G(n.width):n.width)/o,c=(s?G(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ie=F(0);function Ct(t){const e=R(t);return!ft()||!e.visualViewport?ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function se(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==R(t)?!1:e}function W(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=F(1);e&&(o?D(o)&&(r=$(o)):r=$(t));const c=se(s,n,o)?Ct(s):F(0);let a=(i.left+c.x)/r.x,l=(i.top+c.y)/r.y,m=i.width/r.x,u=i.height/r.y;if(s){const g=R(s),f=o&&D(o)?R(o):o;let d=g.frameElement;for(;d&&o&&f!==g;){const h=$(d),w=d.getBoundingClientRect(),p=C(d),x=w.left+(d.clientLeft+parseFloat(p.paddingLeft))*h.x,y=w.top+(d.clientTop+parseFloat(p.paddingTop))*h.y;a*=h.x,l*=h.y,m*=h.x,u*=h.y,a+=x,l+=y,d=R(d).frameElement}}return tt({width:m,height:u,x:a,y:l})}function re(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=P(n),s=M(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c=F(1);const a=F(0);if((i||!i&&o!=="fixed")&&((N(n)!=="body"||J(s))&&(r=ot(n)),P(n))){const l=W(n);c=$(n),a.x=l.x+n.clientLeft,a.y=l.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+a.x,y:e.y*c.y-r.scrollTop*c.y+a.y}}function ce(t){return Array.from(t.getClientRects())}function Et(t){return W(M(t)).left+ot(t).scrollLeft}function le(t){const e=M(t),n=ot(t),o=t.ownerDocument.body,i=k(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=k(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Et(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(r+=k(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ae(t,e){const n=R(t),o=M(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,a=0;if(i){s=i.width,r=i.height;const l=ft();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:c,y:a}}function fe(t,e){const n=W(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=P(t)?$(t):F(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,a=i*s.x,l=o*s.y;return{width:r,height:c,x:a,y:l}}function pt(t,e,n){let o;if(e==="viewport")o=ae(t,n);else if(e==="document")o=le(M(t));else if(D(e))o=fe(e,n);else{const i=Ct(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Lt(t,e){const n=z(t);return n===e||!D(n)||nt(n)?!1:C(n).position==="fixed"||Lt(n,e)}function ue(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(c=>D(c)&&N(c)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?z(t):t;for(;D(r)&&!nt(r);){const c=C(r),a=at(r);!a&&c.position==="fixed"&&(i=null),(s?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!a&&Lt(t,r))?o=o.filter(m=>m!==r):i=c,r=z(r)}return e.set(t,o),o}function de(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ue(e,this._c):[].concat(n),o],c=r[0],a=r.reduce((l,m)=>{const u=pt(e,m,i);return l.top=k(u.top,l.top),l.right=H(u.right,l.right),l.bottom=H(u.bottom,l.bottom),l.left=k(u.left,l.left),l},pt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function me(t){return Ot(t)}function ge(t,e,n){const o=P(e),i=M(e),s=n==="fixed",r=W(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const a=F(0);if(o||!o&&!s)if((N(e)!=="body"||J(i))&&(c=ot(e)),o){const l=W(e,!0,s,e);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else i&&(a.x=Et(i));return{x:r.left+c.scrollLeft-a.x,y:r.top+c.scrollTop-a.y,width:r.width,height:r.height}}function ht(t,e){return!P(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function St(t,e){const n=R(t);if(!P(t))return n;let o=ht(t,e);for(;o&&ne(o)&&C(o).position==="static";)o=ht(o,e);return o&&(N(o)==="html"||N(o)==="body"&&C(o).position==="static"&&!at(o))?n:o||oe(t)||n}const pe=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||St,s=this.getDimensions;return{reference:ge(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function he(t){return C(t).direction==="rtl"}const we={convertOffsetParentRelativeRectToViewportRelativeRect:re,getDocumentElement:M,getClippingRect:de,getOffsetParent:St,getElementRects:pe,getClientRects:ce,getDimensions:me,getScale:$,isElement:D,isRTL:he};function xe(t,e){let n=null,o;const i=M(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),s();const{left:l,top:m,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const f=K(m),d=K(i.clientWidth-(l+u)),h=K(i.clientHeight-(m+g)),w=K(l),x={rootMargin:-f+"px "+-d+"px "+-h+"px "+-w+"px",threshold:k(0,H(1,a))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==a){if(!y)return r();E?r(!1,E):o=setTimeout(()=>{r(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return r(!0),s}function ye(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=ut(t),m=i||s?[...l?q(l):[],...q(e)]:[];m.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=l&&c?xe(l,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(p=>{let[x]=p;x&&x.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),l&&!a&&f.observe(l),f.observe(e));let d,h=a?W(t):null;a&&w();function w(){const p=W(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,d=requestAnimationFrame(w)}return n(),()=>{m.forEach(p=>{i&&p.removeEventListener("scroll",n),s&&p.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(d)}}const ve=(t,e,n)=>{const o=new Map,i={platform:we,...n},s={...i.platform,_c:o};return Jt(t,e,{...i,platform:s})},be=xt(void 0),it={};function wt(t){return t==="local"?localStorage:sessionStorage}function dt(t,e,n){const o=(n==null?void 0:n.serializer)??JSON,i=(n==null?void 0:n.storage)??"local";function s(r,c){wt(i).setItem(r,o.stringify(c))}if(!it[t]){const r=xt(e,l=>{const m=wt(i).getItem(t);m&&l(o.parse(m));{const u=g=>{g.key===t&&l(g.newValue?o.parse(g.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:c,set:a}=r;it[t]={set(l){s(t,l),a(l)},update(l){const m=l(_t(r));s(t,m),a(m)},subscribe:c}}return it[t]}dt("modeOsPrefers",!1);dt("modeUserPrefers",void 0);dt("modeCurrent",!1);const Tt="(prefers-reduced-motion: reduce)";function Ae(){return window.matchMedia(Tt).matches}Ht(Ae(),t=>{{const e=o=>{t(o.matches)},n=window.matchMedia(Tt);return n.addEventListener("change",e),()=>{n.removeEventListener("change",e)}}});function Re(t){let e;const n=t[2].default,o=Mt(n,t,t[1],null);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,s){o&&o.m(i,s),e=!0},p(i,[s]){o&&o.p&&(!e||s&2)&&Ft(o,n,i,i[1],e?Vt(n,i[1],s,null):Nt(i[1]),null)},i(i){e||(Wt(o,i),e=!0)},o(i){$t(o,i),e=!1},d(i){o&&o.d(i)}}}function Oe(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=!0;return be.set({computePosition:ve,autoUpdate:ye,flip:Gt,shift:ee,offset:te,arrow:Kt}),t.$$set=r=>{"$$scope"in r&&n(1,i=r.$$scope)},[s,i,o]}class Te extends kt{constructor(e){super(),Bt(this,e,Oe,Re,Dt,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{Te as component,Se as universal};
