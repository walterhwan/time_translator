(this.webpackJsonptime_translator=this.webpackJsonptime_translator||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(11),a(2)),s=a(1),l=a.n(s);a(15);l.a.suppressDeprecationWarnings=!0;function m(e){var t="string"===typeof e?Number(e):e;try{return new Date(t).toISOString()}catch(a){return"---"}}function u(e){var t="string"===typeof e?Number(e):e;try{return l()(t).tz(l.a.tz.guess()).format()}catch(a){return"---"}}function h(e){try{return new Date(e).getTime()||"---"}catch(t){return"---"}}function d(e,t){return l()(e).isValid()?l()(e).tz(t).format("YYYY-MM-DD, hh:mm:ss A")+" (".concat(t,")"):"---"}var p=function(){var e,t=r.a.useState(Date.now()),a=Object(o.a)(t,2),n=a[0],c=a[1],i=r.a.useState(m(n)),s=Object(o.a)(i,2),p=s[0],v=s[1],f=r.a.useState(u(n)),g=Object(o.a)(f,2),E=g[0],b=g[1],N=(e=p,l()(e).isValid()?l()(e).format("YYYY-MM-DD, hh:mm:ss A")+" (Local Time)":"---"),w=d(p,"America/Los_Angeles"),y=d(p,"America/Denver"),D=d(p,"America/Chicago"),S=d(p,"America/New_York"),A=d(p,"Etc/UTC"),Y=d(p,"Asia/Kathmandu");return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"center-div"},r.a.createElement("div",{className:"title"},"Time Translator"),r.a.createElement("button",{className:"set-button",type:"button",onClick:function(){var e=Date.now();c(e),v(m(e)),b(u(n))}},"Set to current time"),r.a.createElement("label",{htmlFor:"epoch-input"},"UNIX Epoch time in milliseconds"),r.a.createElement("input",{className:"epoch-input",id:"epoch-input",autoFocus:!0,type:"text",value:n,onChange:function(e){var t=e.target.value.replace(/[^\d]/g,"");c(t),v(m(t)),b(u(n))}}),r.a.createElement("label",{htmlFor:"iso-input"},"ISO 8601"),r.a.createElement("input",{className:"iso-input",id:"iso-input",autoFocus:!0,type:"text",value:p,onChange:function(e){var t=e.target.value;v(t),c(h(t)),b(u(h(t)))}}),r.a.createElement("label",{htmlFor:"iso-input"},"Local ISO 8601"),r.a.createElement("input",{className:"iso-input",id:"iso-input",autoFocus:!0,type:"text",value:E,onChange:function(e){var t=e.target.value;b(t),v(function(e){try{return new Date(e).toISOString()}catch(t){return"---"}}(t)),c(function(e){try{return new Date(e).getTime()||"---"}catch(t){return"---"}}(t))}}),r.a.createElement("div",{className:"human-readable-time"},N),r.a.createElement("div",{className:"human-readable-time"},w),r.a.createElement("div",{className:"human-readable-time"},y),r.a.createElement("div",{className:"human-readable-time"},D),r.a.createElement("div",{className:"human-readable-time"},S),r.a.createElement("div",{className:"human-readable-time"},A),r.a.createElement("div",{className:"human-readable-time"},Y)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.90f181b9.chunk.js.map