import{o as a,c as u,B as s,y as A,ac as x,u as S,ad as w,_ as t,A as h,a as g,v as f,G as l,C as c,t as L,E as k,L as W,K as E,r as m}from"./index.CjtK8fPy.js";import{u as P,p as B}from"./LicenseUpgrade.C-8beXZw.js";import{a as T,u as z}from"./SetupWizard.0d2DzUN_.js";import{C as N,D as y}from"./datetime.B-a1af0c.js";import{_ as M}from"./Button.B-46FQMb.js";import{_ as v}from"./dynamic-import-helper.romy90V3.js";import{u as U}from"./LicenseStore.BvU1D1z9.js";const O={},K={viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-check-solid"},D=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.75 10.5C1.75 5.67 5.67 1.75 10.5 1.75C15.33 1.75 19.25 5.67 19.25 10.5C19.25 15.33 15.33 19.25 10.5 19.25C5.67 19.25 1.75 15.33 1.75 10.5ZM8.75 12.3988L14.5163 6.63251L15.75 7.87501L8.75 14.875L5.25 11.375L6.48375 10.1413L8.75 12.3988Z",fill:"currentColor"},null,-1),q=[D];function H(e,o){return a(),u("svg",K,q)}const V=v(O,[["render",H]]),n="aioseo-broken-link-checker",F={setup(){return{licenseStore:U(),licenseUpgradeComposable:P(),links:A,optionsStore:x(),rootStore:S(),setupWizardComposable:T(),setupWizardStore:z()}},components:{BaseButton:M,CoreAlert:N,SvgCircleCheckSolid:V},props:{isSetupWizard:Boolean},data(){return{DateTime:y,licenseKey:"",error:null,creatingNewAccount:!1,connectingWithExistingAccount:!1,activating:!1,deactivating:!1,strings:w({createAccount:t("Create a Free Account",n),connectExistingAccount:t("Connect to an Existing Account",n),or:t("OR",n),boldText:h("<strong>%1$s %2$s</strong>","Broken Link Checker","Free"),disconnect:t("Disconnect",n),connected:t("Your account is connected!",n)},this.licenseUpgradeComposable.strings,this.setupWizardComposable.strings)}},computed:{link(){return h('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return h(t("To unlock a higher quota, consider %1$s.",n),this.link)},licenseInfo(){const e=y.fromMillis(this.optionsStore.internalOptions.internal.license.expires*1e3).toFormat("MM/dd/yyyy");return h(t("You have a total quota of %1$s links, which renews on %2$s.",n),`<strong>${this.optionsStore.internalOptions.internal.license.quota.toLocaleString()}</strong>`,`<strong>${e}</strong>`)}},methods:{createNewAccountPopup(){this.creatingNewAccount=!0;const e=this.rootStore.aioseoBrokenLinkChecker.urls.marketingSite+"blc-trial-checkout?url="+btoa(this.rootStore.aioseoBrokenLinkChecker.urls.connect);this.openPopup(e)},connectWithExistingAccountPopup(){this.connectingWithExistingAccount=!0;const e=this.rootStore.aioseoBrokenLinkChecker.urls.marketingSite+"account/?blc-connect=1&url="+btoa(this.rootStore.aioseoBrokenLinkChecker.urls.connect);this.openPopup(e)},openPopup(e){B(e,t("Connect Your Site with Broken Link Checker",n),650,800,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){if(!e.token){this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1,this.error=t("Could not connect site to Broken Link Checker. Please try again later.",n);return}return this.licenseKey=e.token,this.activate(),Promise.resolve()},closedCallback(){this.activating||(this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1)},activate(){return this.error=null,this.activating=!0,this.licenseStore.activate(this.licenseKey).then(()=>{this.isSetupWizard&&this.$router.push(this.setupWizardStore.getNextLink)}).catch(e=>{var d,r;if(this.licenseKey="",!((r=(d=e==null?void 0:e.response)==null?void 0:d.body)!=null&&r.error)||!e.response.body.licenseData){this.error=t("An unknown error occurred, please try again later.",n);return}const o=e.response.body.licenseData;o.invalid?this.error=t("The license key provided is invalid. Please use a different key.",n):o.disabled?this.error=t("The license key provided is disabled. Please use a different key.",n):o.expired?this.error=t("The license key provided is expired. Please renew your license or use a different key.",n):o.activationsError?this.error=t("This license has reached the maximum number of activations. Please deactivate it from another site or purchase a new license.",n):(o.connectionError||o.requestError)&&(this.error=t("There was an error connecting to the licensing API. Please try again later.",n)),this.error=t("An unknown error occurred, please try again later.",n)}).finally(()=>{this.activating=!1,this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1})},disconnect(){this.deactivating=!0,this.licenseStore.deactivate().catch(()=>{this.error=t("An unknown error occurred, please try again later.",n)}).finally(()=>{this.deactivating=!1})}}},I={key:0,class:"connect-buttons"},R={class:"button-divider description"},Y={key:1},Z={class:"license"},G={class:"license-buttons"},j={class:"account-connected"},J={class:"license-info"},Q=["innerHTML"],X={key:0};function $(e,o,d,r,i,p){const _=m("base-button"),C=m("core-alert"),b=m("svg-circle-check-solid");return a(),u("div",{class:E(["license-container",[{"setup-wizard":d.isSetupWizard}]])},[r.optionsStore.internalOptions.internal.license.licenseKey?k("",!0):(a(),u("div",I,[g(_,{type:"green",size:"medium",inline:"",tag:"button",loading:i.creatingNewAccount,disabled:i.connectingWithExistingAccount,onClick:p.createNewAccountPopup},{default:f(()=>[l(c(i.strings.createAccount),1)]),_:1},8,["loading","disabled","onClick"]),s("div",R,c(i.strings.or),1),g(_,{type:"gray",size:"medium",inline:"",tag:"button",loading:i.connectingWithExistingAccount,disabled:i.creatingNewAccount,onClick:p.connectWithExistingAccountPopup},{default:f(()=>[l(c(i.strings.connectExistingAccount),1)]),_:1},8,["loading","disabled","onClick"]),i.error?(a(),L(C,{key:0,class:"license-key-error",type:"red",innerHTML:i.error},null,8,["innerHTML"])):k("",!0)])),r.optionsStore.internalOptions.internal.license.licenseKey?(a(),u("div",Y,[s("div",Z,[s("div",G,[s("div",j,[g(b),l(" "+c(i.strings.connected),1)]),g(_,{type:"gray",size:"medium",inline:"",tag:"button",loading:i.deactivating,onClick:p.disconnect},{default:f(()=>[l(c(i.strings.disconnect),1)]),_:1},8,["loading","onClick"])]),s("div",J,[s("p",{innerHTML:p.licenseInfo},null,8,Q),r.optionsStore.internalOptions.internal.license.level&&r.optionsStore.internalOptions.internal.license.level.toLowerCase()!=="elite"?(a(),u("p",X,[s("span",null,c(i.strings.toUnlock)+" ",1),s("strong",null,[s("a",{href:"#",onClick:o[0]||(o[0]=W(ee=>r.licenseUpgradeComposable.openLicenseUpgradePopup("settings","license-key"),["prevent","stop"]))},c(r.licenseUpgradeComposable.upgradeAnchor.value),1)]),l(". ")])):k("",!0)])])])):k("",!0)],2)}const ae=v(F,[["render",$]]);export{ae as C};