(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{109:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(5),r=a(16),c=a(88),i=a(14),l=a(23),u=a(1),p=a.n(u),m=a(4),h=a(7),d=a(13),f=a(8),b=a.n(f),g=a(3),v=a.n(g),_=a(12),y=a(61),A=a(178),k=a(350),E=a(2),w=a.n(E),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={inputChanged:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),C(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.account,a=e.accountName;void 0===t&&(t=m.b.getAccount(a)),this.props.onAccountChanged&&t&&this.props.onAccountChanged(t),!this.props.typeahead&&a&&this.onInputChanged(a)}},{key:"componentWillReceiveProps",value:function(e){e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=this.props,t=e.account,a=e.error;return a||!t||this.getInputType(t.get("name"))||(a=v.a.translate("account.errors.invalid")),a}},{key:"getInputType",value:function(e){return e?"#"===e[0]&&s.a.is_object_id("1.2."+e.substring(1))?"id":m.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&m.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onSelected",value:function(e){this.setState({inputChanged:!1});var t=this.getVerifiedAccountName(e),a=m.b.getAccount(t);a&&(this.props.onChange(t),this.props.onAccountChanged(a))}},{key:"onInputChanged",value:function(e){var t=this.props,a=t.onChange,n=t.onAccountChanged,o=t.accountName,s=t.typeahead;this.setState({inputChanged:!0});var r=this.getVerifiedAccountName(e),c=m.b.getAccount(r);a&&r!==o&&a(r),s||(a&&a(r),n&&n(c))}},{key:"getVerifiedAccountName",value:function(e){var t=this.props.allowUppercase,a=null;a="string"==typeof e?e:e&&e.target?e.target.value.trim():"",t||(a=a.toLowerCase());var n=a.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);return n&&(a=n[1]),a}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"_onAddContact",value:function(){l.a.addAccountContact(this.props.accountName)}},{key:"_onRemoveContact",value:function(){l.a.removeAccountContact(this.props.accountName)}},{key:"onAction",value:function(e){var t=this.props,a=t.onAction,n=t.disableActionButton,o=t.account,s=t.accountName;e.preventDefault(),this.getError()||!a||n||(o?a(o):"pubkey"===this.getInputType(s)&&a(s))}},{key:"render",value:function(){var e=this.props,t=e.accountName,a=e.account,n=e.allowPubKey,s=e.typeahead,r=e.disableActionButton,i=e.contacts,l=e.myActiveAccounts,u=(e.noPlaceHolder,e.useHR),h=e.labelClass,d=e.reserveErrorSpace,f=this.getInputType(t),g=[],E=this.getError(),w=l;w=w.concat(i);var C=void 0;a&&(a.isKnownScammer=y.a.isKnownScammer(a.get("name")),a.accountType=this.getInputType(a.get("name")),a.accountStatus=m.b.getAccountMemberStatus(a),a.statusText=a.isKnownScammer?v.a.translate("account.member.suspected_scammer"):v.a.translate("account.member."+a.accountStatus),C="name"===a.accountType?"#"+a.get("id").substring(4):"id"===a.accountType?a.get("name"):null),s?n&&"pubkey"===f||E||!t||a||(E=v.a.translate("account.errors.unknown")):!a&&t&&"pubkey"!==f&&(E=v.a.translate("account.errors.unknown")),n&&"pubkey"===f&&(C="Public Key"),a&&w&&(a.isFavorite=l.has(a.get("name"))||i.has(a.get("name"))),s&&w&&w.map(function(e){var t=m.b.getAccount(e),a=m.b.getAccountMemberStatus(t),n=y.a.isKnownScammer(e)?"account.member.suspected_scammer":"account.member."+a;g.push({id:e,label:e,status:v.a.translate(n),className:y.a.isKnownScammer(e)?"negative":"positive"})});var N=!!t&&g.reduce(function(e,a){return e||a.label===t},!1);if(t&&!N&&this.state.inputChanged){var I=m.b.getAccount(t),O=I?m.b.getAccountMemberStatus(I):null,T=I?y.a.isKnownScammer(I.get("name"))?v.a.translate("account.member.suspected_scammer"):v.a.translate("account.member."+O):v.a.translate("account.errors.unknown");g.push({id:this.props.accountName,label:this.props.accountName,status:T,className:y.a.isKnownScammer(t)||!I?"negative":null,disabled:!I})}g.sort(function(e,t){return e.label>t.label?1:-1});var x=this.props.account?l.has(a.get("name"))||i.has(a.get("name"))?o.a.createElement("span",{className:"tooltip green","data-place":"top","data-tip":v.a.translate("tooltip.follow_user"),onClick:this._onRemoveContact.bind(this)},o.a.createElement(_.a,{style:{position:"absolute",top:"-0.15em",right:".2em"},name:"user",title:"icons.user.following"})):o.a.createElement("span",{className:"tooltip","data-place":"top","data-tip":v.a.translate("tooltip.follow_user_add"),onClick:this._onAddContact.bind(this)},o.a.createElement(_.a,{style:{position:"absolute",top:"-0.05em",right:".2em"},name:"plus-circle",title:"icons.plus_circle.add_contact"})):null,j=b()("button btn large outline",{disabled:!(a||"pubkey"===f)||E||r});return o.a.createElement("div",{className:"account-selector",style:this.props.style},o.a.createElement("div",{className:"content-area"},this.props.label?o.a.createElement("div",{className:"header-area"+(this.props.hideImage?" no-margin":"")},o.a.createElement("label",{className:b()("right-label",a&&a.isFavorite?"positive":null,a&&a.isKnownScammer?"negative":null)},o.a.createElement("span",{style:{paddingRight:"1.5rem"}},a&&a.statusText," ",!!C&&C),x),o.a.createElement(p.a,{className:"left-label "+(h||""),component:"label",content:this.props.label}),u&&o.a.createElement("hr",null)):null,o.a.createElement("div",{className:"input-area"},o.a.createElement("div",{className:"inline-label input-wrapper"},a&&"pubkey"===a.accountType?o.a.createElement("div",{className:"account-image"},o.a.createElement(_.a,{name:"key",title:"icons.key",size:"4x"})):this.props.hideImage?null:o.a.createElement(c.a,{size:{height:this.props.size||80,width:this.props.size||80},account:a?a.get("name"):null,custom_image:null}),void 0!==this.props.typeahead?o.a.createElement(k.a,S({items:g,style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",defaultValue:this.props.accountName||"",placeholder:this.props.placeholder||v.a.translate("account.name"),ref:"user_input",onSelect:this.onSelected.bind(this),onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex,inputProps:{placeholder:"Search for an account"}},this.props.typeaheadOptions||{})):o.a.createElement("input",{style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||v.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.dropDownContent?o.a.createElement("div",{className:"form-label select floating-dropdown"},o.a.createElement(A.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?o.a.createElement("button",{className:j,style:{marginLeft:4},onClick:this.onAction.bind(this)},o.a.createElement(p.a,{content:this.props.action_label})):null)),E||d?o.a.createElement("div",{className:this.props.hideImage?"has-error":"error-area",style:{marginTop:"1rem",position:"relative"}},o.a.createElement("span",null,E)):null))}}]),t}();N.propTypes={label:w.a.string,error:w.a.element,placeholder:w.a.string,onChange:w.a.func,onAccountChanged:w.a.func,onAction:w.a.func,accountName:w.a.string,account:h.a.ChainAccount,tabIndex:w.a.number,disableActionButton:w.a.bool,allowUppercase:w.a.bool,typeahead:w.a.array},N.defaultProps={autosubscribe:!1},N=Object(d.a)(N),N=Object(r.connect)(N,{listenTo:function(){return[i.a]},getProps:function(){return{myActiveAccounts:i.a.getState().myActiveAccounts,contacts:i.a.getState().accountContacts}}}),t.a=N},8001:function(e,t,a){"use strict";a.r(t),function(e){var n=a(394),o=a(93),s=a(0),r=a.n(s),c=a(71),i=a(23),l=a(1),u=a.n(l),p=a(112),m=a(109),h=a(14),d=a(50),f=a(5),b=a(3),g=a.n(b),v=a(33),_=a(183),y=a(6),A=a.n(y),k=a(4),E=a(16),w=a(41),S=a(8),C=a.n(S),N=a(20),I=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var O=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e)),n=a.getInitialState(),s=t.props.location.query;s.from&&(n.from_name=s.from,k.b.getAccount(s.from)),s.to&&(n.to_name=s.to,k.b.getAccount(s.to)),s.amount&&(n.amount=s.amount),s.asset&&(n.asset_id=s.asset,n.asset=k.b.getAsset(s.asset)),s.memo&&(n.memo=s.memo);var r=h.a.getState().currentAccount;return n.from_name||(n.from_name=r),t.state=n,t.onTrxIncluded=t.onTrxIncluded.bind(t),t._updateFee=Object(o.a)(t._updateFee.bind(t),250),t._checkFeeStatus=t._checkFeeStatus.bind(t),t._checkBalance=t._checkBalance.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r.a.Component),I(a,[{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"shouldComponentUpdate",value:function(e,t){var a=this._getAvailableAssets().asset_types,n=this._getAvailableAssets(t).asset_types;if(1===n.length){var o=k.b.getAsset(n[0]);1!==a.length&&this.onAmountChanged({amount:t.amount,asset:o}),n[0]!==this.state.fee_asset_id&&o&&this.state.fee_asset_id!==n[0]&&this.setState({feeAsset:o,fee_asset_id:n[0]})}return!0}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.currentAccount!==this.state.from_name&&e.currentAccount!==this.props.currentAccount&&this.setState({from_name:e.currentAccount,from_account:k.b.getAccount(e.currentAccount),feeStatus:{},fee_asset_id:"1.3.0",feeAmount:new N.a({amount:0})},function(){t._updateFee(),t._checkFeeStatus(k.b.getAccount(e.currentAccount))})}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,a=e.amount,n=e.from_account,o=e.asset;if(o&&n){var s=n.getIn(["balances",o.get("id")]),r=n.getIn(["balances",t.asset_id]);if(o&&n){if(!s)return this.setState({balanceError:!0});var c=k.b.getObject(s),i=r?k.b.getObject(r):null;if(i&&0!==i.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),c&&t){var l=Object(w.a)(a,o,t,c);null!==l&&this.setState({balanceError:!l})}}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.from_account;if(t){var a=Object.keys(t.get("balances").toJS()).sort(f.a.sortID),n={},o=[];a.forEach(function(a){o.push(Object(w.b)({accountID:t.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(o).then(function(t){a.forEach(function(e,a){n[e]=t[a]}),f.a.are_equal_shallow(e.state.feeStatus,n)||e.setState({feeStatus:n}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,a=t.fee_asset_id,n=t.from_account,o=t.asset_id,s=this._getAvailableAssets(t).fee_asset_types;if(1===s.length&&s[0]!==a&&(a=s[0]),!n)return null;Object(w.b)({accountID:n.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var a=t.fee,s=t.hasBalance,r=t.hasPoolBalance;return Object(w.d)(n,a).then(function(t){return t?e.setState({fee_asset_id:o},e._updateFee):e.setState({feeAmount:a,fee_asset_id:a.asset_id,hasBalance:s,hasPoolBalance:r,error:!s||!r})})})}},{key:"fromChanged",value:function(e){e||this.setState({from_account:null}),this.setState({from_name:e,error:null,propose:!1,propose_account:""})}},{key:"toChanged",value:function(e){this.setState({to_name:e,error:null})}},{key:"onFromAccountChanged",value:function(e){var t=this;this.setState({from_account:e,error:null},function(){t._updateFee(),t._checkFeeStatus()})}},{key:"onToAccountChanged",value:function(e){this.setState({to_account:e,error:null})}},{key:"onAmountChanged",value:function(e){var t=e.amount,a=e.asset;a&&this.setState({amount:t,asset:a,asset_id:a.get("id"),error:null},this._checkBalance)}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value},this._updateFee)}},{key:"onTrxIncluded",value:function(e){e.included&&e.broadcasted_transaction?(v.a.unlisten(this.onTrxIncluded),v.a.reset()):e.closed&&(v.a.unlisten(this.onTrxIncluded),v.a.reset())}},{key:"onPropose",value:function(e,t){t.preventDefault(),this.setState({propose:e,propose_account:null})}},{key:"onProposeAccount",value:function(e){this.setState({propose_account:e})}},{key:"resetForm",value:function(){this.setState({memo:"",to_name:"",amount:""})}},{key:"onSubmit",value:function(t){var a=this;t.preventDefault(),this.setState({error:null});var n=this.state,o=n.asset,s=n.amount,r=new N.a({real:s,asset_id:o.get("id"),precision:o.get("precision")});i.a.transfer(this.state.from_account.get("id"),this.state.to_account.get("id"),r.getAmount(),o.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,this.state.propose?this.state.propose_account:null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0").then(function(){a.resetForm.call(a),v.a.unlisten(a.onTrxIncluded),v.a.listen(a.onTrxIncluded)}).catch(function(e){var t=e.message?e.message.split("\n")[1]||e.message:null;console.log("error: ",e,t),a.setState({error:t})})}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"_setTotal",value:function(e,t){var a=this.state.feeAmount,n=k.b.getObject(t),o=k.b.getObject(e),s=new N.a({amount:n.get("balance"),asset_id:o.get("id"),precision:o.get("precision")});n&&(a.asset_id===s.asset_id&&s.minus(a),this.setState({amount:s.getAmount({real:!0})},this._checkBalance))}},{key:"_getAvailableAssets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=this.state.feeStatus;var a=e.from_account,n=e.from_error,o=[],s=[];if(!a||!a.get("balances")||n)return{asset_types:o,fee_asset_types:s};var r=e.from_account.get("balances").toJS();for(var c in o=Object.keys(r).sort(f.a.sortID),s=Object.keys(r).sort(f.a.sortID),r){var i=k.b.getObject(r[c]);i&&0===i.get("balance")&&(o.splice(o.indexOf(c),1),-1!==s.indexOf(c)&&s.splice(s.indexOf(c),1))}return{asset_types:o,fee_asset_types:s=s.filter(function(e){return(void 0===t[a=e]||t[a]&&t[a].hasPoolBalance)&&function(e){return void 0===t[e]||t[e]&&t[e].hasBalance}(e);var a})}}},{key:"render",value:function(){var e=null,t=this.state,a=t.propose,o=t.from_account,s=t.to_account,i=t.asset,l=t.asset_id,f=t.propose_account,b=t.feeAmount,v=t.amount,y=t.error,E=t.to_name,w=t.from_name,S=t.memo,N=t.feeAsset,I=t.fee_asset_id,O=t.balanceError,T=h.a.isMyAccount(o)||w===this.props.passwordAccount;!o||T||a||(e=r.a.createElement("span",null,g.a.translate("account.errors.not_yours")," (",r.a.createElement("a",{onClick:this.onPropose.bind(this,!0)},g.a.translate("propose")),")"));var x=this._getAvailableAssets(),j=x.asset_types,P=x.fee_asset_types,F=null,D=this.state.feeAmount.getAmount({real:!0});if(o&&o.get("balances")&&!e){var B=o.get("balances").toJS();if(1===j.length&&(i=k.b.getAsset(j[0])),j.length>0){var K=i?i.get("id"):j[0],R=N?N.get("id"):"1.3.0";F=r.a.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,K,B[K],D,R)},r.a.createElement(u.a,{component:"span",content:"transfer.available"}),":"," ",r.a.createElement(c.a,{balance:B[K]}))}else F="No funds"}var M=a&&!f,V=parseFloat(String.prototype.replace.call(v,/,/g,"")),z=V&&!Object(n.a)(V),J=s&&s.get("name")===E,L=!o||!J||!z||!i||e||M||O,H=A.a.Set();H=H.add(o);var U=1;return r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-block shrink vertical medium-horizontal",style:{paddingTop:"2rem"}},r.a.createElement("form",{style:{paddingBottom:20,overflow:"visible"},className:"grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",onSubmit:this.onSubmit.bind(this),noValidate:!0},r.a.createElement(u.a,{content:"transfer.header",component:"h2"}),r.a.createElement("div",{className:"content-block"},r.a.createElement(m.a,{label:"transfer.from",ref:"from",accountName:w,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:o,size:60,error:e,typeahead:!0,tabIndex:U++})),r.a.createElement("div",{className:"content-block"},r.a.createElement(m.a,{label:"transfer.to",ref:"to",accountName:E,onChange:this.toChanged.bind(this),onAccountChanged:this.onToAccountChanged.bind(this),account:s,size:60,tabIndex:U++,typeahead:!0})),r.a.createElement("div",{className:"content-block transfer-input"},r.a.createElement(d.a,{label:"transfer.amount",amount:v,onChange:this.onAmountChanged.bind(this),asset:j.length>0&&i?i.get("id"):l||j[0],assets:j,display_balance:F,tabIndex:U++}),this.state.balanceError?r.a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},r.a.createElement(u.a,{content:"transfer.errors.insufficient"})):null),r.a.createElement("div",{className:"content-block transfer-input"},S&&S.length?r.a.createElement("label",{className:"right-label"},S.length):null,r.a.createElement(u.a,{className:"left-label tooltip",component:"label",content:"transfer.memo","data-place":"top","data-tip":g.a.translate("tooltip.memo_tip")}),r.a.createElement("textarea",{style:{marginBottom:0},rows:"3",value:S,tabIndex:U++,onChange:this.onMemoChanged.bind(this)}),this.state.propose?r.a.createElement("div",{className:"error-area",style:{position:"absolute"}},r.a.createElement(u.a,{content:"transfer.warn_name_unable_read_memo",name:this.state.from_name})):null),r.a.createElement("div",{className:"content-block transfer-input fee-row"+(this.state.propose?" proposal":"")},r.a.createElement(d.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:D,onChange:this.onFeeChanged.bind(this),asset:P.length&&b?b.asset_id:1===P.length?P[0]:I||P[0],assets:P,tabIndex:U++,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),a?r.a.createElement("button",{className:C()("button float-right no-margin",{disabled:L}),type:"submit",value:"Submit",tabIndex:U++},r.a.createElement(u.a,{component:"span",content:"propose"})):r.a.createElement("button",{className:C()("button float-right no-margin",{disabled:L}),type:"submit",value:"Submit",tabIndex:U++},r.a.createElement(u.a,{component:"span",content:"transfer.send"}))),a?r.a.createElement("div",{className:"full-width-content form-group transfer-input"},r.a.createElement("label",{className:"left-label"},r.a.createElement(u.a,{content:"account.propose_from"})),r.a.createElement(p.a,{account_names:h.a.getMyAccounts(),onChange:this.onProposeAccount.bind(this),tabIndex:U++})):null,y?r.a.createElement("div",{className:"content-block has-error"},y):null,r.a.createElement("div",null,a?r.a.createElement("span",null,r.a.createElement("button",{className:" button",onClick:this.onPropose.bind(this,!1),tabIndex:U++},r.a.createElement(u.a,{component:"span",content:"cancel"}))):null)),r.a.createElement("div",{className:"grid-content small-12 medium-6 large-4 large-offset-1 right-column"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement(_.a,{accountsList:H,limit:25,compactView:!0,filter:"transfer",fullHeight:!0}))),r.a.createElement("div",{className:"grid-content medium-6 large-4"})))}}],[{key:"getInitialState",value:function(){return{from_name:"",to_name:"",from_account:null,to_account:null,amount:"",asset_id:null,asset:null,memo:"",error:null,propose:!1,propose_account:"",feeAsset:null,fee_asset_id:"1.3.0",feeAmount:new N.a({amount:0}),feeStatus:{}}}}]),a}();t.default=Object(E.connect)(O,{listenTo:function(){return[h.a]},getProps:function(){return{currentAccount:h.a.getState().currentAccount,passwordAccount:h.a.getState().passwordAccount,contactsList:h.a.getState().accountContacts}}})}.call(this,a(31).Buffer)}}]);