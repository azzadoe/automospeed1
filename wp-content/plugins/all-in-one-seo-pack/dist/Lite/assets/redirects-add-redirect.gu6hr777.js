import{c as _,C as g,l as a,b as n,v as c,o as d,x as y,t as R,a as C,k as w,Y as k}from"./js/runtime-dom.esm-bundler.h3clfjuw.js";import{l as A}from"./js/index.njux2kgl.js";import{l as S}from"./js/index.cw7tfyil.js";import{u as v,E,l as x,o as L}from"./js/index.lqcu3hi3.js";/* empty css                */import{a as b}from"./js/addons.ds3c4v6r.js";import{C as H}from"./js/Index.gtlvh3ar.js";import{C as B}from"./js/Index.mnx6c8l5.js";import"./js/translations.e22mvhfh.js";import{_ as T}from"./js/_plugin-vue_export-helper.oebm7xum.js";import{i as N}from"./js/isEmpty.mgjssgsb.js";import{_ as l,s as P}from"./js/default-i18n.bz7purh4.js";import"./js/Caret.g6s6s7gs.js";import"./js/cleanForSlug.etvx808q.js";import"./js/upperFirst.d9alxexs.js";import"./js/constants.dnzd2kuo.js";import"./js/JsonValues.g6ep3o3z.js";import"./js/Url.mx7n0tnd.js";import"./js/ProBadge.e32os6n3.js";import"./js/External.h5te4wqm.js";import"./js/escapeRegExp.n8evpyq8.js";import"./js/Exclamation.f0pmbpi9.js";import"./js/Checkbox.cv4w58s0.js";import"./js/Checkmark.d5kkjaf5.js";import"./js/Gear.dx9icaxx.js";import"./js/Slide.dop8j51m.js";import"./js/date.cp76fgkd.js";import"./js/DatePicker.ns06gy6o.js";import"./js/Calendar.fbofsn3b.js";import"./js/pick.gnbqgz74.js";import"./js/_getTag.k19irihw.js";import"./js/debounce.lmahs4m3.js";import"./js/toNumber.o3a8s20t.js";import"./js/isEqual.izz0yjhb.js";import"./js/_baseIsEqual.btyep0ht.js";import"./js/Tooltip.i4md1nj9.js";import"./js/Plus.e1tf1dpc.js";const p="all-in-one-seo-pack",U={setup(){return{rootStore:v()}},components:{CoreModal:H,CoreAddRedirection:B},data(){return{addons:b,urls:[],display:!1,target:null,loading:!1,strings:{modalHeader:l("Add a Redirect",p),redirectAdded:P(l('%2$sYour redirect was added and you may edit it <a href="%1$s" target="_blank">here</a>.%3$s',p),this.rootStore.aioseo.urls.aio.redirects,"<strong>","</strong>")},watchClasses:["aioseo-redirects-slug-changed","aioseo-redirects-trashed-post"]}},computed:{classSelectors(){return"."+this.watchClasses.join(", .")}},methods:{reload(){var t,o;this.display=!1;const e=(o=(t=this.target)==null?void 0:t.parentElement)==null?void 0:o.parentElement;if(e&&(e.classList.contains("components-notice__content")||e.classList.contains("notice"))){e.innerHTML="<p>"+this.strings.redirectAdded+"</p>";return}this.target.outerHTML=this.strings.redirectAdded},loadRedirect(e){this.loading=!0,E.get(x.restUrl("redirects/manual-redirects/"+e)).then(t=>{this.urls=t.body.redirects,this.loading=!1}).catch(t=>console.error("Redirect modal failed to load the redirect data.",t))},preloadRedirect(){const e=document.querySelector(this.classSelectors);if(e){const t=this.getElementRedirectHash(e);if(!t)return;this.loadRedirect(t)}},watchClicks(){document.body.onclick=e=>{var o;if(!((o=e.target)!=null&&o.classList))return;let t=!1;this.watchClasses.forEach(i=>{e.target.classList.contains(i)&&(t=!0)}),t&&(e.preventDefault(),this.target=e.target,this.display=!0,N(this.urls)&&this.loadRedirect(this.getElementRedirectHash(this.target)))}},getElementRedirectHash(e){return new URLSearchParams(e.href).get("aioseo-manual-urls")}},async created(){this.preloadRedirect(),this.watchClicks(),window.aioseoBus.$on("wp-core-notice-created",()=>{this.$nextTick(()=>{this.preloadRedirect()})})}},V={key:0,class:"aioseo-redirects-add-redirect-standalone"},D={class:"bd"};function M(e,t,o,i,r,u){const h=c("core-add-redirection"),f=c("core-modal");return r.addons.isActive("aioseo-redirects")?(d(),_("div",V,[g(f,{show:r.display,classes:["aioseo-redirects"],onClose:t[0]||(t[0]=j=>r.display=!1),"allow-overflow":""},{headerTitle:a(()=>[y(R(r.strings.modalHeader),1)]),body:a(()=>[C("div",D,[r.loading?n("",!0):(d(),w(h,{key:0,urls:r.urls,target:r.urls[0].target?r.urls[0].target:"/",disableSource:!0,onAddedRedirect:u.reload},null,8,["urls","target","onAddedRedirect"]))])]),_:1},8,["show"])])):n("",!0)}const Y=T(U,[["render",M]]),m=document.createElement("div");m.id="aioseo-redirects-add-redirect-standalone";document.body.appendChild(m);let s=k({...Y,name:"Standalone/Redirects/AddRedirect"});s=A(s);s=S(s);L(s);s.mount("#aioseo-redirects-add-redirect-standalone");