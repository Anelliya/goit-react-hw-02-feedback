(this.webpackJsonp1components=this.webpackJsonp1components||[]).push([[0],{1:function(t,e,a){t.exports={title:"Statistic_title__1Zf6K",feedback_btn:"Statistic_feedback_btn__2Lb2U",message:"Statistic_message__1wBXv",statistic__item:"Statistic_statistic__item__1HOW3"}},15:function(t,e,a){},16:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(5),i=a.n(s),o=(a(15),a(6)),r=a(7),l=a(8),d=a(10),b=a(9),u=(a(16),a(1)),j=a.n(u),h=a(0),_=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("p",{className:j.a.title,children:e}),a]})},f=a(18),m=function(t){var e=t.options,a=t.heandleFeedback;return e.map((function(t){return Object(h.jsx)("button",{type:"button",name:t,onClick:function(){return a(t)},className:j.a.feedback_btn,children:t},f())}))},O=function(t){var e=t.message;return Object(h.jsx)("p",{className:j.a.message,children:e})},g=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positiveFeedback;return Object(h.jsx)("div",{children:0===c?Object(h.jsx)(O,{message:"No feedback given."}):Object(h.jsxs)("ul",{className:"statistic__list",children:[Object(h.jsxs)("li",{className:j.a.statistic__item,children:["Good: ",e]}),Object(h.jsxs)("li",{className:j.a.statistic__item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:j.a.statistic__item,children:["Bad: ",n]}),Object(h.jsxs)("li",{className:j.a.statistic__item,children:["Total: ",c]}),Object(h.jsxs)("li",{className:j.a.statistic__item,children:["Positive feedback: ",s,"%"]})]})})},p=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0,persentage:0},t.heandleFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.total+1}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{persentage:100*t.good/t.total}}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.persentage,i=Math.round(s);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:["good","neutral","bad"],heandleFeedback:this.heandleFeedback})}),Object(h.jsx)(_,{title:"Statistics",children:Object(h.jsx)(g,{good:e,neutral:a,bad:n,total:c,positiveFeedback:i})})]})}}]),a}(n.Component),v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};a(24);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.9ae8eca5.chunk.js.map