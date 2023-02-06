"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88921:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Personal Data Market",sidebar_position:2,hide_table_of_contents:!1},i="Potential UseCase: Personal Data Market",s={unversionedId:"greenfield/use-cases/personal-data-market",id:"greenfield/use-cases/personal-data-market",isDocsHomePage:!1,title:"Potential UseCase: Personal Data Market",description:"This may be the most complicated problem to tackle nowadays: how to own",source:"@site/docs/greenfield/use-cases/personal-data-market.md",sourceDirName:"greenfield/use-cases",slug:"/greenfield/use-cases/personal-data-market",permalink:"/docs/greenfield/use-cases/personal-data-market",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/use-cases/personal-data-market.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Personal Data Market",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"User-Generated Content",permalink:"/docs/greenfield/use-cases/user-generated-content"},next:{title:"Ecosystem Players",permalink:"/docs/greenfield/tech-specs/ecosystem-players"}},l=[],c={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"potential-usecase-personal-data-market"},"Potential UseCase: Personal Data Market"),(0,r.kt)("p",null,"This may be the most complicated problem to tackle nowadays: how to own\nyour data, such as page views, registrations, clicks, behavior data, and\nmuch more. The ownership guarantees that no platforms (usually the\nmonopoly ones) can abuse using it. Many laws are defined to punish\nmisuse, but there are few proactive solutions."),(0,r.kt)("p",null,"BNB Greenfield poses for pioneering new angles to solve this: what if\nyou can ask the applications to store all your data encrypted on\nGreenfield under your account, and only allow the processing of your\ndata via a publicly readable code?"),(0,r.kt)("p",null,"Let us check a specific scenario. A data market stores your past buy and\nsell orders on Greenfield, encrypted by your account's public key. Only\nyour private key can decrypt and read it. However the data market\napplication will like to read your data to recommend other items,\nmeanwhile, another data agency would like to use this data to perform\ncommercial research. Both of them are willing to pay you for their\nprocessing of your data. You tend to grant permission to them to read\nthe data but worry they will do other things with your data. How can BNB\nGreenfield solve this?"),(0,r.kt)("p",null,'This may not be day 1 implementation but BNB Greenfield targets to solve\nthis trust computing problem by providing a verifiable computing runtime\n("do not trust, verify").'),(0,r.kt)("p",null,"In the above scenario, the data market application and the data agency\nmay put the programs that need to read the users' data on Greenfield and\nshare them with you or even the whole public. You can verify whether you\nare comfortable with what the programs do. Then you grant the read\npermission of this new object with a\n\"",(0,r.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/epdf/10.1002/sec.1593"},"group-oriented"),'"\nencryption scheme to these programs. The data market and the data agency\ncan pay you and then will run these programs to get the result on a\nverifiable sandbox of the runtime of Greenfield.'),(0,r.kt)("p",null,"Once this model gets understood, a lot of enhancements can be done via\nmodern cryptography to improve the user experience."),(0,r.kt)("p",null,"For example, the deal can be negotiated beforehand between you and the\ndata market. Thus the grant of the permission and corresponding economic\nbenefits exchange can happen within a smart contract to reduce the trust\nrequired. After the deal is achieved, the data will be saved via\nBLS-based encryption from the time it is generated. Either the data\nowner or the data market programs that the data owner approves (not the\ndata market owner) can, and only those two can decrypt the data."),(0,r.kt)("p",null,"Many more infrastructures related to the scenario above are not\nconsidered in this paper yet but can be gradually designed and\nimplemented on BNB Greenfield."))}d.isMDXComponent=!0}}]);