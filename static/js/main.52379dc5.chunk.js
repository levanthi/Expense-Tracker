(this.webpackJsonpexpense_tracker=this.webpackJsonpexpense_tracker||[]).push([[0],{12:function(e,t,a){e.exports={inputWrap:"input_inputWrap__2euXc"}},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(11),r=a.n(s),i=a(13),u=a(10),l=a(3),o="INPUT_TITLE",j="INPUT_AMOUNT",b="ADD_TRACK",p={available:0,income:0,expense:0,history:[],setInputTitle:"",setInputAmount:"",isValid:!1};var d=function(e,t){switch(t.type){case o:return Object(l.a)(Object(l.a)({},e),{},{setInputTitle:t.payload});case j:return Object(l.a)(Object(l.a)({},e),{},{setInputAmount:t.payload});case b:var a=Number(e.setInputAmount);return isNaN(a)||0===a?Object(l.a)(Object(l.a)({},e),{},{isValid:!0}):a>=0?Object(l.a)(Object(l.a)({},e),{},{available:e.available+a,income:e.income+a,history:[[e.setInputTitle,e.setInputAmount]].concat(Object(u.a)(e.history)),setInputTitle:"",setInputAmount:"",isValid:!1}):a<0?(a*=-1)>e.available?Object(l.a)(Object(l.a)({},e),{},{isValid:!0}):Object(l.a)(Object(l.a)({},e),{},{available:e.available-a,expense:e.expense+a,history:[[e.setInputTitle,e.setInputAmount]].concat(Object(u.a)(e.history)),setInputTitle:"",setInputAmount:"",isValid:!1}):e;default:throw new Error}},O=(a(18),a(2)),x=a(9),h=a.n(x),m=a(0);var v=function(){var e=Object(n.useContext)(w);return Object(n.useMemo)((function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{className:Object(O.a)(h.a.heading),children:"Available"}),Object(m.jsxs)("div",{className:Object(O.a)(h.a.spareNumber),children:["$",e.available]})]})}),[e.available])},_=a(4),N=a.n(_);var I=function(){var e=Object(n.useContext)(w),t=e.income,a=e.expense;return Object(n.useMemo)((function(){return Object(m.jsxs)("div",{className:Object(O.a)(N.a.wrapper),children:[Object(m.jsxs)("div",{className:Object(O.a)(N.a.expenseWrap,N.a.ex1),children:[Object(m.jsx)("p",{children:"Income"}),Object(m.jsxs)("div",{className:Object(O.a)(N.a.total),children:["$",t]})]}),Object(m.jsxs)("div",{className:Object(O.a)(N.a.expenseWrap,N.a.ex2),children:[Object(m.jsx)("p",{children:"Expense"}),Object(m.jsxs)("div",{className:Object(O.a)(N.a.expense),children:["$",a]})]})]})}),[t,a])},f=a(5),y=a.n(f);var T=function(){var e=Object(n.useContext)(w).history;return Object(n.useMemo)((function(){return Object(m.jsxs)("div",{className:Object(O.a)(y.a.history),children:[Object(m.jsx)("h4",{children:"History"}),Object(m.jsx)("ul",{children:e.map((function(e,t){return Object(m.jsxs)("li",{className:Object(O.a)(Number(e[1])<0?y.a.subtract:y.a.add),children:[Object(m.jsxs)("span",{className:Object(O.a)(y.a.name),children:[t+1,".",e[0]]}),Object(m.jsx)("span",{className:Object(O.a)(y.a.price),children:Number(e[1])<0?"-$".concat(Math.abs(Number(e[1]))):"+$".concat(Number(e[1]))})]},t)}))})]})}),[e])},A=a(12),g=a.n(A);var C=function(e){var t=e.dispatch,a=Object(n.useRef)(),c=Object(n.useContext)(w);return Object(m.jsxs)("div",{className:Object(O.a)(g.a.inputWrap),children:[Object(m.jsx)("h4",{children:"Add new transaction"}),Object(m.jsx)("label",{htmlFor:"nameInput",children:"Text"}),Object(m.jsx)("input",{ref:a,value:c.setInputTitle,id:"nameInput",placeholder:"Transaction title",onChange:function(e){return t((a=e.target.value,{type:o,payload:a}));var a}}),Object(m.jsx)("label",{htmlFor:"amountInput",children:"Amount"}),Object(m.jsx)("input",{value:c.setInputAmount,id:"amountInput",placeholder:"0",onChange:function(e){return t((a=e.target.value,{type:j,payload:a}));var a}}),c.isValid?Object(m.jsx)("span",{style:{color:"red",fontSize:"0.8rem",position:"relative",bottom:"10px"},children:"Invalid character or Spare Number not enough"}):"",Object(m.jsx)("button",{onClick:function(){t({type:b}),a.current.focus()},children:"Add transaction"})]})},w=Object(n.createContext)();var V=function(){var e=Object(n.useReducer)(d,p),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)(w.Provider,{value:a,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"heading",children:"Expense Tracker"}),Object(m.jsx)(v,{}),Object(m.jsx)(I,{}),Object(m.jsx)(T,{}),Object(m.jsx)(C,{dispatch:c})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),W()},4:function(e,t,a){e.exports={wrapper:"expense_wrapper__2qNeh",expenseWrap:"expense_expenseWrap__wbQH4",ex1:"expense_ex1__1xqbq",ex2:"expense_ex2__33xBi"}},5:function(e,t,a){e.exports={history:"history_history__1o3Ki",add:"history_add__j0c1J",subtract:"history_subtract__1IIKB"}},9:function(e,t,a){e.exports={heading:"available_heading__32-T3",spareNumber:"available_spareNumber__3VjAi"}}},[[20,1,2]]]);
//# sourceMappingURL=main.52379dc5.chunk.js.map