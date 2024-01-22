/* eslint-disable no-inner-declarations */
var timer_counts = 0;
var crawled = true;
var inc_client_country_code = "";
var exclude_vip_acc = []
// var timer_interval = setInterval(function() {
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function generateIcid() {
    rvid = randomIvid(42, 16);
    return rvid;
}

function randomIvid(len, bits) {
    bits = bits || 36;
    var outStr = "",
        newStr;
    while (outStr.length < len) {
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr;
};

function getVisitorId() {
    var clientDomain = window.location.host.replace("www2", "");
    if (readCookie('ivid') == undefined || readCookie('ivid') == '' || readCookie('ivid') == null || readCookie('ivid') == 'null') {
        var vid = ((readCookie('ivid') == undefined) || readCookie('ivid') == '' || (readCookie('ivid') == 'null')) ? generateIcid() : readCookie('ivid');
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + vid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + false + ';'
    }
    // if (readCookie('ivid') != undefined && readCookie('ivid') != '' && readCookie('ivid') != 'null') {
    //     vid = readCookie('ivid')
    //     var oImg = document.createElement("img");
    //     oImg.setAttribute('src', '//optimizedby.increasingly.co/GetVisitorId?ivid=' + vid);
    //     oImg.setAttribute('height', '1px');
    //     oImg.setAttribute('width', '1px');
    //     oImg.setAttribute('style', 'display:none')
    //     document.body.appendChild(oImg);
    // }
}

function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}
getVisitorId()
setTimeout(function () {
    var versionUpdate = (new Date()).getTime();
    if (window.location.host == "www2.avoncosmetics.ro") {
        if (window.location.pathname.indexOf("order-confirm") >= 0) {
            var jsFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/js/aVoR0MA_conversion.js?v=" + versionUpdate;
            var scriptTag = document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.src = jsFilePath;
            document.querySelector('body').appendChild(scriptTag);
        }else { 
            var iOS_inc = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if(iOS_inc == false){
                loadfiles()
            }
            function loadfiles(){
                var versionUpdate = (new Date()).getTime();
                if(window.location.pathname.indexOf('product-entry') >= 0){
                    function addCSSFile() {
                        var cssFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/tickbox/css/aVoR0MA.css?v="+versionUpdate;
                        var linkTag = document.createElement('link');
                        linkTag.rel = "stylesheet";
                        linkTag.href = cssFilePath;
                        document.querySelector('head').appendChild(linkTag);
                    }
                    addCSSFile()
                    var jsFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/tickbox/aVoR0MA_tickbox.js?v="+versionUpdate;
                    var scriptTag = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.id = "inc_js_script";
                    scriptTag.src = jsFilePath;
                    document.querySelector('body').appendChild(scriptTag);
                    // function addCSSFile() {
                    //     var versionUpdate = (new Date()).getTime();
                    //     var cssFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/css/aVoR0MA.css?v=" + versionUpdate;
                    //     var linkTag = document.createElement('link');
                    //     linkTag.rel = "stylesheet";
                    //     linkTag.href = cssFilePath;
                    //     document.querySelector('head').appendChild(linkTag);
                    // }
                    // addCSSFile() 
                    // var versionUpdate = (new Date()).getTime();
                    // var jsFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/js/aVoR0MA.js?v=" + versionUpdate;
                    // var scriptTag = document.createElement('script');
                    // scriptTag.type = 'text/javascript';
                    // scriptTag.src = jsFilePath;
                    // document.querySelector('body').appendChild(scriptTag);
                }else if (window.location.href.indexOf('orders/offers') >= 0 || window.location.href.indexOf('orders/cart') >= 0) {
                    function addCSSFile() {  
                        var cssFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/tickbox/css/aVoR0MA_offer.css?v="+versionUpdate;
                        var linkTag = document.createElement('link');
                        linkTag.rel = "stylesheet";
                        linkTag.href = cssFilePath;
                        document.querySelector('head').appendChild(linkTag);
                    }
                    addCSSFile()
                    var jsFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/tickbox/aVoR0MA_offer_tickbox.js?v="+versionUpdate;
                    var scriptTag = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.id = "inc_js_script";
                    scriptTag.src = jsFilePath;
                    document.querySelector('body').appendChild(scriptTag);
                    // function addCSSFile() {
                    //     var versionUpdate = (new Date()).getTime();
                    //     var cssFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/dev/css/aVoR0MA_offer.css?v=" + versionUpdate;
                    //     var linkTag = document.createElement('link');
                    //     linkTag.rel = "stylesheet";
                    //     linkTag.href = cssFilePath;
                    //     document.querySelector('head').appendChild(linkTag);
                    // }
                    // addCSSFile() 
                    // setTimeout(function(){
                    //     var versionUpdate = (new Date()).getTime();
                    //     var jsFilePath = "https://www.increasingly.co/Implementation/aVoR0MA/js/aVoR0MA_offer.js?v=" + versionUpdate;
                    //     var scriptTag = document.createElement('script');
                    //     scriptTag.type = 'text/javascript';
                    //     scriptTag.src = jsFilePath;
                    //     document.querySelector('body').appendChild(scriptTag);
                    // },500)
                } 
            }
        }

        
        console.log('ivid', readCookie('ivid'))
       

        var remo_succ_mes = setInterval(function () {
            timer_counts++
            if (document.querySelector('#shared-banner .bnr-close') != null) {
                clearInterval(remo_succ_mes)
                document.querySelector('#shared-banner .bnr-close').click()
            }
            if (timer_counts * 100 > 20000) {
                clearInterval(remo_succ_mes)
            }
        }, 10)
        
    }
}, 1000)

