import{o as n,c as r,t as h,u as $,a as o,C as i,v as a,Y as y}from"./js/runtime-dom.esm-bundler.h3clfjuw.js";import{l as S}from"./js/index.njux2kgl.js";import{u as d,l as m}from"./js/index.lqcu3hi3.js";import"./js/translations.e22mvhfh.js";import{_}from"./js/default-i18n.bz7purh4.js";import{_ as l}from"./js/_plugin-vue_export-helper.oebm7xum.js";import"./js/cleanForSlug.etvx808q.js";const C=(e,t)=>{const u=d().aioseo.page;return m.utmUrl(`footer-${u}`,t,e)},V=["href"],H={__name:"SupportLink",setup(e){const s={support:_("Support","all-in-one-seo-pack")};return(u,p)=>(n(),r("a",{href:$(C)("https://aioseo.com/plugin/lite-support","support"),target:"_blank",rel:"noreferrer noopener"},h(s.support),9,V))}},x={},w={class:"aioseo-facebook"},U=o("path",{fill:"currentColor",d:"M16 8.05A8.02 8.02 0 0 0 8 0C3.58 0 0 3.6 0 8.05A8 8 0 0 0 6.74 16v-5.61H4.71V8.05h2.03V6.3c0-2.02 1.2-3.15 3-3.15.9 0 1.8.16 1.8.16v1.98h-1c-1 0-1.31.62-1.31 1.27v1.49h2.22l-.35 2.34H9.23V16A8.02 8.02 0 0 0 16 8.05Z"},null,-1),A=[U];function M(e,t){return n(),r("svg",w,A)}const Z=l(x,[["render",M]]),B={},P={class:"aioseo-linkedin"},F=o("path",{fill:"currentColor",d:"M14 1H1.97C1.44 1 1 1.47 1 2.03V14c0 .56.44 1 .97 1H14a1 1 0 0 0 1-1V2.03C15 1.47 14.53 1 14 1ZM5.22 13H3.16V6.34h2.06V13ZM4.19 5.4a1.2 1.2 0 0 1-1.22-1.18C2.97 3.56 3.5 3 4.19 3c.65 0 1.18.56 1.18 1.22 0 .66-.53 1.19-1.18 1.19ZM13 13h-2.1V9.75C10.9 9 10.9 8 9.85 8c-1.1 0-1.25.84-1.25 1.72V13H6.53V6.34H8.5v.91h.03a2.2 2.2 0 0 1 1.97-1.1c2.1 0 2.5 1.41 2.5 3.2V13Z"},null,-1),T=[F];function D(e,t){return n(),r("svg",P,T)}const E=l(B,[["render",D]]),I={},N={class:"aioseo-twitter",width:"24",height:"24",viewBox:"0 0 24 24"},O=o("circle",{cx:"12",cy:"12",r:"12",fill:"currentColor"},null,-1),R=o("g",null,[o("path",{d:"M13.129 11.076L17.588 6H16.5315L12.658 10.4065L9.5665 6H6L10.676 12.664L6 17.9865H7.0565L11.1445 13.332L14.41 17.9865H17.9765L13.129 11.076ZM11.6815 12.7225L11.207 12.0585L7.4375 6.78H9.0605L12.1035 11.0415L12.576 11.7055L16.531 17.2445H14.908L11.6815 12.7225Z",fill:"white"})],-1),Y=[O,R];function q(e,t){return n(),r("svg",N,Y)}const j=l(I,[["render",q]]),z={},G={class:"aioseo-youtube"},J=o("path",{fill:"currentColor",d:"M16.63 3.9a2.12 2.12 0 0 0-1.5-1.52C13.8 2 8.53 2 8.53 2s-5.32 0-6.66.38c-.71.18-1.3.78-1.49 1.53C0 5.2 0 8.03 0 8.03s0 2.78.37 4.13c.19.75.78 1.3 1.5 1.5C3.2 14 8.51 14 8.51 14s5.28 0 6.62-.34c.71-.2 1.3-.75 1.49-1.5.37-1.35.37-4.13.37-4.13s0-2.81-.37-4.12Zm-9.85 6.66V5.5l4.4 2.53-4.4 2.53Z"},null,-1),K=[J];function Q(e,t){return n(),r("svg",G,K)}const W=l(z,[["render",Q]]),f="all-in-one-seo-pack",X={setup(){return{rootStore:d()}},components:{FacebookSvg:Z,LinkedInSvg:E,TwitterSvg:j,YouTubeSvg:W,SupportLink:H},data(){return{strings:{madeBy:_("Made with ♥ by the AIOSEO Team",f),support:_("Support",f),docs:_("Docs",f),freePlugins:_("Free Plugins",f)}}},methods:{getUtmLink(e,t){const s=this.rootStore.aioseo.page;return m.utmUrl(`footer-${s}`,t,e)}}},oo={class:"aioseo-footer"},eo=o("span",null,"/",-1),to=["href"],no=o("span",null,"/",-1),ro=["href"],so=["href"],co=["href"],io=["href"],ao=["href"];function _o(e,t,s,u,p,c){const g=a("support-link"),k=a("facebook-svg"),L=a("linked-in-svg"),v=a("twitter-svg"),b=a("you-tube-svg");return n(),r("div",oo,[o("div",null,h(p.strings.madeBy),1),o("div",null,[i(g),eo,o("a",{href:c.getUtmLink("https://aioseo.com/docs/","docs"),target:"_blank",rel:"noreferrer noopener"},h(p.strings.docs),9,to),no,o("a",{href:u.rootStore.aioseo.urls.aio.about,rel:"noreferrer noopener"},h(p.strings.freePlugins),9,ro)]),o("div",null,[o("a",{href:c.getUtmLink("https://aioseo.com/plugin/facebook","facebook"),target:"_blank",rel:"noreferrer noopener"},[i(k)],8,so),o("a",{href:c.getUtmLink("https://aioseo.com/plugin/linkedin","linkedin"),target:"_blank",rel:"noreferrer noopener"},[i(L)],8,co),o("a",{href:c.getUtmLink("https://aioseo.com/plugin/twitter","twitter"),target:"_blank",rel:"noreferrer noopener"},[i(v)],8,io),o("a",{href:c.getUtmLink("https://aioseo.com/plugin/youtube","youtube"),target:"_blank",rel:"noreferrer noopener"},[i(b)],8,ao)])])}const lo=l(X,[["render",_o]]),uo=document.querySelector("#aioseo-footer-links");if(uo){let e=y({...lo,name:"Standalone/FooterLinks"});e=S(e),e.mount("#aioseo-footer-links")}
