(window.webpackJsonp=window.webpackJsonp||[]).push([[26,43],{324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a(12),i=a(7),c=a(1),s=a.n(c),u=a(29),p=a(334),d=(a(10),a(32)),m=a(175),h=a.n(m),f=a(9),y=a(110),v=a(148),g=a(41),b=a(2),_=a.n(b),E=a(23),w=a.n(E),k=a(39),C=a(3),O=a.n(C),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var S=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a.getInitialState(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),N(t,[{key:"getInitialState",value:function(){return{open:!1}}},{key:"show",value:function(){var e=this;this.setState({open:!0},function(){w.a.publish(e.props.id,"open")})}},{key:"onClose",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({open:!1},function(){t&&w.a.publish(e.props.id,"close")})}},{key:"render",value:function(){return this.state.open?r.a.createElement(k.a,{id:this.props.id,overlay:!0,onClose:this.onClose.bind(this,!1)},r.a.createElement("div",{className:"grid-block vertical no-overflow"},r.a.createElement("div",{className:"content-block registration-types",style:{textAlign:"center",textTransform:"none"}},r.a.createElement(i.b,{className:"registration-type",to:"/create-account/password"},r.a.createElement("div",{className:"registration-type__heading"},_.a.translate("account.create_account_type.cloud_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"50px","enable-background":"new 0 0 548.176 548.176",viewBox:"0 0 548.176 548.176",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m524.183 297.065c-15.985-19.893-36.265-32.691-60.815-38.399 7.81-11.993 11.704-25.126 11.704-39.399 0-20.177-7.139-37.401-21.409-51.678-14.273-14.272-31.498-21.411-51.675-21.411-18.271 0-34.071 5.901-47.39 17.703-11.225-27.028-29.075-48.917-53.529-65.667-24.46-16.746-51.728-25.125-81.802-25.125-40.349 0-74.802 14.279-103.353 42.83-28.553 28.544-42.825 62.999-42.825 103.351 0 2.856.191 6.945.571 12.275-22.078 10.279-39.876 25.838-53.389 46.686-13.512 20.836-20.271 43.824-20.271 68.949 0 35.211 12.517 65.333 37.544 90.359 25.028 25.033 55.15 37.548 90.362 37.548h310.636c30.259 0 56.096-10.715 77.512-32.121 21.413-21.412 32.121-47.249 32.121-77.515-.003-25.694-8.001-48.499-23.992-68.386z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},_.a.translate("account.create_account_type.cloud_wallet.feature_1_1"),r.a.createElement("span",{className:"red"},_.a.translate("account.create_account_type.cloud_wallet.feature_1_2"))),r.a.createElement("li",null,_.a.translate("account.create_account_type.cloud_wallet.feature_2")),r.a.createElement("li",null,_.a.translate("account.create_account_type.cloud_wallet.feature_3")),r.a.createElement("li",null,_.a.translate("account.create_account_type.cloud_wallet.feature_4")))),r.a.createElement(i.b,{className:"registration-type",to:"/create-account/wallet"},r.a.createElement("div",{className:"registration-type__heading"},_.a.translate("account.create_account_type.local_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"37px",viewBox:"0 0 414.8 312.8",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m360.4 0h-312.8a47.6 47.6 0 0 0 -47.6 47.6v231.2a34 34 0 0 0 34 34h312.8a34 34 0 0 0 34-34v-91.46h-64.94a41.53 41.53 0 0 1 -41.41-41.41v-18.57a41.53 41.53 0 0 1 41.41-41.36h64.94v-24.8a27.2 27.2 0 0 0 -27.2-27.2h-312.8a6.8 6.8 0 1 1 0-13.6h312.8a40.8 40.8 0 0 1 40.8 40.8v209.1a47.71 47.71 0 0 0 20.4-39.1v-176.8a54.41 54.41 0 0 0 -54.4-54.4z"}),r.a.createElement("path",{d:"m378.19 134.34a5.35 5.35 0 0 0 -4-1.69h-1.89v-11.66a26.56 26.56 0 0 0 -7.84-19.17 25.69 25.69 0 0 0 -37.3.1 26.56 26.56 0 0 0 -7.74 19.21v11.66h-1.89a5.37 5.37 0 0 0 -4 1.71 5.7 5.7 0 0 0 -1.64 4.13l.09 35a5.72 5.72 0 0 0 1.67 4.13 5.39 5.39 0 0 0 4 1.69l56.66-.15a5.43 5.43 0 0 0 4-1.71 5.69 5.69 0 0 0 1.64-4.14l-.09-35a5.69 5.69 0 0 0 -1.67-4.11zm-17.19-1.66-30.22.08v-11.66a15.17 15.17 0 0 1 4.4-11 14.79 14.79 0 0 1 21.36-.06 15.2 15.2 0 0 1 4.46 11z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},_.a.translate("account.create_account_type.local_wallet.feature_1_1"),r.a.createElement("span",{className:"green"},_.a.translate("account.create_account_type.local_wallet.feature_1_2"))),r.a.createElement("li",null,_.a.translate("account.create_account_type.local_wallet.feature_2")),r.a.createElement("li",null,_.a.translate("account.create_account_type.local_wallet.feature_3"))))))):null}}]),t}();S.contextTypes={router:O.a.object};var j=S,x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var A=function(e){var t=e.flag,a=e.width,n=void 0===a?50:a,o=e.height,l=void 0===o?50:o;return r.a.createElement("img",{height:l,width:n,src:"/language-dropdown/"+t.toUpperCase()+".png"})},P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.updateStep=function(e){a.setState({step:e})},a.state={step:1,locales:f.a.getState().defaults.locale,currentLocale:f.a.getState().settings.get("locale")},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),x(t,[{key:"componentDidUpdate",value:function(){var e=l.a.getMyAccounts(),t=r.a.Children.count(this.props.children);this.props.router&&Array.isArray(e)&&0!==e.length&&0===t&&this.props.router.push("/account/"+this.props.currentAccount)}},{key:"componentWillMount",value:function(){var e=this;Object(p.a)(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,t=a(2),n=r.a.Children.count(this.props.children),o=this,l=r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{updateStep:o.updateStep,currentAccount:o.props.currentAccount})}),c=r.a.createElement(h.a,null,r.a.createElement(h.a.Button,{title:"",style:{width:"64px"}},r.a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button arrow-down"},r.a.createElement(A,{flag:this.state.currentLocale}))),r.a.createElement(h.a.Content,null,r.a.createElement("ul",{className:"no-first-element-top-border"},this.state.locales.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(a){a.preventDefault(),v.a.switchLocale(t),e.setState({currentLocale:t})}},r.a.createElement("div",{className:"table-cell"},r.a.createElement(A,{width:"20",height:"20",flag:t})),r.a.createElement("div",{className:"table-cell",style:{paddingLeft:10}},r.a.createElement(s.a,{content:"languages."+t}))))}))));return r.a.createElement("div",{className:"grid-block align-center"},r.a.createElement("div",{className:"grid-block shrink vertical"},r.a.createElement("div",{className:"grid-content shrink text-center account-creation"},r.a.createElement("div",null,r.a.createElement("img",{src:g.logoLight,height:"50px",width:"50px"})),0==n?null:r.a.createElement("div",null,r.a.createElement(s.a,{content:2==this.state.step?"header.backup_your_brainKey":"header.create_account",component:"h4"})),1==n?null:r.a.createElement("div",null,r.a.createElement(s.a,{content:"account.intro_text_title",component:"h4",wallet_name:Object(y.f)()}),r.a.createElement(s.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),r.a.createElement("div",{className:"shrink text-center"},r.a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},r.a.createElement("div",{className:"grp-menu-item overflow-visible",style:{margin:"0 auto"},"data-intro":t.translate("walkthrough.language_flag")},c)))),n?null:r.a.createElement("div",{className:"grid-block account-login-options"},r.a.createElement(i.b,{id:"account_login_button",to:"/create-account/wallet",className:"button primary","data-intro":t.translate("walkthrough.create_cloud_wallet"),onClick:function(t){t.preventDefault(),e.refs.registration_modal.show()}},_.a.translate("header.create_account")),r.a.createElement("span",{id:"account_login_button2",className:"button primary outline",style:{color:"#00195b"},onClick:function(){d.a.unlock.defer()}},_.a.translate("header.unlock_short"))),n?null:r.a.createElement("div",{className:"additional-account-options"},r.a.createElement("h5",{style:{textAlign:"center"}},r.a.createElement(u.a,{string:"account.optional.formatter",keys:[{type:"link",value:"/settings/restore",translation:"account.optional.restore_link",dataIntro:t.translate("walkthrough.restore_account"),arg:"restore_link"},{type:"link",value:"/create-account/password",translation:"account.optional.restore_form",dataIntro:t.translate("walkthrough.create_local_wallet"),arg:"restore_form"}]}))),l)),r.a.createElement(j,{id:"registration-modal",ref:"registration_modal"}))}}]),t}();t.default=Object(o.connect)(P,{listenTo:function(){return[l.a]},getProps:function(){return{currentAccount:l.a.getState().currentAccount||l.a.getState().passwordAccount}}})},5227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a(48),i=a(324),c=a(12),s=a(66),u=a(19),p=a(5),d=a(9),m=a(28),h=a(7),f=a(4),y=a(1),v=a.n(y),g=a(11),b=a.n(g),_=a(2),E=a.n(_),w=a(10),k=a(8),C=a(17),O=a(21),N=a(14),S=a(31),j=a(35),x=a(151),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var H=function(e){function t(){L(this,t);var e=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e.state={imgError:!1},e}return T(t,r.a.Component),M(t,[{key:"_checkStats",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{close:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{close:{}};return e.volumeBase!==t.volumeBase||!p.a.are_equal_shallow(e.close&&e.close.base,t.close&&t.close.base)||!p.a.are_equal_shallow(e.close&&e.close.quote,t.close&&t.close.quote)}},{key:"shouldComponentUpdate",value:function(e,t){return this._checkStats(e.marketStats,this.props.marketStats)||e.base.get("id")!==this.props.base.get("id")||e.quote.get("id")!==this.props.quote.get("id")||e.visible!==this.props.visible||t.imgError!==this.state.imgError||e.starredMarkets.size!==this.props.starredMarkets}},{key:"componentWillMount",value:function(){this._setInterval()}},{key:"componentWillUnmount",value:function(){this._clearInterval()}},{key:"componentWillReceiveProps",value:function(e){e.base.get("id")===this.props.base.get("id")&&e.quote.get("id")===this.props.quote.get("id")||(this._clearInterval(),this._setInterval(e))}},{key:"_setInterval",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props,t=e.base,a=e.quote;S.a.getMarketStats(t,a),this.statsChecked=new Date,this.statsInterval=setInterval(S.a.getMarketStats.bind(this,t,a),35e3)}},{key:"_clearInterval",value:function(){clearInterval(this.statsInterval)}},{key:"_onError",value:function(e){this.state.imgError||(this.refs[e.toLowerCase()].src="asset-symbols/bts.png",this.setState({imgError:!0}))}},{key:"_toggleFavoriteMarket",value:function(e,t){var a=e+"_"+t;this.props.starredMarkets.has(a)?w.a.removeStarMarket(e,t):w.a.addStarMarket(e,t)}},{key:"findCoin",value:function(e){for(var t in x.coins){var a=x.coins[t];if(a.name===e)return a.image}return this.getDefault()}},{key:"getDefault",value:function(){for(var e in x.coins){var t=x.coins[e];if("bts"===t.name)return t.image}return null}},{key:"render",value:function(){var e=this.props,t=e.base,a=e.quote,n=e.marketStats,o=e.isHidden,l=e.inverted,i=e.visible,c=e.handleHide,s=e.handleFlip;var u=function(e){var t=e.get("symbol");if("OPEN.BTC"===t||"GDEX.BTC"===t)return t;var a=e.get("symbol").split(".");return 2===a.length?a[1]:a[0]}(a),d=n?parseFloat(n.change)>0?"change-up":parseFloat(n.change)<0?"change-down":"":"",m=a.get("symbol")+"_"+t.get("symbol"),f=this.props.starredMarkets.has(m)?"gold-star":"grey-star";"usd"===u.toLowerCase()||u.toLowerCase();return r.a.createElement("tr",{style:{display:i?"":"none"}},r.a.createElement("td",null,r.a.createElement("div",{onClick:this._toggleFavoriteMarket.bind(this,a.get("symbol"),t.get("symbol"))},r.a.createElement(C.a,{style:{cursor:"pointer"},className:f,name:"fi-star",title:"icons.fi_star.market"}))),r.a.createElement("td",{style:{textAlign:"left"}},r.a.createElement(h.b,{to:"/market/"+this.props.quote.get("symbol")+"_"+this.props.base.get("symbol")},r.a.createElement("img",{ref:u.toLowerCase(),className:"column-hide-small",onError:this._onError.bind(this,u),style:{maxWidth:20,marginRight:10},src:this.findCoin(u.toLowerCase())}),r.a.createElement(O.a,{dataPlace:"top",name:a.get("symbol")})," ",":"," ",r.a.createElement(O.a,{dataPlace:"top",name:t.get("symbol")}))),r.a.createElement("td",{style:{textAlign:"right"}},n&&n.price?p.a.price_text(n.price.toReal(),a,t):null),r.a.createElement("td",{style:{textAlign:"right"},className:b()(d)},n?n.change:null,"%"),r.a.createElement("td",{className:"column-hide-small",style:{textAlign:"right"}},n?p.a.format_volume(n.volumeBase,t.get("precision")):null),null===l?null:r.a.createElement("td",{className:"column-hide-small"},r.a.createElement("a",{onClick:s},r.a.createElement(C.a,{name:"shuffle",title:"icons.shuffle"}))),r.a.createElement("td",null,r.a.createElement("a",{style:{marginRight:0},className:o?"action-plus":"order-cancel",onClick:c},r.a.createElement(C.a,{name:o?"plus-circle":"cross-circle",title:o?"icons.plus_circle.show_market":"icons.cross_circle.hide_market",className:"icon-14px"}))))}}]),t}();H.propTypes={quote:k.a.ChainAsset.isRequired,base:k.a.ChainAsset.isRequired},H.defaultProps={tempComponent:"tr"},H=Object(N.a)(H),H=Object(o.connect)(H,{listenTo:function(){return[m.a]},getProps:function(e){return{marketStats:m.a.getState().allMarketStats.get(e.marketId),starredMarkets:d.a.getState().starredMarkets}}});var q=function(e){function t(){L(this,t);var e=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={filter:"",showFlip:!0,showHidden:!1,markets:[]},e.update=e.update.bind(e),e}return T(t,r.a.Component),M(t,[{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillMount",value:function(){f.b.subscribe(this.update),this.update()}},{key:"componentWillUnmount",value:function(){f.b.unsubscribe(this.update)}},{key:"update",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props,t=!e.forceDirection||e.handleFlip,a=e.markets.map(function(a){var n=P(a,2),r=n[0],o=n[1];if(e.forceDirection){var l=r+"_"+o;return{key:l,inverted:!t&&null,marketId:l,quote:r,base:o,isHidden:e.hiddenMarkets.includes(l)}}var i=j.a.getMarketName(f.b.getAsset(r),f.b.getAsset(o)),c=i.marketName,s=i.first,u=i.second;if(!s||!u)return null;var p=e.marketDirections.get(c);if(p){var d=[u,s];s=d[0],u=d[1]}return{key:c,inverted:p,marketId:s.get("symbol")+"_"+u.get("symbol"),quote:s.get("symbol"),base:u.get("symbol"),isHidden:e.hiddenMarkets.includes(c)}}).filter(function(e){return null!==e});this.setState({showFlip:t,markets:a})}},{key:"_toggleShowHidden",value:function(e){this.state.showHidden!==e&&this.setState({showHidden:e})}},{key:"_handleFilterInput",value:function(e){e.preventDefault(),this.setState({filter:e.target.value.toUpperCase()})}},{key:"_handleHide",value:function(e,t){if(this.props.handleHide)return this.props.handleHide(e,t);w.a.hideMarket(e.key,t)}},{key:"_handleFlip",value:function(e,t){if(this.props.handleFlip)return this.props.handleFlip(e,t);var a,n,r;w.a.changeMarketDirection((a={},n=e.key,r=t,n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a))}},{key:"_renderRadioButton",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.a.createElement("label",{className:"radio"},r.a.createElement("input",{className:"radio__input",type:"radio",name:"dashboard-filters",onChange:t,checked:a}),r.a.createElement("span",{className:"radio__styled"}),r.a.createElement("span",{className:"radio__label"},e))}},{key:"render",value:function(){var e=this,t=this.state,a=t.markets,n=t.showFlip,o=t.showHidden,l=t.filter;this.loaded=!0;var i=0;return a=a.map(function(t){var a=!0;if(t.isHidden!==e.state.showHidden)a=!1;else if(l){var n=f.b.getAsset(t.quote),o=f.b.getAsset(t.base),c=p.a.replaceName(n).isBitAsset,s=p.a.replaceName(o).isBitAsset,u=t.quote,d=t.base;if(c&&(u="bit"+u),s&&(d="bit"+d),l.includes(":")){var m=l.split(":")[0].trim(),h=l.split(":")[1].trim();a=u.toLowerCase().includes(String(m).toLowerCase())&&d.toLowerCase().includes(String(h).toLowerCase())}else a=u.toLowerCase().includes(String(l).toLowerCase())||d.toLowerCase().includes(String(l).toLowerCase())}return a&&++i,r.a.createElement(H,A({},t,{visible:a,handleHide:e._handleHide.bind(e,t,!t.isHidden),handleFlip:e._handleFlip.bind(e,t,!t.inverted)}))}),r.a.createElement("div",null,r.a.createElement("div",{className:"dashboard__actions"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3 col-lg-6"},r.a.createElement("input",{type:"text",placeholder:"Filter",onChange:this._handleFilterInput.bind(this)})),r.a.createElement("div",{className:"col-xl-9 col-lg-12"},r.a.createElement("div",{className:"dashboard__actions__filters"},this._renderRadioButton(E.a.translate("account.hide_hidden"),this._toggleShowHidden.bind(this,!1),!o),this._renderRadioButton(E.a.translate("account.show_hidden"),this._toggleShowHidden.bind(this,!0),o)))))),r.a.createElement("div",{className:"dashboard__adaptive"},r.a.createElement("table",{className:"dashboard__table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",width:"75px"}}),r.a.createElement("th",{style:{textAlign:"left"}},r.a.createElement(v.a,{component:"span",content:"account.asset"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(v.a,{content:"exchange.price"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(v.a,{content:"account.hour_24_short"})),r.a.createElement("th",{className:"column-hide-small",style:{textAlign:"right"}},r.a.createElement(v.a,{content:"exchange.volume"})),n?r.a.createElement("th",{className:"column-hide-small"},r.a.createElement(v.a,{content:"exchange.flip"})):null,r.a.createElement("th",null,r.a.createElement(v.a,{content:o?"account.perm.show":"exchange.hide"})))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-empty",style:{display:i?"none":""}},r.a.createElement("td",{colSpan:n?6:5},r.a.createElement(v.a,{content:"dashboard.table_empty"}))),a))))}}]),t}(),D=Object(o.connect)(q,{listenTo:function(){return[d.a]},getProps:function(){var e=d.a.getState();return{marketDirections:e.marketDirections,hiddenMarkets:e.hiddenMarkets}}}),R=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function U(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var z=function(e){function t(){return F(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return U(t,r.a.Component),B(t,[{key:"render",value:function(){var e=this.props.starredMarkets,t=[];if(e.size){var a=!0,n=!1,o=void 0;try{for(var l,i=e.values()[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value;t.push([c.quote,c.base])}}catch(e){n=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw o}}}return r.a.createElement(D,{markets:t,forceDirection:!0})}}]),t}();z=Object(o.connect)(z,{listenTo:function(){return[d.a]},getProps:function(){return{starredMarkets:d.a.getState().starredMarkets}}});var V=function(e){function t(){F(this,t);var e,a,n,r=W(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),o=u.Apis.instance().chain_id;return o&&(o=o.substr(0,8)),r.state={chainID:o,markets:[]},r.marketsByChain=(e={},a=r.state.chainID,n=[["USD","LLC"],["USD","CNY"],["LLC","CNY"],["BTC","LLC"]],a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e),r.update=r.update.bind(r),r}return U(t,r.a.Component),B(t,[{key:"shouldComponentUpdate",value:function(e){return!p.a.are_equal_shallow(e,this.props)}},{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"update",value:function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props).lowVolumeMarkets,t=this.marketsByChain[this.state.chainID]||this.marketsByChain["4018d784"];t=t.filter(function(t){var a=R(t,2),n=a[0],r=a[1];return!(e.get(n+"_"+r)||e.get(r+"_"+n))}),this.setState({markets:t})}},{key:"render",value:function(){return r.a.createElement(D,{markets:this.state.markets})}}]),t}();V=Object(o.connect)(V,{listenTo:function(){return[m.a]},getProps:function(){return{lowVolumeMarkets:m.a.getState().lowVolumeMarkets}}});!function(e){function t(){return F(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}U(t,r.a.Component),B(t,[{key:"render",value:function(){return r.a.createElement(D,{markets:[]})}}])}();var J=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),J(t,[{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,a=e.myHiddenAccounts,n=e.accountsReady,o=e.passwordAccount;if(!n)return r.a.createElement(l.a,null);if(!(t.size+a.size+(o?1:0)))return r.a.createElement(i.default,null);var c=[{title:"dashboard.starred_markets",content:r.a.createElement(z,null)},{title:"dashboard.featured_markets",content:r.a.createElement(V,null)}];return r.a.createElement("div",{className:"content dashboard-page"},r.a.createElement(s.a,{items:c,inner:!0,dashboardTabsClass:"voting"}))}}]),t}();t.default=Object(o.connect)(Y,{listenTo:function(){return[c.a]},getProps:function(){var e=c.a.getState(),t=e.myActiveAccounts,a=e.myHiddenAccounts,n=e.passwordAccount,r=e.accountsLoaded,o=e.refsLoaded;return{myActiveAccounts:t,myHiddenAccounts:a,passwordAccount:n,accountsReady:r&&o}}})}}]);