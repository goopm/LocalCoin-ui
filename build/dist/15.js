(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{328:function(e,t,s){"use strict";var a=s(0),n=s.n(a),o=s(1),i=s.n(o),r=s(5),c=s(83),u=s(2),l=s.n(u),m=s(68),_=s(72),p=s(4),d=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.state={amount:0,showError:!1},s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),d(t,[{key:"onAmountChanged",value:function(e){var t=e.amount,s=e.asset;this.setState({amount:t,asset:s})}},{key:"getBalance",value:function(){var e=this,t=this.props.account.get("balances"),s=0;return t&&t.forEach(function(t,a){if(a==e.props.assetId){var n=p.b.getObject(t);s=n.get("balance")}}),s}},{key:"onSubmit",value:function(){var e=r.a.get_asset_precision(this.state.asset.get("precision")),t=this.state.amount.replace(/,/g,"");t*=e;var s=this.getBalance();t<=0||t>s?this.setState({showError:!0}):(this.setState({showError:!1}),_.a.reserveAsset(t,this.props.assetId,this.props.account.get("id")),this.props.onClose())}},{key:"render",value:function(){var e=this,t=this.props.assetId;return n.a.createElement("form",{className:"grid-block vertical full-width-content"},n.a.createElement(i.a,{component:"h3",content:"modal.reserve.title"}),n.a.createElement("div",{className:"grid-container ",style:{paddingTop:"2rem"}},n.a.createElement("div",{className:"content-block",onClick:function(){e.setState({showError:!1})}},n.a.createElement(m.a,{label:"modal.reserve.amount",amount:this.state.amount,onChange:this.onAmountChanged.bind(this),asset:t,assets:[t],display_balance:n.a.createElement(c.a,{balance:this.props.account.getIn(["balances",t])}),tabIndex:1})),this.state.showError?n.a.createElement("p",{className:"errorModal"},l.a.translate("exchange.invalid_amount")):null,n.a.createElement("div",{className:"content-block button-group"},n.a.createElement("input",{type:"submit",className:"button success btn large inverted",onClick:this.onSubmit.bind(this),value:l.a.translate("modal.reserve.submit"),tabIndex:2}),n.a.createElement("div",{className:"button btn large outline",onClick:this.props.onClose,tabIndex:3},l.a.translate("cancel")))))}}]),t}();t.a=f},503:function(e,t,s){"use strict";(function(e){var a=s(0),n=s.n(a),o=s(1),i=s.n(o),r=s(8),c=s(14),u=s(5),l=s(2),m=s.n(l),_=s(72),p=s(52),d=s(68),f=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}();var h=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return t.state={amount:e.amount,to:e.to,to_id:null,memo:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,n.a.Component),f(s,[{key:"onAmountChanged",value:function(e){var t=e.amount;this.setState({amount:t})}},{key:"onToAccountChanged",value:function(e){var t=e?{to:e.get("name"),to_id:e.get("id")}:{to_id:null};this.setState(t)}},{key:"onToChanged",value:function(e){this.setState({to:e,to_id:null})}},{key:"onSubmit",value:function(){var t=this.props.asset_to_issue,s=u.a.get_asset_precision(t.get("precision")),a=this.state.amount.toString().replace(/,/g,"");a*=s,_.a.issueAsset(this.state.to_id,t.get("issuer"),t.get("id"),a,this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo),this.setState({amount:0,to:"",to_id:null,memo:""})}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value})}},{key:"render",value:function(){var e=this.props.asset_to_issue.get("id"),t=1;return n.a.createElement("form",{className:"grid-block vertical full-width-content"},n.a.createElement("div",{className:"grid-container ",style:{paddingTop:"2rem"}},n.a.createElement("div",{className:"content-block"},n.a.createElement(p.a,{label:"modal.issue.to",accountName:this.state.to,onAccountChanged:this.onToAccountChanged.bind(this),onChange:this.onToChanged.bind(this),account:this.state.to,tabIndex:t++})),n.a.createElement("div",{className:"content-block"},n.a.createElement(d.a,{label:"modal.issue.amount",amount:this.state.amount,onChange:this.onAmountChanged.bind(this),asset:e,assets:[e],tabIndex:t++})),n.a.createElement("div",{className:"content-block"},n.a.createElement("label",null,n.a.createElement(i.a,{component:"span",content:"transfer.memo"})," ","(",n.a.createElement(i.a,{content:"transfer.optional"}),")"),n.a.createElement("textarea",{rows:"3",value:this.state.memo,tabIndex:t++,onChange:this.onMemoChanged.bind(this)})),n.a.createElement("div",{className:"content-block button-group"},n.a.createElement("button",{type:"submit",className:"button primary",onClick:this.onSubmit.bind(this,this.state.to,this.state.amount),disabled:!this.state.to_id||!this.state.amount,tabIndex:t++},m.a.translate("modal.issue.submit")),n.a.createElement("button",{className:"button primary hollow",onClick:this.props.onClose,tabIndex:t++},m.a.translate("cancel")))))}}]),s}();h.propTypes={asset_to_issue:r.a.ChainAsset.isRequired},t.a=Object(c.a)(h)}).call(this,s(65).Buffer)},5208:function(e,t,s){"use strict";s.r(t);var a=s(101),n=s(0),o=s.n(n),i=s(3),r=s.n(i),c=s(7),u=s(1),l=s.n(u),m=s(72),_=s(95),p=s(25),d=s(39),f=s(13),h=s(23),b=s.n(h),g=s(27),y=s(5),v=s(48),E=s(503),k=s(328),w=s(18),A=s(43),x=s(6),C=s(38),S=(s(66),s(2)),O=s.n(S),j=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}();var N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.state={create:{symbol:"",name:"",description:"",max_supply:1e15,precision:4},issue:{amount:0,to:"",to_id:"",asset_id:"",symbol:""},errors:{symbol:null},isValid:!1,searchTerm:""},s._searchAccounts=Object(a.a)(s._searchAccounts,150),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),j(t,[{key:"_checkAssets",value:function(e,t){if(!this.props.account.get("assets").size){var s=e.sort(function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0}).last();0===e.size||t?(m.a.getAssetList.defer("A",100),this.setState({assetsFetched:100})):e.size>=this.state.assetsFetched&&(m.a.getAssetList.defer(s.symbol,100),this.setState({assetsFetched:this.state.assetsFetched+99}))}}},{key:"componentWillReceiveProps",value:function(e){this._checkAssets(e.assets)}},{key:"componentWillMount",value:function(){this._checkAssets(this.props.assets,!0)}},{key:"_onIssueInput",value:function(e,t){var s=t.target.id,a=this.state.issue;if("to"===s){this._searchAccounts(t.target.value),a.to=t.target.value;var n=this.props.searchAccounts.findEntry(function(e){return e===t.target.value});a.to_id=n?n[0]:null}else a[e]=t.target.value;this.setState({issue:a})}},{key:"_searchAccounts",value:function(e){p.a.accountSearch(e)}},{key:"_issueAsset",value:function(e,t){var s=this;t.preventDefault(),b.a.publish("issue_asset","close");var a=this.state.issue,n=this.props.assets.get(a.asset_id);a.amount*=y.a.get_asset_precision(n.precision),m.a.issueAsset(e,a).then(function(e){e?(g.a.addNotification({message:"Successfully issued "+y.a.format_asset(a.amount,s.props.assets.get(a.asset_id)),level:"success",autoDismiss:10}),ChainStore.getAsset(a.asset_id)):g.a.addNotification({message:"Failed to issue asset",level:"error",autoDismiss:10})})}},{key:"_reserveButtonClick",value:function(e,t){t.preventDefault(),this.setState({reserve:e}),b.a.publish("reserve_asset","open")}},{key:"_reserveAsset",value:function(e,t){t.preventDefault(),b.a.publish("reserve_asset","close");var s=this.state.issue,a=this.props.assets.get(s.asset_id);s.amount*=y.a.get_asset_precision(a.precision),m.a.issueAsset(e,s)}},{key:"_issueButtonClick",value:function(e,t,s){s.preventDefault();var a=this.state.issue;a.asset_id=e,a.symbol=t,this.setState({issue:a}),b.a.publish("issue_asset","open")}},{key:"_editButtonClick",value:function(e,t,s){s.preventDefault(),this.props.router.push("/account/"+t+"/update-asset/"+e)}},{key:"_onAccountSelect",value:function(e){var t=this.state.issue;t.to=e,t.to_id=this.props.account_name_to_id[e],this.setState({issue:t})}},{key:"render",value:function(){var e=this,t=this.props,s=t.account,a=t.account_name,n=t.assets,i=t.assetsList,r=!0;if(!s)return o.a.createElement(v.a,{type:"circle"});if(s.notFound&&(r=!1),!r)return o.a.createElement("div",{className:"grid-block"},o.a.createElement("h5",null,o.a.createElement(l.a,{component:"h5",content:"account.errors.not_found",name:a})));i.length&&(n=n.clear(),i.forEach(function(e){e&&(n=n.set(e.get("id"),e.toJS()))}));var u=n.filter(function(e){return e.issuer===s.get("id")}).sort(function(e,t){return parseInt(e.id.substring(4,e.id.length),10)-parseInt(t.id.substring(4,t.id.length),10)}).map(function(t){var s=A.a.parseDescription(t.options.description),n=s.short_name?s.short_name:s.main;n.length>100&&(n=n.substr(0,100)+"...");var i=e.props.getDynamicObject(t.dynamic_asset_data_id);return o.a.createElement("tr",{key:t.symbol},o.a.createElement("td",null,o.a.createElement(c.b,{to:"/asset/"+t.symbol},t.symbol)),o.a.createElement("td",{style:{maxWidth:"250px"}},n),o.a.createElement("td",null,i?o.a.createElement(f.a,{amount:parseInt(i.get("current_supply"),10),asset:t.id}):null),o.a.createElement("td",null,o.a.createElement(f.a,{amount:parseInt(t.options.max_supply,10),asset:t.id})),o.a.createElement("td",null,t.bitasset_data_id?null:o.a.createElement("button",{onClick:e._issueButtonClick.bind(e,t.id,t.symbol),className:"btn outline"},O.a.translate("transaction.trxTypes.asset_issue"))),o.a.createElement("td",null,t.bitasset_data_id?null:o.a.createElement("button",{onClick:e._reserveButtonClick.bind(e,t.id),className:"btn outline"},o.a.createElement(l.a,{content:"transaction.trxTypes.asset_reserve"}))),o.a.createElement("td",null,o.a.createElement("button",{onClick:e._editButtonClick.bind(e,t.symbol,a),className:"btn outline"},O.a.translate("transaction.trxTypes.asset_update"))))}).toArray();return o.a.createElement("div",{className:"assets-layout"},o.a.createElement("h2",{className:"content__heading"},O.a.translate("account.user_issued_assets.issued_assets")),o.a.createElement("div",{className:"negative-margins"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"content-block"},o.a.createElement("table",{className:"blue-bg with-borders"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement(l.a,{content:"account.user_issued_assets.symbol"})),o.a.createElement("th",{style:{maxWidth:"200px"}},o.a.createElement(l.a,{content:"account.user_issued_assets.description"})),o.a.createElement(l.a,{component:"th",content:"markets.supply"}),o.a.createElement("th",null,o.a.createElement(l.a,{content:"account.user_issued_assets.max_supply"})),o.a.createElement("th",{style:{textAlign:"center"},colSpan:"3"},o.a.createElement(l.a,{content:"account.perm.action"})))),o.a.createElement("tbody",null,u))),o.a.createElement("div",{className:"content-block"},o.a.createElement(c.b,{to:"/account/"+a+"/create-asset/"},o.a.createElement("button",{className:"btn large inverted"},O.a.translate("transaction.trxTypes.asset_create")))))),o.a.createElement(d.a,{id:"issue_asset",overlay:!0},o.a.createElement("br",null),o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement(E.a,{asset_to_issue:this.state.issue.asset_id,onClose:function(){b.a.publish("issue_asset","close")}}))),o.a.createElement(d.a,{id:"reserve_asset",overlay:!0},o.a.createElement("br",null),o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement(k.a,{assetId:this.state.reserve,account:s,onClose:function(){b.a.publish("reserve_asset","close")}}))))}}]),t}();N.defaultProps={symbol:"",name:"",description:"",max_supply:0,precision:0},N.propTypes={symbol:r.a.string.isRequired},N=Object(C.a)(N,{propNames:["assetsList"],asList:!0,withDynamic:!0}),t.default=Object(w.connect)(N,{listenTo:function(){return[_.a]},getProps:function(e){var t=Object(x.Map)(),s=Object(x.List)();return e.account.get("assets",[]).size?e.account.get("assets",[]).forEach(function(e){s=s.push(e)}):t=_.a.getState().assets,{assets:t,assetsList:s}}})},72:function(e,t,s){"use strict";var a=s(24),n=s(19),o=s(5),i=s(75),r=s(99),c=s(15),u=s(4),l=s(80),m=s.n(l),_=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}();var p={},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return _(e,[{key:"fundPool",value:function(e,t,s,a){var n=i.a.new_transaction(),r=o.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:s.get("id"),amount:a*r}),function(e){return c.a.process_transaction(n,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,s){var a=i.a.new_transaction();return a.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:s}),function(e){return c.a.process_transaction(a,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,s){var a=i.a.new_transaction(),n=o.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:s*n}}),function(e){return c.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,s,a,n,r,l,_,p){console.log("create asset:",t,"flags:",s,"isBitAsset:",r,"bitasset_opts:",_);var d=i.a.new_transaction(),f=o.a.get_asset_precision(t.precision);m.a.config({DECIMAL_PLACES:t.precision});var h=new m.a(t.max_supply).times(f).toString(),b=new m.a(t.max_market_fee||0).times(f).toString(),g=o.a.get_asset_precision(u.b.getAsset(n.base.asset_id).get("precision")),y={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:h,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:b,issuer_permissions:a,flags:s,core_exchange_rate:{base:{amount:n.base.amount*g,asset_id:n.base.asset_id},quote:{amount:n.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:p,extensions:null},is_prediction_market:l,extensions:null};return r&&(y.bitasset_opts=_),d.add_type_operation("asset_create",y),function(e){return c.a.process_transaction(d,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,s,a,n,r,l,_,p,d,f,h,b,g,y){var v=i.a.new_transaction();if(y){var E=o.a.get_asset_precision(n.get("precision"));m.a.config({DECIMAL_PLACES:n.get("precision")});var k=new m.a(s.max_supply).times(E).toString(),w=new m.a(s.max_market_fee||0).times(E).toString(),A=u.b.getAsset(a.quote.asset_id),x=o.a.get_asset_precision(A.get("precision")),C=u.b.getAsset(a.base.asset_id),S=o.a.get_asset_precision(C.get("precision")),O=new m.a(a.quote.amount).times(x).toString(),j=new m.a(a.base.amount).times(S).toString();console.log("auths:",h);var N={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),extensions:n.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:k,max_market_fee:w,market_fee_percent:100*s.market_fee_percent,description:f,issuer_permissions:l,flags:r,whitelist_authorities:h.whitelist_authorities.toJS(),blacklist_authorities:h.blacklist_authorities.toJS(),whitelist_markets:h.whitelist_markets.toJS(),blacklist_markets:h.blacklist_markets.toJS(),extensions:n.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:O,asset_id:a.quote.asset_id},base:{amount:j,asset_id:a.base.asset_id}}}};e!==t&&t||delete N.new_issuer,v.add_type_operation("asset_update",N)}if(console.log("bitasset_opts:",p,"original_bitasset_opts:",d),_&&(p.feed_lifetime_sec!==d.feed_lifetime_sec||p.minimum_feeds!==d.minimum_feeds||p.force_settlement_delay_sec!==d.force_settlement_delay_sec||p.force_settlement_offset_percent!==d.force_settlement_offset_percent||p.maximum_force_settlement_volume!==d.maximum_force_settlement_volume||p.short_backing_asset!==d.short_backing_asset)){var P={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),issuer:e,new_options:p};v.add_type_operation("asset_update_bitasset",P)}return console.log("feedProducers:",b,"originalFeedProducers:",g),_&&!o.a.are_equal_shallow(b,g)&&v.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:n.get("id"),new_feed_producers:b}),c.a.process_transaction(v,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,s,a,n){r.a.issue_asset(e,t,s,a,n)}},{key:"getAssetList",value:function(e,t){var s=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e+"_"+t;return function(i){if(!p[o]){var r;if(p[o]=!0,i({loading:!0}),r=n.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],s=[];e.forEach(function(e){u.b._updateObject(e,!1),s.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var a=n.Apis.instance().db_api().exec("get_objects",[s]),r=t.length>0?n.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([a,r]).then(function(t){return delete p[o],i({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),i({loading:!1}),delete p[o]}),a){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){s.getAssetList(t+"."+e,10)})}return r}}}},{key:"lookupAsset",value:function(e,t){var s=u.b.getAsset(e);return s?{assets:[s],searchID:t,symbol:e}:function(s){setTimeout(function(){var a=u.b.getAsset(e);a&&s({assets:[a],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,s){var a=i.a.new_transaction();return a.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:s,extensions:[]}),c.a.process_transaction(a,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=a.a.createActions(d)},95:function(e,t,s){"use strict";var a=s(77),n=s(6),o=s.n(n),i=s(24),r=s(72),c=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}();var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=o.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:r.a.getAssetList,onLookupAsset:r.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["a"]),c(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(s){for(var a=0;a<e.dynamic.length;a++)if(e.dynamic[a].id===s.dynamic_asset_data_id){s.dynamic=e.dynamic[a];break}if(s.bitasset_data_id){s.market_asset=!0;for(a=0;a<e.bitasset_data.length;a++)if(e.bitasset_data[a].id===s.bitasset_data_id){s.bitasset_data=e.bitasset_data[a];break}}else s.market_asset=!1;t.assets=t.assets.set(s.id,s),t.asset_symbol_to_id[s.symbol]=s.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=i.a.createStore(u,"AssetStore")}}]);