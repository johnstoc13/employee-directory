(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a.n(r),s=a(9),o=a.n(s),i=(a(60),a(136)),l=a(14),d=a(11),j=a(28),h=a(19),u=a(48),b=a(47),f=a(124),m=a(129),p=(a(61),a(128));var O=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{className:"Header-heading header-style",container:!0,justify:"center",children:[Object(n.jsx)(p.a,{className:"far fa-id-badge fa-5x",color:"secondary"}),Object(n.jsx)(m.a,{className:"pl-3",variant:"h2",align:"center",color:"secondary",children:"Employee Directory"})]})})},y=a(131),g=a(135),x=a(134),v=a(130),C=a(132),N=a(133),S=a(138);a(65);var k=function(e){return Object(n.jsx)(v.a,{className:"table-style",children:Object(n.jsxs)(y.a,{stickyHeader:!0,"aria-label":"Employee Table",children:[Object(n.jsx)(C.a,{children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(x.a,{align:"center",children:"IMAGE"}),Object(n.jsxs)(x.a,{align:"center",children:["FIRST NAME",Object(n.jsx)(S.a,{active:"firstName"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("firstName",e.order)}})]}),Object(n.jsxs)(x.a,{align:"center",children:["LAST NAME",Object(n.jsx)(S.a,{active:"lastName"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("lastName",e.order)}})]}),Object(n.jsxs)(x.a,{align:"center",children:["EMAIL",Object(n.jsx)(S.a,{active:"email"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("email",e.order)}})]}),Object(n.jsx)(x.a,{align:"center",children:"PHONE NUMBER"})]})}),Object(n.jsx)(g.a,{children:e.employees.map((function(e){return Object(n.jsxs)(N.a,{hover:!0,children:[Object(n.jsx)(x.a,{align:"center",children:Object(n.jsx)("img",{alt:"".concat(e.firstName," ").concat(e.lastName),src:e.image})}),Object(n.jsx)(x.a,{align:"center",children:e.firstName}),Object(n.jsx)(x.a,{align:"center",children:e.lastName}),Object(n.jsx)(x.a,{align:"center",children:e.email}),Object(n.jsx)(x.a,{align:"center",children:e.phone})]},e.id)}))})]})})},E=a(46),w=a.n(E),B=function(){return w.a.get("https://randomuser.me/api/?results=200&nat=us")},L=(a(83),a(137));var I=function(e){return Object(n.jsx)(L.a,{color:"secondary",variant:"outlined",label:"Search Here",type:"search",name:"search",onChange:e.handleInputChange})},M=function(e,t){return t.filter((function(t){return t.firstName.toLowerCase().includes(e.toLowerCase())||t.lastName.toLowerCase().includes(e.toLowerCase())||t.phone.toLowerCase().includes(e.toLowerCase())}))},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){var r=a[e].toUpperCase(),c=n[e].toUpperCase(),s=0;return r>c?s=1:r<c&&(s=-1),"desc"===t?-1*s:s}};a(84);var F=function(){return Object(n.jsxs)("div",{class:"navbar justify-content-center",children:[Object(n.jsx)("span",{class:"navbar-brand footer-font text-color",children:"Copyright \xa92020 | Chase Johnston"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("a",{class:"fab fa-github fa-lg icon-color pr-3",href:"https://github.com/johnstoc13",target:"_blank"}),Object(n.jsx)("a",{class:"fab fa-linkedin fa-lg icon-color pr-3",href:"https://www.linkedin.com/in/chase-johnston8",target:"_blank"}),Object(n.jsx)("a",{class:"fas fa-envelope fa-lg icon-color",href:"mailto:chasej@live.com",target:"_blank"})]})]})},T=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],loadedEmployees:[],search:"",orderBy:"",order:"asc"},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(d.a)({},n,a),(function(){if(e.state.search){var t=M(e.state.search,e.state.loadedEmployees);e.setState({employees:t,orderBy:""})}else e.setState({employees:e.state.loadedEmployees,orderBy:""})}))},e.handleSort=function(t,a){var n=Object(l.a)(e.state.employees).sort(A(t,a)),r="asc"===a?"desc":"asc";e.setState({employees:n,order:r,orderBy:t})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;B().then((function(t){var a=t.data.results.map((function(e){return{id:e.id.value,image:e.picture.medium,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone}}));e.setState({employees:a,loadedEmployees:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(f.a,{className:"search-style",container:!0,justify:"center",children:Object(n.jsx)(I,{employees:this.state.employees,handleInputChange:this.handleInputChange})}),Object(n.jsx)(k,{employees:this.state.employees,handleSort:this.handleSort,orderBy:this.state.orderBy,order:this.state.order}),Object(n.jsx)(F,{})]})}}]),a}(r.Component);var H=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)(T,{})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),D()}},[[85,1,2]]]);
//# sourceMappingURL=main.692e0afa.chunk.js.map