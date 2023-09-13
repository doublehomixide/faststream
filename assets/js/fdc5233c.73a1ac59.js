"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[9794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,u=d["".concat(p,".").concat(k)]||d[k]||f[k]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},o=void 0,l={unversionedId:"api/fastkafka/EventMetadata",id:"version-0.7.1/api/fastkafka/EventMetadata",title:"EventMetadata",description:"fastkafka.EventMetadata {fastkafka.EventMetadata}",source:"@site/versioned_docs/version-0.7.1/api/fastkafka/EventMetadata.md",sourceDirName:"api/fastkafka",slug:"/api/fastkafka/EventMetadata",permalink:"/docs/0.7.1/api/fastkafka/EventMetadata",draft:!1,tags:[],version:"0.7.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Benchmarking FastKafka app",permalink:"/docs/0.7.1/guides/Guide_06_Benchmarking_FastKafka"},next:{title:"FastKafka",permalink:"/docs/0.7.1/api/fastkafka/"}},p={},s=[{value:"<code>fastkafka.EventMetadata</code>",id:"fastkafka.EventMetadata",level:2},{value:"<code>create_event_metadata</code>",id:"create_event_metadata",level:3}],c={toc:s},d="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fastkafka.EventMetadata"},(0,r.kt)("inlineCode",{parentName:"h2"},"fastkafka.EventMetadata")),(0,r.kt)("p",null,"A class for encapsulating Kafka record metadata."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic"),": The topic this record is received from"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partition"),": The partition from which this record is received"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offset"),": The position of this record in the corresponding Kafka partition"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp of this record"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp_type"),": The timestamp type of this record"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key (or ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," if no key is specified)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serialized_key_size"),": The size of the serialized, uncompressed key in bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serialized_value_size"),": The size of the serialized, uncompressed value in bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),": The headers")),(0,r.kt)("h3",{id:"create_event_metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},"create_event_metadata")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def create_event_metadata(record: aiokafka.structs.ConsumerRecord) -> EventMetadata")),(0,r.kt)("p",null,"Creates an instance of EventMetadata from a ConsumerRecord."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"record"),": The Kafka ConsumerRecord.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The created EventMetadata instance.")))}f.isMDXComponent=!0}}]);