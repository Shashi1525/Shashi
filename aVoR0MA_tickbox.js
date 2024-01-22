
update_call_flag = true;
/***************************************************************
******  WARNING: Make 'false' to switch off the script  ********
/***************************************************************/
var inc_switch = true;
var onload_var = false
/***************************************************************
**************  WARNING: Switch modules on/off  ****************
/***************************************************************/
var switch_board = {
    quantity: true,
    configurables: true,
    its_cart_page: false,
    its_pdp_page: false,
    its_plp_page: false,
    catogory_tab: true,
    bundle_tab: true,
    delivery_info: false,
    cart_modal: false,
    tracking: true,
    jquery_ajax_request: true,
    modal: true,
    quantity_dropdown: false,
    dataLayer_details: true,
    price_range: false,
    add_to_cart_btn_with_price: false,
    more_images: true,
    ratings: true,
    after_modal: false,
    exclusive_price_enabled: false,
    unauthorized: false

}
/***************************************************************
**************  WARNING: Variables  ****************
/***************************************************************/
var client_vars = {
    add_to_cart_url: '//www.avon.cz/api/cartapi/add',
    product_ids: [],
    product_urls: [],
    api_key: 'aVoR0MA',
    vid: null,
    event_type: '',
    form_key: '',
    cartProductNames: [],
    is_tc: 1,
    is_tc_nb: 30,
    is_bfb: 1,
    basket_amount: "",
    rt: 1,
    nbp: '',
    cart_prod_id: [],
    split_test: true,
    curr_sym: '£',
    item_validation: [],
    subclick:false
}

/***************************************************************
/***************************************************************/
var bundle_vars = {
    quantity_text: 'Quantity:',
    add_to_cart_btn_text: 'Add to bag',
    add_bundle_to_cart_btn_text: 'Add bundle to cart',
    checkout_btn_text: 'Checkout',
    checkout_btn_link: 'https://www2.avoncosmetics.ro/ro-home/orders/sales-tools',
    view_cart_btn_link: 'https://www2.avoncosmetics.ro/ro-home/orders/sales-tools',
    view_cart_btn_text: 'View bag',
    cart_page_title: 'Other Customers Also Bought',
    pdp_page_title: 'Selected for you',
    modal_page_title: 'Other Customers Also Bought',
    alt_page_title: 'Recommended alternatives',
    delivery_text: 'Free Worldwide delivery on all orders over £50',
    after_modal_title: 'Other Customers Also Bought',
    load_type: 'onload',
    product_ids: null,
    product_urls: null,
    source_btn: 'inc_btn',
    bundle_response: [],
    bundle_response_after_M: [],
    bundle_response_tc: [],
    slide_image_count: 0,
    plp_added_title: '',
    plp_added_url: '',
    plp_added_img_url: '',
    plp_added_price_box: '',
    plp_added_id: '',
    plp_added_color: '',
    plp_added_size: '',
    one_event: false,
    pdp_client_btn: false,
    price_array: [],
    x_price_array: [],
    incr: 0,
    op: 0.00,
    clicked_btn: null,
    curr_input_val: 1,
    ids_to_exclude: [],
    variant_selected: [],
    dup_prod: [],
    response_prodcut_ids: [],
    is_size: false,
    pdp_response: [],
    p_first: false,
    p_second: false,
    country_lang: "",
    p_conf_first: "",
    p_conf_sec: "",
    client_size: [],
    client_color: [],
    client_clr_img: [],
    inc_size_id: [],
    attr_flag: false,
    added_prc: 0,
    added_sprc: 0,
    quick_view: false,
    event_type: null,
    min_cartold_qty: 0,
    push_product_to_add: [],
    all_dup_push_prod: [],
    all_dup_child_prod: [],
    all_dup_added_prod: [],
    main_pr_cal: true,
    irb_fired: true,
    client_varient: false,
    create_prod_c: 0,
    is_promos: false,
    conf_opt_c: 0,
    old_act_bun_left: 0,
    is_ratings: false,
    were_added: "Items added to your cart",
    has_added: "Sorry, item(s) has not been added to your Bag",
    add_text: "Add",
    added_text: "Added",
    add_atl_one_item: "Please add atleast one item to proceed",
    clicked_btn_colour: null,
    slide_click_count: 0,
    after_modal_dup_prd: [],
    total_cart_item: 0,
    total_cart_price: 0,
    select_shade: "Select a Shade",
    selected_item: "Selected Items",
    add_to_kit: "Add to kit",
    total_kit_price: "Total Price: ",
    regular_price: "Regular Price",
    items_to_cart: " ITEMS TO CART",
    item_to_cart: " ITEM TO CART",
    you_save: "Save ",
    please_add_shade: "Please add the shade from above",
    recently_added: "Recently Added:",
    your_bag_summary: "Your bag summary",
    total_item: "Total item:",
    sub_total: "Subtotal:",
    total_items: "Total items:",
    additinal_items: "additional items",
    remove_title: "Remove",
    see_more: "See more products",
    see_less: "See less products",
    continue_text: "Continue Shopping",
    disc_of: "Congratulation! you carry a discount of:",
    selectred_for_you: "Selected for you",
    buy_more_save_more: "Buy more save more",
    previous: "Previous",
    next: "Next",
    bag_subtotal: "BAG SUBTOTAL",
    item_s: "ITEM'S",
    buy_a_pack_of: "Buy a Pack of",
    select_a_pack: "Select a Pack",
    product_id: "Product ID",
    select_colour: "Select Colour",
    select_size: "Select Size",
    is_event_added: true,
    dup_json_response: [],
    on_load_bundle: true,
    dup_attr_p: [],
    dup_attr_p1: [],
    instock_attribues: [],
    count_of_attrt: 0,
    def_bundles: [],
    dup_response: [],
    modal_btn_clicked: false,
    fbt_input_tag: null,
    call_irb_trigger: true,
    sku_irb_product_list: [],
    sku_product_count: []

}
var duplicatefbtprod=[]
var progress_bar_html=null
var campain_price=null;
var added_prod_prc=null;
var active_customer_for_added_prod=null;
var session_data=""
var cust_html_bootm=null
var lastadded_product = ""
var alltabentryid=[]
getVisitorId();

document.querySelector('body').classList.add('inc_new_css_change')

var title_promo = []

var main_prod_title = []
var on_load_prod_show = [34133172,34133171,34133170,34133169,34133168,34133167,34133166,34133165,34133164,34133163,34133162,34133161,34133160,34133159,34133158,34133157,34133156,34133155,34133154,34133153,34133152,34133151,34133150,34133149,34133148,34133147,34133146,34133145,34133144,34133143,34133142,34133141,34133140,34133139,34133138,34133137,34133136,34133135,34133134,34133133]
/***************************************************************
/***************************************************************/
//document.querySelectorAll('.container .component.component_tray .pl-2')[0].innerText
if (window.location.host.indexOf('.ro') >= 0) {
    bundle_vars.quantity_text = 'cantitate:'//translator
    bundle_vars.add_to_cart_btn_text = 'Adaugă în coș'
    bundle_vars.checkout_btn_text = 'Verifică' //translator
    bundle_vars.view_cart_btn_text = 'Continua comanda'; //'Pokračujte do košíku' // translator
    bundle_vars.cart_page_title = 'Alți Reprezentanți au comandat și aceste produse'
    bundle_vars.pdp_page_title = 'Realizează propriul set de înfrumusețare'
    bundle_vars.modal_page_title = 'Alți Reprezentanți au comandat și aceste produse'
    bundle_vars.after_modal_title = 'Alți Reprezentanți au comandat și aceste produse'
    bundle_vars.add_text = "Adaugă "
    bundle_vars.added_text = "Adăugate"
    bundle_vars.add_atl_one_item = "Te încurajăm să adaugi cel puțin 1 produs"
    bundle_vars.select_shade = "Selectează o nuanță"
    bundle_vars.selected_item = "Produse selectate"
    bundle_vars.add_to_kit = "Adaugă în coș"
    bundle_vars.total_kit_price = "Coș total: "
    bundle_vars.regular_price = "Valoare" //pending //translator
    bundle_vars.items_to_cart = " Produse în coș"
    bundle_vars.item_to_cart = " Produse din coș"
    bundle_vars.you_save = "Salvați " //translator
    bundle_vars.please_add_shade = "Selectează o nuanță"
    bundle_vars.recently_added = "Adăugate recent:"
    bundle_vars.your_bag_summary = "Sumar coș"
    bundle_vars.total_item = "Element total:" //translator
    bundle_vars.sub_total = "Subtotal:"
    bundle_vars.total_items = "Total articole:"
    bundle_vars.additinal_items = "Produse adiționale"
    bundle_vars.remove_title = "PȘterge"
    bundle_vars.see_more = "Vezi mai multe produse"
    bundle_vars.see_less = "Vezi mai puține produse"
    bundle_vars.select_colour = "Selectează o variantă"
    bundle_vars.select_size = "Selectează o dimensiune"
    if (window.location.hostname.indexOf('www2') >= 0) {
        bundle_vars.total_kit_price = "Coș total";
        bundle_vars.disc_of = 'Beneficiile tale';//"Iată ce beneficii poți avea"
        bundle_vars.selectred_for_you = "Selectate pentru tine"
        bundle_vars.buy_more_save_more = "Cumpărați mai mult economisiți mai mult"; //translator //"Kupte více a ušetřete více"
        bundle_vars.you_save = 'Salvați '; //"Sleva " //traslator
        bundle_vars.previous = "Anterior"
        bundle_vars.next = "Următor"
        bundle_vars.bag_subtotal = "Subtotal comanda "
        bundle_vars.item_s = "produse"; //"Položky" //translator
        bundle_vars.continue_text = "Inchide"; //"Pokračujte v nakupování" //translator
        bundle_vars.buy_a_pack_of = "Adaugă un set care conține"
        bundle_vars.select_a_pack = "Selectează set"
        bundle_vars.product_id = "Cod produs"
    }

}
if (inc_switch) {
    inc_load_bundle()
}

function inc_load_bundle() {
    var delay = 2000
    var client_element_to_ap=false;
    var client_element = setInterval(function(){
        if(document.querySelector('.pao-section.shpByProdNum') != null){
            client_element_to_ap=true;
            clearInterval(client_element)
            if(client_element_to_ap == true){
                place_inc_divs();
                if (!switch_board.its_plp_page) {
                    if (switch_board.its_pdp_page && client_vars.product_ids.length != 0) {
                        if (document.querySelector('.pao-section.shpByProdNum') != null) {
                            prepare_ajax_data(bundle_vars.load_type, null, null, null);
                        }
                    } else {
                        if (client_vars.product_ids.length != 0 && switch_board.its_cart_page) {
                            prepare_ajax_data(bundle_vars.load_type, null, null, null);
                        }
                    }
    
                }
            }
        }
    },100)
    if (window.location.pathname == "/cart/" || window.location.pathname == '/kosik/') {
        delay = 2000;
    }
    if (detectIE()) {
        delay = 1000
        if (window.location.pathname == "/cart/" || window.location.pathname == '/kosik/') {
            delay = 4000;
        }
    }
   
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}

function place_inc_divs() {
    if (document.querySelector('.pao-section.shpByProdNum') != null) {
        switch_board.its_pdp_page = true;
        var child_node = document.querySelector('.pao-section.shpByProdNum').childNodes.length;
        var class_name = 'inc_bundling_pdp';
        if(window.innerWidth > 767){
            var client_div = '.pao-section.shpByProdNum';
        }else{
            // var client_div = '#addProdSrchModal .modal';
            var client_div = '.body-wrapper'//'.yrOrders-wrap .yrOrders-C';
            var child_node = 4;
        }
        var childNode = child_node;
        client_vars.event_type = 'catalog_product_view';
        client_vars.nbp = 2;
        pdpprd_id = "dummy"
        client_vars.product_ids.push(pdpprd_id)
        
        localStorage.setItem("last_id", client_vars.product_ids[0]);
    }
    if (!switch_board.its_plp_page) {
        add_div(class_name, client_div, childNode);
        modal_add(class_name, client_div, childNode)
    }

}

function add_div(class_name, client_div, childNode) {
    var div = generate_html_tag("div");
    div.setAttribute('id', 'increasingly_element');
    div.setAttribute('class', class_name);
    div.classList.add("increasingly_bundles");
    if (document.querySelector('body.Controller_Product') != null) {
        div.classList.add('old_template')
    }
    if (document.querySelectorAll('#increasingly_element')[0] == null) {
        if(window.innerWidth > 767){
            var view = document.querySelector(client_div);
            if (view != null || view != undefined) {
                view.insertBefore(div, view.childNodes[childNode]);
            }
        }else{
            var elmdiv = document.querySelector('pao-submit-order')
            if(elmdiv != null){
                var eld=elmdiv.nextElementSibling
                eld.parentNode.insertBefore(div, eld);
            }else {
                var view = document.querySelector(client_div);
                if (view != null || view != undefined) {
                    view.insertBefore(div, view.childNodes[childNode]);
                }
            }
        }
    }
    //getVisitorId();
}

function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

function prepare_ajax_data(load_type, id1, id2, plp_elem) {

    var ajax_data = {};
    ajax_data.product_ids = client_vars.product_ids[0];
    ajax_data.category_id = '';
    ajax_data.api_key = client_vars.api_key;
    ajax_data.client_id = '';
    ajax_data.order_id = '';
    ajax_data.page_type = client_vars.event_type;
    ajax_data.client_visitor_id = readCookie('ivid');
    ajax_data.npb = client_vars.nbp;
    setTimeout(function() {
        if (bundle_vars.irb_fired == true) {
            if (switch_board.its_pdp_page && load_type == "onload") {
                bundle_vars.irb_fired = false;
            }
            if (switch_board.its_pdp_page) {
                if (document.querySelectorAll('#ic_bundle_pdp')[0] == null) {
                    if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                        make_ajax_request(ajax_data, load_type, id1, id2, plp_elem);
                    }
                }
            }
        }
    }, 50);
}

function make_ajax_request(products, load_type, id1, id2, plp_elem) {
    var url = 'https://rapidload.increasingly.co/increasingly_bundles?irb/';
    var get_string = '';
    for (var product in products) {
        var getSymbol = product != 'npb' ? '&' : '';
        get_string += product + '=' + products[product] + getSymbol;
    }
    get_string = get_string + "&is_tc=1&no_of_bundles=" + client_vars.is_tc_nb;

    if (document.querySelector('#cart-Qty') != null) {
        bundle_vars.min_cartold_qty = document.querySelector('#cart-Qty').innerText;
    }
    if (document.querySelector('body') != null) {
        document.querySelector("body").style.overflowX = "hidden";
    }
    var get_query_string = btoa(get_string);
    url += get_query_string;
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onerror = function() {

    }
    xhttp.onload = function() {}
    xhttp.onreadystatechange = function() {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            if (xhttp.responseText != "") {
                if (client_vars.split_test) {
                    var responseData = JSON.parse(xhttp.responseText);
                    // bundle_vars.pdp_response = responseData;
                    localStorage.setItem("inc_data", JSON.stringify(responseData));
                    if (switch_board.its_pdp_page) {
                        var source = (switch_board.its_plp_page || bundle_vars.pdp_client_btn) ? "plp_btn" : null;
                        if (document.querySelectorAll('#ic_bundle_pdp')[0] == null) {
                            check_product_availability(responseData, load_type, id1, id2, plp_elem, source, null, null)
                        }
                    }
                    bundle_vars.pdp_client_btn = false;
                }
            }
        }
    };
}

function get_bundle_title(load_type, ic_header_wrap,modal_wrapper) {
    var ic_discount_wrapper = generate_html_tag('div', 'ic_discount_wrapper');
    var ic_discount_ul = generate_html_tag('ul', 'ic_discount_ul');
    for (li = 0; li < 5; li++) {
        var ic_discount_li = generate_html_tag('li', 'ic_discount_li');
        var inc_discount_meter = generate_html_tag('div', 'inc_discount_meter');
        ic_discount_li.appendChild(inc_discount_meter)
        var ic_discount_price = generate_html_tag('span', 'ic_discount_price');
        var ic_discount_checkbox = generate_html_tag('span', 'ic_discount_checkbox');
        var ic_discount_save = generate_html_tag('span', 'ic_discount_save');
        if (li == 0) {
            // ic_discount_li.classList.add('active')
            ic_discount_price.textContent = "0.00 Lei";
            ic_discount_save.textContent = " 45%"
        } else if (li == 1) {
            ic_discount_price.textContent = "1300.00 Lei";
            ic_discount_save.textContent = " 40%"
        } else if (li == 2) {
            ic_discount_price.textContent = "2600.00 Lei";
            ic_discount_save.textContent = " 35%"
        } else if (li == 3) {
            ic_discount_price.textContent = "4500.00 Lei";
            ic_discount_save.textContent = " 25%"
        } else if (li == 4) {
            ic_discount_price.textContent = "6200.00 Lei";
            ic_discount_save.textContent = " 10%"
        }
        inc_discount_meter.appendChild(ic_discount_price)
        inc_discount_meter.appendChild(ic_discount_checkbox)
        inc_discount_meter.appendChild(ic_discount_save)
        ic_discount_ul.appendChild(ic_discount_li)
    }

    ic_discount_wrapper.appendChild(ic_discount_ul)
    ic_header_wrap.appendChild(ic_discount_wrapper);

    var title = generate_html_tag('div', 'bundle_title');

    var title_save_text = generate_html_tag('span', 'title_save_text');
    if(modal_wrapper == undefined){
        title_save_text.textContent = 'CUMPERI MAI MULT, ECONOMISESTI MAI MULT';
    }else{
        title_save_text.textContent = bundle_vars.buy_more_save_more;
    }
    
    title.appendChild(title_save_text);
    ic_header_wrap.appendChild(title);
    var ic_bundle_title = generate_html_tag('div', 'ic_bundle_title');
    ic_bundle_title.textContent = "Iti mai recomandam si"
    title.appendChild(ic_bundle_title)
}

function set_form_key() {
    if (document.querySelector('input[name="form_key"]') != undefined) client_vars.form_key = document.querySelector('input[name="form_key"]').value;
    if (client_vars.form_key != null || client_vars.form_key != undefined) {
        localStorage.setItem("form_key", client_vars.form_key);
    }
}

function get_form_key() {
    if (document.querySelector('input[name="form_key"]') != undefined) client_vars.form_key = document.querySelector('input[name="form_key"]').value;
    if ((localStorage.getItem("form_key") == "" || localStorage.getItem("form_key") == null) && (client_vars.form_key == null || client_vars.form_key == "")) {
        return
    }
}

function modal_add(class_name, client_div, childNode) {
    childNode = childNode + 1
    var inc_popup = generate_html_tag('div', 'inc_popup');
    // inc_popup.style.display = 'none';
    // if (document.querySelector('body .inc_popup') == null || document.querySelector('body .inc_popup') == undefined) {
    //     if (document.getElementById('inc_popup') == null) {
    //         document.querySelector('body').appendChild(inc_popup);
    //     }
    // }
    if (document.querySelector('body .inc_popup') == null || document.querySelector('body .inc_popup') == undefined) {
        var view = document.querySelector(client_div);
        if (view != null || view != undefined) {
            view.insertBefore(inc_popup, view.childNodes[childNode]);
        }
    }
}

function handling_response_new_temp(response, load_type, id1, id2, plp_elem, source, type, modal_wrapper, fbt_element) {
    var attributeValues = false;
    var counter_set = 0;
    var en_counter = [];
    var pdp_title = [];
    var dup_en_counter = [];
    var prod_len = 0;
    var respof_i = "";
    var act_flag = false;
    var res_check = false;
    if (response != undefined) {
        if (response.length == 0) {
            response = undefined;
        }
    }

    if (response != undefined && response.Bundles[0] != undefined) {
        if(response.Bundles[0] != undefined){
            if (response.Bundles[0].Products[0].ProductId == "dummy") {
                response.Bundles[0].Products[0].ProductSku = "dummy"
            }
            if ((response.Bundles[0].Products[0].ProductSku != "" && response.Bundles[0].Products[0].ProductType == "simple") || response.Bundles[0].Products[0].ProductType == "configurable") {
                var bundle_restriction = false;
                if (response.Bundles.length == 1 && response.Bundles[0].Products[1].ProductSku == "") {
                    bundle_restriction = true;
                } else {
                    bundle_restriction = false;
                }
                if (type == "inc_add_btn") {}
                if (bundle_restriction == false) {

                    var bundle_count = response.BundleCount;
                    var ic_bundle_wrap = generate_html_tag('div', 'ic_bundle_wrapper');
                    ic_bundle_wrap.setAttribute('id', 'ic_bundle_wrapper');
                    if (modal_wrapper == undefined) {
                        ic_bundle_wrap.classList.add('inc_new_temp')
                    }
                    var ic_bundle_summary_wrapper = generate_html_tag('div', 'ic_bundle_summary_wrapper');
                    var ic_save_message = generate_html_tag('div', 'ic_save_message');
                    ic_save_message.textContent = bundle_vars.disc_of
                    if (window.innerWidth > 767) {
                        ic_bundle_summary_wrapper.appendChild(ic_save_message)
                    }
                    var ic_bundle_price_wrapper = generate_html_tag('div', 'ic_bundle_price_wrapper');
                    var ic_bundle_price_bind = generate_html_tag('div', 'ic_bundle_price_bind');
                    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                        ic_bundle_price_bind.style.display = "none"
                    }
                    var ic_bundle_price_text = generate_html_tag('span', 'ic_bundle_price_text');
                    ic_bundle_price_text.textContent = bundle_vars.total_kit_price
                    ic_bundle_price_bind.appendChild(ic_bundle_price_text)
                    var ic_bundle_price_span = generate_html_tag('span', 'ic_bundle_price_span');
                    ic_bundle_price_span.textContent = "0,00 Lei"

                    ic_bundle_price_bind.appendChild(ic_bundle_price_span)
                    var ic_bundle_you_save_wrap = generate_html_tag('div', 'ic_bundle_you_save_wrap');
                    var ic_bundle_you_save_wrap_text = generate_html_tag('span', 'ic_bundle_you_save_wrap_text');
                    ic_bundle_you_save_wrap_text.textContent = bundle_vars.you_save
                    ic_bundle_you_save_wrap.appendChild(ic_bundle_you_save_wrap_text)
                    var ic_bundle_you_save_span = generate_html_tag('span', 'ic_bundle_you_save_span');
                    ic_bundle_you_save_span.textContent = "0,00 Lei"
                    ic_bundle_you_save_wrap.appendChild(ic_bundle_you_save_span)
                    ic_bundle_price_wrapper.appendChild(ic_bundle_price_bind)
                    var loader_wait_span = generate_html_tag('div', 'loader_wait_span');
                    loader_wait_span.textContent = "Produsele sunt adăugate în coș"
                    if (document.querySelector('#co-mobMenu .ordr-date') == null) {
                        loader_wait_span.style.display = "none"
                    }
                    ic_bundle_price_wrapper.appendChild(loader_wait_span)
                    ic_bundle_price_wrapper.appendChild(ic_bundle_you_save_wrap)
                    ic_bundle_summary_wrapper.appendChild(ic_bundle_price_wrapper)
                    if (window.innerWidth < 768) {
                        ic_bundle_summary_wrapper.appendChild(ic_save_message)
                    }
                    ic_bundle_wrap.appendChild(ic_bundle_summary_wrapper);


                    var ic_header_wrap = generate_html_tag('div', 'ic_header_wrapper');
                    if (switch_board.its_pdp_page && load_type == "onload") {
                        get_bundle_title(load_type, ic_bundle_wrap,modal_wrapper);
                    } else {
                        get_bundle_title(load_type, ic_header_wrap,modal_wrapper);
                    }

                    //if (modal_wrapper != undefined) {
                    // var ic_bundle_title = generate_html_tag('div', 'ic_bundle_title');
                    // ic_bundle_title.textContent = "Ostatní objednali tyto produkty"
                    // ic_bundle_wrap.appendChild(ic_bundle_title)
                    //}
                    if (switch_board.its_pdp_page && load_type == "onload") {
                        var ic_tab_prod_wrap = generate_html_tag('div', 'ic_tab_prod_wrap');
                    }
                    set_form_key();
                    var tab_ul = generate_html_tag('ul', 'bundle_links');
                    var ic_prod_wrapper = generate_html_tag('div', 'ic_product_wrapper');
                    if (document.querySelector('body.Controller_Product') != null) {
                        ic_prod_wrapper.classList.add('old_templ')
                    }
                    var ic_bundle_parent = generate_html_tag('div', 'ic_bundle_parent');
                    var ic_bundle = generate_html_tag('div', 'ic_bundle');


                    if (switch_board.its_pdp_page || switch_board.its_plp_page) {
                        var ic_product_parent_bundle = generate_html_tag('div', 'ic_product_parent_bundle');
                        // var ic_product_bundling = generate_html_tag('div', 'ic_product_bundling');
                        // ic_product_bundling.classList.add('active');
                    }
                    if (window.innerWidth > 1024 && modal_wrapper == undefined && response.BundleCount > 4) {
                        add_slider_bundle_buttons(ic_product_parent_bundle, "new_temp", null);
                    }
                    var total_prod_count = 3;
                    if (window.innerWidth > 1336) {
                        total_prod_count = 3
                    } else if (window.innerWidth > 1200) {
                        total_prod_count = 3
                    } else if (window.innerWidth > 1024) {
                        prod_count = 2
                    } else {
                        prod_count = 2
                    }
                    var ic_index = 0;
                    if (modal_wrapper != undefined) {
                        var total_prod_count = 5;
                        if (window.innerWidth > 1336) {
                            total_prod_count = 5
                        } else if (window.innerWidth > 1200) {
                            total_prod_count = 5
                        } else if (window.innerWidth > 1024) {
                            total_prod_count = 5
                        } else {
                            total_prod_count = 1
                        }
                    }

                    if (bundle_count >= 1) {

                        var counter = 1;
                        var isInitial = true;
                        var isGet = true;
                        var new_response = {};
                        var mid1 = "";
                        var mid2 = "";
                        for (var i = 0; i < bundle_count; i++) {
                            var prod_count = 3
                            if (window.innerWidth > 1336) {
                                prod_count = 3
                            } else if (window.innerWidth > 1200) {
                                prod_count = 3
                            } else if (window.innerWidth > 1024) {
                                prod_count = 2
                            } else if (window.innerWidth > 990) {
                                prod_count = 2
                            } else {
                                prod_count = 2
                            }
                            if (modal_wrapper != undefined) {
                                if (window.innerWidth > 1336) {
                                    prod_count = 5
                                } else if (window.innerWidth > 1200) {
                                    prod_count = 5
                                } else if (window.innerWidth > 1024) {
                                    prod_count = 5
                                } else {
                                    prod_count = 1
                                }

                            }
                            var ic_show_details = false
                            if (bundle_vars.create_prod_c == 0) {
                                var ic_product_bundling = generate_html_tag('div', 'ic_product_bundling');
                                ic_product_bundling.classList.add('active')
                                ic_product_bundling.setAttribute('ic_index', ic_index)
                                ic_index++
                            } else if (bundle_vars.create_prod_c == total_prod_count) {
                                if (window.innerWidth > 1024) {
                                    ic_index++
                                    var ic_product_bundling = generate_html_tag('div', 'ic_product_bundling');
                                    total_prod_count = prod_count + total_prod_count
                                    ic_product_bundling.setAttribute('ic_index', ic_index - 1)
                                    ic_show_details = true;
                                }
                            }
                            localStorage.setItem('total_prod_count', total_prod_count)
                            if (modal_wrapper != undefined) {
                                localStorage.setItem('total_prod_count_modal', total_prod_count)
                            }
                            respof_i = response.Bundles[i]
                            if (type == "cart" && bundle_vars.pdp_response.Bundles != undefined) {
                                // bundle_vars.pdp_response.Bundles.push(respof_i)
                            }
                            for (var j = 0; j < response.Bundles[i].Products.length; j++) {
                                if (response.Bundles[i].Products[j].ProductId != "dummy") {
                                    response.Bundles[i].Products[j].BundleId = response.Bundles[i].BundleId
                                    if ((load_type == 'onload') || ((!switch_board.catogory_tab) && (load_type == 'btn_click'))) {
                                        var products_data = response.Bundles[i].Products[j];
                                        var product_attributes = products_data.Attributes;
                                        ic_product_bundling.setAttribute("bundle_id", response.Bundles[i].BundleId);

                                        if (switch_board.its_pdp_page) {
                                            if (client_vars.product_ids[0] != products_data.ProductId) {
                                                if ((response.Bundles[i].Products[j].ProductSku != "" && response.Bundles[i].Products[j].ProductType == "simple") || response.Bundles[i].Products[j].ProductType == "configurable") {
                                                    if (client_vars.product_ids[0] != products_data.ProductId) {
                                                        if(duplicatefbtprod.indexOf(products_data.ProductId) == -1){
                                                            // duplicatefbtprod.push(products_data.ProductId)
                                                            create_product_box(load_type, products_data, product_attributes, ic_product_bundling, j, response.Bundles[i], "new_temp", ic_bundle_wrap, null, null, modal_wrapper, ic_show_details);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (load_type == 'onload' || ((!switch_board.catogory_tab) && (load_type == 'btn_click'))) {
                                counter++;
                                if (load_type == 'onload' && switch_board.its_pdp_page && i == 0) {

                                    if (switch_board.delivery_info) {
                                        var ic_gen_info = generate_html_tag('div', 'inc_gen_info');
                                        ic_gen_info.textContent = bundle_vars.delivery_text;
                                        ic_product_bundling.appendChild(ic_gen_info);
                                    }
                                }
                                ic_bundle.appendChild(ic_product_bundling);
                                ic_bundle_parent.appendChild(ic_bundle)
                                ic_product_parent_bundle.appendChild(ic_bundle_parent);
                            }
                            prod_len = response.Bundles[i].Products;
                        }


                        ic_tab_prod_wrap.appendChild(ic_header_wrap)
                        ic_prod_wrapper.appendChild(ic_product_parent_bundle);
                        ic_tab_prod_wrap.appendChild(ic_prod_wrapper);
                        ic_bundle_wrap.appendChild(ic_tab_prod_wrap)

                        if (modal_wrapper == undefined) {
                            if (load_type == 'onload') {
                                var pdp_bundle = generate_html_tag('div', 'pdp_bundles');
                                pdp_bundle.setAttribute("id", "ic_bundle_pdp");
                                pdp_bundle.appendChild(ic_bundle_wrap);
                                var inc_checkout_bk = generate_html_tag('div','inc_checkout_bk');
                                ic_bundle_wrap.appendChild(inc_checkout_bk)
                                
                                var inc_checkout_prc_bk = generate_html_tag('div','inc_checkout_prc_bk');
                                inc_checkout_bk.appendChild(inc_checkout_prc_bk)
                                var inc_checkout_prc_title = generate_html_tag('div','inc_checkout_prc_title');
                                inc_checkout_prc_title.innerText = "Pretul Total"
                                inc_checkout_prc_bk.appendChild(inc_checkout_prc_title)
                                var inc_checkout_prc_blk = generate_html_tag('div','inc_checkout_prc_blk');
                                inc_checkout_prc_bk.appendChild(inc_checkout_prc_blk)
                                
                                var inc_checkout_prc_active_text = generate_html_tag('div','inc_checkout_prc_active_text');
                                inc_checkout_prc_active_text.innerText = "00.00 Lei"
                                inc_checkout_prc_blk.appendChild(inc_checkout_prc_active_text)
                                var inc_checkout_prc_regular_text = generate_html_tag('div','inc_checkout_prc_regular_text');
                                inc_checkout_prc_blk.appendChild(inc_checkout_prc_regular_text)

                                var inc_basket_btn = generate_html_tag('div','inc_basket_btn');
                                inc_checkout_bk.appendChild(inc_basket_btn)

                                var inc_chk_add_btn = generate_html_tag('div','inc_chk_add_btn');
                                //Adaugă 1 produse în coș
                                inc_chk_add_btn.innerText = "Adaugă coș"
                                inc_checkout_bk.classList.add('disable_btn')
                                inc_chk_add_btn.setAttribute('style','pointer-events: none;opacity: 0.5;')
                                // inc_checkout_prc_bk.setAttribute('style','visibility: hidden;')
                                inc_basket_btn.appendChild(inc_chk_add_btn)

                                inc_chk_add_btn.addEventListener('click',function(){
                                    inc_chk_add_btn.classList.add('inc_loading')
                                    setTimeout(function(){
                                        add_multiple_prod(inc_chk_add_btn)
                                    },350)
                                })
                                if (document.querySelector('.inc_bundling_pdp') != null) {
                                    document.querySelector('.inc_bundling_pdp').appendChild(pdp_bundle);
                                }
                                var tab_wrap = document.querySelector('.ic_header_wrapper');
                                //ic_tab_prod_wrap
                                var clone_fbt = ic_tab_prod_wrap.cloneNode(ic_tab_prod_wrap);
                                if (window.innerWidth > 1200) {
                                    if (fbt_element != null) {
                                        if (fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout') != null) {
                                            fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout').innerHTML = "";
                                            document.querySelector('body').classList.add('fbt_bundles')
                                            if (fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout') != null) {
                                                fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout').classList.remove('loader_wait_span_fbt')
                                            }
                                            var fbt_bundle_header = generate_html_tag("div", "fbt_bundle_header");
                                            var fbt_bundle_text = generate_html_tag("span", "fbt_bundle_text");
                                        
                                            if(client_vars.product_ids[0] != undefined){
                                                fbt_bundle_text.innerHTML = "<span>(" + client_vars.product_ids[0] + ")</span> Iti mai recomandam si"
                                            }else if(bundle_vars.fbt_input_tag != null){
                                                var pids=bundle_vars.fbt_input_tag.value
                                                fbt_bundle_text.innerHTML = "<span>(" + pids + ")</span> Iti mai recomandam si"
                                            }else{
                                                fbt_bundle_text.innerHTML = " Iti mai recomandam si"
                                            }
                                            
                                            var fbt_bundle_close = generate_html_tag("span", "fbt_bundle_close");
                                            fbt_bundle_header.appendChild(fbt_bundle_text)
                                            fbt_bundle_header.appendChild(fbt_bundle_close)
                                            fbt_bundle_close.addEventListener('click', function(e) {
                                                var psearch = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;;
                                                document.querySelector('body').classList.remove('fbt_active');
                                                psearch.querySelector('#inc_sku_fbt.active').classList.remove('active');
                                                psearch.classList.remove('active')
                                            });
                                            fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout').appendChild(fbt_bundle_header);
                                            fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout').appendChild(clone_fbt)

                                            // if (window.innerWidth > 1200 && modal_wrapper == undefined && response.BundleCount > 4) {
                                            //     var elm_slider= document.querySelector('#inc_fbt_layout .ic_product_parent_bundle');
                                            //     add_slider_bundle_buttons(elm_slider, "new_temp_fbt", null);
                                            // }
                                        }
                                    }
                                }

                            }
                        } else {
                            if (document.querySelector('.inc_popup .ic_bundle_wrapper') == null && type == "cart") {
                                modal_wrapper.appendChild(ic_bundle_wrap);
                            } else {
                                if (type != "cart") {
                                    modal_wrapper.appendChild(ic_bundle_wrap);
                                }
                            }

                        }

                    }
                    //if (modal_wrapper == undefined) {
                    if (window.innerWidth > 1024) {
                        var nodes = ic_bundle.querySelectorAll('.ic_product_bundling.is_product')
                        var dots = generate_html_tag('div', 'dots_ic_bundle');
                        var dot_ul = generate_html_tag('ul', '');
                        dots.appendChild(dot_ul)
                        if (nodes.length > 1) {
                            if (nodes.length >= 1) {
                                var dots_c = 0
                                for (m = 0; m < nodes.length; m++) {
                                    dots_c++
                                    var dot_li = generate_html_tag('li', '');
                                    dot_li.setAttribute('ind_slide', m)
                                    dot_li.setAttribute('onClick', 'combo_tab_click(this)')
                                    dot_li.textContent = dots_c
                                    dot_ul.appendChild(dot_li)
                                    if (m == 0) {
                                        dot_li.classList.add('active')
                                    }
                                }
                                dots.appendChild(dot_ul)
                                if (modal_wrapper == undefined) {
                                    ic_prod_wrapper.appendChild(dots)
                                    var clone_dots = dots.cloneNode(dots);
                                    if (fbt_element != null) {
                                        if (fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout .ic_product_wrapper') != undefined) {
                                            fbt_element.parentNode.parentNode.querySelector('#inc_fbt_layout .ic_product_wrapper').appendChild(clone_dots)
                                        }
                                    }
                                } else {
                                    ic_bundle.appendChild(dots)
                                }
                            }
                        }
                        if (window.innerWidth > 1024 && modal_wrapper != undefined) {
                            add_slider_bundle_buttons(dots, null, null);
                        }
                    }
                    //}

                    localStorage.setItem('total_p_c', bundle_vars.create_prod_c)
                    if (modal_wrapper != undefined) {
                        localStorage.setItem('total_p_c_modal', bundle_vars.create_prod_c)
                    }
                    bundle_vars.create_prod_c = 0;
                    setTimeout(function() {
                        on_load_colour_sel()
                        if (modal_wrapper == undefined && progress_bar_html == null && campain_price == null) {
                            update_progress_bar_on_load()
                        }else if(modal_wrapper == undefined){
                            if(campain_price != null){
                                if(campain_price.indexOf('Lei') >= 0){
                                    if(document.querySelector('.inc_campain_total_prc') != null){
                                        document.querySelector('.inc_campain_total_prc').innerText = campain_price
                                    }else{
                                        var ic_discount_ul_el = document.querySelector('.ic_discount_ul')
                                        if (document.querySelector('.ic_discount_wrapper .inc_campain_total_prc_wrapper') != null) {
                                            document.querySelector('.ic_discount_wrapper .inc_campain_total_prc_wrapper').innerHTML = ""
                                        }
                                        var next_level_disc_meter = generate_html_tag('div', 'next_level_disc_meter');
                                        var inc_campain_total_prc_wrapper = generate_html_tag('div', 'inc_campain_total_prc_wrapper');
                                        var inc_campain_total_prc = generate_html_tag('div', 'inc_campain_total_prc');
                                        inc_campain_total_prc.innerHTML = campain_price;
                                        var inc_campain_total_text = generate_html_tag('div', 'inc_campain_total_text');
                                        inc_campain_total_text.textContent = "Valoare produselor din campania curenta" //"Objednáno v této kampani"
                                        inc_campain_total_prc_wrapper.appendChild(inc_campain_total_prc)
                                        inc_campain_total_prc_wrapper.appendChild(inc_campain_total_text)
                                        if (ic_discount_ul_el != null) {
                                            ic_discount_ul_el.parentNode.insertBefore(inc_campain_total_prc_wrapper,ic_discount_ul_el)
                                            // ic_discount_wrapper.appendChild(inc_campain_total_prc_wrapper);
                                        }
                                    }
                                    if(document.querySelector('.ic_discount_ul') != null){
                                        document.querySelector('.ic_discount_ul').innerHTML = progress_bar_html
                                    }
                                    if(document.querySelector('.ic_bundle_price_span') != null){
                                        var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                                        document.querySelector('.ic_bundle_price_span').innerText = cart_amnt
                                        document.querySelector('.ic_bundle_price_bind').style.display="flex"
                                        document.querySelector('.loader_wait_span').style.display="none"
                                    }
                                }else{
                                    update_progress_bar_on_load()
                                }
                            }else{
                                update_progress_bar_on_load()
                            }
                        }
                    }, 2000)
                    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                    if (document.querySelector('#co-mobMenu .ordr-date') == null && cust_data_online.dataList.length > 1) {
                        var inc_main_bundle = document.querySelector('#increasingly_element');
                        if (inc_main_bundle != null) {
                            inc_main_bundle.innerHTML = ""
                        }
                    }

                }

            }
        }
    }

    setTimeout(function() {
        
        if(document.querySelectorAll('.cust-C .yrOrders-C').length > 1){
            if(document.querySelector('#increasingly_element') != null){
                document.querySelector('#increasingly_element').style.display="none"
            }
            var allfbt=document.querySelectorAll('#inc_sku_fbt')
            for(f=0;f<allfbt.length;f++){
                allfbt[f].parentNode.removeChild(allfbt[f])
            }
            // if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt img') == null){
            //     if(document.querySelector('#increasingly_element') != null){
            //         document.querySelector('#increasingly_element').style.display="none"
            //     }
            // }else{
            //     if(document.querySelector('#increasingly_element') != null){
            //         document.querySelector('#increasingly_element').style.display="block"
            //     }
            // }
        }
        var allvariant=document.querySelectorAll('.color_size_li.active a')
        for(li=0;li<allvariant.length;li++){
            allvariant[li].click()
        }
        setTimeout(function(){
            onload_var = true
        },2000)
    }, 1000)
    if (switch_board.tracking && !switch_board.its_cart_page) {
        var data = {
            "eventData": String(btoa(JSON.stringify({
                "event_data": {
                    "product_id": client_vars.product_ids[0]
                },
                "event_type": "product_page_visit",
                "method": "track",
                "platform": "",
                "token": client_vars.api_key
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        // makeTrackingApiCall(JSON.stringify(data));
    }

}


function check_product_availability(response, load_type, id1, id2, plp_elem, source, cart, fbt_element) {
    if (switch_board.unauthorized == false) {
        if (response != undefined) {
            if (response.length == 0) {
                response = undefined;
            }
        }
        var b_count = 0
        // var bundles=[]
        bundle_vars.def_bundles = []
        var active_customer = "";
        var prod_avail = false;
        var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
        if (cust_data_online != null) {
            if(cust_data_online.dataList != undefined){
                for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                    if (cust_data_online.dataList[ca].active == true) {
                        active_customer = cust_data_online.dataList[ca];
                        break;
                    }
                }
            }
            console.log("Active customer " + active_customer)
            if (active_customer != "") {
                cust_id = active_customer.custId
                inc_cust_name = active_customer.custName
            } else {
                if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                    cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
                }
                if (document.querySelector('#co-mobMenu .name') != null) {
                    var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
                }
            }
            var inc_acctNr = sessionStorage.getItem("acctNr")
            var order_n = ""
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                order_n = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
            }
            var pushed_prod = []
            var urls = ""
            var prd_ids_st = ""
            bundle_vars.sku_product_count = []
            if (response != undefined) {
                if (response.BundleCount >= 1) {
                    for (var a = 0; a < response.BundleCount; a++) {
                        for (var b = 0; b < response.Bundles[a].Products.length; b++) {
                            if (response.Bundles[a].Products[b].ProductId != "dummy") {
                                if (pushed_prod.indexOf(response.Bundles[a].Products[b].ProductId) == -1) {
                                    pushed_prod.push(response.Bundles[a].Products[b].ProductId)
                                }
                            }
                        }
                    }
                    for (var y1 = 0; y1 < response.BundleCount; y1++) {
                        // if (y < 6) {
                        if(response.Bundles[y1] != undefined){
                            if(response.Bundles[y1].Products != undefined){
                                for (var z1 = 0; z1 < response.Bundles[y1].Products.length; z1++) {
                                    response.Bundles[y1].Products[z1].BundleId = response.Bundles[y1].BundleId
                                    if (bundle_vars.on_load_bundle == true && cart == "cart") {
                                        if (y1 == 0) {
                                            bundle_vars.dup_json_response = []
                                        }
                                    }
                                    var inc_profile = JSON.parse(sessionStorage.getItem("profileRes"))
                                    if (switch_board.unauthorized == false) {
                                        if (response.Bundles[y1].Products[z1].ProductId != "dummy") {
                                            if (bundle_vars.dup_json_response.indexOf(response.Bundles[y1].Products[z1].ProductId) == -1) {
                                                if (client_vars.item_validation.indexOf(response.Bundles[y1].Products[z1].ProductId) == -1) {
                                                    // if(bundle_vars.dup_json_response.length < 5){
                                                    client_vars.item_validation.push(response.Bundles[y1].Products[z1].ProductId)
                                                    bundle_vars.dup_json_response.push(response.Bundles[y1].Products[z1].ProductId)
                                                    var url = "//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/" + inc_acctNr + "/itemvalidation?lineNrs=" + response.Bundles[y1].Products[z1].ProductId + "%3A1&cmpgnId=" + inc_profile.currCmpgnId + "&placOrdSctnCd=REGULAR&custId=" + cust_id + "&ordNr=" + order_n + "&rule=basic";
                                                    if (prd_ids_st == "") {
                                                        prd_ids_st = response.Bundles[y1].Products[z1].ProductId + "%3A1"
                                                    } else {
                                                        prd_ids_st += "," + response.Bundles[y1].Products[z1].ProductId + "%3A1"
                                                    }
                                                    var products_data = response.Bundles[y1].Products[z1];
                                                    var attributes = products_data.Attributes;
                                                    if (attributes != null) {
                                                        for (var y = 0; y < attributes.length; y++) {
                                                            for (var z = 0; z < attributes[y].attributeValues.length; z++) {
                                                                if (attributes[y].attributeValues[z].childProductId == null) {

                                                                } else {
                                                                    if (switch_board.unauthorized == false) {
                                                                        if (client_vars.item_validation.indexOf(attributes[y].attributeValues[z].childProductId) == -1) {
                                                                            client_vars.item_validation.push(attributes[y].attributeValues[z].childProductId)
                                                                            prd_ids_st += "," + attributes[y].attributeValues[z].childProductId + "%3A1"
                                                                        }
                                                                    } else {
                                                                        bundle_vars.instock_attribues.push(attributes[y].attributeValues[z].childProductId)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // }
                                                }
                                            }
                                        }
                                    } else {
                                        break;
                                    }
                                }
                            }
                        }
                        // }
                    }
                }

            }
            urls = "//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/" + inc_acctNr + "/itemvalidation?lineNrs=" + prd_ids_st + "&cmpgnId=" + inc_profile.currCmpgnId + "&placOrdSctnCd=REGULAR&custId=" + cust_id + "&ordNr=" + order_n + "&rule=basic";
            check_product_status(urls, response, bundle_vars.def_bundles, load_type, id1, id2, plp_elem, source, cart, pushed_prod, fbt_element)
        }
    } else if (switch_board.unauthorized == true) {
        if (response.Bundles.length >= 1) {
            duplicatefbtprod=[]
            document.querySelector('.inc_popup').innerHTML = ""
            document.querySelector('#increasingly_element').innerHTML = "";
            handling_response_new_temp(response, load_type, id1, id2, plp_elem, source, cart, null, fbt_element);
            prepare_quantity_buttons_for_event_binding(load_type);
            if(window.innerWidth > 1200){
                if (document.querySelector('.inc_popup .ic_bundle_wrapper') == null && cart == "cart") {
                    duplicatefbtprod=[]
                    modal_overlay(response, load_type, id1, id2, plp_elem, source, cart)
                } else if (cart != "cart") {
                    duplicatefbtprod=[]
                    modal_overlay(response, load_type, id1, id2, plp_elem, source, cart)
                }
            }

        }
    }
}
function check_product_status(url, response, bundles, load_type, id1, id2, plp_elem, source, cart, pushed_prod, fbt_element) {
    if (bundle_vars.on_load_bundle == true && cart == "cart") {
        bundle_vars.def_bundles = []
        bundle_vars.dup_response = []
        bundle_vars.dup_json_response = []
    }
    if (switch_board.unauthorized == false) {
        $.ajax({
            type: "GET",
            url: url,
            processData: false,
            cacheable: false,
            dataType: "json",
            contentType: "application/json",
            beforeSend: function(xhr) {
                if (getCookie_inc('avn_imps') == undefined || getCookie_inc('avn_imps') == "") {
                    xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
                } else {
                    xhr.setRequestHeader('X-CCA-Token', getCookie_inc('avn_tkn'));
                }
                xhr.setRequestHeader('content-type', 'application/json');
            },
            success: function(result, xhr) {

                if (result != "" && xhr == "success") {
                    var resp_ajax = result
                    for (r = 0; r < resp_ajax.length; r++) {
                        if (resp_ajax[r].valid == true && resp_ajax[r].rsnCd != "NOT_FOUND") {
                            bundle_vars.instock_attribues.push(resp_ajax[r].lineNr)
                            for (p = 0; p < response.Bundles.length; p++) {
                                if (response.Bundles[p].Products[1].ProductId == resp_ajax[r].lineNr) {
                                    bundle_vars.def_bundles.push(response.Bundles[p])
                                }
                            }
                        }
                    }
                    setTimeout(function() {
                        // if (document.querySelector('#increasingly_element .pdp_bundles') == null) {
                            bundle_vars.pdp_response = {
                                "Bundles": bundle_vars.def_bundles,
                                AssociatedProducts: null,
                                BundleCount: bundle_vars.def_bundles.length
                            }
                            if (bundle_vars.pdp_response.Bundles.length >= 1) {
                                document.querySelector('.inc_popup').innerHTML = ""
                                document.querySelector('#increasingly_element').innerHTML = "";
                                handling_response_new_temp(bundle_vars.pdp_response, load_type, id1, id2, plp_elem, source, cart, null, fbt_element);
                                prepare_quantity_buttons_for_event_binding(load_type);
                                if(cart == "cart"){
                                    setTimeout(function(){
                                        var p_card = document.querySelectorAll('.added_list_item_wrapper');
                                        var fbt_pel = document.querySelectorAll('#inc_fbt_layout .ic_product');
                                        for (r = 0; r < p_card.length; r++) {
                                            if (p_card[r] != null) {
                                                var prdid=p_card[r].getAttribute('product_id')
                                                for(k=0;k<fbt_pel.length;k++){
                                                    if(fbt_pel[k].getAttribute('data_selected_prod_id') == prdid){
                                                        var qtys=p_card[r].querySelector('.q_holder input').value
                                                        fbt_pel[k].querySelector('.q_holder input').value = qtys
                                                        fbt_pel[k].querySelector('.q_holder input[type="hidden"]').value = qtys
                                                        fbt_pel[k].classList.add('inc_checked');
                                                        fbt_pel[k].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Adăugate"
                                                        if (fbt_pel[k].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable') != null) {
                                                            fbt_pel[k].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerHTML = "Adăugate"
                                                        }
                                                        if (qtys > 1) {
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.remove('disabled')
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.remove('enable')
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.add('enable')
                                                            
                                                            if (qtys == 999) {
                                                                fbt_pel[k].querySelector('.inc_icon_pluss').classList.add('disabled')
                                                            } else {
                                                                fbt_pel[k].querySelector('.inc_icon_pluss').classList.remove('disabled')
                                                            }
                                                        } else {
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.remove('disabled')
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.remove('enable')
                                                            fbt_pel[k].querySelector('.inc_icon_minuss').classList.add('disabled')
                                                        }
                                                    }
                                                }
                                                
                                            }
                                        }
                                    },1000)
                                }
                                if(window.innerWidth > 1200){
                                    if (document.querySelector('.inc_popup .ic_bundle_wrapper') == null && cart == "cart") {
                                        modal_overlay(bundle_vars.pdp_response, load_type, id1, id2, plp_elem, source, cart)
                                    } else if (cart != "cart") {
                                        modal_overlay(bundle_vars.pdp_response, load_type, id1, id2, plp_elem, source, cart)
                                    }
                                }

                            }
                        // }
                    }, 100)

                    if (bundle_vars.sku_product_count.length == pushed_prod.length) {

                    }
                }
            },
            error: function(jqXHR, textStatus, errorMessage) {
                if (errorMessage == "Unauthorized") {
                    switch_board.unauthorized = true
                    if (switch_board.unauthorized == true) {
                        if (response.Bundles.length >= 1) {
                            duplicatefbtprod=[]
                            document.querySelector('.inc_popup').innerHTML = ""
                            document.querySelector('#increasingly_element').innerHTML = "";
                            handling_response_new_temp(response, load_type, id1, id2, plp_elem, source, cart, null, fbt_element);
                            prepare_quantity_buttons_for_event_binding(load_type);
                            if(window.innerWidth > 1200){
                                if (document.querySelector('.inc_popup .ic_bundle_wrapper') == null && cart == "cart") {
                                    duplicatefbtprod=[]
                                    modal_overlay(response, load_type, id1, id2, plp_elem, source, cart)
                                } else if (cart != "cart") {
                                    duplicatefbtprod=[]
                                    modal_overlay(response, load_type, id1, id2, plp_elem, source, cart)
                                }
                            }

                        }
                    }
                }

            },
        });
    }
}


function combo_tab_click(element) {
    var ic_bundle_wrapper = element.parentNode.parentNode.parentNode;

    var inx_bundle = element.getAttribute('ind_slide')
    if (ic_bundle_wrapper.querySelectorAll('.ic_product_bundling')[inx_bundle] != undefined) {
        if (ic_bundle_wrapper.querySelector('.ic_product_bundling.active') != null) {
            ic_bundle_wrapper.querySelector('.ic_product_bundling.active').classList.remove('active')
        }
        ic_bundle_wrapper.querySelectorAll('.ic_product_bundling')[inx_bundle].classList.add('active')
        if (element.parentNode.querySelector('li.active') != null) {
            element.parentNode.querySelector('li.active').classList.remove('active')
            element.classList.add('active')
            element.click();
        }
    }
}

function modal_overlay(response, load_type, id1, id2, plp_elem, source, type) {
    var modal_wrapper = generate_html_tag('div', 'modal_wrapper');
    var popup = document.querySelector('.inc_popup');
    popup.setAttribute('id', 'ic_bundle_popup');
    popup.appendChild(modal_wrapper);

    var nav_wrap = generate_html_tag('div', 'nav_wrap');
    var view_cart = generate_html_tag('a', 'inc_add_to_basket_btn');
    view_cart.classList.add('your_basket');
    view_cart.textContent = bundle_vars.view_cart_btn_text;
    var continue_shoping = generate_html_tag('a', 'inc_add_to_basket_btn');
    continue_shoping.textContent = "Continue Shopping";
    view_cart.setAttribute("href", bundle_vars.view_cart_btn_link);
    var check_out = generate_html_tag('a', 'inc_add_to_basket_btn2');
    check_out.setAttribute("onClick", 'close_modal()');
    // check_out.setAttribute("href", 'javascript:void(0);');
    check_out.textContent = bundle_vars.continue_text
    var continue_view_bag_wrapper = generate_html_tag('div', 'continue_view_bag_wrapper');
    continue_view_bag_wrapper.appendChild(check_out);
    continue_view_bag_wrapper.appendChild(view_cart);
    var closeMe = generate_html_tag('span', 'inc_icon_close');
    closeMe.setAttribute("onclick", "close_modal()");
    nav_wrap.appendChild(closeMe)
    var loader_wait_span = generate_html_tag('div', 'loader_wait_span');
    loader_wait_span.textContent = "Produsele sunt adăugate în coș"
    nav_wrap.appendChild(loader_wait_span)

    var nav_wrap_price_wrapper = generate_html_tag('div', 'nav_wrap_price_wrapper');
    nav_wrap_price_wrapper.style.display = "none"
    var sub_total_text = generate_html_tag('div', 'sub_total_text');
    sub_total_text.textContent = bundle_vars.bag_subtotal + "(0 " + bundle_vars.item_s + ")";
    nav_wrap_price_wrapper.appendChild(sub_total_text)
    var sub_total_Price_wrap = generate_html_tag('div', 'sub_total_Price_wrap');
    var sub_total_Price = generate_html_tag('span', 'sub_total_Price');
    sub_total_Price.textContent = "0,00 lei"
    sub_total_Price_wrap.appendChild(sub_total_Price)
    var sub_total_save = generate_html_tag('span', 'sub_total_save');
    sub_total_save.textContent = "you save 0,00 lei"
    sub_total_save.style.display = "none"
    if (document.querySelector('.crt-amt') != null) {
        var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
        sub_total_Price.innerHTML = cart_amnt;
    }
    if (document.querySelector('#cartbag span') != null) {
        var totl_qty = document.querySelector('#cartbag span').innerHTML.trim();
        sub_total_text.textContent = bundle_vars.bag_subtotal + "(" + totl_qty + "  " + bundle_vars.item_s + ")";
    }
    sub_total_Price_wrap.appendChild(sub_total_save)
    nav_wrap_price_wrapper.appendChild(sub_total_Price_wrap)

    nav_wrap.appendChild(nav_wrap_price_wrapper)
    nav_wrap.appendChild(continue_view_bag_wrapper)
    modal_wrapper.appendChild(nav_wrap)
    handling_response_new_temp(response, load_type, id1, id2, plp_elem, source, type, modal_wrapper);

}

function close_modal() {
    if (document.querySelector('#ic_bundle_popup.active') != null) {
        document.querySelector('#ic_bundle_popup.active').classList.remove('active');
        document.querySelector('body').classList.remove('active_popup')
        setTimeout(function() {
            if (document.querySelector('body.modal-open') != null) {
                document.querySelector('body.modal-open').classList.remove('modal-open')
                document.querySelector('body').setAttribute('style', '');
            }
        }, 500)
        bundle_vars.sku_irb_product_list = []
        if(typeof($) != "undefined"){
            $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                s = $(this).val();
                call_api_falg = true;
                var elm = e.target
                alltabentryid=[]
                var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                for(b=0;b<addedtab.length;b++){
                    if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                        if(addedtab[b].value.length == 5){
                            alltabentryid.push(addedtab[b].value)
                        }
                    }
                }
                // if(client_vars.product_ids[0] != e.target.value){
                    if (bundle_vars.modal_btn_clicked == true) {
                        bundle_vars.modal_btn_clicked = false
                    }
                    bundle_vars.call_irb_trigger = true
                    bundle_vars.fbt_input_tag = e.target
                    var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                    if (fbt_rem != null) {
                        fbt_rem.parentNode.removeChild(fbt_rem);
                    }
                    setTimeout(function() {
                        if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                            if (call_api_falg) {
                                call_irb_api();
                            }
                        }
                    }, 100);
                // }
            });
        };
    }
    // window.location.reload()
}

function edit_btn_show_on_add() {
    update_progress_bar_on_load("update");
    // var all_edit_btn = document.querySelectorAll('.mcrt-itms .editBtn')
    // for (b = 0; b < all_edit_btn.length; b++) {
    //     if (all_edit_btn[b].innerText == "Upravit") {
    //         document.querySelector('body').classList.add('inc_updating_product')
    //         all_edit_btn[b].click()
    //         var inserremove = document.querySelector('.inc_block-spinner')
    //         if (inserremove != null) {
    //             inserremove.parentNode.removeChild(inserremove)
    //         }
    //         var fbt_loser_client = generate_html_tag("block-spinner", "block-spinner");
    //         fbt_loser_client.classList.add('inc_block-spinner')
    //         fbt_loser_client.setAttribute('_ngcontent-c21', '')
    //         fbt_loser_client.setAttribute('_nghost-c3', '')
    //         var ashtml = '<div _ngcontent-c3="" class="block-spinner" style="z-index: 1940;"><div _ngcontent-c3="" class="spinner"></div></div>'
    //         fbt_loser_client.innerHTML = ashtml
    //         var appendinser = document.querySelector('.pSrch-head')
    //         if (appendinser != null) {
    //             appendinser.parentNode.insertBefore(fbt_loser_client, appendinser)
    //         }
    //         break;
    //     } else if (all_edit_btn[b].innerText.toLocaleString() == "upravit") {
    //         document.querySelector('body').classList.add('inc_updating_product')
    //         all_edit_btn[b].click()
    //         var inserremove = document.querySelector('.inc_block-spinner')
    //         if (inserremove != null) {
    //             inserremove.parentNode.removeChild(inserremove)
    //         }
    //         var fbt_loser_client = generate_html_tag("block-spinner", "block-spinner");
    //         fbt_loser_client.classList.add('inc_block-spinner')
    //         fbt_loser_client.setAttribute('_ngcontent-c21', '')
    //         fbt_loser_client.setAttribute('_nghost-c3', '')
    //         var ashtml = '<div _ngcontent-c3="" class="block-spinner"><div _ngcontent-c3="" class="spinner"></div></div>'
    //         fbt_loser_client.innerHTML = ashtml

    //         var appendinser = document.querySelector('.pSrch-head')
    //         if (appendinser != null) {
    //             appendinser.parentNode.insertBefore(fbt_loser_client, appendinser)
    //         }
    //         break;
    //     }
    // }
    
    // var prev_act_cust_name = ""
    // if (document.querySelector('.yrOrders-C.active .name') != null) {
    //     prev_act_cust_name = document.querySelector('.yrOrders-C.active .name').innerText.trim();
    // }
    // var checksalem = setInterval(function() {
    //     if (document.querySelector('.saleModal.modal.fade.in') != null) {
    //         document.querySelector('.saleModal.modal.fade.in').setAttribute('style', 'display:none !important')
    //     }
    //     if (document.querySelector('.modal-backdrop') != null) {
    //         document.querySelector('.modal-backdrop').setAttribute('style', 'display:none !important')
    //     }
    //     if (document.querySelector('.saleModal.modal.fade.in') != null && document.querySelector('.sbmtBtn') != null) {
    //         clearInterval(checksalem)
    //         var items = document.querySelector('.pr-items')
    //         if (document.querySelector('.sbmtBtn') != null) {
    //             document.querySelector('.sbmtBtn').removeAttribute('disabled')
    //             setTimeout(function() {
    //                 document.querySelector('.sbmtBtn').click()
    //             }, 10)
    //         }
    //         setTimeout(function() {
    //             var checkclose = setInterval(function() {
    //                 if (document.querySelector('.saleModal.modal.fade') == null) {
    //                     clearInterval(checkclose)
    //                     var inserremove1 = document.querySelector('.inc_block-spinner')
    //                     if (inserremove1 != null) {
    //                         inserremove1.parentNode.removeChild(inserremove1)
    //                     }
    //                     if (document.querySelector('.saleModal.modal.fade.in') != null) {
    //                         document.querySelector('.saleModal.modal.fade.in').setAttribute('style', '')
    //                     }
    //                     if (document.querySelector('.modal-backdrop') != null) {
    //                         document.querySelector('.modal-backdrop').setAttribute('style', '')
    //                     }
    //                     if (document.querySelector('.saleModal.modal.fade') != null) {
    //                         document.querySelector('.saleModal.modal.fade').setAttribute('style', '')
    //                     }
    //                     if (document.querySelector('.saleModal.modal') != null) {
    //                         document.querySelector('.saleModal.modal').setAttribute('style', '')
    //                     }
    //                     document.querySelector('body').classList.remove('inc_updating_product')
    //                 }
    //             }, 10)
    //             var got_active_cust = null;
    //             var total_cust_ac = document.querySelectorAll('.yrOrders-C')
    //             var current_act = document.querySelector('.yrOrders-C.active .name').innerText.trim();
    //             if (current_act != prev_act_cust_name) {
    //                 setTimeout(function() {
    //                     for (cc = 0; cc < total_cust_ac.length; cc++) {
    //                         var just_ch_act = total_cust_ac[cc].querySelector('.name').innerText.trim();
    //                         if (just_ch_act == prev_act_cust_name) {
    //                             total_cust_ac[cc].querySelector('.ordfor').click()

    //                             break;
    //                         }
    //                     }
    //                 }, 100)
    //             }
    //         }, 100)
    //     }
    // }, 0)
}

function get_product_images(products_data, ic_prod, type_of, modal_wrapper, type_of) {
    var pdt_img = generate_html_tag('div', 'pdt_img');
    var prods_ul = generate_html_tag('ul', '');
    var prods_li = generate_html_tag('li', '');
    var prod_img = generate_html_tag('img', '');
    var link_a = generate_html_tag('a', '');
    if (type_of == "quick_view") {
        pdt_img.classList.add('quick_pdt_img')
    } else {
        pdt_img.classList.add('main_pdt_img')
    }
    pdt_img.addEventListener('click',function(e){
        var ic_prod=e.currentTarget.parentNode.parentNode
        if (ic_prod.querySelector('.ic_quick_view_popup') != null) {
            ic_prod.querySelector('.ic_quick_view_popup').classList.add('active')
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                ic_prod.querySelector('.ic_quick_view_popup').style.display = "block"
            }
            setTimeout(function() {
                document.querySelector('body').classList.add('quick_view_active')
            }, 50)
        }
    })

    if (modal_wrapper == undefined) {
        if (switch_board.its_pdp_page) {
            if (window.innerWidth < 1201) {
                // link_a.setAttribute('href', 'javascript:void(0);');
            } else {
                // link_a.setAttribute('href', products_data.ProductUrl);
                // link_a.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',"' + products_data.ProductUrl + '",this)')
            }
        } else {
            // link_a.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',"' + products_data.ProductUrl + '",this)')
            // link_a.setAttribute('href', products_data.ProductUrl);
        }
    } else {
        // link_a.setAttribute('href', 'javascript:void(0);');
    }
    var get_image = products_data.ImageURL.split('?')[0];
    get_image += "?w=120"
    prod_img.setAttribute('src', get_image);
    prod_img.setAttribute('onerror', "this.src='https://www.increasingly.co/Implementation/aVoNCzRep/img/image.png'");
    link_a.appendChild(prod_img);
    prods_li.appendChild(link_a);
    add_swipe(prods_li);
    prods_ul.appendChild(prods_li);
    if (products_data.OtherImageList != null) {
        for (i = 0; i < products_data.OtherImageList.length; i++) {
            if (i != 0 && i < 5) {
                var link_a = generate_html_tag('a', '');
                if (modal_wrapper == undefined) {
                    if (window.innerWidth < 1201) {
                        // link_a.setAttribute('href', 'javascript:void(0);');
                        // link_a.setAttribute('href', products_data.ProductUrl);
                    } else {
                        // link_a.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',"' + products_data.ProductUrl + '",this)')
                        // link_a.setAttribute('href', products_data.ProductUrl);
                    }
                } else {
                    // link_a.setAttribute('href', products_data.ProductUrl);
                    // link_a.setAttribute('href', 'javascript:void(0);');
                }
                var prods_li1 = generate_html_tag('li', '');
                var prod_img1 = generate_html_tag('img', '');
                var get_image1 = products_data.OtherImageList[i];
                prod_img1.setAttribute('src', get_image1);
                prod_img1.setAttribute('onerror', "this.src='https://www.increasingly.co/Implementation/aVoNCzRep/img/image.png'");
                link_a.appendChild(prod_img1);
                prods_li1.appendChild(link_a);
                add_swipe(prods_li1);
                prods_ul.appendChild(prods_li1);
            }
        }
    }
    var nodes = prods_ul.childNodes;
    var dots = generate_html_tag('div', 'dots');
    if (type_of == "alternatives") {
        dots.setAttribute('style', 'display:none !important;')
    }
    if (nodes.length > 1) {
        for (var l = 0; l < nodes.length; l++) {
            if (l < 5) {
                nodes[l].setAttribute("id", l);
                nodes[l].setAttribute("data_product_id", products_data.ProductId.replace(/\"/g, "") + "_" + l);
                var dot = generate_html_tag('div', '');
                dot.setAttribute("name", "dot");
                if (l == 0) {
                    nodes[l].setAttribute("class", "show");
                    dot.setAttribute("class", "active");
                }
                dot.setAttribute("index", l);
                dot.setAttribute("onclick", "slideTo('" + products_data.ProductId.replace(/\"/g, "") + "'," + l + ",\'" + type_of + "\')");
                dots.appendChild(dot);
            }
        }
    } else {
        nodes[0].setAttribute("id", 0);
        nodes[0].setAttribute("data_product_id", products_data.ProductId.replace(/\"/g, "") + "_" + 0);
        nodes[0].setAttribute("class", "show");
    }
    prods_ul.appendChild(dots);
    var dot_arrows = generate_html_tag('div', 'dot_arrows');
    var dot1 = generate_html_tag('div', '');
    var next_spn = generate_html_tag('span', '');
    dot1.classList.add('left_arrow');
    next_spn.classList.add('inc_prev');
    dot1.appendChild(next_spn)
    dot1.setAttribute("onclick", "slideTo('" + products_data.ProductId.replace(/\"/g, "") + "'," + 0 + ",this)");
    dot_arrows.appendChild(dot1)
    var dot1 = generate_html_tag('div', '');
    var next_spn = generate_html_tag('span', '');
    dot1.classList.add('right_arrow')
    next_spn.classList.add('inc_next')
    dot1.appendChild(next_spn)
    dot1.setAttribute("onclick", "slideTo('" + products_data.ProductId.replace(/\"/g, "") + "'," + 0 + ",this)");
    dot_arrows.appendChild(dot1)
    if (nodes.length > 2) {
        prods_ul.appendChild(dot_arrows)
    }
    pdt_img.appendChild(prods_ul);
    ic_prod.appendChild(pdt_img);
}
var inc_slideIndex = 1;

function slideTo(id, n, type_of) {
    if (switch_board.auto_play_imgs) {
        clearInterval(bundle_vars.auto_play_imgs);
        bundle_vars.auto_play_imgs = '';
    }
    if (document.querySelector("#ic_bundle_popup.active") == null && switch_board.its_pdp_page) {
        var all_li = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .main_pdt_img ul li");
        var li = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dot = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div[index=\"" + n + "\"]");

        //quick_view
        var all_li_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .quick_pdt_img ul li");
        var li_quick_view = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dot_quick_view = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div[index=\"" + n + "\"]");
    } else {
        var all_li = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .main_pdt_img ul li");
        var li = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dot = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div[index=\"" + n + "\"]");

        //quick_view
        var all_li_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .quick_pdt_img ul li");
        var li_quick_view = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dot_quick_view = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div[index=\"" + n + "\"]");
    }
    if (type_of == "device_left" || type_of == "device_right") {
        if (type_of == "device_left") {
            var nn = -1
            inc_showSlides(inc_slideIndex += nn, id, nn, type_of);
        } else {
            var nn = 1
            inc_showSlides(inc_slideIndex += nn, id, nn, type_of);
        }
    } else if (type_of.className == "right_arrow" || type_of.className == "left_arrow") {
        if (type_of == "left_arrow") {
            var nn = -1
            inc_showSlides(inc_slideIndex += nn, id, nn, type_of);
        } else {
            var nn = 1
            inc_showSlides(inc_slideIndex += nn, id, nn, type_of);
        }
    } else {
        if (li != null) {
            if (li.classList != "show") {
                for (i = 0; i < all_li.length; i++) {
                    all_li[i].classList.remove("show");
                    if (all_li_quick_view[i] != undefined) {
                        all_li_quick_view[i].classList.remove("show");
                    }
                }
                li.classList.add("show");
                li_quick_view.classList.add("show");
            }
        }
        if (dot != null) {
            if (dot.classList != "active") {
                for (i = 0; i < all_dots.length; i++) {
                    all_dots[i].classList.remove("active");
                    if (all_dots_quick_view[i] != undefined) {
                        all_dots_quick_view[i].classList.remove("active");
                    }
                }
                dot.classList.add("active");
                dot_quick_view.classList.add("active");
            }
        }
    }
}

function inc_showSlides(n, id, ind, type_of) {

    if (document.querySelector("#ic_bundle_popup.active") == null && switch_board.its_pdp_page) {
        var slides = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .main_pdt_img ul li");
        var li = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dots = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dots_qc = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dot = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div[index=\"" + n + "\"]");

        //quick_view
        var slides_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .quick_pdt_img ul li");
        var li_quick_view = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dots_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dots_qc_quick_view = document.querySelectorAll(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dot_quick_view = document.querySelector(".inc_new_temp .ic_product[data_selected_prod_id=\"" + id + "\"]  .ic_quick_view_popup .dots div[index=\"" + n + "\"]");
    } else {
        var slides = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .main_pdt_img ul li");
        var li = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dots = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dots_qc = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div");
        var dot = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .dots div[index=\"" + n + "\"]");

        //quick_view
        var slides_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .quick_pdt_img ul li");
        var li_quick_view = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup li[data_product_id=\"" + id + "_" + n + "\"]");
        var all_dots_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dots_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dots_qc_quick_view = document.querySelectorAll("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div");
        var dot_quick_view = document.querySelector("#ic_bundle_popup.active .ic_product_bundling.active .ic_product[data_selected_prod_id=\"" + id + "\"] .ic_quick_view_popup .dots div[index=\"" + n + "\"]");
    }
    if (n > slides.length) {
        inc_slideIndex = 1
    }
    if (n < 1) {
        inc_slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
        if (slides_quick_view[i] != undefined) {
            slides_quick_view[i].classList.remove('show');
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        if (dots_quick_view[i] != undefined) {
            dots_quick_view[i].className = dots[i].className.replace(" active", "");
        }
    }
    slides[inc_slideIndex - 1].classList.add('show');
    if (slides_quick_view[inc_slideIndex - 1] != undefined) {
        slides_quick_view[inc_slideIndex - 1].classList.add('show');
    }
    for (var r = 0; r < dots_qc.length; r++) {
        dots_qc[r].classList.remove('active');
        if (dots_qc_quick_view[r] != undefined) {
            dots_qc_quick_view[r].classList.remove('active');
        }
    }
    if (dots_qc[inc_slideIndex - 1] != null) {
        dots_qc[inc_slideIndex - 1].classList.add('active');
    }
    if (dots_qc_quick_view[inc_slideIndex - 1] != null) {
        dots_qc_quick_view[inc_slideIndex - 1].classList.add('active');
    }
}


function create_product_box(load_type, products_data, product_attributes, ic_product_bundling, index, prod_bundle, new_temp, p_ind, first, ic_bundle_wrap, modal_wrapper, ic_show_details) {
    bundle_vars.is_promos = false;
    bundle_vars.create_prod_c++
    if (load_type == "onload") {
        if (bundle_vars.all_dup_push_prod.indexOf(products_data.ProductId) == -1) {
            bundle_vars.all_dup_push_prod.push(products_data.ProductId)
        }
    }
    var ic_prod = generate_html_tag('div', 'ic_product');
    if (ic_product_bundling.classList.contains('is_product') == false) {
        ic_product_bundling.classList.add('is_product')
    }
    if (switch_board.after_modal && window.innerWidth < 768) {
        ic_prod.classList.add('after_modal_ic')
    }
    var ic_prod_details = generate_html_tag('div', 'ic_prod_details');
    if (document.querySelector('body.Controller_Product') != null) {
        ic_prod_details.classList.add('old_temp')
    }
    if (modal_wrapper != undefined) {
        ic_prod.setAttribute('onClick', 'product_box_poup(this,' + products_data.ProductId + ')')
        if (bundle_vars.create_prod_c == 1) {
            // ic_prod.classList.add('active')
        }
        if (ic_show_details == true) {
            // ic_show_details = false;
            // ic_prod.classList.add('active')
        }

    }
    ic_prod.classList.add(products_data.ProductType)
    ic_prod.setAttribute("prod_index", index);
    ic_prod.setAttribute("bundle_id", products_data.BundleId);
    ic_prod.setAttribute('data_selected_prod_id', products_data.ProductId);
    ic_prod.setAttribute('data_selected_prod_sku', products_data.ProductSku);
    ic_prod.setAttribute('prod_type', products_data.ProductType);
    if (products_data.CategoryName == "Best Sellers") {
        ic_product_bundling.classList.add('dod_wrapper')
    }
    var is_spc = 0;
    if ((switch_board.its_pdp_page || switch_board.its_cart_page) && (load_type == "onload" || load_type == "btn_click")) {
        if (bundle_vars.pdp_response.BundleCount != 0 && load_type == "onload") {
            for (var i = 0; i < bundle_vars.pdp_response.BundleCount; i++) {
                if (bundle_vars.pdp_response.Bundles[i].TotalSpecialPrice != null) {
                    if (+bundle_vars.pdp_response.Bundles[i].TotalSpecialPrice < +bundle_vars.pdp_response.Bundles[i].TotalPrice) {
                        is_spc = 1;
                    }
                }
                for (var j = 0; j < bundle_vars.pdp_response.Bundles[i].Products.length; j++) {
                    if (bundle_vars.pdp_response.Bundles[i].Products[j].Attributes != null) {
                        bundle_vars.attr_flag = true;
                    }
                    if (bundle_vars.pdp_response.Bundles[i].Products[j].Field1 != null && bundle_vars.pdp_response.Bundles[i].Products[j].Field1 != "") {
                        bundle_vars.is_ratings = true;
                    }
                    if (bundle_vars.pdp_response.Bundles[i].Products[j].DiscountType == "Product Level" && bundle_vars.pdp_response.Bundles[i].Products[j].DiscountType != null) {
                        bundle_vars.is_promos = true;
                    }
                }
            }
        } else {
            if (load_type == "btn_click") {
                for (k = 0; k < prod_bundle.length; k++) {
                    if (prod_bundle[k].DiscountType != null && prod_bundle[k].DiscountType != "Product Level") {
                        bundle_vars.is_promos = true;
                    }
                    if (prod_bundle[k].Field1 != null && prod_bundle[k].Field1 != "") {
                        bundle_vars.is_ratings = true;
                    }
                    if (prod_bundle[k].Attributes != null) {
                        bundle_vars.attr_flag = true;
                        break;
                    } else {
                        bundle_vars.attr_flag = false;
                    }
                }
            }
        }
    }

    get_product_images(products_data, ic_prod_details, index, modal_wrapper);
    
    var info_wrap = generate_html_tag('div', 'info_wrap');
    if (modal_wrapper == undefined) {
        var inc_checkbox = generate_html_tag('div', 'inc_checkbox');
        inc_checkbox.innerText = 'checkbox'
        inc_checkbox.addEventListener('click',function(e){
            e.preventDefault()
            if(ic_prod.classList.contains('configurable') == true && ic_prod.classList.contains('inc_checked') == false){
                ic_prod.querySelector('.inc_add_to_basket_btn').click()
            }else{
                if(ic_prod.classList.contains('inc_checked') == true){
                    ic_prod.classList.remove('inc_checked')
                    ic_prod.querySelector('.inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                    ic_prod.querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                }else{
                    ic_prod.classList.add('inc_checked')
                    ic_prod.querySelector('.inc_add_to_basket_btn').innerHTML = '<span>Produs selectat</span>';
                    ic_prod.querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span>Produs selectat</span>';
                }
            }
            setTimeout(function(){
                updateplpactivemodalprc()
            },100)
        })
        info_wrap.appendChild(inc_checkbox)
    }
    var prod_sku_wraper = generate_html_tag('div', 'prod_sku_wraper');
    var prod_sku = generate_html_tag('span', 'prod_sku');
    prod_sku.textContent = products_data.ProductId;
    prod_sku_wraper.appendChild(prod_sku)
    info_wrap.appendChild(prod_sku_wraper)
    get_product_title(products_data, info_wrap, index, modal_wrapper);
    var prod_price = get_product_price(products_data, info_wrap, is_spc);
    var counter_div = generate_html_tag('div', 'counter_div');
    get_product_quantity_box(products_data, null, info_wrap, counter_div)
    
    info_wrap.appendChild(prepare_individual_checkout_button("cart_btn", products_data.BundleId, null, products_data.ProductUrl, products_data.ProductId,null,products_data.ProductType,modal_wrapper));
    
    ic_prod_details.appendChild(info_wrap);
    ic_prod.appendChild(ic_prod_details)
    ic_product_bundling.appendChild(ic_prod);
    prod_quick_view_for_product(products_data, ic_prod, index, is_spc, product_attributes,modal_wrapper)
}

function product_box_poup(element, prod_id) {
    if (document.querySelector('.inc_popup .ic_product_bundling.active .ic_product.active') != null) {
        var ic_product_box = document.querySelectorAll('.inc_popup .ic_product_bundling.active .ic_product.active')
        for (var r = 0; r < ic_product_box.length; r++) {
            ic_product_box[r].classList.remove('active');
        }
    }
    element.classList.add('active')
    element.click()
    disable_product_oss_attributes(element)
}

function show_prod_details_on_quick_view(elm, prod_id) {
    var ic_prod_box = elm.parentNode.parentNode.parentNode;
    if (ic_prod_box.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "inc_fbt_layout") {
        if (ic_prod_box.getAttribute('prod_type') == "configurable") {
            if (document.querySelector('.ic_quick_view_popup.active') != null) {
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                    document.querySelector('.ic_quick_view_popup.active').style.display = "none"
                }
                document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
            }

            disable_product_oss_attributes(ic_prod_box)
            if (ic_prod_box.querySelector('.ic_quick_view_popup') != null) {
                ic_prod_box.querySelector('.ic_quick_view_popup').classList.add('active')
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                    ic_prod_box.querySelector('.ic_quick_view_popup').style.display = "block"
                }
                setTimeout(function() {
                    document.querySelector('body').classList.add('quick_view_active')
                }, 50)
            }
        } else {
            var prod_id = ic_prod_box.getAttribute('data_selected_prod_id')
            if (document.querySelector('.pSrch-row .ps-lno .inpt-c.empty') != null) {
                // document.querySelector('.pSrch-row .ps-lno .inpt-c.empty input').value=prod_id
            }
            var demo_input = document.querySelector('.pSrch-row .ps-lno .inpt-c.empty input');
            var next_np = demo_input.parentNode.parentNode.parentNode.querySelector('.ps-qty input');
            //ps-qty
            $(demo_input).focus();
            $(demo_input).keydown()
            demo_input.select()
            var type_this = prod_id;
            var index = 0;

            window.next_letter = function() {
                if (index <= type_this.length) {
                    demo_input.value = type_this.substr(0, index++);
                    setTimeout("next_letter()", 50);
                }
            }
            next_letter();
            var nextInput = next_np;

            // $(demo_input).trigger({type: 'keypress', which: 9});
            // $(demo_input).trigger("keydown", [9]);


            // $(demo_input).trigger("paste");
            if (nextInput) {
                // nextInput.select()
                demo_input.focus();
                demo_input.select();
                // $(demo_input).keypress()
                $(demo_input).keydown()
                $(demo_input).click()
                // $(demo_input).trigger("focus")
            }
        }
    } else {
        if (document.querySelector('.ic_quick_view_popup.active') != null) {
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                document.querySelector('.ic_quick_view_popup.active').style.display = "none"
            }
            document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
        }

        disable_product_oss_attributes(ic_prod_box)
        if (ic_prod_box.querySelector('.ic_quick_view_popup') != null) {
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                ic_prod_box.querySelector('.ic_quick_view_popup').style.display = "block"
            }
            ic_prod_box.querySelector('.ic_quick_view_popup').classList.add('active')
            setTimeout(function() {
                document.querySelector('body').classList.add('quick_view_active')
            }, 50)
        }
    }


}

function close_conf_popup() {
    // if(document.querySelector('.yrOrders-C.active .edit-txt') == null){

    // }
    // edit_btn_show_on_add()
    if (document.querySelector('body.modal-open') != null) {
        document.querySelector('body.modal-open').classList.remove('modal-open')
    }
    if (document.querySelector('.ic_quick_view_popup.active') != null) {
        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
            document.querySelector('.ic_quick_view_popup.active').style.display = "none"
        }
        document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
        document.querySelector('body').classList.remove('quick_view_active')
    }
    if (document.querySelector('.ic_quick_view_popup.active') != null) {
        document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
        document.querySelector('body').classList.remove('quick_view_active')
    }
    if (document.querySelector('#inc_sku_fbt.active #inc_fbt_layout') != null) {
        // document.querySelector('#inc_sku_fbt.active #inc_fbt_layout').setAttribute('style','z-index:99')
    }

}

function prod_quick_view_for_product(products_data, ic_prod, index, is_spc, product_attributes,modal_wrapper) {
    var ic_quick_view_popup = generate_html_tag('div', 'ic_quick_view_popup');
    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
        ic_quick_view_popup.style.display="none"
    }
    ic_quick_view_popup.setAttribute('id', "ic_quick_view_popup")
    var ic_quick_view_wrapper = generate_html_tag('div', 'ic_quick_view_wrapper');
    var ic_conf_close_header = generate_html_tag('div', 'ic_conf_close_header');
    ic_quick_view_wrapper.appendChild(ic_conf_close_header)
    var closeMe = generate_html_tag('span', 'inc_icon_close');
    closeMe.classList.add('icon-invalid')
    closeMe.setAttribute("onclick", "close_conf_popup(event,this)");
    ic_conf_close_header.appendChild(closeMe);
    var ic_quick_view_container = generate_html_tag('div', 'ic_quick_view_container');
    var ic_quick_view_prod_details = generate_html_tag('div', 'ic_quick_view_prod_details');
    get_product_images(products_data, ic_quick_view_prod_details, index, null, "quick_view");

    var ic_quick_info_wrap = generate_html_tag('div', 'ic_quick_info_wrap');
    var prod_sku_quick_info_wrap = generate_html_tag('div', 'prod_sku_quick_info_wrap');
    var prod_sku_quick_view = generate_html_tag('span', 'prod_sku_quick_view');
    var prod_sku_quick_view_text = generate_html_tag('span', 'prod_sku_quick_view_text');
    prod_sku_quick_view_text.textContent = bundle_vars.product_id
    prod_sku_quick_view.textContent = products_data.ProductId;
    prod_sku_quick_info_wrap.appendChild(prod_sku_quick_view_text)
    prod_sku_quick_info_wrap.appendChild(prod_sku_quick_view)
    // if(products_data.ProductType == "simple"){
    //     ic_quick_info_wrap.appendChild(prod_sku_quick_info_wrap)
    // }
    ic_quick_info_wrap.appendChild(prod_sku_quick_info_wrap)
    get_product_title(products_data, ic_quick_info_wrap, index);
    get_product_price(products_data, ic_quick_info_wrap, "quick_view");

    if (switch_board.configurables && product_attributes != null) {
        get_product_configurables(products_data, product_attributes, ic_quick_info_wrap, "onload", null, index);
    }
    if (products_data.Attributes != null) {
        
    }
    var counter_div = generate_html_tag('div', 'counter_div');
    get_product_quantity_box(products_data, null, ic_quick_info_wrap, counter_div)

    ic_quick_info_wrap.appendChild(prepare_individual_checkout_button("cart_btn", products_data.BundleId, null, products_data.ProductUrl, products_data.ProductId,null,null,modal_wrapper));
    if (products_data.Attributes != null) {
        // var prod_quick_view2 = generate_html_tag('div', 'prod_quick_view');
        // prod_quick_view2.classList.add('fbt_btn')
        // prod_quick_view2.setAttribute('onClick', 'add_product_to_client_module(this,' + products_data.ProductId + ',"config")')
        // prod_quick_view2.textContent = bundle_vars.add_to_cart_btn_text
        // prod_quick_view2.classList.add('configurable');
        // ic_quick_info_wrap.appendChild(prod_quick_view2)

    }

    ic_quick_view_prod_details.appendChild(ic_quick_info_wrap)
    ic_quick_view_container.appendChild(ic_quick_view_prod_details)
    ic_quick_view_wrapper.appendChild(ic_quick_view_container)
    ic_quick_view_popup.appendChild(ic_quick_view_wrapper)
    ic_prod.appendChild(ic_quick_view_popup)
    var ic_quick_view_overlay = generate_html_tag('div', 'ic_quick_view_overlay');
    ic_prod.appendChild(ic_quick_view_overlay)
}

function get_product_qtybundles(products_data, qtyBundless, prod_price, ic_prod, counter_div, load_type, qty_bundle_flag) {
    var bundle_selection = generate_html_tag('div', 'selection_QTYbundle');
    var bundle_selection_wrap = generate_html_tag('div', 'bundle_selection_wrap');
    bundle_selection.appendChild(bundle_selection_wrap)
    var config_btn = generate_html_tag('div', 'config_btn');
    var config_btn_text = generate_html_tag('span', 'config_btn_text');
    config_btn_text.textContent = bundle_vars.select_a_pack;
    config_btn_text.setAttribute('onclick', 'qty_select_fun(this)');
    config_btn.appendChild(config_btn_text);
    ic_prod.appendChild(config_btn);
    config_btn.appendChild(bundle_selection);
    var qty_ul_title = generate_html_tag('span', 'qty_ul_title');
    qty_ul_title.textContent = bundle_vars.select_a_pack
    bundle_selection_wrap.appendChild(qty_ul_title)
    prepare_qunatityBundles(products_data, qtyBundless, bundle_selection_wrap, prod_price, ic_prod, counter_div, load_type);
}

function qty_select_fun(elm) {
    var ic_p_c = null;
    var ic_prd_elm = elm.parentNode.parentNode.parentNode;
    elm.parentNode.classList.add('active')
    if (window.innerWidth > 768) {
        if (ic_prd_elm.querySelector('.selection_QTYbundle').classList.contains('trigger_colour') == true) {
            ic_prd_elm.querySelector('.selection_QTYbundle').classList.remove('trigger_colour');
        } else {
            var all_sel_wrapper = document.querySelectorAll('.select_wrapper');
            for (var w = 0; w < all_sel_wrapper.length; w++) {
                if (all_sel_wrapper[w].classList.contains('trigger_colour') == true) {
                    all_sel_wrapper[w].classList.remove('trigger_colour');
                }
            }
            if (document.querySelector('.selection_QTYbundle.trigger_colour') != null) {
                document.querySelector('.selection_QTYbundle.trigger_colour').classList.remove('trigger_colour')
            }
            ic_prd_elm.querySelector('.selection_QTYbundle').classList.add('trigger_colour')
        }
    } else {
        if (document.querySelector('.selection_QTYbundle.trigger_colour') != null) {
            document.querySelector('.selection_QTYbundle.trigger_colour').classList.remove('trigger_colour')
        }
        if (ic_prd_elm.querySelector('.selection_QTYbundle').classList.contains('trigger_colour') == true) {
            ic_prd_elm.querySelector('.selection_QTYbundle').classList.remove('trigger_colour');
        } else {
            var all_sel_wrapper = document.querySelectorAll('.select_wrapper');
            for (var w = 0; w < all_sel_wrapper.length; w++) {
                if (all_sel_wrapper[w].classList.contains('trigger_colour') == true) {
                    all_sel_wrapper[w].classList.remove('trigger_colour');
                }
            }
            ic_prd_elm.querySelector('.selection_QTYbundle').classList.add('trigger_colour')
            document.querySelector('body').classList.add('quick_view_active')
            
        }
    }
}

function option_change_quantity(element) {
    packOf = element.getAttribute('pack_of');
    var li = element;
    var ul_parent = element.parentNode.parentNode;
    var bundle_select_parent = element.parentNode.parentNode.parentNode;
    var ic_prod = bundle_select_parent.parentNode.parentNode.parentNode
    var li_active = ul_parent.parentNode.querySelectorAll('div .qty_li.active');
    var prc = element.querySelector('.qty_price').innerHTML;
    for (i = 0; i < li_active.length; i++) {
        li_active[i].classList.remove('active');
        li_active[i].parentNode.classList.remove('active');
    }
    element.parentNode.classList.add("active");
    var qtity = element.getAttribute('pack_of').trim();
    ic_prod.querySelector('.config_btn_text').innerHTML = " ";
    var PackText = element.querySelector('.qty_a').getAttribute('set_of_mes');
    ic_prod.querySelector('.config_btn_text').innerHTML = PackText + "<span class='config_prc'>" + prc + "</span>";
    // if (window.innerWidth < 768) {
    //     ic_prod.classList.remove('trigger_colour');
    //     document.querySelector('body').classList.remove('quick_view_active');
    // }
    if (ic_prod.querySelector('.selection_QTYbundle.trigger_colour') != null) {
        ic_prod.querySelector('.selection_QTYbundle.trigger_colour').classList.remove('trigger_colour');
    }
    if (ic_prod.querySelector('.config_btn.active') != null) {
        ic_prod.querySelector('.config_btn.active').classList.remove('active');
    }
}

function prepare_qunatityBundles(products_data, qtyBundless, bundle_selection, prod_price, ic_prod, counter_div, load_type) {
    if (qtyBundless != null) {
        qtybasedbundles = qtyBundless.length;
        var qty_ul = generate_html_tag('div', 'qty_ul');

        for (var j = 0; j < qtybasedbundles; j++) {
            var qty_li = generate_html_tag('div', 'qty_li');
            var qty_bundle_wrap = generate_html_tag('div', 'qty_li');
            var qty_set_wrapper = generate_html_tag('div', 'qty_set_wrapper');
            qty_set_wrapper.setAttribute('pack_of', qtyBundless[j])
            qty_set_wrapper.setAttribute('onClick', 'option_change_quantity(this)');
            qty_bundle_wrap.appendChild(qty_set_wrapper)

            var qty_img_title_wrap = generate_html_tag('div', 'qty_img_title_wrap');
            qty_set_wrapper.appendChild(qty_img_title_wrap)
            var qty_img = generate_html_tag('img', 'qty_img');
            qty_img.setAttribute('src', products_data.ImageURL)
            qty_img_title_wrap.appendChild(qty_img);

            var qty_a = generate_html_tag('div', 'qty_a');
            qty_a.setAttribute('set_of_mes', "Buy a Pack of " + " " + qtyBundless[j])
            qty_a.setAttribute('set_of', qtyBundless[j])
            qty_a.textContent = bundle_vars.buy_a_pack_of + " " + qtyBundless[j];
            qty_a.setAttribute('pack_of', qtyBundless[j])
            qty_img_title_wrap.appendChild(qty_a);

            var qty_price = generate_html_tag('div', 'qty_price');
            if (products_data.SpecialPrice != null && (+products_data.SpecialPrice < +products_data.Price || +products_data.SpecialPrice != +products_data.Price)) {
                if (window.location.host.includes('.ro') == true) {
                    qty_price.textContent = check_currency_symb(parseFloat(products_data.SpecialPrice * qtyBundless[j]))
                } else {
                    qty_price.textContent = client_vars.curr_sym + parseFloat(products_data.SpecialPrice * qtyBundless[j]).toFixed(2)
                }
            } else {
                if (window.location.host.includes('.ro') == true) {
                    qty_price.textContent = check_currency_symb(parseFloat(products_data.Price * qtyBundless[j]))
                } else {
                    qty_price.textContent = client_vars.curr_sym + parseFloat(products_data.Price * qtyBundless[j]).toFixed(2)
                }
            }
            qty_set_wrapper.appendChild(qty_price);

            var qty_total_amount = generate_html_tag('div', 'qty_total_amount');
            var i = 0;
            qty_li.appendChild(qty_set_wrapper)
            bundle_selection.appendChild(qty_ul);
            qty_ul.appendChild(qty_li);

        }
    }
}

function prepare_individual_checkout_button(source, bundleId, id, url, p_id, p_ind,prodtype,modal_wrapper) {
    var ic_prod_checkout = generate_html_tag('div', 'inc_product_checkout');
    var ic_btn_div = generate_html_tag('div', 'inc_basket_wrap');
    var ic_add_button = generate_html_tag('a', 'inc_add_to_basket_btn');
    ic_add_button.setAttribute('p_index', p_ind)
    ic_add_button.innerHTML = '<span>' + bundle_vars.add_to_cart_btn_text + '</span>';
    ic_add_button.setAttribute('prd_id', p_id);
    if(modal_wrapper == undefined){
        ic_add_button.innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
        ic_add_button.setAttribute('onclick', 'prepare_add_to_cart_data("' + source + '",' + bundleId + ',\'' + id + '\', null,' + JSON.stringify(url) + ', null, this,"checkbox")');
    }else{
        ic_add_button.setAttribute('onclick', 'prepare_add_to_cart_data("' + source + '",' + bundleId + ',\'' + id + '\', null,' + JSON.stringify(url) + ', null, this,"popup")');
    }
    
    ic_add_button.classList.add(prodtype)
    ic_btn_div.appendChild(ic_add_button);
    ic_prod_checkout.appendChild(ic_btn_div);
    var ic_prod_add_error_wrap = generate_html_tag('div', 'ic_prod_add_error_wrap');
    var ic_prod_add_error = generate_html_tag('span', 'ic_prod_add_error');
    ic_prod_add_error_wrap.appendChild(ic_prod_add_error);
    ic_prod_checkout.appendChild(ic_prod_add_error_wrap)
    return ic_prod_checkout;

}

function get_product_ratings(data, ic_prod) {
    var rating = data.Field1;
    var gave_rat = data.Field4;
    var ratingAvg = data.Field1
    rating = Math.round(rating * 2) / 2;
    rating = rating.toString();
    var rating_m = null;
    //if (rating != 0 && rating != "" && rating != null) {
    var rating_container = generate_html_tag("div", "inc_product_ratings");
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
    if (rating_m != null) {
        rating_container.classList.add("rating_" + rating_m);
    } else {
        rating_container.classList.add("rating_" + rating);
    }
    var count = generate_html_tag("span", "rating_count");
    var avg = generate_html_tag("span", "rating_avg");
    // var rating_c_pr = generate_html_tag("span", "rating_c_pr");
    // rating_c_pr.textContent=rating;
    // .appendChild(rating_c_pr)
    if (rating == "0-0") {
        count.textContent = "0";
    } else {
        count.textContent = rating.replace('-', '.') //"(" + rating.replace('-','.') + ")";
    }

    rating_container.appendChild(count);
    // rating_container.appendChild(avg);
    var stars = generate_html_tag("span", "");
    stars.classList.add('rating_stars');
    stars.innerHTML = "★★★★★" //"&#9734;&#9734;&#9734;&#9734;&#9734;";
    rating_container.appendChild(stars);
    ic_prod.appendChild(rating_container);
}

function quantity_box_restriction(el, event) {
    if (el.value != "*") {
        if (el.value <= 0) {
            el.setAttribute("value", "0");
            el.value = "0";
            quantity_input_change(el);
        }
        if (el.value > 99) {
            event.preventDefault();
            el.setAttribute("value", "99");
            el.setAttribute("old_val", "99");
            el.value = "99";
            el.nextElementSibling.nextElementSibling.setAttribute('value', '99')
            el.parentNode.querySelector('input').setAttribute('value', "99")

        }
    }
    if (el != undefined) {
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    }

}

function get_product_title(products_data, ic_prod, index, modal_wrapper) {
    var prod_name_wrap = generate_html_tag('div', 'pdt_name');
    var prod_name = generate_html_tag('a', '');
    prod_name.setAttribute('title', products_data.ProductName);

    if (modal_wrapper == undefined) {
        // prod_name.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',\'' + products_data.ProductUrl + '\')');
        // prod_name.setAttribute('href', products_data.ProductUrl);
    } else {
        // prod_name.setAttribute('href', 'javascript:void(0);');
        // prod_name.setAttribute('href', products_data.ProductUrl);
    }
    // prod_name.setAttribute('target', "_blank");


    // /<span class = 'inc_tooltips'> "+l_prd.PrdName+"</span>
    var prod_name_p = generate_html_tag('p', '');
    if (index == 0) {
        prod_name_p.classList.add('item_text')
    }
    prod_name_p.textContent = products_data.ProductName;

    prod_name.appendChild(prod_name_p);
    var tool_tip = generate_html_tag('span', 'inc_tooltips');
    tool_tip.textContent = products_data.ProductName;
    tool_tip.style.display = "none"
    prod_name_wrap.appendChild(prod_name);
    prod_name_wrap.appendChild(tool_tip);
    ic_prod.appendChild(prod_name_wrap);
}

function get_product_price(products_data, ic_prod, type_of) {
    var prod_price = generate_html_tag('div', 'pdt_price');
    toggle_price(products_data.Price, products_data.SpecialPrice, prod_price, products_data.ExclusiveVATPrice, products_data.ExclusiveVATSpecialPrice);
    ic_prod.appendChild(prod_price);
    if (products_data.QuantityBasedBundle != null && type_of == "quick_view") {
        var qtyBundless = [];
        qtyBundless = products_data.QuantityBasedBundle;
        qtyBundless.sort(function(a, b) {
            return a - b
        });
        var load_type = "onload"
        get_product_qtybundles(products_data, qtyBundless, ic_prod, ic_prod, ic_prod, load_type, null);
    }
    return prod_price;
}

function sorting(data) {
    data.sort(function(n, m) {
        if (+n.special_price > 0) {
            sn_price = n.special_price;
        } else {
            sn_price = n.price;
        }
        if (+m.special_price > 0) {
            sm_price = m.special_price;
        } else {
            sm_price = m.price;
        }
        return sn_price - sm_price;
    })
}

function filter_unique_values(data) {
    var fdata = {};
    data = data.filter(function(currentObject) {
        if (currentObject.id in fdata) {
            return false;
        } else {
            fdata[currentObject.id] = true;
            return true;
        }
    });
    return data;
}




function get_product_configurables(products_data, product_attributes, ic_prod, load_type) {
    var bundle_selection = generate_html_tag('div', 'selection_bundle');
    if (product_attributes != null) {
        prepare_configurables(product_attributes, products_data, load_type, bundle_selection);
        ic_prod.appendChild(bundle_selection);
    } else {
        if (bundle_vars.attr_flag) {
            ic_prod.appendChild(bundle_selection);
        }
    }
}

function attributes_stock_check(attributes, products_data, load_type, bundle_selection) {
    var dup_chil_pid = []
    var attributes_bundle = []
    var attributes_bundle1 = []
    var active_customer = "";
    var prod_avail = false;
    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
    if (cust_data_online != null) {
        for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
            if (cust_data_online.dataList[ca].active == true) {
                active_customer = cust_data_online.dataList[ca];
                break;
            }
        }
        if (active_customer != "") {
            cust_id = active_customer.custId
            inc_cust_name = active_customer.custName
        } else {
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
            }
            if (document.querySelector('#co-mobMenu .name') != null) {
                var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
            }
        }
        var inc_acctNr = sessionStorage.getItem("acctNr")
        var order_n = ""
        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
            order_n = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
        }
        var inc_profile = JSON.parse(sessionStorage.getItem("profileRes"))
        if (attributes != null) {
            for (var y = 0; y < attributes.length; y++) {
                for (var z = 0; z < attributes[y].attributeValues.length; z++) {
                    if (attributes[y].attributeValues[z].childProductId == null) {

                    } else {
                        if (switch_board.unauthorized == false) {
                            if (client_vars.item_validation.indexOf(attributes[y].attributeValues[z].childProductId) == -1) {
                                client_vars.item_validation.push(attributes[y].attributeValues[z].childProductId)
                                var url = "//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/" + inc_acctNr + "/itemvalidation?lineNrs=" + attributes[y].attributeValues[z].childProductId + "%3A1&cmpgnId=" + inc_profile.currCmpgnId + "&placOrdSctnCd=REGULAR&custId=" + cust_id + "&ordNr=" + order_n + "&rule=basic"
                                check_all_attributes_stock(url, attributes[y].attributeValues[z].childProductId)
                            }
                        } else {
                            bundle_vars.instock_attribues.push(attributes[y].attributeValues[z].childProductId)
                            // break;
                        }
                    }
                }
            }
        }
        if (switch_board.unauthorized == true) {

        }

    }
}
var attr_c = 0

function check_all_attributes_stock(url, child_prod_id) {
    $.ajax({
        type: "GET",
        url: url,
        processData: false,
        cacheable: false,
        dataType: "json",
        contentType: "application/json",
        beforeSend: function(xhr) {
            if (getCookie_inc('avn_imps') == undefined || getCookie_inc('avn_imps') == "") {
                xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
            } else {
                xhr.setRequestHeader('X-CCA-Token', getCookie_inc('avn_tkn'));
            }
            xhr.setRequestHeader('content-type', 'application/json');
        },
        success: function(result, xhr) {
            bundle_vars.count_of_attrt++
            if (result != "" && xhr == "success") {
                var resp_ajax = result
                if (bundle_vars.dup_attr_p.indexOf(child_prod_id) == -1) {
                    bundle_vars.dup_attr_p.push(child_prod_id)
                    if (resp_ajax[0].valid == true && resp_ajax[0].rsnCd != "NOT_FOUND") {
                        bundle_vars.instock_attribues.push(child_prod_id)
                    }
                }
            }

        },
        error: function(jqXHR, textStatus, errorMessage) {
            bundle_vars.count_of_attrt++
            if (errorMessage == "Unauthorized") {
                switch_board.unauthorized = true
            }
        },
    });
}
function prepare_configurables(attributes, products_data, load_type, bundle_selection) {
    var ulitem = 0;
    var format = /[_]/;
    var l_data = "";
    html_size = "";
    html_color = "";
    var mainOptionId = "";
    var data_size = [];
    var SelClrVal = "";
    var id = "";
    var chckType = "";
    var sizeValue = "";
    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
    if (attributes[0].attributeCode != "color") {
        attributes = attributes.reverse();
    } else {
        attributes = attributes;
    }
    var child_optionText = "";
    var child_prd_arr = [];
    for (h = 0; h < attributes.length; h++) {
        ulitem = h;
        var data = [];
        if (format.test(attributes[h].attributeCode) == true) {
            var acode = attributes[h].attributeCode.replace('_', ' ');
        } else {
            var acode = attributes[h].attributeCode;
        }
        for (k = 0; k < attributes[h].attributeValues.length; k++) {
            if (acode == "Color" || acode == "color" || acode == "Colour") {
                child_optionText = attributes[h].attributeValues[0].optionText;
            }
            if (child_optionText == attributes[h].attributeValues[k].optionText) {
                child_prd_arr.push(attributes[h].attributeValues[k].childProductId);
            }
        }
    }
    for (m = 0; m < attributes.length; m++) {
        ulitem = m;
        var data = [];
        if (format.test(attributes[m].attributeCode) == true) {
            var acode = attributes[m].attributeCode.replace('_', ' ');
        } else {
            var acode = attributes[m].attributeCode;
        }
        //var acode = attributes[m].attributeCode;
        var aId = attributes[m].attributeId;
        var i = 0;
        var size = [];
        for (n = 0; n < attributes[m].attributeValues.length; n++) {
            if (attributes.length == 1 && (acode != "color" || acode != "Colour") && child_prd_arr.length == 0) {
                id = id;
                opt_id = attributes[m].attributeValues[n].optionText;
                text = attributes[m].attributeValues[n].optionText;
                pid = attributes[m].attributeValues[n].optionId;
                pricingval = attributes[m].attributeValues[n].childProductPrice;
                splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                child_url = attributes[m].attributeValues[n].childProductUrl
                attr_code = attributes[m].attributeCode;
                var child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                var child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                var child_prd = attributes[m].attributeValues[n].childProductId;
                var child_NM = attributes[m].attributeValues[n].childProductName;
                var opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                if (child_img_url == null) {
                    child_img_url = products_data.ImageURL
                }
                var clr_code = attributes[m].attributeValues[n].colorCode
                //ImageURL
                if (splPricingVal == null) {
                    splPricingVal = 0;
                }
                if (splPricingVal == null) {
                    splPricingVal = 0;
                }
                var chckType = text;
                var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                reg.test(chckType);
                if (reg.test(chckType) == true) {
                    switch ((text).toUpperCase()) {
                        case "XS":
                            sizeValue = "1"
                            break;
                        case "S":
                            sizeValue = "2"
                            break;
                        case "M":
                            sizeValue = "3"
                            break;
                        case "L":
                            sizeValue = "4"
                            break;
                        case "XL":
                            sizeValue = "5"
                            break;
                        case "XXL":
                            sizeValue = "6"
                            break;
                        case "XXXL":
                            sizeValue = "7"
                            break;
                        case "2XL":
                            sizeValue = "8"
                            break;
                        case "X SMALL":
                            sizeValue = "9"
                            break;
                        case "SMALL":
                            sizeValue = "10"
                            break;
                        case "MEDIUM":
                            sizeValue = "11"
                            break;
                        case "LARGE":
                            sizeValue = "12"
                            break;
                        case "X LARGE":
                            sizeValue = "13"
                            break;
                        case "XX LARGE":
                            sizeValue = "14"
                            break;
                        case "XXX LARGE":
                            sizeValue = "15"
                            break;
                        default:
                            break;
                    }
                } else {
                    sizeValue = text;
                }
                data.push({
                    id: text,
                    value: text,
                    pid: pid,
                    price: parseFloat(pricingval).toFixed(2),
                    special_price: parseFloat(splPricingVal).toFixed(2),
                    opt_id: opt_id,
                    child_url: child_url,
                    attr_code: attr_code,
                    child_img_url: child_img_url,
                    clr_code: clr_code,
                    child_prd_sku: child_prd_sku,
                    child_prd: child_prd,
                    child_NM: child_NM,
                    opt_img_url: opt_img_url
                });
            } else {
                if (acode == "Color" || acode == "color" || acode == "Colour") {
                    //if(child_prd_arr.indexOf(attributes[m].attributeValues[n].childInternalProductId) >= 0){
                    id = id;
                    opt_id = attributes[m].attributeValues[n].optionText;
                    text = attributes[m].attributeValues[n].optionText;
                    pid = attributes[m].attributeValues[n].optionId;
                    pricingval = attributes[m].attributeValues[n].childProductPrice;
                    splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                    child_url = attributes[m].attributeValues[n].childProductUrl
                    attr_code = attributes[m].attributeCode;
                    var child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                    var child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                    var child_prd = attributes[m].attributeValues[n].childProductId;
                    var child_NM = attributes[m].attributeValues[n].childProductName;
                    var opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                    if (child_img_url == null) {
                        child_img_url = products_data.ImageURL
                    }
                    var clr_code = attributes[m].attributeValues[n].colorCode
                    //ImageURL
                    if (splPricingVal == null) {
                        splPricingVal = 0;
                    }
                    var chckType = text;
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                    reg.test(chckType);
                    if (reg.test(chckType) == true) {
                        switch ((text).toUpperCase()) {
                            case "XS":
                                sizeValue = "1"
                                break;
                            case "S":
                                sizeValue = "2"
                                break;
                            case "M":
                                sizeValue = "3"
                                break;
                            case "L":
                                sizeValue = "4"
                                break;
                            case "XL":
                                sizeValue = "5"
                                break;
                            case "XXL":
                                sizeValue = "6"
                                break;
                            case "XXXL":
                                sizeValue = "7"
                                break;
                            case "2XL":
                                sizeValue = "8"
                                break;
                            case "X SMALL":
                                sizeValue = "9"
                                break;
                            case "SMALL":
                                sizeValue = "10"
                                break;
                            case "MEDIUM":
                                sizeValue = "11"
                                break;
                            case "LARGE":
                                sizeValue = "12"
                                break;
                            case "X LARGE":
                                sizeValue = "13"
                                break;
                            case "XX LARGE":
                                sizeValue = "14"
                                break;
                            case "XXX LARGE":
                                sizeValue = "15"
                                break;
                            default:
                                break;
                        }
                    } else {
                        sizeValue = text;
                    }
                    data.push({
                        id: text,
                        value: text,
                        pid: pid,
                        price: parseFloat(pricingval).toFixed(2),
                        special_price: parseFloat(splPricingVal).toFixed(2),
                        opt_id: opt_id,
                        child_url: child_url,
                        attr_code: attr_code,
                        child_img_url: child_img_url,
                        clr_code: clr_code,
                        child_prd_sku: child_prd_sku,
                        child_prd: child_prd,
                        child_NM: child_NM,
                        opt_img_url: opt_img_url
                    });
                    //}
                } else {
                    //if (child_prd_arr.indexOf(attributes[m].attributeValues[n].childProductId) >= 0) {
                    id = id;
                    opt_id = attributes[m].attributeValues[n].optionText;
                    text = attributes[m].attributeValues[n].optionText;
                    pid = attributes[m].attributeValues[n].optionId;
                    pricingval = attributes[m].attributeValues[n].childProductPrice;
                    splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                    child_url = attributes[m].attributeValues[n].childProductUrl
                    attr_code = attributes[m].attributeCode;
                    var child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                    var child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                    var child_prd = attributes[m].attributeValues[n].childProductId;
                    var child_NM = attributes[m].attributeValues[n].childProductName;
                    var opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                    if (child_img_url == null) {
                        child_img_url = products_data.ImageURL
                    }
                    var clr_code = attributes[m].attributeValues[n].colorCode
                    //ImageURL
                    if (splPricingVal == null) {
                        splPricingVal = 0;
                    }
                    var chckType = text;
                    var sizeValue = ""
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                    reg.test(chckType);
                    if (reg.test(chckType) == true) {
                        switch ((text).toUpperCase()) {
                            case "XS":
                                sizeValue = "1"
                                break;
                            case "S":
                                sizeValue = "2"
                                break;
                            case "M":
                                sizeValue = "3"
                                break;
                            case "L":
                                sizeValue = "4"
                                break;
                            case "XL":
                                sizeValue = "5"
                                break;
                            case "XXL":
                                sizeValue = "6"
                                break;
                            case "XXXL":
                                sizeValue = "7"
                                break;
                            case "2XL":
                                sizeValue = "8"
                                break;
                            case "X SMALL":
                                sizeValue = "9"
                                break;
                            case "SMALL":
                                sizeValue = "10"
                                break;
                            case "MEDIUM":
                                sizeValue = "11"
                                break;
                            case "LARGE":
                                sizeValue = "12"
                                break;
                            case "X LARGE":
                                sizeValue = "13"
                                break;
                            case "XX LARGE":
                                sizeValue = "14"
                                break;
                            case "XXX LARGE":
                                sizeValue = "15"
                                break;
                            default:
                                break;
                        }
                    } else {
                        sizeValue = text;
                    }
                    data.push({
                        id: text,
                        value: text,
                        pid: pid,
                        price: parseFloat(pricingval).toFixed(2),
                        special_price: parseFloat(splPricingVal).toFixed(2),
                        opt_id: opt_id,
                        child_url: child_url,
                        attr_code: attr_code,
                        child_img_url: child_img_url,
                        clr_code: clr_code,
                        child_prd_sku: child_prd_sku,
                        child_prd: child_prd,
                        child_NM: child_NM,
                        sizeValue: sizeValue,
                        opt_img_url: opt_img_url
                    });
                    //}
                }
            }
        }
        data.sort(function(a, b) {
            return (b.child_prd === null) - (a.child_prd === null) || ('' + a.child_prd).localeCompare(b.child_prd);
        });
        data = filter_unique_values(data);

        if (reg.test(chckType) == true) {
            sorting_data(data, 'sizeValue');
        } else {
            sortByKey(data, 'id');
        }
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            if (data[0].id != child_optionText) {
                data = data.reverse();
            } else {
                data = data;
            }
        } else {
            data = data;
        }
        //html_size += "<div class='select_wrapper'><label class='color_size_title'>" + acode.toUpperCase() + ":</label>";
        var select_wrapper = generate_html_tag("div", "select_wrapper");
        //if (window.innerWidth > 767) {
        var color_label_wrap = generate_html_tag("div", "color_label_wrap");
        var color_size_title = generate_html_tag("label", "color_size_title");
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            color_size_title.textContent = bundle_vars.select_colour;
        } else {
            color_size_title.textContent = bundle_vars.select_size;
        }
        color_label_wrap.appendChild(color_size_title);
        select_wrapper.appendChild(color_label_wrap);
        //if (acode == "Color" || acode == "color" || acode == "Colour") {
        var color_label_text = generate_html_tag("span", "color_label_text");
        //color_size_title.appendChild(color_label_text);
        //}
        if (acode != "color") {
            //color_label_text.classList.add('size_label_text')
        }
        var ul = generate_html_tag("ul", "prod_Colour");

        ul.classList.add('product_sizes')
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            ul.classList.add("Colour");
            ul.classList.add("prod_" + acode + "");
        } else {
            ul.classList.add("prod_Size");
            ul.classList.add('acode');
        }
        ul.setAttribute("onchange", "update_the_price(\"" + load_type + "\", this.value,this);");
        var color_size_count = 0;
        var is_active = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i].child_prd_sku == null) {
                data[i].price = products_data.Price;
                data[i].special_price = products_data.SpecialPrice;
                data[i].child_NM = products_data.ProductName; //c_pid
                data[i].child_prd = products_data.ProductId;
                data[i].child_prd_sku = products_data.ProductSku;
            }

            var no_arrow = "";

            var sel = "";
            var checked = "";
            //document.querySelector('#configurable_swatch_color li.selected a').title
            var colour_text = null;
            if (document.querySelector('#configurable_swatch_color li.selected a') != null) {
                colour_text = document.querySelector('#configurable_swatch_color li.selected a').getAttribute('title');
            }
            if (i == 0) {
                sel = "selected";
                checked = "active";
                is_active = 1;
            }

            if (data[i].child_prd_sku == null) {
                data[i].price = products_data.Price;
                data[i].special_price = products_data.SpecialPrice;
                data[i].child_NM = products_data.ProductName; //c_pid
                data[i].child_prd = products_data.ProductId;
                data[i].value = products_data.Color;
                data[i].child_prd_sku = products_data.ProductSku;
            }
            if (data[i].special_price == null) {
                data[i].special_price = 0;
            }
            var selected = (data[i].pid == products_data.ProductId) ? "selected" : "";
            //if(window.innerWidth > 420){
            var show_hide = "inc_show";



            var font_size = "15px";
            if (window.innerWidth > 767) {
                if (acode == "Size" || acode == "size") {
                    if (data[i].value.length >= 5) {
                        font_size = "10px";
                    }
                }
            }
            var dis_sizes = "";
            var dis_text = ""
            if (data[i].pid == "") {
                dis_sizes = "disabled";
                dis_text = "Out of stock"
            } else {
                dis_text = data[i].value;
            }
            var le_style = ""

            if (acode == "Color" || acode == "color" || acode == "Colour") {
                if (data.length < 4) {
                    if (i == 0) {
                        ul.classList.add('no_arrow')
                    }
                }

                if (!switch_board.its_cart_page) {
                    var swatch_option_tooltip = generate_html_tag("div", "swatch-option-tooltip");
                    swatch_option_tooltip.classList.add('inc_swatch_option_tooltip')
                    var inc_img_tooltip = generate_html_tag("div", "inc_img_tooltip");
                    var inc_img_tooltip_title = generate_html_tag("div", "title");
                    var inc_img_tooltip_corner = generate_html_tag("div", "corner");
                    inc_img_tooltip.classList.add('image');

                }
                //<span class='inc_tooltip'>" + data[i].value + "</span>
                color_size_count++;
                var color_size_li = generate_html_tag("li", "color_size_li");
                var color_tag = generate_html_tag("a", "color_tag");
                color_size_li.classList.add(show_hide);
                color_tag.classList.add('color_img');
                if (checked != "") {
                    // color_size_title.innerHTML = "Umbra selectată:<span>" + data[i].value + "</span>";
                    if (acode == "Color" || acode == "color" || acode == "Colour") {
                        color_size_title.innerHTML = bundle_vars.select_colour + "<span>" + data[i].value + "</span>"
                    } else {
                        color_size_title.innerHTML = bundle_vars.select_size + "<span>" + data[i].value + "</span>"
                    }
                    color_tag.classList.add(checked);
                    color_size_li.classList.add(checked);
                    //color_label_text.textContent=data[i].value.toLowerCase();
                    if (bundle_vars.load_type == "btn_click" || switch_board.its_cart_page) {
                        if (data[i].value.length > 12) {
                            //color_label_text.style.fontSize="11px"
                        }
                    }
                }
                color_size_li.setAttribute('title', data[i].value)
                color_tag.setAttribute('aId', '' + aId + '');
                color_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                color_tag.setAttribute('bundle_id', '' + products_data.BundleId + '')
                color_tag.setAttribute('option_id', '' + data[i].pid + '')
                color_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                color_tag.setAttribute('c_NM', data[i].child_NM)
                color_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                color_tag.setAttribute('price', '' + data[i].price + '')
                color_tag.setAttribute('special_price', '' + data[i].special_price + '')
                color_tag.setAttribute('value', '' + data[i].value.toLowerCase() + '');
                color_tag.setAttribute('child_url', '' + data[i].child_url + '');
                color_tag.setAttribute('acode', '' + data[i].attr_code + '');
                color_tag.setAttribute('sel_count', '' + i + '');
                color_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                color_tag.setAttribute('opt_img_url', '' + data[i].opt_img_url + '');
                color_tag.setAttribute('style', 'background-image:url("' + data[i].opt_img_url + '");display: block;background-repeat: no-repeat;width:100%;height:100%;');

                color_tag.setAttribute('style_left', '' + le_style + '');
                color_tag.setAttribute('color', '' + data[i].clr_code + '');
                color_tag.setAttribute('onClick', 'option_change_color(this)');
                color_size_li.appendChild(color_tag)
                ul.appendChild(color_size_li)
                //opt_img_url
            } else {
                if (data.length <= 3) {
                    if (i == 0) {
                        ul.classList.add('no_arrow')
                    }
                }
                color_size_count++;
                var color_size_li = generate_html_tag("li", "color_size_li");
                var size_tag = generate_html_tag("a", "size_tag");
                color_size_li.classList.add(show_hide);
                size_tag.classList.add('size_img');
                if (checked != "") {
                    size_tag.classList.add(checked);
                    color_size_li.classList.add(checked);
                    // color_size_title.innerHTML = "Umbra selectată:<span>" + data[i].value + "</span>";
                    if (acode == "Color" || acode == "color" || acode == "Colour") {
                        color_size_title.innerHTML = bundle_vars.select_colour + "<span>" + data[i].value + "</span>"
                    } else {
                        color_size_title.innerHTML = bundle_vars.select_size + "<span>" + data[i].value + "</span>"
                    }
                }
                if (dis_sizes != "") {
                    size_tag.classList.add(dis_sizes);
                }
                color_size_li.setAttribute('title', data[i].value)
                size_tag.setAttribute('aId', '' + aId + '');
                size_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                size_tag.setAttribute('bundle_id', '' + products_data.BundleId + '')
                size_tag.setAttribute('option_id', '' + data[i].pid + '')
                size_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                size_tag.setAttribute('c_NM', data[i].child_NM);
                size_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                size_tag.setAttribute('price', '' + data[i].price + '')
                size_tag.setAttribute('special_price', '' + data[i].special_price + '')
                size_tag.setAttribute('value', '' + data[i].value + '');
                size_tag.setAttribute('child_url', '' + data[i].child_url + '');
                size_tag.setAttribute('acode', '' + data[i].attr_code + '');
                size_tag.setAttribute('sel_count', '' + i + '');
                size_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                size_tag.setAttribute('onClick', 'option_change_size(this)');
                size_tag.textContent = data[i].value;
                color_size_li.appendChild(size_tag)
                ul.appendChild(color_size_li)
            }
        }

        if (acode != "Colour" || acode != "color") {
            bundle_vars.is_size = true;
            select_wrapper.appendChild(ul)
        } else {
            select_wrapper.appendChild(ul)
        }
        //l_data = html_size;
        bundle_selection.appendChild(select_wrapper);
    }

}


function option_change_size(element) {
    if (element.getAttribute('disabled') == null) {
        var li = element;
        var ul_parent = element.parentNode.parentNode;
        var bundle_select_parent = element.parentNode.parentNode.parentNode;
        if(bundle_select_parent != null){
            var prod_box_card = bundle_select_parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var li_active = ul_parent.querySelectorAll('li a.active');
            for (i = 0; i < li_active.length; i++) {
                li_active[i].classList.remove('active');
                li_active[i].parentNode.classList.remove('active');
            }
            var l_prd = "";
            element.classList.add('active');
            element.parentNode.classList.add('active');
            var BundlId = element.getAttribute('bundle_id');
            var ProdId = element.getAttribute('product_id');
            var SelClrVal = element.getAttribute('option_id');
            var opt_text = element.getAttribute('value');
            var chil_pid = element.getAttribute('sku')
            var c_pid = element.getAttribute('c_pid')
            var prc = element.getAttribute('price');
            var spl_prc = element.getAttribute('special_price');
            var ch_na = element.getAttribute('c_NM');
            var ch_name_div = prod_box_card;
            if (document.querySelector('#inc_sku_fbt.active') != null) {
                if (bundle_vars.all_dup_child_prod.indexOf(c_pid) == -1) {
                    if (prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable') != null) {
                        prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable').innerHTML = "Adaugă în coș";
                    }
                } else {
                    if (prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable') != null) {
                        prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable').innerHTML = "Adăugate";
                    }
                }
            }
            if (prod_box_card.querySelectorAll('.color_size_title')[1] != undefined) {
                prod_box_card.querySelectorAll('.color_size_title')[1].innerHTML = bundle_vars.select_size + "<span>" + opt_text + "</span>";
                
            }else if (prod_box_card.querySelector('.color_size_title') != null) {
                prod_box_card.querySelector('.color_size_title').innerHTML = bundle_vars.select_size + "<span>" + opt_text + "</span>";
                
            }
            if (ch_name_div.querySelector('.pdt_name a p') != undefined) {
                ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_na;
                ch_name_div.querySelector('.pdt_name a').setAttribute('title', ch_na);
            }
            if (ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p') != null) {
                ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p').innerHTML = ch_na;
                ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a').setAttribute('title', ch_na);
            }
            var c_img_src = element.getAttribute('child_img_url');
            if (ch_name_div.querySelector('.pdt_img img') != null) {
                ch_name_div.querySelector('.pdt_img img').src = c_img_src;
            }
            if (prod_box_card.querySelector('.q_holder input') != null) {
                prod_box_card.querySelector('.q_holder input').value = "1";
                prod_box_card.querySelector('.q_holder input[type="hidden"]').value = "1";
            }
            if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_pdp_page) {
                // getAllcheckboxchecked("size")
            }
            if (prod_box_card.querySelector('.ic_quick_view_popup .prod_sku_quick_view') != null) {
                prod_box_card.querySelector('.ic_quick_view_popup .prod_sku_quick_view').innerHTML = c_pid;
                prod_box_card.querySelector('.prod_sku_quick_view').innerHTML = c_pid;
                if(prod_box_card.querySelector('.prod_sku') != null){
                    prod_box_card.querySelector('.prod_sku').innerHTML = c_pid;
                }
            }

            var size_text = "";
            if (prod_box_card.querySelectorAll('.select_wrapper .active')[0] != undefined) {
                size_text = prod_box_card.querySelectorAll('.select_wrapper li a.active')[0].getAttribute('value');
            }
            if (document.querySelector('#ic_bundle_popup') != undefined) {
                //var pdp_res = bundle_vars.bundle_response;
                var pdp_res = bundle_vars.pdp_response

            } else {
                var pdp_res = bundle_vars.pdp_response

            }
            for (l = 0; l < pdp_res.Bundles.length; l++) {
                if (pdp_res.Bundles[l].BundleId == BundlId) {

                    for (p = 0; p < pdp_res.Bundles[l].Products.length; p++) {
                        if (pdp_res.Bundles[l].Products[p].ProductId == ProdId) {
                            l_prd = pdp_res.Bundles[l].Products[p];
                            break;
                        }
                    }
                }
            }
            var value = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";
            if (l_prd.Attributes != undefined) {
                onChange_size_li(l_prd.Attributes, l_prd, bundle_vars.load_type, element, opt_text, BundlId, ProdId, size_text, prod_box_card)
            }

            update_the_price(bundle_vars.load_type, value, prod_box_card, null)

            if (bundle_vars.load_type == "onload") {
                bundle_select_parent.parentNode.parentNode.parentNode.classList.remove('trigger_colour');
            }
            bundle_vars.clicked_btn_colour = null;
        }
    }
}

function option_change_color(element) {
    var li = element;
    var ul_parent = element.parentNode.parentNode;
    var bundle_select_parent = element.parentNode.parentNode.parentNode;
    var prod_box_card = bundle_select_parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    var li_active = ul_parent.querySelectorAll('li a.active');
    for (i = 0; i < li_active.length; i++) {
        li_active[i].classList.remove('active');
        li_active[i].parentNode.classList.remove('active');
    }
    var l_prd = "";
    element.classList.add('active');
    element.parentNode.classList.add('active');
    var BundlId = element.getAttribute('bundle_id');
    var ProdId = element.getAttribute('product_id');
    var SelClrVal = element.getAttribute('option_id');
    var img_url = element.getAttribute('child_img_url');
    var opt_text = element.getAttribute('value');
    var chil_pid = element.getAttribute('sku')
    var c_pid = element.getAttribute('c_pid')
    var ch_Nm = element.getAttribute('c_NM')
    var prc = element.getAttribute('price');
    var spl_prc = element.getAttribute('special_price');
    if (prod_box_card.querySelector('.q_holder input') != null) {
        prod_box_card.querySelector('.q_holder input').value = "1";
        prod_box_card.querySelector('.q_holder input[type="hidden"]').value = "1"
    }
    if (document.querySelector('#inc_sku_fbt.active') != null) {
        if (bundle_vars.all_dup_child_prod.indexOf(c_pid) == -1) {
            if (prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable') != null) {
                prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable').innerHTML = "Adaugă în coș";
            }
        } else {
            if (prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable') != null) {
                prod_box_card.querySelector('.ic_quick_view_popup .fbt_btn.configurable').innerHTML = "Adăugate";
            }
        }
    }
    if (prod_box_card.querySelector('.color_size_title') != null) {
        prod_box_card.querySelector('.color_size_title').innerHTML = bundle_vars.select_colour + "<span>" + opt_text + "</span>";
    }
    
    var color_text = "";
    //element.parentNode.parentNode.querySelector('.color_label_text').innerHTML = opt_text.toLowerCase();
    if (prod_box_card.querySelectorAll('.select_wrapper a.active')[1] != undefined) {
        color_text = prod_box_card.querySelectorAll('.select_wrapper a.active')[1].getAttribute('value')
    }
    if (prod_box_card.querySelector('.ic_quick_view_popup .prod_sku_quick_view') != null) {
        prod_box_card.querySelector('.ic_quick_view_popup .prod_sku_quick_view').innerHTML = c_pid;
        prod_box_card.querySelector('.prod_sku').innerHTML = c_pid;
    }
    var img_url_div = prod_box_card;
    if (prod_box_card.querySelector('.pdt_img img') != undefined) {
        prod_box_card.querySelector('.pdt_img img').src = img_url;
    }
    var ch_name_div = prod_box_card;
    if (ch_name_div.querySelector('.pdt_name a p') != undefined) {
        ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_Nm;
        ch_name_div.querySelector('.pdt_name .inc_tooltips').innerHTML = ch_Nm;
        ch_name_div.querySelector('.pdt_name a').setAttribute('title', ch_Nm);
    }
    if (ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p') != null) {
        ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p').innerHTML = ch_Nm;
        ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a').setAttribute('title', ch_Nm);
    }
    if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_pdp_page) {
        // getAllcheckboxchecked("size")
    }

    if (document.querySelector('#ic_bundle_popup') != undefined) {
        var pdp_res = bundle_vars.pdp_response;

    } else {
        var pdp_res = bundle_vars.pdp_response;

    }
    if(pdp_res.Bundles != undefined){
        for (l = 0; l < pdp_res.Bundles.length; l++) {
            if (pdp_res.Bundles[l].BundleId == BundlId) {
                for (p = 0; p < pdp_res.Bundles[l].Products.length; p++) {
                    if (pdp_res.Bundles[l].Products[p].ProductId == ProdId) {
                        l_prd = pdp_res.Bundles[l].Products[p];
                        break;
                    }
                }

            }
        }
        if (l_prd == "") {
            var resp = bundle_vars.bundle_response_after_M
            for (o = 0; o < resp.length; o++) {
                if (resp[o].BundleId == BundlId) {
                    for (p = 0; p < resp[o].Products.length; p++) {
                        if (resp[o].Products[p].ProductId == ProdId) {
                            l_prd = resp[o].Products[p];
                            break;
                        }
                    }

                }
            }
        }
        var value = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";
        onChange_color_li(l_prd.Attributes, l_prd, bundle_vars.load_type, element, opt_text, BundlId, ProdId, color_text, prod_box_card);
        if (l_prd.Attributes != undefined) {
            update_the_price(bundle_vars.load_type, value, prod_box_card, null);
        }
        if (bundle_vars.load_type == "onload") {
            bundle_select_parent.parentNode.parentNode.parentNode.classList.remove('trigger_colour');
        }
        bundle_vars.clicked_btn_colour = null;
    }
}

function onChange_color_li(attributes, products_data, load_type, element, opt_text, BundlId, ProdId, color_text, prod_box_card) {
    var ulitem = 0;
    var format = /[_]/;
    var l_data = "";
    html_size = "";
    html_color = "";
    var mainOptionId = "";
    var data_size = [];
    var SelClrVal = "";
    var id = "";
    var chckType = "";
    var sizeValue = "";
    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
    if(attributes != undefined){
        if(attributes[0] != undefined){
            if (attributes[0].attributeCode == "Size" || attributes[0].attributeCode == "size") {
                attributes = attributes.reverse();
            } else {
                attributes = attributes;
            }
            var child_prd_arr = [];
            for (h = 0; h < attributes.length; h++) {
                ulitem = h;
                var data = [];
                if (format.test(attributes[h].attributeCode) == true) {
                    var acode = attributes[h].attributeCode.replace('_', ' ');
                } else {
                    var acode = attributes[h].attributeCode;
                }
                var child_optionText = opt_text;
                for (k = 0; k < attributes[h].attributeValues.length; k++) {
                    if (acode == "Color" || acode == "color" || acode == "Colour") {
                        if (child_optionText.toUpperCase() == attributes[h].attributeValues[k].optionText.toUpperCase()) {
                            child_prd_arr.push(attributes[h].attributeValues[k].childProductId);
                        }
                    }
                }
            }
            for (m = 0; m < attributes.length; m++) {
                ulitem = m;
                var data = [];
                if (format.test(attributes[m].attributeCode) == true) {
                    var acode = attributes[m].attributeCode.replace('_', ' ');
                } else {
                    var acode = attributes[m].attributeCode;
                }
                //var acode = attributes[m].attributeCode;
                var aId = attributes[m].attributeId;
                var i = 0;
                var size = [];
                for (n = 0; n < attributes[m].attributeValues.length; n++) {
                    if (acode == "Size" || acode == "size") {
                        if (child_prd_arr.indexOf(attributes[m].attributeValues[n].childProductId) >= 0) {
                            id = id;
                            opt_id = attributes[m].attributeValues[n].optionText;
                            text = attributes[m].attributeValues[n].optionText;
                            pid = attributes[m].attributeValues[n].optionId;
                            pricingval = attributes[m].attributeValues[n].childProductPrice;
                            splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                            child_url = attributes[m].attributeValues[n].childProductUrl
                            attr_code = attributes[m].attributeCode;
                            var child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                            var child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                            var child_prd = attributes[m].attributeValues[n].childProductId;
                            var child_NM = attributes[m].attributeValues[n].childProductName;
                            if (child_img_url == null) {
                                child_img_url = products_data.ImageURL
                            }
                            var clr_code = attributes[m].attributeValues[n].colorCode
                            //ImageURL
                            if (splPricingVal == null) {
                                splPricingVal = 0;
                            }
                            var chckType = text;
                            var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                            reg.test(chckType);
                            if (reg.test(chckType) == true) {
                                switch ((text).toUpperCase()) {
                                    case "XS":
                                        sizeValue = "1"
                                        break;
                                    case "S":
                                        sizeValue = "2"
                                        break;
                                    case "M":
                                        sizeValue = "3"
                                        break;
                                    case "L":
                                        sizeValue = "4"
                                        break;
                                    case "XL":
                                        sizeValue = "5"
                                        break;
                                    case "XXL":
                                        sizeValue = "6"
                                        break;
                                    case "XXXL":
                                        sizeValue = "7"
                                        break;
                                    case "2XL":
                                        sizeValue = "8"
                                        break;
                                    case "X SMALL":
                                        sizeValue = "9"
                                        break;
                                    case "SMALL":
                                        sizeValue = "10"
                                        break;
                                    case "MEDIUM":
                                        sizeValue = "11"
                                        break;
                                    case "LARGE":
                                        sizeValue = "12"
                                        break;
                                    case "X LARGE":
                                        sizeValue = "13"
                                        break;
                                    case "XX LARGE":
                                        sizeValue = "14"
                                        break;
                                    case "XXX LARGE":
                                        sizeValue = "15"
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                sizeValue = text;
                            }
                            data.push({
                                id: text,
                                value: text,
                                pid: pid,
                                price: parseFloat(pricingval).toFixed(2),
                                special_price: parseFloat(splPricingVal).toFixed(2),
                                opt_id: opt_id,
                                child_url: child_url,
                                attr_code: attr_code,
                                child_img_url: child_img_url,
                                clr_code: clr_code,
                                child_prd_sku: child_prd_sku,
                                child_prd: child_prd,
                                child_NM: child_NM,
                                sizeValue: sizeValue
                            });
                        }
                    }
                }
                if (acode == "Size" || acode == "size") {
                    data = filter_unique_values(data);
                    if (products_data.ProductId == client_vars.product_ids[0]) {
                        if (switch_board.its_pdp_page && load_type == "onload") {
                            if (acode == "Color" || acode == "color" || acode == "Colour") {

                            } else {
                                var size_mismatch = 0;
                                for (l = 0; l < data.length; l++) {
                                    if (data[l] != undefined) {
                                        bundle_vars.inc_size_id.push(data[l].id)
                                        if (bundle_vars.client_size.indexOf(data[l].id) >= 0) {
                                            size_mismatch++;
                                        }
                                    }
                                }
                                if (size_mismatch > 1) {
                                    for (k = 0; k < bundle_vars.client_size.length; k++) {
                                        //if(data[k] != undefined){
                                        if (bundle_vars.inc_size_id.indexOf(bundle_vars.client_size[k]) >= 0) {} else {
                                            data.push({
                                                id: bundle_vars.client_size[k],
                                                value: bundle_vars.client_size[k],
                                                pid: "",
                                                price: "",
                                                special_price: "",
                                                opt_id: "",
                                                child_url: "",
                                                attr_code: "",
                                                child_img_url: "",
                                                clr_code: "",
                                                child_prd_sku: "",
                                                child_prd: "",
                                                child_NM: "",
                                                sizeValue: ""
                                            });
                                        }
                                        //}
                                    }
                                }
                            }
                        }
                    }
                    if (chckType != undefined) {
                        if (reg.test(chckType) == true) {
                            sorting_data(data, 'sizeValue');
                        } else {
                            sortByKey(data, 'id');
                        }
                    } else {
                        sortByKey(data, 'id');
                    }
                    var select_wrapper = prod_box_card.querySelector('.select_wrapper .prod_Size').parentNode;
                    select_wrapper.innerHTML = ""
                    //if (window.innerWidth > 767) {
                    var color_label_wrap = generate_html_tag("div", "color_label_wrap");
                    var color_size_title = generate_html_tag("label", "color_size_title");
                    color_size_title.textContent = bundle_vars.select_size;
                    //select_wrapper.appendChild(color_size_title);
                    var color_label_text = generate_html_tag("span", "color_label_text");
                    if (acode != "color") {
                        color_label_text.classList.add('size_label_text')
                    }
                    //color_label_text.textContent=color_text
                    color_size_title.appendChild(color_label_text);
                    color_label_wrap.appendChild(color_size_title);
                    select_wrapper.appendChild(color_label_wrap);
                    //}
                    var ul = generate_html_tag("ul", "prod_Colour");
                    ul.classList.add("prod_Size")
                    ul.classList.add(acode);
                    ul.setAttribute("onchange", "update_the_price(\"" + load_type + "\", this.value,this);");
                    var color_size_count = 0;
                    var is_active = 0;
                    for (i = 0; i < data.length; i++) {
                        var no_arrow = "";

                        if (data[i].child_prd_sku == null) {
                            data[i].price = products_data.Price;
                            data[i].special_price = products_data.SpecialPrice;
                            data[i].child_NM = products_data.ProductName;
                            data[i].child_prd = products_data.ProductId;
                            data[i].child_prd_sku = products_data.ProductSku;
                        }
                        var selected = (data[i].pid == products_data.ProductId) ? "selected" : "";
                        //if(window.innerWidth > 420){
                        var show_hide = "inc_show";
                        var sel = "";
                        var checked = "";
                        if (color_text.toUpperCase() == data[i].value.toUpperCase()) {
                            //sel = "selected";
                            //checked = "active";
                            if (i == 0 && data[i].pid != "") {
                                sel = "selected";
                                checked = "active";
                                is_active = 1;
                            } else if (is_active != 1) {
                                if (i != 0) {
                                    is_active = 1;
                                    sel = "selected";
                                    checked = "active";
                                }
                            }
                        }
                        if (data.length == 1 && i == 0) {
                            sel = "selected";
                            checked = "active";
                            is_active = 1;
                        }


                        var font_size = "15px";
                        if (window.innerWidth > 767) {
                            if (acode == "Size" || acode == "size") {
                                if (data[i].value.length >= 5) {
                                    font_size = "10px";
                                }
                            }
                        }
                        var dis_sizes = "";
                        var dis_text = ""
                        if (data[i].pid == "") {
                            dis_sizes = "disabled";
                            dis_text = "Out of stock"
                        } else {
                            dis_text = data[i].value;
                        }
                        if (data.length <= 3) {
                            if (i == 0) {
                                ul.classList.add('no_arrow')
                            }
                        }
                        color_size_count++;
                        var color_size_li = generate_html_tag("li", "color_size_li");
                        var size_tag = generate_html_tag("a", "size_tag");
                        color_size_li.classList.add(show_hide);
                        size_tag.classList.add('size_img');
                        if (checked != "") {
                            size_tag.classList.add(checked);
                            color_size_li.classList.add(checked);
                            // color_size_title.innerHTML = "Umbra selectată:<span>" + data[i].value + "</span>";
                            if (acode == "Color" || acode == "color" || acode == "Colour") {
                                color_size_title.innerHTML = bundle_vars.select_colour + "<span>" + data[i].value + "</span>"
                            } else {
                                color_size_title.innerHTML = bundle_vars.select_size + "<span>" + data[i].value + "</span>"
                            }
                        }
                        if (dis_sizes != "") {
                            size_tag.classList.add(dis_sizes);
                        }
                        color_size_li.setAttribute('title', data[i].value)
                        size_tag.setAttribute('aId', '' + aId + '');
                        size_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                        size_tag.setAttribute('bundle_id', '' + BundlId + '')
                        size_tag.setAttribute('option_id', '' + data[i].pid + '')
                        size_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                        size_tag.setAttribute('c_NM', data[i].child_NM)
                        size_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                        size_tag.setAttribute('price', '' + data[i].price + '')
                        size_tag.setAttribute('special_price', '' + data[i].special_price + '')
                        size_tag.setAttribute('value', '' + data[i].value + '');
                        size_tag.setAttribute('child_url', '' + data[i].child_url + '');
                        size_tag.setAttribute('acode', '' + data[i].attr_code + '');
                        size_tag.setAttribute('sel_count', '' + i + '');
                        size_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                        size_tag.setAttribute('style', 'background-color: "' + data[i].clr_code + '"');
                        size_tag.setAttribute('onClick', 'option_change_size(this)');
                        size_tag.textContent = data[i].value;
                        color_size_li.appendChild(size_tag)
                        ul.appendChild(color_size_li)
                    }

                    if (acode != "Colour" || acode != "color") {
                        bundle_vars.is_size = true;

                        select_wrapper.appendChild(ul)
                    }
                }
            }
        }
    }
}

function onChange_size_li(attributes, products_data, load_type, element, opt_text, BundlId, ProdId, size_text, prod_box_card) {
    var ulitem = 0;
    var format = /[_]/;
    var l_data = "";
    html_size = "";
    html_color = "";
    var mainOptionId = "";
    var data_size = [];
    var SelClrVal = "";
    var id = "";
    var chckType = "";
    var sizeValue = "";
    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
    if (attributes[0].attributeCode == "Size" || attributes[0].attributeCode == "size") {
        attributes = attributes.reverse();
    } else {
        attributes = attributes;
    }
    var child_prd_arr = [];
    for (h = 0; h < attributes.length; h++) {
        ulitem = h;
        var data = [];
        if (format.test(attributes[h].attributeCode) == true) {
            var acode = attributes[h].attributeCode.replace('_', ' ');
        } else {
            var acode = attributes[h].attributeCode;
        }
        var child_optionText = opt_text;
        for (k = 0; k < attributes[h].attributeValues.length; k++) {
            if (acode == "Size" || acode == "size") {
                if (child_optionText.toUpperCase() == attributes[h].attributeValues[k].optionText.toUpperCase()) {
                    child_prd_arr.push(attributes[h].attributeValues[k].childProductId);
                }
            }
        }
    }
    for (m = 0; m < attributes.length; m++) {
        ulitem = m;
        var data = [];
        if (format.test(attributes[m].attributeCode) == true) {
            var acode = attributes[m].attributeCode.replace('_', ' ');
        } else {
            var acode = attributes[m].attributeCode;
        }
        //var acode = attributes[m].attributeCode;
        var aId = attributes[m].attributeId;
        var i = 0;
        var size = [];
        for (n = 0; n < attributes[m].attributeValues.length; n++) {
            if (acode == "Color" || acode == "color" || acode == "Colour") {
                if (child_prd_arr.indexOf(attributes[m].attributeValues[n].childProductId) >= 0) {
                    id = id;
                    opt_id = attributes[m].attributeValues[n].optionText;
                    text = attributes[m].attributeValues[n].optionText;
                    pid = attributes[m].attributeValues[n].optionId;
                    pricingval = attributes[m].attributeValues[n].childProductPrice;
                    splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                    child_url = attributes[m].attributeValues[n].childProductUrl
                    attr_code = attributes[m].attributeCode;
                    var child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                    var child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                    var child_prd = attributes[m].attributeValues[n].childProductId;
                    var child_NM = attributes[m].attributeValues[n].childProductName;
                    var opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                    if (child_img_url == null) {
                        child_img_url = products_data.ImageURL
                    }
                    var clr_code = attributes[m].attributeValues[n].colorCode
                    //ImageURL
                    if (splPricingVal == null) {
                        splPricingVal = 0;
                    }
                    var chckType = text;
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                    reg.test(chckType);
                    if (reg.test(chckType) == true) {
                        switch ((text).toUpperCase()) {
                            case "XS":
                                sizeValue = "1"
                                break;
                            case "S":
                                sizeValue = "2"
                                break;
                            case "M":
                                sizeValue = "3"
                                break;
                            case "L":
                                sizeValue = "4"
                                break;
                            case "XL":
                                sizeValue = "5"
                                break;
                            case "XXL":
                                sizeValue = "6"
                                break;
                            case "XXXL":
                                sizeValue = "7"
                                break;
                            case "2XL":
                                sizeValue = "8"
                                break;
                            case "X SMALL":
                                sizeValue = "9"
                                break;
                            case "SMALL":
                                sizeValue = "10"
                                break;
                            case "MEDIUM":
                                sizeValue = "11"
                                break;
                            case "LARGE":
                                sizeValue = "12"
                                break;
                            case "X LARGE":
                                sizeValue = "13"
                                break;
                            case "XX LARGE":
                                sizeValue = "14"
                                break;
                            case "XXX LARGE":
                                sizeValue = "15"
                                break;
                            default:
                                break;
                        }
                    } else {
                        sizeValue = text;
                    }
                    data.push({
                        id: text,
                        value: text,
                        pid: pid,
                        price: parseFloat(pricingval).toFixed(2),
                        special_price: parseFloat(splPricingVal).toFixed(2),
                        opt_id: opt_id,
                        child_url: child_url,
                        attr_code: attr_code,
                        child_img_url: child_img_url,
                        clr_code: clr_code,
                        child_prd_sku: child_prd_sku,
                        child_prd: child_prd,
                        child_NM: child_NM,
                        sizeValue: sizeValue,
                        opt_img_url: opt_img_url
                    });
                }
            }
        }
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            data = filter_unique_values(data);
            if (reg.test(chckType) == true) {
                sorting_data(data, 'sizeValue');
            } else {
                sortByKey(data, 'id');
            }
            var select_wrapper = prod_box_card.querySelector('.select_wrapper .prod_color').parentNode
            select_wrapper.innerHTML = ""
            //if (window.innerWidth > 767) {
            var color_label_wrap = generate_html_tag("div", "color_label_wrap");
            var color_label_wrap = generate_html_tag("div", "color_label_wrap");
            var color_size_title = generate_html_tag("label", "color_size_title");
            color_size_title.textContent = bundle_vars.select_colour;
            color_label_wrap.appendChild(color_size_title);
            select_wrapper.appendChild(color_label_wrap);
            var color_label_text = generate_html_tag("span", "color_label_text");
            if (bundle_vars.load_type == "btn_click" || switch_board.its_cart_page) {
                if (size_text.length > 12) {
                    color_label_text.style.fontSize = "11px"
                }
            }
            //color_size_title.appendChild(color_label_text);
            if (acode != "Colour") {
                color_label_text.classList.add('size_label_text')
            }
            var ul = generate_html_tag("ul", "prod_Colour");
            ul.classList.add("product_size");
            ul.classList.add("prod_" + acode + "")
            ul.classList.add(acode);
            ul.setAttribute("onchange", "update_the_price(\"" + load_type + "\", this.value,this);");
            var color_size_count = 0;

            for (i = 0; i < data.length; i++) {
                var no_arrow = "";

                if (data[i].child_prd_sku == null) {
                    data[i].price = products_data.Price;
                    data[i].special_price = products_data.SpecialPrice;
                    data[i].child_NM = products_data.ProductName;
                    data[i].child_prd = products_data.ProductId;
                    data[i].child_prd_sku = products_data.ProductSku;
                }
                var selected = (data[i].pid == products_data.ProductId) ? "selected" : "";
                //if(window.innerWidth > 420){
                var show_hide = "inc_show";
                var sel = "";
                var checked = "";
                if (size_text.toUpperCase() == data[i].value.toUpperCase()) {
                    sel = "selected";
                    checked = "active";
                }
                if (data.length == 1) {
                    sel = "selected";
                    checked = "active";
                }

                if (i == 0) {
                    var le_style = "-24px";
                } else if (i == 1) {
                    var le_style = "-10px";
                } else if (i == 2) {
                    var le_style = "18px";
                } else if (i == 3) {
                    var le_style = "42px";
                } else if (i == 4) {
                    var le_style = "76px";
                }
                var dis_sizes = "";
                var dis_text = ""
                if (data[i].pid == "") {
                    dis_sizes = "disabled";
                    dis_text = "Out of stock"
                } else {
                    dis_text = data[i].value;
                }
                if (data.length < 4) {
                    if (i == 0) {
                        ul.classList.add('no_arrow')
                    }
                }
                color_size_count++;
                if (!switch_board.its_cart_page) {
                    var swatch_option_tooltip = generate_html_tag("div", "swatch-option-tooltip");
                    swatch_option_tooltip.classList.add('inc_swatch_option_tooltip')
                    var inc_img_tooltip = generate_html_tag("div", "inc_img_tooltip");
                    var inc_img_tooltip_title = generate_html_tag("div", "title");
                    var inc_img_tooltip_corner = generate_html_tag("div", "corner");
                    inc_img_tooltip.classList.add('image')
                    if (i == 0) {
                        swatch_option_tooltip.appendChild(inc_img_tooltip);
                        swatch_option_tooltip.appendChild(inc_img_tooltip_title);
                        swatch_option_tooltip.appendChild(inc_img_tooltip_corner);
                        select_wrapper.appendChild(swatch_option_tooltip);
                    }
                }
                var color_tag = generate_html_tag("a", "color_tag");
                var color_size_li = generate_html_tag("li", "color_size_li");
                color_size_li.classList.add(show_hide);
                color_tag.classList.add('color_img');
                if (checked != "") {
                    color_tag.classList.add(checked);
                    color_size_li.classList.add(checked);
                    // color_size_title.innerHTML = "Umbra selectată:<span>" + data[i].value + "</span>";
                    if (acode == "Color" || acode == "color" || acode == "Colour") {
                        color_size_title.innerHTML = bundle_vars.select_colour + "<span>" + data[i].value + "</span>"
                    } else {
                        color_size_title.innerHTML = bundle_vars.select_size + "<span>" + data[i].value + "</span>"
                    }
                }
                color_size_li.setAttribute('title', data[i].value)
                color_tag.setAttribute('aId', '' + aId + '');
                color_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                color_tag.setAttribute('bundle_id', '' + BundlId + '')
                color_tag.setAttribute('option_id', '' + data[i].pid + '')
                color_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                color_tag.setAttribute('c_NM', data[i].child_NM)
                color_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                color_tag.setAttribute('price', '' + data[i].price + '')
                color_tag.setAttribute('special_price', '' + data[i].special_price + '')
                color_tag.setAttribute('value', '' + data[i].value.toLowerCase() + '');
                color_tag.setAttribute('child_url', '' + data[i].child_url + '');
                color_tag.setAttribute('acode', '' + data[i].attr_code + '');
                color_tag.setAttribute('sel_count', '' + i + '');
                color_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                color_tag.setAttribute('style', 'background-color: ' + data[i].clr_code + '');
                color_tag.setAttribute('style_left', '' + le_style + '');
                // color_tag.setAttribute('color', '' + data[i].clr_code + '');
                color_tag.setAttribute('style', 'background-image:url("' + data[i].child_img_url + '");display: block;background-repeat: no-repeat;width:100%;height:100%;');
                color_tag.setAttribute('onClick', 'option_change_color(this)');
                color_size_li.appendChild(color_tag)
                ul.appendChild(color_size_li)
            }

            if (acode == "Color" || acode == "color" || acode == "Colour") {
                select_wrapper.appendChild(ul)
                l_data = ul;
            }
        }
    }

}

function color_size_variants_add(elm, type_of) {
    var li_elm = elm.parentNode.parentNode.parentNode.parentNode
    var qty = li_elm.querySelector('.q_holder input').value;
    if (type_of == "add") {
        li_elm.querySelector('.shades_qty_count').innerHTML = qty;
        li_elm.classList.add('inc_selected');
        li_elm.querySelector('.color_size_variants_wrapper').classList.remove('active')
    } else {
        li_elm.querySelector('.shades_qty_count').innerHTML = "";
        li_elm.classList.remove('inc_selected');
        li_elm.querySelector('.color_size_variants_wrapper').classList.remove('active')
    }

}

function update_shades_on_click(element, type_of) {
    var li = element;
    var ul_parent = element.parentNode.parentNode;
    var bundle_select_parent = element.parentNode.parentNode.parentNode;
    var ic_prod_box = bundle_select_parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    var li_active = ul_parent.querySelectorAll('li.active');
    for (i = 0; i < li_active.length; i++) {
        li_active[i].classList.remove('active');
        li_active[i].querySelector('a').classList.remove('active');
    }
    var l_prd = "";
    element.classList.add('active');
    element.parentNode.classList.add('active');
    var BundlId = element.getAttribute('bundle_id');
    var ProdId = element.getAttribute('product_id');
    var SelClrVal = element.getAttribute('option_id');
    var img_url = element.getAttribute('child_img_url');
    var opt_text = element.getAttribute('value');
    var chil_pid = element.getAttribute('sku')
    var ch_Nm = element.getAttribute('c_NM')
    var prc = element.getAttribute('price');
    var spl_prc = element.getAttribute('special_price');

    var color_text = "";
    if (ic_prod_box.querySelectorAll('.select_wrapper .active')[1] != undefined) {
        color_text = ic_prod_box.querySelectorAll('.select_wrapper .active')[1].getAttribute('value')
    }
    if (ic_prod_box.querySelector('.pdt_img img') != null) {
        ic_prod_box.querySelector('.pdt_img img').src = img_url;
    }
    if (ic_prod_box.querySelector('.ic_quick_view_popup .pdt_img img') != null) {
        ic_prod_box.querySelector('.ic_quick_view_popup .pdt_img img').src = img_url;
    }
    var ch_name_div = ic_prod_box;
    if (ch_name_div.querySelector('.pdt_name a p') != null) {
        ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_Nm;
    }
    if (ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p') != null) {
        ch_name_div.querySelector('.ic_quick_view_popup .pdt_name a p').innerHTML = ch_Nm;
    }
    var values = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";
    update_the_price("onload", values, ic_prod_box)
}

function update_the_price(load_type, values, ic_prod_box) {
    values = values.split(',');

    var prod_box = ic_prod_box;

    var tab_price_wrapper = null;
    var prod_ind = prod_box.getAttribute('bundle_index');
    if (values[1] == null) {
        values[1] = 0
    }
    
    if (+values[1] < 0.01) {
        if (prod_box != null) {
            if (prod_box.querySelector(".spec_amount") != null || prod_box.querySelector(".spec_amount") != undefined) {
                prod_box.querySelector(".spec_amount").style.display = 'none';
                prod_box.querySelector(".product_amount").classList.remove("old_price");
            }

            var prod_amt = prod_box.querySelector(".product_amount");
            if (window.location.host.includes('.ro') == true) {
                prod_amt.innerHTML = check_currency_symb(parseFloat(values[0]))
            } else {
                prod_amt.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }


            //quick_view
            if (prod_box.querySelector(".ic_quick_view_popup .spec_amount") != null || prod_box.querySelector(".spec_amount") != undefined) {
                prod_box.querySelector(".ic_quick_view_popup .spec_amount").style.display = 'none';
                prod_box.querySelector(".ic_quick_view_popup .product_amount").classList.remove("old_price");
            }

            var prod_amt1 = prod_box.querySelector(".ic_quick_view_popup .product_amount");

            if (window.location.host.includes('.ro') == true) {
                prod_amt1.innerHTML = check_currency_symb(parseFloat(values[0]))
            } else {
                prod_amt1.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        }
    } else {
        if (prod_box != null) {
            var spec_amt = prod_box.querySelector(".spec_amount");
            if (spec_amt == null && parseFloat(values[1]) != parseFloat(values[0])) {
                prod_box.querySelector(".pdt_price .org_prc_wrap").innerHTML = "";
                var spec_prod_price = generate_html_tag('span', 'spec_amount');
                var ori_prod_spl_span = generate_html_tag('span', 'spec_amount');
                spec_prod_price.appendChild(ori_prod_spl_span)
                spec_prod_price.style.display = 'block';
                var ori_prod_price = generate_html_tag('span', 'product_amount');
                if (window.location.host.includes('.ro') == true) {
                    ori_prod_price.innerHTML = check_currency_symb(parseFloat(values[0]));
                    ori_prod_spl_span.innerHTML = check_currency_symb(parseFloat(values[1]))
                } else {
                    ori_prod_price.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    ori_prod_spl_span.innerHTML = client_vars.curr_sym + parseFloat(values[1]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
                ori_prod_price.classList.add('old_price');
                prod_box.querySelector(".pdt_price .org_prc_wrap").appendChild(spec_prod_price);
                prod_box.querySelector(".pdt_price .org_prc_wrap").appendChild(ori_prod_price);
                var prdoldel = prod_box.querySelector(".ic_quick_view_popup .pdt_price .product_amount")
                // if(prdold != null){
                //     prdold.parentNode.removeChild(prdold)
                // }
                prod_box.querySelector(".ic_quick_view_popup .pdt_price .org_prc_wrap").appendChild(spec_prod_price);
                if(prdoldel == null){
                    prod_box.querySelector(".ic_quick_view_popup .pdt_price .org_prc_wrap").appendChild(ori_prod_price);
                }else{
                    prdoldel.classList.add('old_price')
                    prdoldel.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
                if (values[1] != null && (+values[1] < +values[0] || +values[1] != +values[0])) {
                    var you_save_wrapper = generate_html_tag('div', 'you_save_wrapper');
                    var you_save = generate_html_tag('p', 'you_save');
                    if (window.location.host.includes('.ro') == true) {
                        you_save.textContent = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                    } else {
                        you_save.textContent = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                    }
                    you_save_wrapper.appendChild(you_save)
                    prod_box.querySelector(".pdt_price .org_prc_wrap").appendChild(you_save_wrapper);
                    prod_box.querySelector(".ic_quick_view_popup .pdt_price .org_prc_wrap").appendChild(you_save_wrapper);
                }
            } else {
                if (spec_amt != null) {
                    spec_amt.style.display = 'block';
                }
                var spec_ori_prod_spl_span = prod_box.querySelector(".spec_amount")
                prod_box.querySelector(".product_amount").classList.add("old_price");
                var old_amt = prod_box.querySelector(".product_amount.old_price");

                if (spec_ori_prod_spl_span != null) {
                    if (window.location.host.includes('.ro') == true) {
                        spec_ori_prod_spl_span.innerHTML = check_currency_symb(parseFloat(values[1]))
                    } else {
                        spec_ori_prod_spl_span.innerHTML = client_vars.curr_sym + parseFloat(values[1]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                    }
                }
                if (window.location.host.includes('.ro') == true) {
                    old_amt.innerHTML = check_currency_symb(parseFloat(values[0]))
                } else {
                    old_amt.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
                if (values[1] == values[0] && spec_ori_prod_spl_span != null) {
                    prod_box.querySelector(".product_amount.old_price").style.display = "none";
                } else {
                    prod_box.querySelector(".product_amount.old_price").setAttribute('style', 'display:flex')
                }
                if (values[1] == values[0] && spec_ori_prod_spl_span == null) {
                    if (prod_box.querySelector(".product_amount.old_price") != null) {
                        prod_box.querySelector(".product_amount.old_price").classList.remove('old_price');
                    }
                }
                if (values[1] != values[0] && values[1] < values[0]) {
                    prod_box.querySelector(".product_amount.old_price").style.display = "block";
                }
                //quick_view
                var spec_amt1 = prod_box.querySelector(".ic_quick_view_popup .spec_amount");
                var spec_ori_prod_spl_span = prod_box.querySelector(".ic_quick_view_popup .spec_amount");
                if (spec_amt1 != null) {
                    spec_amt1.style.display = 'block';
                }
                prod_box.querySelector(".ic_quick_view_popup .product_amount").classList.add("old_price");
                var old_amt = prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price");

                if (spec_ori_prod_spl_span != null) {
                    if (window.location.host.includes('.ro') == true) {
                        spec_ori_prod_spl_span.innerHTML = check_currency_symb(parseFloat(values[1]))
                    } else {
                        spec_ori_prod_spl_span.innerHTML = client_vars.curr_sym + parseFloat(values[1]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                    }
                }
                if (window.location.host.includes('.ro') == true) {
                    old_amt.innerHTML = check_currency_symb(parseFloat(values[0]))
                } else {
                    old_amt.innerHTML = client_vars.curr_sym + parseFloat(values[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
                if (values[1] == values[0] && spec_ori_prod_spl_span != null) {
                    prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price").style.display = "none";
                } else {
                    prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price").setAttribute('style', 'display:flex')
                }
                if (values[1] == values[0] && spec_ori_prod_spl_span == null) {
                    if (prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price") != null) {
                        prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price").classList.remove('old_price');
                    }
                }
                if (values[1] != values[0] && values[1] < values[0]) {
                    prod_box.querySelector(".ic_quick_view_popup .product_amount.old_price").style.display = "block";
                }else{
                    prod_box.querySelector(".ic_quick_view_popup .product_amount").classList.remove('old_price')
                    prod_box.querySelector(".ic_quick_view_popup .product_amount").style.display = "block"
                    if(prod_box.querySelector(".ic_quick_view_popup .spec_amount") != null){
                        prod_box.querySelector(".ic_quick_view_popup .spec_amount").style.display = "none"
                    }
                }
                var you_save = prod_box.querySelector(".you_save")
                var you_save_qc = prod_box.querySelector(".ic_quick_view_popup .you_save")
                if (you_save != null && values[1] != 0 && values[1] != null && values[1] != values[0]) {
                    if (window.location.host.includes('.ro') == true) {
                        you_save.innerHTML = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                        you_save_qc.innerHTML = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                    } else {
                        you_save.innerHTML = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                        you_save_qc.innerHTML = bundle_vars.you_save + inc_getDiscount(+values[0], +values[1]) + "%"
                    }
                    you_save.style.display = "flex"
                    you_save_qc.style.display = "flex"
                } else {
                    if (you_save != null) {
                        you_save.style.display = "none"
                    }
                    if (you_save_qc != null) {
                        you_save_qc.style.display = "none"
                    }
                }
            }
        }
    }

}

function get_product_quantity_box(products_data, prod_price, ic_prod, counter_div, prod_id) {
    var qty_wrap = generate_html_tag('div', 'qty_wrap');
    if (!switch_board.quantity_dropdown) {
        var label_quantity = generate_html_tag('p', 'quantity_label');
        label_quantity.textContent = bundle_vars.quantity_text;
        if (window.innerWidth > 992) {
            counter_div.appendChild(label_quantity);
        } else {
            qty_wrap.appendChild(label_quantity);
        }

    }
    var q_holder = generate_html_tag('div', 'q_holder');
    if (switch_board.quantity_dropdown) {
        var select_q = generate_html_tag('select', 'quantity_select');
        select_q.setAttribute('onchange', 'quantity_dropdown_change(this, null)');
        for (var i = 1; i < 21; i++) {
            var option = generate_html_tag('option', 'qty_option');
            option.value = i;
            option.text = "Qty (" + i + ")";
            select_q.appendChild(option);
        }
        q_holder.appendChild(select_q);
    }
    var tag_a_up_span = generate_html_tag('span', 'up');
    tag_a_up = generate_html_tag('i', 'inc_icon_pluss');
    var tag_a_down_span = generate_html_tag('span', 'down');
    tag_a_down = generate_html_tag('i', 'inc_icon_minuss');
    var tag_span = generate_html_tag('input', '');
    tag_span.setAttribute("type", "number");
    tag_span.setAttribute("min", 1);
    tag_span.setAttribute("max", 99);
    tag_span.setAttribute("value", "1");
    tag_span.setAttribute("old_val", "1");
    tag_span.setAttribute("maxlength", "2");
    tag_span.setAttribute("name", "quantity_input");
    tag_span.setAttribute("onkeypress", "return isNumberKey_inc(event);");
    tag_span.setAttribute("onblur", "quantity_box_restriction(this, event);");
    tag_span.setAttribute("onchange", "quantity_input_change(this);");
    tag_span.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    tag_span.setAttribute("oninput", "validity.valid||(value='');");
    tag_span.setAttribute("onKeyPress", "if(this.value.length==3) return false;");

    if (switch_board.quantity_dropdown) {
        tag_a_down.style.display = 'none';
        tag_span.style.display = 'none';
        tag_a_up.style.display = 'none';
    }
    tag_a_down.classList.add('disabled')
    q_holder.appendChild(tag_a_down_span);
    q_holder.appendChild(tag_span);
    q_holder.appendChild(tag_a_up_span);
    tag_a_up_span.appendChild(tag_a_up);
    tag_a_down_span.appendChild(tag_a_down);

    var hidden_input = generate_html_tag('input', '');
    hidden_input.setAttribute('type', 'hidden');
    hidden_input.setAttribute('value', '1');
    q_holder.appendChild(hidden_input);
    // var isSpecialPrice = check_special_price(products_data);
    if (products_data != null) {
        q_holder.setAttribute('data_product_id', products_data.ProductId);
    } else {
        q_holder.setAttribute('data_product_id', prod_id);
    }

    //qty eventlistner
    var add_button = tag_a_up_span;
    var sub_button = tag_a_down_span;
    // bind_event_for_quantity_buttons(add_button, 'add', bundle_vars.load_type);
    // bind_event_for_quantity_buttons(sub_button, 'sub', bundle_vars.load_type);
    // if (products_data == null) {
        add_button.addEventListener("keydown", function(event) {
            event.stopPropagation();
            var parentEl = this.parentElement;
            var getInput = parentEl.querySelector('input[type=hidden]');
            ;
            var counter = getInput.value
            setTimeout(function() {
                if (counter == 0) {
                    return false;
                }
                if (counter < "100" || counter < 100) {
                    if (counter == 0) {
                        counter = 1;
                    }
                    quantity_dropdown_change(this, counter);
                    prepare_final_price(this, counter, "keydown", bundle_vars.load_type);
                } else {
                    event.stopPropagation();
                    event.preventDefault();
                }
            },50)
        });
        add_button.addEventListener("click", function(event) {
            event.stopPropagation();
            var type = 'add'
            var parentEl = this.parentElement;
            var getInput = parentEl.querySelector('input[type=hidden]');
            counter = getInput.value;
            if ((type == 'sub') && (counter == 0)) {
                return false;
            }
            (type == 'add') ? counter++ : counter--;
            if (counter < "100") {
                if (counter == 0) {
                    counter = 1;
                }
                quantity_dropdown_change(this, counter);
                prepare_final_price(this, counter, type, bundle_vars.load_type);
            } else {
                event.stopPropagation();
                event.preventDefault();
            }
        });
        sub_button.addEventListener("click", function(event) {
            event.stopPropagation();

            var type = 'sub'
            var parentEl = this.parentElement;
            var getInput = parentEl.querySelector('input[type=hidden]');
            counter = getInput.value;
            if ((type == 'sub') && (counter == 0)) {
                return false;
            }
            (type == 'add') ? counter++ : counter--;
            if (counter < "100") {
                if (counter == 0) {
                    counter = 1;
                }
                quantity_dropdown_change(this, counter);
                prepare_final_price(this, counter, type, bundle_vars.load_type);
            } else {
                event.stopPropagation();
                event.preventDefault();
            }
        });
    // }
    //
    if (window.innerWidth > 768) {
        counter_div.appendChild(q_holder);
        ic_prod.appendChild(counter_div);
    } else {
        qty_wrap.appendChild(q_holder);
        counter_div.appendChild(qty_wrap);
        ic_prod.appendChild(counter_div)
    }
    // counter_div.appendChild(q_holder);

}

function isNumberKey_inc(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode != 45 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function quantity_input_change(el) {
    var old_val = el.getAttribute("old_val");
    if (isNaN(+el.value)) {
        var new_c = "1";
    } else {
        var new_c = el.value;
    }
    var curr_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.ini_price');
    var old_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.main_product_price');
    if (+new_c > +old_val) {
        el.parentNode.querySelector('input[type="hidden"]').value = +new_c - 1
        el.parentNode.querySelector('.up').click();
    } else {
        el.parentNode.querySelector('input').value = +new_c + 1
        el.parentNode.querySelector('input[type="hidden"]').value = +new_c + 1
        el.parentNode.querySelector('.down').click();

    }
    el.setAttribute("old_val", +new_c);
}

function prepare_added_to_cart_products(counter_set, plp_elem, source) {
    if (switch_board.its_cart_page && switch_board.cart_modal) {
        get_added_products(null, 0, null, source);
    } else {
        if (plp_elem != null) {
            get_added_products("plp_btn", 1, plp_elem, source);
        } else {
            if (bundle_vars.source_btn == "inc_btn") {
                var length = 2;
                get_added_products(bundle_vars.source_btn, length, null, source);
            } else {
                if (bundle_vars.source_btn == "pdp_btn") {
                    if (bundle_vars.load_type == "btn_click" && ((bundle_vars.p_first && !bundle_vars.p_second) || (!bundle_vars.p_first && bundle_vars.p_second))) {
                        var length = 1;
                    }
                } else {
                    get_added_products(bundle_vars.source_btn, 1, null, source);
                }
            }
        }
    }
}

function get_cart_product_names() {
    if (document.querySelector("#cartform") != null) {
        var cart_wrap = document.querySelector("#cartform");
        var names = cart_wrap.querySelectorAll(".item .description div a");
        for (var k = 0; k < names.length; k++) {
            client_vars.cartProductNames.push(names[k].innerText.trim());
        }
    }
}

function get_added_products(source, length, elem, source1) {

}

function htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function check_special_price(product) {
    if (product.SpecialPrice && product.SpecialPrice != null) {
        if (+product.SpecialPrice < +product.Price) {
            return true;
        }
    } else {
        return false;
    }
}

function toggle_price(price, special_price, amount_bind, price_exc, special_price_exc) {
    if (switch_board.exclusive_price_enabled) {
        if (price_exc == null) {
            price_exc = price;
        }
        if (special_price_exc == null) {
            special_price_exc = special_price;
        }
        var exc_prc_wrap = generate_html_tag('div', 'exc_prc_wrap');
        var ori_prod_price_exc = generate_html_tag('span', 'product_amount_exc');
        var spec_prod_price_exc = generate_html_tag('span', 'spec_amount_exc');
        var spec_prod_price_exc_span = generate_html_tag('span', 'spec_prod_price_exc_span');
    }
    var org_prc_wrap = generate_html_tag('div', 'org_prc_wrap');
    var ori_prod_price = generate_html_tag('span', 'product_amount');
    var spec_prod_price = generate_html_tag('span', 'spec_amount');
    var final_amount = generate_html_tag('input', 'final_price');
    var ini_amount = generate_html_tag('input', 'ini_price');
    var original_price = generate_html_tag('input', 'main_product_price');
    original_price.setAttribute('type', 'hidden');
    final_amount.setAttribute('type', 'hidden');
    ini_amount.setAttribute('type', 'hidden');

    if (special_price != null && (+special_price < +price || +special_price != +price)) {
        var ori_prod_span = generate_html_tag('span', 'ori_prod_span');
        var ori_prod_spl_span = generate_html_tag('span', 'ori_prod_spl_span');
        ori_prod_price.textContent = check_currency_symb(parseFloat(price));
        spec_prod_price.textContent = check_currency_symb(parseFloat(special_price));
        ori_prod_price.classList.add('old_price');
        // spec_prod_price.appendChild(ori_prod_spl_span);
        // ori_prod_price.appendChild(ori_prod_span);
        org_prc_wrap.appendChild(ori_prod_price);
        org_prc_wrap.appendChild(spec_prod_price);

        final_amount.value = parseFloat(special_price).toFixed(2);
        ini_amount.value = parseFloat(special_price).toFixed(2);
        org_prc_wrap.appendChild(final_amount);
        org_prc_wrap.appendChild(ini_amount);
    } else {
        ori_prod_price.textContent = check_currency_symb(parseFloat(price));
        // var null_price = generate_html_tag('span', 'null_price');
        // org_prc_wrap.appendChild(null_price);
        org_prc_wrap.appendChild(ori_prod_price);

        final_amount.value = parseFloat(price).toFixed(2);
        ini_amount.value = parseFloat(price).toFixed(2);
        org_prc_wrap.appendChild(final_amount);
        org_prc_wrap.appendChild(ini_amount);
    }
    amount_bind.appendChild(org_prc_wrap);
    if (switch_board.exclusive_price_enabled) {
        if (special_price_exc != null && special_price_exc != "" && (+special_price_exc < +price_exc || +special_price_exc != +price_exc) && (+special_price_exc != +special_price)) {
            //ori_prod_price_exc.textContent = parseFloat(price_exc).toFixed(2);
            spec_prod_price_exc_span.textContent = check_currency_symb(parseFloat(special_price_exc));
            ori_prod_price_exc.classList.add('old_price_exc');
            var old_spans = generate_html_tag('span', 'old_spans');
            old_spans.textContent = check_currency_symb(parseFloat(price_exc));
            ori_prod_price_exc.appendChild(old_spans);
            spec_prod_price_exc.appendChild(spec_prod_price_exc_span);
            exc_prc_wrap.appendChild(ori_prod_price_exc);
            exc_prc_wrap.appendChild(spec_prod_price_exc);


            final_amount_exc.value = parseFloat(special_price_exc).toFixed(2);
            ini_amount_exc.value = parseFloat(special_price_exc).toFixed(2);
            exc_prc_wrap.appendChild(final_amount_exc);
            exc_prc_wrap.appendChild(ini_amount_exc);
        } else {
            if (+price_exc != +price) {
                ori_prod_price_exc.textContent = check_currency_symb(parseFloat(price_exc));
                if (window.innerWidth > 767) {
                    var null_price = generate_html_tag('span', 'null_price');
                    exc_prc_wrap.appendChild(null_price);
                }
                exc_prc_wrap.appendChild(ori_prod_price_exc);
                final_amount_exc.value = parseFloat(price_exc).toFixed(2);
                ini_amount_exc.value = parseFloat(price_exc).toFixed(2);
                var null_price = generate_html_tag('span', 'null_price');
                exc_prc_wrap.appendChild(null_price);
                exc_prc_wrap.appendChild(final_amount_exc);
                exc_prc_wrap.appendChild(ini_amount_exc);
            }
        }
        amount_bind.appendChild(exc_prc_wrap);
    }

    if (switch_board.exclusive_price_enabled) {
        original_price_exc.value = parseFloat(price_exc).toFixed(2);
        amount_bind.appendChild(original_price_exc);
    }
    original_price.value = parseFloat(price).toFixed(2);
    amount_bind.appendChild(original_price);
    if (special_price != null && (+special_price < +price || +special_price != +price)) {
        var you_save_wrapper = generate_html_tag('div', 'you_save_wrapper');
        var you_save = generate_html_tag('p', 'you_save');
        if (window.location.host.includes('.ro') == true) {
            you_save.textContent = bundle_vars.you_save + inc_getDiscount(+price, +special_price) + "%" //bundle_vars.you_save + check_currency_symb(parseFloat(+price - +special_price));
        } else {
            you_save.textContent = bundle_vars.you_save + inc_getDiscount(+price, +special_price) + "%" //bundle_vars.you_save + client_vars.curr_sym + parseFloat(+price - +special_price).toFixed(2);
        }
        you_save_wrapper.appendChild(you_save)
        org_prc_wrap.appendChild(you_save_wrapper);
    } else {
        var you_save_wrapper = generate_html_tag('div', 'you_save_wrapper');
        org_prc_wrap.appendChild(you_save_wrapper);
    }
    return amount_bind;
}

function inc_getDiscount(p_original_price, p_sale_price) {
    return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
}

function prepare_product_price(prod_json) {
    var active_tab = document.querySelector('.ic_product_bundling.active');
    var special_price;
    var isSpecial = false;
    var final_amt = active_tab.querySelectorAll('.final_price');
    var original = active_tab.querySelectorAll('.main_product_price');
    for (var i = 0; i < final_amt.length; i++) {
        if (final_amt[i].value < (original[i].value)) {
            isSpecial = true;
            break;
        }
    }
    if (isSpecial) {
        var price = active_tab.querySelector('.inc_price');
        var special = active_tab.querySelector('.inc_special_price');
        var pr_cal = calculate_price()
        // price.textContent = pr_cal.toLocaleString('en-IN');
        price.textContent = parseFloat(pr_cal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        var pr_add = price_addition()
        // special.textContent = pr_add.toLocaleString('en-IN');
        special.textContent = parseFloat(pr_add).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        special.classList.remove('no_data');
    } else {
        var special = active_tab.querySelector('.inc_special_price');
        if (special != null) {
            special.innerHTML = "";
            special.classList.add('no_data');
        }
        var price = active_tab.querySelector('.inc_price');
        var pr_cal = calculate_price()
        // price.textContent = pr_cal.toLocaleString('en-IN');
        price.textContent = parseFloat(pr_cal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

function calculate_price() {
    var active_tab = document.querySelector('.ic_product_bundling.active');
    var customer_pay_amount = active_tab.querySelectorAll('.q_holder');
    var total = 0;
    for (var i = 0; i < customer_pay_amount.length; i++) {
        total = total + +customer_pay_amount[i].getAttribute("data_price");
    }
    var s = parseFloat(total)
    //return s.toLocaleString('en-IN');
    return parseFloat(total)
}

function price_addition() {
    var active_tab = document.querySelector('.ic_product_bundling.active')
    var get_prod = active_tab.querySelectorAll('.q_holder');
    var total = 0;
    for (var i = 0; i < get_prod.length; i++) {
        total = total + +get_prod[i].getAttribute("data_o_price");
    }
    var s = parseFloat(total)
    //return s.toLocaleString('en-IN');
    return parseFloat(total)
}

function prepare_product_info(child_prod, enable_prod) {
    var get_active_tab = document.querySelector('.ic_product_bundling.active');
    var compo_product = enable_prod
    var compo_image_wrapper = compo_product.querySelector('.pdt_img');
    var compo_title_wrapper = compo_product.querySelector('.pdt_name');
    var compo_price_wrap = compo_product.querySelector('.pdt_price');
    var customer_price = get_active_tab.querySelector('.price_bind');
    compo_price_wrap.innerHTML = "";
    var title_a = compo_title_wrapper.querySelector('a');
    compo_product.setAttribute('data_selected_prod_id', child_prod.childProductId);
    title_a.textContent = child_prod.childProductName;
    var child_prod_url = child_prod.childProductImageUrl.split('?')[0];
    title_a.setAttribute('href', child_prod.childProductUrl);

    var link_a = compo_image_wrapper.querySelector('a');
    link_a.setAttribute('href', child_prod.childProductUrl);
    title_a.setAttribute('target', "_blank");
    var set_product_img = compo_image_wrapper.querySelector('img');
    set_product_img.setAttribute('src', child_prod_url);
    toggle_price(child_prod.childProductPrice, child_prod.childProductSpecialPrice, compo_price_wrap);
    if (switch_board.its_pdp_page) {
        prepare_product_price(child_prod);
        var customer_price_span = customer_price.querySelector('.inc_price');
        var pr_cal = calculate_price()
        //customer_price_span.textContent = pr_cal.toLocaleString('en-IN');
        customer_price_span.textContent = parseFloat(pr_cal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}


function prepare_bundle_checkout_button(bundle, new_temp) {
    var inclusive_wrapper = generate_html_tag('div', 'inclusive_wrapper');
    var ic_prod_checkout = generate_html_tag('div', 'inc_product_checkout');
    var ic_prod_checkout_float = generate_html_tag('div', 'ic_prod_checkout_float');
    ic_prod_checkout.appendChild(ic_prod_checkout_float)
    var price_org_spl_wrap = generate_html_tag('div', 'price_org_spl_wrap');
    var ic_price_div = generate_html_tag('div', 'price_bind');
    var ic_price_bag_icon = generate_html_tag('div', 'ic_price_bag_icon');
    // ic_price_div.appendChild(ic_price_bag_icon)
    var ic_span_label = generate_html_tag('span', '');
    ic_span_label.textContent = bundle_vars.total_kit_price
    ic_span_label.classList.add('cg-title')
    inclusive_wrapper.appendChild(ic_span_label);
    var ic_span_price_title = generate_html_tag('span', 'inc_price');
    ic_span_price_title.textContent = parseFloat(bundle.Products[0].Price).toFixed(2);
    if (bundle.Products[0].SpecialPrice != null && bundle.Products[0].SpecialPrice != bundle.Products[0].Price) {
        ic_prod_checkout_float.classList.add('special')
        var ic_special_price_title = generate_html_tag('span', 'inc_special_price');
        ic_special_price_title.textContent = bundle.Products[0].SpecialPrice;
        ic_span_price_title.classList.add("old");
        price_org_spl_wrap.appendChild(ic_special_price_title)
        // price_org_spl_wrap.appendChild(ic_span_price_title)
        var regular_spl_prc_wrap = generate_html_tag('div', 'regular_spl_prc_wrap');
        price_org_spl_wrap.appendChild(regular_spl_prc_wrap)
        var regular_stext_span = generate_html_tag('p', 'regular_stext_span');
        regular_stext_span.textContent = bundle_vars.regular_price
        regular_spl_prc_wrap.appendChild(regular_stext_span)
        regular_spl_prc_wrap.appendChild(ic_span_price_title)
    } else {
        var regular_spl_prc_wrap = generate_html_tag('div', 'regular_spl_prc_wrap');
        regular_spl_prc_wrap.classList.add('simple')
        price_org_spl_wrap.appendChild(regular_spl_prc_wrap)
        var regular_stext_span = generate_html_tag('p', 'regular_stext_span');
        regular_stext_span.textContent = bundle_vars.regular_price
        regular_spl_prc_wrap.appendChild(regular_stext_span)
        regular_spl_prc_wrap.appendChild(ic_span_price_title)
    }
    inclusive_wrapper.appendChild(price_org_spl_wrap)
    ic_price_div.appendChild(inclusive_wrapper);
    ic_prod_checkout_float.appendChild(ic_price_div);

    var n = (bundle.Products[0].Price == bundle.Products[0].SpecialPrice) ? bundle.Products[0].Price : bundle.Products[0].SpecialPrice;
    var o = (bundle.Products[0].Price != bundle.Products[0].SpecialPricee) ? bundle.Products[0].Price : bundle.Products[0].SpecialPrice;

    var ic_btn_div = generate_html_tag('div', 'inc_basket_wrap');
    var ic_add_button = generate_html_tag('div', 'inc_add_to_basket_btn');
    var ic_add_button_span = generate_html_tag('span', 'inc_add_to_basket_btn_text');
    ic_add_button_span.textContent = bundle_vars.add_bundle_to_cart_btn_text;
    ic_add_button.appendChild(ic_add_button_span);

    if (bundle.Products.length == 2) {
        var bundleId = bundle.BundleId;
        if (bundle.Products[0].ProductType == "simple") {
            var pid1 = bundle.Products[0].ProductSku;
        } else {
            var pid1 = bundle.Products[0].ProductId;
        }
        if (bundle.Products[1].ProductType == "simple") {
            var pid2 = bundle.Products[1].ProductSku;
        } else {
            var pid2 = bundle.Products[1].ProductId;
        }
    }
    ic_add_button.setAttribute('data_total', bundle.TotalPrice);
    ic_btn_div.appendChild(ic_add_button);

    ic_prod_checkout_float.appendChild(ic_btn_div);
    ic_prod_checkout.appendChild(ic_prod_checkout_float)

    return ic_prod_checkout;
}

function sort_attribute_items() {
    var active = document.querySelector('.ic_product_bundling.active');
    if (active.querySelector("ul.product_size") != null) {
        var parent = active.querySelectorAll("ul.product_size");
        for (var i = 0; i < parent.length; i++) {
            itemsArray = Array.prototype.slice.call(parent[i].children);
            itemsArray.sort(function(a, b) {
                if (a.getAttribute('data_value') < b.getAttribute('data_value')) return -1;
                if (a.getAttribute('data_value') > b.getAttribute('data_value')) return 1;
                return 0;
            });
            for (var g = 0; g < itemsArray.length; g++) {
                parent[i].appendChild(itemsArray[g]);
            }
        }
    }
}

function slider_bundle(dir, src, new_temp, ind) {


}

var inc_sliderIndex = 1;

function add_slider_bundle_buttons(wrapper, new_temp, ind) {
    var circle1 = generate_html_tag('div', 'circle1');
    var circle = generate_html_tag('div', 'circle');
    var get_next = generate_html_tag('a', 'next_el');
    var get_prev = generate_html_tag('a', 'prev_el');
    circle1.setAttribute('id', 'inc_next')
    circle.setAttribute('id', 'inc_previous')
    get_next.textContent = bundle_vars.next
    get_prev.textContent = bundle_vars.previous;
    circle1.setAttribute('onclick', 'inc_slide_product("right",this)');
    circle.setAttribute('onclick', 'inc_slide_product("left",this)');


    circle1.appendChild(get_next);
    circle.appendChild(get_prev);
    wrapper.appendChild(circle1);
    wrapper.appendChild(circle);
    //wrapper.appendChild(get_prev);
}

function inc_slide_product(dir, element) {
    if (dir == "left") {
        var nn = -1
        inc_slideIndex += nn
    } else {
        var nn = 1
        inc_slideIndex += nn
    }
    if (element.parentNode.parentNode.parentNode.parentNode.id == "inc_fbt_layout") {
        var fbt_el = element.parentNode.parentNode.parentNode.parentNode
        var bundle_ind = fbt_el.querySelectorAll("#inc_fbt_layout .ic_product_bundling.is_product.active")[0].getAttribute('ic_index')
        var slides = fbt_el.querySelectorAll("#inc_fbt_layout .ic_product_bundling.is_product");
        var li = fbt_el.querySelector("#inc_fbt_layout .ic_product_bundling.is_product.active");
        var dots = fbt_el.querySelectorAll("#inc_fbt_layout .ic_product_wrapper .dots_ic_bundle ul li");
        var dots_qc = fbt_el.querySelectorAll("#inc_fbt_layout .ic_product_wrapper .dots_ic_bundle ul li");
        var dot = fbt_el.querySelector("#inc_fbt_layout .ic_product_wrapper .dots_ic_bundle ul li.active");
    } else {
        if (document.querySelector(".inc_popup.active") != null) {
            var bundle_ind = document.querySelectorAll(".inc_popup.active .ic_product_bundling.is_product.active")[0].getAttribute('ic_index')
        } else {
            var bundle_ind = document.querySelectorAll(".pdp_bundles .ic_product_bundling.is_product.active")[0].getAttribute('ic_index')
        }
        //ic_index
        if (document.querySelector(".inc_popup.active") != null) {
            var slides = document.querySelectorAll(".inc_popup.active .ic_product_bundling.is_product");
            var li = document.querySelector(".inc_popup.active .ic_product_bundling.is_product.active");
            var dots = document.querySelectorAll(".inc_popup.active .ic_product_wrapper .dots_ic_bundle ul li");
            var dots_qc = document.querySelectorAll(".inc_popup.active .ic_product_wrapper .dots_ic_bundle ul li");
            var dot = document.querySelector(".inc_popup.active .ic_product_wrapper .dots_ic_bundle ul li.active");
        } else {
            var slides = document.querySelectorAll(".pdp_bundles .ic_product_bundling.is_product");
            var li = document.querySelector(".pdp_bundles .ic_product_bundling.is_product.active");
            var dots = document.querySelectorAll(".pdp_bundles .ic_product_wrapper .dots_ic_bundle ul li");
            var dots_qc = document.querySelectorAll(".pdp_bundles .ic_product_wrapper .dots_ic_bundle ul li");
            var dot = document.querySelector(".pdp_bundles .ic_product_wrapper .dots_ic_bundle ul li.active");
        }
    }

    // if (n > slides.length) {
    //     inc_sliderIndex = 1
    // }
    // if (n < 1) {
    //     inc_sliderIndex = slides.length
    // }
    if (+bundle_ind + 1 == slides.length) {
        if (dir == "right") {
            bundle_ind = -1;
        }
    }
    if (+bundle_ind + 1 == 1) {
        if (dir == "left") {
            bundle_ind = slides.length;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].classList.remove('active');
    }
    if (dir == "left") {
        if (slides[+bundle_ind - 1] != undefined) {
            slides[+bundle_ind - 1].classList.add('active');
            slides[+bundle_ind - 1].click()
        }
    } else {
        if (slides[+bundle_ind + 1] != undefined) {
            slides[+bundle_ind + 1].classList.add('active');
            slides[+bundle_ind + 1].click()
        }
    }
    for (var r = 0; r < dots_qc.length; r++) {
        dots_qc[r].classList.remove('active');
    }
    if (dir == "left") {
        if (dots_qc[+bundle_ind - 1] != undefined) {
            dots_qc[+bundle_ind - 1].classList.add('active');
        }
    } else {
        if (dots_qc[+bundle_ind + 1] != undefined) {
            dots_qc[+bundle_ind + 1].classList.add('active');
        }
    }
    if (document.querySelector(".inc_popup.active") != null) {
        var ic_prod_box = document.querySelectorAll(".inc_popup.active .ic_product_bundling.is_product.active .ic_product.active");
        for (var r = 0; r < ic_prod_box.length; r++) {
            ic_prod_box[r].classList.remove('active')
        }
        document.querySelector(".inc_popup.active .ic_product_bundling.is_product.active .ic_product").classList.add('active')
    }

}

// SWIPE FEATURE
var xDown = null;
var yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {

    if (!xDown || !yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                if (evt.target.tagName != "IMG") {
                    // slider_bundle("right");
                    if (window.innerWidth < 768 && bundle_vars.load_type == "onload") {
                        if (document.querySelector('body.inc_overlay') == null) {
                            slider_bundle("right", null, "new_temp")
                        }
                    } else {
                        slider_bundle("right");
                    }
                }
            } else {
                /* right swipe */
                if (evt.target.tagName != "IMG") {
                    // slider_bundle("left");
                    if (window.innerWidth < 768 && bundle_vars.load_type == "onload") {
                        if (document.querySelector('body.inc_overlay') == null) {
                            slider_bundle("left", null, "new_temp")
                        }
                    } else {
                        slider_bundle("left");
                    }
                }
            }
        } else {
            // if (yDiff > 0) { /* up swipe */
            //     alert('Up!');
            // } else { /* down swipe */
            //     alert('Down!');
            // }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                if (evt.target.tagName == "IMG") {
                    var parent = this.parentNode;
                    var lis = parent.querySelectorAll("li");
                    var li = parent.querySelector("li.show");
                    // for (var i = 0; i < lis.length; i++) {
                    var id = li.getAttribute("data_product_id");
                    id = id.split("_");
                    // if (eval(+id[1] + +1) != lis.length) {
                    if (document.querySelector('body.inc_overlay') == null) {
                        slideTo(id[0], eval(+id[1] + +1), 'device_right');
                    }
                    // }
                    // }
                } else {
                    // slider_bundle("right");
                    if (window.innerWidth < 768 && bundle_vars.load_type == "onload") {
                        if (document.querySelector('body.inc_overlay') == null) {
                            slider_bundle("right", null, "new_temp")
                        }
                    } else {
                        slider_bundle("right");
                    }
                }
            } else {
                /* right swipe */
                if (evt.target.tagName == "IMG") {
                    var parent = this.parentNode;
                    var li = parent.querySelector("li.show");
                    // for (var i = 0; i < lis.length; i++) {
                    var id = li.getAttribute("data_product_id");
                    id = id.split("_");
                    // if (eval(+id[1] - +1) != -1) {
                    if (document.querySelector('body.inc_overlay') == null) {
                        slideTo(id[0], eval(+id[1] - +1), 'device_left');
                    }
                    // }
                    // }
                } else {
                    // slider_bundle("left");
                    if (window.innerWidth < 768 && bundle_vars.load_type == "onload") {
                        if (document.querySelector('body.inc_overlay') == null) {
                            slider_bundle("left", null, "new_temp")
                        }
                    } else {
                        slider_bundle("left");
                    }
                }
            }
        } else {
            // if (yDiff > 0) { /* up swipe */
            //     alert('Up!');
            // } else { /* down swipe */
            //     alert('Down!');
            // }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}
// SWIPE FEATURE
function quantity_dropdown_change(el, c) {
    var curr_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.ini_price');
    var old_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.main_product_price');
    if (el.parentNode.querySelector('input').value > 99) {
        c = "99"
    }
    if (switch_board.quantity_dropdown) {
        if (el.parentNode.querySelector('input').value < el.selectedIndex + 1) {
            el.parentNode.querySelector('input').setAttribute('value', el.selectedIndex);
            el.parentNode.setAttribute('data_price', (el.selectedIndex + 1) * curr_price.value);
            el.parentNode.setAttribute('data_o_price', (el.selectedIndex + 1) * old_price.value);
            el.parentNode.querySelector('.up').click();
        } else {
            el.parentNode.querySelector('input').setAttribute('value', el.selectedIndex + 2);
            el.parentNode.setAttribute('data_price', (el.selectedIndex + 1) * curr_price.value);
            el.parentNode.setAttribute('data_o_price', (el.selectedIndex + 1) * old_price.value);
            el.parentNode.querySelector('.down').click();
        }
    } else {
        if (curr_price != null) {
            el.parentNode.querySelector('input').setAttribute('value', c);
            if (c == 0) {
                el.parentNode.setAttribute('data_price', curr_price.value);
                el.parentNode.setAttribute('data_o_price', old_price.value);
            } else {
                el.parentNode.setAttribute('data_price', c * curr_price.value);
                el.parentNode.setAttribute('data_o_price', c * old_price.value);
            }
        }

    }
}

function prepare_quantity_buttons_for_event_binding(load_type) {
    if (load_type == "onload") {
        if(bundle_vars.fbt_input_tag != null){
            var elqty=bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt')
            if(elqty != null){
                var add_button = elqty.querySelectorAll(".up");
                var sub_button = elqty.querySelectorAll(".down");
            }else{
                var add_button = document.querySelectorAll(".up");
                var sub_button = document.querySelectorAll(".down");
            }
        }else{
            var add_button = document.querySelectorAll(".up");
            var sub_button = document.querySelectorAll(".down");
        }
        
    } else {
        var parentDiv = document.querySelector(".inc_popup");
        if (parentDiv != null) {
            var add_button = parentDiv.querySelectorAll(".inc_popup .up");
            var sub_button = parentDiv.querySelectorAll(".inc_popup .down");
        }
    }
    // bind_event_for_quantity_buttons(add_button, 'add', load_type);
    // bind_event_for_quantity_buttons(sub_button, 'sub', load_type);
}


function bind_event_for_quantity_buttons(elements, type, load_type) {
    if (elements != undefined) {
        for (i = 0; i < elements.length; i++) {
            var counter = 1;
            elements[i].addEventListener("click", function(event) {
                event.stopPropagation();
                var parentEl = this.parentElement;
                var getInput = parentEl.querySelector('input[type=hidden]');
                counter = getInput.value;
                if ((type == 'sub') && (counter == 0)) {
                    return false;
                }
                (type == 'add') ? counter++ : counter--;
                if (counter < "100") {
                    if (counter == 0) {
                        counter = 1;
                    }
                    quantity_dropdown_change(this, counter);
                    prepare_final_price(this, counter, type, load_type);
                } else {
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
        }
    }
}

function prepare_final_price(el, counter, type, load_type) {
    var getParent = el.parentElement;
    var getSpan = getParent.querySelector('span');
    var input = getParent.querySelector('input[type="hidden"]');
    var prod = el.parentNode.parentNode.parentNode.parentNode;
    var final_price = prod.querySelector("input.final_price");
    var main_product_price = prod.querySelector("input.main_product_price");
    input.setAttribute('value', counter);
    if (!switch_board.quantity_dropdown) {
        var getSpan = getParent.querySelector('input[type="number"]');
    }
    if (switch_board.exclusive_price_enabled) {
        var final_price_exc = prod.querySelector("input.final_price_exc");
        var main_product_price_exc = prod.querySelector("input.main_product_price_exc");
    }
    if (counter > 1) {
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.remove('disabled')
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.remove('enable')
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.add('enable')
        if (counter == 999) {
            getSpan.parentNode.querySelector('.inc_icon_pluss').classList.add('disabled')
        } else {
            getSpan.parentNode.querySelector('.inc_icon_pluss').classList.remove('disabled')
        }
    } else {
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.remove('disabled')
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.remove('enable')
        getSpan.parentNode.querySelector('.inc_icon_minuss').classList.add('disabled')
    }
    getSpan.value = counter;
    if(prod.classList.contains('added_list_item_wrapper') == true){
        var prod_card = prod
    }else{
        var prod_card = prod.parentNode
    }
    if(document.querySelector('.ic_quick_view_popup.active') != null){
        prod_card = prod_card.parentNode.parentNode.parentNode
        if(prod_card.id == "ic_quick_view_popup"){
            prod_card = prod_card.parentNode
        }
    }
    if (document.querySelector('#inc_sku_fbt .ic_quick_view_popup.active .inc_icon_close') != null) {
        var prod_card = prod.parentNode.parentNode.parentNode.parentNode
    }
    if(prod_card.classList.contains('ic_prod_details') == true){
        prod_card = prod_card.parentNode
    }
    if (prod_card != null) {
        if(document.querySelector('.ic_quick_view_popup.active') != null){
            prod_card.querySelector('.q_holder input').value = counter
            prod_card.querySelector('.q_holder input[type="hidden"]').value = counter
        }else{
            prod_card.querySelector('.ic_quick_view_popup .q_holder input').value = counter
            prod_card.querySelector('.ic_quick_view_popup .q_holder input[type="hidden"]').value = counter
        }
        // if (prod_card.classList.contains('ic_added_product_list_item_block') == true || prod_card.classList.contains('added_list_item_wrapper') == true) {
        //     var prod_card = prod
        //     var prod_id = prod_card.getAttribute('product_id');
        //     var prod_addtocart_sku = prod_card.getAttribute('product_sku');
        //     var c_sku = prod_card.getAttribute('c_sku');
        //     var c_pid = prod_card.getAttribute('c_pid');
        //     var qty = prod_card.querySelector('.q_holder input').value;
        //     var p_sku =prod_card.getAttribute('product_sku');
        //     //Adaugă în coș
        //     var exit_prod = null;
        //     var fbtexit_prod = null;
        //     if (document.querySelector('#inc_sku_fbt .ic_quick_view_popup.active .inc_icon_close') != null) {
        //         // exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]');
        //         if(c_pid != "" && c_pid != undefined && c_pid != null && c_pid != "null"){
        //             exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]')
        //         }else{
        //             exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]')
        //         }
        //         fbtexit_prod = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="' + p_sku + '"]');
        //         if (prod_card.querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable') != null) {
        //             var checkadded = prod_card.querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerText.trim()
        //             if (checkadded != "Adaugă în coș") {
        //                 prod_card.querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerHTML = "Actualizări"
        //             }
        //         }
        //     } else {

        //         if(c_pid != "" && c_pid != undefined && c_pid != null && c_pid != "null"){
        //             exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]');
        //         }else{
        //             exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]');
        //         }

        //         fbtexit_prod = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="' + p_sku + '"]');
        //         if (prod_card.querySelector('.prod_quick_view.fbt_btn') != null) {
        //             var checkadded = prod_card.querySelector('.prod_quick_view.fbt_btn').innerText.trim()
        //             if (checkadded != "Adaugă în coș") {
        //                 prod_card.querySelector('.prod_quick_view.fbt_btn').innerHTML = "Actualizări"
        //             }
        //         }
        //     }
        //     if (exit_prod != null && el.parentNode.parentNode.parentNode.className == "added_list_item_qty") {
        //         var pr_id = prod_id
        //         var old_qty = exit_prod.querySelector('.q_holder input').value
        //         exit_prod.querySelector('.q_holder input').value = qty //qty
        //         exit_prod.querySelector('.q_holder input[type="hidden"]').value = qty //+qty + +old_qty
        //         if(fbtexit_prod[0] != undefined){
        //             for(ai=0;ai<fbtexit_prod.length;ai++){
        //                 fbtexit_prod[ai].querySelector('.q_holder input').value = qty
        //                 fbtexit_prod[ai].querySelector('.q_holder input[type="hidden"]').value = qty
        //                 if (qty > 1) {
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.add('enable')
                            
        //                     if (qty == 999) {
        //                         fbtexit_prod[ai].querySelector('.inc_icon_pluss').classList.add('disabled')
        //                     } else {
        //                         fbtexit_prod[ai].querySelector('.inc_icon_pluss').classList.remove('disabled')
        //                     }
        //                 } else {
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                     fbtexit_prod[ai].querySelector('.inc_icon_minuss').classList.add('disabled')
        //                 }
        //             }
        //         }
        //         for (var b = 0; b < bundle_vars.push_product_to_add.length; b++) {
        //             if (c_pid != null && c_pid != "null") {
        //                 if (bundle_vars.push_product_to_add[b].c_pid == c_pid) {
        //                     bundle_vars.push_product_to_add[b].qty = qty
        //                 }
        //             } else {
        //                 if (bundle_vars.push_product_to_add[b].id == prod_id) {
        //                     bundle_vars.push_product_to_add[b].qty = qty
        //                 }
        //             }
        //         }
        //     }else {
        //         var allselitelel = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="'+prod_id+'"]')
        //         for(l=0;l<allselitelel.length;l++){
        //             allselitelel[l].querySelector('.q_holder input').value = qty
        //             allselitelel[l].querySelector('.q_holder input[type="hidden"]').value = qty
        //             if (qty > 1) {
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.add('enable')
                        
        //                 if (qty == 999) {
        //                     allselitelel[l].querySelector('.inc_icon_pluss').classList.add('disabled')
        //                 } else {
        //                     allselitelel[l].querySelector('.inc_icon_pluss').classList.remove('disabled')
        //                 }
        //             } else {
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.add('disabled')
        //             }
        //         }
        //         if(c_pid != null){
        //             // var allselitelel = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="'+prod_id+'"]')
        //         }
        //     }
        // } else {
        //     if (prod_card.classList.contains('ic_product') == true) {
        //         var prod_id = prod_card.getAttribute('data_selected_prod_id');
        //         var prod_addtocart_sku = prod_card.getAttribute('data_selected_prod_sku');
        //         var c_sku = null;
        //         var c_pid = null;
        //         var qty = prod_card.querySelector('.q_holder input').value;
        //         if (document.querySelector('#inc_sku_fbt .ic_quick_view_popup.active .inc_icon_close') != null && prod_card.querySelector('.select_wrapper li.active a') != null) {
        //             var c_sku = prod_card.querySelector('.select_wrapper li.active a').getAttribute('sku')
        //             var c_pid = prod_card.querySelector('.select_wrapper li.active a').getAttribute('c_pid')
        //             //c_pid
        //         }
        //         var exit_prod = null;
        //         if (document.querySelector('#inc_sku_fbt .ic_quick_view_popup.active .inc_icon_close') != null) {
        //             // exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]');
        //             if(c_pid != "" && c_pid != undefined && c_pid != null && c_pid != "null"){
        //                 exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]')
        //             }else{
        //                 exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]')
        //             }
        //             var checkadded = prod_card.querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerText.trim()
        //             if (checkadded != "Adaugă în coș") {
        //                 prod_card.querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerHTML = "Actualizări"
        //             }
        //         } else {
        //             // exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]');
        //             if(c_pid != "" && c_pid != undefined && c_pid != null && c_pid != "null"){
        //                 exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]');
        //             }else{
        //                 exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]');
        //             }
        //             var checkadded = prod_card.querySelector('.prod_quick_view.fbt_btn').innerText.trim()
        //             if (checkadded != "Adaugă în coș") {
        //                 prod_card.querySelector('.prod_quick_view.fbt_btn').innerHTML = "Actualizări"
        //             }
        //         }
        //         var allselitelel = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="'+prod_id+'"]')
        //         for(l=0;l<allselitelel.length;l++){
        //             allselitelel[l].querySelector('.q_holder input').value = qty
        //             allselitelel[l].querySelector('.q_holder input[type="hidden"]').value = qty
        //             if (qty > 1) {
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.add('enable')
                        
        //                 if (qty == 999) {
        //                     allselitelel[l].querySelector('.inc_icon_pluss').classList.add('disabled')
        //                 } else {
        //                     allselitelel[l].querySelector('.inc_icon_pluss').classList.remove('disabled')
        //                 }
        //             } else {
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 allselitelel[l].querySelector('.inc_icon_minuss').classList.add('disabled')
        //             }
        //         }
        //         if(c_pid != null){
        //             // var allselitelel = document.querySelectorAll('#inc_sku_fbt .ic_product[data_selected_prod_id="'+prod_id+'"]')
        //         }
        //         //&& el.parentNode.parentNode.parentNode.className == "added_list_item_qty"
        //         if (exit_prod != null) {
        //             var pr_id = prod_id
        //             var old_qty = exit_prod.querySelector('.q_holder input').value
        //             exit_prod.querySelector('.q_holder input').value = qty //qty
        //             exit_prod.querySelector('.q_holder input[type="hidden"]').value = qty //+qty + +old_qty
        //             if (qty > 1) {
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.add('enable')
                        
        //                 if (qty == 999) {
        //                     exit_prod.querySelector('.inc_icon_pluss').classList.add('disabled')
        //                 } else {
        //                     exit_prod.querySelector('.inc_icon_pluss').classList.remove('disabled')
        //                 }
        //             } else {
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.remove('disabled')
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.remove('enable')
        //                 exit_prod.querySelector('.inc_icon_minuss').classList.add('disabled')
        //             }
        //             for (var b = 0; b < bundle_vars.push_product_to_add.length; b++) {
        //                 if (c_pid != null && c_pid != "null") {
        //                     if (bundle_vars.push_product_to_add[b].c_pid == c_pid) {
        //                         bundle_vars.push_product_to_add[b].qty = qty
        //                     }
        //                 } else {
        //                     if (bundle_vars.push_product_to_add[b].id == prod_id) {
        //                         bundle_vars.push_product_to_add[b].qty = qty
        //                     }
        //                 }
        //             }
        //         }else{
                    
        //         }

        //     }
        // }
        // updateFBTcount()
    }
    updateplpactivemodalprc()
}

function get_parent_element_by_tagname(el, tagName) {
    tagName = tagName.toLowerCase();
    while (el && el.parentNode) {
        el = el.parentNode;
        if (el.tagName && el.tagName.toLowerCase() == tagName) {
            return el;
        }
    }
    return null;
}




function show_loader() {
    var btns = bundle_vars.clicked_btn;
    if (btns) {
        btns.classList.add("loading");
    }
}

function hide_loader() {
    var btnh = bundle_vars.clicked_btn;
    if (btnh) {
        btnh.classList.remove("loading");
    }
}
// Loader Code:END

function retrieve_cookie(name) {
    var cookie_value = "",
        current_cookie = "",
        name_expr = name + "=",
        all_cookies = document.cookie.split(';'),
        n = all_cookies.length;
    for (var i = 0; i < n; i++) {
        current_cookie = all_cookies[i].trim();
        if (current_cookie.indexOf(name_expr) == 0) {
            cookie_value = current_cookie.substring(name_expr.length, current_cookie.length);
            break;
        }
    }
    cookie_value = decodeURIComponent(readCookie(name));
    cookie_value = cookie_value.substring(1, cookie_value.length - 1);
    return cookie_value;
}

function prepare_add_to_cart_data(source, bundleId, id1, id2, urls1, urls2, el, new_temp, shade_click) {
   
    if(new_temp == 'checkbox'){
        var elicprod = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (elicprod.classList.contains('ic_product') == false) {
            elicprod = el.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        if(elicprod.classList.contains('inc_checked') == true){
            elicprod.classList.remove('inc_checked')
            el.innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
            elicprod.querySelector('.inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
            elicprod.querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
        }else{
            if(el.classList.contains('configurable') == true){
                var pcard=el.parentNode.parentNode.parentNode.parentNode.parentNode
                if(pcard.querySelector('.ic_quick_view_popup.active') == null){
                    if (pcard.querySelector('.ic_quick_view_popup') != null) {
                        pcard.querySelector('.ic_quick_view_popup').classList.add('active')
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                            pcard.querySelector('.ic_quick_view_popup').style.display = "block"
                        }
                        setTimeout(function() {
                            document.querySelector('body').classList.add('quick_view_active')
                        }, 50)
                    }
                    return;
                }
            }
            elicprod.classList.add('inc_checked')
            el.innerHTML = '<span>Produs selectat</span>';
            elicprod.querySelector('.inc_add_to_basket_btn').innerHTML = '<span>Produs selectat</span>';
            elicprod.querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span>Produs selectat</span>';
        }
        if(document.querySelector('.ic_quick_view_popup.active') != null){
            document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
            document.querySelector('body').classList.remove('quick_view_active')
        }
        setTimeout(function(){
            updateplpactivemodalprc()
        },100)
    }else{
        if(el.classList.contains('configurable') == true){
            var pcard=el.parentNode.parentNode.parentNode.parentNode.parentNode
            if(pcard.querySelector('.ic_quick_view_popup.active') == null){
                if (pcard.querySelector('.ic_quick_view_popup') != null) {
                    pcard.querySelector('.ic_quick_view_popup').classList.add('active')
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                        pcard.querySelector('.ic_quick_view_popup').style.display = "block"
                    }
                    setTimeout(function() {
                        document.querySelector('body').classList.add('quick_view_active')
                    }, 50)
                }
                return;
            }
        }
        if(document.querySelector('.yrOrders-C.active.open') == null && document.querySelector('.yrOrders-C.active') != null){
            if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt') != null){
                document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt').click()
            }
        }
        if(document.querySelector('.yrOrders-C.active .name') != null){
            lastadded_product = document.querySelector('.yrOrders-C.active .name').innerText.trim()
        }
        var rem_eror_msg = document.querySelectorAll('.inc_popup.active .inc_not_found_error');
        for (re = 0; re < rem_eror_msg.length; re++) {
            if (rem_eror_msg[re] != undefined) {
                if (rem_eror_msg[re].parentNode != null) {
                    rem_eror_msg[re].parentNode.removeChild(rem_eror_msg[re]);
                }
            }
        }
        update_call_flag=true;
        var btns = el;
        if (btns) {
            btns.classList.add("loading");
        }
        setTimeout(function() {
            sessionStorage.setItem('refreshOnCart', 1);
            if (switch_board.its_cart_page) {
                if (document.querySelector('.ic_configurable_popup.active') != null) {
                    el = document.querySelector('.ic_configurable_popup.active').parentNode.parentNode.querySelector('.inc_add_to_basket_btn')
                }
            }
            bundle_vars.clicked_btn = el;
            var f = 1 //validate_select(bundle_vars.clicked_btn, source);
            var formData = [];
            var form_key = "";
            if (document.querySelector('form input[name="form_key"]') != null) {
                form_key = document.querySelectorAll('form input[name="form_key"]')[0].value;
            }

            if (f != 0) {
                if (source == "inc_btn") {
                    var inc_btn_det = document.querySelector(".ic_product_bundling.active .inc_add_to_basket_btn");
                    bundle_vars.ids_to_exclude[0] = inc_btn_det.getAttribute("mid1");
                    bundle_vars.ids_to_exclude[1] = inc_btn_det.getAttribute("mid2");
                }


                if (id2 == null) {
                    var ic_pr_div = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    if (ic_pr_div.classList.contains('ic_product') == false) {
                        var ic_pr_div = el.parentNode.parentNode.parentNode.parentNode.parentNode
                    }
                    var qty1 = ic_pr_div.querySelector('.ic_prod_details .q_holder input').value
                    var href1 = ic_pr_div.querySelector('.ic_prod_details .pdt_name a').href;
                    var img0 = ic_pr_div.querySelector('.ic_prod_details .pdt_img img').src;
                    var sel_length = ic_pr_div.querySelectorAll('.select_wrapper');
                    var p_id1 = "";
                    var a_id = "";
                    var opt_id = "";
                    var a_id1 = "";
                    var attr_option_id = "";
                    var attr_option_id1 = "";
                    var main_p_id = ic_pr_div.getAttribute('data_selected_prod_id');
                    var qty_main = 0;
                    var p_sku = ic_pr_div.getAttribute('data_selected_prod_sku');
                    var all_sel_shades = ic_pr_div.querySelectorAll('.info_selected_shade.active .info_shade_container');

                    if (sel_length.length == 2) {
                        if (sel_length[1].querySelector('ul') != null) {
                            if (sel_length[1].querySelector('ul li.active a') != null) {
                                p_id1 = sel_length[1].querySelector('ul li.active a').getAttribute('c_pid');
                            }
                        }
                    } else if (sel_length.length == 1) {
                        if (sel_length[0].querySelector('ul') != null) {
                            if (sel_length[0].querySelector('ul li.active a') != null) {
                                p_id1 = sel_length[0].querySelector('ul li.active a').getAttribute('c_pid');
                            }
                        }
                    } else {
                        p_id1 = ic_pr_div.getAttribute('data_selected_prod_id');
                    }
                    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                    bundle_vars.ids_to_exclude[0] = client_vars.product_ids[0];
                    bundle_vars.ids_to_exclude[1] = main_p_id;
                    var inc_cmpgnId = campNr
                    var inc_acctNr = sessionStorage.getItem("acctNr")
                    var inc_profile = JSON.parse(sessionStorage.getItem("profileRes"))
                    var conf_pr_array = []
                    var data_param = {}
                    var inc_cust_name = ""
                    var cust_id = ""
                    var active_customer = ""

                    var current_act = ""
                    if (document.querySelector('.yrOrders-C.active .name') != null) {
                        var current_act = document.querySelector('.yrOrders-C.active .name').innerText.trim();
                    }
                    for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                        if (current_act != "") {
                            if (cust_data_online.dataList[ca].custName == current_act) {
                                active_customer = cust_data_online.dataList[ca];
                                break;
                            }
                        } else {
                            if (cust_data_online.dataList[ca].active == true) {
                                active_customer = cust_data_online.dataList[ca];
                                break;
                            }
                        }
                    }
                    if (active_customer != "") {
                        cust_id = active_customer.custId
                        inc_cust_name = active_customer.custName
                    } else {
                        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                            cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
                        }
                        if (document.querySelector('#co-mobMenu .name') != null) {
                            var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
                        }
                    }
                    if(document.querySelector('.inc_new_temp .ic_quick_view_popup.active') != null){
                        var placeordrtype = "INCCAR"
                    }else if(document.querySelector('.inc_popup.active') != null){
                        var placeordrtype = "INCPOP"
                    }
                    if (cust_data_online != undefined) {
                        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                            var inc_param = {
                                cmpgnId: campNr,
                                lineNr: p_id1.toString(),
                                qty: qty1,
                                custId: cust_id,
                                placOrdSctnCd: placeordrtype
                            }
                            formData.push(inc_param)
                        } else {
                            var inc_param = [{
                                custId: cust_id,
                                lineNr: p_id1.toString(),
                                placOrdSctnCd: placeordrtype,
                                qty: qty1,
                                cmpgnId: campNr
                            }]
                            data_param["cmpgnId"] = campNr;
                            data_param["ordNm"] = inc_cust_name;
                            data_param["ordType"] = "REG";
                            data_param["items"] = inc_param;
                        }
                    }
                    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                        var inc_login_user_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim()
                    }
                    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                        var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order/' + inc_login_user_id + '/cust/' + cust_id + '?groups=custords'
                    } else {
                        var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order?groups=custords';
                    }
                    // show_loader();
                    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                        add_to_cart_ajax_request(source, bundleId, main_p_id, null, formData, null, url1, href1, img0, qty_main, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr,el);
                    } else {
                        add_to_cart_ajax_request(source, bundleId, main_p_id, null, data_param, null, url1, href1, img0, qty_main, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr,el);
                    }

                }
            }
        }, 1000)
    }
}

function getCookie_inc(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//getCookie_inc('avn_tkn')
function add_to_cart_ajax_request(source, bundleId, id1, id2, formData, new_temp, url0, href0, img0, qty_main, p_id1, cust_ids, inc_campNr, inc_cust_name, inc_acctNr,elm) {
    var item_added_list=[]
    item_added_list.push(p_id1)
    var checkout_wrapper = elm.parentNode.parentNode.parentNode;
    if(document.querySelector('#co-mobMenu .ordr-date') == null) {
        add_to_cart_ajax_result(source, bundleId, client_vars.product_ids[0], id1, null, null, qty_main);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url0, false);
        xhr.onload = function() {}
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onerror = function(errorMessage) {
            location.reload()
        }
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if (document.querySelector('#cartbag span') == null) {
                    var r = JSON.parse(this.responseText)
                    // fnsForAddPdtToCart.setOrdrNrToCookie(r.ordNr, inc_cust_name)
                    var cookieorderinfo = JSON.parse(decodeURIComponent(decodeURIComponent(readCookie('orderInfo'))))
                    setObject_m("orderInfo", {
                        ordrNr: r.ordNr,
                        ordrNm: inc_cust_name,
                        isRepOrdr : cookieorderinfo.isRepOrdr,
                        ordrngNavObj : cookieorderinfo.ordrngNavObj,
                        custId:cust_ids,
                        totCustCnt:cookieorderinfo.totCustCnt
                    })
                    document.querySelector('.mcrt-btn-c .mcrt-btn.avn-prim-btn').click()
                    // location.reload()
                }
                
                var result = result = JSON.parse(xhr.response)
                setTimeout(function() {
                    if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                        document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                    }
                }, 1000)
                
            }
        }
        xhr.send(JSON.stringify(formData));
    } else {
        if (document.querySelector('#inc_sku_fbt.active #inc_fbt_layout') != null) {
            // document.querySelector('#inc_sku_fbt.active #inc_fbt_layout').setAttribute('style','z-index:99999999999999')
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url0, false);
        xhr.onload = function() {}
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onerror = function(errorMessage) {
            
            console.log("network error")
            setTimeout(function() {
                if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                    document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                }
            }, 800)
            var checkout_wrapper = elm.parentNode.parentNode.parentNode;
            setTimeout(function() {
                if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul nu a fost adăugat în coș"
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:red;font-size:16px;font-weight:bold;')
                }
            }, 1500);
            if (document.querySelector('.inc_popup.active') != null && elm != null) {
                var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                inc_not_found_error.innerHTML = "Produsul nu a fost adăugat în coș"
                inc_not_found_error.setAttribute('style', 'color:red;font-size:11px;')
                elm.parentNode.appendChild(inc_not_found_error);
                elm.innerText = "Adaugă în coș";
                setTimeout(function() {
                    if (inc_not_found_error != null) {
                        inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                    }
                }, 4000)
            }
            setTimeout(function() {
                if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                }
                if(document.querySelector('.ic_quick_view_popup.active .inc_icon_close') != null){
                    document.querySelector('.ic_quick_view_popup.active .inc_icon_close').click()
                }
            }, 5000)
            
            if (errorMessage == "Unauthorized") {
                refresh_token()
            }
        }
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if (document.querySelector('#cartbag span') == null) {
                    window.location.reload()
                }
                var result = result = JSON.parse(xhr.response)
                setTimeout(function() {
                    if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                        document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                    }
                }, 1000)
                
                add_to_cart_ajax_result(source, bundleId, client_vars.product_ids[0], id1, null, null, qty_main);
                if (result.custOrds[0] != undefined) {
                    if (document.querySelector('.inc_popup.active') != null) {
                        document.querySelector('.nav_wrap_price_wrapper').style.display = "none"
                        document.querySelector('.inc_popup .loader_wait_span').style.display = "flex"
                    }
                    // addProductsToCart(p_id1, "1", "REG", "", cust_ids, "REGULAR", "custords", inc_cust_name)
                    // d = getCookie("avn_uid")
                    // e = fnsForAddPdtToCart
                    // add_to_cart_ajax_result(source, bundleId, client_vars.product_ids[0], id1, null, null, qty_main);

                    // var d = e.valiadtion(result, a, e.inputObj.placOrdSctnCd);
                    // e.setOrdrNrToCookie(result.ordNr, b)
                    // setSessionVal_str("cntcard", result.ordNr);
                    // setSessionVal_str("cntcard_lineNr", e.inputObj.lineNr)
                    var cust_data_online_s = JSON.parse(sessionStorage.getItem("custData"))

                    

                    var checkout_wrapper = elm.parentNode.parentNode.parentNode;
                    var prev_qt = 0
                    if (document.querySelector('#cartbag span') != null) {
                        prev_qt = document.querySelector('#cartbag span').innerHTML
                    }

                    var checkadded = result.custOrds[0].items;
                    setTimeout(function() {
                        // edit_btn_show_on_add()
                        var error_val_msg = ""
                        for (er = 0; er < checkadded.length; er++) {
                            if (checkadded[er].lineNr == p_id1) {
                                if (checkadded[er].valid == undefined) {
                                    if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null && document.querySelector('.ic_quick_view_popup.active') == null) {
                                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul a fost adăugat în coș";
                                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:#59c3b2;font-size:16px;font-weight:bold;')
                                    }else if (elm != null) {
                                        var rem_e = document.querySelector('.inc_popup.active .inc_not_found_error');
                                        if (inc_not_found_error != null) {
                                            // rem_e.parentNode.removeChild(rem_e);
                                            inc_not_found_error.innerHTML = "Produsul a fost adăugat în coș";
                                            inc_not_found_error.setAttribute('style', 'color:#59c3b2;font-size:11px;')
                                        } else {
                                            var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                                            inc_not_found_error.innerHTML = "Produsul a fost adăugat în coș";
                                            inc_not_found_error.setAttribute('style', 'color:#59c3b2;font-size:11px;')
                                            if(elm.parentNode.querySelector('.inc_not_found_error') != null){
                                                var remerrelm=elm.parentNode.querySelector('.inc_not_found_error')
                                                remerrelm.parentNode.removeChild(remerrelm)
                                            }
                                            elm.parentNode.appendChild(inc_not_found_error);
                                            elm.innerText = "Adaugă în coș";
                                        }

                                        setTimeout(function() {
                                            if (inc_not_found_error != null) {
                                                if (inc_not_found_error.parentNode != null) {
                                                    inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                                                }
                                            }
                                        }, 4000)
                                    }
                                    setTimeout(function() {
                                        if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                            checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                                        }
                                    }, 5000)
                                    break;
                                } else {
                                    if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                        if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                            if (checkadded[er].valid == "CUST_ORD_NOT_ALLOWED") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Nu poti comanda produsul cu acest cod.";
                                                error_val_msg = "Nu poti comanda produsul cu acest cod."
                                            } else if (checkadded[er].valid == "EXCEEDED_LIMIT") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Ai depasit limita permisa";
                                                error_val_msg = "Ai depasit limita permisa";
                                            } else if (checkadded[er].valid == "MAX_QUANTITY") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Nu puteti adauga mai mult de 1 produs.";
                                                error_val_msg = "Nu puteti adauga mai mult de 1 produs.";
                                            } else if (checkadded[er].valid == "NOT_AVAILABLE") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul cu acest cod nu este disponibil.";
                                                error_val_msg = "Produsul cu acest cod nu este disponibil.";
                                            } else if (checkadded[er].valid == "NOT_AVAILABLE_CAMPAIGN") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Aceasta campanie nu este disponibila.";
                                                error_val_msg = "Aceasta campanie nu este disponibila.";
                                            } else if (checkadded[er].valid == "NOT_ELIGIBLE_ACCT_TYPE") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Acest tip de cont nu este eligibil";
                                                error_val_msg = "Acest tip de cont nu este eligibil";
                                            } else if (checkadded[er].valid == "NOT_ELIGIBLE_USER") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Acest tip de utilizator nu este eligibil.";
                                                error_val_msg = "Acest tip de utilizator nu este eligibil.";
                                            } else if (checkadded[er].valid == "NOT_ELIGIBLE_USER_ITEM") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Acest produs nu este disponibil pentru segmentul din care faceti parte.";
                                                error_val_msg = "Acest produs nu este disponibil pentru segmentul din care faceti parte.";
                                            } else if (checkadded[er].valid == "NOT_FOUND") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Acest produs nu a fost gasit in campania curenta.";
                                                error_val_msg = "Acest produs nu a fost gasit in campania curenta.";
                                            } else if (checkadded[er].valid == "NOT_ORDERABLE") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul cu acest cod nu poate fi comandat.";
                                                error_val_msg = "Produsul cu acest cod nu poate fi comandat.";
                                            } else if (checkadded[er].valid == "NO_VALID_ITEM_FOUND") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul nu este valid.";
                                                error_val_msg = "Produsul nu este valid.";
                                            } else if (checkadded[er].valid == "SHORT_ITEM") {
                                                checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul nu este in stoc si nu poate fi comandat.";
                                                error_val_msg = "Produsul nu este in stoc si nu poate fi comandat.";
                                            }
                                            break;
                                        }

                                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:red;font-size:16px;font-weight:bold;')
                                        if (document.querySelector('.inc_popup.active') != null && elm != null) {
                                            var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                                            inc_not_found_error.innerHTML = error_val_msg;
                                            inc_not_found_error.setAttribute('style', 'color:red;font-size:11px;')
                                            if(elm.parentNode.querySelector('.inc_not_found_error') != null){
                                                var remerrelm=elm.parentNode.querySelector('.inc_not_found_error')
                                                remerrelm.parentNode.removeChild(remerrelm)
                                            }
                                            elm.parentNode.appendChild(inc_not_found_error);
                                            elm.innerText = "Adaugă în coș";
                                            setTimeout(function() {
                                                if (inc_not_found_error != null) {
                                                    if (inc_not_found_error.parentNode != null) {
                                                        inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                                                    }
                                                }
                                            }, 4000)
                                        }
                                    }

                                    // edit_btn_show_on_add()
                                    setTimeout(function() {
                                        if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                            checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                                        }
                                        var prev_act_cust_name = ""
                                        if (document.querySelector('.yrOrders-C.active .name') != null) {
                                            prev_act_cust_name = document.querySelector('.yrOrders-C.active .name').innerText.trim();
                                        }
                                        var got_active_cust = null;
                                        var total_cust_ac = document.querySelectorAll('.yrOrders-C')
                                        var current_act = document.querySelector('.yrOrders-C.active .name').innerText.trim();
                                        if (current_act != prev_act_cust_name) {
                                            setTimeout(function() {
                                                for (cc = 0; cc < total_cust_ac.length; cc++) {
                                                    var just_ch_act = total_cust_ac[cc].querySelector('.name').innerText.trim();
                                                    if (just_ch_act == prev_act_cust_name) {
                                                        total_cust_ac[cc].querySelector('.ordfor').click()
                                                        break;
                                                    }
                                                }
                                            }, 100)
                                        }
                                    }, 5000)
                                }

                            } else if (checkadded.length == er + 1) {
                                // console.log("check all l")
                                if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul a fost adăugat în coș";
                                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:#59c3b2;font-size:16px;font-weight:bold;')
                                }
                                if (document.querySelector('.inc_popup.active') != null && elm != null) {
                                    var rem_e = document.querySelector('.inc_popup.active .inc_not_found_error');
                                    if (inc_not_found_error != null) {
                                        rem_e.parentNode.removeChild(rem_e);
                                    }
                                    var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                                    inc_not_found_error.innerHTML = "Produsul a fost adăugat în coș";
                                    inc_not_found_error.setAttribute('style', 'color:#59c3b2;font-size:11px;')
                                    if(elm.parentNode.querySelector('.inc_not_found_error') != null){
                                        var remerrelm=elm.parentNode.querySelector('.inc_not_found_error')
                                        remerrelm.parentNode.removeChild(remerrelm)
                                    }
                                    elm.parentNode.appendChild(inc_not_found_error);
                                    elm.innerText = "Adaugă în coș";
                                    setTimeout(function() {
                                        if (inc_not_found_error != null) {
                                            if (inc_not_found_error.parentNode != null) {
                                                inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                                            }
                                        }
                                    }, 4000)
                                }

                                setTimeout(function() {
                                    if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                                    }
                                }, 5000)
                            }
                        }
                    }, 1500);

                    // sessionStorage.setItem("custData",JSON.stringify(update_sesion_cart_data))
                    if (document.querySelector('#cartbag span') != null) {
                        document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                    }

                    if (document.querySelectorAll('.sub_total_Price')[0] != undefined) {
                        document.querySelectorAll('.sub_total_Price')[0].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    if (document.querySelector('#cartbag span') != null) {
                        var totl_qty = update_mini_basket_qty();
                        if (document.querySelector('.sub_total_text') != null) {
                            document.querySelector('.sub_total_text').innerHTML = bundle_vars.bag_subtotal + "(" + totl_qty + "  " + bundle_vars.item_s + ")";
                        }
                    }
                    if (document.querySelectorAll('.ic_bundle_price_span')[0] != undefined) {
                        document.querySelectorAll('.ic_bundle_price_span')[0].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    if (document.querySelector('.crt-amt') != null) {
                        var cart_amnt = update_mini_basket_price_to_our_bundle()
                        // update_progress_bar_on_load()
                    }
                    if (document.querySelectorAll('.ic_bundle_price_span')[1] != undefined) {
                        document.querySelectorAll('.ic_bundle_price_span')[1].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    var dataList_inc = [];
                    var update_sesion_cart_data = {}
                    var is_flag = false;
                    if (cust_data_online_s.dataList.length > 1) {
                        var all_cust_online = cust_data_online_s.dataList
                        for (ic_o = 0; ic_o < all_cust_online.length; ic_o++) {
                            if (all_cust_online[ic_o].custId == cust_ids) {
                                var curent_data = all_cust_online[ic_o]
                                curent_data.custName = cust_data_online_s.dataList[ic_o].custName
                                curent_data.gendrCd = cust_data_online_s.dataList[ic_o].gendrCd
                                curent_data.custId = cust_data_online_s.dataList[ic_o].custId
                                curent_data.active = cust_data_online_s.dataList[ic_o].active
                                curent_data.amt = result.custOrds[0].totPrc
                                curent_data.nrItems = result.custOrds[0].noOfItems
                                var qtyitem=result.custOrds[0].items.length;
                                var qty_item = 0
                                for(w=0;w<result.custOrds[0].items.length;w++){
                                    qty_item = qty_item + result.custOrds[0].items[w].qty
                                }
                                // curent_data.nrItems = qty_item
                                dataList_inc.push(all_cust_online[ic_o])
                                active_customer_for_added_prod = cust_data_online_s.dataList[ic_o].custName
                                var all_cust_elm = document.querySelectorAll('.yrOrders-C .name');
                                var all_cust_elm_orders = document.querySelectorAll('.yrOrders-C');
                                for (cp = 0; cp < all_cust_elm_orders.length; cp++) {
                                    if (all_cust_elm_orders[cp] != undefined) {
                                        var cust_nm = all_cust_elm_orders[cp].querySelector('.yrOrders-C .name').innerText.trim();
                                        if (cust_nm == inc_cust_name) {
                                            if (all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount') != null) {
                                                all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(result.custOrds[0].totPrc))
                                            }
                                            all_cust_elm_orders[cp].querySelector('.mab-prim-lnk.itcnt').disabled = false;
                                            if (all_cust_elm_orders[cp].querySelector('.edit-txt') == null) {
                                                // window.location.reload();
                                            }
                                            is_flag = true;
                                        }
                                    }
                                }
                            } else {
                                dataList_inc.push(all_cust_online[ic_o])
                            }
                            if (cust_data_online_s.dataList.length == ic_o + 1) {
                                update_sesion_cart_data = {
                                    "dataList": dataList_inc
                                }
                                sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                            }
                        }
                    } else {
                        var all_cust_online = cust_data_online_s.dataList
                        var curent_data = all_cust_online[0]
                        curent_data.custName = cust_data_online_s.dataList[0].custName
                        curent_data.gendrCd = cust_data_online_s.dataList[0].gendrCd
                        curent_data.custId = cust_data_online_s.dataList[0].custId
                        curent_data.active = cust_data_online_s.dataList[0].active
                        curent_data.amt = result.custOrds[0].totPrc
                        active_customer_for_added_prod = cust_data_online_s.dataList[0].custName
                        curent_data.nrItems = result.custOrds[0].noOfItems
                        var qty_item = 0
                        for(w=0;w<result.custOrds[0].items.length;w++){
                            qty_item = qty_item + result.custOrds[0].items[w].qty
                        }
                        // curent_data.nrItems = qty_item
                        dataList_inc.push(all_cust_online[0])
                        update_sesion_cart_data = {
                            "dataList": dataList_inc
                        }
                        sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                        document.querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(result.custOrds[0].totPrc))
                        document.querySelector('.mab-prim-lnk.itcnt').disabled = false;
                        
                    }
                    if(document.querySelector('.inc_popup.active') == null){
                        // window.location.reload()
                    }
                    edit_btn_show_on_add()
                    updateproducttobottom(result,item_added_list)
                    setTimeout(function(){
                        // var count_item=0;
                        // var celcam_count=document.querySelectorAll('.yrOrders-C .mab-prim-lnk.itcnt .lnk-txt')
                        // for(c=0;c<celcam_count.length;c++){
                        //     count_item = count_item + +celcam_count[c].innerText.replace('Celkem','').replace('ks','').trim()
                        // }
                        // if(document.querySelector('#cartbag > span') != null){
                        //     var prev_c=document.querySelector('#cartbag > span').innerText
                        //     if(count_item > prev_c && count_item != 0){
                        //         document.querySelector('#cartbag > span').innerText = count_item
                        //         if(document.querySelector('.sub_total_text') != null){
                        //             document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + count_item + "  " + bundle_vars.item_s + ")";
                        //         }
                        //     }
                        // }
                        if(document.querySelector('#cartbag span') != null){
                            document.querySelector('mini-cart #cartbag').click()
                        }
                        var count_item=0;
                        var celcam_count=document.querySelectorAll('mini-cart .crt-cnt')
                        for(c=0;c<celcam_count.length;c++){
                            count_item = count_item + +celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim()
                            if(document.querySelectorAll('.yrOrders-C .name')[c].innerText.trim() == document.querySelectorAll('mini-cart .usr-nme-mc')[c].innerText.trim()){
                                document.querySelectorAll('.mab-prim-lnk.itcnt .lnk-txt')[c].innerHTML = "Total " + celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim() + "  produse";
                            }
                        }
                        if(document.querySelector('#cartbag > span') != null){
                            var prev_c=document.querySelector('#cartbag > span').innerText
                            document.querySelector('#cartbag > span').innerText = count_item
                            if(document.querySelector('.sub_total_text') != null){
                                document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + count_item + "  " + bundle_vars.item_s + ")";
                            }
                        }
                        setTimeout(function(){
                            count_based_on_item()
                        },2000)
                    },3000)
                }
            } else {
                console.log("xhr.response " + xhr.response)
                setTimeout(function() {
                    if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                        document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                    }
                }, 800)
                var checkout_wrapper = elm.parentNode.parentNode.parentNode;
                setTimeout(function() {
                    if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null && document.querySelector('.ic_quick_view_popup.active') == null) {
                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul nu a fost adăugat în coș"
                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:red !important;font-size:16px;font-weight:bold;')
                    }
                }, 1500);
                if (document.querySelector('.inc_popup.active') != null && elm != null) {
                    var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                    inc_not_found_error.innerHTML = "Produsul a fost adăugat în coș";
                    inc_not_found_error.setAttribute('style', 'color:red !important;font-size:11px;')
                    if(elm.parentNode.querySelector('.inc_not_found_error') != null){
                        var remerrelm=elm.parentNode.querySelector('.inc_not_found_error')
                        remerrelm.parentNode.removeChild(remerrelm)
                    }
                    elm.parentNode.appendChild(inc_not_found_error);
                    elm.innerText = "Adaugă în coș";
                    setTimeout(function() {
                        if (inc_not_found_error != null) {
                            inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                        }
                    }, 4000)
                }
                setTimeout(function() {
                    if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                        checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                    }

                }, 5000)

            }
            setTimeout(function(){
                if(document.querySelector('.ic_quick_view_popup.active .inc_icon_close') != null){
                    document.querySelector('.ic_quick_view_popup.active .inc_icon_close').click()
                }
            },4000)
        }
        try {
            xhr.send(JSON.stringify(formData));
        } catch (err) {
            console.log("network error")
            setTimeout(function() {
                if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                    document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                }
            }, 800)
            var checkout_wrapper = elm.parentNode.parentNode.parentNode;
            setTimeout(function() {
                if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = "Produsul nu a fost adăugat în coș"
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').setAttribute('style', 'color:red !important;font-size:16px;font-weight:bold;')
                }
                if (document.querySelector('.inc_popup.active') != null && elm != null) {
                    var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                    inc_not_found_error.innerHTML = "Produsul nu a fost adăugat în coș"
                    inc_not_found_error.setAttribute('style', 'color:red !important;font-size:11px;')
                    if(elm.parentNode.querySelector('.inc_not_found_error') != null){
                        var remerrelm=elm.parentNode.querySelector('.inc_not_found_error')
                        remerrelm.parentNode.removeChild(remerrelm)
                    }
                    elm.parentNode.appendChild(inc_not_found_error);
                    elm.innerText = "Adaugă în coș";
                    setTimeout(function() {
                        if (inc_not_found_error != null) {
                            inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                        }
                    }, 4000)
                }
                if (document.querySelector('.inc_popup.active') != null) {
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn span').innerHTML = "Produsul nu a fost adăugat în coș";
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn').setAttribute('style', 'background: #e893ac;pointer-events: none;');
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn span').setAttribute('style', 'font-size:10px;line-height: normal;');
                }
            }, 1500);
            setTimeout(function() {
                if(document.querySelector('.ic_quick_view_popup.active .inc_icon_close') != null){
                    document.querySelector('.ic_quick_view_popup.active .inc_icon_close').click()
                }
                if (checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error') != null) {
                    checkout_wrapper.querySelector('.ic_prod_add_error_wrap .ic_prod_add_error').innerHTML = ""
                }
                if (document.querySelector('.inc_popup.active') != null) {
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn span').innerHTML = "Adaugă în coș";
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn').setAttribute('style', 'background: #ff336d;pointer-events: auto;');
                    checkout_wrapper.querySelector('.inc_add_to_basket_btn span').setAttribute('style', 'font-size:14px;line-height: normal;');
                }
            }, 5000)
        }
    }
}


function add_to_cart_ajax_result(source, bundleId, id1, id2, plp_elem, new_temp, qty_main) {
    if (source != "client_btn" || source != "plp_btn") {
        if (switch_board.tracking && new_temp != "new_temp") {
            add_to_cart_tracking(bundle_vars.ids_to_exclude[0], bundle_vars.ids_to_exclude[1], bundleId, source);
        } else if (new_temp == "new_temp" && switch_board.its_pdp_page) {
            add_to_cart_tracking_multiple(source);
        }
    }
    if (source != "cart_btn" && source != "modal_btn" && !switch_board.its_cart_page) {
        var btn = bundle_vars.clicked_btn;
        btn.classList.add("added_text_wrap");

    }

}



// Tracking Functions: START
function trackProductNavigation(clickedProduct, productUrl) {
    if (switch_board.tracking) {
        var coreProductIds = "0";
        var eventdata = "";
        var pageType = 0;
        getTrackingPixel();
        if (switch_board.its_plp_page) {
            pageType = "101";
            eventdata = {
                "product_id": clickedProduct.toString(),
                "core_product_id": bundle_vars.plp_added_id.toString()
            }
        } else if (switch_board.its_pdp_page) {
            pageType = "100"
            if (bundle_vars.load_type == "btn_click") {
                pageType = "107"
            }
            eventdata = {
                "product_id": clickedProduct.toString(),
                "core_product_id": client_vars.product_ids[0].toString()
            }
        }
        if (switch_board.its_cart_page) {
            pageType = "103"
            eventdata = {
                "product_id": clickedProduct.toString(),
                "core_product_id": null
            }
        }
        if (document.querySelector('.inc_popup.active') != null) {
            pageType = "107";
        }
        if (switch_board.tracking) {
            var trackData = {
                "eventData": String(btoa(JSON.stringify({
                    "event_data": eventdata,
                    "page_type": pageType,
                    "event_type": "bundle_product_click_tracking",
                    "is_logged": '',
                    "method": "track",
                    "platform": "",
                    "token": client_vars.api_key
                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            }
            makeTrackingApiCall(JSON.stringify(trackData))
        }
        setTimeout(function() {
            window.location.href = productUrl
        }, 600)
        return false;
    }
}

function makeTrackingApiCall(eventdata) {
    //console.log("TRACKING");
    p_url = '//optimizedby.increasingly.co/ImportData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } else {
                    //console.log(xhr);
                }
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}


function add_to_cart_tracking(id1, id2, bundleId, source) {
    var tids = ""
    if(source == "cart_btn"){
        if(document.querySelector('.inc_popup.active') != null){
            tids = 3
        }else{
            tids = 1
        }
    }else if(source == "INCLINE"){
        tids = 2
    }
    if (bundle_vars.event_type == undefined || bundle_vars.event_type == null) {
        bundle_vars.event_type = "bundle_add_to_cart";
    }
    var core_prod_id = "";
    var productIdsforTracking = []
    if (switch_board.its_plp_page) {
        productIdsforTracking.push(bundle_vars.plp_added_id.toString());
        core_prod_id = bundle_vars.plp_added_id;
    } else if (switch_board.its_pdp_page) {
        //client_vars.product_ids[0]
        productIdsforTracking.push(client_vars.product_ids[0].toString());
        core_prod_id = client_vars.product_ids[0];
    } else if (switch_board.its_cart_page) {
        productIdsforTracking.push(client_vars.product_ids[0].toString());
        core_prod_id = id1.toString();
    }

    if (id2) {
        productIdsforTracking.push(id2.toString());
    } else {
        productIdsforTracking.push(id1.toString());
    }
    var eventdata = {}
    var pageType = 100;
    if (switch_board.its_plp_page && !bundle_vars.pdp_client_btn) {
        pageType = "101";
    } else if (switch_board.its_pdp_page && source != "modal_btn" && !bundle_vars.pdp_client_btn) {
        pageType = "100";
    } else if (switch_board.its_cart_page && source != "modal_btn" && !bundle_vars.pdp_client_btn) {
        pageType = "103";
    } else {
        pageType = "107";
    }
    if (switch_board.its_cart_page) {
        pageType = "103";
    }
    if (document.querySelector('.inc_popup.active') != null) {
        pageType = "107";
    }
    if (bundle_vars.event_type == "product_deal_add_to_cart") {
        eventdata = {
            "core_product_id": core_prod_id.toString(),
            "product_id": id1.toString(),
            "is_logged_in_user": "0"
        }
        data = {
            "eventData": btoa((JSON.stringify({
                "event_data": eventdata,
                "page_type": pageType.toString(),
                "event_type": bundle_vars.event_type,
                "method": "track",
                "platform": "",
                "tid":tids,
                "token": client_vars.api_key
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
    } else {
        eventdata = {
            "id": bundleId,
            "product_ids": productIdsforTracking,
            "product_id": core_prod_id.toString()
        }
        data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "bundle_data": eventdata
                },
                "page_type": pageType.toString(),
                "event_type": bundle_vars.event_type,
                "method": "track",
                "platform": "",
                "tid":tids,
                "token": client_vars.api_key
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
    }
    makeTrackingApiCall(JSON.stringify(data));
    // getTrackingPixel();
    setTimeout(function() {
        if (switch_board.its_cart_page) {
            // window.location.reload()
        }
    }, 100)
}

function add_to_cart_tracking_multiple(source) {
    var tids = ""
    if(source == "cart_btn"){
        if(document.querySelector('.inc_popup.active') != null){
            tids = 3
        }else{
            tids = 1
        }
    }else if(source == "INCLINE"){
        tids = 2
    }
    if (bundle_vars.event_type == undefined || bundle_vars.event_type == null) {
        bundle_vars.event_type = "bundle_add_to_cart";
    }
    if(client_vars.product_ids[0] == undefined && document.querySelector('.prod_sku') != null){
        client_vars.product_ids[0] = document.querySelector('.prod_sku').innerText
    }
    if(client_vars.product_ids[0] != undefined){
        var core_prod_id = "";
        var productIdsforTracking = []
        core_prod_id = client_vars.product_ids[0];

        pageType = "100";
        // eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
        var all_data = [];
        for (var k = 0; k < bundle_vars.push_product_to_add.length; k++) {
            if (bundle_vars.push_product_to_add.length == 1) {
                productIdsforTracking.push(client_vars.product_ids[0].toString())
                productIdsforTracking.push(bundle_vars.push_product_to_add[k].id.toString())
                all_data.push({
                    id: parseInt(bundle_vars.push_product_to_add[k].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id.toString()
                })
                productIdsforTracking = []
            } else {
                if (client_vars.product_ids[0] != bundle_vars.push_product_to_add[k].id.toString()) {
                    productIdsforTracking.push(client_vars.product_ids[0].toString())
                    productIdsforTracking.push(bundle_vars.push_product_to_add[k].id.toString())
                    all_data.push({
                        id: parseInt(bundle_vars.push_product_to_add[k].bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id.toString()
                    })
                    productIdsforTracking = []
                }
            }
        }
        data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "bundle_data": all_data
                },
                "page_type": pageType.toString(),
                "event_type": bundle_vars.event_type,
                "method": "track",
                "platform": "",
                "tid":tids,
                "token": client_vars.api_key,
                "mb": "1"
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));
    }
}

function getTrackingPixel(url) {
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
    console.log("TRACKING: CLICK")
    // }
}

function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}
// Tracking Functions: END
/*---------------------Cookie Utility-------------------------------------*/
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

function generateIcid() {
    rvid = randomIvid(42, 16);
    return rvid;
}

function getVisitorId() {
    var clientDomain = window.location.host.replace("www", "");
    if (readCookie('ivid') == undefined || readCookie('ivid') == '' || readCookie('ivid') == null || readCookie('ivid') == 'null') {
        client_vars.vid = ((readCookie('ivid') == undefined) || readCookie('ivid') == '' || (readCookie('ivid') == 'null')) ? generateIcid() : readCookie('ivid');
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + client_vars.vid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + false + ';'
    }

}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
    //return "57d8291aa1b1394249db663c3dee77e25b166e5aba";
}
var is_visible_elem_counter = 0;

function sorting_data(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    json_object.sort(sortByKey);
}

function check_currency_symb(a) {
    return a.toLocaleString('ro-RO', {
        style: 'currency',
        currency: 'Lei',
        symbolPosition: 'end',
        minimumFractionDigits: 2,
        currencyDisplay: 'name',
    }).replace('LEI','Lei').replace('.','*').replace(',','.').replace('*',',').replace('de','');
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key],
            y = b[key];
        if (typeof x === 'string') {
            x = x.toLowerCase();
            y = y.toLowerCase();
            if (!isNaN(x) && !isNaN(y)) {
                x = parseInt(x, 10);
                y = parseInt(y, 10);
            }
        }
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
}



document.onclick = clickListener;

function clickListener(e) {
    var clickedElement = (window.event) ?
        window.event.srcElement :
        e.target,
        tags = document.getElementsByTagName(clickedElement.tagName);
        
    if(clickedElement.parentNode != null){
        if(clickedElement.parentNode.parentNode != null){
            if(clickedElement.parentNode.parentNode.parentNode != null){
                if(clickedElement.parentNode.parentNode.parentNode.parentNode != null){
                    if(clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode != null){
                        if(clickedElement.classList != undefined){ 
                            if(clickedElement.parentNode.classList != undefined){
                                if(clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode != null){
                                    if(clickedElement.parentNode.parentNode.parentNode.classList != undefined){
                                        if(clickedElement.parentNode.parentNode.parentNode.parentNode.classList != undefined){
                                            if(clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.classList != undefined){
                                                if(clickedElement.classList.contains('yrOrders-C') == true || clickedElement.parentNode.classList.contains('yrOrders-C') == true || clickedElement.parentNode.parentNode.classList.contains('yrOrders-C') == true || clickedElement.parentNode.parentNode.parentNode.classList.contains('yrOrders-C') == true || clickedElement.parentNode.parentNode.parentNode.parentNode.classList.contains('yrOrders-C') == true || clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('yrOrders-C') == true){
                                                    setTimeout(function(){
                                                        if(session_data != ""){
                                                            // sessionStorage.setItem("custData",JSON.stringify(session_data))
                                                            // if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                                                                if(session_data != ""){
                                                                    var cust_data_online_s = JSON.parse(sessionStorage.getItem("custData"))
                                                                    var dataList_inc = [];
                                                                    var update_sesion_cart_data = {}
                                                                    var is_flag = false;
                                                                    if (cust_data_online_s.dataList.length > 1) {
                                                                        var all_cust_online = cust_data_online_s.dataList
                                                                        var sesiond=session_data.dataList
                                                                        var customerpushed=[]
                                                                        for (v = 0; v < sesiond.length; v++) {
                                                                            for (ic_o = 0; ic_o < all_cust_online.length; ic_o++) {
                                                                                if (all_cust_online[ic_o].custId == sesiond[v].custId) {
                                                                                    var curent_data = all_cust_online[ic_o]
                                                                                    curent_data.custName = cust_data_online_s.dataList[ic_o].custName
                                                                                    curent_data.gendrCd = cust_data_online_s.dataList[ic_o].gendrCd
                                                                                    curent_data.custId = cust_data_online_s.dataList[ic_o].custId
                                                                                    curent_data.active = cust_data_online_s.dataList[ic_o].active
                                                                                    curent_data.amt = sesiond[v].amt
                                                                                    curent_data.nrItems = sesiond[v].nrItems
                                                                                    
                                                                                    if(customerpushed.indexOf(all_cust_online[ic_o].custId) == -1){
                                                                                        customerpushed.push(all_cust_online[ic_o].custId)
                                                                                        dataList_inc.push(all_cust_online[ic_o])
                                                                                    }
                                                                                } else {
                                                                                    if(customerpushed.indexOf(all_cust_online[ic_o].custId) == -1){
                                                                                        customerpushed.push(all_cust_online[ic_o].custId)
                                                                                        dataList_inc.push(all_cust_online[ic_o])
                                                                                    }
                                                                                }
                                                                                if (cust_data_online_s.dataList.length == ic_o + 1) {
                                                                                    update_sesion_cart_data = {
                                                                                        "dataList": dataList_inc
                                                                                    }
                                                                                    // sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                                                                                    
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            // }
                                                        }
                                                    },200)
                                                }else{
                                                    if(clickedElement.classList.contains('addConBtn') == false){
                                                        session_data = JSON.parse(sessionStorage.getItem("custData"))
                                                    }
                                                    if(clickedElement.classList.contains('addConBtn') == true && cust_html_bootm != null){
                                                        if(document.querySelector('.mycn-names.slctd-cnctn .mycn-nm') != null){
                                                            var sel_cl_name = document.querySelector('.mycn-names.slctd-cnctn .mycn-nm').textContent.trim()
                                                        }else{
                                                            sel_cl_name = ""
                                                        }
                                                        
                                                        var el = document.createElement('div')
                                                        el.innerHTML=cust_html_bootm
                                                        var all_inc = el.querySelectorAll('.yrOrders-C')
                                                        for(al=0;al<all_inc.length;al++){
                                                            var domel=document.querySelectorAll('.yrOrders-C')
                                                            for(dl=0;dl<domel.length;dl++){
                                                                //lastadded_product != domel[dl].querySelector('.name').innerText.trim()
                                                                if(all_inc[al].querySelector('.name').innerText.trim() == domel[dl].querySelector('.name').innerText.trim()){
                                                                    var allincel=all_inc[al].querySelectorAll('.ordItems .inc_add_item')
                                                                    domel[dl].querySelector('.mab-prim-lnk.itcnt span').innerText = all_inc[al].querySelector('.mab-prim-lnk.itcnt span').innerText
                                                                    for(ic=0;ic<allincel.length;ic++){
                                                                        var siblact=domel[dl].querySelector('.ordItems')
                                                                        var creatediv=document.createElement('div')
                                                                        creatediv.innerHTML = allincel[ic].innerHTML
                                                                        // siblact.appendChild(creatediv)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(session_data != ""){
                                                            var cust_data_online_s = JSON.parse(sessionStorage.getItem("custData"))
                                                            var dataList_inc = [];
                                                            var update_sesion_cart_data = {}
                                                            var is_flag = false;
                                                            if (cust_data_online_s.dataList.length > 1) {
                                                                var all_cust_online = cust_data_online_s.dataList
                                                                var sesiond=session_data.dataList
                                                                var customerpushed=[]
                                                                for (v = 0; v < sesiond.length; v++) {
                                                                    for (ic_o = 0; ic_o < all_cust_online.length; ic_o++) {
                                                                        if (all_cust_online[ic_o].custId == sesiond[v].custId) {
                                                                            var curent_data = all_cust_online[ic_o]
                                                                            curent_data.custName = cust_data_online_s.dataList[ic_o].custName
                                                                            curent_data.gendrCd = cust_data_online_s.dataList[ic_o].gendrCd
                                                                            curent_data.custId = cust_data_online_s.dataList[ic_o].custId
                                                                            curent_data.active = cust_data_online_s.dataList[ic_o].active
                                                                            curent_data.amt = sesiond[v].amt
                                                                            curent_data.nrItems = sesiond[v].nrItems
                                                                            
                                                                            if(customerpushed.indexOf(all_cust_online[ic_o].custId) == -1){
                                                                                customerpushed.push(all_cust_online[ic_o].custId)
                                                                                dataList_inc.push(all_cust_online[ic_o])
                                                                            }
                                                                        } else {
                                                                            if(customerpushed.indexOf(all_cust_online[ic_o].custId) == -1){
                                                                                customerpushed.push(all_cust_online[ic_o].custId)
                                                                                dataList_inc.push(all_cust_online[ic_o])
                                                                            }
                                                                        }
                                                                        if (cust_data_online_s.dataList.length == ic_o + 1) {
                                                                            update_sesion_cart_data = {
                                                                                "dataList": dataList_inc
                                                                            }
                                                                            // sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                                                                            
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        setTimeout(function(){
                                                            count_based_on_item()
                                                        },2000)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if(clickedElement.parentNode.parentNode.querySelector('.mycn-nm') != null && clickedElement.classList.contains('addConBtn') == false){
                        if(document.querySelector('.yrOrders-wrap') != null){
                            cust_html_bootm = document.querySelector('.yrOrders-wrap').innerHTML
                        }
                        session_data = JSON.parse(sessionStorage.getItem("custData"))
                    }
                }
            }
        }
        if(clickedElement.parentNode.id == "cartbag" || clickedElement.id == "cartbag"){
            setTimeout(function(){
                count_based_on_item()
            },500)
        }

        if (clickedElement.id == "inc_sku_fbt") {
            if (clickedElement.className == "increasingly_bundles active") {
                if(document.querySelector('.ic_quick_view_popup.active') != null){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                        document.querySelector('.ic_quick_view_popup.active').style.display = "none"
                    }
                    document.querySelector('.ic_quick_view_popup.active').classList.remove('active');
                }
                
                clickedElement.classList.remove('active');
                if (document.querySelector('.pSrch-row.active') != null) {
                    document.querySelector('.pSrch-row.active').classList.remove('active');
                }
                document.querySelector('body').classList.remove('fbt_active')
                document.querySelector('body').classList.remove('quick_view_active')
            }
        }
        if (clickedElement.parentNode.className != "fbt_bundle_text" && clickedElement.className != "fbt_bundle_text" && clickedElement.id != "inc_fbt_layout" && clickedElement.className != "prod_sku" && clickedElement.className != "product_amount" && clickedElement.className != "prod_quick_view" && clickedElement.className != "ic_product_bundling is_product active" && clickedElement.className != "ic_product_bundling active" && clickedElement.id != "inc_previous" && clickedElement.id != "inc_next" && clickedElement.className != "div_ftb_arrow" && clickedElement.className != "ps-lnInpt" && clickedElement.parentNode.className != "ic_conf_close_header" && clickedElement.className != "ic_conf_close_header" && clickedElement.className != "ic_quick_view_overlay" && clickedElement.getAttribute('onclick') != "combo_tab_click(this)" && clickedElement.className != "fbt_wrap" && clickedElement.className != "counter_div" && clickedElement.getAttribute('onchange') != "quantity_input_change(this);" && clickedElement.innerText != "Adăugate" && clickedElement.innerText != "Actualizări" && clickedElement.className != "q_holder") {
            if (clickedElement.parentNode.className != "q_holder" && clickedElement.className != "inc_icon_pluss" && clickedElement.className != "inc_icon_minuss" && clickedElement.className != "prod_quick_view fbt_btn" && clickedElement.className != "ic_bundle" && clickedElement.className != "org_prc_wrap" && clickedElement.className != "ic_product simple" && clickedElement.parentNode.className != "fbt_wrap" && clickedElement.className != "pdt_img main_pdt_img" && clickedElement.className != "info_wrap" && clickedElement.className != "ic_product configurable" && clickedElement.className != "ic_product simple" && clickedElement.className != "prod_sku_wraper" && clickedElement.className != "fbt_bundle_header" && clickedElement.className != "ic_product_wrapper" && clickedElement.parentNode.className != "dots_ic_bundle" && clickedElement.classList.contains('product_amount') == false && clickedElement.className != "spec_amount" && clickedElement.className != "ic_prod_details") {
                if (document.querySelector('#inc_sku_fbt.active .fbt_bundle_close') != null && document.querySelector('.ic_quick_view_popup.active') == null && clickedElement.classList.contains('color_tag') == false && clickedElement.classList.contains('color_img') == false && clickedElement.classList.contains('color_size_li') == false && onload_var == true && clickedElement.classList.contains('ic_product') == false) {
                    document.querySelector('#inc_sku_fbt.active .fbt_bundle_close').click()
                }
            }
        }
        //&& clickedElement.tagName != "IMG"//&& clickedElement.tagName != "A"
        if(clickedElement.parentNode != null){
            if(clickedElement.parentNode.parentNode != null){
                if(clickedElement.parentNode.parentNode.parentNode != null){
                    if(clickedElement.parentNode.parentNode.parentNode.parentNode != null){
                        if ((clickedElement.className.indexOf('fbt_btn') == -1 && clickedElement.className.indexOf('prod_quick_view') >= 0) || (clickedElement.id == "inc_next" && clickedElement.parentNode.parentNode.parentNode.parentNode.id != "inc_fbt_layout") || (clickedElement.id == "inc_previous" && clickedElement.parentNode.parentNode.parentNode.parentNode.id != "inc_fbt_layout")) {
                            if (document.querySelector('#inc_sku_fbt.active .fbt_bundle_close') != null) {
                                document.querySelector('#inc_sku_fbt.active .fbt_bundle_close').click()
                            }
                        }
                        if (clickedElement.parentNode.parentNode != null) {
                            if (clickedElement.parentNode.parentNode.parentNode != null) {
                                if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                                    if (clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode != null) {
                                        if (clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode != null) {
                                            if (clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode != null) {
                                                if (clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode != null) {
                                                    if (clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "increasingly_element" || clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "increasingly_element") {
                                                        if (document.querySelector('#inc_sku_fbt.active .fbt_bundle_close') != null) {
                                                            document.querySelector('#inc_sku_fbt.active .fbt_bundle_close').click()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (clickedElement.parentNode.className == "ps-dltBtn" || clickedElement.className == "ps-dltBtn") {
            if (clickedElement.className == "ps-dltBtn") {
                var elm_fbt_r = clickedElement.parentNode.parentNode
            } else {
                var elm_fbt_r = clickedElement.parentNode.parentNode.parentNode
            }
            var fbt_input = elm_fbt_r.querySelector('input');
            var fbt_rem = elm_fbt_r.querySelector('#inc_sku_fbt');

            if (fbt_rem != null) {
                if (elm_fbt_r.querySelector('input') != null) {
                    var pid = fbt_rem.getAttribute('sku')
                    bundle_vars.sku_irb_product_list;
                    Array.prototype.remove_prod_list = function() {
                        var what, a = arguments,
                            L = a.length,
                            ax;
                        while (L && this.length) {
                            what = a[--L];
                            while ((ax = this.indexOf(what)) !== -1) {
                                this.splice(ax, 1);
                            }
                        }
                        return this;
                    };
                    bundle_vars.sku_irb_product_list.remove_prod_list(pid);
                }
                console.log("pid " + pid)
                //keydown keyup 
                $(fbt_input).bind('change', function(e) {
                    s = $(this).val();
                    call_api_falg = true;
                    var elm = e.target
                     alltabentryid=[]
                    var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                    for(b=0;b<addedtab.length;b++){
                        if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                            if(addedtab[b].value.length == 5){
                                alltabentryid.push(addedtab[b].value)
                            }
                        }
                    }
                    // if(client_vars.product_ids[0] != e.target.value){
                        if (bundle_vars.modal_btn_clicked == true) {
                            bundle_vars.modal_btn_clicked = false
                        }
                        bundle_vars.call_irb_trigger = true
                        bundle_vars.fbt_input_tag = e.target
                        var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                        if (fbt_rem != null) {
                            fbt_rem.parentNode.removeChild(fbt_rem);
                        }
                        setTimeout(function() {
                            if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                                if (call_api_falg) {
                                    call_irb_api();
                                }
                            }
                        }, 500);
                    // }
                });
                document.querySelector('body').classList.remove('fbt_bundles')
                fbt_rem.parentNode.removeChild(fbt_rem);
            }
            if (document.querySelector('#inc_sku_fbt') == null) {
                if (document.querySelector('.ic_added_item_block_container') != null) {
                    var also_add_cont = document.querySelector('.ic_added_item_block_container');
                    if (also_add_cont != null) {
                        also_add_cont.parentNode.removeChild(also_add_cont);
                    }
                }
            }
        }
        if (clickedElement.tagName == "BODY" && document.querySelector('#ic_bundle_popup.active') == null) {
            if (document.querySelector('body.quick_view_active') != null) {
                if (document.querySelector('.ic_quick_view.active') != undefined) {
                    document.querySelector('.ic_quick_view.active').classList.remove('active')
                }
                if (document.querySelector('.ic_quick_view_popup.active') != null) {
                    if (document.querySelector('body.modal-open') != null) {
                        document.querySelector('body.modal-open').classList.remove('modal-open')
                    }
                    document.querySelector('.ic_quick_view_popup.active').classList.remove('active')
                }
                document.querySelector('body').classList.remove('quick_view_active')
            }
        }
        if (clickedElement.className == "inc_popup active") {
            // edit_btn_show_on_add()
            document.querySelector('#ic_bundle_popup.active').classList.remove('active')
            document.querySelector('body').classList.remove('active_popup')
            setTimeout(function() {
                if (document.querySelector('body.modal-open') != null) {
                    document.querySelector('body.modal-open').classList.remove('modal-open')
                    document.querySelector('body').setAttribute('style', '');
                }
            }, 500)
            bundle_vars.sku_irb_product_list = []
            // window.location.reload()
            if(typeof($) != "undefined"){
                $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                    s = $(this).val();
                    call_api_falg = true;
                    var elm = e.target
                    alltabentryid=[]
                    var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                    for(b=0;b<addedtab.length;b++){
                        if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                            if(addedtab[b].value.length == 5){
                                alltabentryid.push(addedtab[b].value)
                            }
                        }
                    }
                    // if(client_vars.product_ids[0] != e.target.value){
                        if (bundle_vars.modal_btn_clicked == true) {
                            bundle_vars.modal_btn_clicked = false
                        }
                        bundle_vars.call_irb_trigger = true
                        bundle_vars.fbt_input_tag = e.target
                        var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                        if (fbt_rem != null) {
                            fbt_rem.parentNode.removeChild(fbt_rem);
                        }
                        setTimeout(function() {
                            if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                                if (call_api_falg) {
                                    call_irb_api();
                                }
                            }
                        }, 500);
                    // }
                });
            };
        }
        if (window.innerWidth < 767 && bundle_vars.is_event_added) {
            if (clickedElement.name = "tabEntry") {
                bundle_vars.is_event_added = false;
                if(typeof($) != "undefined"){
                    $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                        s = $(this).val();
                        call_api_falg = true;
                        var elm = e.target
                         alltabentryid=[]
                        var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                        for(b=0;b<addedtab.length;b++){
                            if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                                if(addedtab[b].value.length == 5){
                                    alltabentryid.push(addedtab[b].value)
                                }
                            }
                        }
                        // if(client_vars.product_ids[0] != e.target.value){
                            if (bundle_vars.modal_btn_clicked == true) {
                                bundle_vars.modal_btn_clicked = false
                            }
                            bundle_vars.call_irb_trigger = true
                            bundle_vars.fbt_input_tag = e.target
                            var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                            if (fbt_rem != null) {
                                fbt_rem.parentNode.removeChild(fbt_rem);
                            }
                            setTimeout(function() {
                                if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                                    if (call_api_falg) {
                                        call_irb_api();
                                    }
                                }
                            }, 500);
                        // }
                    });
                };
            }
        }

        if (clickedElement.className == "color_size_variants_wrapper active") {
            clickedElement.classList.remove('active')
            clickedElement.parentNode.classList.remove('active')
        }
        //order update
        if (clickedElement.className == "avn-prim-btn ordrUpdt") {
            if(window.innerWidth > 1200){
                modalpopupreinit()
            }
            var get_allinc_added_prod_el=document.querySelectorAll('.inc_add_item')
            if(document.querySelector('.yrOrders-C.active .amount') != null){
                var actp=document.querySelector('.yrOrders-C.active .amount').innerText.replace('lei','').replace(',','.').trim()
            }else{
                var actp=null
            }
            for(r=0;r<get_allinc_added_prod_el.length;r++){
                var remel = get_allinc_added_prod_el[r]
                if(remel != null && remel != undefined){
                    remel.parentNode.removeChild(remel)
                }
            }
            
            if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                var pidadded = ""
                for(j=0;j<bundle_vars.push_product_to_add.length;j++){
                    if(j == 0){
                        if(bundle_vars.push_product_to_add[j].c_pid != null){
                            pidadded = bundle_vars.push_product_to_add[j].c_pid
                        }else{
                            pidadded = bundle_vars.push_product_to_add[j].id
                        }
                    }else{
                        if(bundle_vars.push_product_to_add[j].c_pid != null){
                            pidadded = pidadded + ", " + bundle_vars.push_product_to_add[j].c_pid
                        }else{
                            pidadded = pidadded + ", " + bundle_vars.push_product_to_add[j].id
                        }
                    }
                }
                //shared-bnr mab-msg
                if(pidadded != ""){
                    document.querySelector('#shared-banner .bnr-msg').innerText = "Продукт с код за поръчка " + pidadded + " беше добавен към поръчката"
                    document.querySelector('#shared-banner').classList.add('mab-msg')
                    document.querySelector('#shared-banner').style.display = "block"
                    setTimeout(function(){
                        document.querySelector('#shared-banner').classList.remove('mab-msg')
                        document.querySelector('#shared-banner').style.display = "none"
                    },3000)
                }
                setTimeout(function(){
                    if(window.innerWidth > 1200){
                        update_call_flag=true;
                        if (document.querySelector('#co-mobMenu .ordr-date') == null) {
                            setTimeout(function() {
                                fbt_add_to_cart()
                            }, 3000)
                        } else {
                            fbt_add_to_cart()
                        }
                    }
                    bundle_vars.modal_btn_clicked = true;
                    var timer_count = 0;
                    var check_popup = setInterval(function() {
                        timer_count++
                        if(window.innerWidth < 768){
                            clearInterval(check_popup)
                        }
                        if(pidadded != ""){
                            // document.querySelector('#shared-banner .bnr-msg').innerText = "Продукт с код за поръчка " + pidadded + " беше добавен към поръчката"
                            // document.querySelector('#shared-banner').classList.add('mab-msg')
                            // document.querySelector('#shared-banner').style.display = "block"
                            // setTimeout(function(){
                            //     document.querySelector('#shared-banner').classList.remove('mab-msg')
                            //     document.querySelector('#shared-banner').style.display = "none"
                            // },2000)
                        }else{
                            setTimeout(function(){
                                document.querySelector('#shared-banner').classList.remove('mab-msg')
                                document.querySelector('#shared-banner').style.display = "none"
                            },3000)
                        }
                        if (document.querySelector('#ic_bundle_popup .ic_bundle_wrapper') != null && window.innerWidth > 1200) {
                            clearInterval(check_popup)
                            if (bundle_vars.modal_btn_clicked == true) {
                                if (document.querySelector('#cartbag span') != null) {
                                    if (document.querySelector('.inc_popup') != null) {
                                        if (document.querySelector('.inc_popup .ic_product_bundling.active') != null) {
                                            document.querySelector('.inc_popup .ic_product_bundling.active').classList.remove('active')
                                            if (document.querySelector('.inc_popup .dots_ic_bundle li.active') != null) {
                                                document.querySelector('.inc_popup .dots_ic_bundle li.active').classList.remove('active')
                                                document.querySelector('.inc_popup .dots_ic_bundle li').classList.add('active')
                                            }
                                            document.querySelector('.inc_popup .ic_product_bundling').classList.add('active')
                                        }
                                        if (document.querySelector('.inc_popup .nav_wrap_price_wrapper') != null) {
                                            document.querySelector('.inc_popup .nav_wrap_price_wrapper').style.display = "none"
                                            document.querySelector('.inc_popup .loader_wait_span').style.display = "flex"
                                        }
                                        document.querySelector('.inc_popup').classList.add('active')
                                        popup_disable_product_oss_attributes()
                                        
                                    }
                                    if (document.querySelector('body.active_popup') == null) {
                                        document.querySelector('body').classList.add('active_popup')
                                    }
                                }
                                setTimeout(function(){
                                    if(document.querySelector('.added_list_item_wrapper') == null && document.querySelectorAll('.ordItems .pr-items').length > 1){
                                        update_progress_bar_on_load("update");
                                    }else if (document.querySelector('#cartbag span') == null) {
                                        update_progress_bar_on_load("update");
                                    }
                                },2000)
                            }
                            popup_disable_product_oss_attributes()
                        }else {
                            if(window.innerWidth < 1200){
                                clearInterval(check_popup)
                                setTimeout(function(){
                                    if(document.querySelector('.added_list_item_wrapper') == null && document.querySelectorAll('.ordItems .pr-items').length > 1){
                                        update_progress_bar_on_load("update");
                                    }else if (document.querySelector('#cartbag span') == null) {
                                        update_progress_bar_on_load("update");
                                    }
                                },2000)
                            }else{
                                if (timer_count * 100 > 20000) {
                                    clearInterval(check_popup)
                                }
                            }
                        }
                        if (document.querySelector('.crt-amt') != null) {
                            var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                            if (document.querySelector('.sub_total_Price') != null) {
                                document.querySelector('.sub_total_Price').innerHTML = cart_amnt.toLowerCase();
                            }
                        }
                        if (document.querySelector('.crt-amt') != null) {
                            var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                            if (document.querySelector('.ic_bundle_price_span') != null) {
                                document.querySelector('.ic_bundle_price_span').innerHTML = cart_amnt;
                            }
                        }
                        
                        setTimeout(function() {
                            var cc=update_mini_basket_qty()
                            var orderc = document.querySelectorAll('.ordItems')
                            if(orderc.length == 1){
                                document.querySelector('.mab-prim-lnk.itcnt .lnk-txt').innerHTML = "Total " + cc + " produse";
                                if(window.innerWidth < 767){
                                    if (document.querySelector('#cartbag span') != null) {
                                        document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                                    }
                                }
                            }
                            count_based_on_item()
                            // update_progress_bar_on_load("update");
                        }, 5000)
                    }, 1000)
                },2000)
            }else {
                setTimeout(function(){
                    count_based_on_item()
                    if(actp == 0){
                        // window.location.reload()
                    }
                },2000)
            }
        }
        if (clickedElement.className == "ic_quick_view_popup active") {
            clickedElement.classList.remove('active')
            document.querySelector('body').classList.remove('quick_view_active')
            if (document.querySelector('#inc_sku_fbt.active #inc_fbt_layout') != null) {
                // document.querySelector('#inc_sku_fbt.active #inc_fbt_layout').setAttribute('style','z-index:99')
            }
        }
        if (clickedElement.className == "selection_QTYbundle trigger_colour") {
            clickedElement.classList.remove('trigger_colour');
        }
        if (clickedElement.classList != undefined) {
            if (clickedElement.classList.contains('addConBtn') == true) {
                setTimeout(function() {
                    // if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                        if(document.querySelectorAll('.cust-C .yrOrders-C').length > 1){
                            if(document.querySelector('#increasingly_element') != null){
                                document.querySelector('#increasingly_element').style.display="none"
                            }
                        }
                        if (document.querySelector('#increasingly_element #ic_bundle_pdp') != null) {
                            var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                            if (document.querySelector('#co-mobMenu .ordr-date') == null && cust_data_online.dataList.length > 1) {
                                var inc_div = document.querySelectorAll('#increasingly_element #ic_bundle_pdp');
                                if (inc_div[0] != undefined) {
                                    inc_div[0].setAttribute('class', '')
                                }
                                for (i = 0; i < inc_div.length; i++) {
                                    var remov_img = inc_div[i];
                                    inc_div[i].className = ""
                                    remov_img.parentNode.removeChild(remov_img);
                                }
                                bundle_vars.all_dup_push_prod = []
                                bundle_vars.dup_json_response = []
                                if(typeof($) != "undefined"){
                                    $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                                        s = $(this).val();
                                        call_api_falg = true;
                                        var elm = e.target
                                         alltabentryid=[]
                                        var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                                        for(b=0;b<addedtab.length;b++){
                                            if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                                                if(addedtab[b].value.length == 5){
                                                    alltabentryid.push(addedtab[b].value)
                                                }
                                            }
                                        }
                                        // if(client_vars.product_ids[0] != e.target.value){
                                            if (bundle_vars.modal_btn_clicked == true) {
                                                bundle_vars.modal_btn_clicked = false
                                            }
                                            bundle_vars.call_irb_trigger = true
                                            bundle_vars.fbt_input_tag = e.target
                                            var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                                            if (fbt_rem != null) {
                                                fbt_rem.parentNode.removeChild(fbt_rem);
                                            }
                                            setTimeout(function() {
                                                if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                                                    if (call_api_falg) {
                                                        call_irb_api();
                                                    }
                                                }
                                            }, 500);
                                        // }
                                    });
                                }
                            }
                        }
                        // count_based_on_item()
                        setTimeout(function(){
                            count_based_on_item()
                        },2000)
                    // }
                }, 100)
            }
            if (clickedElement.classList != undefined && clickedElement.parentNode.parentNode != null) {
                if (clickedElement.parentNode.parentNode.classList != undefined) {
                    if (clickedElement.classList.contains('sbmtBtn') == true && client_vars.subclick == false) {
                        
                        if (document.querySelector('#increasingly_element .ic_bundle_price_bind') != null) {
                            document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "none"
                            document.querySelector('#increasingly_element .loader_wait_span').style.display = "flex"
                        }
                        
                        setTimeout(function() {
                            // if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                                update_progress_bar_on_load()
                                
                                var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                                var active_customer = ""
                                for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                                    var inc_cust_name = cust_data_online.dataList[ca].custName;
                                    var cust_amount = cust_data_online.dataList[ca].amt;
                                    var cust_no_items = cust_data_online.dataList[ca].nrItems
                                    var all_cust_elm = document.querySelectorAll('.yrOrders-C .name');
                                    var all_cust_elm_orders = document.querySelectorAll('.yrOrders-C');
                                    for (cp = 0; cp < all_cust_elm_orders.length; cp++) {
                                        if (all_cust_elm_orders[cp] != undefined) {
                                            var cust_nm = all_cust_elm_orders[cp].querySelector('.yrOrders-C .name').innerText.trim();
                                            if (cust_nm == inc_cust_name) {
                                                if (all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount') != null) {
                                                    all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(cust_amount))
                                                }
                                                if (all_cust_elm_orders[cp].querySelector('.mab-prim-lnk.itcnt .lnk-txt') != null) {
                                                    all_cust_elm_orders[cp].querySelector('.mab-prim-lnk.itcnt .lnk-txt').innerHTML = "Total " + cust_no_items + " produse";
                                                }
                                            }
                                        }
                                    }
                                }
                                if(document.querySelector('#cartbag span') != null){
                                    document.querySelector('mini-cart #cartbag').click()
                                }
                                var count_item=0;
                                var celcam_count=document.querySelectorAll('mini-cart .crt-cnt')
                                for(c=0;c<celcam_count.length;c++){
                                    count_item = count_item + +celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim()
                                    if(document.querySelectorAll('.yrOrders-C .name')[c].innerText.trim() == document.querySelectorAll('mini-cart .usr-nme-mc')[c].innerText.trim()){
                                        document.querySelectorAll('.mab-prim-lnk.itcnt .lnk-txt')[c].innerHTML = "Total " + celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim() + " produse";
                                    }
                                }
                                if (document.querySelector('.crt-amt') != null) {
                                    var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                                    if (document.querySelector('.sub_total_Price') != null) {
                                        document.querySelector('.sub_total_Price').innerHTML = cart_amnt;
                                    }
                                }
                                if (document.querySelector('.crt-amt') != null) {
                                    var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                                    if (document.querySelector('.ic_bundle_price_span') != null) {
                                        document.querySelector('.ic_bundle_price_span').innerHTML = cart_amnt;
                                    }
                                }
                                if (document.querySelector('#cartbag span') != null) {
                                    document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                                }
                                if(document.querySelectorAll('.cust-C .yrOrders-C').length > 1){
                                    
                                    if(document.querySelector('#increasingly_element') != null){
                                        document.querySelector('#increasingly_element').style.display="none"
                                    }
                                    var allfbt=document.querySelectorAll('#inc_sku_fbt')
                                    for(f=0;f<allfbt.length;f++){
                                        allfbt[f].parentNode.removeChild(allfbt[f])
                                    }
                                    // if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt img') == null){
                                    //     if(document.querySelector('#increasingly_element') != null){
                                    //         document.querySelector('#increasingly_element').style.display="none"
                                    //     }
                                    // }else{
                                    //     if(document.querySelector('#increasingly_element') != null){
                                    //         document.querySelector('#increasingly_element').style.display="block"
                                    //     }
                                    // }
                                }
                                count_based_on_item()
                            // }
                        }, 4000)
                    }else{
                        setTimeout(function(){
                            client_vars.subclick = false
                        },1000)
                    }
                }
            }
            if (clickedElement.className == "avn-prim-btn dc-ml-btn") {
                if (document.querySelector('#increasingly_element .ic_bundle_price_bind') != null) {
                    document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "none"
                    document.querySelector('#increasingly_element .loader_wait_span').style.display = "flex"
                }
                var checkclientspinner = setInterval(function() {
                    if(document.querySelector('.block-spinner .spinner') == null){
                        clearInterval(checkclientspinner)
                        if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                            update_progress_bar_on_load()
                            var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                            var active_customer = ""
                            for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                                var inc_cust_name = cust_data_online.dataList[ca].custName;
                                var cust_amount = cust_data_online.dataList[ca].amt;
                                var cust_no_items = cust_data_online.dataList[ca].nrItems
                                var all_cust_elm = document.querySelectorAll('.yrOrders-C .name');
                                var all_cust_elm_orders = document.querySelectorAll('.yrOrders-C');
                                for (cp = 0; cp < all_cust_elm_orders.length; cp++) {
                                    if (all_cust_elm_orders[cp] != undefined) {
                                        var cust_nm = all_cust_elm_orders[cp].querySelector('.yrOrders-C .name').innerText.trim();
                                        if (cust_nm == inc_cust_name) {
                                            if (all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount') != null) {
                                                all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(cust_amount))
                                            }
                                        
                                        }
                                    }
                                }
                            }
                            if (document.querySelector('.crt-amt') != null) {
                                var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                                if (document.querySelector('.sub_total_Price') != null) {
                                    document.querySelector('.sub_total_Price').innerHTML = cart_amnt;
                                }
                            }
                            if (document.querySelector('.crt-amt') != null) {
                                var cart_amnt = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                                if (document.querySelector('.ic_bundle_price_span') != null) {
                                    document.querySelector('.ic_bundle_price_span').innerHTML = cart_amnt;
                                }
                            }
                            if (document.querySelector('#cartbag span') != null) {
                                document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                            }
                        }else{
                            if(document.querySelector('#increasingly_element') != null){
                                document.querySelector('#increasingly_element').style.display="none"
                            }
                            var allfbt=document.querySelectorAll('#inc_sku_fbt')
                            for(f=0;f<allfbt.length;f++){
                                allfbt[f].parentNode.removeChild(allfbt[f])
                            }
                        }
                    }
                }, 500)
            }
            if (window.innerWidth < 767) {
                if (clickedElement.classList != undefined) {
                    if (clickedElement.classList.contains('addProSrch-btn') == true) {
                        if(typeof($) != "undefined"){
                            $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                                s = $(this).val();
                                call_api_falg = true;
                                var elm = e.target
                                 alltabentryid=[]
                                var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                                for(b=0;b<addedtab.length;b++){
                                    if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                                        if(addedtab[b].value.length == 5){
                                            alltabentryid.push(addedtab[b].value)
                                        }
                                    }
                                }
                                // if(client_vars.product_ids[0] != e.target.value){
                                    if (bundle_vars.modal_btn_clicked == true) {
                                        bundle_vars.modal_btn_clicked = false
                                    }
                                    bundle_vars.call_irb_trigger = true
                                    bundle_vars.fbt_input_tag = e.target
                                    var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                                    if (fbt_rem != null) {
                                        fbt_rem.parentNode.removeChild(fbt_rem);
                                    }
                                    setTimeout(function() {
                                        if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                                            if (call_api_falg) {
                                                call_irb_api();
                                            }
                                        }
                                    }, 500);
                                // }
                            });
                        }
                    }
                }
            }
            if(clickedElement.parentNode != null){
                if (clickedElement.classList != undefined && clickedElement.parentNode.parentNode != null) {
                    if (clickedElement.parentNode.parentNode.classList != undefined) {
                        if (clickedElement.classList.contains('sbmtBtn') == true || clickedElement.parentNode.classList.contains('sbmtBtn') == true || clickedElement.querySelector('.sbmtBtn') != null) {
                            setTimeout(function(){
                                
                                if(document.querySelectorAll('.cust-C .yrOrders-C').length > 1){
                                    if(document.querySelector('#increasingly_element') != null){
                                        document.querySelector('#increasingly_element').style.display="none"
                                    }
                                    var allfbt=document.querySelectorAll('#inc_sku_fbt')
                                    for(f=0;f<allfbt.length;f++){
                                        allfbt[f].parentNode.removeChild(allfbt[f])
                                    }
                                    // if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt img') == null){
                                    //     if(document.querySelector('#increasingly_element') != null){
                                    //         document.querySelector('#increasingly_element').style.display="none"
                                    //     }
                                    // }else{
                                    //     if(document.querySelector('#increasingly_element') != null){
                                    //         document.querySelector('#increasingly_element').style.display="block"
                                    //     }
                                    // }
                                }
                            },3000)
                            var get_allinc_added_prod_el=document.querySelectorAll('.inc_add_item')
                            for(r=0;r<get_allinc_added_prod_el.length;r++){
                                var remel = get_allinc_added_prod_el[r]
                                if(remel != null && remel != undefined){
                                    remel.parentNode.removeChild(remel)
                                }
                            }
                        }
                    }
                }
            }
        }
        if(typeof($) != "undefined"){
            $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                s = $(this).val();
                call_api_falg = true;
                var elm = e.target
                alltabentryid=[]
                var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                for(b=0;b<addedtab.length;b++){
                    if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                        if(addedtab[b].value.length == 5){
                            alltabentryid.push(addedtab[b].value)
                        }
                    }
                }
                // if(client_vars.product_ids[0] != e.target.value){
                    if (bundle_vars.modal_btn_clicked == true) {
                        bundle_vars.modal_btn_clicked = false
                    }
                    bundle_vars.fbt_input_tag = e.target
                    bundle_vars.call_irb_trigger = true
                    var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                    if (fbt_rem != null) {
                        fbt_rem.parentNode.removeChild(fbt_rem);
                    }
                    setTimeout(function() {
                        if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                            if (call_api_falg) {
                                call_irb_api();
                            }
                        }
                    }, 500);
                // }
            });
        }
        setTimeout(function() {
            if (clickedElement.className == "saleVw active") {
                if (document.querySelector('.saleVw.active') != null && document.querySelector('#increasingly_element') != null) {
                    document.querySelector('#increasingly_element').style.display = "none"
                }
            }
        }, 100)
        
        setTimeout(function() {
            if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
                if (clickedElement.className == "cusVw active" || clickedElement.id == "swtView") {
                    if (document.querySelector('.cusVw.active') != null && document.querySelector('#increasingly_element') != null) {
                        document.querySelector('#increasingly_element').style.display = "block"
                    }
                }

                var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                var act_cust="";
                if (cust_data_online != null) {
                    for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                        if (cust_data_online.dataList[ca].active == true) {
                            act_cust = cust_data_online.dataList[ca];
                            break;
                        }
                    }
                    if (act_cust != "") {
                        var inc_cust_name = act_cust.custName
                    } else {
                        if (document.querySelector('#co-mobMenu .name') != null) {
                            var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
                        }
                    }
                    active_customer_for_added_prod = inc_cust_name
                }
                
                if(document.querySelectorAll('.cust-C .yrOrders-C').length > 1){
                    if(document.querySelector('#increasingly_element') != null){
                        document.querySelector('#increasingly_element').style.display="none"
                    }
                    var allfbt=document.querySelectorAll('#inc_sku_fbt')
                    for(f=0;f<allfbt.length;f++){
                        allfbt[f].parentNode.removeChild(allfbt[f])
                    }
                    // if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt img') == null){
                    //     if(document.querySelector('#increasingly_element') != null){
                    //         document.querySelector('#increasingly_element').style.display="none"
                    //     }
                    // }else{
                    //     if(document.querySelector('#increasingly_element') != null){
                    //         document.querySelector('#increasingly_element').style.display="block"
                    //     }
                    // }
                }
            }
        }, 0)
        
    }
}

function update_progress_bar_on_load(type_of) {
    if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
        if (document.querySelectorAll('.ic_bundle_price_span')[0] != undefined) {
            document.querySelectorAll('.ic_bundle_price_span')[0].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
        }
        if (document.querySelectorAll('.ic_bundle_price_span')[1] != undefined) {
            document.querySelectorAll('.ic_bundle_price_span')[1].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
        }
        if (document.querySelectorAll('.sub_total_Price')[0] != undefined) {
            var min_bas_price = update_mini_basket_price_to_our_bundle()
            // console.log("min_bas_price " + min_bas_price)
            if (document.querySelector('.inc_popup  .loader_wait_span') != null) {
                document.querySelector('.inc_popup  .loader_wait_span').innerHTML = "Produsele sunt adăugate în coș";
                document.querySelector('.inc_popup  .loader_wait_span').classList.remove('eror_msg_display')
            }
            if (document.querySelector('#increasingly_element .loader_wait_span') != null) {
                document.querySelector('#increasingly_element .loader_wait_span').innerHTML = "Produsele sunt adăugate în coș";
                document.querySelector('#increasingly_element .loader_wait_span').classList.remove('eror_msg_display')
            }
            if (document.querySelector('.sub_total_Price') != null) {
                var old_p = document.querySelector('.sub_total_Price').innerText.replace("€", "").replace(",", ".").replace("£", "").replace("lei", "").replace("CZK", "").trim()
            } else {
                var old_p = 0;
            }
            var timer_prog_prc = 0;
            // var pro_bar_price = setInterval(function() {
            setTimeout(function(){
                timer_prog_prc++
                var min_bas_price = update_mini_basket_price_to_our_bundle()
                if (min_bas_price > 0 || (+old_p < update_mini_basket_price_to_our_bundle() && min_bas_price > 0)) {
                    // clearInterval(pro_bar_price)
                    if (document.querySelectorAll('.sub_total_Price')[0] != null) {
                        document.querySelectorAll('.sub_total_Price')[0].innerHTML = check_currency_symb(parseFloat(min_bas_price));
                    }
                    if (document.querySelector('.inc_popup .loader_wait_span') != null) {
                        document.querySelector('.inc_popup .loader_wait_span').style.display = "none"
                    }
                    if(document.querySelector('.nav_wrap_price_wrapper') != null){
                        document.querySelector('.nav_wrap_price_wrapper').style.display = "flex"
                    }
                    if (document.querySelector('#increasingly_element .loader_wait_span') != null) {
                        document.querySelector('#increasingly_element .loader_wait_span').style.display = "none"
                    }
                    if (document.querySelector('#increasingly_element .ic_bundle_price_bind') != null) {
                        document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "flex"
                    }
                    if (document.querySelector('.inc_popup  .on_load_progress') == null && document.querySelector('.inc_popup .ic_discount_li') != null && document.querySelector('.inc_popup .ic_discount_li.active') == null) {
                        document.querySelector('.inc_popup .ic_discount_li').classList.add('on_load_progress')
                    }
                    if (document.querySelector('#increasingly_element .on_load_progress') == null && document.querySelector('#increasingly_element .ic_discount_li') != null && document.querySelector('#increasingly_element .ic_discount_li.active') == null) {
                        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                            document.querySelector('#increasingly_element .ic_discount_li').classList.add('on_load_progress')
                        }
                    }
                    if (document.querySelector('.crt-amt') != null) {
                        get_customer_discount_message()

                    }
                    if (document.querySelector('#cartbag span') != null) {
                        var totl_qty = update_mini_basket_qty();
                        if (document.querySelector('.sub_total_text') != null) {
                            document.querySelector('.sub_total_text').innerHTML = bundle_vars.bag_subtotal + "(" + totl_qty + "  " + bundle_vars.item_s + ")";
                        }
                    }
                    if (document.querySelector('#cartbag span') != null) {
                        document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                    }
                } else {
                    if (document.querySelector('#cartbag span') == null) {
                        // if(document.querySelector('.yrOrders-C.active .ntCmp-err') != null){
                            if (document.querySelector('#shared-banner') != null) {
                                if (document.querySelector('#shared-banner .bnr-msg') != null) {
                                    var incerr_text = document.querySelector('#shared-banner .bnr-msg').innerText
                                    if (incerr_text != "Produsul a fost adăugat la comandă") {
                                        if (document.querySelector('.inc_popup .loader_wait_span') != null) {
                                            document.querySelector('.inc_popup .loader_wait_span').classList.add('eror_msg_display')
                                            document.querySelector('.inc_popup .loader_wait_span').innerHTML = incerr_text
                                        }
                                    }
                                    if (document.querySelector('#increasingly_element') != null) {
                                        document.querySelector('#increasingly_element .loader_wait_span').style.display = "none"
                                        document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "flex"
                                        if(document.querySelector('.inc_popup .nav_wrap_price_wrapper') != null){
                                            document.querySelector('.inc_popup .nav_wrap_price_wrapper').style.display = "flex"
                                        }
                                    }
                                } else {
                                    document.querySelector('.inc_popup .loader_wait_span').style.display = "none"
                                    if (document.querySelector('#increasingly_element') != null) {
                                        document.querySelector('#increasingly_element .loader_wait_span').style.display = "none"
                                        document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "flex"
                                        if(document.querySelector('.inc_popup .nav_wrap_price_wrapper') != null){
                                            document.querySelector('.inc_popup .nav_wrap_price_wrapper').style.display = "flex"
                                        }
                                    }
                                }
                            }
                        // }
                    }else{
                        if (timer_prog_prc * 100 > 30000) {
                            clearInterval(pro_bar_price)
                            if (document.querySelector('#shared-banner') != null) {
                                if (document.querySelector('#shared-banner').style.display == "block") {
    
                                    if (document.querySelector('#shared-banner .bnr-msg') != null) {
                                        var incerr_text = document.querySelector('#shared-banner .bnr-msg').innerText
                                        if (incerr_text != "Produsul a fost adăugat la comandă") {
                                            if (document.querySelector('.inc_popup .loader_wait_span') != null) {
                                                document.querySelector('.inc_popup .loader_wait_span').classList.add('eror_msg_display')
                                                document.querySelector('.inc_popup .loader_wait_span').innerHTML = incerr_text
                                            }
                                        }
                                        if (document.querySelector('#increasingly_element') != null) {
                                            document.querySelector('#increasingly_element .loader_wait_span').style.display = "none"
                                            document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "flex"
                                            if(document.querySelector('.inc_popup .nav_wrap_price_wrapper') != null){
                                                document.querySelector('.inc_popup .nav_wrap_price_wrapper').style.display = "flex"
                                            }
                                        }
                                    } else {
                                        document.querySelector('.inc_popup .loader_wait_span').style.display = "none"
                                        if (document.querySelector('#increasingly_element') != null) {
                                            document.querySelector('#increasingly_element .loader_wait_span').style.display = "none"
                                            document.querySelector('#increasingly_element .ic_bundle_price_bind').style.display = "flex"
                                            if(document.querySelector('.inc_popup .nav_wrap_price_wrapper') != null){
                                                document.querySelector('.inc_popup .nav_wrap_price_wrapper').style.display = "flex"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, 3000)

        }
    }
}
var inc_keup_delay = 2000
if (window.innerWidth < 768) {
    inc_keup_delay = 4000
}

setTimeout(function() {
    // $(document).ready(function() {
        // keydown keyup 
        if(typeof($) != "undefined"){
            $('.pSrch-tbl .pSrch-row .ps-lno input, #addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input').bind('change keyup', function(e) {
                s = $(this).val();
                call_api_falg = true;
                var elm = e.target
                alltabentryid=[]
                var addedtab = document.querySelectorAll('.pSrch-row .ps-lnInpt.ng-touched')
                for(b=0;b<addedtab.length;b++){
                    if(alltabentryid.indexOf(addedtab[b].value) == -1 && addedtab[b].parentNode.parentNode.querySelector('#inc_sku_fbt') != null){
                        if(addedtab[b].value.length == 5){
                            alltabentryid.push(addedtab[b].value)
                        }
                    }
                }
                // if(client_vars.product_ids[0] != e.target.value){
                    if (bundle_vars.modal_btn_clicked == true) {
                        bundle_vars.modal_btn_clicked = false
                    }
                    bundle_vars.fbt_input_tag = e.target
                    bundle_vars.call_irb_trigger = true
                    var fbt_rem = elm.parentNode.querySelector('#inc_sku_fbt');
                    if (fbt_rem != null) {
                        fbt_rem.parentNode.removeChild(fbt_rem);
                    }
                    setTimeout(function() {
                        if (s.length == 5 && elm.parentNode.parentNode.parentNode.querySelector('.qntyVal').value != "") {
                            if (call_api_falg) {
                                call_irb_api();
                            }
                        }
                    }, 500);
                // }
            });
            $('.search, .menu, .profl-img, .cartBag, .notification, #cartbag').click(function() {
                if (document.querySelector('#inc_sku_fbt.active') != null) {
                    if (document.querySelector('.ic_quick_view_popup.active') != null) {
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 768) {
                            document.querySelector('.ic_quick_view_popup.active').style.display = "none"
                        }
                        document.querySelector('.ic_quick_view_popup.active').classList.remove('active');
                    }
                    document.querySelector('#inc_sku_fbt.active').classList.remove('active');
                    if (document.querySelector('.pSrch-row.active') != null) {
                        document.querySelector('.pSrch-row.active').classList.remove('active');
                    }
                    document.querySelector('body').classList.remove('fbt_active')
                    document.querySelector('body').classList.remove('quick_view_active')
                }
            })
        }
    // });
}, 4000)
//end of select option search
function call_irb_api() {
    if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
        client_vars.product_ids = []
        client_vars.item_validation = []
        duplicatefbtprod=[]
        var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
        if(bundle_vars.fbt_input_tag != null){
            if(alltabentryid.indexOf(bundle_vars.fbt_input_tag.value) == -1){
                if (bundle_vars.call_irb_trigger == true) {
                    var fbt_rem = bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt');
                    var prd_fbt = null;
                    if (fbt_rem != null) {
                        prd_fbt = fbt_rem.getAttribute('sku');
                    }

                    if (window.innerWidth > 1200) {
                        if (fbt_rem != null) {
                            var pid = fbt_rem.getAttribute('sku')
                            bundle_vars.sku_irb_product_list;
                            Array.prototype.remove_prod_list = function() {
                                var what, a = arguments,
                                    L = a.length,
                                    ax;
                                while (L && this.length) {
                                    what = a[--L];
                                    while ((ax = this.indexOf(what)) !== -1) {
                                        this.splice(ax, 1);
                                    }
                                }
                                return this;
                            };
                            bundle_vars.sku_irb_product_list.remove_prod_list(pid);
                            if (fbt_rem != null) {
                                document.querySelector('body').classList.remove('fbt_bundles')
                                fbt_rem.parentNode.removeChild(fbt_rem);
                            }
                            console.log("pid " + pid)
                        }
                    }
                    if(document.querySelector('.ic_discount_ul') != null){
                        progress_bar_html = document.querySelector('.ic_discount_ul').innerHTML
                    }
                    if(document.querySelector('.inc_campain_total_prc') != null){
                        campain_price = document.querySelector('.inc_campain_total_prc').innerText
                    }
                    if(document.querySelector('.ic_bundle_price_span') != null){
                        added_prod_prc = document.querySelector('.ic_bundle_price_span').innerText
                    }
                    // if(bundle_vars.sku_irb_product_list.indexOf(bundle_vars.fbt_input_tag.value) == -1){
                    bundle_vars.call_irb_trigger = false
                    // document.querySelector('.inc_popup').innerHTML = ""
                    // document.querySelector('#increasingly_element').innerHTML = ""
                    call_api_falg = false;
                    if (window.innerWidth > 1200) {
                        if (bundle_vars.fbt_input_tag != null) {
                            // sku_enter_fbt_tag(bundle_vars.fbt_input_tag)
                        }
                    }
                    var all_sku_input = document.querySelectorAll('.pSrch-tbl .pSrch-row .ps-lno input');
                    if (window.innerWidth < 768) {
                        var all_sku_input = document.querySelectorAll('#addProdSrchModal .pSrch-tbl .pSrch-row .ps-lno input');
                    }

                    client_vars.product_ids.push(bundle_vars.fbt_input_tag.value);
                    localStorage.setItem('inc_product_ids', JSON.stringify(client_vars.product_ids))
                    var load_type = "onload";
                    var url = 'https://rapidload.increasingly.co/increasingly_bundles?irb/';
                    if (document.querySelectorAll('.pdp_bundles')[0] == null) {
                        var divElementName = "catalog_product_view";
                    } else {
                        var divElementName = "checkout_cart_index";
                    }
                    var divElementName = "catalog_product_view";
                    var local_pr_ids = JSON.parse(localStorage.getItem('inc_product_ids'))
                    var prod_id_irb = local_pr_ids[local_pr_ids.length - 1]
                    if (prod_id_irb == undefined) {
                        prod_id_irb = client_vars.product_ids[0]
                    }
                    client_vars.product_ids[0] = prod_id_irb
                    if (document.querySelectorAll('.pdp_bundles')[0] == null) {
                        var after_m_data = "product_ids=" + prod_id_irb + "&category_id=&api_key=" + client_vars.api_key + "&client_id=&page_type=" + divElementName + '&client_visitor_id=' + readCookie('ivid') + '&npb=2';
                    } else {
                        var local_pr_ids = JSON.parse(localStorage.getItem('inc_product_ids'))
                        var after_m_data = "product_ids=" + prod_id_irb + "&category_id=&api_key=" + client_vars.api_key + "&client_id=&page_type=" + divElementName + '&client_visitor_id=' + readCookie('ivid') + '&npb=2';
                    }
                    if (bundle_vars.on_load_bundle == true) {
                        after_m_data = after_m_data + "&is_tc=1&no_of_bundles=30"
                    }
                    bundle_vars.sku_irb_product_list.push(bundle_vars.fbt_input_tag.value)
                    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
                    var get_query_string = btoa(after_m_data);
                    url += get_query_string;
                    var xhttp = new XMLHttpRequest();
                    xhttp.open('GET', url, true);
                    xhttp.send();
                    xhttp.onerror = function() {

                    }
                    xhttp.onload = function() {}
                    xhttp.onreadystatechange = function() {
                        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
                            if (xhttp.responseText != "") {
                                if (client_vars.split_test) {
                                    if (bundle_vars.on_load_bundle == true) {
                                        // if (document.querySelector('.inc_popup.active') == null) {
                                            bundle_vars.pdp_response = []
                                            
                                            // document.querySelector('.inc_popup').innerHTML = ""
                                            // document.querySelector('#increasingly_element').innerHTML = "";
                                            var fbt_rem = document.querySelector('#inc_sku_fbt');



                                            // if (document.querySelectorAll('.pdp_bundles')[0] == null) {
                                                var responseData = JSON.parse(xhttp.responseText);
                                                bundle_vars.def_bundles = []
                                                bundle_vars.all_dup_push_prod = []
                                                bundle_vars.dup_json_response = []
                                                bundle_vars.create_prod_c = 0
                                                bundle_vars.dup_attr_p = []
                                                bundle_vars.bundle_response_after_M = responseData
                                                var source = (switch_board.its_plp_page || bundle_vars.pdp_client_btn) ? "plp_btn" : null;
                                                if(bundle_vars.fbt_input_tag != null){
                                                    if(bundle_vars.fbt_input_tag.nextElementSibling != null){
                                                        bundle_vars.fbt_input_tag.nextElementSibling.setAttribute('style','')
                                                    }
                                                }
                                                check_product_availability(responseData, "onload", null, null, null, source, "cart", bundle_vars.fbt_input_tag)
                                                
                                            // }
                                        // }
                                    }
                                }

                            } else {

                                // document.querySelector('#increasingly_element').innerHTML = ""
                                // document.querySelector('.inc_popup').innerHTML = ""
                                bundle_vars.def_bundles = []
                                bundle_vars.pdp_response = []
                                bundle_vars.dup_attr_p = []
                                bundle_vars.all_dup_push_prod = []
                                bundle_vars.dup_json_response = []
                                bundle_vars.create_prod_c = 0
                                
                                var fbt_rem = bundle_vars.fbt_input_tag.parentNode.querySelector('#inc_sku_fbt');
                                if (bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt .loader_wait_span_fbt') != null) {
                                    bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt .loader_wait_span_fbt').classList.remove('loader_wait_span_fbt')
                                }
                                if (bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout') != null) {
                                    bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout').innerHTML = "Te rog asteapta..."
                                    bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout').innerHTML = "<span>Ne pare rau!</span> Acest produs nu este disponibil pentru comandare"
                                }

                                var lay_fbt = bundle_vars.fbt_input_tag.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout');
                                if (lay_fbt != null) {
                                    var fbt_bundle_header = generate_html_tag("div", "fbt_bundle_header_noproduct");
                                    var fbt_bundle_close = generate_html_tag("span", "fbt_bundle_close");
                                    fbt_bundle_header.appendChild(fbt_bundle_close)
                                    lay_fbt.classList.add('no_product')
                                    lay_fbt.appendChild(fbt_bundle_header)
                                    fbt_bundle_close.addEventListener('click', function(e) {
                                        var psearch = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;;
                                        document.querySelector('body').classList.remove('fbt_active');
                                        psearch.querySelector('#inc_sku_fbt.active').classList.remove('active');
                                        psearch.classList.remove('active')
                                    });
                                }
                                if(document.querySelector('#inc_fbt_layout.no_product') != null){
                                    var incfbtrem = document.querySelector('#inc_fbt_layout.no_product').parentNode
                                    if(incfbtrem != null){
                                        incfbtrem.parentNode.removeChild(incfbtrem)
                                    }
                                }

                            }
                        }
                    };
                }
            }
        }
    }
}


function on_load_colour_sel() {
    var selected_text = "";
    var all = document.querySelectorAll('#increasingly_element .ic_product');
    for (var p = 0; p < all.length; p++) {
        //.querySelectorAll('.ic_product')[p]
        var els = all[p];
        if (els != undefined) {
            if (els.querySelector(".select_wrapper") != undefined || els.querySelector(".select_wrapper") != null) {
                var el = els.querySelectorAll(".select_wrapper");
                for (i = 0; i < el.length; i++) {
                    var inc_select = el[i].querySelectorAll('li.active');
                    for (j = 0; j < inc_select.length; j++) {

                        var value = inc_select[j].querySelector('a').getAttribute("value");
                        var price = inc_select[j].querySelector('a').getAttribute("price");
                        var sp_price = inc_select[j].querySelector('a').getAttribute("special_price");
                        var child_img_url = inc_select[j].querySelector('a').getAttribute("child_img_url");
                        els.querySelector('.ic_prod_details .pdt_img img').setAttribute('src', child_img_url)


                        var prod = el[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        var prod_quick_view = prod.querySelector('.ic_quick_view_popup');

                        var prod_ind = prod.getAttribute('bundle_index');
                        var addon_wrapper = null;
                        var pr_ids = prod.getAttribute('data_selected_prod_id')
                        var ch_img_list = inc_select[j].querySelector('a').getAttribute('child_o_img_list');

                        if ((+sp_price > 0 && +sp_price < +price) && sp_price != null) {
                            if (prod.querySelector(".pdt_price .spec_amount") != undefined || prod.querySelector(".pdt_price .spec_amount") != undefined) {

                                prod.querySelector(".pdt_price .spec_amount").innerHTML = check_currency_symb(parseFloat(sp_price))
                                if (prod.querySelector(".pdt_price .product_amount.old_price")) {
                                    prod.querySelector(".pdt_price .product_amount.old_price").innerHTML = check_currency_symb(parseFloat(price))
                                }
                                if (prod_quick_view != undefined) {
                                    if (prod_quick_view.querySelector(".spec_amount") != null) {
                                        prod_quick_view.querySelector(".spec_amount").innerHTML = check_currency_symb(parseFloat(sp_price))
                                    }
                                    if (prod_quick_view.querySelector(".product_amount.old_price")) {
                                        prod_quick_view.querySelector(".product_amount.old_price").innerHTML = check_currency_symb(parseFloat(price))
                                    }
                                }
                                prod.querySelector("input.final_price").setAttribute("value", parseFloat(sp_price).toFixed(2));
                                prod.querySelector("input.ini_price").setAttribute("value", parseFloat(sp_price).toFixed(2));
                                prod.querySelector("input.main_product_price").setAttribute("value", parseFloat(price).toFixed(2));
                            } else {
                                var spec_amount = generate_html_tag('span', 'spec_amount');
                                spec_amount.innerHTML = check_currency_symb(parseFloat(sp_price))
                                prod.querySelector(".pdt_price").appendChild(spec_amount);
                                prod.querySelector(".pdt_price .product_amount").classList.add("old_price");
                                if (prod.querySelector(".pdt_price .product_amount.old_price")) {
                                    prod.querySelector(".pdt_price .product_amount.old_price").innerHTML = parseFloat(price).toFixed(2);
                                }
                                if (prod_quick_view != undefined) {
                                    var spec_amount = generate_html_tag('span', 'spec_amount');
                                    spec_amount.innerHTML = check_currency_symb(parseFloat(sp_price))
                                    prod_quick_view.querySelector(".pdt_price").appendChild(spec_amount);
                                    prod_quick_view.querySelector(".pdt_price .product_amount").classList.add("old_price");
                                    if (prod_quick_view.querySelector(".pdt_price .product_amount.old_price")) {
                                        prod_quick_view.querySelector(".pdt_price .product_amount.old_price").innerHTML = parseFloat(price).toFixed(2);
                                    }
                                }
                                prod.querySelector("input.final_price").setAttribute("value", parseFloat(sp_price).toFixed(2));
                                prod.querySelector("input.ini_price").setAttribute("value", parseFloat(sp_price).toFixed(2));
                                prod.querySelector("input.main_product_price").setAttribute("value", parseFloat(price).toFixed(2));
                            }
                        } else {
                            if (prod.querySelector(".pdt_price .spec_amount") && prod.querySelector(".pdt_price .product_amount.old_price")) {
                                prod.querySelector(".pdt_price .spec_amount").parentNode.removeChild(prod.querySelector(".pdt_price .spec_amount"));
                                prod.querySelector(".pdt_price .product_amount").classList.remove("old_price");
                            }
                            prod.querySelector(".pdt_price .product_amount").innerHTML = check_currency_symb(parseFloat(price))
                            if (prod_quick_view != undefined) {
                                if (prod_quick_view.querySelector(".spec_amount") && prod_quick_view.querySelector(".product_amount.old_price")) {
                                    prod_quick_view.querySelector(".spec_amount").parentNode.removeChild(prod_quick_view.querySelector(".spec_amount"));
                                    prod_quick_view.querySelector(".product_amount").classList.remove("old_price");
                                }
                                prod_quick_view.querySelector(".product_amount").innerHTML = check_currency_symb(parseFloat(price))
                            }
                            if (prod.querySelector("input.final_price") != undefined) {
                                prod.querySelector("input.final_price").setAttribute("value", parseFloat(price).toFixed(2));
                            }
                            if (prod.querySelector("input.ini_price") != undefined) {
                                prod.querySelector("input.ini_price").setAttribute("value", parseFloat(price).toFixed(2));
                            }

                            if (prod.querySelector("input.main_product_price") != null) {
                                prod.querySelector("input.main_product_price").setAttribute("value", parseFloat(price).toFixed(2));
                            }
                        }
                    }
                }
            }
        }
    }
}

function update_mini_basket_price_to_our_bundle() {
    var total_prc = 0;
    var in_session_cust_data = JSON.parse(sessionStorage.getItem("custData"))
    for (ic = 0; ic < in_session_cust_data.dataList.length; ic++) {
        total_prc += in_session_cust_data.dataList[ic].amt
    }
    return total_prc;
}

function update_mini_basket_qty() {
    var total_qty = 0;
    var in_session_cust_data = JSON.parse(sessionStorage.getItem("custData"))
    for (ic = 0; ic < in_session_cust_data.dataList.length; ic++) {
        total_qty += in_session_cust_data.dataList[ic].nrItems
    }
    return total_qty;
}


function get_customer_discount_message() {
    if(document.querySelectorAll('.cust-C .yrOrders-C').length == 1){
        var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
        if (cust_data_online != null) {
            for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                if (cust_data_online.dataList[ca].active == true) {
                    active_customer = cust_data_online.dataList[ca];
                    break;
                }
            }
            if (active_customer != "") {
                cust_id = active_customer.custId
                inc_cust_name = active_customer.custName
            } else {
                if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                    cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
                }
                if (document.querySelector('#co-mobMenu .name') != null) {
                    var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
                }
            }
            var inc_acctNr = sessionStorage.getItem("acctNr")
            var order_n = ""
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                order_n = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
            }
            if(order_n != ""){
                url = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order/' + order_n + '/slsview?groups=header,discnt'
                $.ajax({
                    type: "GET",
                    url: url,
                    processData: false,
                    cacheable: false,
                    dataType: "json",
                    contentType: "application/json",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
                        xhr.setRequestHeader('content-type', 'application/json');
                    },
                    success: function(result, xhr) {
                        var ic_discount_wrapper = document.querySelector('.ic_discount_wrapper')
                        if (ic_discount_wrapper != null) {
                            ic_discount_wrapper.innerHTML = ""
                        }
                        var next_level_disc_meter = generate_html_tag('div', 'next_level_disc_meter');
                        var inc_campain_total_prc_wrapper = generate_html_tag('div', 'inc_campain_total_prc_wrapper');
                        var inc_campain_total_prc = generate_html_tag('div', 'inc_campain_total_prc');
                        if(result.discnt != undefined){
                            inc_campain_total_prc.innerHTML = check_currency_symb(parseFloat(result.discnt.ordSizeAmt));
                        }else{
                            inc_campain_total_prc.innerHTML = check_currency_symb(parseFloat(result.ordSizeAmt));
                        }

                        if(document.querySelector('.ic_bundle_price_span') != null){
                            // document.querySelector('.ic_bundle_price_span').innerHTML = check_currency_symb(parseFloat(result.discnt.ordSizeAmt));
                        }
                        if(result.discnt != undefined){
                            if(result.discnt.ordSizeAmt != undefined){
                                if(document.querySelector('.inc_popup .ic_bundle_price_span') != null){
                                    document.querySelector('.inc_popup .ic_bundle_price_span').innerHTML = check_currency_symb(parseFloat(result.discnt.ordSizeAmt));
                                }
                                if(document.querySelector('.inc_popup .sub_total_Price') != null){
                                    document.querySelector('.inc_popup .sub_total_Price').innerHTML = check_currency_symb(parseFloat(result.discnt.ordSizeAmt));
                                }
                            }
                        }
                        var inc_campain_total_text = generate_html_tag('div', 'inc_campain_total_text');
                        inc_campain_total_text.textContent = "Valoare produselor din campania curenta"
                        inc_campain_total_prc_wrapper.appendChild(inc_campain_total_prc)
                        inc_campain_total_prc_wrapper.appendChild(inc_campain_total_text)
                        if (ic_discount_wrapper != null) {
                            ic_discount_wrapper.appendChild(inc_campain_total_prc_wrapper);
                        }
                        var ic_discount_ul = generate_html_tag('ul', 'ic_discount_ul');
                        if(result.discnt != undefined){
                            if(result.discnt.trgts != undefined){
                                for (li = 0; li < result.discnt.trgts.length; li++) {
                                    if(result.discnt.trgts[li].discPct != 0 || result.discnt.trgts.length == 1){
                                        var ic_discount_li = generate_html_tag('li', 'ic_discount_li');
                                        if (result.discnt.trgts[li].discPct <= result.discnt.qualfDiscntPct) {
                                            ic_discount_li.classList.add('active')
                                        }
                                        var inc_discount_meter = generate_html_tag('div', 'inc_discount_meter');
                                        ic_discount_li.appendChild(inc_discount_meter)
                                        var ic_discount_price = generate_html_tag('span', 'ic_discount_price');
                                        var ic_discount_checkbox = generate_html_tag('span', 'ic_discount_checkbox');
                                        var ic_discount_save = generate_html_tag('span', 'ic_discount_save');
                                        
                                        ic_discount_li.setAttribute('max_limit', result.discnt.trgts[li].maxThrshAmt)
                                        ic_discount_li.setAttribute('min_limit', result.discnt.trgts[li].minThrshAmt)
                                        ic_discount_price.textContent = check_currency_symb(parseFloat(result.discnt.trgts[li].minThrshAmt));
                                        ic_discount_save.textContent = result.discnt.trgts[li].discPct + "%"
                                        //bundle_vars.you_save + 
                                        if (result.discnt.qualfDiscntPct == result.discnt.trgts[li].discPct) {
                                            // ic_discount_li.classList.add('active')
                                        }

                                        ic_discount_li.classList.add('inc_black')
                                        inc_discount_meter.appendChild(ic_discount_price)
                                        inc_discount_meter.appendChild(ic_discount_checkbox)
                                        inc_discount_meter.appendChild(ic_discount_save)
                                        ic_discount_ul.appendChild(ic_discount_li)
                                        if (result.discnt.trgts.length == 1) {
                                            ic_discount_li.setAttribute('style', 'width:92%')
                                        } else if (result.discnt.trgts.length == 2) {
                                            ic_discount_li.setAttribute('style', 'width:46%')
                                        } else if (result.discnt.trgts.length == 3) {
                                            ic_discount_li.setAttribute('style', 'width:30%')
                                            if(result.discnt.trgts[0].discPct == 0){
                                                ic_discount_li.setAttribute('style', 'width:46%')
                                            }
                                        } else if (result.discnt.trgts.length == 4) {
                                            ic_discount_li.setAttribute('style', 'width:22.5%')
                                            if(result.discnt.trgts[0].discPct == 0){
                                                ic_discount_li.setAttribute('style', 'width:30%')
                                            }
                                        } else if (result.discnt.trgts.length == 5) {
                                            ic_discount_li.setAttribute('style', 'width:18.5%')
                                            if(result.discnt.trgts[0].discPct == 0){
                                                ic_discount_li.setAttribute('style', 'width:22.5%')
                                            }
                                        } else if (result.discnt.trgts.length == 6) {
                                            ic_discount_li.setAttribute('style', 'width:14.5%')
                                            if(result.discnt.trgts[0].discPct == 0){
                                                ic_discount_li.setAttribute('style', 'width:18.5%')
                                            }
                                        }
                                        //Comanda de inca (ammount) pentru a obtine discount de (procentage) pentru comanda ta!
                                        next_level_disc_meter.innerHTML = "Comanda de inca " + check_currency_symb(parseFloat(result.discnt.achvNextLvlAmt)) + " pentru a obtine discount de " + result.discnt.nextLvlDiscntPct + "% pentru comanda ta!"

                                        if (result.discnt.qualfDiscntPct == result.discnt.trgts[li].discPct && result.discnt.achvNextLvlAmt != 0) {
                                            // ic_discount_li.appendChild(next_level_disc_meter)

                                        }
                                        if (result.discnt.achvNextLvlAmt == 0) {
                                            next_level_disc_meter.style.display = "none"
                                        }
                                    }
                                }
                            }
                        }
                        // var ic_discount_ul = generate_html_tag('ul', 'ic_discount_ul');
                        // if(result.discnt.trgts != undefined){
                        //     var discfalg = false
                        //     for (li = 0; li < result.discnt.trgts.length; li++) {
                        //         var ic_discount_li = generate_html_tag('li', 'ic_discount_li');
                        //         if (result.discnt.trgts[li].discPct <= result.discnt.qualfDiscntPct) {
                        //             ic_discount_li.classList.add('active')
                        //             discfalg == true
                        //         }else if(discfalg == false){
                        //             ic_discount_li.classList.add('active')
                        //         }
                        //         var inc_discount_meter = generate_html_tag('div', 'inc_discount_meter');
                        //         ic_discount_li.appendChild(inc_discount_meter)
                        //         var ic_discount_price = generate_html_tag('span', 'ic_discount_price');
                        //         var ic_discount_checkbox = generate_html_tag('span', 'ic_discount_checkbox');
                        //         var ic_discount_save = generate_html_tag('span', 'ic_discount_save');

                        //         ic_discount_li.setAttribute('max_limit', result.discnt.trgts[li].maxThrshAmt)
                        //         ic_discount_li.setAttribute('min_limit', result.discnt.trgts[li].minThrshAmt)
                        //         ic_discount_price.textContent = check_currency_symb(parseFloat(result.discnt.trgts[li].minThrshAmt));
                        //         ic_discount_save.textContent = result.discnt.trgts[li].discPct + "%"
                        //         //bundle_vars.you_save + 
                        //         if (result.discnt.qualfDiscntPct == result.discnt.trgts[li].discPct) {
                        //             // ic_discount_li.classList.add('active')
                        //         }

                        //         ic_discount_li.classList.add('inc_black')
                        //         inc_discount_meter.appendChild(ic_discount_price)
                        //         inc_discount_meter.appendChild(ic_discount_checkbox)
                        //         inc_discount_meter.appendChild(ic_discount_save)
                        //         ic_discount_ul.appendChild(ic_discount_li)
                        //         if (result.discnt.trgts.length == 1) {
                        //             ic_discount_li.setAttribute('style', 'width:92%')
                        //         } else if (result.discnt.trgts.length == 2) {
                        //             ic_discount_li.setAttribute('style', 'width:46%')
                        //         } else if (result.discnt.trgts.length == 3) {
                        //             ic_discount_li.setAttribute('style', 'width:30%')
                        //         } else if (result.discnt.trgts.length == 4) {
                        //             ic_discount_li.setAttribute('style', 'width:22.5%')
                        //         } else if (result.discnt.trgts.length == 5) {
                        //             ic_discount_li.setAttribute('style', 'width:18.5%')
                        //         } else if (result.discnt.trgts.length == 6) {
                        //             ic_discount_li.setAttribute('style', 'width:14.5%')
                        //         }

                        //         next_level_disc_meter.innerHTML = "Comanda de inca " + check_currency_symb(parseFloat(result.discnt.achvNextLvlAmt)) + " obține " + result.discnt.nextLvlDiscntPct + "% vânzare"

                        //         if (result.discnt.qualfDiscntPct == result.discnt.trgts[li].discPct && result.discnt.achvNextLvlAmt != 0) {
                        //             // ic_discount_li.appendChild(next_level_disc_meter)

                        //         }
                        //         if (result.discnt.achvNextLvlAmt == 0) {
                        //             next_level_disc_meter.style.display = "none"
                        //         }
                        //     }
                        // }
                        if (document.querySelector('.inc_popup.active .on_load_progress') != null && document.querySelector('.inc_popup.active .ic_discount_li') != null) {
                            document.querySelector('.inc_popup.active .ic_discount_li').classList.remove('on_load_progress')
                        }
                        if (ic_discount_wrapper != null) {
                            ic_discount_wrapper.appendChild(ic_discount_ul)
                            ic_discount_wrapper.appendChild(next_level_disc_meter)
                        }

                        var ic_discount_wrapper_pop = document.querySelector('.inc_popup .ic_discount_wrapper')
                        if (ic_discount_wrapper_pop != null) {
                            ic_discount_wrapper_pop.innerHTML = ""
                            var cloned_li = ic_discount_ul.cloneNode(ic_discount_ul);
                            ic_discount_wrapper_pop.appendChild(cloned_li)
                            var cloned_li_quest = next_level_disc_meter.cloneNode(next_level_disc_meter);
                            ic_discount_wrapper_pop.appendChild(cloned_li_quest)
                        }
                        if (document.querySelector('.inc_popup.active') != null) {
                            // if(document.querySelector('.sub_total_text') != null){
                            //     document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + result.noOfItems + "  " + bundle_vars.item_s + ")";
                            // }
                            // if(document.querySelector('#cartbag span[_ngcontent-c5]') != null){
                            //     document.querySelector('#cartbag span[_ngcontent-c5]').innerText = result.noOfItems
                            // }
                        }
                    },
                    error: function(jqXHR, textStatus, errorMessage) {
                    },
                });
            }
        }
    }
}


function disable_product_oss_attributes(element) {
    //bundle_vars.pdp_response
    var ic_prod_card = element.querySelectorAll('.select_wrapper');
    var product_id = element.getAttribute('data_selected_prod_id');
    for (k = 0; k < ic_prod_card.length; k++) {
        var all_li = ic_prod_card[k].querySelectorAll('ul li')
        for (kl = 0; kl < all_li.length; kl++) {
            var ch_pid = all_li[kl].querySelector('a').getAttribute('c_pid')
            if (ch_pid != product_id) {
                if (bundle_vars.instock_attribues.indexOf(ch_pid) == -1) {
                    all_li[kl].classList.add('oos_disabled')
                    all_li[kl].style.display = "none"
                    if (ic_prod_card[k].querySelector('.color_size_title') != null) {
                        ic_prod_card[k].querySelector('.color_size_title').style.display = "none"
                    }
                    if (all_li[kl].classList.contains('active')) {
                        all_li[kl].classList.remove('active')
                        if (all_li[kl].nextElementSibling != undefined) {
                            all_li[kl].nextElementSibling.classList.remove('active')
                        }
                    }
                } else {
                    if (ic_prod_card[k].querySelector('.color_size_title') != null) {
                        if (ic_prod_card[k].querySelectorAll('li').length > 1) {
                            ic_prod_card[k].querySelector('.color_size_title').style.display = "flex"
                        }
                    }
                }
            }
        }
    }
}

function popup_disable_product_oss_attributes() {
    var all_ic_prod_card = document.querySelectorAll('.inc_popup .ic_product');
    for (icp = 0; icp < all_ic_prod_card.length; icp++) {
        var element = all_ic_prod_card[icp];
        var ic_prod_card = element.querySelectorAll('.select_wrapper');
        var product_id = element.getAttribute('data_selected_prod_id')
        for (k = 0; k < ic_prod_card.length; k++) {
            var all_li = ic_prod_card[k].querySelectorAll('ul li')
            for (kl = 0; kl < all_li.length; kl++) {
                var ch_pid = all_li[kl].querySelector('a').getAttribute('c_pid')
                all_li[kl].classList.remove('oos_disabled')
                all_li[kl].style.display = "block"
                // all_ic_prod_card[icp].classList.remove('simple')
                if (ch_pid != product_id) {
                    if (bundle_vars.instock_attribues.indexOf(ch_pid) == -1) {
                        all_li[kl].classList.add('oos_disabled')
                        all_li[kl].style.display = "none"
                        // all_ic_prod_card[icp].classList.add('simple')
                        if (all_li[kl].classList.contains('active')) {
                            all_li[kl].classList.remove('active')
                            if (all_li[kl].nextElementSibling != undefined) {
                                all_li[kl].nextElementSibling.classList.remove('active')
                            }
                        }
                    }
                }
            }
        }
    }
}

function sku_enter_fbt_tag(elm) {
    var div_ftb_wrapper = generate_html_tag("div");
    var div_ftb = generate_html_tag("div", "fbt_wrap");
    div_ftb.classList.add('show_fbt_title')
    var div_ftb_span = generate_html_tag("span");
    div_ftb_span.textContent = "Iti mai recomandam si"
    div_ftb.appendChild(div_ftb_span)
    var div_ftb_arrow = generate_html_tag("div", "div_ftb_arrow");
    // div_ftb.style.display="none"loader_wait_span
    div_ftb.setAttribute('onClick', 'fbt_show_toggle(this)')
    div_ftb.appendChild(div_ftb_arrow)
    div_ftb_wrapper.appendChild(div_ftb)
    div_ftb_wrapper.setAttribute('id', 'inc_sku_fbt');
    div_ftb_wrapper.style.display = "none"
    div_ftb_wrapper.classList.add("increasingly_bundles");

    var inc_fbt_layout = generate_html_tag("div");
    inc_fbt_layout.setAttribute('id', 'inc_fbt_layout')
    inc_fbt_layout.classList.add('loader_wait_span_fbt')
    div_ftb_wrapper.appendChild(inc_fbt_layout)

    div_ftb_wrapper.setAttribute('sku', elm.value)
    if (elm.parentNode.querySelector('#inc_sku_fbt') == null) {
        elm.parentNode.appendChild(div_ftb_wrapper)
    }

}

function fbt_show_toggle(element) {
    var active_is = false;
    if (element.parentNode.classList.contains('active') == true) {
        active_is = true;
    }
    if (document.querySelector('#inc_sku_fbt.active') != null) {
        document.querySelector('#inc_sku_fbt.active').classList.remove('active');
    }
    if (document.querySelector('.pSrch-row.active') != null) {
        document.querySelector('.pSrch-row.active').classList.remove('active');
    }

    if (active_is == false) {
        element.parentNode.classList.toggle('active');
        document.querySelector('body').classList.toggle('fbt_active')
        if (element.parentNode.querySelector('.dots_ic_bundle li') != null) {
            element.parentNode.querySelector('.dots_ic_bundle li').click()
        }
        element.parentNode.parentNode.parentNode.parentNode.classList.toggle('active');
    }
    if (element.parentNode.querySelector('.fbt_wrap') != null) {
        element.parentNode.querySelector('.fbt_wrap').classList.remove('show_fbt_title');
        // document.querySelector('.fbt_wrap.show_fbt_title').classList.remove('show_fbt_title');
    }
    setTimeout(function() {
        fbt_disable_product_oss_attributes(element.parentNode)
    }, 5000)
    setTimeout(function() {
        if (element.parentNode.parentNode != null) {
            if (element.parentNode.parentNode.querySelector('#inc_sku_fbt .ic_product') == null && element.parentNode.parentNode.querySelector('#inc_sku_fbt .fbt_bundle_header_noproduct') == null) {
                if (element.parentNode.parentNode.querySelector('#inc_sku_fbt .loader_wait_span_fbt') != null) {
                    element.parentNode.parentNode.querySelector('#inc_sku_fbt .loader_wait_span_fbt').classList.remove('loader_wait_span_fbt')
                }
                element.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout').innerHTML = "Te rog asteapta..."
                setTimeout(function() {
                    if (element.parentNode.parentNode.querySelector('#inc_sku_fbt .ic_product') == null) {
                        element.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout').innerHTML = "<span>Ne pare rau!</span> Acest produs nu este disponibil pentru comandare"
                        // "Sorry, Products are not available for this SKU"
                        var lay_fbt = element.parentNode.parentNode.querySelector('#inc_sku_fbt #inc_fbt_layout');
                        var fbt_bundle_header = generate_html_tag("div", "fbt_bundle_header_noproduct");
                        var fbt_bundle_close = generate_html_tag("span", "fbt_bundle_close");
                        fbt_bundle_header.appendChild(fbt_bundle_close)
                        lay_fbt.appendChild(fbt_bundle_header)
                        lay_fbt.classList.add('no_product')
                        fbt_bundle_close.addEventListener('click', function(e) {
                            var psearch = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;;
                            document.querySelector('body').classList.remove('fbt_active');
                            psearch.querySelector('#inc_sku_fbt.active').classList.remove('active');
                            psearch.classList.remove('active')
                        });
                    }
                }, 20000)

            }
        }
    }, 20000)
}


function fbt_disable_product_oss_attributes(element) {
    var all_ic_prod_card = element.querySelectorAll('.ic_product');
    for (icp = 0; icp < all_ic_prod_card.length; icp++) {
        var element = all_ic_prod_card[icp];
        var ic_prod_card = element.querySelectorAll('.select_wrapper');
        var product_id = element.getAttribute('data_selected_prod_id')
        for (k = 0; k < ic_prod_card.length; k++) {
            var all_li = ic_prod_card[k].querySelectorAll('ul li')
            for (kl = 0; kl < all_li.length; kl++) {
                var ch_pid = all_li[kl].querySelector('a').getAttribute('c_pid')
                all_li[kl].classList.remove('oos_disabled')
                all_li[kl].style.display = "block"
                // all_ic_prod_card[icp].classList.remove('simple')
                if (ch_pid != product_id) {
                    if (bundle_vars.instock_attribues.indexOf(ch_pid) == -1) {
                        all_li[kl].classList.add('oos_disabled')
                        all_li[kl].style.display = "none"
                        // all_ic_prod_card[icp].classList.add('simple')
                        if (all_li[kl].classList.contains('active')) {
                            all_li[kl].classList.remove('active')
                            if (all_li[kl].nextElementSibling != undefined) {
                                all_li[kl].nextElementSibling.classList.remove('active')
                            }
                        }
                    }
                }
            }
        }
    }
}


function add_product_to_client_module(element, prodId, config) {
    if (element.innerText != "Adăugate" && element.innerText != "Actualizări") {
        element.innerText = "În curs de adăugare..";
        var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
        var prod_block_card = element.parentNode.parentNode.parentNode;
        if (config == "config") {
            prod_block_card = prod_block_card.parentNode.parentNode.parentNode
        }
        var prod_id = prod_block_card.getAttribute('data_selected_prod_id');
        var c_sku = null;
        var c_pid = null;
        if (config == "config" && prod_block_card.querySelector('.select_wrapper li.active a') != null) {
            var prod_id = prod_block_card.querySelector('.select_wrapper li.active a').getAttribute('c_pid')
            //c_pid
        }

        if (cust_data_online != null) {
            for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
                if (cust_data_online.dataList[ca].active == true) {
                    active_customer = cust_data_online.dataList[ca];
                    break;
                }
            }
            if (active_customer != "") {
                cust_id = active_customer.custId
                inc_cust_name = active_customer.custName
            } else {
                if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                    cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
                }
                if (document.querySelector('#co-mobMenu .name') != null) {
                    var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
                }
            }
            var inc_acctNr = sessionStorage.getItem("acctNr")
            var order_n = ""
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                order_n = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
            }
            var inc_profile = JSON.parse(sessionStorage.getItem("profileRes"))
            var url = "//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/" + inc_acctNr + "/itemvalidation?lineNrs=" + prod_id + "%3A1&cmpgnId=" + inc_profile.currCmpgnId + "&placOrdSctnCd=REGULAR&custId=" + cust_id + "&ordNr=" + order_n + "&rule=basic";
            if (switch_board.unauthorized == true) {
                fbt_product_status_validation_check(element, prodId, config)
            } else {
                $.ajax({
                    type: "GET",
                    url: url,
                    processData: false,
                    cacheable: false,
                    dataType: "json",
                    contentType: "application/json",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
                        xhr.setRequestHeader('content-type', 'application/json');
                    },
                    success: function(result, xhr) {

                        if (result != "" && xhr == "success") {
                            var resp_ajax = result
                            if (resp_ajax[0].valid == true && resp_ajax[0].rsnCd != "NOT_FOUND") {
                                // element.innerText = "Adăugate";
                                fbt_product_status_validation_check(element, prodId, config)
                            } else {
                                // 
                                var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                                inc_not_found_error.innerHTML = "Produsul nu a fost găsit. Verificați numărul comenzii."
                                inc_not_found_error.setAttribute('style', 'color:red;font-size:11px;')
                                if(element.parentNode.querySelector('.inc_not_found_error') != null){
                                    var remerrelm=element.parentNode.querySelector('.inc_not_found_error')
                                    remerrelm.parentNode.removeChild(remerrelm)
                                }
                                element.parentNode.appendChild(inc_not_found_error);
                                element.innerText = "Adaugă în coș";
                                setTimeout(function() {
                                    if (inc_not_found_error != null) {
                                        inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                                    }
                                }, 4000)
                            }
                        }
                        setTimeout(function(){
                            if(document.querySelector('.ic_quick_view_popup.active .inc_icon_close') != null){
                                document.querySelector('.ic_quick_view_popup.active .inc_icon_close').click()
                            }
                        },2000)
                    },
                    error: function(jqXHR, textStatus, errorMessage) {
                        var inc_not_found_error = generate_html_tag('div', 'inc_not_found_error');
                        inc_not_found_error.innerHTML = "Produsul nu a fost găsit. Verificați numărul comenzii.."
                        inc_not_found_error.setAttribute('style', 'color:red;font-size:11px;')
                        if(element.parentNode.querySelector('.inc_not_found_error') != null){
                            var remerrelm=element.parentNode.querySelector('.inc_not_found_error')
                            remerrelm.parentNode.removeChild(remerrelm)
                        }
                        element.parentNode.appendChild(inc_not_found_error);
                        element.innerText = "Adaugă în coș";
                        setTimeout(function() {
                            if (inc_not_found_error != null) {
                                inc_not_found_error.parentNode.removeChild(inc_not_found_error);
                            }
                        }, 4000)
                    },
                });
            }
        }
    } else if (element.innerText == "Actualizări") {
        element.innerText = "Actualizări.."
        fbt_product_status_validation_check(element, prodId, config, "update")
    }
}

function fbt_product_status_validation_check(element, prodId, config, update) {
    if (document.querySelector('.ic_added_item_block_container') == null) {
        var added_sibling = document.querySelector('.ordrUpdt');
        if (window.innerWidth < 767) {
            var added_sibling = document.querySelectorAll('.ordrUpdt')[1]
        }
        var ic_added_item_block_container = generate_html_tag('div', 'ic_added_item_block_container');
        var ic_added_item_block = generate_html_tag('div', 'ic_added_item_block');
        ic_added_item_block_container.style.display = "none"
        var ic_added_text = generate_html_tag('div', 'ic_added_text');
        ic_added_text.textContent = "Adăugate și"
        var ic_added_product_count = generate_html_tag('div', 'ic_added_product_count');
        var ic_added_product_icon = generate_html_tag('div', 'ic_added_product_icon');
        ic_added_item_block.appendChild(ic_added_text);
        ic_added_item_block.appendChild(ic_added_product_count);
        ic_added_product_count.appendChild(ic_added_product_icon);
        ic_added_item_block_container.appendChild(ic_added_item_block)

        ic_added_item_block.addEventListener('click', function(e) {
            if (document.querySelector('.ic_added_item_block') != null) {
                document.querySelector('.ic_added_item_block').classList.toggle('active');
            }
            if (document.querySelector('.ic_added_product_list_item_block') != null) {
                document.querySelector('.ic_added_product_list_item_block').classList.toggle('active');
            }
            //ic_added_product_list_item_block
        })

        var ic_added_product_list_item_block = generate_html_tag('div', 'ic_added_product_list_item_block');
        ic_added_item_block_container.appendChild(ic_added_product_list_item_block)
        if (added_sibling != undefined && added_sibling != null) {
            added_sibling.parentNode.insertBefore(ic_added_item_block_container, added_sibling);
        }
    }
    var app_prod_itm = document.querySelector('.ic_added_product_list_item_block');
    var ic_added_container = document.querySelector('.ic_added_item_block_container')
    var ic_added_count = document.querySelector('.ic_added_product_icon');

    if (ic_added_container != null) {
        ic_added_container.style.display = "block"
        var prod_block_card = element.parentNode.parentNode.parentNode;
        if (config == "config") {
            prod_block_card = prod_block_card.parentNode.parentNode.parentNode
        }
        if (prod_block_card != null) {
            // prod_block_card.classList.add('inc_checked');

            var prod_id = prod_block_card.getAttribute('data_selected_prod_id');
            var prod_addtocart_sku = prod_block_card.getAttribute('data_selected_prod_sku');
            var c_sku = null;
            var c_pid = null;
            if (config == "config" && prod_block_card.querySelector('.select_wrapper li.active a') != null) {
                var c_sku = prod_block_card.querySelector('.select_wrapper li.active a').getAttribute('sku')
                var c_pid = prod_block_card.querySelector('.select_wrapper li.active a').getAttribute('c_pid')
                //c_pid
            }
            var exit_prod = null;
            if (config == "config") {
                exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[c_pid="' + c_pid + '"]');
            } else {
                exit_prod = document.querySelector('.ic_added_product_list_item_block .added_list_item_wrapper[product_id="' + prod_id + '"]');
            }
            var prod_bundle_id = prod_block_card.getAttribute('bundle_id');
            var prod_sku = prod_block_card.querySelector('.prod_sku').innerText.trim();
            var prod_img = prod_block_card.querySelector('.pdt_img img').src;
            var prod_name = prod_block_card.querySelector('.pdt_name p').innerText.trim();
            var qty = prod_block_card.querySelector('.q_holder input').value;


            // || (exit_prod == null && element.innerText == "Adăugate" && c_pid != null)
            if ((exit_prod == null && element.innerText != "Adăugate" && update != "update")) {
                element.innerText = "Adăugate";
                var p_card = document.querySelectorAll('#inc_fbt_layout .ic_product[data_selected_prod_id="' + prod_id + '"]');
                for (r = 0; r < p_card.length; r++) {
                    if (p_card[r] != null) {
                        p_card[r].classList.add('inc_checked');
                        // p_card[r].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Adăugate"
                        if(p_card[r].querySelector('.prod_quick_view.fbt_btn').classList.contains('configurable') == true){
                            p_card[r].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Alege o nuanță"
                        }else{
                            p_card[r].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Adăugate"
                        }
                        if (p_card[r].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable') != null) {
                            p_card[r].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerHTML = "Adăugate"
                        }
                    }
                }
                var prod_list_block = document.querySelector('.ic_added_product_list_item_block')
                var added_list_item_wrapper = generate_html_tag('div', 'added_list_item_wrapper');

                if (config == "config") {

                    added_list_item_wrapper.classList.add('config_prod')
                }
                if (app_prod_itm != null || app_prod_itm != undefined) {
                    app_prod_itm.insertBefore(added_list_item_wrapper, app_prod_itm.childNodes[0]);
                }
                added_list_item_wrapper.setAttribute('product_id', prod_id);
                added_list_item_wrapper.setAttribute('product_sku', prod_sku);
                added_list_item_wrapper.setAttribute('product_bundle_id', prod_bundle_id);
                added_list_item_wrapper.setAttribute('prod_addtocart_sku', prod_addtocart_sku);
                added_list_item_wrapper.setAttribute('c_sku', c_sku);
                added_list_item_wrapper.setAttribute('c_pid', c_pid);

                var added_list_item_img_block = generate_html_tag('div', 'added_list_item_img_block');
                var added_list_item_img = generate_html_tag('img');
                added_list_item_img.setAttribute('src', prod_img);
                added_list_item_img_block.appendChild(added_list_item_img);
                added_list_item_wrapper.appendChild(added_list_item_img_block)
                var added_list_item_name_block = generate_html_tag('div', 'added_list_item_name_block');
                added_list_item_wrapper.appendChild(added_list_item_name_block)

                var added_list_item_id = generate_html_tag('div', 'added_list_item_id');
                added_list_item_id.innerHTML = prod_sku;
                added_list_item_name_block.appendChild(added_list_item_id)

                var added_list_item_name = generate_html_tag('div', 'added_list_item_name');
                added_list_item_name.innerHTML = prod_name;
                added_list_item_name_block.appendChild(added_list_item_name);

                var added_list_item_qty = generate_html_tag('div', 'added_list_item_qty');
                added_list_item_wrapper.appendChild(added_list_item_qty)
                var counter_div = generate_html_tag('div', 'counter_div');
                get_product_quantity_box(null, null, added_list_item_qty, counter_div, prod_id)

                var added_list_item_delete = generate_html_tag('div', 'added_list_item_delete');
                var delete_list = generate_html_tag('span', 'delete');
                added_list_item_delete.setAttribute('onClick', 'delete_added_items(this)')
                added_list_item_delete.appendChild(delete_list)
                added_list_item_wrapper.appendChild(added_list_item_delete)

                var qty_wr = added_list_item_wrapper.querySelector('.q_holder input').value = qty
                added_list_item_wrapper.querySelector('.q_holder input[type="hidden"]').value = qty
                //type="hidden"
                var total_count = prod_list_block.querySelectorAll('.added_list_item_wrapper').length;
                ic_added_count.innerHTML = total_count
                bundle_vars.push_product_to_add.push({
                    bid: prod_bundle_id,
                    id: prod_id,
                    p_sku: prod_addtocart_sku,
                    c_pid: c_pid,
                    c_sku: c_sku,
                    pname: prod_name,
                    qty: qty,
                    p_img: prod_img
                })
                if (config == "config") {
                    if (bundle_vars.all_dup_child_prod.indexOf(c_pid) == -1) {
                        bundle_vars.all_dup_child_prod.push(c_pid)
                    }
                } else {
                    if (bundle_vars.all_dup_added_prod.indexOf(prod_id) == -1) {
                        bundle_vars.all_dup_added_prod.push(prod_id)
                    }
                }
            } else {
                if (exit_prod != null) {
                    if (element.innerText == "Adăugate" || update == "update") {
                        var o_qty = exit_prod.querySelector('.q_holder input').value
                        setTimeout(function() {
                            element.innerText = "Adăugate"
                        }, 1000)
                    }
                    var old_qty = exit_prod.querySelector('.q_holder input').value
                    exit_prod.querySelector('.q_holder input').value = qty
                    exit_prod.querySelector('.q_holder input[type="hidden"]').value = qty
                    for (var b = 0; b < bundle_vars.push_product_to_add.length; b++) {
                        if (c_pid != null) {
                            if (bundle_vars.push_product_to_add[b].c_pid == c_pid) {
                                bundle_vars.push_product_to_add[b].qty = qty
                            }
                        } else {
                            if (bundle_vars.push_product_to_add[b].id == prod_id) {
                                bundle_vars.push_product_to_add[b].qty = qty
                            }
                        }
                    }
                    if (document.querySelector('.ic_quick_view_popup.active .inc_icon_close') != null) {
                        // document.querySelector('.ic_quick_view_popup.active .inc_icon_close').click();
                    }
                }
            }
            updateFBTcount()

        }
    }
}

function delete_added_items(ev) {
    var elm = ev.parentNode
    var p_id = elm.getAttribute('product_id')
    var c_id = elm.getAttribute('c_pid');
    var listToDelete = []
    Array.prototype.remove_prod_list = function() {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    if (elm.classList.contains('config_prod') == true) {
        listToDelete[0] = c_id
        for (var i = 0; i < bundle_vars.push_product_to_add.length; i++) {
            var obj = bundle_vars.push_product_to_add[i];
            if (obj != undefined) {
                if (listToDelete.indexOf(obj.c_pid) !== -1) {
                    bundle_vars.push_product_to_add.splice(i, 1);
                }
            }
        }
        bundle_vars.push_product_to_add = bundle_vars.push_product_to_add
        bundle_vars.all_dup_child_prod.remove_prod_list(c_id);

    } else {
        listToDelete[0] = p_id
        for (var i = 0; i < bundle_vars.push_product_to_add.length; i++) {
            var obj = bundle_vars.push_product_to_add[i];
            if (obj != undefined) {
                if (listToDelete.indexOf(obj.id) !== -1) {
                    bundle_vars.push_product_to_add.splice(i, 1);
                }
            }
        }
        bundle_vars.push_product_to_add = bundle_vars.push_product_to_add
        bundle_vars.all_dup_added_prod.remove_prod_list(p_id);
    }
    //Alege o nuanță
    var p_card = document.querySelectorAll('#inc_fbt_layout .ic_product.inc_checked[data_selected_prod_id="' + p_id + '"]');
    for (r = 0; r < p_card.length; r++) {
        if (p_card[r] != null) {
            p_card[r].classList.remove('inc_checked');
            
            if(p_card[r].querySelector('.prod_quick_view.fbt_btn').classList.contains('configurable') == true){
                p_card[r].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Alege o nuanță"
            }else{
                p_card[r].querySelector('.prod_quick_view.fbt_btn').innerHTML = "Adaugă în coș"
            }
            if (p_card[r].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable') != null) {
                p_card[r].querySelector('.ic_quick_view_popup .prod_quick_view.fbt_btn.configurable').innerHTML = "Adaugă în coș"
            }
        }
    }
    if (elm != null) {
        elm.parentNode.removeChild(elm);
    }
    var ic_added_count = document.querySelector('.ic_added_product_icon');
    var total_count = document.querySelectorAll('.added_list_item_wrapper').length;
    ic_added_count.innerHTML = total_count
    if (total_count == 0) {
        setTimeout(function() {
            if (document.querySelector('.ic_added_item_block_container') != null) {
                document.querySelector('.ic_added_item_block_container').style.display = "none"
            }
        }, 1000)
    }
    updateFBTcount()
}

function fbt_add_to_cart() {
    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
    var inc_cmpgnId = campNr
    var inc_acctNr = sessionStorage.getItem("acctNr")
    var inc_profile = JSON.parse(sessionStorage.getItem("profileRes"))
    var add_to_cart_param = []
    var data_param = {}
    var inc_cust_name = ""
    var cust_id = ""
    var active_customer = ""
    var main_p_id = ""
    var current_act = ""
    var p_id1 = "";
    if (document.querySelector('.yrOrders-C.active .name') != null) {
        var current_act = document.querySelector('.yrOrders-C.active .name').innerText.trim();
    }
    for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
        if (current_act != "") {
            if (cust_data_online.dataList[ca].custName == current_act) {
                active_customer = cust_data_online.dataList[ca];
                break;
            }
        } else {
            if (cust_data_online.dataList[ca].active == true) {
                active_customer = cust_data_online.dataList[ca];
                break;
            }
        }
    }
    if (active_customer != "") {
        cust_id = active_customer.custId
        inc_cust_name = active_customer.custName
    } else {
        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
            cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
        }
        if (document.querySelector('#co-mobMenu .name') != null) {
            var inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
        }
    }

    if (cust_data_online != undefined) {
        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
            for (a = 0; a < bundle_vars.push_product_to_add.length; a++) {
                p_id1 = bundle_vars.push_product_to_add[a].id
                if (bundle_vars.push_product_to_add[a].c_pid != null) {
                    var inc_param = {
                        cmpgnId: campNr,
                        lineNr: bundle_vars.push_product_to_add[a].c_pid.toString(),
                        qty: bundle_vars.push_product_to_add[a].qty,
                        custId: cust_id,
                        placOrdSctnCd: "INCLINE"
                    }
                } else {
                    var inc_param = {
                        cmpgnId: campNr,
                        lineNr: bundle_vars.push_product_to_add[a].id.toString(),
                        qty: bundle_vars.push_product_to_add[a].qty,
                        custId: cust_id,
                        placOrdSctnCd: "INCLINE"
                    }
                }
                add_to_cart_param.push(inc_param)
            }
        } else {

            for (a = 0; a < bundle_vars.push_product_to_add.length; a++) {
                p_id1 = bundle_vars.push_product_to_add[a].id
                if (bundle_vars.push_product_to_add[a].c_pid != null) {
                    var inc_param = [{
                        custId: cust_id,
                        lineNr: bundle_vars.push_product_to_add[a].c_pid.toString(),
                        placOrdSctnCd: "INCLINE",
                        qty: bundle_vars.push_product_to_add[a].qty,
                        cmpgnId: campNr
                    }]
                } else {
                    var inc_param = [{
                        custId: cust_id,
                        lineNr: bundle_vars.push_product_to_add[a].id.toString(),
                        placOrdSctnCd: "INCLINE",
                        qty: bundle_vars.push_product_to_add[a].qty,
                        cmpgnId: campNr
                    }]
                }
                add_to_cart_param.push(inc_param)
            }
        }
    }
    console.log("add_to_cart_param " + add_to_cart_param)
    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
        var inc_login_user_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim()
    }
    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
        var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order/' + inc_login_user_id + '/cust/' + cust_id + '?groups=custords'
    } else {
        var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order?groups=custords';
    }
    // show_loader();
    if (document.querySelector('#co-mobMenu .ordr-date') != null) {
        add_prod_ajax_re(null, null, p_id1, null, add_to_cart_param, null, url1, null, null, null, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr);
    } else {
        add_prod_ajax_re(null, null, p_id1, null, add_to_cart_param, null, url1, null, null, null, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr);
    }
    updateFBTcount()
    //edit_btn_show_on_add()

}

function add_prod_ajax_re(source, bundleId, id1, id2, formData, new_temp, url0, href0, img0, qty_main, p_id1, cust_ids, inc_campNr, inc_cust_name, inc_acctNr,checkbox,elbtn) {
    if(document.querySelector('.yrOrders-C.active .name') != null){
        lastadded_product = document.querySelector('.yrOrders-C.active .name').innerText.trim()
    }
    if (document.querySelector('#co-mobMenu .ordr-date') == null) {
        if (formData.length != 0) {
            add_to_cart_tracking_multiple("INCLINE")
            if (document.querySelector('.ic_added_item_block_container') != null) {
                document.querySelector('.ic_added_item_block_container').style.display = "none"
            }
            if (document.querySelector('.ic_added_product_list_item_block') != null) {
                document.querySelector('.ic_added_product_list_item_block').innerHTML = ""
            }
            document.querySelector('.mab-banners, .promo-ltbl').setAttribute('style', 'z-index: 100;')
            // addProductsToCart(p_id1, "1", "REG", "", cust_ids, "REGULAR", "custords", inc_cust_name)
            var a = [{
                custId: cust_ids,
                lineNr: p_id1,
                placOrdSctnCd: "REGULAR",
                qty: 1,
                cmpgnId: inc_campNr
            }]
            var b = inc_cust_name

            var last_session_cust_data = JSON.parse(sessionStorage.getItem("custData"))
            localStorage.setItem('inc_last_session_cust_data', JSON.stringify(last_session_cust_data))
            localStorage.setItem('inc_fresh_order', '1')
            // fnsForAddPdtToCart.invokeCreateNewOrder(a, b)
            document.querySelector('.mab-banners, .promo-ltbl').setAttribute('style', 'z-index: 99999999;')

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url0, false);
            xhr.onload = function() {}
            xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
            xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.onerror = function(errorMessage) {
                location.reload()
            }
            xhr.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    if(elbtn != null){
                        elbtn.classList.remove('inc_loading')
                    }
                    if(checkbox == "checkbox"){
                        var elproductchecked = document.querySelectorAll('.ic_product.inc_checked') 
                        for(var p=0;p<elproductchecked.length;p++){
                            elproductchecked[p].classList.remove('inc_checked')
                            elproductchecked[p].querySelector('.inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                            elproductchecked[p].querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                        }
                        updateplpactivemodalprc()
                    }
                    if (document.querySelector('#cartbag span') == null) {
                        var r = JSON.parse(this.responseText)
                        var cookieorderinfo = JSON.parse(decodeURIComponent(decodeURIComponent(readCookie('orderInfo'))))
                        setObject_m("orderInfo", {
                            ordrNr: r.ordNr,
                            ordrNm: inc_cust_name,
                            isRepOrdr : cookieorderinfo.isRepOrdr,
                            ordrngNavObj : cookieorderinfo.ordrngNavObj,
                            custId:cust_ids,
                            totCustCnt:cookieorderinfo.totCustCnt
                        })
                        document.querySelector('.mcrt-btn-c .mcrt-btn.avn-prim-btn').click()
                    }
                    
                    var result = result = JSON.parse(xhr.response)
                    setTimeout(function() {
                        if (document.querySelector('.inc_add_to_basket_btn.loading') != null) {
                            document.querySelector('.inc_add_to_basket_btn.loading').classList.remove('loading');
                        }
                        if(checkbox == "checkbox"){
                            // window.location.assign('https://www2.avoncosmetics.ro/ro-home/orders/cart')
                        }
                    }, 1000)
                    
                }
            }
            xhr.send(JSON.stringify(formData));
            setTimeout(function() {
                bundle_vars.push_product_to_add = []
            }, 500)
        }
    } else {
        add_to_cart_tracking_multiple("INCLINE")
        if (document.querySelector('.ic_added_item_block_container') != null) {
            document.querySelector('.ic_added_item_block_container').style.display = "none"
        }
        if (document.querySelector('.ic_added_product_list_item_block') != null) {
            document.querySelector('.ic_added_product_list_item_block').innerHTML = ""
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url0, false);
        xhr.onload = function() {}
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onerror = function() {
            if(elbtn != null){
                elbtn.classList.remove('inc_loading')
            }
            if(checkbox == "checkbox"){
                var elproductchecked = document.querySelectorAll('.ic_product.inc_checked') 
                for(var p=0;p<elproductchecked.length;p++){
                    elproductchecked[p].classList.remove('inc_checked')
                    elproductchecked[p].querySelector('.inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                    elproductchecked[p].querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                }
                updateplpactivemodalprc()
            }
        }
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var result = result = JSON.parse(xhr.response)
                if(elbtn != null){
                    elbtn.classList.remove('inc_loading')
                }
                if(checkbox == "checkbox"){
                    var elproductchecked = document.querySelectorAll('.ic_product.inc_checked') 
                    for(var p=0;p<elproductchecked.length;p++){
                        elproductchecked[p].classList.remove('inc_checked')
                        elproductchecked[p].querySelector('.inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                        elproductchecked[p].querySelector('.ic_quick_view_popup .inc_add_to_basket_btn').innerHTML = '<span style="font-size:14px;">Selecteaza produsul</span>';
                    }
                    updateplpactivemodalprc()
                }
                if (document.querySelector('#cartbag span') == null) {
                    window.location.reload()
                }
                // add_to_cart_ajax_result(source, bundleId, client_vars.product_ids[0], id1, null, null, qty_main);
                if (result.custOrds[0] != undefined) {
                    if (document.querySelector('.inc_popup.active') != null) {
                        document.querySelector('.nav_wrap_price_wrapper').style.display = "none"
                        document.querySelector('.inc_popup .loader_wait_span').style.display = "flex"
                    }
                    var cust_data_online_s = JSON.parse(sessionStorage.getItem("custData"))

                    var dataList_inc = [];
                    var update_sesion_cart_data = {}
                    var is_flag = false;
                    


                    var prev_qt = 0
                    if (document.querySelector('#cartbag span') != null) {
                        prev_qt = document.querySelector('#cartbag span').innerHTML
                    }

                    var checkadded = result.custOrds[0].items;
                    var iserrorwrap = document.querySelector('#ic_bundle_popup .ic_added_item_block_container')
                    if (iserrorwrap != null) {
                        iserrorwrap.parentNode.removeChild(iserrorwrap);
                    }
                    setTimeout(function() {
                        var error_added_prod = []
                        var error_val_msg = ""
                        var app_prod_itm_cont = document.querySelector('#ic_bundle_popup .ic_discount_wrapper')


                        var ic_added_item_block_container = generate_html_tag('div', 'ic_added_item_block_container');
                        var ic_added_item_block = generate_html_tag('div', 'ic_added_item_block');
                        ic_added_item_block_container.style.display = "none"
                        var ic_added_text = generate_html_tag('div', 'ic_added_text');
                        ic_added_text.textContent = "Acesta este un produs care poate fi folosit"
                        var ic_added_product_count = generate_html_tag('div', 'ic_added_product_count');
                        var ic_added_product_icon = generate_html_tag('div', 'ic_added_product_icon');
                        ic_added_item_block.appendChild(ic_added_text);
                        ic_added_item_block.appendChild(ic_added_product_count);
                        ic_added_product_count.appendChild(ic_added_product_icon);
                        ic_added_item_block_container.appendChild(ic_added_item_block)

                        ic_added_item_block.addEventListener('click', function(e) {
                            if (document.querySelector('.ic_added_item_block') != null) {
                                document.querySelector('.ic_added_item_block').classList.toggle('active');
                            }
                            if (document.querySelector('.ic_added_product_list_item_block') != null) {
                                document.querySelector('.ic_added_product_list_item_block').classList.toggle('active');
                            }
                            //ic_added_product_list_item_block
                        })

                        var ic_added_product_list_item_block = generate_html_tag('div', 'ic_added_product_list_item_block');
                        ic_added_item_block_container.appendChild(ic_added_product_list_item_block)
                        if (app_prod_itm_cont != undefined && app_prod_itm_cont != null) {
                            app_prod_itm_cont.parentNode.insertBefore(ic_added_item_block_container, app_prod_itm_cont);
                        }
                        ic_added_item_block_container.classList.add('error_added_product')

                        for (er = 0; er < checkadded.length; er++) {
                            if (bundle_vars.all_dup_child_prod.indexOf(checkadded[er].lineNr) >= 0 || bundle_vars.all_dup_added_prod.indexOf(checkadded[er].lineNr) >= 0) {
                                if (checkadded[er].valid == undefined) {
                                    //
                                    //document.querySelector('.ic_product.configurable li a[c_pid="'+a+'"]')
                                    //child_img_url

                                } else {
                                    if (checkadded[er].valid == "CUST_ORD_NOT_ALLOWED") {
                                        error_val_msg = "Nu poti comanda produsul cu acest cod."
                                    } else if (checkadded[er].valid == "EXCEEDED_LIMIT") {
                                        error_val_msg = "Ai depasit limita permisa";
                                    } else if (checkadded[er].valid == "MAX_QUANTITY") {
                                        error_val_msg = "Nu puteti adauga mai mult de 1 produs.";
                                    } else if (checkadded[er].valid == "NOT_AVAILABLE") {
                                        error_val_msg = "Produsul cu acest cod nu este disponibil.";
                                    } else if (checkadded[er].valid == "NOT_AVAILABLE_CAMPAIGN") {
                                        error_val_msg = "Aceasta campanie nu este disponibila.";
                                    } else if (checkadded[er].valid == "NOT_ELIGIBLE_ACCT_TYPE") {
                                        error_val_msg = "Acest tip de cont nu este eligibil";
                                    } else if (checkadded[er].valid == "NOT_ELIGIBLE_USER") {
                                        error_val_msg = "Acest tip de utilizator nu este eligibil.";
                                    } else if (checkadded[er].valid == "NOT_ELIGIBLE_USER_ITEM") {
                                        error_val_msg = "Acest produs nu este disponibil pentru segmentul din care faceti parte.";
                                    } else if (checkadded[er].valid == "NOT_FOUND") {
                                        error_val_msg = "Acest produs nu a fost gasit in campania curenta.";
                                    } else if (checkadded[er].valid == "NOT_ORDERABLE") {
                                        error_val_msg = "Produsul cu acest cod nu poate fi comandat.";
                                    } else if (checkadded[er].valid == "NO_VALID_ITEM_FOUND") {
                                        error_val_msg = "Produsul nu este valid.";
                                    } else if (checkadded[er].valid == "SHORT_ITEM") {
                                        error_val_msg = "Produsul nu este in stoc si nu poate fi comandat.";
                                    }

                                    if (error_added_prod.indexOf(checkadded[er].lineNr) == -1) {
                                        error_added_prod.push(checkadded[er].lineNr)
                                        ic_added_item_block_container.style.display = "block"
                                        // var error_val_msg="Výrobek není možné vložit do objednávky. Nebyla splněna podmínka pro objednání."
                                        var prod_id = checkadded[er].lineNr;
                                        var prod_sku = checkadded[er].lineNr;
                                        var img_src = ""
                                        var im__card = document.querySelector('.ic_product[data_selected_prod_id = "' + checkadded[er].lineNr + '"]');
                                        var c_im_pcard = document.querySelector('.ic_product.configurable li a[c_pid="' + a + '"]')
                                        if (im__card != null) {
                                            img_src = im__card.querySelector('.pdt_img img').src
                                        } else if (c_im_pcard != null) {
                                            img_src = c_im_pcard.getAttribute('child_img_url')
                                        }
                                        var prod_img = img_src;
                                        var prod_name = checkadded[er].prodNm;
                                        var app_prod_itm = document.querySelector('#ic_bundle_popup .ic_added_product_list_item_block')
                                        var added_list_item_wrapper = generate_html_tag('div', 'added_list_item_wrapper');
                                        if (app_prod_itm != null || app_prod_itm != undefined) {
                                            app_prod_itm.appendChild(added_list_item_wrapper)
                                        }
                                        var prod_list_block = document.querySelector('#ic_bundle_popup .ic_added_product_list_item_block')
                                        var added_list_item_img_block = generate_html_tag('div', 'added_list_item_img_block');
                                        var added_list_item_img = generate_html_tag('img');
                                        added_list_item_img.setAttribute('src', prod_img);
                                        added_list_item_img_block.appendChild(added_list_item_img);
                                        added_list_item_wrapper.appendChild(added_list_item_img_block)
                                        var added_list_item_name_block = generate_html_tag('div', 'added_list_item_name_block');
                                        added_list_item_wrapper.appendChild(added_list_item_name_block)

                                        var added_list_item_id = generate_html_tag('div', 'added_list_item_id');
                                        added_list_item_id.innerHTML = prod_sku;
                                        added_list_item_name_block.appendChild(added_list_item_id)

                                        var added_list_item_name = generate_html_tag('div', 'added_list_item_name');
                                        added_list_item_name.innerHTML = prod_name;
                                        added_list_item_name_block.appendChild(added_list_item_name);



                                        var added_list_item_delete = generate_html_tag('div', 'added_list_item_delete');
                                        var delete_list = generate_html_tag('span', 'delete');
                                        added_list_item_delete.appendChild(delete_list)
                                        added_list_item_wrapper.appendChild(added_list_item_delete)
                                        var error_prod_text = generate_html_tag('div', 'error_prod_text');
                                        error_prod_text.innerHTML = error_val_msg
                                        added_list_item_wrapper.appendChild(error_prod_text)


                                    }
                                    break;
                                }
                            }

                        }

                    }, 1500);
                    // sessionStorage.setItem("custData",JSON.stringify(update_sesion_cart_data))
                    if (document.querySelector('#cartbag span') != null) {
                        document.querySelector('#cartbag span').innerHTML = update_mini_basket_qty();
                    }

                    if (document.querySelectorAll('.sub_total_Price')[0] != undefined) {
                        document.querySelectorAll('.sub_total_Price')[0].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    if (document.querySelector('#cartbag span') != null) {
                        var totl_qty = update_mini_basket_qty();
                        if (document.querySelector('.sub_total_text') != null) {
                            document.querySelector('.sub_total_text').innerHTML = bundle_vars.bag_subtotal + "(" + totl_qty + "  " + bundle_vars.item_s + ")";
                        }
                    }
                    if (document.querySelectorAll('.ic_bundle_price_span')[0] != undefined) {
                        document.querySelectorAll('.ic_bundle_price_span')[0].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    if (document.querySelector('.crt-amt') != null) {
                        var cart_amnt = update_mini_basket_price_to_our_bundle()
                        // update_progress_bar_on_load()
                    }
                    if (document.querySelectorAll('.ic_bundle_price_span')[1] != undefined) {
                        document.querySelectorAll('.ic_bundle_price_span')[1].innerHTML = check_currency_symb(parseFloat(update_mini_basket_price_to_our_bundle()));
                    }
                    if (cust_data_online_s.dataList.length > 1) {
                        var all_cust_online = cust_data_online_s.dataList
                        for (ic_o = 0; ic_o < all_cust_online.length; ic_o++) {
                            if (all_cust_online[ic_o].custId == cust_ids) {
                                var curent_data = all_cust_online[ic_o]
                                curent_data.custName = cust_data_online_s.dataList[ic_o].custName
                                curent_data.gendrCd = cust_data_online_s.dataList[ic_o].gendrCd
                                curent_data.custId = cust_data_online_s.dataList[ic_o].custId
                                curent_data.active = cust_data_online_s.dataList[ic_o].active
                                curent_data.amt = result.custOrds[0].totPrc
                                curent_data.nrItems = result.custOrds[0].noOfItems
                                var qty_item = 0
                                for(w=0;w<result.custOrds[0].items.length;w++){
                                    qty_item = qty_item + result.custOrds[0].items[w].qty
                                }
                                // curent_data.nrItems = qty_item
                                active_customer_for_added_prod = cust_data_online_s.dataList[ic_o].custName
                                dataList_inc.push(all_cust_online[ic_o])
                                var all_cust_elm = document.querySelectorAll('.yrOrders-C .name');
                                var all_cust_elm_orders = document.querySelectorAll('.yrOrders-C');
                                //.r-secAmnt .amount
                                for (cp = 0; cp < all_cust_elm_orders.length; cp++) {
                                    if (all_cust_elm_orders[cp] != undefined) {
                                        var cust_nm = all_cust_elm_orders[cp].querySelector('.yrOrders-C .name').innerText.trim();
                                        if (cust_nm == inc_cust_name) {
                                            if (all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount') != null) {
                                                all_cust_elm_orders[cp].querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(result.custOrds[0].totPrc))
                                            }
                                            all_cust_elm_orders[cp].querySelector('.mab-prim-lnk.itcnt').disabled = false;
                                            if (all_cust_elm_orders[cp].querySelector('.edit-txt') == null) {
                                                // window.location.reload();
                                            }
                                            is_flag = true;
                                        }
                                    }
                                }
                            } else {
                                dataList_inc.push(all_cust_online[ic_o])
                            }
                            if (cust_data_online_s.dataList.length == ic_o + 1) {
                                update_sesion_cart_data = {
                                    "dataList": dataList_inc
                                }
                                sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                                
                            }
                        }
                    } else {
                        var all_cust_online = cust_data_online_s.dataList
                        var curent_data = all_cust_online[0]
                        curent_data.custName = cust_data_online_s.dataList[0].custName
                        curent_data.gendrCd = cust_data_online_s.dataList[0].gendrCd
                        curent_data.custId = cust_data_online_s.dataList[0].custId
                        curent_data.active = cust_data_online_s.dataList[0].active
                        curent_data.amt = result.custOrds[0].totPrc
                        curent_data.nrItems = result.custOrds[0].noOfItems
                        var qty_item = 0
                        for(w=0;w<result.custOrds[0].items.length;w++){
                            qty_item = qty_item + result.custOrds[0].items[w].qty
                        }
                        // curent_data.nrItems = qty_item
                        active_customer_for_added_prod = cust_data_online_s.dataList[0].custName
                        dataList_inc.push(all_cust_online[0])
                        update_sesion_cart_data = {
                            "dataList": dataList_inc
                        }
                        sessionStorage.setItem("custData", JSON.stringify(update_sesion_cart_data))
                        document.querySelector('.r-secAmnt .amount').innerHTML = check_currency_symb(parseFloat(result.custOrds[0].totPrc))
                        document.querySelector('.mab-prim-lnk.itcnt').disabled = false;
                        // edit_btn_show_on_add()
                    }
                }
               
                setTimeout(function(){
                    edit_btn_show_on_add()
                    updateproducttobottom(result)
                    setTimeout(function() {
                        bundle_vars.push_product_to_add = []
                        bundle_vars.all_dup_child_prod = []
                        bundle_vars.all_dup_added_prod = []
                        error_added_prod = []
                        
                        // var celcam_count=document.querySelectorAll('.yrOrders-C .mab-prim-lnk.itcnt .lnk-txt')
                        // for(c=0;c<celcam_count.length;c++){
                        //     count_item = count_item + +celcam_count[c].innerText.replace('Celkem','').replace('ks','').trim()
                        // }
                        // if(document.querySelector('#cartbag > span') != null){
                        //     var prev_c=document.querySelector('#cartbag > span').innerText
                        //     if(count_item > prev_c && count_item != 0){
                        //         document.querySelector('#cartbag > span').innerText = count_item
                        //         if(document.querySelector('.sub_total_text') != null){
                        //             document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + count_item + "  " + bundle_vars.item_s + ")";
                        //         }
                        //     }
                        // }
                        if(document.querySelector('#cartbag span') != null){
                            document.querySelector('mini-cart #cartbag').click()
                        }
                        var count_item=0;
                        var celcam_count=document.querySelectorAll('mini-cart .crt-cnt')
                        for(c=0;c<celcam_count.length;c++){
                            count_item = count_item + +celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim()
                            if(document.querySelectorAll('.yrOrders-C .name')[c].innerText.trim() == document.querySelectorAll('mini-cart .usr-nme-mc')[c].innerText.trim()){
                                document.querySelectorAll('.mab-prim-lnk.itcnt .lnk-txt')[c].innerHTML = "Total " + celcam_count[c].innerText.replace('produse','').replace('PRODUSE','').trim() + " produse";
                            }
                        }
                        if(document.querySelector('#cartbag > span') != null){
                            var prev_c=document.querySelector('#cartbag > span').innerText
                            document.querySelector('#cartbag > span').innerText = count_item
                            if(document.querySelector('.sub_total_text') != null){
                                document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + count_item + "  " + bundle_vars.item_s + ")";
                            }
                        }
                        count_based_on_item()
                    }, 3000)
                    if(checkbox == "checkbox"){
                        // window.location.assign('https://www2.avoncosmetics.ro/ro-home/orders/cart')
                    }
                },2000)
            }
        }
        try {
            if (formData.length != 0) {
                xhr.send(JSON.stringify(formData));
            }
        } catch (err) {
            if(elbtn != null){
                elbtn.classList.remove('inc_loading')
            }
            console.log("network error")
        }
    }
}


function refresh_token(){
    // var url_ref = 'https://www2.avoncosmetics.cz/cz-home/api/mab/secure/refreshToken';
    // jQuery.ajax({
    //     type: "GET",
    //     url: url_ref,
    //     beforeSend: function(xhr) {
    //         if (getCookie_inc('avn_imps') == undefined || getCookie_inc('avn_imps') == "") {
    //             xhr.setRequestHeader('x-sec-token', getCookie_inc('avn_tkn'));
    //         } else {
    //             xhr.setRequestHeader('X-CCA-Token', getCookie_inc('avn_tkn'));
    //         }
    //         xhr.setRequestHeader('content-type', 'application/json');
    //     },
    //     success: function(data) {
    //     }
    // });
}


function updateproducttobottom(items,item_added_list){
    //bundle_vars.push_product_to_add
    var active_cust_item_list=[]
    var all_active_cust_prod=document.querySelectorAll('.yrOrders-C.active .ordItems .name-p')
    // for(l=0;l<all_active_cust_prod.length;l++){
    //     active_cust_item_list.push(all_active_cust_prod[l].innerText.trim())
    // }
    for(l=0;l<bundle_vars.push_product_to_add.length;l++){
        active_cust_item_list.push(bundle_vars.push_product_to_add[l].id)
        active_cust_item_list.push(bundle_vars.push_product_to_add[l].p_sku)
        if(bundle_vars.push_product_to_add[l].c_pid != null){
            active_cust_item_list.push(bundle_vars.push_product_to_add[l].c_pid)
            active_cust_item_list.push(bundle_vars.push_product_to_add[l].c_sku)
        }
    }
    var custids = ""
    var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
    var act_cust="";
    if (cust_data_online != null) {
        for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
            if (cust_data_online.dataList[ca].active == true) {
                act_cust = cust_data_online.dataList[ca];
                break;
            }
        }
        if (act_cust != "") {
            custids = act_cust.custId
        }
    }

    var appended_lineNr=[]
    var append_p_sibling=document.querySelector('.yrOrders-C.active .ordItems')
    if(items.custOrds != undefined){
        for(var h=0;h<items.custOrds.length;h++){
            // if(custids == items.custOrds[h].custId){
                for(var it=0;it<items.custOrds[h].items.length;it++){
                    if(item_added_list == undefined){
                        if(active_cust_item_list.indexOf(items.custOrds[h].items[it].lineNr) >= 0 || active_cust_item_list.indexOf(items.custOrds[h].items[it].fscNr) >= 0){
                            if(appended_lineNr.indexOf(items.custOrds[h].items[it].lineNr) == -1 && appended_lineNr.indexOf(items.custOrds[h].items[it].fscNr) == -1){
                                appended_lineNr.push(items.custOrds[h].items[it].lineNr)
                                appended_lineNr.push(items.custOrds[h].items[it].fscNr)
                                var img_src_p = ""
                                var imgsrc= ""
                                if(items.custOrds[h].items[it].prodUrl != undefined){
                                    imgsrc=items.custOrds[h].items[it].prodUrl.split('.png')[0]
                                }
                                if(imgsrc != undefined && imgsrc != ""){
                                    if(imgsrc.indexOf('_1_th') == -1){
                                        img_src_p = imgsrc + "_1_th" + ".png"
                                    }else{
                                        img_src_p = items.custOrds[h].items[it].prodUrl
                                    }
                                }
                                if(items.custOrds[h].items[it].prodVrntNm != undefined){
                                    var desc=" Produs disponibil "
                                }else{
                                    var desc= " Produs disponibil "
                                }
                                var selvarient=""
                                if(items.custOrds[h].items[it].prodVrntNm != undefined){
                                    selvarient = items.custOrds[h].items[it].prodVrntNm
                                }
                                var qtyss = items.custOrds[h].items[it].qty
                                for(k=0;k<bundle_vars.push_product_to_add.length;k++){
                                    if(bundle_vars.push_product_to_add[k].id == items.custOrds[h].items[it].lineNr ||  bundle_vars.push_product_to_add[k].c_pid == items.custOrds[h].items[it].lineNr || bundle_vars.push_product_to_add[k].p_sku == items.custOrds[h].items[it].fscNr ||  bundle_vars.push_product_to_add[k].c_sku == items.custOrds[h].items[it].fscNr){
                                        qtyss = bundle_vars.push_product_to_add[k].qty
                                    }
                                }
                                
                                if(items.custOrds[h].items[it].prodNm != undefined){
                                    var html_item='<div class="pr-items"><div class="pr-image"><!----><img alt="" src="'+img_src_p+'"><!----></div><div class="pr-desc"><div class="name"><span class="name-p">'+items.custOrds[h].items[it].prodNm+'</span><!----><!----><!----></div><!----><div class="desc">'+selvarient+'  <!----><div class="inStck"> '+desc+' <div class="info-tltp-c small-tt outS-tltp"><div class="info-tltp ttclick">!</div><div class="tltp-wrap tltp-1"><div class="tltp-trang"></div><div class="tltp-cnt"><div class="tltp-cls"><img id="tltpCls1" src="/dam/jcr:72ee0666-e59f-4e5e-8523-a69aa307baae/navClose.svg"></div><div class="tltp-txt">Produsul este momentan indisponibil</div><div class="tltp-lnk mab-prim-lnk"></div></div></div></div></div><!----></div><!----><!----><!----></div><div class="hr-line hidden-lg"></div><div class="pr-subC mv-rgt"><div class="pr-qty" id="incqty_"+'+items.custOrds[h].items[it].fscNr+'> CANT. '+qtyss+' </div></div><div class="pr-subC mv-lft"><!----><div class="pr-price"> '+check_currency_symb(parseFloat(items.custOrds[h].items[it].prc))+' </div><div class="pr-bottomTxt"> Pret unitar - '+check_currency_symb(parseFloat(items.custOrds[h].items[it].brchrPrc))+' </div></div><div class="clearfix"></div></div>'
                                }else{
                                    var html_item='<div class="pr-items"><div class="pr-image"><!----><img alt="" src="https://www2.avoncosmetics.ro/dam/jcr:c7d4e16e-c653-4ab4-ac64-705f35ac0162/dummy_listview.svg"><!----></div><div class="pr-desc"><div class="name"><span class="name-p">'+items.custOrds[h].items[it].lineNr+'</span><!----><!----><!----></div><!----><div class="desc">'+selvarient+'  <!----><div class="inStck"> '+desc+' <div class="info-tltp-c small-tt outS-tltp"><div class="info-tltp ttclick">!</div><div class="tltp-wrap tltp-1"><div class="tltp-trang"></div><div class="tltp-cnt"><div class="tltp-cls"><img id="tltpCls1" src="/dam/jcr:72ee0666-e59f-4e5e-8523-a69aa307baae/navClose.svg"></div><div class="tltp-txt">Produsul este momentan indisponibil</div><div class="tltp-lnk mab-prim-lnk"></div></div></div></div></div><!----></div><!----><!----><!----></div><div class="hr-line hidden-lg"></div><div class="pr-subC mv-rgt"><div class="pr-qty" id="incqty_"+'+items.custOrds[h].items[it].fscNr+'> CANT. '+qtyss+' </div></div><div class="pr-subC mv-lft"><!----><div class="pr-price"> '+check_currency_symb(parseFloat(items.custOrds[h].items[it].prc))+' </div><div class="pr-bottomTxt"> Pret unitar - '+check_currency_symb(parseFloat(items.custOrds[h].items[it].totPrc))+' </div></div><div class="clearfix"></div></div>'
                                }
                                var div_den = generate_html_tag('div')
                                div_den.classList.add('inc_add_item')
                                div_den.innerHTML = html_item
                                
                                if(append_p_sibling != null){
                                    append_p_sibling.appendChild(div_den)
                                }else{
                                    var sib = document.querySelector('.yrOrders-C .ordItems')
                                    sib.appendChild(div_den)
                                }
                            }else{
                                var qtyss = items.custOrds[h].items[it].qty
                                for(k=0;k<bundle_vars.push_product_to_add.length;k++){
                                    if(bundle_vars.push_product_to_add[k].id == items.custOrds[h].items[it].lineNr ||  bundle_vars.push_product_to_add[k].c_pid == items.custOrds[h].items[it].lineNr || bundle_vars.push_product_to_add[k].p_sku == items.custOrds[h].items[it].fscNr ||  bundle_vars.push_product_to_add[k].c_sku == items.custOrds[h].items[it].fscNr){
                                        qtyss = bundle_vars.push_product_to_add[k].qty
                                    }
                                }
                                //id="incqty_"+'+items.custOrds[h].items[it].fscNr+'
                                if(document.querySelector('#incqty_'+items.custOrds[h].items[it].fscNr) != null){
                                    document.querySelector('#incqty_'+items.custOrds[h].items[it].fscNr).innerHTML = 'CANT. ' +  qtyss 
                                }

                            }
                        }
                    }else{
                        if(item_added_list.indexOf(items.custOrds[h].items[it].lineNr) >= 0 || item_added_list.indexOf(items.custOrds[h].items[it].fscNr) >= 0){
                            if(appended_lineNr.indexOf(items.custOrds[h].items[it].lineNr) == -1 && appended_lineNr.indexOf(items.custOrds[h].items[it].fscNr) == -1){
                                appended_lineNr.push(items.custOrds[h].items[it].lineNr)
                                appended_lineNr.push(items.custOrds[h].items[it].fscNr)
                                var img_src_p = ""
                                if(items.custOrds[h].items[it].prodUrl != undefined){
                                    if(items.custOrds[h].items[it].prodUrl != undefined){
                                        var imgsrc=items.custOrds[h].items[it].prodUrl.split('.png')[0]
                                    }else{
                                        var imgsrc=items.custOrds[h].items[it].prodUrl
                                    }
                                }else{
                                    var imgsrc=items.custOrds[h].items[it].prodUrl
                                }
                                if(imgsrc != undefined){  
                                    if(imgsrc.indexOf('_1_th') == -1){
                                        img_src_p = imgsrc + "_1_th" + ".png"
                                    }else{
                                        img_src_p = items.custOrds[h].items[it].prodUrl
                                    }
                                }else{
                                    img_src_p = items.custOrds[h].items[it].prodUrl
                                }
                                if(items.custOrds[h].items[it].prodVrntNm != undefined){
                                    var desc=" Produs disponibil "
                                }else{
                                    var desc= " Produs disponibil "
                                }
                                var selvarient=""
                                if(items.custOrds[h].items[it].prodVrntNm != undefined){
                                    selvarient = items.custOrds[h].items[it].prodVrntNm
                                }
                                
                                if(items.custOrds[h].items[it].prodNm != undefined){
                                    var html_item='<div class="pr-items"><div class="pr-image"><!----><img alt=""  src="'+img_src_p+'"><!----></div><div class="pr-desc"><div class="name"><span class="name-p">'+items.custOrds[h].items[it].prodNm+'</span><!----><!----><!----></div><!----><div class="desc"> '+selvarient+' <!----><div class="inStck"> '+desc+' <div class="info-tltp-c small-tt outS-tltp"><div class="info-tltp ttclick">!</div><div class="tltp-wrap tltp-1"><div class="tltp-trang"></div><div class="tltp-cnt"><div class="tltp-cls"><img id="tltpCls1" src="/dam/jcr:72ee0666-e59f-4e5e-8523-a69aa307baae/navClose.svg"></div><div class="tltp-txt">Produsul este momentan indisponibil</div><div class="tltp-lnk mab-prim-lnk"></div></div></div></div></div><!----></div><!----><!----><!----></div><div class="hr-line hidden-lg"></div><div class="pr-subC mv-rgt"><div class="pr-qty"> CANT. 1 </div></div><div class="pr-subC mv-lft"><!----><div class="pr-price"> '+check_currency_symb(parseFloat(items.custOrds[h].items[it].prc))+' </div><div class="pr-bottomTxt"> Pret unitar - '+check_currency_symb(parseFloat(items.custOrds[h].items[it].brchrPrc))+' </div></div><div class="clearfix"></div></div>'
                                }else{
                                    var html_item='<div class="pr-items"><div class="pr-image"><!----><img alt="" src="https://www2.avoncosmetics.ro/dam/jcr:c7d4e16e-c653-4ab4-ac64-705f35ac0162/dummy_listview.svg"><!----></div><div class="pr-desc"><div class="name"><span class="name-p">'+items.custOrds[h].items[it].lineNr+'</span><!----><!----><!----></div><!----><div class="desc"> '+selvarient+' <!----><div class="inStck"> '+desc+' <div class="info-tltp-c small-tt outS-tltp"><div class="info-tltp ttclick">!</div><div class="tltp-wrap tltp-1"><div class="tltp-trang"></div><div class="tltp-cnt"><div class="tltp-cls"><img id="tltpCls1" src="/dam/jcr:72ee0666-e59f-4e5e-8523-a69aa307baae/navClose.svg"></div><div class="tltp-txt">Produsul este momentan indisponibil</div><div class="tltp-lnk mab-prim-lnk"></div></div></div></div></div><!----></div><!----><!----><!----></div><div class="hr-line hidden-lg"></div><div class="pr-subC mv-rgt"><div class="pr-qty"> CANT. 1 </div></div><div class="pr-subC mv-lft"><!----><div class="pr-price"> '+check_currency_symb(parseFloat(items.custOrds[h].items[it].prc))+' </div><div class="pr-bottomTxt"> Pret unitar - '+check_currency_symb(parseFloat(items.custOrds[h].items[it].totPrc))+' </div></div><div class="clearfix"></div></div>'
                                }
                                var div_den = generate_html_tag('div')
                                div_den.classList.add('inc_add_item')
                                div_den.innerHTML = html_item
                                
                                if(append_p_sibling != null){
                                    append_p_sibling.appendChild(div_den)
                                }else{
                                    var sib = document.querySelector('.yrOrders-C .ordItems')
                                    sib.appendChild(div_den)
                                }
                            }
                        } 
                    }  
                }
            // }
        }
    }
    
}


function count_based_on_item(){
    if(document.querySelectorAll('.yrOrders-C.active').length == 1){
        var ictotal_qty = 0;
        var in_session_cust_data = JSON.parse(sessionStorage.getItem("custData"))
        for (ic = 0; ic < in_session_cust_data.dataList.length; ic++) {
            ictotal_qty += in_session_cust_data.dataList[ic].nrItems
        }
        var total_c_item=0;
        var orderc = document.querySelectorAll('.ordItems')
        for(n=0;n<orderc.length;n++){
            var count_kc=0;
            // orderc[n].parentNode.parentNode.querySelector('.mab-prim-lnk.itcnt').click()
            var all_addeditem=orderc[n].querySelectorAll('.pr-items')
            for(m=0;m<all_addeditem.length;m++){
                if(all_addeditem[m].querySelector('.pr-price') != null){
                    if(all_addeditem[m].querySelector('.pr-price').innerText.replace('lei','').replace(',','') != 0){
                        var qtyc=all_addeditem[m].querySelector('.pr-qty').innerText.replace('Cant.','').replace('CANT.','').trim()
                        
                        total_c_item = total_c_item + +qtyc
                        count_kc = count_kc + +qtyc
                        console.log("total_c_item"+total_c_item)
                        if(all_addeditem.length == m+1){
                            var alltopsec=document.querySelectorAll('.usr-nme-mc')
                            for(x=0;x<alltopsec.length;x++){
                                
                                if(alltopsec[x].innerText.trim().toLowerCase() == orderc[n].parentNode.parentNode.querySelector('.name').innerText.trim().toLowerCase()){
                                    // document.querySelector('mini-cart #cartbag').click()
                                    // document.querySelectorAll('.crt-cnt')[x].innerHTML = count_kc + " produse"
                                }
                            }
                            // orderc[n].parentNode.parentNode.querySelector('.mab-prim-lnk.itcnt .lnk-txt').innerHTML = "Total " + count_kc + " produse";
                        }
                    }
                }
            }
        }
        setTimeout(function(){
            //total_c_item - for based on item 
            if(ictotal_qty != 0){
                if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt .lnk-txt') != null){
                    document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt .lnk-txt').innerHTML = "Total " + ictotal_qty + " produse";
                }
                if(document.querySelector('.crt-cnt') != null){
                    document.querySelector('.crt-cnt').innerHTML = ictotal_qty + " produse"
                }
                if(document.querySelector('#cartbag > span') != null){
                    var prev_c=document.querySelector('#cartbag > span').innerText
                    document.querySelector('#cartbag > span').innerText = ictotal_qty
                    if(document.querySelector('.sub_total_text') != null){
                        document.querySelector('.sub_total_text').innerText = bundle_vars.bag_subtotal + "(" + ictotal_qty + "  " + bundle_vars.item_s + ")";
                    }
                }
                if (document.querySelector('#cartbag span') != null) {
                    if (document.querySelector('.sub_total_text') != null) {
                        document.querySelector('.sub_total_text').innerHTML = bundle_vars.bag_subtotal + "(" + ictotal_qty + "  " + bundle_vars.item_s + ")";
                    }
                }
            }
        },200)
    }
}


function updateFBTcount(){
    var qtyinputselm = document.querySelectorAll('.added_list_item_wrapper .added_list_item_qty .q_holder input[type="number"]')
    varlueQty = 0
    for(qt=0;qt<qtyinputselm.length;qt++){
        varlueQty = +varlueQty + +qtyinputselm[qt].value
    }
    if(document.querySelector('.ic_added_product_icon') != null){
        document.querySelector('.ic_added_product_icon').innerText = varlueQty
    }
}

function modalpopupreinit(){
    addedPrdIds = []
    for(aP=0;aP<bundle_vars.push_product_to_add.length;aP++){
        if(bundle_vars.push_product_to_add[0].c_pid != null){
            addedPrdIds.push(bundle_vars.push_product_to_add[aP].id)
            addedPrdIds.push(bundle_vars.push_product_to_add[aP].c_pid)
        }else{
            addedPrdIds.push(bundle_vars.push_product_to_add[aP].id)
        }
    }
    var newresponse = []
    var productMainids=[]
    if(bundle_vars.pdp_response != undefined){
        if(bundle_vars.pdp_response .length > 0){
            var bundleresp = bundle_vars.pdp_response
        }else{
            var bundleresp = bundle_vars.bundle_response_after_M
        }
        if(bundleresp.Bundles != undefined){
            //bundle_vars.bundle_response_after_M
            for(mr=0;mr<bundleresp.Bundles.length;mr++){
                if(addedPrdIds.indexOf(bundleresp.Bundles[mr].Products[1].ProductId) == -1){
                    if(productMainids.indexOf(bundleresp.Bundles[mr].Products[1].ProductId) == -1){
                        productMainids.push(bundleresp.Bundles[mr].Products[1].ProductId)
                        newresponse.push(bundleresp.Bundles[mr])
                    }
                }
            }
            var newpdpresponse= {
                "Bundles": newresponse,
                AssociatedProducts: null,
                BundleCount: newresponse.length
            }
            if(bundle_vars.push_product_to_add.length > 0){
                var popmd=document.querySelector('.inc_popup')
                if(popmd != null){
                    popmd.parentNode.removeChild(popmd)
                }
                if (document.querySelector('.pao-section.shpByProdNum') != null) {
                    var child_node = document.querySelector('.pao-section.shpByProdNum').childNodes.length;
                    var class_name = 'inc_bundling_pdp';
                    if(window.innerWidth > 767){
                        var client_div = '.pao-section.shpByProdNum';
                    }else{
                        var client_div = '.body-wrapper'
                        var child_node = 4;
                    }
                    var childNode = child_node;
                }
                if (!switch_board.its_plp_page) {
                    add_div(class_name, client_div, childNode);
                    modal_add(class_name, client_div, childNode)
                }
            
                modal_overlay(newpdpresponse, "onload", null, null, null, null, "cart")
            }
        }
    }
}

function updateplpactivemodalprc() {
    var elprice = document.querySelectorAll('.ic_product.inc_checked') 
    var activepriceary = 0
    var regularpriceary = 0
    for(var p=0;p<elprice.length;p++){
        var prcact = 0
        var prcreg = 0
        if(elprice[p].querySelector('.product_amount.old_price') != null){
            prcact = elprice[p].querySelector('.spec_amount').innerText.replace("€", "").replace(",", ".").replace("£", "").replace("lei", "").replace("Lei", "").trim()
            prcreg = elprice[p].querySelector('.product_amount.old_price').innerText.replace("€", "").replace(",", ".").replace("£", "").replace("lei", "").replace("Lei", "").trim()
        }else{
            prcact = elprice[p].querySelector('.product_amount').innerText.replace("€", "").replace(",", ".").replace("£", "").replace("lei", "").replace("Lei", "").trim()
        }
        
        if(prcreg == "" || prcreg == 0){
            prcreg = prcact
        }
        var qtye = elprice[p].querySelector('.q_holder input').value
        activepriceary = +activepriceary +  +(prcact * qtye)
        regularpriceary =  +regularpriceary +  +(prcreg * qtye)
    }
    
    if(document.querySelector('.inc_checkout_prc_active_text') != null){
        document.querySelector('.inc_checkout_prc_active_text').innerHTML = check_currency_symb(parseFloat(activepriceary))
    }
    if(parseFloat(activepriceary) != 0 && parseFloat(activepriceary) < parseFloat(regularpriceary) && parseFloat(regularpriceary) != parseFloat(activepriceary)){
        // var totalsave = get_discount_ecirp(regularpriceary, activepriceary)
        document.querySelector('.inc_checkout_prc_regular_text').innerHTML =  check_currency_symb(parseFloat(regularpriceary));
        if(document.querySelector('.inc_checkout_bk') != null){
            document.querySelector('.inc_checkout_bk').classList.add('inc_special_prc')
        }
    }else{
        document.querySelector('.inc_checkout_prc_regular_text').innerHTML = ""
        if(document.querySelector('.inc_checkout_bk') != null){
            document.querySelector('.inc_checkout_bk').classList.remove('inc_special_prc')
        }
    }
    
    if(activepriceary == 0){
        document.querySelector('.inc_chk_add_btn').innerText = "Adaugă coș"
        document.querySelector('.inc_checkout_bk').classList.add('disable_btn')
        document.querySelector('.inc_chk_add_btn').setAttribute('style','pointer-events: none;opacity: 0.5;')
        // document.querySelector('.inc_checkout_prc_bk').setAttribute('style','visibility: hidden;')
    }else{
        document.querySelector('.inc_chk_add_btn').innerText = "Adaugă "+elprice.length+" produse în coș"
        document.querySelector('.inc_checkout_bk').classList.remove('disable_btn')
        document.querySelector('.inc_chk_add_btn').setAttribute('style','pointer-events: auto;opacity: 1')
        document.querySelector('.inc_checkout_prc_bk').setAttribute('style','visibility: visible;')
    }
}
function add_multiple_prod(elbtn){
    if(document.querySelector('.yrOrders-C.active.open') == null && document.querySelector('.yrOrders-C.active') != null){
        if(document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt') != null){
            document.querySelector('.yrOrders-C.active .mab-prim-lnk.itcnt').click()
        }
    }
    var elcheckprod = document.querySelectorAll('.ic_product.inc_checked') 
    var formData = []
    var eltrackdata=[]
    bundle_vars.push_product_to_add=[]
    for(let h=0;h<elcheckprod.length;h++){
        var ic_pr_div = elcheckprod[h];
        var qty1 = ic_pr_div.querySelector('.ic_prod_details .q_holder input').value
        var href1 = ic_pr_div.querySelector('.ic_prod_details .pdt_name a').href;
        var img0 = ic_pr_div.querySelector('.ic_prod_details .pdt_img img').src;
        var sel_length = ic_pr_div.querySelectorAll('.select_wrapper');
        var p_id1 = "";
        var c_pid = "";
        var c_sku = "";
        var p_sku = ""
        var prod_name = "";
        var main_p_id = ic_pr_div.getAttribute('data_selected_prod_id');
        var qty_main = 0;
        if (sel_length.length == 2) {
            if (sel_length[1].querySelector('ul') != null) {
                if (sel_length[1].querySelector('ul li.active a') != null) {
                    p_id1 = sel_length[1].querySelector('ul li.active a').getAttribute('c_pid');
                    c_pid = sel_length[1].querySelector('ul li.active a').getAttribute('c_pid');
                    c_sku = sel_length[1].querySelector('ul li.active a').getAttribute('sku');
                    prod_name = sel_length[1].querySelector('ul li.active a').getAttribute('c_nm');
                }
            }
        } else if (sel_length.length == 1) {
            if (sel_length[0].querySelector('ul') != null) {
                if (sel_length[0].querySelector('ul li.active a') != null) {
                    p_id1 = sel_length[0].querySelector('ul li.active a').getAttribute('c_pid');
                    c_pid = sel_length[0].querySelector('ul li.active a').getAttribute('c_pid');
                    c_sku = sel_length[0].querySelector('ul li.active a').getAttribute('sku');
                    prod_name = sel_length[0].querySelector('ul li.active a').getAttribute('c_nm');
                }
            }
        } else {
            p_id1 = ic_pr_div.getAttribute('data_selected_prod_id');
            prod_name = ic_pr_div.querySelector('.pdt_name').innerText
        }
        var cust_data_online = JSON.parse(sessionStorage.getItem("custData"))
        var inc_acctNr = sessionStorage.getItem("acctNr")
        var data_param = {}
        var inc_cust_name = ""
        var cust_id = ""
        var active_customer = ""
       
        var current_act = ""
        if (document.querySelector('.yrOrders-C.active .name') != null) {
            current_act = document.querySelector('.yrOrders-C.active .name').innerText.trim();
        }
        for (var ca = 0; ca < cust_data_online.dataList.length; ca++) {
            if (current_act != "") {
                if (cust_data_online.dataList[ca].custName == current_act) {
                    active_customer = cust_data_online.dataList[ca];
                    break;
                }
            } else {
                if (cust_data_online.dataList[ca].active == true) {
                    active_customer = cust_data_online.dataList[ca];
                    break;
                }
            }
        }
        if (active_customer != "") {
            cust_id = active_customer.custId
            inc_cust_name = active_customer.custName
        } else {
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                cust_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim();
            }
            if (document.querySelector('#co-mobMenu .name') != null) {
                inc_cust_name = document.querySelector('#co-mobMenu .name').innerText
            }
        }
        var placeordrtype = ""
        placeordrtype = "INCCAR"
        //bundle_id
        
        bundle_vars.push_product_to_add.push({
            bid:ic_pr_div.getAttribute('bundle_id'),
            id:ic_pr_div.getAttribute('data_selected_prod_id'),
            qty:qty1,
            pname: prod_name,
            c_sku: c_sku,
            c_pid: c_pid,
            p_sku:ic_pr_div.getAttribute('data_selected_prod_sku'),
        })
        if (cust_data_online != undefined) {
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                var inc_param = {
                    cmpgnId: campNr,
                    lineNr: p_id1.toString(),
                    qty: qty1,
                    custId: cust_id,
                    placOrdSctnCd: placeordrtype
                }
                formData.push(inc_param)
            } else {
                var inc_param = {
                    custId: cust_id,
                    lineNr: p_id1.toString(),
                    placOrdSctnCd: placeordrtype,
                    qty: qty1,
                    cmpgnId: campNr
                }
                formData.push(inc_param)
            }
        }
        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
            var inc_login_user_id = document.querySelector('#co-mobMenu .ordr-date').innerText.replace('#', '').trim()
        }
        if (document.querySelector('#co-mobMenu .ordr-date') != null) {
            var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order/' + inc_login_user_id + '/cust/' + cust_id + '?groups=custords,custords,discnt'
        } else {
            var url1 = '//apim-eu.api-prod.aws.avon.com/v1/RO/RO/rep/' + inc_acctNr + '/order?groups=header,custords,discnt';
        }
        if(elcheckprod.length == h+1){
            data_param["cmpgnId"] = campNr;
            data_param["ordNm"] = inc_cust_name;
            data_param["ordType"] = "REG";
            data_param["items"] = formData;
            if (document.querySelector('#co-mobMenu .ordr-date') != null) {
                add_prod_ajax_re(null, null, p_id1, null, formData, null, url1, null, null, null, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr,"checkbox",elbtn);
            } else {
                add_prod_ajax_re(null, null, p_id1, null, data_param, null, url1, null, null, null, p_id1, cust_id, campNr, inc_cust_name, inc_acctNr,"checkbox",elbtn);
            }
        }
    }
}