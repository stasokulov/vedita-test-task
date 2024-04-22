import{_ as N,o as n,c as a,a as t,d as S,u as L,b as v,e as W,f as A,w as I,t as e,g as u,h as r,F as g,r as f,i as V,j as R,k as $,N as _,p as D,l as F,m as T}from"./index-d9Pc2BNI.js";const E={},j={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none"},H=t("path",{fill:"#111517","fill-rule":"evenodd",d:"m5.8 3.7 1 1-3.4 3.6h13.3v1.4H3.4l3.5 3.5-1 1.1L.4 9l5.3-5.3Z","clip-rule":"evenodd"},null,-1),M=[H];function O(h,m){return n(),a("svg",j,M)}const P=N(E,[["render",O]]),i=h=>(D("data-v-967a59e7"),h=h(),F(),h),Z={class:"country"},q={class:"country__back-button"},z={key:0,class:"country__content"},G={class:"country__flag"},J=["alt","src"],K={class:"country__discription"},Q={class:"country__name"},U={class:"country__props"},X={class:"country__sub-props"},Y={class:"country__prop"},tt=i(()=>t("span",{class:"country__prop-title"},"Native Name",-1)),st={class:"country__prop"},ot=i(()=>t("span",{class:"country__prop-title"},"Population",-1)),et={class:"country__prop"},nt=i(()=>t("span",{class:"country__prop-title"},"Region",-1)),at={class:"country__prop"},ct=i(()=>t("span",{class:"country__prop-title"},"Sub Region",-1)),rt={class:"country__prop"},_t=i(()=>t("span",{class:"country__prop-title"},"Capital",-1)),ut={class:"country__sub-props"},it={class:"country__prop"},lt=i(()=>t("span",{class:"country__prop-title"},"Top Level Domain",-1)),pt={class:"country__prop"},dt=i(()=>t("span",{class:"country__prop-title"},"Currencies",-1)),ht={key:1},mt={class:"country__prop"},yt=i(()=>t("span",{class:"country__prop-title"},"Languages",-1)),vt={key:1},gt={class:"country__borders"},ft=i(()=>t("h3",{class:"country__borders-title"},"Border Countries:",-1)),Ct={key:0,class:"country__borders-list"},kt={key:1},bt=S({__name:"AboutView",setup(h){const m=L(),w=R(),s=v(()=>m.getActiveCountry),x=v(()=>{var o;if(typeof((o=s.value)==null?void 0:o.population)=="number")return T(s.value.population)}),C=v(()=>{var c;if(!((c=s.value)!=null&&c.currencies))return;const o=s.value.currencies.map(l=>l.name);if(o)return b(o)}),k=v(()=>{var c;if(!((c=s.value)!=null&&c.languages))return;const o=s.value.languages.map(l=>l.name);if(o)return b(o)}),B=o=>{var c;return(c=m.countries.find(l=>l.alpha3Code===o))==null?void 0:c.name},b=o=>{const c=[];return o.forEach(p=>{typeof p=="string"&&c.push(p)}),c.map((p,y)=>y===0?p:`, ${p}`)};return W(()=>{m.setActiveCountryCode(w.params.id)}),(o,c)=>{var p,y;const l=$("RouterLink");return n(),a("main",Z,[A(l,{to:"/"},{default:I(()=>[t("button",q,[A(P,{class:"country__back-icon"}),u(" Back ")])]),_:1}),s.value?(n(),a("div",z,[t("div",G,[t("img",{alt:s.value.name,class:"country__flag-img",src:s.value.flag},null,8,J)]),t("div",K,[t("h2",Q,e(s.value.name),1),t("div",U,[t("div",X,[t("p",Y,[tt,u(": "+e(s.value.nativeName??r(_)),1)]),t("p",st,[ot,u(": "+e(x.value??r(_)),1)]),t("p",et,[nt,u(": "+e(s.value.region??r(_)),1)]),t("p",at,[ct,u(": "+e(s.value.subregion??r(_)),1)]),t("p",rt,[_t,u(": "+e(s.value.capital??r(_)),1)])]),t("div",ut,[t("p",it,[lt,u(": "+e(s.value.topLevelDomain[0]??r(_)),1)]),t("p",pt,[dt,u(": "),(p=C.value)!=null&&p.length?(n(!0),a(g,{key:0},f(C.value,d=>(n(),a("span",{key:d},e(d),1))),128)):(n(),a("span",ht,e(r(_)),1))]),t("p",mt,[yt,u(": "),(y=k.value)!=null&&y.length?(n(!0),a(g,{key:0},f(k.value,d=>(n(),a("span",{key:d},e(d),1))),128)):(n(),a("span",vt,e(r(_)),1))])])]),t("div",gt,[ft,s.value.borders?(n(),a("ul",Ct,[(n(!0),a(g,null,f(s.value.borders,d=>(n(),a("li",{key:d,class:"country__borders-state"},e(B(d)??r(_)),1))),128))])):(n(),a("div",kt,e(r(_)),1))])])])):V("",!0)])}}}),Nt=N(bt,[["__scopeId","data-v-967a59e7"]]);export{Nt as default};