if (window.innerWidth > 820) {
    elImgTag1.onmouseover = function (event) {
        if (this != event.currentTarget) {
            return false;
        }
        if (event.currentTarget.getAttribute('data-mouseover') != "" && event.currentTarget.getAttribute('data-mouseover') != null && event.currentTarget.getAttribute('data-mouseover') != "null") {
            var self = event.currentTarget,
                i = 1,
                images = event.currentTarget.getAttribute('data-mouseover').split(',');
            (function nextImage() {
                var dotsel = null
                var next = images[i++ % images.length].split('#');
                self.timeout = setTimeout(function () {
                    // $(self).data('timeout', setTimeout(function() {
                    self.src = next[0];
                    if (self != undefined) {
                        if (self.parentNode != undefined) {
                            var dotsel = self.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                    }
                    if (dotsel != null) {
                        if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active') != null) {
                            if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').nextElementSibling != null) {
                                dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').nextElementSibling.classList.add('inc_active')
                                dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').classList.remove('inc_active')
                            } else if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active') != null) {
                                dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').classList.remove('inc_active')
                                dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
                            }
                        }
                    }
                    nextImage();
                }, 800);
            })();
        }
    }
    elImgTag1.onmouseout = function (event) {
        if (this != event.currentTarget) {
            return false;
        }
        if (typeof (event.currentTarget.timeout) != "undefined") {
            clearTimeout(event.currentTarget.timeout);
        }
        var thiselm = event.currentTarget
        thiselm.src = thiselm.getAttribute('data-imageurl');
        var dotsel = null
        if (thiselm != undefined) {
            if (thiselm.parentNode != undefined) {
                var dotsel = thiselm.parentNode.parentNode.parentNode.parentNode.parentNode
                if (dotsel != null) {
                    if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.active') != null) {
                        dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').classList.remove('active')
                    }
                    if (dotsel.querySelector('.inc_product_img_gallery_list_item_block') != null) {
                        dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('active')
                    }
                }
            }
        }
    }
}

//check for IOS device and Tab
function isIpadOS() {
    return navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform);
}

var isIOS = isIpadOS();
var isIOSMob = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS || isIOSMob) {}

//Right Left Silder concept
var offset = 0;
var offset_rec = 0;
var slidevalue = 0;
var slidevalue_rec = 0;

