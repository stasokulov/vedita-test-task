import{_ as A,o as n,c,a as t,d as B,u as S,b as y,e as N,w as L,t as e,f as i,g as r,F as f,r as g,h as W,i as I,N as _,p as V,j as $,k as D}from"./index-ydRL-rUk.js";const R={},F={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none"},T=t("path",{fill:"#111517","fill-rule":"evenodd",d:"m5.8 3.7 1 1-3.4 3.6h13.3v1.4H3.4l3.5 3.5-1 1.1L.4 9l5.3-5.3Z","clip-rule":"evenodd"},null,-1),E=[T];function j(h,v){return n(),c("svg",F,E)}const H=A(R,[["render",j]]),u=h=>(V("data-v-5c4c2f3f"),h=h(),$(),h),O={class:"country"},P={class:"country__back-button"},Z={key:0,class:"country__content"},q={class:"country__flag"},z=["alt","src"],G={class:"country__discription"},J={class:"country__name"},K={class:"country__props"},M={class:"country__sub-props"},Q={class:"country__prop"},U=u(()=>t("span",{class:"country__prop-title"},"Native Name",-1)),X={class:"country__prop"},Y=u(()=>t("span",{class:"country__prop-title"},"Population",-1)),tt={class:"country__prop"},st=u(()=>t("span",{class:"country__prop-title"},"Region",-1)),ot={class:"country__prop"},et=u(()=>t("span",{class:"country__prop-title"},"Sub Region",-1)),nt={class:"country__prop"},ct=u(()=>t("span",{class:"country__prop-title"},"Capital",-1)),at={class:"country__sub-props"},rt={class:"country__prop"},_t=u(()=>t("span",{class:"country__prop-title"},"Top Level Domain",-1)),it={class:"country__prop"},ut=u(()=>t("span",{class:"country__prop-title"},"Currencies",-1)),lt={key:1},pt={class:"country__prop"},dt=u(()=>t("span",{class:"country__prop-title"},"Languages",-1)),ht={key:1},mt={class:"country__borders"},yt=u(()=>t("h3",{class:"country__borders-title"},"Border Countries:",-1)),vt={key:0,class:"country__borders-list"},ft={key:1},gt=B({__name:"AboutView",setup(h){const v=S(),s=y(()=>v.getActiveCountry),w=y(()=>{var o;if(typeof((o=s.value)==null?void 0:o.population)=="number")return D(s.value.population)}),k=y(()=>{var a;if(!((a=s.value)!=null&&a.currencies))return;const o=s.value.currencies.map(l=>l.name);if(o)return C(o)}),b=y(()=>{var a;if(!((a=s.value)!=null&&a.languages))return;const o=s.value.languages.map(l=>l.name);if(o)return C(o)}),x=o=>{var a;return(a=v.countries.find(l=>l.alpha3Code===o))==null?void 0:a.name},C=o=>{const a=[];return o.forEach(p=>{typeof p=="string"&&a.push(p)}),a.map((p,m)=>m===0?p:`, ${p}`)};return(o,a)=>{var p,m;const l=I("RouterLink");return n(),c("main",O,[N(l,{to:"/"},{default:L(()=>[t("button",P,[N(H,{class:"country__back-icon"}),i(" Back ")])]),_:1}),s.value?(n(),c("div",Z,[t("div",q,[t("img",{alt:s.value.name,class:"country__flag-img",src:s.value.flag},null,8,z)]),t("div",G,[t("h2",J,e(s.value.name),1),t("div",K,[t("div",M,[t("p",Q,[U,i(": "+e(s.value.nativeName??r(_)),1)]),t("p",X,[Y,i(": "+e(w.value??r(_)),1)]),t("p",tt,[st,i(": "+e(s.value.region??r(_)),1)]),t("p",ot,[et,i(": "+e(s.value.subregion??r(_)),1)]),t("p",nt,[ct,i(": "+e(s.value.capital??r(_)),1)])]),t("div",at,[t("p",rt,[_t,i(": "+e(s.value.topLevelDomain[0]??r(_)),1)]),t("p",it,[ut,i(": "),(p=k.value)!=null&&p.length?(n(!0),c(f,{key:0},g(k.value,d=>(n(),c("span",{key:d},e(d),1))),128)):(n(),c("span",lt,e(r(_)),1))]),t("p",pt,[dt,i(": "),(m=b.value)!=null&&m.length?(n(!0),c(f,{key:0},g(b.value,d=>(n(),c("span",{key:d},e(d),1))),128)):(n(),c("span",ht,e(r(_)),1))])])]),t("div",mt,[yt,s.value.borders?(n(),c("ul",vt,[(n(!0),c(f,null,g(s.value.borders,d=>(n(),c("li",{key:d,class:"country__borders-state"},e(x(d)??r(_)),1))),128))])):(n(),c("div",ft,e(r(_)),1))])])])):W("",!0)])}}}),bt=A(gt,[["__scopeId","data-v-5c4c2f3f"]]);export{bt as default};