(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,n){"use strict";n.r(t);n(142);var r=n(6),a=n.n(r),o=n(0),l=n.n(o),i=n(162),c=n(183),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isLoading:!0,data:"",error:""},t}a()(t,e);var n=t.prototype;return n.renderContent=function(){var e=this.state,t=e.isLoading,n=e.error,r=e.data;return t||n?null:l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})},n.renderTag=function(){var e=this.props.pageContext.node.tags;return e&&e.length?l.a.createElement("div",null,e.map(function(e){return l.a.createElement(c.a,{key:e},l.a.createElement(i.Link,{to:"/tag/"+e},e))})):null},n.render=function(){var e=this.props.pageContext.node,t=e.logo,n=e.name,r=e.color,a=e.repository;return l.a.createElement(c.e,{title:n},l.a.createElement(c.g,null,l.a.createElement(c.b,{large:!0,logo:t,name:n,color:r}),l.a.createElement("h1",null,n),this.renderTag()),l.a.createElement(c.f,{repository:a}))},t}(o.Component);t.default=u}}]);
//# sourceMappingURL=component---src-templates-project-js-f4247b7302a40203f33d.js.map