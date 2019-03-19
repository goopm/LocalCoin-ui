(window.webpackJsonp=window.webpackJsonp||[]).push([[24,46],{323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a(16),o=a(11),i=a(1),c=a.n(i),u=a(50),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-404"},r.a.createElement("div",{className:"page-404-container"},r.a.createElement("div",{className:"page-404-logo"},r.a.createElement("img",{src:u.logoLight,height:"50px",width:"50px",alt:"Logo"})),r.a.createElement("div",{className:"page-404-title"},r.a.createElement(c.a,{content:"page404.page_not_found_title"})),r.a.createElement("div",{className:"page-404-subtitle"},r.a.createElement(c.a,{content:"page404."+this.props.subtitle})),r.a.createElement("div",{className:"page-404-button-back"},r.a.createElement(s.b,{to:"/"},r.a.createElement(c.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),t}();_.defaultProps={subtitle:"page_not_found_subtitle"},t.default=_=Object(l.connect)(_,{listenTo:function(){return[o.a]},getProps:function(){return{theme:o.a.getState().settings.get("themes")}}})},72:function(e,t,a){"use strict";var n=a(25),r=a(19),s=a(5),l=a(82),o=a(115),i=a(14),c=a(4),u=a(79),m=a.n(u),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var p={},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return _(e,[{key:"fundPool",value:function(e,t,a,n){var r=l.a.new_transaction(),o=s.a.get_asset_precision(t.get("precision"));return r.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:a.get("id"),amount:n*o}),function(e){return i.a.process_transaction(r,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,a){var n=l.a.new_transaction();return n.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:a}),function(e){return i.a.process_transaction(n,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,a){var n=l.a.new_transaction(),r=s.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:a*r}}),function(e){return i.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,a,n,r,o,u,_,p){console.log("create asset:",t,"flags:",a,"isBitAsset:",o,"bitasset_opts:",_);var d=l.a.new_transaction(),f=s.a.get_asset_precision(t.precision);m.a.config({DECIMAL_PLACES:t.precision});var b=new m.a(t.max_supply).times(f).toString(),h=new m.a(t.max_market_fee||0).times(f).toString(),g=s.a.get_asset_precision(c.b.getAsset(r.base.asset_id).get("precision")),E={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:b,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:n,flags:a,core_exchange_rate:{base:{amount:r.base.amount*g,asset_id:r.base.asset_id},quote:{amount:r.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:p,extensions:null},is_prediction_market:u,extensions:null};return o&&(E.bitasset_opts=_),d.add_type_operation("asset_create",E),function(e){return i.a.process_transaction(d,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,a,n,r,o,u,_,p,d,f,b,h,g,E){var y=l.a.new_transaction();if(E){var v=s.a.get_asset_precision(r.get("precision"));m.a.config({DECIMAL_PLACES:r.get("precision")});var k=new m.a(a.max_supply).times(v).toString(),x=new m.a(a.max_market_fee||0).times(v).toString(),w=c.b.getAsset(n.quote.asset_id),A=s.a.get_asset_precision(w.get("precision")),O=c.b.getAsset(n.base.asset_id),P=s.a.get_asset_precision(O.get("precision")),S=new m.a(n.quote.amount).times(A).toString(),j=new m.a(n.base.amount).times(P).toString();console.log("auths:",b);var N={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),extensions:r.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:k,max_market_fee:x,market_fee_percent:100*a.market_fee_percent,description:f,issuer_permissions:u,flags:o,whitelist_authorities:b.whitelist_authorities.toJS(),blacklist_authorities:b.blacklist_authorities.toJS(),whitelist_markets:b.whitelist_markets.toJS(),blacklist_markets:b.blacklist_markets.toJS(),extensions:r.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:S,asset_id:n.quote.asset_id},base:{amount:j,asset_id:n.base.asset_id}}}};e!==t&&t||delete N.new_issuer,y.add_type_operation("asset_update",N)}if(console.log("bitasset_opts:",p,"original_bitasset_opts:",d),_&&(p.feed_lifetime_sec!==d.feed_lifetime_sec||p.minimum_feeds!==d.minimum_feeds||p.force_settlement_delay_sec!==d.force_settlement_delay_sec||p.force_settlement_offset_percent!==d.force_settlement_offset_percent||p.maximum_force_settlement_volume!==d.maximum_force_settlement_volume||p.short_backing_asset!==d.short_backing_asset)){var q={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),issuer:e,new_options:p};y.add_type_operation("asset_update_bitasset",q)}return console.log("feedProducers:",h,"originalFeedProducers:",g),_&&!s.a.are_equal_shallow(h,g)&&y.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:r.get("id"),new_feed_producers:h}),i.a.process_transaction(y,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,a,n,r){o.a.issue_asset(e,t,a,n,r)}},{key:"getAssetList",value:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e+"_"+t;return function(l){if(!p[s]){var o;if(p[s]=!0,l({loading:!0}),o=r.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],a=[];e.forEach(function(e){c.b._updateObject(e,!1),a.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var n=r.Apis.instance().db_api().exec("get_objects",[a]),o=t.length>0?r.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([n,o]).then(function(t){return delete p[s],l({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),l({loading:!1}),delete p[s]}),n){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){a.getAssetList(t+"."+e,10)})}return o}}}},{key:"lookupAsset",value:function(e,t){var a=c.b.getAsset(e);return a?{assets:[a],searchID:t,symbol:e}:function(a){setTimeout(function(){var n=c.b.getAsset(e);n&&a({assets:[n],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,a){var n=l.a.new_transaction();return n.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:a,extensions:[]}),i.a.process_transaction(n,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=n.a.createActions(d)},7844:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a(1),o=a.n(l),i=a(45),c=a(48),u=a(17),m=a(61),_=a(22),p=a(146),d=a(66),f=a(46),b=a(5),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={time:e.time},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),h(t,[{key:"getHours",value:function(e){return e/3600}},{key:"render",value:function(){return r.a.createElement("div",null,this.getHours(this.state.time),"h")}}]),t}(),E=a(4),y=a(19),v=a(70),k=a(20),x=a(323),w=a(355),A=a(15),O=a(16),P=a(3),S=a.n(P),j=a(102),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},q=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var R=function(e){function t(){return T(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(o.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),F=function(e){function t(){return T(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(o.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),L=function(e){function t(e){T(this,t);var a=D(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return I(t,r.a.Component),q(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t,a=(C(t={},this.props.asset.get("id"),this.props.asset.toJS()),C(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),r=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),s=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&s.getIn(["base","asset_id"])===s.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),s=(s=(s=(s=s.setIn(["base","amount"],1)).setIn(["base","asset_id"],this.props.backingAsset.get("id"))).setIn(["quote","amount"],1)).setIn(["quote","asset_id"],this.props.asset.get("id")),r=1e3);try{var l=new k.c({priceObject:s,market_base:this.props.asset.get("id"),sqr:r,assets:a});y.Apis.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var r=t.map(function(t){return new k.b(t,a,e.props.asset.get("id"),l,n)});e.setState({callOrders:r})})}catch(e){}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return r.a.createElement("div",null,t.map(function(t){return r.a.createElement(R,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2"},r.a.createElement("div",{className:"table-blocks__item__table__labels"},t.map(function(t){return r.a.createElement(F,{key:"perm_"+t,name:t,isSet:e[t]})}))))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.base,s=e.quote;return r.a.createElement(m.a,{base_amount:n.amount,base_asset:n.asset_id,quote_amount:s.amount,quote_asset:s.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return r.a.createElement("span",null," ",r.a.createElement(i.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,n=e+"/"+a;return r.a.createElement("span",null,r.a.createElement(s.b,{to:"/market/"+t},n)," "," ")}.bind(this))}},{key:"renderAboutBox",value:function(e,t){var a=E.b.getObject(e.issuer,!1,!1),n=a?a.get("name"):"",l=f.a.parseDescription(e.options.description),i=l.main,c=l.short_name?l.short_name:null,u=(i=i&&i.length>0?i+" ":i).match(/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g),m=E.b.getAsset("1.3.0"),_=l.market?l.market:m?m.get("symbol"):"LLC";"bitasset"in e&&e.bitasset.is_prediction_market&&(_=(_=E.b.getAsset(e.bitasset.options.short_backing_asset))?_.get("symbol"):m.get("symbol")),e.symbol===m.get("symbol")&&(_="USD"),u&&u.length&&u.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";i=i.replace(e,t)});var p=b.a.replaceName(t),h=p.name,g=p.prefix;return r.a.createElement("div",{style:{overflow:"visible"}},r.a.createElement(d.a,{path:"assets/"+e.symbol,alt_path:"assets/Asset",section:"summary",symbol:(g||"")+h,description:i,issuer:n,hide_issuer:"true"}),c?r.a.createElement("p",null,c):null,r.a.createElement("button",{className:"btn large inverted marketw3c-btn"},r.a.createElement(s.b,{to:"/market/"+e.symbol+"_"+_},r.a.createElement(o.a,{content:"exchange.market"})," ",r.a.createElement("span",null,e.symbol," / ",_))))}},{key:"renderSummary",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options,n=f.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),s=Object.keys(n),l=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.current_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:t.current_supply,asset:e.id})," ")):null,c=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.stealth_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:t.confidential_supply,asset:e.id})," ")):null,m=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.market_fee"})," "),r.a.createElement("td",null," ",a.market_fee_percent/100," % ")):null,p=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},r.a.createElement(_.a,{name:e.symbol})),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.asset_type"})," "),r.a.createElement("td",null," ",this._assetType(e)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.issuer"})," "),r.a.createElement("td",null," ",r.a.createElement(i.a,{account:e.issuer})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.assets.precision"})," "),r.a.createElement("td",null," ",e.precision," ")),l,c,m,p)),this.renderFlagIndicators(n,s))}},{key:"renderPriceFeed",value:function(e,t){var a=r.a.createElement(o.a,{content:"explorer.asset.price_feed.title"}),n=e.bitasset;if(!("current_feed"in n))return r.a.createElement("div",{header:a});var s=n.current_feed,l=n.options.force_settlement_delay_sec,i=n.options.force_settlement_offset_percent,c=this.getGlobalSettlementPrice();return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},a),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.settlement_price"})," "),r.a.createElement("td",null," ",this.formattedPrice(s.settlement_price)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),r.a.createElement("td",null," ",s.maintenance_collateral_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),r.a.createElement("td",null," ",s.maximum_short_squeeze_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.global_settlement_price"})," "),r.a.createElement("td",null," ",c||"-"," ")))),r.a.createElement("table",{className:"table-blocks__item__table",style:{marginTop:"2rem"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.settlement_delay"})," "),r.a.createElement("td",null," ",r.a.createElement(g,{time:l})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.force_settlement_offset"})," "),r.a.createElement("td",null," ",i/100,"% ")))))}},{key:"renderFeePool",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},S.a.translate("explorer.asset.fee_pool.title")),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),r.a.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),r.a.createElement("td",null," ",t?r.a.createElement(u.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),r.a.createElement("td",null," ",t?r.a.createElement(u.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))),r.a.createElement(w.a,{asset:e.symbol,funderAccountName:this.props.currentAccount,hideBalance:!0}))}},{key:"renderPermissions",value:function(e){var t=e.options,a=f.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),n=Object.keys(a),s=a.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.permissions.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,l=r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.permissions.max_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},S.a.translate("explorer.asset.permissions.title")),r.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},r.a.createElement("tbody",null,s,l)),this.renderPermissionIndicators(a,n))}},{key:"getMarginPositions",value:function(){var e=this.state.sortDirection,t={name:function(t,a){var n=E.b.getAccount(t.borrower,!1);n&&(n=n.get("name"));var r=E.b.getAccount(a.borrower,!1);return r&&(r=r.get("name")),n>r?e?1:-1:n<r?e?-1:1:0},price:function(t,a){return(e?1:-1)*(t.call_price.toReal()-a.call_price.toReal())},collateral:function(t,a){return(e?1:-1)*(a.getCollateral().getAmount()-t.getCollateral().getAmount())},debt:function(t,a){return(e?1:-1)*(a.amountToReceive().getAmount()-t.amountToReceive().getAmount())},ratio:function(t,a){return(e?1:-1)*(t.getRatio()-a.getRatio())}};return this.state.callOrders.sort(t[this.state.marginTableSort])}},{key:"getGlobalSettlementPriceFromSorted",value:function(e){if(console.log("global settlement sorted called"),!e||e.length<=0)return console.log("length array 0 passed in"),null;console.log("sortedCallOrders exists according to sorted get globa");var t=e[0],a=t.amountToReceive().getAmount(),n=t.getCollateral().getAmount();return r.a.createElement(m.a,{base_amount:n,base_asset:t.call_price.base.asset_id,quote_amount:a,quote_asset:t.call_price.quote.asset_id})}},{key:"getGlobalSettlementPrice",value:function(){if(!this.state.callOrders)return null;this.state.callOrders;for(var e=null,t=null,a=this.state.callOrders.length,n=0;n<a;n++){var s=this.state.callOrders[n];null==e?(e=s,t=s.getRatio()):s.getRatio()<t&&(t=s.getRatio(),e=s)}if(null==e)return console.log("couldn't find the least col short"),null;var l=e.amountToReceive().getAmount(),o=e.getCollateral().getAmount();return r.a.createElement(m.a,{base_amount:o,base_asset:e.call_price.base.asset_id,quote_amount:l,quote_asset:e.call_price.quote.asset_id})}},{key:"renderPriceFeedData",value:function(e,t){var a=e.bitasset;if(!("feeds"in a)||0==a.feeds.length||a.is_prediction_market)return null;var n=(new Date).getTime(),s=new Date(n-1e3*e.bitasset.options.feed_lifetime_sec),l=a.feeds;if(!(l=l.filter(function(e){return new Date(e[1][0])>s}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])})).length)return null;for(var c=[],_=l[0][1][1].settlement_price,d=l[0][1][1].core_exchange_rate,f=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}}," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.publisher"})," "),r.a.createElement("th",null,r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.settlement_price"}),r.a.createElement("br",null),"(",this.formattedPrice(_,!1,!0),")"),r.a.createElement("th",null,r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),r.a.createElement("br",null),"(",this.formattedPrice(d,!1,!0),")"),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.published"})," "))),b=0;b<l.length;b++){var h=l[b],g=h[0],E=new Date(h[1][0]+"Z"),y=h[1][1].settlement_price,k=h[1][1].core_exchange_rate,x=h[1][1].maintenance_collateral_ratio/10+"%",w=h[1][1].maximum_short_squeeze_ratio/10+"%";c.push(r.a.createElement("tr",{key:g},r.a.createElement("td",null," ",r.a.createElement(i.a,{account:g})," "),r.a.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(y,!0)),r.a.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(k,!0)," "),r.a.createElement("td",{style:{textAlign:"right"}}," ",x),r.a.createElement("td",{style:{textAlign:"right"}}," ",w),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(p.a,{time:E}))))}var A=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},r.a.createElement(o.a,{content:"transaction.borrower"})),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},r.a.createElement(o.a,{content:"transaction.collateral"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(u.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},r.a.createElement(o.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(u.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{style:{paddingRight:10},className:"clickable"},r.a.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},r.a.createElement(o.a,{content:"exchange.call"})),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(m.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},r.a.createElement(o.a,{content:"borrow.coll_ratio"})))),O=t.map(function(e){return r.a.createElement("tr",{className:"margin-row",key:e.id},r.a.createElement("td",null,r.a.createElement(i.a,{account:e.borrower})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(u.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(u.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right",paddingRight:10}},r.a.createElement(m.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),r.a.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))});return r.a.createElement("div",{className:"grid-block"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement("div",{className:""},r.a.createElement(v.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},r.a.createElement(v.a,{title:"explorer.asset.price_feed_data.title"},r.a.createElement("div",{className:"responsive-table"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},f,r.a.createElement("tbody",null,c)))),r.a.createElement(v.a,{title:"explorer.asset.margin_positions.title"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},A,r.a.createElement("tbody",null,O)))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t=this.getMarginPositions(),a="bitasset"in e?this.renderPriceFeed(e,t):null;"bitasset"in e&&this.renderPriceFeedData(e,t);return r.a.createElement("div",{className:"content",style:{margin:20}},r.a.createElement("h2",{className:"content__heading"},r.a.createElement(j.a,{showIcon:!0,asset:e.id})),this.renderAboutBox(e,this.props.asset),r.a.createElement("div",{className:"table-blocks"},this.renderSummary(e),a||this.renderPermissions(e),this.renderFeePool(e),a?this.renderPermissions(e):null))}}]),t}();L=Object(O.connect)(L,{listenTo:function(){return[A.a]},getProps:function(){y.Apis.instance().chain_id;return{currentAccount:A.a.getState().currentAccount||A.a.getState().passwordAccount}}}),L=Object(c.a)(L,{propNames:["backingAsset"]});var J=function(e){function t(){return T(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r.a.Component),q(t,[{key:"render",value:function(){if(null===this.props.asset)return r.a.createElement(x.default,{subtitle:"asset_not_found_subtitle"});var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return r.a.createElement(L,N({},this.props,{backingAsset:e}))}}]),t}();J=Object(c.a)(J,{withDynamic:!0});var M=function(e){function t(){return T(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props.params.symbol.toUpperCase();return r.a.createElement(J,N({},this.props,{asset:e}))}}]),t}();t.default=M}}]);