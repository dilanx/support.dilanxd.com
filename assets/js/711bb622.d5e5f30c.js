"use strict";(self.webpackChunkdilanx_support=self.webpackChunkdilanx_support||[]).push([[295],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=o(a),k=r,N=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7490:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={pagination_prev:"paper/develop/user-data",pagination_next:"paper/develop/api-reference"},i="Using Course Data",d={unversionedId:"paper/develop/course-data",id:"paper/develop/course-data",title:"Using Course Data",description:"First, you'll need instructions and access to course data. Then, you can proceed.",source:"@site/docs/paper/develop/course-data.md",sourceDirName:"paper/develop",slug:"/paper/develop/course-data",permalink:"/paper/develop/course-data",draft:!1,editUrl:"https://github.com/dilanx/support.dilanxd.com/blob/main/docs/paper/develop/course-data.md",tags:[],version:"current",frontMatter:{pagination_prev:"paper/develop/user-data",pagination_next:"paper/develop/api-reference"},sidebar:"sidebar",previous:{title:"Using User Data",permalink:"/paper/develop/user-data"},next:{title:"Paper API Reference",permalink:"/paper/develop/api-reference"}},p={},o=[{value:"Plan data",id:"plan-data",level:2},{value:"Schedule data",id:"schedule-data",level:2},{value:"Type Reference",id:"type-reference",level:2},{value:"PlanCourse",id:"plancourse",level:3},{value:"ScheduleCourse",id:"schedulecourse",level:3},{value:"ScheduleSection",id:"schedulesection",level:3},{value:"SectionInstructor",id:"sectioninstructor",level:3},{value:"Time",id:"time",level:3},{value:"DistrosString",id:"distrosstring",level:3},{value:"DisciplinesString",id:"disciplinesstring",level:3},{value:"MeetingDaysString",id:"meetingdaysstring",level:3},{value:"SectionDescription",id:"sectiondescription",level:3}],u={toc:o},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-course-data"},"Using Course Data"),(0,r.kt)("p",null,"First, you'll need instructions and access to course data. Then, you can proceed."),(0,r.kt)("p",null,"All course data is stored in a series of quite large minified JSON files. One JSON file holds the latest plan data (around 2 MB - 3 MB), and each term (quarter) available to Paper has a JSON file with the term-specific schedule data (each around 3 MB - 4 MB). While schedule data files doesn't include all of the course data like the plan data file does, schedule data files tend to be larger since they can include paragraphs of descriptions provided by instructors."),(0,r.kt)("p",null,"There is currently no standalone conversion tool available to convert the JSON files into a more usable format. Instead, you'll need to use the tables below to understand the structure of these files."),(0,r.kt)("p",null,"You can see these conversions being made ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dilanx/paper.nu/blob/main/src/utility/DataMap.ts"},"here in the Paper source code"),"."),(0,r.kt)("h2",{id:"plan-data"},"Plan data"),(0,r.kt)("p",null,"The following are the keys of the root object of the plan data file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"courses")," - An array of all current courses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy")," - An array of old courses that used to be included in the data from the registrar but no longer are. This is important in case a user has a plan that includes one of these courses back when it may have been offered.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"courses")),(0,r.kt)("td",{parentName:"tr",align:null},"courses"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#plancourse"},"PlanCourse"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"legacy")),(0,r.kt)("td",{parentName:"tr",align:null},"legacy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#plancourse"},"PlanCourse"),"[]")))),(0,r.kt)("h2",{id:"schedule-data"},"Schedule data"),(0,r.kt)("p",null,"The schedule data file consists of an array of ",(0,r.kt)("a",{parentName:"p",href:"#schedulecourse"},"ScheduleCourse"),"."),(0,r.kt)("h2",{id:"type-reference"},"Type Reference"),(0,r.kt)("p",null,"Many properties in these types will not always exist. I highly recommend null checking every one."),(0,r.kt)("h3",{id:"plancourse"},"PlanCourse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the subject and catalog number of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u")),(0,r.kt)("td",{parentName:"tr",align:null},"units"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of units the course is worth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"r")),(0,r.kt)("td",{parentName:"tr",align:null},"repeatable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the course is repeatable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"d")),(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the description of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:null},"prereqs"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the prerequisites of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s")),(0,r.kt)("td",{parentName:"tr",align:null},"distribution areas"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#distrosstring"},"DistrosString")),(0,r.kt)("td",{parentName:"tr",align:null},"the distribution areas that the course fulfills")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f")),(0,r.kt)("td",{parentName:"tr",align:null},"foundational disciplines"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#disciplinesstring"},"DisciplinesString")),(0,r.kt)("td",{parentName:"tr",align:null},"the foundational disciplines that the course fulfills")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"l")),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the course is a placeholder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t")),(0,r.kt)("td",{parentName:"tr",align:null},"terms"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the terms IDs of when the course has been offered in the past")))),(0,r.kt)("h3",{id:"schedulecourse"},"ScheduleCourse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"course id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the course ID number provided by NU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:null},"school"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the school the course is in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t")),(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u")),(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the subject of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")),(0,r.kt)("td",{parentName:"tr",align:null},"catalog number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the catalog number of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s")),(0,r.kt)("td",{parentName:"tr",align:null},"sections"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#schedulesection"},"ScheduleSection"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the sections of the course")))),(0,r.kt)("h3",{id:"schedulesection"},"ScheduleSection"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"section id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the course ID number provided by NU with a section number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"r")),(0,r.kt)("td",{parentName:"tr",align:null},"instructors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sectioninstructor"},"SectionInstructor"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the instructors of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t")),(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"k")),(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the topic of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u")),(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the subject of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")),(0,r.kt)("td",{parentName:"tr",align:null},"catalog number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the catalog number of the course")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s")),(0,r.kt)("td",{parentName:"tr",align:null},"section number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the section number of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"m")),(0,r.kt)("td",{parentName:"tr",align:null},"meeting days"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#meetingdaystring"},"MeetingDaysString")," ","|"," null)[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the meeting days for each time slot of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"start time"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#time"},"Time")," ","|"," null)[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the start time of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:null},"end time"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#time"},"Time")," ","|"," null)[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the end time of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"l")),(0,r.kt)("td",{parentName:"tr",align:null},"room"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the location of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"d")),(0,r.kt)("td",{parentName:"tr",align:null},"start date"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the start date of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e")),(0,r.kt)("td",{parentName:"tr",align:null},"end date"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the end date of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:null},"component"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the component of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:null},"capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"the capacity of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"q")),(0,r.kt)("td",{parentName:"tr",align:null},"enrollment requirements"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the enrollment requirements of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:null},"descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sectiondescription"},"SectionDescription"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the descriptions of the section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"o")),(0,r.kt)("td",{parentName:"tr",align:null},"distribution areas"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#distrosstring"},"DistrosString")),(0,r.kt)("td",{parentName:"tr",align:null},"the distribution areas that the section fulfills")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f")),(0,r.kt)("td",{parentName:"tr",align:null},"foundational disciplines"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#disciplinesstring"},"DisciplinesString")),(0,r.kt)("td",{parentName:"tr",align:null},"the foundational disciplines that the section fulfills")))),(0,r.kt)("h3",{id:"sectioninstructor"},"SectionInstructor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the instructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the phone number of the instructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:null},"campus address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the campus address of the instructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"o")),(0,r.kt)("td",{parentName:"tr",align:null},"office hours"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the office hours of the instructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"b")),(0,r.kt)("td",{parentName:"tr",align:null},"bio"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the bio of the instructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u")),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the URL of the instructor")))),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Short"),(0,r.kt)("th",{parentName:"tr",align:null},"Long"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:null},"hour"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"hour from 0 to 23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"m")),(0,r.kt)("td",{parentName:"tr",align:null},"minute"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"minute from 0 to 59")))),(0,r.kt)("h3",{id:"distrosstring"},"DistrosString"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"DistrosString")," is a normal string where each character represents a distribution area."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Distribution Area"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Natural Sciences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Formal Studies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Social and Behavioral Sciences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Historical Studies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethics and Values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Literature and Fine Arts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Interdisciplinary Studies")))),(0,r.kt)("p",null,"For example, the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"14"')," means both the Natural Studies and Historical Studies distribution areas are linked to the course."),(0,r.kt)("h3",{id:"disciplinesstring"},"DisciplinesString"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"DisciplinesString")," is a normal string where each character represents a foundational discipline."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Distribution Area"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Natural Sciences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Empirical and Deductive Reasoning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Social and Behavioral Sciences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Historical Studies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethical and Evaluative Thinking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Literature and Arts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Interdisciplinary")))),(0,r.kt)("p",null,"For example, the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"14"')," means both the Natural Studies and Historical Studies foundational disciplines are linked to the course."),(0,r.kt)("h3",{id:"meetingdaysstring"},"MeetingDaysString"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"MeetingDaysString")," is a normal string where each character represents a day of the week."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Day of the Week"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Monday")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuesday")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Wednesday")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Thursday")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Friday")))),(0,r.kt)("p",null,"For example, the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"024"')," means the section includes a repeated meeting time on Monday, Wednesday, and Friday."),(0,r.kt)("h3",{id:"sectiondescription"},"SectionDescription"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionDescription")," is an array of strings (",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),"). The first element is the description title. The second element is the description value."),(0,r.kt)("p",null,"For example, a section may have the following ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionDescription[]")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    "Overview",\n    "This is an overview of this class. Blah blah blah words here words there and so on."\n  ],\n  [\n    "Class Materials",\n    "You\'ll need this textbook and this calculator and this device and so on."\n  ]\n]\n')))}s.isMDXComponent=!0}}]);