var sliderBtnCounter_rec = 0;
rightelmbtn.addEventListener("click", function () {
    sliderBtnCounter_rec++;
    if (sliderBtnCounter_rec > productBlocks.length - 1) {
        sliderBtnCounter_rec--;
    }
    var all_p_length = elallModulecard.length;
    var cc_ounts = 0;
    if (window.innerWidth < 800) {
        cc_ounts = 2;
    } else if (window.innerWidth < 1200) {
        cc_ounts = 3;
    } else {
        cc_ounts = 4;
    }
    var width_slide = "";
    var wid_sld = element.clientWidth;

    if (slidevalue_rec + cc_ounts < all_p_length) {
        leftbtn.setAttribute("style", "pointer-events: auto;opacity:1");
        slidevalue_rec++;
        var menu = null;
        offset_rec = parseInt(offset_rec) - width_slide + "px";
        if (window.innerWidth < 500) {
            menu = elListContainer;
            menu.setAttribute("style", "left:" + offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;");
        } else {
            menu = amBlock.parentNode.parentNode.querySelector(".inc_af_product-list_block");
            menu.setAttribute("style", "left:" + offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;");
        }
        if (document.querySelector(".inc_dots.inc_active") != null) {
            document.querySelector(".inc_dots.inc_active").classList.remove("inc_active");
        }
        if (document.querySelectorAll(".inc_dots")[+slidevalue_rec] != null) {
            document.querySelectorAll(".inc_dots")[+slidevalue_rec].classList.add("inc_active");
        }
    }
    if (+slidevalue_rec + +cc_ounts == all_p_length) {
        amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5");
        amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5");
    }
});
leftelmbtn.addEventListener("click", function () {
    sliderBtnCounter_rec--;
    if (sliderBtnCounter_rec == -1) {
        sliderBtnCounter_rec = 0;
    }
    if (slidevalue_rec == -1) {
        slidevalue_rec = 0;
    }
    var wid_sld = document.querySelector(".inc_af_block .inc_product_module_block").clientWidth;
    var width_slide = "";
    if (INC.config.pageType == "pdp" && !INC.config.recommendation) {
        if (window.innerWidth > 1205) {
            width_slide = wid_sld;
        } else {
            width_slide = wid_sld;
        }
    } else {
        width_slide = wid_sld;
    }
    if (slidevalue_rec > 0) {
        amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style", "pointer-events: auto;opacity:1");
        amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style", "pointer-events: auto;opacity:1");
        slidevalue_rec--;
        offset_rec = parseInt(offset_rec) + width_slide + "px";
        var menu = null;
        if (window.innerWidth < 500) {
            menu = amBlock.parentNode.parentNode.querySelector(".inc_af_product-list_block");
            menu.setAttribute("style", "left:" + offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;");
        } else {
            menu = elListContainer;
            menu.setAttribute("style", "left:" + offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;");
        }
        if (document.querySelector(".inc_dots.inc_active") != null) {
            document.querySelector(".inc_dots.inc_active").classList.remove("inc_active");
        }
        if (document.querySelectorAll(".inc_dots")[+slidevalue_rec] != null) {
            document.querySelectorAll(".inc_dots")[+slidevalue_rec].classList.add("inc_active");
        }
    }
    if (slidevalue_rec == 0) {
        leftbtn.setAttribute("style", "pointer-events: none;opacity:0.5");
    }
});


////read cookie

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var s in ca) {
        if (Object.prototype.hasOwnProperty.call(ca, s)) {
            var c = ca[s];
            while (c.charAt(0) == " ") {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
    }
    return null;
}

//currency
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
});

//rating structure
const get_product_ratings = (filed3, field2, rating_containers) => {
    let count = document.createElement('span');
    count.classList.add('rating_count')
    rating_containers.appendChild(count);
    let avg = document.createElement('span');
    avg.classList.add('rating_avg')
    if (field2 == undefined) {
        count.textContent = "0 reviews";
        rating_containers.classList.add('inc_hide')
    } else {
        count.textContent = field2 + " reviews";

    }
    let stars = document.createElement('span');
    if (filed3 != undefined && filed3 != "") {
        let rating = filed3;
        if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
            rating = 0
        }
        rating = parseFloat(rating).toFixed(1)
        rating = rating.toString();
        let rating_m = null;
        if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
            rating_m = rating.replace(".", "-");
        }
        if (rating == 0) {
            rating = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
        }
        if (rating == 2) {
            rating = "2-0"
        }
        if (rating == 3) {
            rating = "3-0"
        }
        if (rating == 4) {
            rating = "4-0"
        }
        if (rating == 5) {
            rating = "5-0"
        }
        if (rating == "") {
            rating = 0;
        }
        if ((rating_m != null && rating_m != "NaN")) {
            rating_containers.classList.add("rating_" + rating_m);
        } else if (isNaN(rating_m)) {
            rating_containers.classList.add("rating_" + rating);
        } else {
            rating_containers.classList.add("rating_" + rating);
        }
        stars.classList.add('rating_stars');
        rating_containers.appendChild(stars);
    } else {
        stars.innerText = "."
        stars.style.color = "#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.appendChild(stars);
    }
}

//scroll auto to see element
function scrollincelmtoview(element) {
    let topOfElement = element.offsetTop - (114)
    window.scroll({
        top: topOfElement,
        behavior: "smooth"
    });
}

