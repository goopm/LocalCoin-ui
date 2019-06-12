(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{5211:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),r=a(73),c=a(166),s=a(5),l=a(1),u=a.n(l),m=a(8),d=a(14),p=a(67),v=a(12),g=a(9),h=a(10),S=(a(113),a(88)),f=a(92),b=a(3),y=a.n(b),w=a(185),k=a(2),E=a.n(k),C=a(87),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function(e){function t(e){N(this,t);var a=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={olService:e.viewSettings.get("olService","gateway"),rudexService:e.viewSettings.get("rudexService","gateway"),btService:e.viewSettings.get("btService","bridge"),metaService:e.viewSettings.get("metaService","bridge"),activeService:e.viewSettings.get("activeService",0)},a}return B(t,i.a.Component),_(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.account!==this.props.account||e.servicesDown!==this.props.servicesDown||!s.a.are_equal_shallow(e.blockTradesBackedCoins,this.props.blockTradesBackedCoins)||!s.a.are_equal_shallow(e.openLedgerBackedCoins,this.props.openLedgerBackedCoins)||t.olService!==this.state.olService||t.rudexService!==this.state.rudexService||t.btService!==this.state.btService||t.metaService!==this.state.metaService||t.activeService!==this.state.activeService}},{key:"componentWillMount",value:function(){r.a.getFinalFeeAsset(this.props.account,"transfer")}},{key:"toggleOLService",value:function(e){this.setState({olService:e}),h.a.changeViewSetting({olService:e})}},{key:"toggleRuDEXService",value:function(e){this.setState({rudexService:e}),h.a.changeViewSetting({rudexService:e})}},{key:"toggleBTService",value:function(e){this.setState({btService:e}),h.a.changeViewSetting({btService:e})}},{key:"toggleMetaService",value:function(e){this.setState({metaService:e}),h.a.changeViewSetting({metaService:e})}},{key:"onSetService",value:function(e){this.setState({activeService:parseInt(e.target.value)}),h.a.changeViewSetting({activeService:parseInt(e.target.value)})}},{key:"renderServices",value:function(e,t){var a=[],n=this.props.account;return a.push({name:w.a.label,template:i.a.createElement(w.a,{account:n})}),a}},{key:"render",value:function(){var e=this,t=this.props,a=t.account,n=t.servicesDown,o=this.state.activeService,r=this.props.openLedgerBackedCoins.map(function(e){return e}).sort(function(e,t){return e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0}),c=this.props.rudexBackedCoins.map(function(e){return e}).sort(function(e,t){return e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0}),s=this.renderServices(r,c),l=s.map(function(e,t){return{key:t,label:e.name}}),m=["Winex","GDEX","OPEN","RUDEX","TRADE","BITKAPITAL",w.a.label][o],d=n.get(m);return i.a.createElement("div",{className:"content deposit-withdraw-layout"},i.a.createElement("h2",{className:"content__heading"},E.a.translate("gateway.title")),i.a.createElement("div",{className:this.props.contained?"":"grid-content",style:{paddingTop:"2rem"}},i.a.createElement("div",{className:"grid-block vertical medium-horizontal no-margin no-padding"},i.a.createElement("div",{className:"medium-6 show-for-medium"},i.a.createElement(p.a,{path:"components/DepositWithdraw",section:"deposit-short"})),i.a.createElement("div",{className:"medium-5 medium-offset-1"},i.a.createElement(p.a,{account:a.get("name"),path:"components/DepositWithdraw",section:"receive"}))),i.a.createElement("div",null,i.a.createElement("div",{className:"grid-block vertical medium-horizontal no-margin no-padding"},i.a.createElement("div",{className:"medium-6 small-order-2 medium-order-1"},i.a.createElement(u.a,{component:"label",className:"left-label",content:"gateway.service"}),i.a.createElement(C.a,{options:l,selected:{key:o,label:s[o].name},onChange:function(t){return e.onSetService.bind(e)(t)}}),d?i.a.createElement(u.a,{style:{color:"red",marginBottom:"1em",display:"block"},content:"gateway.unavailable_"+m}):null),i.a.createElement("div",{className:"medium-5 medium-offset-1 small-order-1 medium-order-2",style:{paddingBottom:20}},i.a.createElement(u.a,{component:"label",className:"left-label",content:"gateway.your_account"}),i.a.createElement("div",{className:"inline-label"},i.a.createElement(f.a,{size:{height:40,width:40},account:a.get("name"),custom_image:null}),i.a.createElement("input",{type:"text",value:a.get("name"),placeholder:null,disabled:!0,onChange:function(){},onKeyDown:function(){},tabIndex:1}))))),i.a.createElement("div",{className:"grid-content no-padding",style:{paddingTop:15}},d?null:o&&s[o]?s[o].template:s[0].template)))}}]),t}();T.propTypes={account:m.a.ChainAccount.isRequired,contained:y.a.bool},T.defaultProps={contained:!1},T=Object(d.a)(T);var x=function(e){function t(){return N(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return B(t,i.a.Component),_(t,[{key:"componentWillMount",value:function(){Object(c.c)()}},{key:"render",value:function(){return i.a.createElement(T,this.props)}}]),t}();t.default=Object(o.connect)(x,{listenTo:function(){return[v.a,g.a,S.a]},getProps:function(){return{account:v.a.getState().currentAccount,viewSettings:g.a.getState().viewSettings,openLedgerBackedCoins:S.a.getState().backedCoins.get("OPEN",[]),rudexBackedCoins:S.a.getState().backedCoins.get("RUDEX",[]),blockTradesBackedCoins:S.a.getState().backedCoins.get("TRADE",[]),winexBackedCoins:S.a.getState().backedCoins.get("WIN",[]),servicesDown:S.a.getState().down||{}}}})}}]);