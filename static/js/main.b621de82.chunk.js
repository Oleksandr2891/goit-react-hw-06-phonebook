(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(n){n.exports=JSON.parse('{"contactsBase":[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Klin","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copelan","number":"227-91-26"}]}')},42:function(n,e,t){"use strict";t.r(e);var a,i,r,o,c,s,l=t(0),b=t.n(l),d=t(10),u=t.n(d),p=t(6),x=t(3),m=t(4),f=m.b.ul(a||(a=Object(x.a)(["\n    \n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 4;\n     \n"]))),h=m.b.li(i||(i=Object(x.a)(["\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 24px;\n\n    .buttonDelete{\n        text-decoration: none;\n        display: inline-block;\n        width: 100px;\n        height: 20px;\n        line-height: 16px;\n        border-radius: 45px;\n        margin: 10px 20px;\n        font-size: 10px;\n        text-transform: uppercase;\n        text-align: center;\n        letter-spacing: 3px;\n        font-weight: 600;\n        color: #524f4e;\n        background: white;\n        box-shadow: 0 8px 15px rgba(0, 0, 0, .1);\n        transition: .3s;\n    }\n    .buttonDelete:hover {\n        background: #e53a2e;\n        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);\n        color: white;\n        transform: translateY(-7px);\n    }\n        \n"]))),j=t(1),g=function(n){var e=n.id,t=n.name,a=n.number,i=n.onDeleteContact;return Object(j.jsxs)(h,{children:[Object(j.jsxs)("p",{children:[t,": ",a]}),Object(j.jsx)("button",{className:"buttonDelete",onClick:function(){return i(e)},children:"Delete"})]})},O=t(5),w=t(44),y=Object(O.b)("contacts/add",(function(n,e){return{payload:{id:Object(w.a)(),name:n,number:e}}})),v=Object(O.b)("contacts/delete"),k=Object(O.b)("contacts/changeFilter"),C=Object(p.b)((function(n){var e=n.contacts,t=e.filter,a=e.item;console.log(a);var i=t.toLowerCase(),r=null===a||void 0===a?void 0:a.filter((function(n){return n.name.toLowerCase().includes(i)}));return i?{contacts:r}:{contacts:n.contacts.item}}),(function(n){return{onDeleteContact:function(e){return n(v(e))}}}))((function(n){var e=n.contacts,t=n.onDeleteContact;return Object(j.jsx)(f,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,a=n.name,i=n.number;return Object(j.jsx)(g,{name:a,number:i,id:e,onDeleteContact:t},e)}))})})),S=m.b.label(r||(r=Object(x.a)(["\n\n    padding: 15px;\n    display: flex;\n    font-size: 20px;\n    font-weight: 600;\n    flex-direction: column;\n    align-items: flex-start;\n    flex-grow: 1;\n    \n\n    .input {\n        display:block;\n        font-size: 20px;\n        width: 200px;\n        width:450;\n        margin:10px 0;\n        background-color: #fafafa;\n        border:0;\n        border-radius: 5px;\n        box-shadow:0 0 4px rgba(0,0,0,0.3);\n        transition: .3s box-shadow;\n    }\n\n    .input:hover {\n        box-shadow:0 0 4px rgba(0,0,0,0.5);\n    }\n"]))),z=Object(p.b)((function(n){return{filter:n.contacts.filter}}),(function(n){return{onChange:function(e){return n(k(e.target.value))}}}))((function(n){var e=n.filter,t=n.onChange;return Object(j.jsxs)(S,{children:["Find contact by name",Object(j.jsx)("input",{className:"input",type:"text",value:e,onChange:t})]})})),D=t(15),N=m.b.form(o||(o=Object(x.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n\n    label {\n        padding: 15px;\n        display: flex;\n        font-size: 20px;\n        font-weight: 600;\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n\n    .input {\n        display:block;\n        font-size: 20px;\n        width: 200px;\n        width:450;\n        margin:10px 0;\n        background-color: #fafafa;\n        border:0;\n        border-radius: 5px;\n        box-shadow:0 0 4px rgba(0,0,0,0.3);\n        transition: .3s box-shadow;\n    }\n\n    .input:hover {\n        box-shadow:0 0 4px rgba(0,0,0,0.5);\n    }\n\n    .buttonSubmit {\n        text-decoration: none;\n        display: inline-block;\n        width: 175px;\n        height: 45px;\n        line-height: 45px;\n        border-radius: 45px;\n        margin: 10px 20px;\n        font-family: 'Montserrat', sans-serif;\n        font-size: 11px;\n        text-transform: uppercase;\n        text-align: center;\n        letter-spacing: 3px;\n        font-weight: 600;\n        color: #524f4e;\n        background: white;\n        box-shadow: 0 8px 15px rgba(0, 0, 0, .1);\n        transition: .3s;\n    }\n    .buttonSubmit:hover {\n        background: #2EE59D;\n        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);\n        color: white;\n        transform: translateY(-7px);\n    }\n"]))),A=Object(p.b)(null,(function(n){return{onSubmit:function(e,t){return n(y(e,t))}}}))((function(n){var e=n.onSubmit,t=Object(l.useState)(""),a=Object(D.a)(t,2),i=a[0],r=a[1],o=Object(l.useState)(""),c=Object(D.a)(o,2),s=c[0],b=c[1],d=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":b(a);break;default:alert("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438")}};return Object(j.jsxs)(N,{onSubmit:function(n){n.preventDefault(),e(i,s),r(""),b("")},children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{className:"input",onChange:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:i,required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{className:"input",onChange:d,value:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:"buttonSubmit",children:"Add contact"})]})})),B=m.b.section(c||(c=Object(x.a)(["\n    padding: 20px;\n    background-color: #23e5ecf0;\n    width: 800px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n\n    .contactsWrapper {\n        display:flex;\n        align-content: stretch\n    }\n\n    .title {\n        text-align: center;\n        align-items: flex-start;\n    }\n"]))),F=function(n){var e=n.title,t=n.children;return Object(j.jsxs)(B,{children:[Object(j.jsx)("h1",{className:"title",children:e}),t]})},E=Object(m.a)(s||(s=Object(x.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.list {\n  list-style: none;\n}\n\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"])));function J(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(E,{}),Object(j.jsx)(F,{title:"Phonebook",children:Object(j.jsx)(A,{})}),Object(j.jsx)(F,{title:"Contacts",children:Object(j.jsxs)("div",{className:"contactsWrapper",children:[Object(j.jsx)(z,{}),Object(j.jsx)(C,{})]})})]})}var M,Z=t(21),q=t(2),H=t(14),I=t(22),L=t.n(I),R=t(9),T=t(25),U=t(23),W=Object(O.c)(U.contactsBase,(M={},Object(R.a)(M,y,(function(n,e){return function(n,e){var t=n.some((function(n){return n.name===e.name}));return t&&alert("".concat(e.name," is already in contacts")),t?n:[].concat(Object(T.a)(n),[e])}(n,e.payload)})),Object(R.a)(M,v,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),M)),Y=Object(O.c)("",Object(R.a)({},k,(function(n,e){return e.payload}))),K=t(24),P={key:"contacts",storage:t.n(K).a,blacklist:["filter"]},$=Object(q.b)({item:W,filter:Y}),G=Object(q.b)({contacts:$}),Q=Object(H.a)(P,G),V=Object(O.a)({reducer:Q,middleware:[L.a],devTools:!1}),X=Object(H.b)(V);u.a.render(Object(j.jsx)(b.a.StrictMode,{children:Object(j.jsx)(p.a,{store:V,children:Object(j.jsx)(Z.a,{loading:null,persistor:X,children:Object(j.jsx)(J,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b621de82.chunk.js.map