//qty keydown, keypress
let elQtyInput = generate_html_tag('input');
elQtyInput.setAttribute('type', "number");
elQtyInput.setAttribute('aria-label', "quantity");
elQtyInput.setAttribute('min', 1);
elQtyInput.setAttribute('max', 99);
elQtyInput.setAttribute('maxlength', 99);
elQtyInput.value = 1;
elQtyInput.setAttribute('old_qty', '1');
elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
elQtyInput.addEventListener("keydown", function (event) {
    let elmth = this
    let keyCode = event.which || event.keyCode;
    if (keyCode === 13) {
        event.preventDefault();
    } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
        return;
    }
    let charValue = String.fromCharCode(keyCode),
        valid = /^[0-9]+$/.test(charValue);
    if (!valid) {
        event.preventDefault();
    } else {
        setTimeout(function () {
            qtyupdateInc(elmth, productBlock, elAddText)
        }, 50);
    }
});
elQtyInput.addEventListener('focusout', function () {
    let elmt = this
    setTimeout(function () {
        qtyupdateInc(elmt, productBlock, elAddText)
    }, 50);
});

function qtyupdateInc(_elm, prdblk, eladtext) {
    if (_elm.value.length == 0) {
        _elm.value = 1;
    }
    if (_elm.value == 0) {
        _elm.value = 1;
    }
    if (_elm.value > 99) {
        _elm.value = 99;
    }
    if (_elm.value == 99) {
        elQtyUpBlock.classList.add('maxqty')
        elQtyBlock.classList.remove('singleqty')
    }
    if (_elm.value < 99) {
        elQtyUpBlock.classList.remove('maxqty');
    }
    if (_elm.value > 1) {
        elQtyBlock.classList.remove('singleqty')
    }
}
productDescQtyInputText.appendChild(elQtyInput);

let added_text = document.createElement('span');
added_text.classList.add("inc_add_text");
productDescQtyInputText.appendChild(added_text);

elQtyDownBlock.addEventListener('click', function () {
    let elinput = inputElement
    let productModuleBlock = productBlock.parentNode.parentNode;

    elinput.value = (elinput.value - 1 < 1) ? 1 : elinput.value - 1;
    if (parseInt(elinput.value) <= 99) {
        elQtyUpBlock.classList.remove('maxqty')
    }
});

elQtyUpBlock.addEventListener('click', function () {
    let elinpt = inputElement
    elinpt.value = (parseInt(elinpt.value) + 1 > 99) ? 99 : parseInt(elinpt.value) + 1;
    if (parseInt(elinpt.value) == 99) {
        elQtyUpBlock.classList.add('maxqty')
    }
});

//current format time

function getCurrentFormattedTime() {
    let d = new Date();
    return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
}

