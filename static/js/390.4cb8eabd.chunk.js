"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[390],{7390:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,a,o,i=r(2791),s=r(4165),c=r(5861),d=r(9439),u=r(168),l=r(6444),p=l.ZP.form(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  width: 100%;\n  padding: 15px;\n  border: none;\n  border-radius: 10px;\n  & label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    font-weight: 500;\n  }\n  & input {\n    font-size: 14px;\n  margin-top: 5px;\n  padding: 5px;\n  border: 1px solid gray;\n  outline: none;\n  line-height: 1.25;\n  border-radius: 5px;\n  }\n  & button {\n    max-width: 120px;\n  margin: 0 auto;\n  padding: 5px 10px;\n  border: 1px solid rgb(161, 161, 161);\n  border-radius: 5px;\n  font-size: 14px;\n  text-transform: capitalize;\n  color: black;\n  transition: color 1200ms, border-color 1200ms, background-color 1200ms, box-shadow 1200ms;\n\n  &:hover {\n    color: white;\n    background-color: rgb(161, 161, 161);\n    transition: color 600ms, border-color 600ms, background-color 600ms, box-shadow 600ms;\n  }\n  }\n"]))),x=r(5334),m=r(3329),b=function(){var n=(0,x.wY)().data,e=void 0===n?[]:n,r=(0,x.Tn)(),t=(0,d.Z)(r,1)[0],a=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(r){var a,o,i,c,u,l;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),a=r.target,o=a.name.value,i=a.number.value,!e.some((function(n){return n.name===o}))){n.next=6;break}return n.abrupt("return",alert("".concat(o," is already in contacts")));case 6:if(!e.some((function(n){return n.number===i}))){n.next=9;break}return c=e.filter((function(n){return n.number===i})),u=(0,d.Z)(c,1),l=u[0],n.abrupt("return",alert("Number ".concat(l.number," is already in phonebook. It belongs to ").concat(l.name,".")));case 9:return n.prev=9,n.next=12,t({name:o,number:i});case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(9),alert("Failed to save contact ".concat(o," in Phonebook!"));case 17:a.reset();case 18:case"end":return n.stop()}}),n,null,[[9,14]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(p,{onSubmit:a,children:[(0,m.jsxs)("label",{children:["Name",(0,m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:["Number",(0,m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})},h=r(5048),g=r(9591),f=l.ZP.label(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 270px;\n  width: 100%;\n  font-size: 16px;\n"]))),Z=l.ZP.input(o||(o=(0,u.Z)(["\n  font-size: 14px;\n  margin-top: 5px;\n  padding: 5px;\n  border: 1px solid gray;\n  outline: none;\n  line-height: 1.25;\n  border-radius: 5px;\n"]))),j=function(){var n=(0,h.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(f,{children:["Find contacts by name",(0,m.jsx)(Z,{type:"text",onChange:function(e){var r=e.target.value.toLowerCase();n((0,g.T)(r))}})]})})};var k=r.p+"static/media/cross.d5ab96da0d54fcdcdcde3e1f38b2c478.svg";var v,w,y,z,P,C,_,N=r.p+"static/media/phone.9553808c2045790e30e550f74b5bed2b.svg",A=l.ZP.li(v||(v=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),F=l.ZP.div(w||(w=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 3px;\n  border-bottom: 1px solid gray;\n"]))),L=l.ZP.button(y||(y=(0,u.Z)(["\n  min-width: 18px;\n  min-height: 18px;\n  margin-left: 5px;\n  border: 1px solid rgb(49, 49, 49);\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 8px;\n  transition: background-color 200ms;\n"])),k),S=l.ZP.span(z||(z=(0,u.Z)(["\n  margin-right: 10px;\n"]))),q=(0,l.ZP)(L)(P||(P=(0,u.Z)(["\n  margin-left: auto;\n  background-image: url(",");\n  background-size: 10px;\n"])),N),I=function(n){var e=n.id,r=n.name,t=n.number,a=(0,x.Nt)(),o=(0,d.Z)(a,1)[0];return(0,m.jsx)(A,{children:(0,m.jsxs)(F,{children:[(0,m.jsxs)(S,{children:[r,":"]}),(0,m.jsx)("span",{children:t}),(0,m.jsx)(q,{as:"a",href:"tel:".concat(t),children:" "}),(0,m.jsx)(L,{type:"button",onClick:function(){return o(e)}})]})})},M=r(966),T=l.ZP.ul(C||(C=(0,u.Z)(["\n  max-width: 280px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 1.25;\n  list-style-type: none;\n  padding: 0;\n"]))),Y=l.ZP.p(_||(_=(0,u.Z)(["\n  font-size: 16px;\n"]))),B=function(){var n=(0,x.wY)(),e=n.data,r=void 0===e?[]:e,t=n.isLoading,a=n.isSuccess,o=n.isError,s=n.error,c=(0,h.v9)((function(n){return n.filter})),d=(0,i.useMemo)((function(){return r.filter((function(n){return n.name.toLowerCase().includes(c)})).sort((function(n,e){return n.name.localeCompare(e.name)}))}),[r,c]),u=(0,m.jsx)(Y,{children:"No contacts in the phonebook"});return t?u=(0,m.jsx)(M.Z,{children:"Loading..."}):a?u=0!==d.length?(0,m.jsx)(T,{children:d.map((function(n){return(0,m.jsx)(I,{id:n.id,name:n.name,number:n.number},n.id)}))}):(0,m.jsx)(Y,{children:"No contacts in the phonebook"}):o&&(u=(0,m.jsx)("div",{children:s.toString()})),(0,m.jsx)(m.Fragment,{children:u})};var D=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(j,{}),(0,m.jsx)(B,{})]})}}}]);
//# sourceMappingURL=390.4cb8eabd.chunk.js.map