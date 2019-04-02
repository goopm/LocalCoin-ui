(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{108:function(e,t,a){"use strict";var s=a(84),n=a(6),r=a.n(n),i=a(25),o=a(74),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=r.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:o.a.getAssetList,onLookupAsset:o.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),l(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(a){for(var s=0;s<e.dynamic.length;s++)if(e.dynamic[s].id===a.dynamic_asset_data_id){a.dynamic=e.dynamic[s];break}if(a.bitasset_data_id){a.market_asset=!0;for(s=0;s<e.bitasset_data.length;s++)if(e.bitasset_data[s].id===a.bitasset_data_id){a.bitasset_data=e.bitasset_data[s];break}}else a.market_asset=!1;t.assets=t.assets.set(a.id,a),t.asset_symbol_to_id[a.symbol]=a.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=i.a.createStore(c,"AssetStore")},74:function(e,t,a){"use strict";var s=a(25),n=a(20),r=a(5),i=a(82),o=a(116),l=a(15),c=a(4),u=a(79),m=a.n(u),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();var _={},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return p(e,[{key:"fundPool",value:function(e,t,a,s){var n=i.a.new_transaction(),o=r.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:a.get("id"),amount:s*o}),function(e){return l.a.process_transaction(n,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,a){var s=i.a.new_transaction();return s.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:a}),function(e){return l.a.process_transaction(s,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,a){var s=i.a.new_transaction(),n=r.a.get_asset_precision(t.get("precision"));return s.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:a*n}}),function(e){return l.a.process_transaction(s,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,a,s,n,o,u,p,_){console.log("create asset:",t,"flags:",a,"isBitAsset:",o,"bitasset_opts:",p);var d=i.a.new_transaction(),f=r.a.get_asset_precision(t.precision);m.a.config({DECIMAL_PLACES:t.precision});var h=new m.a(t.max_supply).times(f).toString(),y=new m.a(t.max_market_fee||0).times(f).toString(),b=r.a.get_asset_precision(c.b.getAsset(n.base.asset_id).get("precision")),g={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:h,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:y,issuer_permissions:s,flags:a,core_exchange_rate:{base:{amount:n.base.amount*b,asset_id:n.base.asset_id},quote:{amount:n.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:_,extensions:null},is_prediction_market:u,extensions:null};return o&&(g.bitasset_opts=p),d.add_type_operation("asset_create",g),function(e){return l.a.process_transaction(d,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,a,s,n,o,u,p,_,d,f,h,y,b,g){var v=i.a.new_transaction();if(g){var k=r.a.get_asset_precision(n.get("precision"));m.a.config({DECIMAL_PLACES:n.get("precision")});var E=new m.a(a.max_supply).times(k).toString(),A=new m.a(a.max_market_fee||0).times(k).toString(),w=c.b.getAsset(s.quote.asset_id),x=r.a.get_asset_precision(w.get("precision")),P=c.b.getAsset(s.base.asset_id),L=r.a.get_asset_precision(P.get("precision")),O=new m.a(s.quote.amount).times(x).toString(),j=new m.a(s.base.amount).times(L).toString();console.log("auths:",h);var C={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),extensions:n.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:E,max_market_fee:A,market_fee_percent:100*a.market_fee_percent,description:f,issuer_permissions:u,flags:o,whitelist_authorities:h.whitelist_authorities.toJS(),blacklist_authorities:h.blacklist_authorities.toJS(),whitelist_markets:h.whitelist_markets.toJS(),blacklist_markets:h.blacklist_markets.toJS(),extensions:n.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:O,asset_id:s.quote.asset_id},base:{amount:j,asset_id:s.base.asset_id}}}};e!==t&&t||delete C.new_issuer,v.add_type_operation("asset_update",C)}if(console.log("bitasset_opts:",_,"original_bitasset_opts:",d),p&&(_.feed_lifetime_sec!==d.feed_lifetime_sec||_.minimum_feeds!==d.minimum_feeds||_.force_settlement_delay_sec!==d.force_settlement_delay_sec||_.force_settlement_offset_percent!==d.force_settlement_offset_percent||_.maximum_force_settlement_volume!==d.maximum_force_settlement_volume||_.short_backing_asset!==d.short_backing_asset)){var S={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),issuer:e,new_options:_};v.add_type_operation("asset_update_bitasset",S)}return console.log("feedProducers:",y,"originalFeedProducers:",b),p&&!r.a.are_equal_shallow(y,b)&&v.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:n.get("id"),new_feed_producers:y}),l.a.process_transaction(v,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,a,s,n){o.a.issue_asset(e,t,a,s,n)}},{key:"getAssetList",value:function(e,t){var a=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e+"_"+t;return function(i){if(!_[r]){var o;if(_[r]=!0,i({loading:!0}),o=n.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],a=[];e.forEach(function(e){c.b._updateObject(e,!1),a.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var s=n.Apis.instance().db_api().exec("get_objects",[a]),o=t.length>0?n.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([s,o]).then(function(t){return delete _[r],i({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),i({loading:!1}),delete _[r]}),s){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){a.getAssetList(t+"."+e,10)})}return o}}}},{key:"lookupAsset",value:function(e,t){var a=c.b.getAsset(e);return a?{assets:[a],searchID:t,symbol:e}:function(a){setTimeout(function(){var s=c.b.getAsset(e);s&&a({assets:[s],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,a){var s=i.a.new_transaction();return s.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:a,extensions:[]}),l.a.process_transaction(s,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=s.a.createActions(d)},8025:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(108),i=a(9),o=a(49),l=a.n(o),c=a(2),u=a.n(c),m=a(74),p=a(11),_=a(10),d=a(6),f=a.n(d),h=a(1),y=a.n(h),b=a(45),g=a(46),v=a(3),k=a.n(v),E=a(17),A=a(22),w=a(4),x=a(8),P=a.n(x),L=a(5),O=a(43),j=a(85),C=a(103),S=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var T=new j.a("__graphene__"),I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={foundLast:!1,lastAsset:"",isLoading:!1,assetsFetched:0,activeFilter:"market",filterUIA:e.filterUIA||"",filterMPA:e.filterMPA||"",filterPM:e.filterPM||""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),S(t,[{key:"shouldComponentUpdate",value:function(e,t){return!f.a.is(e.assets,this.props.assets)||!L.a.are_equal_shallow(t,this.state)}},{key:"componentWillMount",value:function(){this._checkAssets(this.props.assets,!0)}},{key:"_checkAssets",value:function(e,t){this.setState({isLoading:!0}),t&&(e=f.a.Map());var a=e.sort(function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0}).last();0===e.size?(m.a.getAssetList.defer("A",101),this.setState({assetsFetched:101})):e.size>=this.state.assetsFetched?(m.a.getAssetList.defer(a.symbol,101),this.setState({assetsFetched:this.state.assetsFetched+101-1})):e.size<this.state.assetsFetched&&(T.set("totalAssets",e.size),this.setState({isLoading:!1}))}},{key:"componentWillReceiveProps",value:function(e){e.assets!==this.props.assets&&this._checkAssets(e.assets)}},{key:"linkToAccount",value:function(e){return e?n.a.createElement(b.a,{account:e}):n.a.createElement("span",null,"-")}},{key:"_toggleFilter",value:function(e){this.setState({activeFilter:e})}},{key:"_onFilter",value:function(e,t){this.setState(F({},e,t.target.value.toUpperCase())),p.a.changeViewSetting(F({},e,t.target.value.toUpperCase()))}},{key:"render",value:function(){var e=this,t=this.props.assets,a=this.state.activeFilter,s=k.a.translate("markets.filter").toUpperCase(),r=w.b.getAsset("1.3.0"),i=void 0,o=void 0,l=void 0;return"user"==a&&(i=t.filter(function(t){return!t.market_asset&&-1!==t.symbol.indexOf(e.state.filterUIA)}).map(function(t){var a=g.a.parseDescription(t.options.description),s=t.symbol+"_"+(a.market?a.market:r?r.get("symbol"):"LLC");return n.a.createElement("tr",{key:t.symbol},n.a.createElement("td",null,n.a.createElement(_.b,{to:"/asset/"+t.symbol},n.a.createElement(C.a,{showIcon:!0,asset:t.id}))),n.a.createElement("td",null,e.linkToAccount(t.issuer)),n.a.createElement("td",null,n.a.createElement(E.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),n.a.createElement("td",null,n.a.createElement(_.b,{className:"btn outline",to:"/market/"+s},n.a.createElement(y.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray()),"market"==a&&(o=t.filter(function(t){return t.bitasset_data&&!t.bitasset_data.is_prediction_market&&-1!==t.symbol.indexOf(e.state.filterMPA)}).map(function(t){var a=g.a.parseDescription(t.options.description),s=t.symbol+"_"+(a.market?a.market:r?r.get("symbol"):"LLC");return n.a.createElement("tr",{key:t.symbol},n.a.createElement("td",null,n.a.createElement(_.b,{to:"/asset/"+t.symbol},n.a.createElement(C.a,{showIcon:!0,asset:t.id}))),n.a.createElement("td",null,e.linkToAccount(t.issuer)),n.a.createElement("td",null,n.a.createElement(E.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),n.a.createElement("td",null,n.a.createElement(_.b,{className:"btn outline",to:"/market/"+s},n.a.createElement(y.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray()),"prediction"==a&&(l=t.filter(function(t){var a=g.a.parseDescription(t.options.description);return t.bitasset_data&&t.bitasset_data.is_prediction_market&&(-1!==t.symbol.toLowerCase().indexOf(e.state.filterPM.toLowerCase())||-1!==a.main.toLowerCase().indexOf(e.state.filterPM.toLowerCase()))}).map(function(e){var t=g.a.parseDescription(e.options.description),a=e.symbol+"_"+(t.market?t.market:r?r.get("symbol"):"LLC");return n.a.createElement("tr",{key:e.id.split(".")[2]},n.a.createElement("td",{style:{width:"80%"}},n.a.createElement("div",{style:{paddingTop:10,fontWeight:"bold"}},n.a.createElement(_.b,{to:"/asset/"+e.symbol},n.a.createElement(A.a,{name:e.symbol})),t.condition?n.a.createElement("span",null," (",t.condition,")"):null),t?n.a.createElement("div",{style:{padding:"10px 20px 5px 0",lineHeight:"18px"}},t.main):null,n.a.createElement("div",{style:{padding:"0 20px 5px 0",lineHeight:"18px"}},n.a.createElement(b.a,{account:e.issuer}),n.a.createElement("span",null," ","-"," ",n.a.createElement(E.a,{amount:e.dynamic.current_supply,asset:e.id})),t.expiry?n.a.createElement("span",null," - ",t.expiry):null)),n.a.createElement("td",{style:{width:"20%"}},n.a.createElement(_.b,{className:"btn outline",to:"/market/"+a},n.a.createElement(y.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?-1:e.key<t.key?1:0}).toArray()),n.a.createElement("div",null,n.a.createElement("div",{className:"header-selector"},n.a.createElement("div",{className:"selector"},n.a.createElement("ul",{className:"markets-list"},n.a.createElement("li",{className:P()("markets-list__item",{active:"market"==a}),onClick:this._toggleFilter.bind(this,"market")},k.a.translate("explorer.assets.market")),n.a.createElement("li",{className:P()("markets-list__item",{active:"user"==a}),onClick:this._toggleFilter.bind(this,"user")},k.a.translate("explorer.assets.user")),n.a.createElement("li",{className:P()("markets-list__item",{active:"prediction"==a}),onClick:this._toggleFilter.bind(this,"prediction")},k.a.translate("explorer.assets.prediction"))))),this.state.isLoading?n.a.createElement(O.a,null):null,"market"==a?n.a.createElement("div",{style:{marginTop:"20px"}},n.a.createElement("div",null,n.a.createElement("input",{style:{maxWidth:"500px"},placeholder:s,type:"text",value:this.state.filterMPA,onChange:this._onFilter.bind(this,"filterMPA")}))):null,"market"==a?n.a.createElement("div",{style:{paddingBottom:20}},n.a.createElement("div",{className:"market-list-wrap"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"explorer.assets.symbol"})),n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"explorer.assets.issuer"})),n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"markets.supply"})),n.a.createElement("th",null))),n.a.createElement("tbody",null,o)))):null,"user"==a?n.a.createElement("div",{style:{marginTop:"20px"}},n.a.createElement("div",null,n.a.createElement("input",{style:{maxWidth:"500px"},placeholder:s,type:"text",value:this.state.filterUIA,onChange:this._onFilter.bind(this,"filterUIA")}))):null,"user"==a?n.a.createElement("div",{style:{paddingBottom:20}},n.a.createElement("div",{className:"market-list-wrap"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"explorer.assets.symbol"})),n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"explorer.assets.issuer"})),n.a.createElement("th",null,n.a.createElement(y.a,{component:"span",content:"markets.supply"})),n.a.createElement("th",null))),n.a.createElement("tbody",null,i)))):null,"prediction"==a?n.a.createElement("div",{style:{marginTop:"20px"}},n.a.createElement("div",null,n.a.createElement("input",{style:{maxWidth:"500px"},placeholder:k.a.translate("markets.search").toUpperCase(),type:"text",value:this.state.filterPM,onChange:this._onFilter.bind(this,"filterPM")}))):null,"prediction"==a?n.a.createElement("div",{style:{paddingBottom:20}},n.a.createElement("div",{className:"market-list-wrap"},n.a.createElement("table",null,n.a.createElement("tbody",null,l)))):null)}}]),t}();I.defaultProps={assets:{}},I.propTypes={assets:u.a.object.isRequired};var M=I,N=a(123),U=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),U(t,[{key:"render",value:function(){var e=n.a.createElement(l.a,{stores:[r.a,i.a],inject:{assets:function(){return r.a.getState().assets},filterMPA:function(){return i.a.getState().viewSettings.get("filterMPA")},filterUIA:function(){return i.a.getState().viewSettings.get("filterUIA")}}},n.a.createElement(M,null));return n.a.createElement("div",{className:"content"},n.a.createElement(N.a,{defaultActiveTab:"explorer.assets.title",defaultContent:e}))}}]),t}();t.default=D}}]);