//add data to cookie
 addVisitorID = function () {
    function generateUniqueINCVisitorId(len, bits) {
        let bits1 = bits || 36;
        let outStr = "";
        let newStr;
        while (outStr.length < len) {
            newStr = generateRandomString(bits1).toString().slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }
    let ivid = "";
    if (readCookie('ivid') != undefined) {
        ivid = readCookie('ivid')
    }
    let clientdomain = window.location.host
    let arr = clientdomain.split(".");
    let d = new Date();
    let expires = "expires=" + d.toUTCString();
    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        arr.shift();
        clientdomain = arr.join(".");
        if (arr == 'com') {
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    } else {
        arr.shift();
        clientdomain = arr.join(".");
        if (arr == 'com') {
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }
    INC.config.ivid = ivid;
    console.log(ivid);
    return ivid;
}

//touch scroll

document.addEventListener("touchmove", checkScrollDirection, false);
function checkScrollDirection() {
    if (document.querySelector('.inc_pdp_block') != null) {
        // block style
    }
}

//slide image
function slideTo(_id, _n, elm, type_of, arrow) {
    if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
        let nn2 = -1
        let indslid = INC.config.inc_slideIndex += nn2
        inc_showSlides(indslid, nn2, elm, type_of, arrow);
    } else {
        let nn1 = 1
        let indslid1 = INC.config.inc_slideIndex += nn1
        inc_showSlides(indslid1, nn1, elm, type_of, arrow);
    }
}

function inc_showSlides(n, _ind, elm, _type_of, arrow) {
    let showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
    let showcase_dots = elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
    let modal_dots = elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

    let dup_showcase_dots = elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_dot_block .inc_product_img_gallery_list_item_block')
    let dup_modal_dots = elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_dot_block .inc_product_img_gallery_list_item_block')

    let showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

    let modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')

    let otherImg_list = showcase_other_img_list.getAttribute('otherImageList');
    let additional_img = []
    additional_img = otherImg_list.split(',');
    let get_org_img = showcase_other_img_list.getAttribute('imageURL')
    if (n > additional_img.length) {
        INC.config.inc_slideIndex = 1
    }
    if (n < 1) {
        INC.config.inc_slideIndex = additional_img.length
    }

    for (let im = 0; im < showcase_dots.length; im++) {
        showcase_dots[im].classList.remove('inc_active')
        if (modal_dots[im] != undefined) {
            modal_dots[im].classList.remove('inc_active')
        }
    }
    for (let im1 = 0; im1 < dup_showcase_dots.length; im1++) {
        dup_showcase_dots[im1].classList.remove('inc_active')
        if (dup_modal_dots[im1] != undefined) {
            dup_modal_dots[im1].classList.remove('inc_active')
        }
    }
    let img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90', '2000x1500');
    if (img_src != "null") {
        showcase_other_img.setAttribute('src', img_src);
        modal_other_img.setAttribute('src', img_src)
        showcase_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");
        modal_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");

        for (let r = 0; r < showcase_dots.length; r++) {
            showcase_dots[r].classList.remove('inc_active');
            modal_dots[r].classList.remove('inc_active');
        }
        for (let r1 = 0; r1 < dup_showcase_dots.length; r1++) {
            dup_showcase_dots[r1].classList.remove('inc_active');
            dup_modal_dots[r1].classList.remove('inc_active');
        }
        if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
            showcase_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
        }
        if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
            modal_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
        }
        if (dup_showcase_dots[INC.config.inc_slideIndex - 1] != null) {
            dup_showcase_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
        }
        if (dup_modal_dots[INC.config.inc_slideIndex - 1] != null) {
            dup_modal_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
        }
        if (arrow == "arrow") {
            if (modal_dots.length > 6) {
                let activedots = elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active')
                if (activedots != null) {
                    let actind = activedots.getAttribute('index')
                    if (actind == 5) {
                        if (modal_dots.length >= 6) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 6) {
                        if (modal_dots.length >= 7) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 7) {
                        if (modal_dots.length >= 8) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                            modal_dots[2].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 8) {
                        if (modal_dots.length >= 9) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                            modal_dots[2].setAttribute('style', 'display: none !important;')
                            modal_dots[3].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 9) {
                        if (modal_dots.length >= 10) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                            modal_dots[2].setAttribute('style', 'display: none !important;')
                            modal_dots[3].setAttribute('style', 'display: none !important;')
                            modal_dots[4].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 10) {
                        if (modal_dots.length >= 11) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                            modal_dots[2].setAttribute('style', 'display: none !important;')
                            modal_dots[3].setAttribute('style', 'display: none !important;')
                            modal_dots[4].setAttribute('style', 'display: none !important;')
                            modal_dots[5].setAttribute('style', 'display: none !important;')
                        }
                    } else if (actind == 11) {
                        if (modal_dots.length >= 12) {
                            modal_dots[0].setAttribute('style', 'display: none !important;')
                            modal_dots[1].setAttribute('style', 'display: none !important;')
                            modal_dots[2].setAttribute('style', 'display: none !important;')
                            modal_dots[3].setAttribute('style', 'display: none !important;')
                            modal_dots[4].setAttribute('style', 'display: none !important;')
                            modal_dots[5].setAttribute('style', 'display: none !important;')
                            modal_dots[6].setAttribute('style', 'display: none !important;')
                        }
                    } else {
                        modal_dots[0].style.display = "flex"
                        modal_dots[1].style.display = "flex"
                        modal_dots[2].style.display = "flex"
                        modal_dots[3].style.display = "flex"
                        if (modal_dots[4] != undefined) {
                            modal_dots[4].style.display = "flex"
                        }
                        if (modal_dots[5] != undefined) {
                            modal_dots[5].style.display = "flex"
                        }
                        if (modal_dots[6] != undefined) {
                            modal_dots[6].style.display = "flex"
                        }
                    }
                    // }
                }
            }
        }
    }
}
// SWIPE FEATURE
let xDown = null;
let yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, {
        passive: true
    });
    element.addEventListener('touchmove', handleTouchMove, {
        passive: true
    });
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    let prod_card = null;
    if (!xDown || !yDown) {
        return;
    }
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "left")
            } else {
                /* right swipe */
                prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}
