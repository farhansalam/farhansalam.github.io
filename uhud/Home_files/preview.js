/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*
 * jQuery mmenu v5.6.1
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,s=e.length;s>n;n++)t[e[n]]=t.mm(e[n])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent sub"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=i,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",s="5.6.1";if(!(e[n]&&e[n].version>s)){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=s,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+i.listview).children().removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},openPanel:function(t){var s=t.parent(),a=this;if(s.hasClass(i.vertical)){var o=s.parents("."+i.subopened);if(o.length)return void this.openPanel(o.first());s.addClass(i.opened),this.trigger("openPanel",t),this.trigger("openingPanel",t),this.trigger("openedPanel",t)}else{if(t.hasClass(i.current))return;var r=this.$pnls.children("."+i.panel),l=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("."+i.vertical).addClass(i.hidden),e[n].support.csstransitions||l.addClass(i.hidden),t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest),l.addClass(i.subopened)),t.removeClass(i.hidden).addClass(i.current),a.trigger("openPanel",t),setTimeout(function(){t.removeClass(i.subopened).addClass(i.opened),a.trigger("openingPanel",t),a.__transitionend(t,function(){a.trigger("openedPanel",t)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&(t.removeClass(i.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),t=e.first();this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var s=0,i=this.cbck[n].length;i>s;s++)this.cbck[n][s].apply(e,t)},_initMenu:function(){this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var t=[i.menu];this.opts.slidingSubmenus||t.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var n=this,s=this.__findAddBack(t,"ul, ol");this.__refactorClass(s,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),s.not("."+i.nolistview).addClass(i.listview);var o=this.__findAddBack(t,"."+i.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),l=t.add(t.find("."+i.panel)).add(this.__findAddBack(t,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(l,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||l.addClass(i.vertical),l.each(function(){var t=e(this),s=t;t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'),s=t.parent()):s.addClass(i.panel);var a=t.attr("id");t.removeAttr("id"),s.attr("id",a||n.__getUniqueId()),t.hasClass(i.vertical)&&(t.removeClass(n.conf.classNames.vertical),s.add(s.parent()).addClass(i.vertical)),r=r.add(s)});var d=e("."+i.panel,this.$menu);r.each(function(t){var s,o,r=e(this),l=r.parent(),d=l.children("a, span").first();if(l.is("."+i.panels)||(l.data(a.sub,r),r.data(a.parent,l)),l.children("."+i.next).length||l.parent().is("."+i.listview)&&(s=r.attr("id"),o=e('<a class="'+i.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(d),d.is("span")&&o.addClass(i.fullsubopen)),!r.children("."+i.navbar).length&&!l.hasClass(i.vertical)){l.parent().is("."+i.listview)?l=l.closest("."+i.panel):(d=l.closest("."+i.panel).find('a[href="#'+r.attr("id")+'"]').first(),l=d.closest("."+i.panel));var c=e('<div class="'+i.navbar+'" />');if(l.length){switch(s=l.attr("id"),n.opts.navbar.titleLink){case"anchor":_url=d.attr("href");break;case"panel":case"parent":_url="#"+s;break;default:_url=!1}c.append('<a class="'+i.btn+" "+i.prev+'" href="#'+s+'" data-target="#'+s+'" />').append(e('<a class="'+i.title+'"'+(_url?' href="'+_url+'"':"")+" />").text(d.text())).prependTo(r),n.opts.navbar.add&&r.addClass(i.hasnavbar)}else n.opts.navbar.title&&(c.append('<a class="'+i.title+'">'+n.opts.navbar.title+"</a>").prependTo(r),n.opts.navbar.add&&r.addClass(i.hasnavbar))}});var c=this.__findAddBack(t,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);c.add(c.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var p=d.filter("."+i.opened);return p.length||(p=r.first()),p.addClass(i.opened).last().addClass(i.current),r.not("."+i.vertical).not(p.last()).addClass(i.hidden).end().filter(function(){return!e(this).parent().hasClass(i.panels)}).appendTo(this.$pnls),r},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+i.panel)&&(o=!0,t[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(p){}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(s.target).parent());var h=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));h&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,h)&&t.close()}})},_initAddons:function(){var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=i.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var s=this;n[s]=function(){var e=t[s].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(i[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(e,t,n){var s=!1,i=function(){s||t.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return i.mm(e[n].uniqueId++)}},e.fn[n]=function(s,i){return t(),s=e.extend(!0,{},e[n].defaults,s),i=e.extend(!0,{},e[n].configuration,i),this.each(function(){var t=e(this);if(!t.data(n)){var a=new e[n](t,s,i);a.$menu.data(n,a.__api())}})},e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof t[s[i]+n])return!0;return!1}()};var i,a,o,r}}(jQuery),/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],a=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==i.position||"bottom"==i.position)&&(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("offcanvas slideout blocking modal background opening blocker page"),i.add("style"),a.add("resize")},clickAnchor:function(e,t){if(!this.opts[n])return!1;var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]'))return this.open(),!0;if(o.$page)return s=o.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):!1}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[s.opened];r.blockUI&&l.push(s.blocking),"modal"==r.blockUI&&l.push(s.modal),r.moveBackground&&l.push(s.background),"left"!=r.position&&l.push(s.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(s.mm(this.opts[n].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(s.current).removeClass(s.opened),o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)),t.opts.extensions&&o.$html.removeClass(t.opts.extensions),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var i=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(s.page+" "+s.slideout),o.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(n||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())}))};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu scrollBugFix addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.modal&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+s.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){i.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+s.panels+"> ."+s.current,function(e){i.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+s.panels+"> ."+s.current,function(t){i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){i.$pnls.children("."+s.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0};var s,i,a,o}(jQuery);

/*
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",i="autoHeight";t[e].addons[i]={setup:function(){if(this.opts.offCanvas){var s=this.opts[i];this.conf[i];if(a=t[e].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[i]=t.extend(!0,{},t[e].defaults[i],s),"auto"==s.height||"highest"==s.height){this.$menu.addClass(h.autoheight);var n=function(e){if(this.vars.opened){var i=parseInt(this.$pnls.css("top"),10)||0,n=parseInt(this.$pnls.css("bottom"),10)||0,a=0;this.$menu.addClass(h.measureheight),"auto"==s.height?(e=e||this.$pnls.children("."+h.current),e.is("."+h.vertical)&&(e=e.parents("."+h.panel).not("."+h.vertical).first()),a=e.outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var e=t(this);e.is("."+h.vertical)&&(e=e.parents("."+h.panel).not("."+h.vertical).first()),a=Math.max(a,e.outerHeight())}),this.$menu.height(a+i+n).removeClass(h.measureheight)}};this.bind("opening",n),"highest"==s.height&&this.bind("init",n),"auto"==s.height&&(this.bind("update",n),this.bind("openPanel",n),this.bind("closePanel",n))}}},add:function(){h=t[e]._c,s=t[e]._d,n=t[e]._e,h.add("autoheight measureheight"),n.add("resize")},clickAnchor:function(t,e){}},t[e].defaults[i]={height:"default"};var h,s,n,a}(jQuery);
!function(t,i,e,s){function n(t,i){"use strict";this.settings={ratio:1.78,type:"youtube",mute:!0,fullscreen:!0},$.extend(this.settings,i),this.$elem=$(t),this.initialize()}var h="videoPlayer",o="plugin_"+h;$.extend(n.prototype,{initialize:function(){this.refresh(),this.callPlayer(),this.settings.fullscreen&&$(i).on("resize.video",this.refresh.bind(this))},callPlayer:function(){var t=this.$elem.find("."+this.settings.className).get(0),i=function(){$(t).on("load",function(){t.contentWindow.postMessage(JSON.stringify({event:"command",func:this.settings.mute?"mute":null,args:[],id:t}),"*")}.bind(this))}.bind(this),e=function(){$(t).on("load",function(){t.contentWindow.postMessage(JSON.stringify({method:"setVolume",value:this.settings.mute?0:100}),"*")}.bind(this))}.bind(this);switch(this.settings.type){case"youtube":i();break;case"vimeo":e()}},getSize:function(){var t,i,e,s,n,h=this.$elem.find("."+this.settings.className);return h.width(0),h.height(0),t=this.$elem.width(),i=this.$elem.height(),t/this.settings.ratio<i?(e=Math.ceil(i*this.settings.ratio),n={width:e,height:i,left:(t-e)/2,top:0}):(s=Math.ceil(t/this.settings.ratio),n={width:t,height:s,left:0,top:(i-s)/2}),n},setSize:function(t){this.$elem.find("."+this.settings.className).width(t.width).height(t.height).css({left:t.left,top:t.top})},refresh:function(t){if(t&&$.extend(this.settings,t),this.settings.fullscreen){var i=this.getSize();this.setSize(i),this.callPlayer()}},destroy:function(){this.settings.fullscreen&&$(i).off("resize.video",this.refresh.bind(this)),this.$elem.removeData(o)}}),$.fn[h]=function(t){return t===s||"object"==typeof t?this.each(function(){$.data(this,o)?$.data(this,o).refresh(t):$.data(this,o,new n(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=$.data(this,o);i instanceof n&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(arguments,1))}):void 0}}(jQuery,window,document);
!function(t){t(document).on("click","#page-container a",function(e){var n,o,l=t(this),c=l.attr("href");c&&0===c.indexOf("#block-")&&(e.preventDefault(),n=t(c),n.length>0&&0===l.children("[contenteditable]").length&&0===l.closest("[contenteditable]").length&&(o=n.offset().top,t("html, body").animate({scrollTop:o},"slow")))})}(jQuery);
!function(e){e.fn.navOffset=function(i){function s(){n.minWidth<t.width()&&f.find("li > ul:visible").each(function(){var i,s=e(this);s.removeClass(n.className),i=s.offset().left+s.outerWidth(),i>t.width()&&s.addClass(n.className)})}var t=e(window);if(("destroy"===i||"refresh"===i)&&t.off("resize",s),"destroy"!==i){var f=this,n=e.extend({minWidth:911,className:"left"},i);t.on("resize",s),s()}}}(jQuery);
!function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this.drag=t.extend({},u),this.state=t.extend({},p),this.e=t.extend({},g),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t[0].toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Pipe,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}function o(t){if(t.touches!==s)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(t.touches===s){if(t.pageX!==s)return{x:t.pageX,y:t.pageY};if(t.pageX===s)return{x:t.clientX,y:t.clientY}}}function r(t){var e,s,n=i.createElement("div"),o=t;for(e in o)if(s=o[e],"undefined"!=typeof n.style[s])return n=null,[s,e];return[!1]}function a(){return r(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function h(){return r(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function l(){return r(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function c(){return"ontouchstart"in e||!!navigator.msMaxTouchPoints}function d(){return e.navigator.msPointerEnabled}var u,p,g;u={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},p={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},g={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},n.Defaults={items:1,loop:!0,center:!1,mouseDrag:!1,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:250,responsiveBaseElement:e,responsiveClass:!1,fallbackEasing:"swing",info:!1,autoPlayNow:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",itemsWraper:"owl-stage",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active",autoHeightClass:"row",prevParentBlock:"visual-wrap-block-item",containerPlus:"visual-container-plus",paddingMenuClass:"bg-padding",bgImage:"bg-image"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Plugins={},n.Pipe=[{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var t=this._clones,e=this.$stage.children(".cloned");(e.length!==t.length||!this.settings.loop&&t.length>0)&&(this._clones=[])}},{filter:["items","settings"],run:function(){var t,e,i=this._clones,s=this._items,n=this.settings.loop?i.length-Math.max(2*this.settings.items,4):0;for(t=0,e=Math.abs(n/2);e>t;t++)n>0||(i.push(i.length/2),i.push(s.length-1-(i.length-1)/2))}},{filter:["width","items","settings"],run:function(){var t,e,i,s=this.settings.rtl?1:-1,n=(this.width()/this.settings.items).toFixed(3),o=0;for(this._coordinates=[],e=0,i=this._clones.length+this._items.length;i>e;e++)t=this._mergers[this.relative(e)],t=this.settings.mergeFit&&Math.min(t,this.settings.items)||t,o+=(this.settings.autoWidth?this._items[this.relative(e)].width()+this.settings.margin:n*t)*s,this._coordinates.push(o)}},{filter:["width","items","settings"],run:function(){var e,i,s=(this.width()/this.settings.items).toFixed(3),n={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(n),n={width:this.settings.autoWidth?"auto":s-this.settings.margin},n[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&t.grep(this._mergers,function(t){return t>1}).length>0)for(e=0,i=this._coordinates.length;i>e;e++)n.width=Math.abs(this._coordinates[e])-Math.abs(this._coordinates[e-1]||0)-this.settings.margin,this.$stage.children().eq(e).css(n);else this.$stage.children().css(n)}},{filter:["width","items","settings"],run:function(t){t.current&&this.reset(this.$stage.children().index(t.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;s>i;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],n.prototype.initialize=function(){this.trigger("initialize");var t=0,e=this,i=this.$element.find(".owl-item").length;if(this.$element.find("img").bind("load",function(){t==i-1&&e.onResize(),t++}),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var n,o,r;if(n=this.$element.find("img"),o=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:s,r=this.$element.children(o).width(),n.length&&0>=r)return this.preloadAutoWidthImages(n),!1}var e=this;this.$stage=this.$element.find("."+this.options.itemsWraper),this.replace(this.$element.find("."+this.options.itemClass).not(this.$stage.parent()).not(".cloned")),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,function(t){e>=t&&t>s&&(s=Number(t))}),n=t.extend({},this.options,i[s]),delete n.responsive,n.responsiveClass&&this.$element.attr("class",function(t,e){return e.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+s)):n=t.extend({},this.options),null!==this.settings&&this._breakpoint===s||(this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},n.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(t){var e=this.trigger("prepare",{content:jQuery(t).find("item").get(0)});return e.data||(e.data=jQuery(t)),this.trigger("prepared",{content:e.data}),e.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(function(t){return this[t]},this._invalidated),n={};i>e;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={}},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=e.orientation,this.watchVisibility(),this.trigger("refreshed")},n.prototype.eventsCall=function(){this.e._onDragStart=t.proxy(function(t){this.onDragStart(t)},this),this.e._onDragMove=t.proxy(function(t){this.onDragMove(t)},this),this.e._onDragEnd=t.proxy(function(t){this.onDragEnd(t)},this),this.e._onResize=t.proxy(function(t){this.onResize(t)},this),this.e._transitionEnd=t.proxy(function(t){this.transitionEnd(t)},this),this.e._preventClick=t.proxy(function(t){this.preventClick(t)},this)},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer);var t=this.e?this.e._onResize:"";this.resizeTimer=e.setTimeout(t,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return this.settings.additionally?this._plugins.autoHeight.update():this._plugins.autoHeight.updateDefault(),this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},n.prototype.eventsRouter=function(t){var e=t.type;!this.settings.mouseDrag||"mousedown"!==e&&"touchstart"!==e?!this.settings.mouseDrag||"mousemove"!==e&&"touchmove"!==e?!this.settings.mouseDrag||"mouseup"!==e&&"touchend"!==e?"touchcancel"===e&&this.onDragEnd(t):this.onDragEnd(t):this.onDragMove(t):this.onDragStart(t)},n.prototype.internalEvents=function(){var i=(c(),d());this.settings.mouseDrag?(this.$stage.on("mousedown",t.proxy(function(t){this.eventsRouter(t)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!i&&this.$stage.on("touchstart touchcancel",t.proxy(function(t){this.eventsRouter(t)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.on(e,"resize",t.proxy(this.onThrottledResize,this))},n.prototype.onDragStart=function(s){var n,r,a,h;if(n=s.originalEvent||s||e.event,3===n.which||this.state.isTouch)return!1;if("mousedown"===n.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,r=o(n).x,a=o(n).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)h=this.getTransformProperty(),this.drag.offsetX=h,this.animate(h),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=r-this.drag.offsetX,this.drag.startY=a-this.drag.offsetY,this.drag.start=r-this.drag.startX,this.drag.targetEl=n.target||n.srcElement,this.drag.updatedX=this.drag.start,"IMG"!==this.drag.targetEl.tagName&&"A"!==this.drag.targetEl.tagName||(this.drag.targetEl.draggable=!1),t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",t.proxy(function(t){this.eventsRouter(t)},this))},n.prototype.onDragMove=function(t){var i,n,r,a,h,l;this.state.isTouch&&(this.state.isScrolling||(i=t.originalEvent||t||e.event,n=o(i).x,r=o(i).y,this.drag.currentX=n-this.drag.startX,this.drag.currentY=r-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(a=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),h=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),l=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,a+l),h+l)),(this.drag.distance>8||this.drag.distance<-8)&&(i.preventDefault!==s?i.preventDefault():i.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},n.prototype.onDragEnd=function(e){var s,n,o;if(this.state.isTouch){if("mouseup"===e.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),s=this.drag.endTime-this.drag.startTime,n=Math.abs(this.drag.distance),o=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(o),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(o)||this.transitionEnd(),this.drag.distance=0,t(i).off(".owl.dragEvents")}},n.prototype.removeClick=function(i){this.drag.targetEl=i,t(i).on("click.preventClick",this.e._preventClick),e.setTimeout(function(){t(i).off("click.preventClick")},300)},n.prototype.preventClick=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),t(e.target).off("click.preventClick")},n.prototype.getTransformProperty=function(){var t,i;return t=e.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),t=t.replace(/matrix(3d)?\(|\)/g,"").split(","),i=16===t.length,i!==!0?t[4]:t[12]},n.prototype.closest=function(e){var i=-1,s=30,n=this.width(),o=this.coordinates();return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){return e>r-s&&r+s>e?i=t:this.op(e,"<",r)&&this.op(e,">",o[t+1]||r-n)&&(i="left"===this.state.direction?t+1:t),-1===i},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?i=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(i=e=this.maximum())),i},n.prototype.animate=function(e){this.trigger("translate");var i=this;this.state.inMotion=this.speed()>0;new Promise(function(s,n){i.support3d?i.$stage.css({transform:"translate3d("+e+"px,0px, 0px)",transition:i.speed()/1e3+"s"}):i.state.isTouch?this.$stage.css({left:e+"px"}):i.$stage.animate({left:e},i.speed()/1e3,this.settings.fallbackEasing,t.proxy(function(){i.state.inMotion&&i.transitionEnd()},i))})},n.prototype.current=function(t){if(t===s)return this._current;if(0===this._items.length)return s;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==s&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},n.prototype.invalidate=function(t){this._invalidated[t]=!0},n.prototype.reset=function(t){t=this.normalize(t),t!==s&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(e,i){var n=i?this._items.length:this._items.length+this._clones.length;return!t.isNumeric(e)||1>n?s:e=this._clones.length?(e%n+n)%n:Math.max(this.minimum(i),Math.min(this.maximum(i),e))},n.prototype.relative=function(t){return t=this.normalize(t),t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=0,o=this.settings;if(t)return this._items.length-1;if(!o.loop&&o.center)e=this._items.length-1;else if(o.loop||o.center)if(o.loop||o.center)e=this._items.length+o.items;else{if(!o.autoWidth&&!o.merge)throw"Can not detect maximum absolute position.";for(revert=o.rtl?1:-1,i=this.$stage.width()-this.$element.width();(s=this.coordinates(n))&&!(s*revert>=i);)e=++n}else e=this._items.length-o.items;return e},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return t===s?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return t===s?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,n=i+this._items.length,o=function(t){return t%2===0?n+t/2:i-(t+1)/2};return e===s?t.map(this._clones,function(t,e){return o(e)}):t.map(this._clones,function(t,i){return t===e?o(i):null})},n.prototype.speed=function(t){return t!==s&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i=null;return e===s?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[e-1]||0))/2*(this.settings.rtl?-1:1)):i=this._coordinates[e-1]||0,i)},n.prototype.duration=function(t,e,i){return Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(i,s){if(this.settings.loop){var n=i-this.relative(this.current()),o=this.current(),r=this.current(),a=this.current()+n,h=0>r-a,l=this._clones.length+this._items.length;a<this.settings.items&&h===!1?(o=r+this._items.length,this.reset(o)):a>=l-this.settings.items&&h===!0&&(o=r-this._items.length,this.reset(o)),e.clearTimeout(this.e._goToLoop),this.e._goToLoop=e.setTimeout(t.proxy(function(){this.speed(this.duration(this.current(),o+n,s)),this.current(o+n),this.update()},this),30)}else this.speed(this.duration(this.current(),i,s)),this.current(i),this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.transitionEnd=function(t){return t!==s&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},n.prototype.viewport=function(){var s;if(this.options.responsiveBaseElement!==e)s=t(this.options.responsiveBaseElement).width();else if(e.innerWidth)s=e.innerWidth;else{if(!i.documentElement||!i.documentElement.clientWidth)throw"Can not detect viewport width.";s=i.documentElement.clientWidth}return s},n.prototype.replace=function(e){this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(t.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(t,e){e=e===s?this._items.length:this.normalize(e,!0),this.trigger("add",{content:t,position:e}),0===this._items.length||e===this._items.length?(this.$stage.append(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[e].before(t),this._items.splice(e,0,t),this._mergers.splice(e,0,1*t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:t,position:e})},n.prototype.remove=function(t){t=this.normalize(t,!0),t!==s&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.addTriggerableEvents=function(){var e=t.proxy(function(e,i){return t.proxy(function(t){t.relatedTarget!==this&&(this.suppress([i]),e.apply(this,[].slice.call(arguments,1)),this.release([i]))},this)},this);t.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},t.proxy(function(t,i){this.$element.on(t+".owl.carousel",e(i,t+".owl.carousel"))},this))},n.prototype.watchVisibility=function(){function i(t){return t.offsetWidth>0&&t.offsetHeight>0}function s(){i(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),e.clearInterval(this.e._checkVisibile))}i(this.$element.get(0))||(this.$element.addClass("owl-hidden"),e.clearInterval(this.e._checkVisibile),this.e._checkVisibile=e.setInterval(t.proxy(s,this),500))},n.prototype.preloadAutoWidthImages=function(e){var i,s,n,o;i=0,s=this,e.each(function(r,a){n=t(a),o=new Image,o.onload=function(){i++,n.attr("src",o.src),n.css("opacity",1),i>=e.length&&(s.state.imagesLoaded=!0,s.initialize())},o.src=n.attr("src")||n.attr("data-src")||n.attr("data-src-retina")})},n.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&t(e).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var s in this._plugins)this._plugins[s].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),t(i).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.e=null,this.$element.removeData("owlCarousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:i>t;case">":return s?i>t:t>i;case">=":return s?i>=t:t>=i;case"<=":return s?t>=i:i>=t}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s){var n={item:{count:this._items.length,index:this.current()}},o=t.camelCase(t.grep(["on",e,s],function(t){return t}).join("-").toLowerCase()),r=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},n,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(r)}),this.$element.trigger(r),this.settings&&"function"==typeof this.settings[o]&&this.settings[o].apply(this,r)),r},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.browserSupport=function(){if(this.support3d=l(),this.support3d){this.transformVendor=h();var t=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=t[a()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=e.orientation},t.fn.owlCarousel=function(e){return this.each(function(){t(this).data("owlCarousel")||t(this).data("owlCarousel",new n(this,e))})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&e.property.value||this._core.current())+n,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o++)),a)},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!0},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find("."+this._core.options.bgImage);!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src");if(this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img"))o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r);else{n=new Image;var a=t(s).css("background-image");r=a.replace('url("',"").replace('")',""),n.onload=t.proxy(function(){o.css({"background-image":"url("+r+")",opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),n.src=r}},this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight?this.update():t.namespace&&!this._core.settings.autoHeight&&this.updateDefault()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var t=(this._core._current,this._core.settings),e=this.getMaxHeight();this._core.$stage.parent().find("."+t.autoHeightClass+":only-child").height(e).addClass(this._core.settings.autoHeightClass)},n.prototype.updateDefault=function(){var e=this._core._current,i=e+this._core.settings.items,s=this._core.$stage.children().toArray().slice(e,i),n=[];t.each(s,function(e,i){n.push(t(i).height())}),maxheight=Math.max.apply(null,n),this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)},n.prototype.getMaxHeight=function(){var e,i,s,n=[],o=this._core.$element,r=this._core.settings,a=this.getKeyInAdditionaly(),h=r.additionally[a],l=this._core.$stage.find("."+r.autoHeightClass+":only-child"),c=o.find("."+r.paddingMenuClass).height()||0,d=o.height();return l.height(""),t.each(l,function(e,i){n.push(t(i).height()+c)}),e=Math.max.apply(null,n),h.fullHeight?(s=e>h.minHeight?e:h.minHeight,i=this.getFullHeight(n,s,h,d)):i=e>h.minHeight?e:h.minHeight,i},n.prototype.getKeyInAdditionaly=function(t){var e,s,n=this._core.settings;return e=i.documentElement.clientWidth,keyResize=Object.keys(n.additionally),keyResize=keyResize.sort(function(t,e){return parseInt(t)>parseInt(e)}),keyResize.forEach(function(t,i){e>t&&(s=t)}),s||(s=keyResize[0]),s},n.prototype.getFullHeight=function(t,i,s,n){function o(t){var e=a.closest("."+t.prevParentBlock).prev("."+t.prevParentBlock).find("."+t.containerPlus);return e.length?e.offset().top:a.offset().top}var r=this._core.settings,a=this._core.$element,n=a.height(),h=jQuery(e).height(),l=o(r),c=n-Math.max.apply(null,t),d=Math.max.apply(null,t);return 0==d&&(n=i),n>h-l||i>s.maxHeight?d=i:(d=h-c-l,d>s.maxHeight&&(d=s.maxHeight)),d},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":t.proxy(function(t){this._core.settings.video&&!this.isInFullScreen()&&t.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":t.proxy(function(t){this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(s=r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),s[3].indexOf("youtu")>-1)i="youtube";else{if(!(s[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");i="vimeo"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o,r=i.width&&i.height?'style="width:'+i.width+"px;height:"+i.height+'px;"':"",a=e.find("img"),h="src",l="",c=this._core.settings,d=function(t){n='<div class="owl-video-play-icon"></div>',s=c.lazyLoad?'<div class="owl-video-tn '+l+'" '+h+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(s),e.after(n)};return e.wrap('<div class="owl-video-wrapper"'+r+"></div>"),this._core.settings.lazyLoad&&(h="data-src",l="owl-lazy"),a.length?(d(a.attr(h)),a.remove(),!1):void("youtube"===i.type?(o="http://img.youtube.com/vi/"+i.id+"/hqdefault.jpg",d(o)):"vimeo"===i.type&&t.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t[0].thumbnail_large,d(o)}}))},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},n.prototype.play=function(e){this._core.trigger("play",null,"video"),this._playing&&this.stop();var i,s,n=t(e.target||e.srcElement),o=n.closest("."+this._core.settings.itemClass),r=this._videos[o.attr("data-video")],a=r.width||"100%",h=r.height||this._core.$stage.height();"youtube"===r.type?i='<iframe width="'+a+'" height="'+h+'" src="http://www.youtube.com/embed/'+r.id+"?autoplay=1&v="+r.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===r.type&&(i='<iframe src="http://player.vimeo.com/video/'+r.id+'?autoplay=1" width="'+a+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),o.addClass("owl-video-playing"),this._playing=o,s=t('<div style="height:'+h+"px; width:"+a+'px" class="owl-video-frame">'+i+"</div>"),n.after(s)},n.prototype.isInFullScreen=function(){var s=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return s&&t(s).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),s&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==e.orientation?(this._core.state.orientation=e.orientation,!1):!0},n.prototype.destroy=function(){var t,e;this._core.$element.off("click.owl.video");for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=s,this.next=s,this.handlers={"change.owl.carousel":t.proxy(function(t){"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){this.swapping="translated"==t.type},this),"translate.owl.carousel":t.proxy(function(t){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap();
},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",i)),o&&n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",i))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},n.prototype.destroy=function(){var t,e;this.core.$element.off();for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":t.proxy(function(){this.autoplay()},this),"play.owl.autoplay":t.proxy(function(t,e,i){this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this.core.settings.autoplayHoverPause&&this.core.$element.data("playing")&&this.autoplay()},this)},this.core.$element.on(this.handlers)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,autoplaySpeed:!1},n.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(e.clearInterval(this.interval),this.interval=e.setInterval(t.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):e.clearInterval(this.interval)},n.prototype.play=function(t,s){return this.core.options.autoPlayNow=!0,i.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void e.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},n.prototype.stop=function(){this.core.options.autoPlayNow=!1,e.clearInterval(this.interval)},n.prototype.pause=function(){this.core.options.autoPlayNow=!1,e.clearInterval(this.interval)},n.prototype.destroy=function(){var t,i;e.clearInterval(this.interval);for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){this._core.settings.dotsData&&this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":t.proxy(function(e){this._core.settings.dotsData&&this._templates.splice(e.position,0,t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":t.proxy(function(t){this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"change.owl.carousel":t.proxy(function(t){if("position"==t.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var e=this._core.current(),i=this._core.maximum(),s=this._core.minimum();t.data=t.property.value>i?e>=i?s:i:t.property.value<s?i:t.property.value}},this),"changed.owl.carousel":t.proxy(function(t){"position"==t.property.name&&this.draw()},this),"refreshed.owl.carousel":t.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!0,navRewind:!0,navText:["",""],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-buttons",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-page",dotsClass:"owl-pagination",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},n.prototype.initialize=function(){var e,i,s=this._core.settings;(s.nav||s.dots)&&(this._controls.$container=this.$element.find("."+s.controlsClass)),s.nav&&(e=s.navContainer?t(s.navContainer):t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container),this._controls.$previous=t("<"+s.navElement+">"),this._controls.$next=this._controls.$previous.clone(),this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).prependTo(e).on("click",t.proxy(function(t){this.prev(s.navSpeed)},this)),this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).appendTo(e).on("click",t.proxy(function(t){this.next(s.navSpeed)},this))),s.dots&&(this._controls.$indicators=s.dotsContainer?t(s.dotsContainer):t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",t.proxy(function(e){var i=t(e.target).parent().is(this._controls.$indicators)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(i,s.dotsSpeed)},this)),this._templates=[t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]);for(i in this._overrides)this._core[i]=t.proxy(this[i],this)},n.prototype.destroy=function(){var t,e,i,s=this._core.settings;for(t in this._handlers)this.$element.off(t,this._handlers[t]);s.nav&&(this._controls.$previous.remove(),this._controls.$next.remove()),s.dots&&this._controls.$indicators.remove();for(i in this.overides)this._core[i]=this._overrides[i];for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},n.prototype.update=function(){var t,e,i,s=this._core.settings,n=this._core.clones().length/2,o=n+this._core.items().length,r=s.center||s.autoWidth||s.dotData?1:s.dotsEach||s.items;if("page"!==s.slideBy&&(s.slideBy=Math.min(s.slideBy,s.items)),s.dots||"page"==s.slideBy)for(this._pages=[],t=n,e=0,i=0;o>t;t++)(e>=r||0===e)&&(this._pages.push({start:t-n,end:t-n+r-1}),e=0,++i),e+=this._core.mergers(this._core.relative(t))},n.prototype.draw=function(){var e,i,s="",n=this._core.settings,o=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!n.nav||n.loop||n.navRewind||(this._controls.$previous.toggleClass("disabled",0>=o),this._controls.$next.toggleClass("disabled",o>=this._core.maximum())),n.dots){if(e=this._pages.length-this._controls.$indicators.children().length,n.dotData&&0!==e){for(i=0;i<this._controls.$indicators.children().length;i++)s+=this._templates[this._core.relative(i)];this._controls.$indicators.html(s)}else e>0?(s=new Array(e+1).join(this._templates[0]),this._controls.$indicators.append(s)):0>e&&this._controls.$indicators.children().slice(e).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(t.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(n.dots)},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return this._pages[this._pages.length-2]&&e>this._pages[this._pages.length-2].start?this._pages[this._pages.length-1]:t.grep(this._pages,function(t){return t.start<=e&&t.end>=e}).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;s?t.proxy(this._overrides.to,this._core)(e,i):(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i))},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(){"URLHash"==this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){var i=t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[i]=e.content},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(){var t=e.location.hash.substring(1),i=this._core.$stage.children(),s=this._hashes[t]&&i.index(this._hashes[t])||0;return t?void this._core.to(s,!1,!0):!1},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;t(e).off("hashchange.owl.navigation");for(i in this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document);
!function(t,e){function i(t,e,i,r){var l=function(t){!t&&(t=a.event);var e={originalEvent:t,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==n?(e.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(e.deltaX=-.025*t.wheelDeltaX)):e.deltaY=t.detail/3,i(e)};t[s](o+e,"wheel"==n?i:l,r||!1)}var s,n,o="";t.addEventListener?s="addEventListener":(s="attachEvent",o="on"),n="onwheel"in e.createElement("div")?"wheel":"undefined"!=typeof e.onmousewheel?"mousewheel":"DOMMouseScroll",t.addWheelListener=function(t,e,s){i(t,n,e,s),"DOMMouseScroll"==n&&i(t,"MozMousePixelScroll",e,s)}}(window,document),function(t,e,i,s){function n(){"use strict";this.options={bgClass:"bg-image-parallax",parallaxClass:"bg-parallax",wheelIgnoreClass:["visual-container-plus","visual-container-whiteout-show","content-show"],items:[],baseElement:e,windowHeight:Math.max(i.documentElement.clientHeight,e.innerHeight||0),r:0,u:0,v:0,s:!1,F:(this.isVariant(),!1)},this.elements=[],this.documentReady()}var o="parallax";$.extend(n.prototype,{documentReady:function(t){var s=this;return this.options.windowHeight=Math.max(i.documentElement.clientHeight,e.innerHeight||0),this.isMobile()?$("."+this.options.parallaxClass).removeClass(this.options.parallaxClass):(s.profileParallaxElements(),s.setupParallax()),this.isFunction(t)?void this.getTransformStyle():void 0},windowLoad:function(){this.options.windowHeight=Math.max(i.documentElement.clientHeight,e.innerHeight||0),this.options.r=this.b(),this.profileParallaxElements()},setupParallax:function(){var t=this;this.isVariant()&&"undefined"!=typeof this.options.baseElement&&(this.options.baseElement.scrollBy=function(t,e){this.scrollTop+=e,this.scrollLeft+=t}),"undefined"!=typeof this.options.baseElement&&(this.options.baseElement.addEventListener("scroll",this.g.bind(this),!1),e.addWheelListener(this.options.baseElement,this.h.bind(this),!1),e.addEventListener("resize",function(){t.options.windowHeight=Math.max(i.documentElement.clientHeight,e.innerHeight||0),t.options.r=t.b(),t.profileParallaxElements()},!1),this.d.apply(this))},profileParallaxElements:function(){var t=this.isVariant(),e=this;this.options.items=[],this.options.r=this.b(),$(this.elements).find("."+this.options.bgClass).each(function(){var i=$(this).closest("."+e.options.parallaxClass),s=t?i.position().top:i.offset().top,n=e.getHeight(i),o=!1;n&&e.setHeight(i,n),e.options.items.push({section:i.get(0),outerHeight:i.outerHeight(),elemTop:s,elemBottom:s+i.outerHeight(),isFirstSection:!!o,imageHolder:this}),t?t&&(o?e.mr_setTranslate3DTransform($(this).get(0),0===e.f()?0:e.f()/2):e.mr_setTranslate3DTransform($(this).get(0),(e.f()-s-e.options.r)/2)):o?e.mr_setTranslate3DTransform($(this).get(0),0===e.f()?0:e.f()/2):e.mr_setTranslate3DTransform($(this).get(0),(e.f()+e.options.windowHeight-s)/2)})},setHeight:function(t,e){$(t).find("."+this.options.bgClass).css({height:100*e+"vh"})},getHeight:function(t){var e=$(t),i=$(this.options.baseElement).height(),s=e.height(),n=s/i;return s>i?n:null},getTransformStyle:function(t){for(var e=0;e<t.length;e++)if("undefined"!=typeof i.body.style[t[e]])return t[e];return null},getScrollingState:function(){return this.options.u>0},getCurrentElement:function(t){for(var e=0,i=this.options.items.length;this.options.items[e]&&this.options.items[e].section!==t;e++);return e===i?-1:e},isFunction:function(t){var e={};return t&&"[object Function]"===e.toString.call(t)},isMobile:function(){return/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)},requestAnimationFrame:function(t){var e=this.options.baseElement.requestAnimationFrame||this.options.baseElement.mozRequestAnimationFrame||this.options.baseElement.webkitRequestAnimationFrame||this.options.baseElement.msRequestAnimationFrame;return e(t)},mr_setTranslate3DTransform:function(t,e){var i=this.getTransformStyle(["transform","msTransform","webkitTransform","mozTransform","oTransform"]);t.style[i]="translate3d(0,"+e+"px,0)"},addElement:function(t){this.isMobile()||(this.elements.indexOf(t)===-1&&($(t).addClass(this.options.parallaxClass),this.elements.push(t)),this.profileParallaxElements())},refresh:function(t){var e=this.getCurrentElement(t),i=$(t).height();e!==-1&&this.options.items[e].outerHeight!=i&&this.profileParallaxElements()},destroy:function(t){var e=$(t);e.find("."+this.options.bgClass).css("height",""),e.removeClass(this.options.parallaxClass),e.find("."+this.options.bgClass).css("transform","");var i=this.elements.indexOf(t);i!=-1&&this.elements.splice(i,1),this.profileParallaxElements()},e:function(t,e){var i=this.isVariant();i?e+this.options.windowHeight-this.options.r>t.elemTop&&e-this.options.r<t.elemBottom&&(t.isFirstSection?this.mr_setTranslate3DTransform(t.imageHolder,e/2):this.mr_setTranslate3DTransform(t.imageHolder,e-t.elemTop-this.options.r)/2):e+this.options.windowHeight>t.elemTop&&e<t.elemBottom&&(t.isFirstSection?this.mr_setTranslate3DTransform(t.imageHolder,e/2):this.mr_setTranslate3DTransform(t.imageHolder,(e+this.options.windowHeight-t.elemTop)/2))},c:function(t,e,i,s){var n=t-1;return n/=s,t/=s,n--,t--,i*(t*t*t*t*t+1)+e-(i*(n*n*n*n*n+1)+e)},d:function(){var t=300,e=1,i=30,s=0;if(this.options.F){for(var n=this.options.items.length,o=this.f();n--;)this.e(this.options.items[n],o);this.options.F=!1}this.options.s&&(s+=-this.options.v*this.c(this.options.u,0,t,i),(s>e||-e>s)&&(this.options.baseElement.scrollBy(0,s),s=0),this.options.u++,this.options.u>i&&(this.options.u=0,this.options.s=!1,this.options.v=0,s=0)),this.requestAnimationFrame.call(this,this.d.bind(this))},h:function(t){var e=2,i=4;return this.options.wheelIgnoreClass&&this.options.wheelIgnoreClass.length>0&&$(t.target).closest("."+this.options.wheelIgnoreClass.join(", .")).length>0?null:(t.preventDefault&&t.preventDefault(),this.options.v=t.notRealWheel?-t.deltaY/4:1==t.deltaMode?-t.deltaY/3:100===Math.abs(t.deltaY)?-t.deltaY/120:-t.deltaY/40,this.options.v=-e>this.options.v?-e:this.options.v,this.options.v=this.options.v>e?e:this.options.v,this.options.s=!0,this.options.u=i,void 0)},g:function(){this.options.F=!0},isVariant:function(){return"undefined"!=typeof e.mr_variant},b:function(){return $(this.options.baseElement).outerHeight(!0)},f:function(){return this.options.baseElement!=e?this.options.baseElement.scrollTop:0===i.documentElement.scrollTop?i.body.scrollTop:i.documentElement.scrollTop}}),$.fn[o]=function(t){var i="plugin_"+o;return t===s||"object"==typeof t?this.each(function(){$.data(e,i)||$.data(e,i,new n),$.data(e,i).addElement(this)}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var s=$.data(e,i);s instanceof n&&"function"==typeof s[t]&&s[t].apply(s,Array.prototype.slice.call(arguments,1))}):void 0}}(jQuery,window,document);

jQuery(document).ready(function(jQuery) {
var Bitblox = {};

(function ($,Bitblox) {
'use strict';

$ = 'default' in $ ? $['default'] : $;
Bitblox = 'default' in Bitblox ? Bitblox['default'] : Bitblox;

var popupRegex =  /^bbm-popup-([\w]*)$/;
var showClassName = 'bbm-popup-show';

Bitblox.popup = {
  show: function(id) {
    $('#bbm-popup-' + id).addClass(showClassName);
    $('html').addClass('bbm-popup-scroll-hidden');
  },
  hide: function(id) {
    $('#bbm-popup-' + id).removeClass(showClassName);
    $('html').removeClass('bbm-popup-scroll-hidden');
  },
};


// init
$(document.body).on('click', 'a[href^="#bbm-popup-"]', function(event) {
  event.preventDefault();

  var matches = popupRegex.exec($(this).attr('href').slice(1));
  if (matches) {
    var popupId = matches[1];
    Bitblox.popup.show(popupId);
  }
});

$('.bbm-popup-content').on('click', function(event) {
  var outsideContent = $(event.target).closest('section').length === 0;
  if (outsideContent) {
    var matches = popupRegex.exec($(this).closest('.bbm-popup').attr('id'));
    if (matches) {
      var popupId = matches[1];
      Bitblox.popup.hide(popupId);
    }
  }
});

}(jQuery,Bitblox));


;(function ($) {

    var pluginName = 'scrollPane';

    function Plugin(elem) {
        this.elem = elem;
        this.scrolableElem = this.elem.firstElementChild;

        this.options = {
            onlyWide: false,
            wideTrackClassName: 'scroll-wide-track',
            wideThumbClassName: 'scroll-wide-thumb',
            tallTrackClassName: 'scroll-tall-track',
            tallThumbClassName: 'scroll-tall-thumb'
        };

        this.init();
    }

    var _wheel_speed = 1;

    var _math = function(client, offset, scroll, position, track) {
        // In Google Chrome, sometimes scrollSize is less than clientSize by 1
        scroll = Math.max(scroll, client);
        var overflow = scroll - client,
            thumb = client/scroll*track,
            piece = track - thumb,
            shift = overflow == 0 ? 0 : position/overflow*piece;
        return {
            client: client,
            offset: offset,
            scroll: scroll,
            overflow: overflow,
            position: position,
            track: track,
            thumb: thumb,
            piece: piece,
            shift: shift
        };
    };

    Plugin.prototype.init = function() {
        var ua = navigator.userAgent.toLowerCase();
        var isFirefox = /firefox/.test(ua);
        var isChrome = /chrome/.test(ua);

        if (isFirefox) _wheel_speed = 20;
        if (isChrome) _wheel_speed = 0.8;

        this.onUpdateDOM();

        $(this.elem).on('wheel', this.onWheel.bind(this));
        $(this.scrolableElem).on('scroll', this.onUpdateDOM.bind(this));
    };

    Plugin.prototype.destroy = function() {
        $(this.elem).off('wheel');
        $(this.scrolableElem).off('scroll');
    };

    Plugin.prototype.onWheel = function(event) {
        var top = this.scrolableElem.scrollTop,
            left = this.scrolableElem.scrollLeft;
        if (this.options.onlyWide) {
            this.scrolableElem.scrollLeft = left + (event.originalEvent.deltaX ? event.originalEvent.deltaX : event.originalEvent.deltaY * _wheel_speed);
        } else{
            event.preventDefault();
            this.scrolableElem.scrollTop = top + event.originalEvent.deltaY * _wheel_speed;
            this.scrolableElem.scrollLeft = left + event.originalEvent.deltaX;
        }
        if (this.scrolableElem.scrollTop != top || this.scrolableElem.scrollLeft != left || this.options.onlyWide) {
            event.preventDefault();
        }
    };

    Plugin.prototype.onUpdateDOM = function() {
        var wideTrack = this.elem.getElementsByClassName(this.options.wideTrackClassName)[0],
            wideTrackHeight,
            wideThumb = this.elem.getElementsByClassName(this.options.wideThumbClassName)[0],
            tallTrack = this.elem.getElementsByClassName(this.options.tallTrackClassName)[0],
            tallTrackWidth,
            tallThumb = this.elem.getElementsByClassName(this.options.tallThumbClassName)[0],
            wide = {
                overflow: Math.max(0, this.scrolableElem.scrollWidth - this.scrolableElem.clientWidth)
            },
            tall = {
                overflow: Math.max(this.scrolableElem.scrollHeight - this.scrolableElem.clientHeight)
            };

        wideTrack.style.position = 'absolute';
        tallTrack.style.position = 'absolute';
        wideThumb.style.position = 'relative';
        tallThumb.style.position = 'relative';

        wideTrack.style.display = 'block';
        wideTrackHeight = wideTrack.offsetHeight;
        tallTrack.style.display = 'block';
        tallTrackWidth = tallTrack.offsetWidth;

        this.scrolableElem.style.overflow = 'hidden';
        this.scrolableElem.style.borderBottomWidth = wideTrackHeight + 'px';
        this.scrolableElem.style.borderBottomStyle = wide.overflow ? 'solid' : 'none';
        this.scrolableElem.style.borderRightWidth = tallTrackWidth + 'px';
        this.scrolableElem.style.borderRightStyle = tall.overflow ? 'solid' : 'none';

        // Previous step may lead to changing clientWidth/clientHeight
        wide.overflow = Math.max(0, this.scrolableElem.scrollWidth - this.scrolableElem.clientWidth);
        tall.overflow = Math.max(0, this.scrolableElem.scrollHeight - this.scrolableElem.clientHeight);

        wideTrack.style.display = wide.overflow ? 'block' : 'none';
        wideTrack.style.width = this.scrolableElem.clientWidth + 'px';
        wideTrack.style.left = 0;
        wideTrack.style.top = this.scrolableElem.offsetHeight - wideTrackHeight + 'px';

        tallTrack.style.display = tall.overflow ? 'block' : 'none';
        tallTrack.style.height = this.scrolableElem.clientHeight + 'px';
        tallTrack.style.top = 0;
        // Previous step may lead to changing  track sizes
        wide = _math(this.scrolableElem.clientWidth, this.scrolableElem.offsetWidth, this.scrolableElem.scrollWidth, this.scrolableElem.scrollLeft, wideTrack.clientWidth);
        tall = _math(this.scrolableElem.clientHeight, this.scrolableElem.offsetHeight, this.scrolableElem.scrollHeight, this.scrolableElem.scrollTop, tallTrack.clientHeight);
        wideThumb.style.left = wide.shift + 'px';
        wideThumb.style.width = wide.thumb + 'px';
        tallThumb.style.top = tall.shift + 'px';
        tallThumb.style.height = tall.thumb + 'px';
    };

    $.fn[pluginName] = function(options) {
        var $this = $(this),
            dataKey = 'plugin_' + pluginName;
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$this.data(dataKey)) {
                    $this.data(dataKey, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $this.data(dataKey);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
                }
            });
        }
    };
})(jQuery);

(function($) {
    $('.scroll-pane').scrollPane();
})(jQuery);

;(function($) {

    $('.control-select').each(function() {
        var $this = $(this);
        initSelects($this);
    });

    function initSelects($component) {
        initSelectsWindow();
        initSelectsLabel($component);
        initSelectsOptions($component);
    }

    function initSelectsWindow() {
        if (initSelectsWindow.called) {
            return;
        }
        initSelectsWindow.called = true;

        $(window).on('click', function(event) {
            var $elem = $(event.target);
            if ($elem.closest('.control-select-current').length === 0) {
                $('.control-select').removeClass('opened');
            }
        });
    }
    function initSelectsLabel($component) {
        $component.on('click', '.control-select-current', function() {
            var $thisSelect = $(this).closest('.control-select'),
                thisSelect = $thisSelect.get(0);

            // hide or show current select
            $thisSelect.toggleClass('opened');

            // hide all other selects except this one
            $('.control-select').each(function() {
                if (this !== thisSelect) {
                    $(this).removeClass('opened');
                }
            });
        });
    }
    function initSelectsOptions($component) {
        $component.on('click', '.control-select-options .control-select-option', function() {
            var $this = $(this),
                $thisSelect = $this.closest('.control-select');
            $this.addClass('active').siblings().removeClass('active');
            $thisSelect.find('.control-select-current').html($this.clone());
            $thisSelect.next('input').val($this.text());
            $thisSelect.removeClass('opened');
        });
    }

})(jQuery);


(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$('.bg-parallax').each(function() {
  var $this = $(this),
    bg = $this.find('.bg-image-parallax').css('background-image'),
    match = /url\(['"](.+)['"]\)/.exec(bg);

  if (match) {
    var img = new Image();
    img.onload = function() {
      $this.parallax();
    };
    img.src = match[1];
  } else {
    $this.parallax();
  }
});

$('.bg-image-container').each(function () {
  var $this = $(this);
  var className = 'bg-video-iframe';
  var $iframe = $this.find('.' + className);

  if ($iframe.length) {
    var type = $iframe.attr('data-type');

    $this.videoPlayer({
      type: type,
      className: className
    });
  }
});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

function getWidthClassNames($countdown, countdownSize) {
  var LG = 1170;
  var MD = 800;
  var SM = 600;
  var MS = 400;
  var XS = 350;

  var parentWidth = parseInt($countdown.parent().css('width'));
  var size = parseInt(countdownSize);

  if (
    (parentWidth <= XS) ||
    (parentWidth <= MS && size <= 85) ||
    (parentWidth <= SM && size <= 70) ||
    (parentWidth <= MD && size <= 50) ||
    (parentWidth <= LG && size <= 35) ||
    (parentWidth > LG && size <= 20)
  ) {
    return 'countdown-small';
  }

  return '';
}

function CountdownTimer(settings) {
  this.settings = settings;
  this.endDate = new Date(settings.endTime * 1000); // settings.endTime is in seconds
}
CountdownTimer.prototype = {
  start: function() {
    this.intervalId = setInterval(this.tick.bind(this), this.settings.tickInterval);
  },
  tick: function() {
    var now = new Date();
    if (this.endDate > now) {
      var remaining = this.endDate - now;
      this.settings.onTick({
        days: Math.floor(remaining / (24 * 60 * 60 * 1000)),
        hours: Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        minutes: Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60,
        seconds: Math.floor((remaining % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60
      });
    } else {
      this.settings.onTick({days: 0, hours: 0, minutes: 0, seconds: 0});
      clearInterval(this.intervalId);
    }
  }
};

$('.shortcode-countdown').each(function() {

  var $this = $(this);

  // width className
  var size = $this.attr('data-size');
  $this.addClass(getWidthClassNames($this, size));

  // timer
  var $days = $this.find('.countdown-days > .countdown-number > p');
  var $hours = $this.find('.countdown-hours > .countdown-number > p');
  var $minutes = $this.find('.countdown-minutes > .countdown-number > p');
  var $seconds = $this.find('.countdown-seconds > .countdown-number > p');
  var endTime = $this.attr('data-end');
  var leftPadWith0 = function(number) {
    return ('0' + number).slice(-2);
  };
  (new CountdownTimer({
    endTime: endTime,
    tickInterval: 1000,
    onTick: function(remaining) {
      $days.text(remaining.days);
      $hours.text(leftPadWith0(remaining.hours));
      $minutes.text(leftPadWith0(remaining.minutes));
      $seconds.text(leftPadWith0(remaining.seconds));
    }
  })).start();

});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$(".shortcode-embed-map").each(function() {
  var $this = $(this);

  $this.on("click", function() {
    $this.children('iframe').css("pointer-events", "auto");
  });
  $this.on('mouseleave', function() {
    $this.children('iframe').css("pointer-events", "none");
  });
});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$('.shortcode-form').each(function() {
  var $this = $(this);
  initForm($this);
});

function initForm($shortcode) {
  $shortcode.on('blur', 'form input, form textarea', function() {
    validate.call(this);
  });
  $shortcode.on('click', 'form .form-field-select .control-select-option', function() {
    var input = $(this).closest('.form-field-select').find('input').get(0);
    validate.call(input);
  });
  $shortcode.on('submit', 'form', function(event) {
    var $this = $(this),
      hash = $this.attr('data-hash'),
      projectLanguage = $this.attr('data-project-language'),
      id = $this.attr('data-form-id'),
      url = $this.attr('action'),
      successMessage = $this.find('button[data-success]').attr('data-success'),
      errorMessage = $this.find('button[data-error]').attr('data-error');

    event.preventDefault();
    clearFormMessages($this);

    var $elements = $this.find('input[pattern], textarea[pattern], input[required], textarea[required]');
    var submitForm = true;
    $elements.each(function() {
      if (!validate.call(this)) {
        submitForm = false;
      }
    });

    if (!submitForm) {
      return;
    }

    var data = [];
    $this.find('input, textarea').each(function() {
      var $elem = $(this);
      data.push({
        name: $elem.attr('name'),
        value: $elem.val(),
        required: Boolean($elem.prop('required')),
        type: $elem.attr('data-type'),
        slug: $elem.attr('data-slug')
      });
    });

    $.ajax({
      type: 'POST',
      url: url,
      data: {
        data: JSON.stringify(data),
        project_language: projectLanguage,
        form_id: id
      },
      beforeSend: function (request){
        request.setRequestHeader('X-Signature-Hmac-SHA256', hash);
      }
    }).done(function() {
      $this.hide();
      showFormMessage($this, getFormMessage('success', successMessage));
    }).fail(function() {
      $this.addClass('form-send-fail');
      showFormMessage($this, getFormMessage('error', errorMessage));
    });
  });
}

function validate() {
  var $this = $(this);
  var $parrentElem = $this.closest('.form-field');
  var value = $this.val();
  var result = true;

  $parrentElem.removeClass('form-field-error form-field-error-pattern form-field-error-required');

  var pattern = $this.attr('pattern');
  if (!new RegExp(pattern).test(value)) {
    $parrentElem.addClass('form-field-error form-field-error-pattern');
    result = false;
  }

  var isRequired = $this.prop('required');
  if (isRequired && !value.length) {
    $parrentElem.addClass('form-field-error form-field-error-required');
    result = false;
  }

  return result;
}
function getFormMessage(status, text) {
  var defaultTexts = {
    success: 'Your email was sent successfully',
    error: 'Your email was not sent',
    empty: 'Please check your entry and try again'
  };
  switch(status) {
    case 'success':
      return (
        '<div class="form-alert form-alert-success">' +
          (text || defaultTexts.success) +
        '</div>'
      );
    case 'error':
      return (
        '<div class="form-alert form-alert-error">' +
          (text || defaultTexts.error) +
        '</div>'
      );
  }
}
function clearFormMessages($form) {
  $form.parent().find('.form-alert').remove();
  $form.removeClass('form-send-empty form-send-success form-send-fail');
}
function showFormMessage($form, message) {
  $form.after(message);
}

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$(".shortcode-image-caption").each(function() {
  var $this = $(this);

  var $block = $this.closest('.grid-shortcodes');
  if (!$block.find('.shortcode-image-caption.active').length) {
    $block.find('.grid-shortcodes-item').eq(1).find('.shortcode-image-caption').addClass('active');
  }

  $this.on('mouseenter', function() {
    $this.closest('.grid-shortcodes').find('.shortcode-image-caption').removeClass('active');
    $this.addClass('hover active');
  });
  $this.on('mouseleave', function() {
    $this.removeClass('hover');
  });

});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$('.shortcode-menu > nav').each(function() {
  $(this).mmenu(
  // options
  {
    onClick: {
      preventDefault: false,
      close: true
    },
    navbar: {
      title: false
    },
    offCanvas: {
      position: 'top'
      //zposition: 'next'
    },
    autoHeight: true
  },
  // config
  {
    clone: true,
    offCanvas: {
      pageSelector: '#page-container'
    }
  });
});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$('.shortcode-owl-carousel').each(function() {
  var $this = $(this),
    configKey = $this.attr('data-config-key');

  $this.owlCarousel(__SHORTCODES_CONFIG__[configKey]);
});

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

function loadScript(url) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  document.getElementsByTagName("body")[0].appendChild(script);
}

// facebook
if ($('.shortcode-share-facebook').length) {
  loadScript('//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8');
}

// google
if ($('.shortcode-share-google').length) {
  loadScript('//apis.google.com/js/platform.js');
}

// twitter
if ($('.shortcode-share-twitter').length) {
  loadScript('//platform.twitter.com/widgets.js');
}

// linkedin
if ($('.shortcode-share-linkedin').length) {
  loadScript('//platform.linkedin.com/in.js');
}

}(jQuery));

(function ($) {
'use strict';

$ = 'default' in $ ? $['default'] : $;

$('.js-popup-video').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'bbm mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});

}(jQuery));


});
