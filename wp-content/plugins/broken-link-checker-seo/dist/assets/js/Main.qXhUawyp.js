import{t as n,x as s,o as i}from"./index.CjtK8fPy.js";import a from"./Connect.Cs7aYxRk.js";import p from"./Success.Bduf5cSV.js";import c from"./Welcome.CGxnRuth.js";import{_ as u}from"./dynamic-import-helper.romy90V3.js";import{u as m}from"./SetupWizard.0d2DzUN_.js";import"./Index.CLMrFdFK.js";import"./LicenseUpgrade.C-8beXZw.js";import"./LicenseStore.BvU1D1z9.js";import"./datetime.B-a1af0c.js";import"./Close.BEWa5zQd.js";import"./Button.B-46FQMb.js";import"./Header.BztKSjO4.js";import"./Logo.BIJLH6vJ.js";const l={setup(){return{setupWizardStore:m()}},components:{Connect:a,Success:p,Welcome:c},methods:{deleteStage(o){const t=[...this.setupWizardStore.stages],r=t.findIndex(e=>o===e);r!==-1&&t.splice(r,1),this.setupWizardStore.stages=t}},mounted(){this.setupWizardStore.currentStage=this.stage}};function f(o,t,r,e,_,d){return i(),n(s(o.$route.name))}const D=u(l,[["render",f]]);export{D as default};