rightarror.addEventListener("click", function () {
    let prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let pr_id = prod_card.getAttribute('data-main_id')
    slideTo(pr_id, 0, prod_card, "right", "arrow")
});
leftarrow.addEventListener("click", function () {
    let prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let pr_id = prod_card.getAttribute('data-main_id')
    slideTo(pr_id, 0, prod_card, "left", "arrow")
});
// sort based on given array
function attribute_listing(valueArray) {
    let items = valueArray
    let sorting = ["Colour", "Color", "Color_size", "Size", "Leather", "Castors", "Size_", "Length", 'Castors_Size', 'Leather_Size'];
    let result = []
    sorting.forEach(function (key) {
        let found = false;
        items = items.filter(function (item) {
            if (!found && item.attributeCode == key) {
                result.push(item);
                found = true;
                return false;
            } else {
                return true;
            }
        })
    })
    return result;
}

//discount 

function get_discount_price(p_original_price, p_sale_price) {
    return parseFloat(Math.abs(+p_original_price - +p_sale_price))
}

function get_discount_price_percentage(p_original_price, p_sale_price) {
    return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
}

//sort by 
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        let x = a[key],
            y = b[key];
        if (typeof x === 'string') {
            x = x.toLowerCase();
            y = y.toLowerCase();
            if (!isNaN(x) && !isNaN(y)) {
                x = parseInt(x, 10);
                y = parseInt(y, 10);
            }
        }
        return (x < y ? -1 : (sortdata_(x, y)));
    });

    function sortdata_(x, y) {
        return x > y ? 1 : 0;
    }
}

//unique from array
function getUniqueCatergories() {
    let catergoriesArray = [];
    let productListObj = dataStoreObj;
    let bundleProductsArray = bundleProductsArray;
    bundleProductsArray.forEach(function (productId) {
        for (let childProductId in productListObj[productId]) {
            if (productListObj[productId][childProductId].bundleId != undefined) {
                let indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != clientProductDealsCategory) {
                    catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                }
            }
        }
    });
    return catergoriesArray;
}

//unique data 
function filterDuplicates(data, key) {
    const uniqueKeys = new Set();
    return data.filter(obj => {
       const value = obj[key];
       if (!uniqueKeys.has(value)) {
          uniqueKeys.add(value);
          return true;
       }
       return false;
    });
 }

//  remove removeDuplicate
const removeDuplicate = () => {
    let filterCategories = filterDuplicates(products, 'brand')
    let filterBrands = filterDuplicates(filterCategories, 'category')
    setActiveFilterProduct(filterBrands)
}

//flattend array

var flatarr = [1,[2,[3,4],5],6]
const flatendArray = (array) => {
    if(!array.length){
        return [];
    }
    var nestArray=[]
    array.forEach((item) => {
        if(Array.isArray(item)){
            nestArray = nestArray.concat(flatendArray(item))
        }else{
            nestArray.push(item)
        }
    })
    return nestArray
}


//reverse String
var str = 'hello'
reverseString(str)
function reverseString(str) {
    if(str === ""){
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}
//nesting

var Input  = { a: { b: { c: 42, d: 'foo' }, d: 'bar' }, e: 'baz' }
// Output = { :a_b_c=>42, :a_b_d=>"foo", :a_d=>"bar", :e=>"baz" }
var strinflat=[]
const flatArray = (obj, Parent=[]) => {
    
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            var currentKey = Parent.concat(key)
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                flatArray(obj[key], currentKey)
            }else{
                var newKeys = currentKey.join("_")
                strinflat((preData) => ({
                    ...preData ,
                    [newKeys] : obj[key]
                }))
            }
        }
    }
    return strinflat
}

//