(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,47],{235:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(10),c=n(16),r=n(9),i=n(1),u=n.n(i),l=n(50),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.a.Component),p(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-404"},o.a.createElement("div",{className:"page-404-container"},o.a.createElement("div",{className:"page-404-logo"},o.a.createElement("img",{src:l.logoLight,height:"50px",width:"50px",alt:"Logo"})),o.a.createElement("div",{className:"page-404-title"},o.a.createElement(u.a,{content:"page404.page_not_found_title"})),o.a.createElement("div",{className:"page-404-subtitle"},o.a.createElement(u.a,{content:"page404."+this.props.subtitle})),o.a.createElement("div",{className:"page-404-button-back"},o.a.createElement(s.b,{to:"/"},o.a.createElement(u.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),e}();d.defaultProps={subtitle:"page_not_found_subtitle"},e.default=d=Object(c.connect)(d,{listenTo:function(){return[r.a]},getProps:function(){return{theme:r.a.getState().settings.get("themes")}}})},762:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(10),c=n(16),r=(n(117),n(23),n(14)),i=n(9),u=n(11),l=(n(21),n(177)),p=n(86),d=(n(12),n(1),n(3)),f=n.n(d),h=(n(15),n(64)),g=(n(34),n(44)),b=n(8),m=n.n(b),v=(n(103),n(39),n(19)),_=(n(26),n(88)),y=(n(354),n(4)),w=(n(6),n(2)),A=n.n(w),k=(n(50),function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}());var S=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),o=n.location.pathname,s=a.props.currentAccount;return a.state={active:o,showSubMenu:s},a._toggleSubMenu=a._toggleSubMenu.bind(a),a.unlisten=null,a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.a.Component),k(e,[{key:"componentWillMount",value:function(){var t=this;this.unlisten=this.context.router.listen(function(e,n){n||t.unlisten&&t.state.active!==e.pathname&&t.setState({active:e.pathname})})}},{key:"componentWillUnmount",value:function(){this.unlisten&&(this.unlisten(),this.unlisten=null)}},{key:"shouldComponentUpdate",value:function(t,e){return t.myActiveAccounts!==this.props.myActiveAccounts||t.currentAccount!==this.props.currentAccount||t.passwordLogin!==this.props.passwordLogin||t.locked!==this.props.locked||t.current_wallet!==this.props.current_wallet||t.lastMarket!==this.props.lastMarket||t.starredAccounts!==this.props.starredAccounts||t.currentLocale!==this.props.currentLocale||e.active!==this.state.active||e.hiddenAssets!==this.props.hiddenAssets||e.dropdownActive!==this.state.dropdownActive||e.dropdownSubmenuActive!==this.state.dropdownSubmenuActive||e.accountsListDropdownActive!==this.state.accountsListDropdownActive||t.height!==this.props.height||e.showSubMenu!==this.state.showSubMenu}},{key:"_onNavigate",value:function(t,e){e.preventDefault(),"/accounts"==t&&u.a.changeViewSetting({dashboardEntry:"accounts"}),this.context.router.push(t)}},{key:"_toggleSubMenu",value:function(t){t.preventDefault(),this.setState({showSubMenu:!this.state.showSubMenu})}},{key:"render",value:function(){var t=this,e=this.state.active,n=this.props,a=n.currentAccount,c=n.starredAccounts,i=n.passwordLogin,u=n.passwordAccount,p=r.a.getMyAccounts(),d=y.b.getAccount(a);!!d&&r.a.isMyAccount(d),this.props.contacts.has(a),v.Apis.instance()&&v.Apis.instance().chain_id;if(c.size){for(var h=p.length-1;h>=0;h--)c.has(p[h])||p.splice(h,1);c.forEach(function(t){-1===p.indexOf(t.name)&&p.push(t.name)})}r.a.getMyAccounts().length;var g=function(t){var e=t.title,n=t.link,a=t.subLink,c=t.noBorder,r=t.isActive;a=!!a;var i=e;"string"==typeof i&&i.indexOf(".")>0&&(i=f.a.translate(i));var u=a?"sidebar__menu__sub__item":"sidebar__menu__item",l=a?"sidebar__menu__sub__link":"sidebar__menu__link";return o.a.createElement("li",{className:m()(u,{active:!!r},{noborder:!!c})},o.a.createElement(s.b,{className:l,to:n},i))};return a?o.a.createElement("div",{className:"sidebar"},o.a.createElement("div",{className:"sidebar__qr"},o.a.createElement(_.a,{size:{height:150,width:150},account:a})),o.a.createElement("p",{className:"sidebar__descr"},f.a.translate("account.deposit_address")),o.a.createElement("span",{className:"sidebar__user"},o.a.createElement("b",null,a)),o.a.createElement("ul",{className:"sidebar__menu"},g({title:"header.dashboard",link:"/account/"+a,isActive:e==="/account/"+a}),g({title:"account.member.stats",link:"/account/"+a+"/member-stats",isActive:-1!==e.indexOf("/account/"+a+"/member-stats")}),g({title:"account.voting",link:"/account/"+a+"/voting",isActive:-1!==e.indexOf("/account/"+a+"/voting")}),null,o.a.createElement("li",{className:m()("sidebar__menu__item expand",{showsub:this.state.showSubMenu})},o.a.createElement("a",{className:"sidebar__menu__link",href:"#",onClick:this._toggleSubMenu},f.a.translate("account.advanced")),o.a.createElement("ul",{className:"sidebar__menu__sub"},g({title:"explorer.assets.title",link:"/account/"+a+"/assets",isActive:-1!==e.indexOf("/account/"+a+"/assets"),subLink:!0,noBorder:!0}),g({title:"account.permissions",link:"/account/"+a+"/permissions",isActive:-1!==e.indexOf("/account/"+a+"/permissions"),subLink:!0}),g({title:"account.whitelist.title",link:"/account/"+a+"/whitelist",isActive:-1!==e.indexOf("/account/"+a+"/whitelist"),subLink:!0}),g({title:"account.vesting.title",link:"/account/"+a+"/vesting",isActive:-1!==e.indexOf("/account/"+a+"/vesting"),subLink:!0}),g({title:"account.signedmessages.menuitem",link:"/account/"+a+"/signedmessages",isActive:-1!==e.indexOf("/account/"+a+"/signedmessages"),subLink:!0})))),o.a.createElement("button",{className:"btn large outline create-account",type:"button",onClick:this._onNavigate.bind(this,"/create-account/wallet")},f.a.translate("header.create_account")),o.a.createElement(l.a,{id:"send_modal_header",refCallback:function(e){e&&(t.send_modal=e)},from_name:a})):null}}]),e}();S.contextTypes={location:A.a.object.isRequired,router:A.a.object.isRequired},e.default=Object(c.connect)(S,{listenTo:function(){return[r.a,h.a,g.a,i.a,p.a]},getProps:function(){var t=v.Apis.instance().chain_id;return{backedCoins:p.a.getState().backedCoins,myActiveAccounts:r.a.getState().myActiveAccounts,currentAccount:r.a.getState().currentAccount||r.a.getState().passwordAccount,passwordAccount:r.a.getState().passwordAccount,locked:h.a.getState().locked,current_wallet:g.a.getState().current_wallet,lastMarket:i.a.getState().viewSettings.get("lastMarket"+(t?"_"+t.substr(0,8):"")),starredAccounts:r.a.getState().starredAccounts,passwordLogin:i.a.getState().settings.get("passwordLogin"),currentLocale:i.a.getState().settings.get("locale"),hiddenAssets:i.a.getState().hiddenAssets,settings:i.a.getState().settings,locales:i.a.getState().defaults.locale,contacts:r.a.getState().accountContacts}}})},7984:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(23),c=n(14),r=n(9),i=n(64),u=n(86),l=n(7),p=n(13),d=n(16),f=n(63),h=n(6),g=n(235),b=(n(230),n(229),n(762),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var w=function(t){function e(){return v(this,e),_(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,o.a.Component),m(e,[{key:"componentDidMount",value:function(){this.props.account&&(s.a.setCurrentAccount.defer(this.props.account.get("name")),f.a.getPossibleFees(this.props.account,"transfer"))}},{key:"componentWillReceiveProps",value:function(t){if(t.account){var e=t.account.get("name"),n=this.props.account&&this.props.account.get("name");this.props.account&&e===n||(s.a.setCurrentAccount.defer(e),f.a.getPossibleFees(t.account,"transfer"))}}},{key:"render",value:function(){var t=this.props,e=t.myActiveAccounts,n=t.account_name,a=t.searchAccounts,s=t.settings,r=t.wallet_locked,i=t.account,u=t.hiddenAssets;if(!i)return o.a.createElement(g.default,null);var l=c.a.isMyAccount(i);return o.a.createElement("div",{className:"content account-page"},o.a.cloneElement(o.a.Children.only(this.props.children),{account_name:n,myActiveAccounts:e,searchAccounts:a,settings:s,wallet_locked:r,account:i,isMyAccount:l,hiddenAssets:u,contained:!0,balances:i.get("balances",Object(h.List)()).toList(),orders:i.get("orders",Object(h.List)()).toList(),backedCoins:this.props.backedCoins,bridgeCoins:this.props.bridgeCoins,gatewayDown:this.props.gatewayDown,viewSettings:this.props.viewSettings,proxy:i.getIn(["options","voting_account"])}))}}]),e}();w.propTypes={account:l.a.ChainAccount.isRequired},w.defaultProps={account:"props.params.account_name"},w=Object(p.a)(w,{show_loader:!0});var A=function(t){function e(){return v(this,e),_(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,o.a.Component),m(e,[{key:"render",value:function(){var t=this.props.routeParams.account_name;return o.a.createElement(w,b({},this.props,{account_name:t}))}}]),e}();e.default=Object(d.connect)(A,{listenTo:function(){return[c.a,r.a,i.a,u.a]},getProps:function(){return{myActiveAccounts:c.a.getState().myActiveAccounts,searchAccounts:c.a.getState().searchAccounts,settings:r.a.getState().settings,hiddenAssets:r.a.getState().hiddenAssets,wallet_locked:i.a.getState().locked,viewSettings:r.a.getState().viewSettings,backedCoins:u.a.getState().backedCoins,bridgeCoins:u.a.getState().bridgeCoins,gatewayDown:u.a.getState().down}}})}}]);