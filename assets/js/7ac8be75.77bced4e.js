"use strict";(self.webpackChunkdilanx_kb=self.webpackChunkdilanx_kb||[]).push([[994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={pagination_prev:"paper/index",pagination_next:"paper/plans-getting-started"},l="Paper FAQ",s={unversionedId:"paper/faq",id:"paper/faq",title:"Paper FAQ",description:"About",source:"@site/docs/paper/faq.md",sourceDirName:"paper",slug:"/paper/faq",permalink:"/paper/faq",draft:!1,editUrl:"https://github.com/dilanx/kb.dilanxd.com/docs/paper/faq.md",tags:[],version:"current",frontMatter:{pagination_prev:"paper/index",pagination_next:"paper/plans-getting-started"},sidebar:"sidebar",previous:{title:"Paper",permalink:"/paper/"},next:{title:"Plans: Getting Started",permalink:"/paper/plans-getting-started"}},i={},p=[{value:"About",id:"about",level:2},{value:"What is Paper?",id:"what-is-paper",level:3},{value:"Course Data",id:"course-data",level:2},{value:"When will the latest courses be out?",id:"when-will-the-latest-courses-be-out",level:3},{value:"Some course data is outdated or missing! What do I do?",id:"some-course-data-is-outdated-or-missing-what-do-i-do",level:3},{value:"Plans and Schedules",id:"plans-and-schedules",level:2},{value:"My plan or schedule is gone. What happened?",id:"my-plan-or-schedule-is-gone-what-happened",level:3},{value:"How do I share or export my plan or schedule?",id:"how-do-i-share-or-export-my-plan-or-schedule",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"paper-faq"},"Paper FAQ"),(0,n.kt)("h2",{id:"about"},"About"),(0,n.kt)("h3",{id:"what-is-paper"},"What is Paper?"),(0,n.kt)("p",null,"Paper, also known as paper.nu (",(0,n.kt)("a",{parentName:"p",href:"https://www.paper.nu"},"https://www.paper.nu"),") is a student-built course scheduling tool for Northwestern University. It supports building 4-year plans and creating schedules for each quarter. You can view course information all in one place, share and export plans and schedules, save several of them to your account, and more."),(0,n.kt)("h2",{id:"course-data"},"Course Data"),(0,n.kt)("h3",{id:"when-will-the-latest-courses-be-out"},"When will the latest courses be out?"),(0,n.kt)("p",null,"Course data is automatically refreshed every ",(0,n.kt)("strong",{parentName:"p"},"Monday, Wednesday, and Friday at around 11:30 AM"),". If courses for a new quarter are available, they will be available at this time. Otherwise, the current quarter course data will be refreshed for any changes made to the courses by the instructors in CAESAR."),(0,n.kt)("h3",{id:"some-course-data-is-outdated-or-missing-what-do-i-do"},"Some course data is outdated or missing! What do I do?"),(0,n.kt)("p",null,"If you believe that your course data is outdated and should be updated (based on ",(0,n.kt)("a",{parentName:"p",href:"#when-will-the-latest-courses-be-out"},"the time at which the course data is refreshed"),"), you can try clearing your course data cache on Paper by going to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," and pressing the ",(0,n.kt)("strong",{parentName:"p"},"Clear")," button beside ",(0,n.kt)("strong",{parentName:"p"},"Clear local course data cache"),". This will force your computer to refresh the course data from the Paper data server. If that doesn't still work, ",(0,n.kt)("a",{parentName:"p",href:"https://www.dilanxd.com/contact"},"let me know"),"!"),(0,n.kt)("h2",{id:"plans-and-schedules"},"Plans and Schedules"),(0,n.kt)("h3",{id:"my-plan-or-schedule-is-gone-what-happened"},"My plan or schedule is gone. What happened?"),(0,n.kt)("p",null,"If you aren't using an account with Paper, your plans and schedules are stored in your browser's storage. If you clear website data for Paper, locally-saved plans and schedules will be gone. Creating an account is the way to go! If you do have an account and your plan or schedule is gone, go to the ",(0,n.kt)("strong",{parentName:"p"},"Plans")," or ",(0,n.kt)("strong",{parentName:"p"},"Schedules")," tab (depending on which view you're in) and select the relevant item from the list to load it."),(0,n.kt)("h3",{id:"how-do-i-share-or-export-my-plan-or-schedule"},"How do I share or export my plan or schedule?"),(0,n.kt)("p",null,"While your plan or schedule is open, press the ",(0,n.kt)("strong",{parentName:"p"},"Export")," button in the toolbar and select your desired method."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Share link"),": This will share a link to a ",(0,n.kt)("strong",{parentName:"li"},"copy")," of your plan or schedule. Anyone with the link can view or edit on their device, but it won't update your plan or schedule."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export as image")," (schedule only): This will automatically generate and download a ",(0,n.kt)("strong",{parentName:"li"},"full-size image (1920x1080)")," of your schedule, no matter what device you're on. No need to take awkward screenshots!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export to calendar")," (schedule only): This will download an ",(0,n.kt)("strong",{parentName:"li"},".ics")," file that you can then use to import your schedule into your calendar app of choice.")))}c.isMDXComponent=!0}}]);