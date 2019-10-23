// require jQuery JavaScript Library v2.1.0

(function($) {

/* ============================================================
 * defineFoundationVariable
 * ============================================================ */

/* ------------------------------------------------------------
 * [ userAgent ] http://www.useragentstring.com/pages/useragentstring.php
 * ------------------------------------------------------------ */
var ua                   = window.navigator.userAgent;
var appVer               = window.navigator.appVersion;

//PC
var isIE                 = ua.indexOf('MSIE') != -1 || ua.indexOf('Trident') != -1;
var isIE6                = isIE && appVer.indexOf('MSIE 6') != -1;
var isIE7                = isIE && appVer.indexOf('MSIE 7.') != -1;
var isIE8                = isIE && ua.indexOf('Trident/4.') != -1  || appVer.indexOf('MSIE 8.') != -1;
var isIE9                = isIE && ua.indexOf('Trident/5.') != -1;
var isIE10               = isIE && ua.indexOf('Trident/6.') != -1;
var isIE11               = ua.indexOf('Trident/7.') != -1;

var isFirefox            = ua.indexOf('Firefox') != -1;
var isChrome             = ua.indexOf('Chrome') != -1;
var isSafari             = ua.indexOf('Safari') != -1;

//Mobile (smartphone + tablet)
var isMobileSafari       = ua.match(/iPhone|iPad|iPod/i) ? true : false;
var isMobileSafariTypeT  = ua.match(/ipad/i) ? true : false;
var isMobileSafariTypeS  = ua.match(/iphone|ipod/i) ? true : false;
var isAndroid            = ua.indexOf('Android') != -1;
var isMobileAndroidTypeT = isAndroid && ua.indexOf('Mobile') == -1;
var isMobileAndroidTypeS = isAndroid && ua.indexOf('Mobile') != -1;
var isAndroidChrome      = isChrome && isAndroid;
var isAndroidFirefox     = isFirefox && isAndroid;
var isMobileFirefox      = isFirefox && ua.indexOf('Mobile') != -1;
var isTabletFirefox      = isFirefox && ua.indexOf('Tablet') != -1;

//PC or Mobile
var isTablet             = isMobileSafariTypeT || isMobileAndroidTypeT || isTabletFirefox;
var isSmartPhone         = isMobileSafariTypeS || isMobileAndroidTypeS || isMobileFirefox;
var isMobile             = isTablet || isSmartPhone || isAndroidChrome || isAndroidFirefox;
var isPC                 = !isMobile;

/* ------------------------------------------------------------
 * [ Location ]
 * ------------------------------------------------------------ */
var lHref      = location.href;     // http://template.god:80/dummy/html5.html?demo1&a=demo2#demo3,b=demo4
var lProtocol  = location.protocol; // http:
var lHost      = location.host;     // template.god:80
var lHostname  = location.hostname; // template.god
var lPort      = location.port;     // 80
var lPath      = location.pathname; // /dummy/html5.html
var lSrch      = location.search;   // ?demo1&a=demo2
var lHash      = location.hash;     // #demo3,b=demo4


//ã‚¯ã‚¨ãƒªã‚¹ãƒˆãƒªãƒ³ã‚°ä¿ç®¡
var QUERY = {};
(function() {
  QUERY = {};
  var _queryString = location.search.split('?').join('');
  if (_queryString.length < 2) return;
  
  var array = _queryString.split('&');
  var thisItem = [];
  for (var i = 0, len = array.length; i < len; i++) {
	thisItem = array[i].split('=');
	if (!thisItem || thisItem.length < 1) {
	  continue;
	}
	QUERY[thisItem[0]] = thisItem[1];
  }
})();


/* ============================================================
 * Execute JavaScript when the DOM is fully loaded.
 * ============================================================ */
$(document).on('ready', function() {


smoothScroll({
  mt        : 0,
  btn       : 'a[href^=\\#]',     // ãƒœã‚¿ãƒ³
  body      : 'html,body',      // ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã™ã‚‹è¦ç´ 
  easing    : 'easeOutExpo',
  speed     : 1000,             // ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³æ™‚é–“(ãƒŸãƒªç§’)
  pageTopID : '#l-document',      // ãƒšãƒ¼ã‚¸ãƒˆãƒƒãƒ—IDã¸ã®ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«æ™‚ã¯URLãƒãƒƒã‚·ãƒ¥ã‚’å¤‰æ›´ã—ãªã„
});

$('.js-menu').menuInit({
	menuParentClass			: '.js-menu-parent',
	menuContentClass		: '.js-menu-content',
	triggerClass			: '.js-menu-trigger',
	collapse				: false,
	animateSpeed			: 300,
	sync					: true,
	openFirstMenu			: false
});


selectDropdown();

//Custom selected color
var select = $('.box-select select');
var selectOpt = select.find('option:selected');
selectOpt.each(function(){
	if(selectOpt.val() != '')
		$(this).parent().addClass('selected');
});
select.on('change', function() {
	if ($(this).val() == '') {
		$(this).removeClass('selected');
	} else {
		$(this).addClass('selected');
	}
});



$('.js_fullbg').jsFullBackground();
});//End -> ready method

/* ------------------------------------------------------------
   6. ç”»åƒãªã©å«ã‚ã¦ãƒšãƒ¼ã‚¸èª­è¾¼ã¿å®Œäº†å¾Œã«å®Ÿè¡Œ(Execute JavaScript when the Window Object is fully loaded.)
 * ------------------------------------------------------------ */
$(window).on('load', function() {
	
});//End

/* ============================================================
 * Plugin
 * ============================================================ */

/* ------------------------------------------------------------
 * [ historyBack ]
 * ------------------------------------------------------------
 *  add "history.back" method to any object.
 * ------------------------------------------------------------ */
$.fn.historyBack = function() {
  return this.each(function() {
	$(this).on('click', function() {
	  history.back();
	});
  });
};



/* ------------------------------------------------------------
 * [ smoothScroll ]
 * ------------------------------------------------------------ */
function smoothScroll(opt) {
  var opt           = opt || {};
  var mt            = opt.mt        === undefined ? 0 : opt.mt;
  var $btn          = opt.btn       === undefined ? $('a[href*=\\#]') : $(opt.btn);
  var $body         = opt.body      === undefined ? $('html, body') : $(opt.body);
  var easing        = opt.ease      === undefined ? 'easeOutExpo' : opt.ease;
  var animationTime = opt.speed     === undefined ? 1000 : opt.speed;
  var pageTopID     = opt.pageTopID === undefined ? '#l-document' : opt.pageTopID;
  var $frameTop     = $('#l-document');
  function runScroll(hash, noHash) {
	var $target = opt.target === undefined ? $(hash) : $(opt.target);
	if (hash == pageTopID) {
	  marginTop = 0
	} else {
	  marginTop = mt + $frameTop.position().top;
	}
	if ( $target.length ) {
	  var position = $target.offset().top - marginTop; // è¡Œãå…ˆã¾ã§ã®ç”»é¢ä¸Šã®é«˜ã•ã®æ•°å€¤
	  $body.stop().animate({scrollTop:position}, animationTime, easing);
	  if (!noHash && hash !== 'undefined' && hash != pageTopID) {
		location.hash = hash;
	  }
	}
  }
  $btn.not('.noScroll').on('click', function() {
	if ($(this).hasClass('noHash')) {
	  var noHash = true;
	} else {
	  var noHash = false;
	}
	var hash = this.hash;
	runScroll(hash, noHash);
	return false;
  });
  if (lHash.match(/[^#scrollTo-]/)) {
	var hash = '#' + lHash.slice(10);
	setTimeout(function() {
	  runScroll(hash);
	}, 300);
  }
  $(document).on('mousewheel', function() { $body.stop(); });
  $(document).on('touchmove',  function() { $body.stop(); });
}


/* ------------------------------------------------------------
 * [ js_fullbg ]
 * ------------------------------------------------------------ */
$.fn.jsFullBackground = function(config){
  var defaults = {
	position : 'center center',
	bgsize: 'cover',
	repeat: 'no-repeat'
  };
  var config = $.extend({}, defaults, config);
  
  return this.each(function() {
	var $this = $(this);
	var $img = $this.children('img').first();
	if (!$img.length) return false;
	var src = $img.attr('src');
	var position = config.position;
	var bgsize = config.bgsize;
	var repeat = config.repeat;
	if ($this.data('position')) {
	  position = $this.data('position');
	}
	if ($this.data('bgsize')) {
	  bgsize = $this.data('bgsize');
	}
	if ($this.data('repeat')) {
	  repeat = $this.data('repeat');
	}
	$this.css({
	  backgroundSize: bgsize,
	  backgroundImage: 'url(' + src + ')',
	  backgroundRepeat: repeat,
	  backgroundPosition: position
	});
	$img.hide();
  });
}

/* ------------------------------------------------------------
* [ menu ]
* ------------------------------------------------------------ */
$.fn.menuInit = function(opt) {
	var opt       = opt || {},
	menuParentClass   = opt.menuParentClass === undefined ? '.js-menu-parent' : opt.menuParentClass, //Wrapper class of each accordion
	menuContentClass  = opt.menuContentClass  === undefined ? '.js-menu-content' : opt.menuContentClass, //Content class of subcontent
	triggerClass    = opt.triggerClass  === undefined ? '.js-menu-trigger' : opt.triggerClass, //Trigger class
	collapse      = opt.collapse  === undefined ? true : opt.collapse, //Collapse or not
	animateSpeed    = opt.animateSpeed  === undefined ? 300 : opt.animateSpeed, //Animate speed,  default: 300ms
	sync        = opt.sync  === undefined ? true : opt.sync, //Toggle at same time or not
	toggleIcon      = opt.toggleIcon  === undefined ? '.js-toggle-icn' : opt.toggleIcon, //Change icon
	openIcon      = opt.openIcon  === undefined ? '' : opt.openIcon, //Change icon with specified class
	closeIcon       = opt.closeIcon === undefined ? '' : opt.closeIcon, // Name of close class
	openFirstMenu     = opt.openFirstMenu === undefined ? false : opt.openFirstMenu; // open on first menu item

	function slideMenu($menuElement, forceOpen){
		var href      = $menuElement.attr("href") == undefined ? $menuElement.next(menuContentClass) : $menuElement.attr("href");
		var $href     = $(href);
		var $menuParent   = $href.closest(menuParentClass);
		var $trigger    = $menuElement.closest(triggerClass).siblings(triggerClass);
		if($trigger.length == 0) $trigger= $menuParent.find(triggerClass);

		if (!$href.hasClass('is-opened') || forceOpen === true){
			if(collapse) {
				if(sync == false){
					$menuParent.find(menuContentClass).not(href).slideUp(animateSpeed, function(){
					$href.slideDown(animateSpeed);
				}).removeClass('is-opened');
				} else{
					$menuParent.find(menuContentClass).not(href).slideUp(animateSpeed).removeClass('is-opened');
					$href.slideDown(animateSpeed);
				}
				$trigger.removeClass('is-active');
				$menuParent.find(toggleIcon).addClass(closeIcon).removeClass(openIcon);
			} else{
				$href.slideDown(animateSpeed);
			}
			$href.addClass('is-opened');
			$menuElement.find(toggleIcon).addClass(openIcon).removeClass(closeIcon);
			$menuElement.closest(triggerClass).addClass('is-active');
		} else {
			$href.slideUp(animateSpeed);
			$href.removeClass('is-opened');
			$menuElement.closest(triggerClass).removeClass('is-active');
			$menuElement.find(toggleIcon).addClass(closeIcon).removeClass(openIcon);
		}
	}
	//open the first menu item
	var $menuParent = $(menuParentClass);
	// var $menuContentClass = $(menuContentClass);
	// $menuContentClass.hide();
	if(openFirstMenu){
	$menuParent.each(function(){
		slideMenu($(this).find(triggerClass).first(), true);
	})
	}
	return this.each(function() {
		var $menuElement = $(this);
		//Open when loaded if set class .is-active to trigger button
		if($menuElement.hasClass('is-active')){
			slideMenu($menuElement, true);
		}
		//click event
		$menuElement.on('click', function(e) {
			e.preventDefault();
			if(!$(this).hasClass('is-disable')){
				slideMenu($(this));
			}
			return false;
		});
	});
};

function selectDropdown(){
	$(".box-select-dropdown__select li").click(function() {
		$(this).addClass("is-selected");
		$(this).siblings().removeClass("is-selected");
		var text = $(this).text();
		var oriText = $('.box-select-dropdown__title').val('data-title');
		$('.box-select-dropdown__title').html(text);
		// if($('.box-select-dropdown__select li.is-selected').length == 0){
		// 	$('.box-select-dropdown__title').html(oriText);
		// }
		$(this).parent('.box-select-dropdown__select').removeClass('is-opened');
	});


	$('.box-select-dropdown__title').on('click',function(){
		$(this).next('.box-select-dropdown__select').toggleClass('is-opened');
		$(this).toggleClass('is-active');
	});

}


})(jQuery);



/* ------------------------------------------------------------
 * [ jQuery Easing v1.3 ] http://gsgd.co.uk/sandbox/jquery/easing/
 * ------------------------------------------------------------
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 * ------------------------------------------------------------ */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if (t==0)return b;if (t==d)return b+c;if ((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if ((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d/2)==2)return b+c;if (!p)p=d*(.3*1.5);if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if (t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;if ((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if ((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if (t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if (t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if (t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});


/* ------------------------------------------------------------
 * [ jQuery Cookie Plugin v1.4.0 ]
 * ------------------------------------------------------------
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 * ------------------------------------------------------------ */
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}})

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,a=function(t){return parseFloat(t)||0},n=function(e){var o=null,n=[];return t(e).each(function(){var e=t(this),i=e.offset().top-a(e.css("margin-top")),r=n.length>0?n[n.length-1]:null;null===r?n.push(e):Math.floor(Math.abs(o-i))<=1?n[n.length-1]=r.add(e):n.push(e),o=i}),n},i=function(e){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var a=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(a)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=n,r._parse=a,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=n(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var n=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&n.length<=1)return void n.css(s.property,"");n.each(function(){var e=t(this),o=e.attr("style"),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block");var n={display:a};n[s.property]="",e.css(n),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}n.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=a(e.css("border-top-width"))+a(e.css("border-bottom-width")),o+=a(e.css("padding-top"))+a(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),a=o.attr("data-mh")||o.attr("data-match-height");e[a]=a in e?e[a].add(o):o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(a,n){if(n&&"resize"===n.type){var i=t(window).width();if(i===e)return;e=i}a?-1===o&&(o=setTimeout(function(){s(n),o=-1},r._throttle)):s(n)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
$(function() {
    $('.js-match-height').matchHeight();
    $('.js-mh').matchHeight();
}
);