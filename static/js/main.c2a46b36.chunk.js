(this["webpackJsonpreact-redux-blog-post-demo"]=this["webpackJsonpreact-redux-blog-post-demo"]||[]).push([[0],{30:function(e,t,r){e.exports=r(58)},58:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),s=r.n(c),o=r(5),u=r(3),i=r(28),p=r(8),l=r(9),d=r(12),f=r(10),b=r(13),O=r(6),h=r.n(O),m=r(11),y=r(29),j=r.n(y).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),v=!1,E={},g=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!E[e]){t.next=2;break}return t.abrupt("return");case 2:return E[e]=!0,t.next=5,j.get("/users/".concat(e));case 5:n=t.sent,r({type:"FETCH_USER",payload:n.data}),delete E[e];case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser(this.props.userId)}},{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),t}(a.a.Component),w=Object(o.b)((function(e,t){return{user:e.users[t.userId]}}),{fetchUser:g})(k),P=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{key:e.id,className:"item"},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(w,{userId:e.userId}))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.a.Component),x=Object(o.b)((function(e){return{posts:e.posts,users:e.users}}),{fetchPosts:function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=2;break}return e.abrupt("return");case 2:return v=!0,e.next=5,j.get("/posts");case 5:r=e.sent,t({type:"FETCH_POSTS",payload:r.data}),v=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchUser:g})(P),S=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(x,null))},C=r(17);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(C.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=Object(u.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_POSTS"===t.type?t.payload:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("FETCH_USER"===t.type){var r=t.payload.id,n=t.payload;return N({},e,Object(C.a)({},r,n))}return e}}),U=Object(u.d)(T,Object(u.a)(i.a));s.a.render(a.a.createElement(o.a,{store:U},a.a.createElement(S,null)),document.querySelector("#root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c2a46b36.chunk.js.map