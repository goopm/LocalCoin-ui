(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{4977:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),l=n.n(i),o=n(580),s=n(1),c=n.n(s),u=n(37),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var p={tag:"bitshares.fdn",limit:20},h={textAlign:"right"},f={textAlign:"left"},E={height:"2rem"},y={padding:"0.5rem 1rem"},b={padding:"0.85rem 1rem"},v=d({},f,y),w=d({},h,y),g=d({},f,b),k=d({},h,b),D=d({},v,{width:"180px"}),O=function(){return r.a.createElement("p",null,r.a.createElement(c.a,{content:"news.errors.fetch"}))},j=function(e){var t=e.data,n=e.url,a=e.isLink,i=void 0!==a&&a;return r.a.createElement("a",{href:"https://steemit.com"+n,rel:"noreferrer noopener",target:"_blank",style:{display:"block"},className:i?"":"primary-text"},t)},N=function(e){var t=e.data,n=e.width;return r.a.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:k},r.a.createElement(c.a,{component:"span",content:"account.votes.line"})),r.a.createElement("th",{style:g},r.a.createElement(c.a,{component:"span",content:"explorer.block.date"})),r.a.createElement("th",{style:g},r.a.createElement(c.a,{component:"span",content:"news.subject"})),r.a.createElement("th",{style:g},r.a.createElement(c.a,{component:"span",content:"news.author"})))),r.a.createElement("tbody",null,t.map(function(e,t){var a=e.parentAuthor?e.parentAuthor:e.author,i=l.a.localize(new Date(e.created)),o=6*e.title.length>n-450?e.title.slice(0,Math.floor(n-450)/6)+"...":e.title;return r.a.createElement("tr",{key:""+e.title.slice(0,10)+t},r.a.createElement("td",{style:w},r.a.createElement(j,{data:t+1,url:e.url})),r.a.createElement("td",{style:D},r.a.createElement(j,{data:i,url:e.url})),r.a.createElement("td",{style:v},r.a.createElement(j,{data:o,url:e.url,isLink:!0})),r.a.createElement("td",{style:v},r.a.createElement(j,{data:a,url:e.url})))})),r.a.createElement("thead",null,r.a.createElement("tr",{style:E},r.a.createElement("th",{style:w}),r.a.createElement("th",{style:v}),r.a.createElement("th",{style:v}),r.a.createElement("th",{style:v}))))},_=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isLoading:!0,isWrong:!1,discussions:[],width:1200},n.updateDimensions=n.updateDimensions.bind(n),n.orderDiscussions=n.orderDiscussions.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"updateDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"orderDiscussions",value:function(e){var t=e.sort(function(e,t){return new Date(t.created)-new Date(e.created)});this.setState({discussions:t,isLoading:!1})}},{key:"componentDidMount",value:function(){var e=this;this.updateDimensions(),window.addEventListener("resize",this.updateDimensions),o.api.getDiscussionsByBlog(p).then(function(t){e.orderDiscussions(t)}).catch(function(){e.setState({isLoading:!1,isWrong:!0})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isWrong,a=e.discussions,i=e.width;return r.a.createElement("div",{className:"grid-block page-layout"},r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"account-tabs"},r.a.createElement("div",{className:"tab-content"},r.a.createElement("div",{className:"hide-selector"},r.a.createElement("div",{className:"inline-block"},r.a.createElement(c.a,{content:"news.news"}))),r.a.createElement("div",{className:"grid-block vertical"},n&&r.a.createElement(O,null),t?r.a.createElement(u.a,null):null,!n&&!t&&r.a.createElement(N,{width:i,data:a}))))))}}]),t}();t.default=_},916:function(e,t){}}]);