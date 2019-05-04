(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(5),r=n(16),i=n(85),c=n(14),u=n(23),l=n(1),p=n.n(l),m=n(4),d=n(7),f=n(13),h=n(8),_=n.n(h),b=n(3),g=n.n(b),y=n(12),v=n(61),w=n(178),A=n(350),E=n(2),k=n.n(E),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputChanged:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),T(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.account,n=e.accountName;void 0===t&&(t=m.b.getAccount(n)),this.props.onAccountChanged&&t&&this.props.onAccountChanged(t),!this.props.typeahead&&n&&this.onInputChanged(n)}},{key:"componentWillReceiveProps",value:function(e){e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=this.props,t=e.account,n=e.error;return n||!t||this.getInputType(t.get("name"))||(n=g.a.translate("account.errors.invalid")),n}},{key:"getInputType",value:function(e){return e?"#"===e[0]&&s.a.is_object_id("1.2."+e.substring(1))?"id":m.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&m.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onSelected",value:function(e){this.setState({inputChanged:!1});var t=this.getVerifiedAccountName(e),n=m.b.getAccount(t);n&&(this.props.onChange(t),this.props.onAccountChanged(n))}},{key:"onInputChanged",value:function(e){var t=this.props,n=t.onChange,a=t.onAccountChanged,o=t.accountName,s=t.typeahead;this.setState({inputChanged:!0});var r=this.getVerifiedAccountName(e),i=m.b.getAccount(r);n&&r!==o&&n(r),s||(n&&n(r),a&&a(i))}},{key:"getVerifiedAccountName",value:function(e){var t=this.props.allowUppercase,n=null;n="string"==typeof e?e:e&&e.target?e.target.value.trim():"",t||(n=n.toLowerCase());var a=n.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);return a&&(n=a[1]),n}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"_onAddContact",value:function(){u.a.addAccountContact(this.props.accountName)}},{key:"_onRemoveContact",value:function(){u.a.removeAccountContact(this.props.accountName)}},{key:"onAction",value:function(e){var t=this.props,n=t.onAction,a=t.disableActionButton,o=t.account,s=t.accountName;e.preventDefault(),this.getError()||!n||a||(o?n(o):"pubkey"===this.getInputType(s)&&n(s))}},{key:"render",value:function(){var e=this.props,t=e.accountName,n=e.account,a=e.allowPubKey,s=e.typeahead,r=e.disableActionButton,c=e.contacts,u=e.myActiveAccounts,l=(e.noPlaceHolder,e.useHR),d=e.labelClass,f=e.reserveErrorSpace,h=this.getInputType(t),b=[],E=this.getError(),k=u;k=k.concat(c);var T=void 0;n&&(n.isKnownScammer=v.a.isKnownScammer(n.get("name")),n.accountType=this.getInputType(n.get("name")),n.accountStatus=m.b.getAccountMemberStatus(n),n.statusText=n.isKnownScammer?g.a.translate("account.member.suspected_scammer"):g.a.translate("account.member."+n.accountStatus),T="name"===n.accountType?"#"+n.get("id").substring(4):"id"===n.accountType?n.get("name"):null),s?a&&"pubkey"===h||E||!t||n||(E=g.a.translate("account.errors.unknown")):!n&&t&&"pubkey"!==h&&(E=g.a.translate("account.errors.unknown")),a&&"pubkey"===h&&(T="Public Key"),n&&k&&(n.isFavorite=u.has(n.get("name"))||c.has(n.get("name"))),s&&k&&k.map(function(e){var t=m.b.getAccount(e),n=m.b.getAccountMemberStatus(t),a=v.a.isKnownScammer(e)?"account.member.suspected_scammer":"account.member."+n;b.push({id:e,label:e,status:g.a.translate(a),className:v.a.isKnownScammer(e)?"negative":"positive"})});var x=!!t&&b.reduce(function(e,n){return e||n.label===t},!1);if(t&&!x&&this.state.inputChanged){var O=m.b.getAccount(t),j=O?m.b.getAccountMemberStatus(O):null,N=O?v.a.isKnownScammer(O.get("name"))?g.a.translate("account.member.suspected_scammer"):g.a.translate("account.member."+j):g.a.translate("account.errors.unknown");b.push({id:this.props.accountName,label:this.props.accountName,status:N,className:v.a.isKnownScammer(t)||!O?"negative":null,disabled:!O})}b.sort(function(e,t){return e.label>t.label?1:-1});var P=this.props.account?u.has(n.get("name"))||c.has(n.get("name"))?o.a.createElement("span",{className:"tooltip green","data-place":"top","data-tip":g.a.translate("tooltip.follow_user"),onClick:this._onRemoveContact.bind(this)},o.a.createElement(y.a,{style:{position:"absolute",top:"-0.15em",right:".2em"},name:"user",title:"icons.user.following"})):o.a.createElement("span",{className:"tooltip","data-place":"top","data-tip":g.a.translate("tooltip.follow_user_add"),onClick:this._onAddContact.bind(this)},o.a.createElement(y.a,{style:{position:"absolute",top:"-0.05em",right:".2em"},name:"plus-circle",title:"icons.plus_circle.add_contact"})):null,S=_()("button btn large outline",{disabled:!(n||"pubkey"===h)||E||r});return o.a.createElement("div",{className:"account-selector",style:this.props.style},o.a.createElement("div",{className:"content-area"},this.props.label?o.a.createElement("div",{className:"header-area"+(this.props.hideImage?" no-margin":"")},o.a.createElement("label",{className:_()("right-label",n&&n.isFavorite?"positive":null,n&&n.isKnownScammer?"negative":null)},o.a.createElement("span",{style:{paddingRight:"1.5rem"}},n&&n.statusText," ",!!T&&T),P),o.a.createElement(p.a,{className:"left-label "+(d||""),component:"label",content:this.props.label}),l&&o.a.createElement("hr",null)):null,o.a.createElement("div",{className:"input-area"},o.a.createElement("div",{className:"inline-label input-wrapper"},n&&"pubkey"===n.accountType?o.a.createElement("div",{className:"account-image"},o.a.createElement(y.a,{name:"key",title:"icons.key",size:"4x"})):this.props.hideImage?null:o.a.createElement(i.a,{size:{height:this.props.size||80,width:this.props.size||80},account:n?n.get("name"):null,custom_image:null}),void 0!==this.props.typeahead?o.a.createElement(A.a,C({items:b,style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",defaultValue:this.props.accountName||"",placeholder:this.props.placeholder||g.a.translate("account.name"),ref:"user_input",onSelect:this.onSelected.bind(this),onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex,inputProps:{placeholder:"Search for an account"}},this.props.typeaheadOptions||{})):o.a.createElement("input",{style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||g.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.dropDownContent?o.a.createElement("div",{className:"form-label select floating-dropdown"},o.a.createElement(w.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?o.a.createElement("button",{className:S,style:{marginLeft:4},onClick:this.onAction.bind(this)},o.a.createElement(p.a,{content:this.props.action_label})):null)),E||f?o.a.createElement("div",{className:this.props.hideImage?"has-error":"error-area",style:{marginTop:"1rem",position:"relative"}},o.a.createElement("span",null,E)):null))}}]),t}();x.propTypes={label:k.a.string,error:k.a.element,placeholder:k.a.string,onChange:k.a.func,onAccountChanged:k.a.func,onAction:k.a.func,accountName:k.a.string,account:d.a.ChainAccount,tabIndex:k.a.number,disableActionButton:k.a.bool,allowUppercase:k.a.bool,typeahead:k.a.array},x.defaultProps={autosubscribe:!1},x=Object(f.a)(x),x=Object(r.connect)(x,{listenTo:function(){return[c.a]},getProps:function(){return{myActiveAccounts:c.a.getState().myActiveAccounts,contacts:c.a.getState().accountContacts}}}),t.a=x},359:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=(n(8),n(1)),r=n.n(s),i=n(3),c=n.n(i),u=n(109),l=n(50),p=n(17),m=n(360),d=n(74),f=n(49),h=n(4);var _=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(a){return e.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n(a)))}},b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return g.call(n),n.state=n.initialState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),t}(),g=function(){var e,t=this;this.onAccountNameChanged=_(this,"funderAccountName"),this.onAccountChanged=_(this,"newFunderAccount"),this.onPoolInput=_(this,"fundPoolAmount",(e="amount",function(t){return t[e]})),this.onFundPool=function(){return d.a.fundPool(t.state.newFunderAccount?t.state.newFunderAccount.get("id"):null,t.props.core,t.props.asset,t.state.fundPoolAmount.replace(/,/g,""))},this.reset=function(){t.setState(t.initialState())},this.initialState=function(){return{funderAccountName:t.props.funderAccountName,fundPoolAmount:0}},this.render=function(){var e=t.props,n=t.state,a=t.onPoolInput,s=t.onFundPool,i=t.reset,d=t.onAccountNameChanged,f=t.onAccountChanged,_=e.asset,b=e.core,g=e.hideBalance,y=e.getDynamicObject,v=n.funderAccountName,w=n.fundPoolAmount,A=n.newFunderAccount,E=null;g||(E=y(_.get("dynamic_asset_data_id")));var k=b.get("id")||"1.3.0",C=0;if(A){var T=A.getIn(["balances",k]);if(T){var x=h.b.getObject(T);x&&(C=x.get("balance"))}}var O=o.a.createElement("span",null,o.a.createElement(r.a,{component:"span",content:"transfer.available"}),": ",o.a.createElement(p.a,{amount:C,asset:k}));return o.a.createElement("div",null,o.a.createElement(r.a,{component:"p",content:"explorer.asset.fee_pool.fund_text",asset:_.get("symbol"),core:b.get("symbol")}),g||o.a.createElement("div",{style:{paddingBottom:"1.5rem"}},o.a.createElement(r.a,{content:"explorer.asset.fee_pool.pool_balance"}),o.a.createElement("span",null,": "),E?o.a.createElement(p.a,{amount:E.get("fee_pool"),asset:k}):null),o.a.createElement(u.a,{label:"transaction.funding_account",accountName:v,onChange:d,onAccountChanged:f,account:v,error:null,tabIndex:1}),o.a.createElement(l.a,{label:"transfer.amount",display_balance:O,amount:w,onChange:a,asset:k,assets:[k],placeholder:"0.0",tabIndex:2,style:{width:"100%",paddingTop:16}}),o.a.createElement("div",{style:{paddingTop:"1rem"}},o.a.createElement("button",{className:"btn large inverted",disabled:w<=0,onClick:s},c.a.translate("transaction.trxTypes.asset_fund_fee_pool")),o.a.createElement("button",{className:"btn large outline",onClick:i},c.a.translate("account.perm.reset")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement(r.a,{content:"account.user_issued_assets.approx_fee"}),": ",o.a.createElement(m.a,{opType:"asset_fund_fee_pool"})),o.a.createElement("hr",null)))}};b=Object(f.a)(b,{propNames:["asset","core"],defaultProps:{core:"1.3.0"},withDynamic:!0}),t.a=b},360:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(2),r=n.n(s),i=n(17),c=n(7),u=n(13),l=n(41),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),p(t,[{key:"getFee",value:function(){return Object(l.c)(this.props.opType,this.props.options,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.opType,n=e.options,a=e.globalObject;if(!t||!n||!a)return null;var s=Object(l.c)(t,n,a);return o.a.createElement(i.a,{amount:s,asset:"1.3.0"})}}]),t}();m.propTypes={globalObject:c.a.ChainObject.isRequired,opType:r.a.string,options:r.a.array},m.defaultProps={globalObject:"2.0.0",options:[]},t.a=Object(u.a)(m)},72:function(e,t,n){"use strict";n.d(t,"b",function(){return y}),n.d(t,"a",function(){return g});var a=n(0),o=n.n(a),s=n(2),r=n.n(s),i=(n(1),n(8)),c=n.n(i),u=n(16),l=n(11),p=n(9),m=n(3),d=n.n(m),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(){return h(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,o.a.Component),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,s=e.title,r=e.className,i=e.updatedTab,u=e.disabled,l=e.subText,p=c()({"is-active":t},r);return"string"==typeof s&&s.indexOf(".")>0&&(s=d.a.translate(s)),this.props.collapsed?("string"==typeof l&&(l=l.trim()),o.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},o.a.createElement("span",{className:"tab-title"},s,i?"*":"",l&&" (",l&&l,l&&")"))):o.a.createElement("li",{className:p,onClick:u?null:a.bind(this,n,this.props.isLinkTo)},o.a.createElement("a",null,o.a.createElement("span",{className:"tab-title"},s,i?"*":""),l&&o.a.createElement("div",{className:"tab-subtext"},l)))}}]),t}();g.propTypes={changeTab:r.a.func,isActive:r.a.bool.isRequired,index:r.a.number.isRequired,className:r.a.string,isLinkTo:r.a.string,subText:r.a.oneOfType([r.a.object,r.a.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var y=function(e){function t(e){h(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return b(t,o.a.Component),f(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&l.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,s=t.tabsClass,r=t.style,i=t.segmented,u=this.state.width<900&&o.a.Children.count(n)>2,l=null,p=o.a.Children.map(n,function(t,n){if(!t)return null;if(u&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),o.a.cloneElement(t,{collapsed:u,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return l||(l=p[0].props.children),o.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.a.createElement("div",{className:"service-selector"},o.a.createElement("ul",{style:r,className:c()("button-group no-margin",s,{segmented:i})},u?o.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p)),this.props.actionButtons?o.a.createElement("div",{className:"tabs-action-buttons"},this.props.actionButtons):null,o.a.createElement("div",{className:c()("tab-content",a)},l))}}]),t}();y.propTypes={setting:r.a.string,defaultActiveTab:r.a.number,segmented:r.a.bool},y.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},y.contextTypes={router:r.a.object.isRequired},y=Object(u.connect)(y,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}})},74:function(e,t,n){"use strict";var a=n(25),o=n(19),s=n(5),r=n(83),i=n(107),c=n(15),u=n(4),l=n(79),p=n.n(l),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d={},f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return m(e,[{key:"fundPool",value:function(e,t,n,a){var o=r.a.new_transaction(),i=s.a.get_asset_precision(t.get("precision"));return o.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:n.get("id"),amount:a*i}),function(e){return c.a.process_transaction(o,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,n){var a=r.a.new_transaction();return a.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:n}),function(e){return c.a.process_transaction(a,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,n){var a=r.a.new_transaction(),o=s.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:n*o}}),function(e){return c.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,n,a,o,i,l,m,d){console.log("create asset:",t,"flags:",n,"isBitAsset:",i,"bitasset_opts:",m);var f=r.a.new_transaction(),h=s.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var _=new p.a(t.max_supply).times(h).toString(),b=new p.a(t.max_market_fee||0).times(h).toString(),g=s.a.get_asset_precision(u.b.getAsset(o.base.asset_id).get("precision")),y={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:_,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:b,issuer_permissions:a,flags:n,core_exchange_rate:{base:{amount:o.base.amount*g,asset_id:o.base.asset_id},quote:{amount:o.quote.amount*h,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:d,extensions:null},is_prediction_market:l,extensions:null};return i&&(y.bitasset_opts=m),f.add_type_operation("asset_create",y),function(e){return c.a.process_transaction(f,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,n,a,o,i,l,m,d,f,h,_,b,g,y){var v=r.a.new_transaction();if(y){var w=s.a.get_asset_precision(o.get("precision"));p.a.config({DECIMAL_PLACES:o.get("precision")});var A=new p.a(n.max_supply).times(w).toString(),E=new p.a(n.max_market_fee||0).times(w).toString(),k=u.b.getAsset(a.quote.asset_id),C=s.a.get_asset_precision(k.get("precision")),T=u.b.getAsset(a.base.asset_id),x=s.a.get_asset_precision(T.get("precision")),O=new p.a(a.quote.amount).times(C).toString(),j=new p.a(a.base.amount).times(x).toString();console.log("auths:",_);var N={fee:{amount:0,asset_id:0},asset_to_update:o.get("id"),extensions:o.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:A,max_market_fee:E,market_fee_percent:100*n.market_fee_percent,description:h,issuer_permissions:l,flags:i,whitelist_authorities:_.whitelist_authorities.toJS(),blacklist_authorities:_.blacklist_authorities.toJS(),whitelist_markets:_.whitelist_markets.toJS(),blacklist_markets:_.blacklist_markets.toJS(),extensions:o.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:O,asset_id:a.quote.asset_id},base:{amount:j,asset_id:a.base.asset_id}}}};e!==t&&t||delete N.new_issuer,v.add_type_operation("asset_update",N)}if(console.log("bitasset_opts:",d,"original_bitasset_opts:",f),m&&(d.feed_lifetime_sec!==f.feed_lifetime_sec||d.minimum_feeds!==f.minimum_feeds||d.force_settlement_delay_sec!==f.force_settlement_delay_sec||d.force_settlement_offset_percent!==f.force_settlement_offset_percent||d.maximum_force_settlement_volume!==f.maximum_force_settlement_volume||d.short_backing_asset!==f.short_backing_asset)){var P={fee:{amount:0,asset_id:0},asset_to_update:o.get("id"),issuer:e,new_options:d};v.add_type_operation("asset_update_bitasset",P)}return console.log("feedProducers:",b,"originalFeedProducers:",g),m&&!s.a.are_equal_shallow(b,g)&&v.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:o.get("id"),new_feed_producers:b}),c.a.process_transaction(v,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,n,a,o){i.a.issue_asset(e,t,n,a,o)}},{key:"getAssetList",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e+"_"+t;return function(r){if(!d[s]){var i;if(d[s]=!0,r({loading:!0}),i=o.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],n=[];e.forEach(function(e){u.b._updateObject(e,!1),n.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var a=o.Apis.instance().db_api().exec("get_objects",[n]),i=t.length>0?o.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([a,i]).then(function(t){return delete d[s],r({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),r({loading:!1}),delete d[s]}),a){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){n.getAssetList(t+"."+e,10)})}return i}}}},{key:"lookupAsset",value:function(e,t){var n=u.b.getAsset(e);return n?{assets:[n],searchID:t,symbol:e}:function(n){setTimeout(function(){var a=u.b.getAsset(e);a&&n({assets:[a],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,n){var a=r.a.new_transaction();return a.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:n,extensions:[]}),c.a.process_transaction(a,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=a.a.createActions(f)}}]);