(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{5210:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=(n(1),n(35)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={slideIndex:1,isWheelEnd:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),s(t,[{key:"componentWillMount",value:function(){this._scrollReady()}},{key:"componentDidMount",value:function(){this._showSlides(this.state.slideIndex)}},{key:"_plusSlides",value:function(e){this._showSlides(this.state.slideIndex+=e)}},{key:"_currentSlide",value:function(e){this._showSlides(this.state.slideIndex=e)}},{key:"_showSlides",value:function(e){var t=void 0,n=document.getElementsByClassName("otc-slider-item"),a=document.getElementsByClassName("otc-slider__dots--dot");for(e>n.length&&(this.setState({slideIndex:1}),e=1),e<1&&(this.setState({slideIndex:n.length}),e=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active",""),n[t].className=n[t].className.replace(" active","");n[e-1].style.display="block",n[e-1].className+=" active",a[e-1].className+=" active"}},{key:"_scrollReady",value:function(){var e=this,t=window;if(t.addEventListener){var n=void 0,a=void 0;t.addEventListener("touchstart",function(e){e.preventDefault();var t=e.changedTouches[0];n=t.pageY}),t.addEventListener("touchmove",function(e){e.preventDefault()}),t.addEventListener("touchend",function(t){t.preventDefault();var i=t.changedTouches[0];(a=i.pageY-n)>50?e._plusSlides(-1):a<-50&&e._plusSlides(1)}),"onwheel"in document?t.addEventListener("wheel",function(t){e._onWheel(t)}):"onmousewheel"in document?t.addEventListener("mousewheel",function(t){e._onWheel(t)}):t.addEventListener("MozMousePixelScroll",function(t){e._onWheel(t)})}else t.attachEvent("onmousewheel",function(t){e._onWheel(t)})}},{key:"_onWheel",value:function(e){var t=this;if(t.state.isWheelEnd){var n=(e=e||window.event).deltaY;e.wheelDelta&&(n=-e.wheelDelta),n>0?t._plusSlides(1):t._plusSlides(-1),t.setState({isWheelEnd:!1}),setTimeout(function(){t.setState({isWheelEnd:!0})},500)}}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-otc",style:{backgroundImage:"url("+l.otcBackground+")"}},i.a.createElement("div",{className:"page-otc-container"},i.a.createElement("div",{className:"otc-slider"},i.a.createElement("div",{className:"otc-slider-item fade"},i.a.createElement("img",{src:l.slide1})),i.a.createElement("div",{className:"otc-slider-item fade"},i.a.createElement("img",{src:l.slide2}),i.a.createElement("div",{className:"slide-tooltip"},i.a.createElement("img",{src:l.slide2Tooltip}))),i.a.createElement("div",{className:"otc-slider-item fade"},i.a.createElement("img",{src:l.slide3}),i.a.createElement("div",{className:"slide-tooltip"},i.a.createElement("img",{src:l.slide3Tooltip}))),i.a.createElement("div",{className:"otc-slider-item fade"},i.a.createElement("img",{src:l.slide4}),i.a.createElement("div",{className:"slide-tooltip"},i.a.createElement("img",{src:l.slide4Tooltip})))),i.a.createElement("div",{className:"otc-slider__navigation"},i.a.createElement("div",{className:"otc-slider__dots"},i.a.createElement("div",{className:"otc-slider__dots--dot",onClick:this._currentSlide.bind(this,1)},"1"),i.a.createElement("div",{className:"otc-slider__dots--dot",onClick:this._currentSlide.bind(this,2)},"2"),i.a.createElement("div",{className:"otc-slider__dots--dot",onClick:this._currentSlide.bind(this,3)},"3"),i.a.createElement("div",{className:"otc-slider__dots--dot",onClick:this._currentSlide.bind(this,4)},"4")),i.a.createElement("div",{className:"otc-slider__tooltip"},i.a.createElement("div",{className:"tooltip__desc"},"Scroll down"),i.a.createElement("div",{className:"tooltip__img"},i.a.createElement("img",{src:l.sliderArrow}))))))}}]),t}();t.default=o}}]);