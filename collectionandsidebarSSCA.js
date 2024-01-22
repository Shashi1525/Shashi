(function(){
    "use strict";
    var INC_COL = {}
    var pdp_html = '<section class="inc_breadcrumb__wrapper"><ul class="incbreadcrumb" data-module="incbreadcrumb"><li class="inc_breadcrumb__item"><a class="breadcrumb__link " href="https://www.petsathome.com/shop/en/pets">Home > </a></li><li class="inc_breadcrumb_prd"></li></ul></section><div class=inc_title_bk><div class=inc_title_txt_bk><div class=inc_title_txt></div></div><div class=inc_title_img_bk><div class=inc_title_img></div></div></div><div class=inc_bundle_bk><div class=inc_product-main_bk></div><div class=inc_bd_prd_bk><div class=inc_bd_prd_hdr_bk><div class=inc_bd_prd_hdr_text style=text-transform:none>This item</div></div><div class=inc_col_desc_main_product_details_bk></div><div class=inc_bd_prd_list_bk><div class=inc_additional_prod_title_bk><div class=inc_additional_prod_title_txt>Frequently Bought With</div><div class=inc_additional_prod_title_light>(Add/Remove Products From List)</div></div><div class=inc_bd_prd_list_main_bk></div></div><div class=inc_bd_cart_bk><div class=inc_bd_cart_title_bk><div class=inc_bd_cart_title_txt_bk><div class=inc_bd_cart_title_txt>Price Summary</div></div></div><div class=inc_bd-cart_ecirp_bk><div class=inc_bd-cart_ecirp_main><div class=inc_bd-cart_ecirp_main_title_bk><div class=inc_bd-cart_ecirp_main_title_txt_bk><div class=inc_bd-cart_ecirp_main_title_txt>Main Product</div></div></div><div class=inc_bd-cart_ecirp_main_figure_bk><div class=inc_bd-cart_ecirp_main_figure_text_bk><div class=inc_bd-cart_ecirp_main_figure_text></div></div></div></div><div class=inc_bd-cart_ecirp_addon_bk><div class=inc_bd-cart_ecirp_addon_title_bk><div class=inc_bd-cart_ecirp_addon_title_txt_bk><div class=inc_bd-cart_ecirp_addon_title_txt></div></div></div><div class=inc_bd-cart_ecirp_addon_figure_bk><div class=inc_bd-cart_ecirp_addon_figure_text_bk><div class=inc_bd-cart_ecirp_addon_figure_text></div></div></div></div></div><div class=inc_bd_cart_added_bk></div><div class=inc_bd_cart_smry_bk><div class=inc_bd_cart_smry_main_prd><div class=inc_bd_cart_smry_main_prd_txt></div><div class=inc_bd_cart_smry_main_prd_prc></div></div><div class=inc_bd_cart_smry_addon_prd><div class=inc_bd_cart_smry_addon_prd_txt></div><div class=inc_bd_cart_smry_addon_prd_prc></div></div><div class=inc_bd_cart_smry_title_bk><div class=inc_bd_cart_smry_title_txt_bk><div class=inc_bd_cart_smry_title_txt>Total bundle price</div></div></div><div class="inc_bd_cart_smry_ecirp_bk"> <div class="inc_bd_cart_smry_ecirp_active_bk"> <div class="inc_bd_cart_smry_ecirp_active_text_bk"><div class="inc_bd_cart_smry_ecirp_active_text"></div></div></div><div class="inc_bd_cart_smry_ecirp_regular_bk"> <div class="inc_bd_cart_smry_ecirp_regular_text_bk"><div class="inc_bd_cart_smry_ecirp_regular_text"></div></div></div><div class="inc_bd_cart_smry_ecirp_save_bk"><div class="inc_bd_cart_smry_ecirp_save_text"></div></div></div><div class=inc_bd_cart_smry_view_bk><div class=inc_bd_cart_smry_view_btn_bk><div class=inc_bd_cart_smry_view_btn_img_bk><div class=inc_bd_cart_smry_view_btn_img></div></div><div class=inc_bd_cart_smry_view_btn_text_bk><div class=inc_bd_cart_smry_view_btn_text>Added items</div></div><div class=inc_bd_cart_smry_view_btn_count_bk><div class=inc_bd_cart_smry_view_btn_count>3</div></div></div></div><div class=inc_bd_cart_smry_add_bk><div class=inc_bd_cart_smry_add_btn_bk style=pointer-events:auto;opacity:1><div class=inc_bd_cart_smry_add_btn_text_bk><div class=inc_bd_cart_smry_add_btn_text style=text-transform:none>Add 3 Items To Basket</div><div class=inc_bd_cart_smry_add_btn_span></div></div><div class=inc_bd_cart_smry_add_btn_img_bk><div class=inc_bd_cart_smry_add_btn_img></div></div></div></div><div class=inc_collect_point_checkout_bk><div class=inc_collect_point_text></div></div></div></div></div></div><div class=inc_main_product_description_bk><div class=inc_main_product_description_title_txt>Product Description</div><div class=inc_main_product_description_text></div></div>' 

    var showcase_productcard = '<div class="inc_prd_bk"> <div class="inc_prd_extension_bk"></div><div class="inc_prd_hdr_main_bk"> <div class="inc_prd_hdr_main_title_bk"></div><div class="inc_prd_hdr_main_rating_bk"></div><div class="inc_prd_hrd_desc_ecirp_bk"> <div class="inc_prd_hrd_ecirp_label_bk">SALE</div><div class="inc_prd_hrd_desc_ecirp_active_bk"> <div class="inc_prd_hrd_desc_ecirp_active_text_bk"> <div class="inc_prd_hrd_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_prd_hrd_desc_ecirp_active_text_msg"></div></div></div><div class="inc_prd_hrd_desc_ecirp_regular_bk"> <div class="inc_prd_hrd_desc_ecirp_regular_text_bk"><div class="inc_prd_hrd_desc_ecirp_regular_text"></div></div></div><div class="inc_prd_hrd_desc_ecirp_worth_bk"> <div class="inc_prd_hrd_desc_ecirp_worth_text_bk"> <div class="inc_prd_hrd_desc_ecirp_worth_text"></div><div class="inc_prd_hrd_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_prd_hdr_bk"> <div class="inc_prd_hdr_title_bk"> <div class="inc_prd_hdr_title_txt_bk"><div class="inc_prd_hdr_title_txt"></div></div></div></div><div class="inc_prd_Description_hdr_bk"> <div class="inc_prd_Description_hdr_title_bk"> <div class="inc_prd_Description_hdr_title_txt_bk"><div class="inc_prd_Description_hdr_title_txt"></div></div></div></div><div class="inc_prd_hdr_img_bk"><div class="inc_prd_hdr_img"></div></div></div><div class="inc_prd_info_main_bk"> <div class="inc_prd_img_bk"> <div class="inc_prd_img_main_bk"><div class="inc_prd_img_main_img"></div></div><div class="inc_prd_img_gallery_bk"> <div class="inc_prd_img_gallery_left_bk" title="Scroll left"> <div class="inc_prd_img_gallery_left_btn_bk"> <div class="inc_prd_img_gallery_left_btn_img_bk"><div class="inc_prd_img_gallery_left_btn_img"></div></div><div class="inc_prd_img_gallery_left_btn_text_bk"><div class="inc_prd_img_gallery_left_btn_text"></div></div></div></div><div class="inc_prd_img_gallery_list_wrp_bk"> <div class="inc_prd_img_gallery_list_bk"></div></div><div class="inc_prd_img_gallery_right_bk" title="Scroll right"> <div class="inc_prd_img_gallery_right_btn_bk"> <div class="inc_prd_img_gallery_right_btn_img_bk"><div class="inc_prd_img_gallery_right_btn_img"></div></div><div class="inc_prd_img_gallery_right_btn_text_bk"><div class="inc_prd_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_prd_desc_bk"> <div class="inc_prd_desc_title_bk"> <div class="inc_prd_desc_title_txt_bk"><div class="inc_prd_desc_title_txt"></div></div></div><div class="empty pc_promo_div"></div><div class="inc_prd_desc_ratings_bk"></div><div class="inc_prd_desc_ecirp_bk"> <div class="inc_prd_ecirp_label_bk">SALE</div><div class="inc_prd_desc_ecirp_active_bk"> <div class="inc_prd_desc_ecirp_active_text_bk"> <div class="inc_prd_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_prd_desc_ecirp_active_text_msg"></div></div></div><div class="inc_prd_desc_ecirp_regular_bk"> <div class="inc_prd_desc_ecirp_regular_text_bk"><div class="inc_prd_desc_ecirp_regular_text"></div></div></div><div class="inc_prd_desc_ecirp_worth_bk"> <div class="inc_prd_desc_ecirp_worth_text_bk"> <div class="inc_prd_desc_ecirp_worth_text"></div><div class="inc_prd_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_variant_error_text"></div><div class="inc_prd_desc_qty_add_btn_bk"> <div class="inc_prd_desc_qty_bk singleqty"> <div class="inc_prd_desc_qty_down_bk"> <div class="inc_prd_desc_qty_down_btn_bk"><div class="inc_prd_desc_qty_down_btn"></div></div></div><div class="inc_prd_desc_qty_input_bk"> <div class="inc_prd_desc_qty_input_text_bk"> <div class="inc_prd_desc_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_prd_desc_qty_up_bk"> <div class="inc_prd_desc_qty_up_btn_bk"><div class="inc_prd_desc_qty_up_btn"></div></div></div></div><div class="inc_prd_desc_att_details_bk"> <div class="inc_prd_variant_simple_bk"><div class="inc_prd_variant_simple_text">Add</div></div><div class="inc_prd_desc_att_bk"> <div class="inc_prd_desc_variant_popup_close_bk"></div><div class="inc_prd_desc_add_err_text_bk"></div><div class="inc_prd_desc_add_title_txt_bk"></div><div class="inc_prd_desc_att_zero_bk"> <div class="inc_prd_desc_att_zero_title_bk"> <div class="inc_prd_desc_att_zero_title_txt_bk"> <div class="inc_prd_desc_att_zero_title_txt"></div><div class="inc_prd_desc_att_zero_title_txt_selected"></div></div></div><div class="inc_prd_desc_att_zero_list_bk"></div></div><div class="inc_prd_desc_att_size_bk"> <div class="inc_prd_desc_att_size_title_bk"> <div class="inc_prd_desc_att_size_title_txt_bk"> <div class="inc_prd_desc_att_size_title_txt"></div><div class="inc_prd_desc_att_size_title_txt_selected"></div></div></div><div class="inc_prd_desc_att_size_list_bk"></div></div><div class="inc_prd_desc_att_color_bk"> <div class="inc_prd_desc_att_color_title_bk"> <div class="inc_prd_desc_att_color_title_txt_bk"> <div class="inc_prd_desc_att_color_title_txt"></div><div class="inc_prd_desc_att_color_title_txt_selected"></div></div></div><div class="inc_prd_desc_att_color_list_bk"></div></div><div class="inc_prd_desc_att_third_bk"> <div class="inc_prd_desc_att_third_title_bk"> <div class="inc_prd_desc_att_third_title_txt_bk"> <div class="inc_prd_desc_att_third_title_txt"></div><div class="inc_prd_desc_att_third_title_txt_selected"></div></div></div><div class="inc_prd_desc_att_third_list_bk"></div></div><div class="inc_prd_desc_att_fourth_bk"> <div class="inc_prd_desc_att_fourth_title_bk"> <div class="inc_prd_desc_att_fourth_title_txt_bk"> <div class="inc_prd_desc_att_fourth_title_txt"></div><div class="inc_prd_desc_att_fourth_title_txt_selected"></div></div></div><div class="inc_prd_desc_att_fourth_list_bk"> <div class="inc_prd_desc_att_fourth_list_item_bk"> <div class="inc_prd_desc_att_fourth_list_item_img_bk"><div class="inc_prd_desc_att_fourth_list_item_img"></div></div><div class="inc_prd_desc_att_fourth_list_item_text_bk"><div class="inc_prd_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_prd_desc_att_edit_bk"><div class="inc_prd_desc_att_edit_text"></div></div><div class="inc_prd_desc_att_variant_add_bk"><div class="inc_prd_desc_att_variant_text"></div></div></div><div class="inc_prd_details_prod_bk"><div class="inc_prd_details_prod_text"></div></div></div><div class="inc_prd_add_bk"> <div class="inc_prd_add_text_bk"><div class="inc_prd_add_text">Add</div></div></div><div class="inc_prd_desc_add_bk"> <div class="inc_prd_desc_add_img_bk"><div class="inc_prd_desc_add_img"></div></div><div class="inc_prd_desc_add_text_bk"> <div class="inc_prd_desc_add_text">Add</div><div class="inc_prd_desc_add_span"></div></div></div><div class="inc_prd_bstxt_bk"></div></div></div><div class="inc_prd_bstxt_bk"></div></div><div class="inc_prd_description_main_bk"></div></div>'
    var modal_productcard = '<div class=inc_prd_bk><div class=inc_prd_extension_bk></div><div class=inc_prd_hdr_main_bk><div class=inc_prd_hdr_main_title_bk></div><div class=inc_prd_hdr_main_rating_bk><div class=inc_prd_desc_ratings_bk></div><span class=product_modal_sku>#</span></div><div class=inc_prd_hrd_desc_ecirp_bk><div class=inc_prd_hrd_ecirp_label_bk>SALE</div><div class=inc_prd_hrd_desc_ecirp_active_bk><div class=inc_prd_hrd_desc_ecirp_active_text_bk><div class=inc_prd_hrd_desc_ecirp_active_text>£0.00 - -£0.00</div><div class=inc_prd_hrd_desc_ecirp_active_text_msg></div></div></div><div class=inc_prd_hrd_desc_ecirp_regular_bk><div class=inc_prd_hrd_desc_ecirp_regular_text_bk><div class=inc_prd_hrd_desc_ecirp_regular_text></div></div></div><div class=inc_prd_hrd_desc_ecirp_worth_bk><div class=inc_prd_hrd_desc_ecirp_worth_text_bk><div class=inc_prd_hrd_desc_ecirp_worth_text></div><div class=inc_prd_hrd_desc_ecirp_worth_text_msg></div></div></div></div><div class=inc_prd_hdr_bk><div class=inc_prd_hdr_title_bk><div class=inc_prd_hdr_title_txt_bk><div class=inc_prd_hdr_title_txt>Overview</div></div></div><div class=inc_product_hdr_title_bk_1><div class=inc_product_hdr_title_txt_bk_1><div class=inc_product_hdr_title_txt_1>Product Description</div></div></div><div class=inc_prd_hdr_new_page><a class=inc_prd_hdr_new_page_text href="">Open in a new tab</a></div></div><div class=inc_prd_Description_hdr_bk><div class=inc_prd_Description_hdr_title_bk><div class=inc_prd_Description_hdr_title_txt_bk><div class=inc_prd_Description_hdr_title_txt></div></div></div></div><div class=inc_prd_hdr_img_bk><div class=inc_prd_hdr_img></div></div></div><div class=inc_prd_info_main_bk><div class=inc_prd_img_bk><div class=inc_prd_img_main_bk><div class=inc_prd_img_main_img></div></div><div class=inc_prd_img_gallery_bk><div class=inc_prd_img_gallery_left_bk title="Scroll left"><div class=inc_prd_img_gallery_left_btn_bk><div class=inc_prd_img_gallery_left_btn_img_bk><div class=inc_prd_img_gallery_left_btn_img></div></div><div class=inc_prd_img_gallery_left_btn_text_bk><div class=inc_prd_img_gallery_left_btn_text></div></div></div></div><div class=inc_prd_img_gallery_list_bk></div><div class=inc_prd_img_gallery_right_bk title="Scroll right"><div class=inc_prd_img_gallery_right_btn_bk><div class=inc_prd_img_gallery_right_btn_img_bk><div class=inc_prd_img_gallery_right_btn_img></div></div><div class=inc_prd_img_gallery_right_btn_text_bk><div class=inc_prd_img_gallery_right_btn_text></div></div></div></div></div></div><div class=inc_prd_desc_bk><div class=inc_prd_desc_title_bk><div class=inc_prd_desc_title_txt_bk><div class=inc_prd_desc_title_txt></div></div></div><div class=inc_prd_desc_ratings_bk></div><div class=inc_prd_desc_ecirp_bk><div class=inc_prd_ecirp_label_bk>SALE</div><div class=inc_prd_desc_ecirp_active_bk><div class=inc_prd_desc_ecirp_active_text_bk><div class=inc_prd_desc_ecirp_active_text>£0.00 - -£0.00</div><div class=inc_prd_desc_ecirp_active_text_msg></div></div></div><div class=inc_prd_desc_ecirp_regular_bk><div class=inc_prd_desc_ecirp_regular_text_bk><div class=inc_prd_desc_ecirp_regular_text></div></div></div><div class=inc_prd_desc_ecirp_worth_bk><div class=inc_prd_desc_ecirp_worth_text_bk><div class=inc_prd_desc_ecirp_worth_text></div><div class=inc_prd_desc_ecirp_worth_text_msg></div></div></div></div><div class=inc_prd_desc_att_details_bk><div class=inc_prd_variant_simple_bk><div class=inc_prd_variant_simple_text></div></div><div class="empty pc_promo_div"></div><div class=inc_prd_desc_att_bk><div class=inc_prd_desc_variant_popup_close_bk></div><div class=inc_prd_desc_add_err_text_bk></div><div class=inc_prd_desc_add_title_txt_bk></div><div class=inc_prd_desc_att_zero_bk><div class=inc_prd_desc_att_zero_title_bk><div class=inc_prd_desc_att_zero_title_txt_bk><div class=inc_prd_desc_att_zero_title_txt></div><div class=inc_prd_desc_att_zero_title_txt_selected></div></div></div><div class=inc_prd_desc_att_zero_list_bk></div></div><div class=inc_prd_desc_att_size_bk><div class=inc_prd_desc_att_size_title_bk><div class=inc_prd_desc_att_size_title_txt_bk><div class=inc_prd_desc_att_size_title_txt></div><div class=inc_prd_desc_att_size_title_txt_selected></div></div></div><div class=inc_prd_desc_att_size_list_bk></div></div><div class=inc_prd_desc_att_color_bk><div class=inc_prd_desc_att_color_title_bk><div class=inc_prd_desc_att_color_title_txt_bk><div class=inc_prd_desc_att_color_title_txt></div><div class=inc_prd_desc_att_color_title_txt_selected></div></div></div><div class=inc_prd_desc_att_color_list_bk></div></div><div class=inc_prd_desc_att_third_bk><div class=inc_prd_desc_att_third_title_bk><div class=inc_prd_desc_att_third_title_txt_bk><div class=inc_prd_desc_att_third_title_txt></div><div class=inc_prd_desc_att_third_title_txt_selected></div></div></div><div class=inc_prd_desc_att_third_list_bk></div></div><div class=inc_prd_desc_att_fourth_bk><div class=inc_prd_desc_att_fourth_title_bk><div class=inc_prd_desc_att_fourth_title_txt_bk><div class=inc_prd_desc_att_fourth_title_txt></div><div class=inc_prd_desc_att_fourth_title_txt_selected></div></div></div><div class=inc_prd_desc_att_fourth_list_bk><div class=inc_prd_desc_att_fourth_list_item_bk><div class=inc_prd_desc_att_fourth_list_item_img_bk><div class=inc_prd_desc_att_fourth_list_item_img></div></div><div class=inc_prd_desc_att_fourth_list_item_text_bk><div class=inc_prd_desc_att_fourth_list_item_text></div></div></div></div></div><div class=inc_prd_desc_att_edit_bk><div class=inc_prd_desc_att_edit_text></div></div><div class=inc_prd_desc_att_variant_add_bk><div class=inc_prd_desc_att_variant_text></div></div></div><div class=inc_prd_details_prod_bk><div class=inc_prd_details_prod_text></div></div></div><div class=inc_prd_desc_qty_add_btn_bk><div class="inc_prd_desc_qty_bk singleqty"><div class=inc_prd_desc_qty_down_bk><div class=inc_prd_desc_qty_down_btn_bk><div class=inc_prd_desc_qty_down_btn></div></div></div><div class=inc_prd_desc_qty_input_bk><div class=inc_prd_desc_qty_input_text_bk><div class=inc_prd_desc_qty_input_text></div></div></div><div class=inc_prd_desc_qty_up_bk><div class=inc_prd_desc_qty_up_btn_bk><div class=inc_prd_desc_qty_up_btn></div></div></div></div><div class=inc_prd_add_bk><div class=inc_prd_add_text_bk><div class=inc_prd_add_text></div></div></div><div class=inc_prd_desc_add_bk><div class=inc_prd_desc_add_img_bk><div class=inc_prd_desc_add_img></div></div><div class=inc_prd_desc_add_text_bk><div class=inc_prd_desc_add_text>Add</div><div class=inc_prd_desc_add_span></div></div></div><div class=inc_prd_bstxt_bk></div></div></div><div class=inc_prd_bstxt_bk></div></div><div class=inc_prd_description_main_bk><div class=inc_main_product_description_title_txt>Product Description</div></div></div>'

    var sidebar_html = '<div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just Added to your Basket</div></div><span class="close_sisebar_icon"></span></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">Checkout</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers also bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block inc_categ_4" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>'
    function addCSSFile() {
        var versionUpdate = (new Date()).getTime();
        var cssFilePath = "https://www.increasingly.co/Clients/optimised_multipack/css/pah_c.css?v="+versionUpdate;
        var linkTag = document.createElement('link');
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector('head').appendChild(linkTag);
    }
    addCSSFile()
    
    var init_flag = true
    INC_COL.ENV = "prod";
    var onloadpdp = false;
    var onloadpdp_delete = false;
    INC_COL.checkProdUserCookie = function () {
        if (INC_COL.ENV == "prod") {
            setTimeout(function () {
                INC_COL.config.pageType = INC_COL.methods.detectPageType();
                if (init_flag) {
                    init_flag = false;
                    INC_COL.init();
                }
            }, 0);
        }
    }
    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }
    INC_COL.checkProdUserCookie();
    var incallowedKeys = [46, 8, 9, 27, 110, 190];
    var inc_col_scroll_height = 100
    INC_COL.clientConfig = {};
    INC_COL.clientConfig.statusVAT = "";
    INC_COL.clientConfig.offset = 0;
    INC_COL.clientConfig.slidevalue = 0;
    INC_COL.clientConfig.regularPricePrefix = " Was ";
    INC_COL.config = {};
    INC_COL.config.deviceType = "";
    INC_COL.config.MainPrdName = ""; 
    INC_COL.config.clientToken = "saMg2Ca";
    INC_COL.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    INC_COL.config.addToBasketURL =  "//shop.samsung.com/ca/ng/p4v1/addToCart?";
    INC_COL.clientConfig.checkoutLink = "/shop/Basket/";
    INC_COL.config.affiliateURL = "";
    INC_COL.config.pageType = "";
    INC_COL.config.ivid = "";
    INC_COL.config.pdpaddedProductList = [];
    INC_COL.config.inc_col_slideIndex = 1;
    INC_COL.config.bundle_tracking = [];
    INC_COL.config.Product_id = null;
    INC_COL.config.dupBasket = [];
    INC_COL.config.dupDataObjectProducts = [];
    INC_COL.config.childlevelprodResc=[];
    INC_COL.clientConfig.OOS = [];
    INC_COL.config.disablebtn = true;
    INC_COL.config.sidebarremovedprod = [];
    INC_COL.config.cartproductids = [];
    INC_COL.config.bundle_skuPushed = []
    INC_COL.config.collection_combo_details=[]
    INC_COL.config.dupDataObjectProducts=[]
    INC_COL.config.FBTTitle = "Frequently Bought together"
    INC_COL.config.AddedText = "Added"
    INC_COL.config.BeforeYouChecktext = "Customers also bought"
    INC_COL.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC_COL.config.UpdateText = "UPDATE"
    INC_COL.config.descriptionsText = "Product Description"
    INC_COL.config.noimage = "https://www.increasingly.co/Implementation/p3ThM9/img/no-image.svg"
    INC_COL.config.recommendation = false;
    INC_COL.config.bundledid=[]
    INC_COL.config.sidebararray=[]
    INC_COL.config.comboprod=[]
    INC_COL.config.cldomain = ""
    INC_COL.config.checkoutpath = ""
    var trueflag=true;
    var falseflag=false;
    function isBase64(str) {
        try {
            return btoa(atob(str)) == str;
        } catch (err) {
            return false;
        }
    }
    function addCSSFileq() {
        var versionUpdate = (new Date()).getTime();
        var cssFilePath = "https://www.increasingly.co/Clients/optimised/fbt/css/p3ThM9.css?v=" + versionUpdate;
        var linkTag = document.createElement('link');
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector('head').appendChild(linkTag);
    }
    addCSSFileq();
    
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var s of ca) {
            var c = s;
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function generate_html_tag(element, className) {
        var generateEl = document.createElement(element);
        if(className != undefined){
            generateEl.classList.add(className)
        }
        return generateEl;
    }

    function generate_meta_tag(prop,value) {
        var generateMeta = document.createElement('meta');
        generateMeta.setAttribute('name', ''+prop+'');
        generateMeta.setAttribute('content', ''+value+'');
        var metaplacement = document.querySelector('head')
        metaplacement.insertBefore(generateMeta, metaplacement.childNodes[4]);
    }
    
    INC_COL.init = function () {
        INC_COL.methods.clear()
        INC_COL.methods.addVisitorID();
        INC_COL.config.duplamid=[]
        INC_COL.clientConfig.offset = 0;
        INC_COL.clientConfig.slidevalue = 0;
        INC_COL.clientConfig.slidevalueTop = 0;
        INC_COL.config.dupDataObjectProducts=[]
        INC_COL.config.uniqeProduct=[]
        INC_COL.config.recarray=[]
        INC_COL.config.pageType = INC_COL.methods.detectPageType();
        switch (INC_COL.config.pageType) {
            case "pdpcollection":
                if (INC_COL.debug) console.log("on pdp page");
                setTimeout(function () {
                    INC_COL.methods.irbReq_collection_bundle()
                }, 0);
                break;
            case "plpcollection":
                if (INC_COL.debug) console.log("on plp page");
                INC_COL.methods.irbReq_collection_bundle()
                break;
        }
    }
    
    INC_COL.dataStore = {};
    INC_COL.dataStore.methods = function () {
        var inccolDataStore = INC_COL.dataStore;
        var dataStoreObj = {};
        function buildDataStoreObj(bundleResponse,collection) {
            INC_COL.config.collection_combo_details=[]
            INC_COL.config.dupDataObjectProducts=[]
            if(bundleResponse.ComboSetCount == 0 && bundleResponse.RedirectURL != null){
                window.location.assign(bundleResponse.RedirectURL)
            }
            var collection_count = bundleResponse.ComboSetCount
            if(collection_count == 0){
                var remlo = document.querySelector('#loader_bk_inc')
                if(remlo != null){
                    remlo.parentNode.removeChild(remlo)
                }
            }
            var pdpProductId = '';
            var bundleProductsArray = [];
            if(bundleResponse.Collections != null){
                for (var bcol of bundleResponse.Collections) {
                    var bundles = bcol
                    if(collection == "collection"){
                        INC_COL.config.uniqueobjectproduct = []
                        INC_COL.config.dupDataObjectProducts=[]
                    }
                    var collection_bundles = [] 
                    var collection_products=[]
                    INC_COL.config.prod_json_respons = bundles.Products
                    for (var bprod of bundles.Products) {
                        var irbProductsArray = bprod;
                        collection_products.push(irbProductsArray["ProductId"])
                        if (irbProductsArray.length) {
                            pdpProductId = irbProductsArray[0]["ProductId"];
                            if(bundleProductsArray.indexOf(irbProductsArray[0]["ProductId"]) == -1){
                                bundleProductsArray.push(irbProductsArray[0]["ProductId"]);
                            }
                        }
                        if(INC_COL.config.uniqueobjectproduct.indexOf(irbProductsArray.ProductId) == -1){
                            var product = irbProductsArray;
                            if(INC_COL.config.comboprod.indexOf(product.ProductId) == -1){
                                INC_COL.config.comboprod.push(product.ProductId)
                                if(collection == "collection"){
                                    product["comboId"] = bundles.ComboId
                                }
                                if(bundles.comboMainProductId == null){
                                    if(window.location.href.indexOf('incgs') >= 0){
                                        bundles.comboMainProductId = INC_COL.config.pdpPID
                                    }
                                }
                                INC_COL.config.uniqueobjectproduct.push(irbProductsArray.ProductId)
                                if(collection == "collection"){
                                    product["comboId"] = bundles.ComboId
                                }
                                var pAttributes = product["Attributes"] || "";
                                if(pAttributes != "" && pAttributes != null){
                                    if(pAttributes.length == 1){
                                        if(pAttributes[0].attributeCode == "Colour" || pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == 'colour'){
                                            pAttributes[0].attributeCode = "Color"
                                            pAttributes[0].frontEndLabel = "Color"
                                        }else if(pAttributes[0].attributeCode == "size"){
                                            pAttributes[0].attributeCode = "Size"
                                            pAttributes[0].frontEndLabel = "Size"
                                        } else if(pAttributes[0].attributeCode == "weight"){
                                                pAttributes[0].attributeCode = "Weight"
                                                pAttributes[0].frontEndLabel = "Weight"
                                        } else {
                                            if(pAttributes[0].attributeCode == "volume"){
                                                pAttributes[0].attributeCode = "volume"
                                                pAttributes[0].frontEndLabel = "volume"
                                            }
                                        }
                                        
                                    }else{
                                        for (var pattrbt of pAttributes) {
                                            if(pattrbt.attributeCode == "Colour" || pattrbt.attributeCode == "color" || pAttributes[0].attributeCode == 'colour'){
                                                pattrbt.attributeCode = "Color"
                                                pattrbt.frontEndLabel = "Color"
                                            }
                                            if(pattrbt.attributeCode == "size"){
                                                pattrbt.attributeCode = "Size"
                                                pattrbt.frontEndLabel = "Size"
                                            }
                                            if(pattrbt.attributeCode == "weight" || pattrbt.attributeCode == "Weight"){
                                                pattrbt.attributeCode = "Weight"
                                                pattrbt.frontEndLabel = "Weight"
                                            }
                                            if(pattrbt.frontEndLabel == "volume"){
                                                pattrbt.frontEndLabel = "Volume"
                                            }
                                        }
                                    }
                                    pAttributes = attribute_listing_col(pAttributes)
                                }
                            
                                var pAttObj = {};
                                var allsize=[]
                                var attr_values='';
                                if(pAttributes.length == 1){
                                    if(pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == 'colour' || pAttributes[0].attributeCode == 'Colour'){
                                        pAttributes[0].attributeId = 0
                                        attr_values = pAttributes[0].attributeValues;
                                        for (var av of attr_values) {
                                            av.optionId1 = av.optionId;
                                            av.optionId = 0;
                                            if(pAttributes[0].attributeCode == "Size"){
                                                allsize.push(av.optionText)
                                            }
                                        }
                                    }else if(pAttributes[0].attributeCode == "Size"){
                                        pAttributes[0].attributeId = 1
                                        attr_values = pAttributes[0].attributeValues;
                                        for (var vi of attr_values) {
                                            vi.optionId1 = vi.optionId;
                                            vi.optionId = 1;
                                            if(pAttributes[0].attributeCode == "Size"){
                                                allsize.push(vi.optionText)
                                            }
                                        }
                                    }
                                }else{
                                    for(var t=0;t<pAttributes.length;t++){
                                        pAttributes[t].attributeId = t
                                        attr_values = pAttributes[t].attributeValues;
                                        for (var v1 of attr_values) {
                                            v1.optionId1 = v1.optionId;
                                            v1.optionId = t;
                                            if(pAttributes[t].attributeCode == "Size"){
                                                allsize.push(v1.optionText)
                                            }
                                        }
                                    }
                                }
                                
                                if(allsize.length > 0){
                                    for (var si of allsize) {
                                        for (var t3 of pAttributes) {
                                            if(t3.attributeCode == "Color" || pAttributes[0].attributeCode == 'colour' || pAttributes[0].attributeCode == 'Colour'){
                                                var attr_values3 = t3.attributeValues;
                                                for (var v3 of attr_values3) {
                                                    if(v3.optionText.indexOf(si) >= 0){
                                                        v3.optionText = v3.optionText.replace(si,'')
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                var productObj = ''
                                if (pAttributes.length) {
                                    INC_COL.config.configcount = 0
                                    for (var pmainattr of pAttributes) {
                                        var pAttributesObj = pmainattr;
                                        var pAttributesValues = pAttributesObj["attributeValues"];
                                        for (var pattval of pAttributesValues) {
                                            var childProduct = childproductdet_(pattval,product)
                                            productObj = new INC_COL.classes.ProductAttObj(childProduct);
                                            
                                            productObj["bundledProductId"] = pdpProductId;
                                            productObj.mainId = product["ProductId"];
                                            productObj.bundleId = bundles.ComboId;
                                            productObj.sku = productObj.id;
                                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                            if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                                dataStoreObj[product['ProductId']] = {};
                                            }
                                            if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                                dataStoreObj[product['ProductId']][productObj['id']] = {}
                                            }
                                            pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                            for (var pAttmain in productObj) {
                                                if (pAttmain == "option") {
                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                                        pAttObj["option"] = {}
                                                    }
                                                    Object.keys(productObj[pAttmain]).forEach(function (key) {
                                                        pAttObj[pAttmain][key] = productObj[pAttmain][key];
                                                    });
                                                } else {
                                                    pAttObj[pAttmain] = productObj[pAttmain];
                                                }
                                            }
                                        }
                                    }
                                }
                
                                if (pAttributes.length == 0) {
                                    productObj = new INC_COL.classes.ProductObj(product);
                                    productObj["bundleId"] = bundles.ComboId;
                                    productObj["bundledProductId"] = pdpProductId;
                                    productObj.sku = productObj.id;
                                    if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj['mainId'])) {
                                        dataStoreObj[productObj['mainId']] = {};
                                    }
                                    dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                                        dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                    }else {
                                        dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                    }
                                }
                            }
                        }
                    }
                    collection_bundles.push({
                        products:collection_products
                    })
                    INC_COL.config.collection_combo_details.push({
                        comboId:bundles.ComboId,
                        ComboImageURL:bundles.ComboImageURL,
                        ComboProductURL:bundles.ComboProductURL,
                        ComboTitle:bundles.ComboTitle,
                        collection_bundles : collection_bundles
                    })
                }
            }

            inccolDataStore.dataStoreObj = dataStoreObj;
            inccolDataStore.bundleProductsArray = bundleProductsArray;
            inccolDataStore.pdpProductId = pdpProductId;
            if (INC_COL.debug) console.log("DataStore");
            if (INC_COL.debug) console.log(inccolDataStore)
            inccolDataStore.bundleCartProducts = {};
            console.log("dataStoreObj" + JSON.stringify(dataStoreObj))
            if(collection == "collection"){
                setTimeout(function(){
                    if(bundleResponse.ComboSetCount != 0){
                        if(INC_COL.config.pageType == "pdpcollection"){
                            INC_COL.methods.createPDPCollectionBlock()
                        }else if(INC_COL.config.pageType == "plpcollection"){
                            INC_COL.methods.createPLPCollectionBlock()
                        }
                    }
                },500)
            }
            
        }
    
        function getFirstProductObjByMainId(findObj) {
            var childProductObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            try {
                if(productListObj != undefined){
                    childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
                }
            } catch (e) {
                console.log(e.stack)
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            var childProductObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            if(Object.keys(childProductObj).length == 0){
                if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                    for (var mainProductIds in productListObj) {
                        for (var childProductIds in productListObj[mainProductIds]) {
                            if (productListObj[mainProductIds][childProductIds]["id"] == findObj["id"]) {
                                childProductObj = productListObj[mainProductIds][childProductIds];
                                break;
                            }
                        }
                    }
                }
            }
            return childProductObj;
        }
        function getProductBySKU(findObj) {
            var childProductObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            return childProductObj;
        }
        function getUniqueCatergories() {
            var catergoriesArray = [];
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var bundleProductsArray = INC_COL.config.sidebararray
            bundleProductsArray.forEach(function (productId) {
                for (var childProductId in productListObj[productId]) {
                    var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC_COL.dataStore.clientProductDealsCategory) {
                        catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                    }
                }
            });
            return catergoriesArray;
        }
        function getProductColorsObj(findObj, type_of) {
            var productColorObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                // if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color" || productListObj[mainProductId][childProductId]["option"]["0"].code == "Colour") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            var attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            if(attr_block.querySelector('.inc_prd_desc_att_bk') != null){
                                                attr_block = document.querySelector('.inc_product-main_bk .inc_prd_module_bk .inc_prd_desc_att_bk')
                                            }
                                            var opt_text = ""
                                            var opt_size_text = ""
                                            if (type_of.parentNode != null) {
                                                opt_text = attr_block.getAttribute('data-zero');
                                                if(attr_block.getAttribute('data-size') != undefined){
                                                    opt_size_text = attr_block.getAttribute('data-size');
                                                }
                                            } else {
                                                opt_text = type_of.innerText;
                                            }

                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                                }
                                            } else {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                            }
                                        } else {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                        }

                                    }
                                // }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                var colorObj = {}
                colorObj["text"] = colorText;
                colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
                colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
                colorObj["code"] = productColorArrayObj[colorText]["code"];
                colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
                productColorObjArray.push(colorObj);
            });
            if (type_of == "size") {
                productColorObj["sizeArray"] = productColorObjArray;
            } else if (type_of == "zero") {
                productColorObj["att0Array"] = productColorObjArray;
            } else if (type_of == "third") {
                productColorObj["att3Array"] = productColorObjArray;
            } else {
                productColorObj["colorArray"] = productColorObjArray;
            }
            return productColorObj;
        }
        function getProductSizesObj(findObj, type_of) {
            var productSizeObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var productSizesArrayObj = {};
            var productSizesObjArray = [];
            var attr_code = "";
            var c_pid = "";
            var prc = "";
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            var attr_flag=""
                            if (type_of != undefined) {
                                var attr_block = null;
                                if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                } else {
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text = attr_block.getAttribute('data-zero');
                                var opt_size_text = attr_block.getAttribute('data-color');

                                if (opt_size_text == undefined) {
                                    opt_size_text = ""
                                }
                                if (opt_text == undefined) {
                                    opt_text = ""
                                }
                                if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                    if(opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[0]){
                                        if(productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[0].text == opt_size_text){
                                            attr_flag = "fir_block"
                                            
                                        }
                                    }else{
                                        if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                            attr_flag = "sec_block"
                                            if (productListObj[mainProductId][childProductId]["option"] != null &&
                                                productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                                c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                                prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                            }
                                        }
                                    }
                                } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        attr_flag = "empty_"
                                }
                            } else if (productListObj[mainProductId][childProductId]["option"] != null && 
                                productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                    attr_flag = "empty"
                            }
                            if(attr_flag == "fir_block" || attr_flag == "sec_block" || attr_flag == "empty" || attr_flag == "empty_"){
                                if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                    attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                    prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                }
                            }
                        }

                    }
                }
            }

            Object.keys(productSizesArrayObj).forEach(function (sizeText) {
                var sizeObj = {};
                sizeObj["text"] = sizeText;
                sizeObj["code"] = attr_code;
                sizeObj["cpid"] = c_pid;
                sizeObj["prc"] = prc;
                productSizesObjArray.push(sizeObj);
            });
            productSizeObj["sizeArray"] = productSizesObjArray
            return productSizeObj;
        }
        function getProductopt0Obj(findObj) {
            var product0Obj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var product0ArrayObj = {}
            var product0ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var  mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var  childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                var checT = true
                                var attr_main = true;
                                var first_attr_acodec = ["Connectivity", "Number of SIM", "Device"];
                                if (productListObj[mainProductId][childProductId]["option"][0] != undefined || productListObj[mainProductId][childProductId]["option"][1].code != undefined) {
                                    if (first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][0]) == -1 && first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][1].code) == -1) {
                                        attr_main = false;
                                    }
                                }
                                if (attr_main == checT) {
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                } else {
                                    if (findObj.colorText != undefined) {
                                        if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                        }
                                    } else {
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                    }
                                }
                            }
                        }
                    }
                }
            }

            Object.keys(product0ArrayObj).forEach(function (colorText) {
                var attr0Obj = {}
                attr0Obj["text"] = colorText;
                attr0Obj["text1"] = colorText.replace('g','').replace('l','').replace('k','');
                attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
                attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
                attr0Obj["code"] = product0ArrayObj[colorText]["code"];
                attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
                attr0Obj["prc"] = product0ArrayObj[colorText]["prc"];
                product0ObjArray.push(attr0Obj);
            });
            product0Obj["att0Array"] = product0ObjArray
            return product0Obj;
        }
        function getProductopt3Obj(findObj, type_of) {
            var product3Obj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var product3ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var  mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var  childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if(type_of.parentNode.parentNode != null){
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                    }else{
                                        attr_block = type_of.parentNode.parentNode
                                    }
                                    if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag){
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    if(type_of.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag){
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-size');
                                    var opt_color_text = attr_block.getAttribute('data-color');

                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_color_text == undefined) {
                                        opt_color_text = ""
                                    }
                                    if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                            }
                                        }
                                    } else {
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                }
                            }
                        }
                    }
                }
            }

            Object.keys(productColorArrayObj).forEach(function (colorText) {
                var attr3Obj = {}
                attr3Obj["text"] = colorText;
                attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
                attr3Obj["code"] = productColorArrayObj[colorText]["code"];
                attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
                attr3Obj["prc"] = productColorArrayObj[colorText]["prc"];
                product3ObjArray.push(attr3Obj);
            });
            product3Obj["att3Array"] = product3ObjArray;
            return product3Obj;
        }
        function getProductByAtt(findObj) {
            var childProductObj = {};
            var productListObj = INC_COL.dataStore.dataStoreObj;
            var mainProductListObj = productListObj[findObj.mainId];
            for (var  childProductId in mainProductListObj) {
                if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                }
                else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if ((mainProductListObj[childProductId]["option"] != null &&
                    mainProductListObj[childProductId]["option"] != undefined &&
                    mainProductListObj[childProductId]["option"]["0"] != null &&
                    mainProductListObj[childProductId]["option"]["0"] != undefined &&
                    (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)) || mainProductListObj[childProductId]["option"] != null &&
                    mainProductListObj[childProductId]["option"] != undefined &&
                    mainProductListObj[childProductId]["option"]["1"] != null &&
                    mainProductListObj[childProductId]["option"]["1"] != undefined &&
                    (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text) ) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;

                }
            }
            return childProductObj;
        }

        return {
            buildDataStoreObj: buildDataStoreObj,
            getFirstProductObjByMainId: getFirstProductObjByMainId,
            getProductById: getProductById,
            getProductBySKU: getProductBySKU,
            getUniqueCatergories: getUniqueCatergories,
            getProductColorsObj: getProductColorsObj,
            getProductSizesObj: getProductSizesObj,
            getProductopt3Obj: getProductopt3Obj,
            getProductopt0Obj: getProductopt0Obj,
            getProductByAtt: getProductByAtt
        }
    }
    function childproductdet_(childProduct,product){
        if (childProduct["childProductId"] == null) {
            childProduct["childProductId"] = product["ProductId"]
            childProduct["childProductSku"] = product["ProductSku"];
            childProduct["childProductName"] = product["ProductName"];
            childProduct["childProductImageUrl"] = product["ImageURL"];
            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
            childProduct["childProductUrl"] = product["ProductUrl"];
            childProduct["childProductPrice"] = product["Price"];
            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
            childProduct["childcolProductDescription"] = product["Description"];
            childProduct["childInternalProductId"] = product["ProductId"]
    
            childProduct["childProductField1"] = product["Field1"]
            childProduct["childProductField2"] = product["Field2"]
            childProduct["childProductField3"] = product["Field3"]
            childProduct["childProductField4"] = product["Field4"]
            childProduct["childProductField5"] = product["Field5"]
            childProduct["childProductField6"] = product["Field6"]
        }
        
        if(childProduct["childProductImageUrl"] == "" || childProduct["childProductImageUrl"] == null){
            childProduct["childProductImageUrl"] = product["ImageURL"];
        }
        if(product["Size"] != null){
            childProduct["MainprodVariant"] = product["Color"].replace('ー','') + "ー" + product["Size"].replace('ー','');
        }else{
            childProduct["MainprodVariant"] = product["Color"];
        }
        childProduct["comboId"] = product["comboId"];
        childProduct["childCategoryId"] = product["CategoryId"];
        childProduct["childCategoryName"] = product["CategoryName"];
        childProduct["childcolProductDescription"] = product["Description"];
        childProduct["ShortDescription"] = product["ShortDescription"];
        childProduct["childProductImageUrlMain"] = product["ImageURL"];
        childProduct["childProductPriceMain"] = product["Price"];
        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
        childProduct["childProductNameMain"] = product["ProductName"];
        childProduct["childProductUrlMain"] = product["ProductUrl"];
        childProduct["mainSKU"] = product["ProductSku"];
        childProduct["ProductType"] = product["ProductType"];
        childProduct["childProductDescription"] = product["Description"];
        childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
        childProduct["childProductField6"] = product["Field6"]
        return childProduct;
    }
    INC_COL.classes = {};
    INC_COL.classes.ProductObj = function (product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.comboId = ((product != null) && (product != undefined)) ? product["comboId"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        this.url = product["ProductUrl"]
        this.imageURL = product["ImageURL"].replace('pngg','png')
        this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePrice = product["SpecialPrice"]
        }else{
            this.activePrice = product["Price"]
        }
        if (product["OtherImageList"] != null){
            this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
        } else {
            this.otherImageList = []
            this.otherImageList.push(product["ImageURL"]);
        }
        if(product["Size"] != null && product["Size"] != undefined){
            this.size = product["Size"];
        }else{
            this.size = ""
        }
        this.option = {};
        this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"]: "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"]: "";
        this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
        this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"]: "";
        this.internalCategoryId = ((product != null) && (product != undefined)) ? product["Field1"]: "";
        
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.Field1 = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        }else{
            this.PromotionalMessage = ""
        }
        if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
        }else{
            this.ProductLevelDiscountMessage =  ""
        }
        this.skinType = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["Field6"] : "";

        this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
        this.regularPriceMain = ((product != null) && (product != undefined)) ? product["Price"] : "";
        
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePriceMain = product["SpecialPrice"];
        }else{
            this.activePriceMain = product["Price"];
        }
        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        }else{
            this.nameMain = ""
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        }else{
            this.imageURLMain = ""
        }
        this.urlMain = product["ProductUrl"]
    }
    INC_COL.classes.ProductAttObj = function (childproduct) {
        this.bundleId = "";
        this.id = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductId"] : "";
        this.sku = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductSku"] : "";
        this.mainsku = ((childproduct != null) && (childproduct != undefined)) ? childproduct["mainSKU"] : "";
        this.comboId = ((childproduct != null) && (childproduct != undefined)) ? childproduct["comboId"] : "";
        this.childsku = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductSku"] : "";
        if (childproduct["childProductName"] != null) {
            this.name = childproduct["childProductName"];
        }else{
            this.name = "";
        }
        this.Field1 = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField3"] : "";
        this.url = childproduct["childProductUrl"]
        this.imageURL = childproduct["childProductImageUrl"].replace('pngg','png')
        this.regularPrice = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductPrice"] : "";
        if (childproduct["childProductSpecialPrice"] != null && childproduct["childProductSpecialPrice"] != childproduct["childProductPrice"]) {
            this.activePrice = childproduct["childProductSpecialPrice"];
        }else{
            this.activePrice = childproduct["childProductPrice"];
        }
        if (childproduct["promotionalMessage"] != null) {
            this.PromotionalMessage = childproduct["promotionalMessage"];
        }else{
            this.PromotionalMessage = ""
        }
        if (childproduct["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = childproduct["productLevelDiscountMessage"]
        }else{
            this.ProductLevelDiscountMessage =  ""
        }
        if (childproduct["childProductOtherImageUrl"] != null){
            this.otherImageList = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductOtherImageUrl"] : [];
        } else {
            this.otherImageList = []
            this.otherImageList.push(childproduct["childProductImageUrl"]);
        }
        this.description = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childcolProductDescription"] : "";
        this.shortDescription = ((childproduct != null) && (childproduct != undefined)) ? childproduct["ShortDescription"] : "";
        this.internalCategoryId = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField1"]: "";
        this.size = "";
        this.option = {};
        if (((childproduct != null) && (childproduct != undefined))) {
            // this.option[childproduct["optionId"]] = {};
            // this.option[childproduct["optionId"]].text = childproduct["optionText"];
            // this.option[childproduct["optionId"]].titleText = (childproduct["childProductField2"] != null) ? childproduct["childProductField2"] : "";
            // this.option[childproduct["optionId"]].imgSrc = (childproduct["optionImageUrl"] != null) ? childproduct["optionImageUrl"] : "";
            // this.option[childproduct["optionId"]].optionId = childproduct["optionId"];
            // this.option[childproduct["optionId"]].colorCode = (childproduct["colorCode"] != null) ? childproduct["colorCode"] : "";
            // this.option[childproduct["optionId"]].cpid = (childproduct["childProductId"] != null) ? childproduct["childProductId"] : "";
            this.option[childproduct["optionId"]] = {};
            this.option[childproduct["optionId"]].text = childproduct["optionText"];
            this.option[childproduct["optionId"]].ImgURLC = childproduct["childProductImageUrl"];
            this.option[childproduct["optionId"]].titleText = (childproduct["childProductName"] != null) ? childproduct["childProductName"] : "";
            this.option[childproduct["optionId"]].imgSrc = (childproduct["optionImageUrl"] != null) ? childproduct["optionImageUrl"] : "";
            this.option[childproduct["optionId"]].colorCode = (childproduct["colorCode"] != null) ? childproduct["colorCode"] : "";
            this.option[childproduct["optionId"]].cpid = (childproduct["childProductId"] != null) ? childproduct["childProductId"] : "";
            this.option[childproduct["optionId"]].optionId = childproduct["optionId"];
            this.option[childproduct["optionId"]].activePriceChild = ((childproduct != null) && (childproduct != undefined)) ? ((childproduct["childProductSpecialPrice"] != null) ? childproduct["childProductSpecialPrice"] : childproduct["childProductPrice"]) : "";
            this.option[childproduct["optionId"]].size_guide = childproduct["Field7"]
        }
        this.categoryName = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childCategoryName"]: "";
        this.categoryId = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childCategoryId"]: "";
        
        this.ratingsCount = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField6"] : "";
        this.reviewsCount = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField3"] : "";
        this.skinType = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField3"] : "";
        this.underTone = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField4"] : "";
        this.finish = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField5"] : "";
        this.coverage = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductField6"] : "";
        this.ProductType = ((childproduct != null) && (childproduct != undefined)) ? childproduct["ProductType"] : "";

        this.regularPriceMain = ((childproduct != null) && (childproduct != undefined)) ? childproduct["childProductPriceMain"] : "";
        if (childproduct["childProductSpecialPriceMain"] != null && childproduct["childProductSpecialPriceMain"] != childproduct["childProductPriceMain"]) {
            this.activePriceMain = childproduct["childProductSpecialPriceMain"];
        }else{
            this.activePriceMain = childproduct["childProductPriceMain"];
        }
        if (childproduct["childProductNameMain"] != null) {
            this.nameMain = childproduct["childProductNameMain"];
        }else{
            this.nameMain = ""
        }
        if (childproduct["childProductImageUrlMain"] != null) {
            this.imageURLMain = childproduct["childProductImageUrlMain"];
        }else{
            this.imageURLMain = ""
        }
        this.urlMain = childproduct["childProductUrlMain"]
    }
    INC_COL.classes.FindObj = function (findObj) {
        this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
        this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
        this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
        this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
        this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
    }

    INC_COL.classes.NWConfig = function (nwConfigObj) {
        this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
        this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
        this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
    }

    INC_COL.methods = {};
    INC_COL.methods.irbReq_collection_bundle = function (productId) {
        var Pid = INC_COL.methods.getProductIdFromWebPage();
        if(INC_COL.config.pageType == "plpcollection"){
        if(document.querySelector('.category-intro .category-description .main-title') != null){
                Pid =  document.querySelector('.category-intro .category-description .main-title').innerText.trim()
            }else{
                if (document.querySelector('.breadcrumbs-area .breadcrumbs') != null){
                    Pid = document.querySelector('.breadcrumbs-area .breadcrumbs').innerText.split('\n')[Pid.length-1]
                }
            }
            productId = Pid;
        }
        var apiKey = INC_COL.config.clientToken;
        var irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";
        var set = "1"
        var shooping_type = "2"
        if(window.location.href.indexOf('incgs=1') >= 0){
            shooping_type = "1"
        }else if(window.location.href.indexOf('incgs=3') >= 0){
            shooping_type = "3"
        }
        var irbReqParams ='';
        if(INC_COL.config.pageType == "pdpcollection"){
            irbReqParams =
            "product_ids=" + INC_COL.config.pdpPID + 
            "&category_id=" + 
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + 'catalog_product_view' +
            "&set=" + set +
            "&cid=" + INC_COL.config.pdpCID +
            "&incgs=" + shooping_type +
            "&npb=" + "2" +
            "&client_visitor_id=" + INC_COL.config.ivid 
            ;
        }else{
            irbReqParams =
            "product_ids=" + 
            "&category_id=" + Base64.encode(productId) + 
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + "catalog_category_view" +
            "&client_visitor_id=" + INC_COL.config.ivid +
            "&set=" + set +
            "&npb=" + shooping_type
            ;
        }
        if (INC_COL.debug) console.log(irbReqParams);
        var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC_COL.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if(xhr.response != ""){
                    INC_COL.dataStore.methods().buildDataStoreObj(JSON.parse(xhr.response),'collection');
                    setTimeout(function(){
                        var sprdid = INC_COL.methods.getProductIdFromWebPage();
                        INC_COL.methods.irbReq(sprdid, 10, "catalog_product_view");
                    },300)
                }else{
                    var remlo = document.querySelector('#loader_bk_inc')
                    if(remlo != null){
                        remlo.parentNode.removeChild(remlo)
                    }
                }
            }
        }
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    }
    INC_COL.methods.irbReq = function (productId, bundleCount, elementName) {
        var elmname = elementName || "";
        var productIdReq = productId;
        var apiKey = INC_COL.config.clientToken;
        var bundleReqCount = bundleCount || 10;
        var irbReqParams = ""
        var irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";
        irbReqParams =
                "product_ids=" + productIdReq +
                "&category_id=" +
                "&api_key=" + apiKey +
                "&client_id=" +
                "&page_type=" + elmname +
                "&fr=" + "1" +
                "&client_visitor_id=" + INC_COL.config.ivid +
                "&is_tc=" + "1" +
                "&no_of_bundles=" + bundleReqCount
                ;
        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC_COL.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if(xhr.response != ""){
                    cb_tc_col(JSON.parse(xhr.response,'sidebar'));
                }
            }
        }
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    }
    INC_COL.methods.get_product_ratingscol = function(filed3, _field2,rating_containers) {
        var review = filed3
        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if(review == undefined){
            return;
        }
        if (review.split('|')[1] == undefined || review.split('|')[1] =='') {
            count.textContent = "(0)";
        } else {
            count.textContent = "(" + filed3.split('|')[1] + ")";
        }
        var stars = document.createElement('span');
        if(filed3 != undefined && filed3 != ""){
            var rating = filed3.split('|')[0];
            if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
                rating = 0
            }
            rating = parseFloat(rating).toFixed(1)
            rating = rating.toString();
            var rating_m = null;
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
            } else if(isNaN(rating_m)) {
                rating_containers.classList.add("rating_" + rating);
            } else {
                rating_containers.classList.add("rating_" + rating);
            }
            stars.classList.add('rating_stars');
            if ((rating_m != null && rating_m != "NaN")) {
                stars.classList.add("rating_" + rating_m);
            } else if(isNaN(rating_m)) {
                stars.classList.add("rating_" + rating);
            } else {
                stars.classList.add("rating_" + rating);
            }
            rating_containers.appendChild(stars);
        }else{
            stars.innerText="."
            stars.style.color="#fff"
            stars.classList.add('rating_stars');
            stars.classList.add('noratings');
            rating_containers.classList.add('noratings');
            rating_containers.appendChild(stars);
        }
    }
    INC_COL.methods.getProductIdFromWebPage = function () {
        var href_split =  window.location.href.split('?')[1];
        var total_split_href=href_split.split('&');
        var cid="";
        var pid=""
        if(href_split != undefined){
            if(href_split != undefined){
                for (var thref of total_split_href) {
                    if(thref.indexOf('cid') >= 0){
                        cid = thref.split('=')[1]
                    }else if(thref.indexOf('pid') >= 0){
                        pid = thref.split('=')[1]
                    }
                }
            }
        }
        if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0) && cid != "" && cid != 0 && cid != null && pid != "" && pid != 0 && pid != null){
            cid="";
            pid=""
            if(href_split != undefined){
                for (var thref1 of total_split_href) {
                    if(thref1.indexOf('cid') >= 0){
                        cid = thref1.split('=')[1].split('#')[0]
                    }else if(thref1.indexOf('pid') >= 0){
                        pid = thref1.split('=')[1].split('#')[0]
                    }
                }
            }
            INC_COL.config.pdpCID = cid
            INC_COL.config.pdpPID = pid
            return pid;
        }
    }

    INC_COL.methods.detectPageType = function () {
        if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
            return "pdpcollection";
        }
        if (document.querySelector('.products-grid-wrap') != null){
            return "plpcollection";
        }
    }
    INC_COL.methods.createPDPCollectionBlock = function () {
        document.querySelector('html').classList.add('inc_bundles');
        document.querySelector('body').classList.add('inc_bund_blk');
        var empty_sidebarflag = false
        if (INC_COL.dataStore.dataStoreObj[INC_COL.config.Product_id] != undefined) {
            if (INC_COL.dataStore.dataStoreObj[INC_COL.config.Product_id][INC_COL.config.Product_id] != undefined) {
                if (INC_COL.dataStore.dataStoreObj[INC_COL.config.Product_id][INC_COL.config.Product_id].bundleId == "12345679") {
                    empty_sidebarflag = true
                }
            }
        }
        if (INC_COL.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == falseflag) {
            var pdpBlockcol = generate_html_tag('div','inc_bk')
            pdpBlockcol.innerHTML = pdp_html
            pdpBlockcol.setAttribute('style', 'clear: both;')
            var modalTitle = pdpBlockcol.querySelector('.inc_title_txt');
            modalTitle.innerText = INC_COL.config.FBTTitle
            var mainProductcol = INC_COL.config.collection_combo_details[0].collection_bundles[0].products[0];
            var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductcol }).id;
            var maincolproductBlock = this.createcolProductModuleBlock(pdpProductId, "pdpcollection", false, pdpBlockcol,"mainprod");
            var mainprod_html = maincolproductBlock.querySelector('.inc_prd_desc_bk').innerHTML
            var elPdpMainProductBlock = pdpBlockcol.querySelector('.inc_product-main_bk');
            maincolproductBlock.classList.add('main_product')
            elPdpMainProductBlock.appendChild(maincolproductBlock);

            var inc_bc_bk = generate_html_tag('div','inc_breadCrums_bk');
            var inc_home_txt = generate_html_tag('div','inc_home_txt');
            var inc_prdnme_txt = generate_html_tag('div','inc_prdnme_txt');
            inc_bc_bk.appendChild(inc_home_txt);
            inc_bc_bk.appendChild(inc_prdnme_txt);
            pdpBlockcol.appendChild(inc_bc_bk);

            var pdpBundleProductListMainBlock = pdpBlockcol.querySelector('.inc_bd_prd_list_main_bk');
            pdpBundleProductListMainBlock.innerHTML = "";

            var colpdpBundleProductListMainBlock = pdpBlockcol.querySelector(".inc_bd_prd_list_main_bk");
            colpdpBundleProductListMainBlock.innerHTML = "";
            for (var combodet of INC_COL.config.collection_combo_details) {
                for (var combundle of combodet.collection_bundles) {
                    for(var r=0;r<combundle.products.length;r++){
                        if(r < 4 && r != 0){
                            var prd_id=combundle.products[r]
                            var firstProductObjByMainId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: prd_id });
                            var colproductBlock = this.createcolProductModuleBlock(firstProductObjByMainId.id, "pdpcollection", true,pdpBlockcol);
                            colproductBlock.classList.add('inc_go_well')
                            pdpBundleProductListMainBlock.appendChild(colproductBlock);
                        }
                    }
                }      
            }
            var eldescrpionblock = pdpBlockcol.querySelector(".inc_main_product_description_text")
            eldescrpionblock.innerHTML = maincolproductBlock.querySelector('.inc_prd_modal_bk .inc_prd_description_main_bk').innerHTML

            if(maincolproductBlock.querySelector('.inc_prd_modal_bk .inc_prd_description_main_bk').innerHTML!= ''){
                pdpBlockcol.querySelector(".inc_main_product_description_title_txt").innerHTML = INC_COL.config.descriptionsText
            }
        
            setTimeout(function(){
                if(document.querySelector('.inc_main_product_description_text .Tabnav h2')!= null){
                    if(document.querySelector('.inc_main_product_description_text .Tabnav h2').innerText.toLowerCase() == 'product description'){
                        document.querySelector('.inc_main_product_description_text .Tabnav h2').style.display = 'none';
                    }
                }
            })
        
        
            var inc_additional_prod_title_bk = generate_html_tag('div','inc_additional_prod_title_bk')
            var inc_additional_prod_title_txt = generate_html_tag('div','inc_additional_prod_title_txt')
            var inc_additional_prod_title_light = generate_html_tag('div','inc_additional_prod_title_light')
            inc_additional_prod_title_txt.textContent = INC_COL.config.titleText
            inc_additional_prod_title_light.textContent = INC_COL.config.titleLight
            inc_additional_prod_title_bk.appendChild(inc_additional_prod_title_txt)
            inc_additional_prod_title_bk.appendChild(inc_additional_prod_title_light)
            var inserMainDetails = pdpBlockcol.querySelector('.inc_bd_prd_list_main_bk')
            inserMainDetails.parentNode.insertBefore(inc_additional_prod_title_bk,inserMainDetails)

            INC_COL.methods.getMainProductDetails(mainprod_html,pdpBlockcol)
            

            
            colpdpBundleProductListMainBlock.querySelector('.inc_prd_module_bk').style.display = "block";
            
            
            var colpdpBundleCartBlock = this.createcolPDPBundleCartBlock(pdpBlockcol);
            var rcolpdpBundleCartBlock = pdpBlockcol.querySelector('.inc_bd_cart_bk');
            rcolpdpBundleCartBlock.parentNode.removeChild(rcolpdpBundleCartBlock);
            pdpBlockcol.querySelector('.inc_bundle_bk').appendChild(colpdpBundleCartBlock);
            
            //inc_bundle_bk
            var descriptPlacementmob = pdpBlockcol.querySelector('.inc_main_product_description_bk')
            var descriptPlaHtml = descriptPlacementmob.innerHTML
            descriptPlacementmob.parentNode.removeChild(descriptPlacementmob)
            var maindesctext =  generate_html_tag('div','inc_main_product_description_bk')
            maindesctext.innerHTML = descriptPlaHtml
            pdpBlockcol.appendChild(maindesctext);
            
            if (document.querySelector('html').classList.contains('pdp')){
                if (document.querySelector(".inc_pdp_bk") != null){
                    document.querySelector(".inc_pdp_bk").style.display="none";
                }
                
                if(window.innerWidth > 767){
                    document.querySelector('.site-width-container').setAttribute('style','width: 100%;height: 68%;position: relative;background: white url(https://www.increasingly.co/Implementation/inc_loading.gif) no-repeat center center/auto;top: 0;left:0;background-size: 204px;z-index: 9999;display: block;min-height:204px;')
                }else {
                    if ( document.querySelector('.layout-pdp') != null){
                    document.querySelector('.layout-pdp').setAttribute('style','width: 100%;height: 68%;position: relative;background: url(https://www.increasingly.co/Implementation/inc_loading.gif) no-repeat center center/auto;top: 0;left:0;background-size: 204px;z-index: 9999;display: block;min-height:204px;')
                    }
                }
            }
            
            INC_COL.methods.clear();
            if(document.querySelector('.inc_collection_block') != null){
                var collection_block=document.querySelector('.inc_collection_block')
                collection_block.parentNode.removeChild(collection_block);
            }
            if(document.querySelector('.product_detail-container') != null){
                document.querySelector('.product_detail-container').style.display="none"
                document.querySelector('.product_detail-description').style.display="none"
                // document.querySelector('.carousel-wrapper[aria-label="Recently viewed"]').style.display="none"
                document.querySelector('.product_detail[data-widget="productDetail"]').style.display="none"
                document.querySelector('.breadcrumbs').style.display="none"
                document.querySelector('.product_tab-nav-wrapper .product_tab-price').style.display="none"
                document.querySelector('.product_tab-nav-wrapper .add-to-cart-details').style.display="none"
            }
            var pdpcolsibling=document.querySelector('#content[role="main"]');
            if(pdpcolsibling != null){
                pdpcolsibling.parentNode.insertBefore(pdpBlockcol, pdpcolsibling);
            }
            var elProductAddBlock = document.querySelectorAll('.inc_bd_prd_list_bk .inc_prd_desc_add_bk')
            if (document.querySelector('.inc_product-main_bk .inc_prd_desc_title_txt_hdr') != null) {
                document.querySelector('.inc_product-main_bk .inc_prd_desc_title_txt_hdr').innerHTML = "Selected Product"
                document.querySelector('.inc_product-main_bk .inc_prd_desc_title_txt_hdr').style.textTransform = "none"
            }
            var mainproductb = document.querySelector('.inc_product-main_bk .inc_prd_module_bk')
            var main_idsd = mainproductb.getAttribute('data-main_id')
            if(mainproductb.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsd+'"]') != null){
                if(mainproductb.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsd+'"] .inc_prd_desc_att_color_list_item_img') != null){
                    mainproductb.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsd+'"] .inc_prd_desc_att_color_list_item_img').click()
                }
            } else{
                defcolorsel(mainproductb)
            }
            if(mainproductb.querySelector('.inc_prd_desc_att_zero_bk.inc_active') != null){
                if(mainproductb.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail') != null){
                    if(mainproductb.querySelector('.inc_prd_desc_att_zero_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]') != null){
                        mainproductb.querySelector('.inc_prd_desc_att_zero_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]').click()
                    }else{
                        defzerosel(mainproductb)
                    }
                }
            } 
            if(mainproductb.querySelector('.inc_prd_desc_att_size_bk.inc_active') != null){
                if(mainproductb.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail') != null){
                    if(mainproductb.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]') != null){
                        mainproductb.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]').click()
                    }else{
                        defsizesel(mainproductb)
                    }
                }
            } 
            if(mainproductb.querySelector('.inc_prd_desc_att_third_bk.inc_active') != null){
                if(mainproductb.querySelector('.inc_prd_desc_att_third_list_item_img_bk.avail') != null){
                    if(mainproductb.querySelector('.inc_prd_desc_att_third_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]') != null){
                        mainproductb.querySelector('.inc_prd_desc_att_third_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsd+'"]').click()
                    }else{
                        defthirdsel(mainproductb)
                    }
                }
            } 
            document.querySelector('.inc_product-main_bk .inc_prd_desc_add_bk').click()
            setTimeout(function(){
                for (var i = 0; i < 7; i++) {
                    if(i == 0 || i == 2 || i == 4 || i == 6){
                        if(elProductAddBlock[i] != undefined){
                            var elprodelm=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            var main_idsq = elprodelm.getAttribute('data-sku')
                            if(elprodelm.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsq+'"]') != null){
                                if(elprodelm.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsq+'"] .inc_prd_desc_att_color_list_item_img') != null){
                                    elprodelm.querySelector('.inc_prd_desc_att_color_list_item_img_bk[data-cpid="'+main_idsq+'"] .inc_prd_desc_att_color_list_item_img').click()
                                }
                            } else{
                                defcolorsel(elprodelm)
                            }
                            if(elprodelm.querySelector('.inc_prd_desc_att_zero_bk.inc_active') != null){
                                if(elprodelm.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail') != null){
                                    if(elprodelm.querySelector('.inc_prd_desc_att_zero_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]') != null){
                                        elprodelm.querySelector('.inc_prd_desc_att_zero_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]').click()
                                    }else{
                                        defzerosel(elprodelm)
                                    }
                                }
                            } 
                            if(elprodelm.querySelector('.inc_prd_desc_att_third_bk.inc_active') != null){
                                if(elprodelm.querySelector('.inc_prd_desc_att_third_list_item_img_bk.avail') != null){
                                    if(elprodelm.querySelector('.inc_prd_desc_att_third_bk.inc_active .inc_prd_desc_att_third_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]') != null){
                                        elprodelm.querySelector('.inc_prd_desc_att_third_bk.inc_active .inc_prd_desc_att_third_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]').click()
                                    }else{
                                        defthirdsel(elprodelm)
                                    }
                                }
                            } 
                            if(elprodelm.querySelector('.inc_prd_desc_att_size_bk.inc_active') != null){
                                if(elprodelm.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail') != null){
                                    if(elprodelm.querySelector('.inc_prd_desc_att_size_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]') != null){
                                        elprodelm.querySelector('.inc_prd_desc_att_size_bk.inc_active .inc_prd_desc_att_size_list_item_img_bk.avail[data-cpid="'+main_idsq+'"]').click()
                                    }else{
                                        defsizesel(elprodelm)
                                    }
                                }
                            } 
                            elProductAddBlock[i].click();
                        }
                    }
                }
                if(document.querySelectorAll('.inc_col_desc_main_product_details_bk .inc_col_size_qty_details_bk select option')[1] != null){
                    document.querySelectorAll('.inc_col_desc_main_product_details_bk .inc_col_size_qty_details_bk select option')[1].selected = "selected"
                    INC_COL.methods.calculateBundleTotal()
                    onloadpdp = true
                    onloadpdp_delete = true
                }
            },100)
            setTimeout(function(){
                onloadpdp = true
                onloadpdp_delete = true
            },1000)
            setTimeout(function(){
                generate_meta_tag('viewport',"width=device-width, initial-scale=1.0")
            },200)
            // INC_COL.methods.irbReq_is_categ_recomendation()
        }
    }
    function defcolorsel(elm){
        if(elm.querySelector('.inc_prd_desc_att_color_list_item_img') != null){
            elm.querySelector('.inc_prd_desc_att_color_list_item_img').click()
        }
    }
    function defsizesel(elm){
        if(elm.querySelector('.inc_prd_desc_att_size_list_item_img_bk.avail') != null){
            elm.querySelector('.inc_prd_desc_att_size_list_item_img').click()
        }
    }
    function defthirdsel(elm){
        if(elm.querySelector('.inc_prd_desc_att_third_list_item_img_bk.avail') != null){
            elm.querySelector('.inc_prd_desc_att_third_list_item_img').click()
        }
    }
    function defzerosel(elm){
        if(elm.querySelector('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img_bk.avail') != null){
            elm.querySelector('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img').click()
        }
    }
    INC_COL.methods.createPLPCollectionBlock = function () {
        if(document.querySelector('.plp_collection_bk') != null){
            var collection_bk=document.querySelector('.plp_collection_bk')
            collection_bk.parentNode.removeChild(collection_bk);
        }
        
        var inc_col_lection_bk = generate_html_tag('div','plp_collection_bk');
        document.querySelector('body').classList.add('inc_bundles_available_plp');
        inc_col_lection_bk.setAttribute('style','padding: 15px 10px;')
        var collection_title_bk=generate_html_tag('div','collection_title_bk')
        var collection_plp_title_txt=generate_html_tag('div','collection_plp_title_txt')
        collection_plp_title_txt.innerText = "OUR LATEST COLLECTION"
        collection_title_bk.appendChild(collection_plp_title_txt)
        inc_col_lection_bk.appendChild(collection_title_bk)
        var inc_col_lection_bundle_bk = generate_html_tag('div','inc_col_lection_bundle_bk');
        inc_col_lection_bk.appendChild(inc_col_lection_bundle_bk)
        var sliderBtnCounter = 0;
        //
        var inc_col_lection_slider_bk = generate_html_tag('div','inc_col_lection_slider_bk');
        var inc_col_lection_thumbnail_arrows_bk = generate_html_tag('div','inc_col_lection_thumbnail_arrows_bk');
        inc_col_lection_slider_bk.appendChild(inc_col_lection_thumbnail_arrows_bk)
        var inc_col_lection_thumbnail_prev_wrapper = generate_html_tag('div','inc_col_lection_thumbnail_prev_wrapper');
        inc_col_lection_thumbnail_arrows_bk.appendChild(inc_col_lection_thumbnail_prev_wrapper)

        var inc_col_lection_thumbnail_prev_btn = generate_html_tag('div','inc_col_lection_thumbnail_prev_btn');
        inc_col_lection_thumbnail_prev_btn.innerText = "Předchozí"
        inc_col_lection_thumbnail_prev_wrapper.appendChild(inc_col_lection_thumbnail_prev_btn)
        inc_col_lection_thumbnail_prev_btn.setAttribute("style", "pointer-events: none;opacity:0.5");
        inc_col_lection_thumbnail_prev_btn.parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
        inc_col_lection_thumbnail_prev_wrapper.addEventListener('click',function(){
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
            if (INC_COL.clientConfig.slidevalue == -1) INC_COL.clientConfig.slidevalue = 0;
            var width_slide=""
            if(window.innerWidth > 1023){
                width_slide = 285
            }else if(window.innerWidth > 835){
                width_slide = 320
            }else{
                width_slide = 354
            }
            if(INC_COL.clientConfig.slidevalue > 0){
                document.querySelector('.inc_col_lection_thumbnail_next_btn').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_col_lection_thumbnail_next_btn').parentNode.setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue--
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) + width_slide) + 'px';
                var menu = document.querySelector('.inc_col_lection_item_list_bk');
                menu.setAttribute('style','margin-left:'+INC_COL.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            if(INC_COL.clientConfig.slidevalue == 0){
                document.querySelector('.inc_col_lection_thumbnail_prev_btn').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_col_lection_thumbnail_prev_btn').parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

    

        var inc_col_lection_thumbnail_next_wrapper = generate_html_tag('div','inc_col_lection_thumbnail_next_wrapper');
        inc_col_lection_thumbnail_arrows_bk.appendChild(inc_col_lection_thumbnail_next_wrapper)
        var inc_col_lection_thumbnail_next_btn = generate_html_tag('div','inc_col_lection_thumbnail_next_btn');
        inc_col_lection_thumbnail_next_btn.innerText = "Další"
        inc_col_lection_thumbnail_next_wrapper.appendChild(inc_col_lection_thumbnail_next_btn)
        
        inc_col_lection_thumbnail_next_wrapper.addEventListener('click',function(){
            sliderBtnCounter++;
            var all_p_length = document.querySelectorAll('.inc_col_lection_item_bk').length
            if (sliderBtnCounter > all_p_length.length - 3) {
                sliderBtnCounter--;
            }
            
            var cc_ount=1;
            if(window.innerWidth > 1239){
                cc_ount = 4
            }
            var width_slide=""
            if(window.innerWidth > 1023){
                width_slide = 285
            }else if(window.innerWidth > 835){
                width_slide = 320
            }else{
                width_slide = 354
            }
            //cc_ount=2
            if(+INC_COL.clientConfig.slidevalue + +cc_ount < all_p_length){
            document.querySelector('.inc_col_lection_thumbnail_prev_btn').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_col_lection_thumbnail_prev_btn').parentNode.setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue++
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) - width_slide ) + 'px';
                var menu = document.querySelector('.inc_col_lection_item_list_bk');
                menu.setAttribute('style','margin-left:'+INC_COL.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            
            if(+INC_COL.clientConfig.slidevalue + +cc_ount == all_p_length){
                document.querySelector('.inc_col_lection_thumbnail_next_btn').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_col_lection_thumbnail_next_btn').parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });
        if((window.innerWidth > 420 && INC_COL.config.collection_combo_details.length > 3) || (window.innerWidth < 420 && INC_COL.config.collection_combo_details.length > 1)){
            inc_col_lection_bk.appendChild(inc_col_lection_slider_bk)
        }
        //collection modal block

        var inc_col_lection_modal_bk = generate_html_tag('div','inc_col_lection_modal_bk');
        var inc_col_lection_modal_list = generate_html_tag('div','inc_col_lection_modal_list');
        inc_col_lection_modal_bk.appendChild(inc_col_lection_modal_list)
        inc_col_lection_bk.appendChild(inc_col_lection_modal_bk)

        var inc_col_lection_item_list_bk = generate_html_tag('div','inc_col_lection_item_list_bk');
        inc_col_lection_bundle_bk.appendChild(inc_col_lection_item_list_bk)
        
        for(var k=0;k<INC_COL.config.collection_combo_details.length;k++){
            if(k < INC_COL.config.collection_combo_details.length){
                var inc_col_lection_item_bk = generate_html_tag('div','inc_col_lection_item_bk');
                inc_col_lection_item_list_bk.appendChild(inc_col_lection_item_bk)
                var inc_col_lection_item_wrapper = generate_html_tag('div','inc_col_lection_item_wrapper');
                inc_col_lection_item_bk.appendChild(inc_col_lection_item_wrapper)
                
                //image gallery block for collections
                
                var inc_col_lection_Images_bk = generate_html_tag('div','inc_col_lection_Images_bk');
                inc_col_lection_item_wrapper.appendChild(inc_col_lection_Images_bk)
                
                //collection image per items
                var inc_col_lection_Images_gallery = generate_html_tag('div','inc_col_lection_Images_gallery');
                inc_col_lection_Images_gallery.classList.add('active')
                inc_col_lection_Images_bk.appendChild(inc_col_lection_Images_gallery)


                var img_wrapper_first = generate_html_tag('div','img_wrapper_first');
                var img_wrapper_second = generate_html_tag('div','img_wrapper_second');
                inc_col_lection_Images_gallery.appendChild(img_wrapper_first)
                inc_col_lection_Images_gallery.appendChild(img_wrapper_second)

                var collection_combo_img_wrapper=generate_html_tag('div','collection_combo_img_wrapper');
                var collection_combo_img=generate_html_tag('img');
                
            
                collection_combo_img_wrapper.appendChild(collection_combo_img)
                inc_col_lection_Images_gallery.appendChild(collection_combo_img_wrapper)

                inc_col_lection_Images_gallery.addEventListener('click',function(){
                    this.parentNode.parentNode.parentNode.querySelector('.inc_col_lection_checkout_btn').click()
                })

                collection_combo_img_wrapper.classList.add('active')


                var inc_col_lection_promo_bk = generate_html_tag('div','inc_col_lection_promo_bk');
                inc_col_lection_Images_bk.appendChild(inc_col_lection_promo_bk)
                // inc_col_lection_Name_text.setAttribute('style','max-height: 40px;')

                //collection per product block
                var inc_col_lection_details_bk = generate_html_tag('div','inc_col_lection_details_bk');

                var inc_col_lection_details_btn_bk = generate_html_tag('div','inc_col_lection_details_btn_bk');
                inc_col_lection_item_bk.appendChild(inc_col_lection_details_btn_bk)
                
                inc_col_lection_details_btn_bk.appendChild(inc_col_lection_details_bk)


                var inc_col_lection_Name_bk = generate_html_tag('div','inc_col_lection_Name_bk');
                inc_col_lection_item_wrapper.appendChild(inc_col_lection_Name_bk)
                var inc_col_lection_Name_text = generate_html_tag('a','inc_col_lection_Name_text');
                inc_col_lection_Name_bk.appendChild(inc_col_lection_Name_text)
                
                inc_col_lection_Name_text.addEventListener('click',function(){
                    INC_COL.methods.sendBundleClickTracking(this.getAttribute('comboid'));
                    var urlc = this.getAttribute('ComboProductURL')
                    window.location.href = urlc

                })

                
                collection_combo_img_wrapper=generate_html_tag('div','collection_combo_img_wrapper');
                collection_combo_img=generate_html_tag('img');
                collection_combo_img_wrapper.appendChild(collection_combo_img)
                collection_combo_img_wrapper.classList.add('active')
                

                var inc_col_lection_price_bk = generate_html_tag('div','inc_col_lection_price_bk');
                inc_col_lection_details_bk.appendChild(inc_col_lection_price_bk)

                var inc_col_lection_regular_price = generate_html_tag('div','inc_col_lection_regular_price');
                inc_col_lection_price_bk.appendChild(inc_col_lection_regular_price)
                
                var inc_col_lection_active_price = generate_html_tag('div','inc_col_lection_active_price');
                inc_col_lection_price_bk.appendChild(inc_col_lection_active_price)

                

                var inc_col_lection_Rating_bk = generate_html_tag('div','inc_col_lection_Rating_bk');
                inc_col_lection_details_bk.appendChild(inc_col_lection_Rating_bk)



                var pr = 0;
                var sp = 0;
                var bestrating=0
                var rcount=0
                var inc_col_lection_product_list_wrapper_bk = generate_html_tag('div','inc_col_lection_product_list_wrapper_bk');
                inc_col_lection_item_wrapper.appendChild(inc_col_lection_product_list_wrapper_bk)
                for (var colbundle of INC_COL.config.collection_combo_details[k].collection_bundles) {
                    for (var colprd of colbundle.products) {
                        if(rcount < 4){ 
                            inc_col_lection_Images_gallery.classList.add('combo_' +colbundle.products.length )
                            inc_col_lection_Images_bk.classList.add('combo_' +colbundle.products.length )
                            var product_id=colprd
                            var findObj = new INC_COL.classes.FindObj({ id: product_id });
                            var productObj = INC_COL.dataStore.methods().getProductById(findObj);
                            var img_wrapper = generate_html_tag('div','img_wrapper');
                            if (window.innerWidth > 768){ 
                                    if (product_id == INC_COL.config.collection_combo_details[k].ComboMainPrdId){
                                    img_wrapper.classList.add("mainProductImage") 
                                    }
                            }
                            var p_img = generate_html_tag('img');
                            p_img.setAttribute('src',productObj["imageURL"])
                            img_wrapper.appendChild(p_img)

                            if(rcount == 0){
                                img_wrapper_first.appendChild(img_wrapper)
                            }else{
                                img_wrapper_second.appendChild(img_wrapper)
                            }

                            img_wrapper.addEventListener('click',function(){
                                if(window.location.href.indexOf('incgs=1') == -1){
                                    if(document.querySelector('.inc_col_lection_thumbnail_item.active') != null){
                                        var hrefre=document.querySelector('.inc_col_lection_thumbnail_item.active').getAttribute('href_red')
                                        var comboid=document.querySelector('.inc_col_lection_product_list_bk').getAttribute('data-combo_id')
                                        INC_COL.methods.sendBundleClickTracking(comboid);
                                        window.location.href=hrefre
                                    }
                                }
                            })
                            var inc_col_lection_product_list_bk = generate_html_tag('div','inc_col_lection_product_list_bk');
                            inc_col_lection_product_list_bk.classList.add(productObj.ProductType)
                            inc_col_lection_product_list_wrapper_bk.appendChild(inc_col_lection_product_list_bk)

                            var inc_col_lection_product_list_wrapper = generate_html_tag('div','inc_col_lection_product_list_wrapper');
                            inc_col_lection_product_list_bk.appendChild(inc_col_lection_product_list_wrapper)

                            var inc_col_lection_product_image_bk = generate_html_tag('div','inc_col_lection_product_image_bk');
                            inc_col_lection_product_list_wrapper.appendChild(inc_col_lection_product_image_bk)

                            var inc_col_lection_product_image = generate_html_tag('img');
                            inc_col_lection_product_image.setAttribute('src',productObj["imageURL"])
                            inc_col_lection_product_image.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                            inc_col_lection_product_image_bk.appendChild(inc_col_lection_product_image)

                            inc_col_lection_product_image_bk.addEventListener('click',function(){
                                var activecol = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
                                if(activecol.querySelector('.inc_col_lection_modal_bk .inc_col_lection_module_bk.active') != null){
                                    activecol.querySelector('.inc_col_lection_modal_bk .inc_col_lection_module_bk.active').classList.remove('active')
                                }
                                if(activecol.querySelector('.inc_col_lection_modal_bk .inc_col_lection_module_bk[data-main_id="'+datamainid+'"]') != null){
                                    activecol.querySelector('.inc_col_lection_modal_bk .inc_col_lection_module_bk[data-main_id="'+datamainid+'"]').classList.add('active')
                                }
                                if(document.querySelector('.inc_col_lection_module_bk.active .inc_popup_product_details_tab_bk') != null){
                                    document.querySelector('.inc_col_lection_module_bk.active .inc_popup_product_details_tab_bk').click()
                                }
                                document.querySelector('html').classList.add('inc_overlay');
                                activecol.querySelector('.inc_col_lection_modal_bk').classList.toggle('active')
                                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1  && window.innerWidth < 1337) {
                                    setTimeout(function(){
                                        document.querySelector('body').setAttribute('style','position: fixed;width: 100%;')
                                    },100)
                                }
                            })

                            var inc_col_lection_product_info_bk = generate_html_tag('div','inc_col_lection_product_info_bk');
                            inc_col_lection_product_list_wrapper.appendChild(inc_col_lection_product_info_bk)

                            inc_col_lection_product_list_bk.setAttribute('data-id', productObj.id);
                            inc_col_lection_product_list_bk.setAttribute('data-sku', productObj.sku);
                            inc_col_lection_product_list_bk.setAttribute('data-main_id', productObj.mainId);
                            inc_col_lection_product_list_bk.setAttribute('data-bundle_id', productObj.bundleId);
                            inc_col_lection_product_list_bk.setAttribute('data-combo_id', INC_COL.config.collection_combo_details[k].comboId);
                            inc_col_lection_product_list_bk.setAttribute('id', 'inc'+productObj.mainId);

                            var inc_col_lection_product_title = generate_html_tag('div','inc_col_lection_product_title');
                            var p_name = generate_html_tag('p');
                            p_name.innerText = productObj.name
                            inc_col_lection_product_title.setAttribute('title',productObj.name)
                            inc_col_lection_product_title.appendChild(p_name)
                            inc_col_lection_product_info_bk.appendChild(inc_col_lection_product_title)
                            var newproductObj;
                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                            var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj);
                            var product0Obj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);
                            if(productColorsObj.colorArray.length > 0){
                                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: productColorsObj.colorArray[0].text });
                                newproductObj = INC_COL.dataStore.methods().getProductByAtt(findObj);
                                if(Object.keys(newproductObj).length > 0){
                                    productObj = newproductObj
                                }
                            }else if(product0Obj.att0Array.length > 0){
                                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: "" });
                                findObj.zeroText = product0Obj.att0Array[0].text
                                newproductObj = INC_COL.dataStore.methods().getProductByAtt(findObj);
                                if(Object.keys(newproductObj).length > 0){
                                    productObj = newproductObj
                                }
                            }
                            
                            
                            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                            if (productObj.discountPrice != ""){
                                INC_COL.clientConfig.discPrc = productObj.discountPrice;
                            }
                            var price=0;
                            var specialprice=0;
                            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                                specialprice = activePrice
                                price = regularPrice
                            } else{
                                price = regularPrice
                            }
                            if (sp != 0 && +specialprice == 0 || sp == 0 && +specialprice == 0) {
                                pr += +price;
                                sp += +price;
                            } else {
                                pr += +price;
                                sp += +specialprice;
                            }

                            var inc_col_lection_product_price_bk = generate_html_tag('div','inc_col_lection_product_price_bk');
                            inc_col_lection_product_info_bk.appendChild(inc_col_lection_product_price_bk)

                            var inc_col_lection_product_active_price = generate_html_tag('div','inc_col_lection_product_active_price');
                            inc_col_lection_product_price_bk.appendChild(inc_col_lection_product_active_price)

                            var inc_col_lection_product_regular_price = generate_html_tag('div','inc_col_lection_product_regular_price');
                            inc_col_lection_product_price_bk.appendChild(inc_col_lection_product_regular_price)

                            inc_col_lection_product_regular_price.innerText = "";
                

                            var inc_col_lection_product_save_price = generate_html_tag('div','inc_col_lection_product_save_price');
                            inc_col_lection_product_price_bk.appendChild(inc_col_lection_product_save_price)
                            inc_col_lection_product_regular_price.innerText = "";
                
                            

                            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                                inc_col_lection_product_active_price.parentNode.classList.add('is_special_price')
                                inc_col_lection_product_active_price.innerText = formatter.format(activePrice)
                                inc_col_lection_product_regular_price.innerHTML = INC_COL.clientConfig.regularPricePrefix + 
                                formatter.format(regularPrice)
                                var discmoney =  get_discount_price(regularPrice,activePrice)
                                var save_p =  get_discount_price_percentage(regularPrice,activePrice)
                                inc_col_lection_product_save_price.innerText = "SAVE "+formatter.format(discmoney)+" ("+(save_p)+"%)"; 
                            }else{
                                inc_col_lection_product_active_price.innerText = formatter.format(activePrice)
                            }
                            var inc_col_lection_product_view_details_bk = generate_html_tag('div','inc_col_lection_product_view_details_bk');
                            if(productObj.ProductType == 'simple'){
                                inc_col_lection_product_view_details_bk.innerText = "View details";
                            }else{
                                inc_col_lection_product_view_details_bk.innerText = "Select options";
                            }
                            inc_col_lection_product_info_bk.appendChild(inc_col_lection_product_view_details_bk)
                            inc_col_lection_product_list_wrapper_bk.addEventListener('click',function(){
                                this.parentNode.parentNode.querySelector('.inc_col_lection_checkout_btn').click()
                            })

                            ////////////////
                            if(bestrating < productObj.ratingsCount){
                                bestrating = productObj.ratingsCount
                            }
                            rcount++
                        }    
                    }
                }

                if(bestrating != 0){
                    INC_COL.methods.get_product_ratings_col(bestrating,inc_col_lection_Rating_bk);
                }

                inc_col_lection_regular_price.innerText = "";
                if (pr != sp && sp != 0) {
                    var activeorc = formatter.format(sp).replace('Kč','').replace(',','.').replace(/\s/g, '');
                    var regpr =  formatter.format(pr).replace('Kč','').replace(',','.').replace(/\s/g, '');
                    inc_col_lection_active_price.parentNode.classList.add('is_special_price');
                    inc_col_lection_active_price.innerText = formatter.format(activeorc);
                    inc_col_lection_regular_price.innerHTML = formatter.format(regpr);

                    var spec_text = generate_html_tag('span','special_text')
                    spec_text.innerText = "Běžná cena"
                    inc_col_lection_active_price.parentNode.insertBefore(spec_text,inc_col_lection_active_price)
                    var totalsaveprcplp =  get_discount_price(pr,sp)
                    var ec_promo_wrapper_div = document.createElement('div');
                    ec_promo_wrapper_div.classList.add('pc_promo_hdr_div_col');
                    ec_promo_wrapper_div.classList.add('inc_dual_promo_col')
                    var ec_promo_hdr_div = document.createElement('div');
                    ec_promo_hdr_div.classList.add('pc_promo_hdr_div_col');
                    var ec_title_span = document.createElement('span');
                    ec_title_span.classList.add('pc_title_span_col');
                    ec_title_span.innerText = "Speciální nabídka";
                    var ec_promo_div = document.createElement('div');
                    ec_promo_div.classList.add('pc_promo_div_col')
                    ec_promo_div.classList.add('inc_active')
                    var ec_promo_span = document.createElement('span');
                    ec_promo_span.classList.add('pc_promo_span_col')
            
                    ec_promo_span.classList.add('red_promo_col')
                    ec_promo_span.innerHTML = "<div class='collection_plp_promo'> <span>Save</span> " + "<div class='save_price_text_disc' style='margin-left: 4px;'>"+formatter.format(totalsaveprcplp)+" za tuto sadu</div></div>";
                    ec_promo_hdr_div.appendChild(ec_title_span);
                    ec_promo_div.appendChild(ec_promo_span);
                    ec_promo_wrapper_div.appendChild(ec_promo_hdr_div);
                    ec_promo_wrapper_div.appendChild(ec_promo_div)
                    inc_col_lection_promo_bk.appendChild(ec_promo_wrapper_div)
                    
                }else{
                    inc_col_lection_regular_price.innerHTML = ""
                    var actprc = formatter.format(pr).replace(',','.').replace(/\s/g, '') 
                    inc_col_lection_active_price.innerText = actprc
                }

                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL
                var ComboTitle=INC_COL.config.collection_combo_details[k].ComboTitle.replace('with Accessory Bundle','kit')

                collection_combo_img_wrapper.setAttribute('href_c',ComboProductURL)
                collection_combo_img_wrapper.setAttribute('comboid',INC_COL.config.collection_combo_details[k].comboId)

                collection_combo_img_wrapper.addEventListener('click',function(){
                    var hrefredirect = this.getAttribute('href_c')
                    INC_COL.methods.sendBundleClickTracking(this.getAttribute('comboid'));
                    window.location.href=hrefredirect
                })

                inc_col_lection_Name_text.innerText  = ComboTitle
                inc_col_lection_Name_text.setAttribute('title',ComboTitle)
                collection_combo_img.setAttribute('src',ComboImageURL)
                inc_col_lection_Name_text.setAttribute('ComboProductURL',ComboProductURL)
                inc_col_lection_Name_text.setAttribute('href',ComboProductURL)
                inc_col_lection_Name_text.setAttribute('comboid',INC_COL.config.collection_combo_details[k].comboId)
                collection_combo_img.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                collection_combo_img.setAttribute('style','width: 100%;height: 100%;object-fit: contain;')
                var inc_col_lection_checkout_btn = generate_html_tag('a','inc_col_lection_checkout_btn');
                var inc_col_lection_checkout_btn_text = generate_html_tag('div','inc_col_lection_checkout_btn_text');
                inc_col_lection_checkout_btn_text.innerText = "Add To Bag"
                inc_col_lection_checkout_btn.appendChild(inc_col_lection_checkout_btn_text);

                ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL
                ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL
                inc_col_lection_checkout_btn.setAttribute('producturl',ComboProductURL)
                    inc_col_lection_checkout_btn.setAttribute('href',ComboProductURL)
                    inc_col_lection_checkout_btn.setAttribute('comboid',INC_COL.config.collection_combo_details[k].comboId)
                    inc_col_lection_details_btn_bk.appendChild(inc_col_lection_checkout_btn);
                inc_col_lection_checkout_btn.addEventListener('click',function(){
                    var hrefredirect = this.getAttribute('producturl')
                    INC_COL.methods.sendBundleClickTracking(this.getAttribute('comboid'));
                    window.location.href=hrefredirect
                })
            }
        }

        var plp_sibling = document.querySelector('.products-grid-wrap')
        var plp_mob=document.querySelector('#CategoryTools')
        var plp_mob1=document.querySelector('.ProductListHeading')
        var plp_spec_cat=document.querySelector('.SpecialOffersBuyList')
        var plp_spl_elm=document.querySelector('#SpecialOfferDetail')
        var plpelmsib = document.querySelector('#MainContentWrapper .ProductListModule')
        if(plp_spl_elm != null){
            inc_col_lection_bk.setAttribute('style','padding: 15px 10px;')
            plp_spl_elm.insertBefore(inc_col_lection_bk, plp_spl_elm.childNodes[0]);
        }else if(plp_spec_cat != null){
            inc_col_lection_bk.setAttribute('style','padding: 15px 10px;')
            plp_spec_cat.parentNode.insertBefore(inc_col_lection_bk, plp_spec_cat);
        }else if(plpelmsib != null){
            inc_col_lection_bk.setAttribute('style','padding: 15px 10px;')
            plpelmsib.insertBefore(inc_col_lection_bk, plpelmsib.childNodes[0]);
        }else if(plp_sibling != null){
            plp_sibling.parentNode.insertBefore(inc_col_lection_bk, plp_sibling);
        }
        // else if(window.innerWidth > 600){
        //     plp_sibling.parentNode.insertBefore(inc_col_lection_bk, plp_sibling);
        // }
        else if(plp_mob != null){
            plp_mob.parentNode.insertBefore(inc_col_lection_bk, plp_mob);
        }else if(plp_mob1 != null){
            plp_mob1.parentNode.insertBefore(inc_col_lection_bk, plp_mob1);
        }
    }
    INC_COL.methods.getMainProductDetails = function (blockEl,pdpBlockcol) {
        var descMainHTML = generate_html_tag('div','inc_col_desc_main_product_details_bk')
        descMainHTML.innerHTML = blockEl
        var mainelQtyInput = descMainHTML.querySelector('.inc_prd_desc_qty_input_text input')
        var mainelQtyDownBlock = descMainHTML.querySelector('.inc_prd_desc_qty_down_bk')
        var mainelQtyUpBlock = descMainHTML.querySelector('.inc_prd_desc_qty_up_bk')
        if(descMainHTML.querySelector('.inc_prd_variant_simple_bk') != null){
            descMainHTML.querySelector('.inc_prd_variant_simple_bk').style.display = "none"
        }
        if(descMainHTML.querySelector('.inc_prd_desc_add_title_txt_bk') != null){
            descMainHTML.querySelector('.inc_prd_desc_add_title_txt_bk').style.display = "none"
        }
        if(descMainHTML.querySelector('.inc_add_text') != null){
            descMainHTML.querySelector('.inc_add_text').style.display = "none"
        }
        var mainellink = descMainHTML.querySelector('.inc_prd_desc_title_txt a')
        mainellink.setAttribute('style','cursor: pointer;')
        mainellink.addEventListener('click',function(){
            var mainpdp = document.querySelector('.inc_product-main_bk .inc_prd_module_bk').getAttribute('data-main_id')
            INC_COL.methods.sendBundleClickTracking(mainpdp);
        })
        var qtymain=1
        mainelQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        mainelQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        if(document.querySelector('.inc_product-main_bk input') != null){
            qtymain=document.querySelector('.inc_product-main_bk input').value
        }
        if(qtymain == "" || qtymain == undefined){
            qtymain = 1
        }
        mainelQtyInput.value = qtymain
        function inputqtyfn(){
            var prod_showcase=document.querySelector('.inc_product-main_bk .inc_prd_showcase_bk');
            var prod_modal=document.querySelector('.inc_product-main_bk .inc_prd_modal_bk');
            var prod_cardmodule=document.querySelector('.inc_product-main_bk .inc_prd_module_bk');
                setTimeout(function () {
                    if (mainelQtyInput.value.length == 0) mainelQtyInput.value = 1;
                    if (mainelQtyInput.value == 0) mainelQtyInput.value = 1;
                    if (mainelQtyInput.value > 100) mainelQtyInput.value = 100;
                    

                    var id = prod_cardmodule.getAttribute('data-id');
                    var qty = parseInt(mainelQtyInput.value);
                    var main_id = prod_cardmodule.getAttribute('data-main_id');
                    var bundle_id = prod_cardmodule.getAttribute('data-bundle_id');
                    var pname=prod_cardmodule.querySelector('.inc_prd_desc_title_txt').textContent;
                    var pprice=prod_cardmodule.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('$','');
                    var combo_id = prod_cardmodule.getAttribute('data-comboid');
                    var elmaineltext = prod_showcase.querySelector('.inc_prd_desc_add_text')
                    prod_modal.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
                    prod_showcase.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
                    if (elmaineltext.textContent == INC_COL.config.AddedText) {
                        INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice,combo_id);
                    }
                }, 50);
            // }
        }
        mainelQtyInput.addEventListener("keydown", function (event) {
            var keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.$.inArray(event.keyCode, incallowedKeys) !== -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            var charValue = String.fromCharCode(keyCode)
            , valid = /^\d+$/.test(charValue);
            if (!valid) {
                event.preventDefault();
            }else{
                inputqtyfn()
            }
            setTimeout(function () {
                if(mainelQtyInput.value == 1){
                    mainelQtyInput.parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
                }else{
                    mainelQtyInput.parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');
                }
            }, 100);
        });
        mainelQtyInput.addEventListener('focusout', function () {
            inputqtyfn()
        });
        setTimeout(function(){
            document.querySelectorAll('.inc_col_desc_main_product_details_bk .inc_prd_desc_pack_of_list_bk .inc_prd_desc_pack_of_item_bk').forEach(function(el,i){
                el.addEventListener('click', function(){
                    mainelQtyInput.value = i + 1;
                    var qty = parseInt(mainelQtyInput.value)
                    
                    var prod_showcase=document.querySelector('.inc_product-main_bk .inc_prd_showcase_bk')
                    var prod_cardmodule=document.querySelector('.inc_product-main_bk .inc_prd_module_bk')
                    var id = prod_cardmodule.getAttribute('data-id');
                    var elmaineltext = prod_showcase.querySelector('.inc_prd_desc_add_text')
                    if (elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.updateText || elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.UpdateText) {
                        INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add");
                    }

                    if(document.querySelector('.inc_col_desc_main_product_details_bk .inc_prd_desc_pack_of_list_bk.active')!=null){
                        document.querySelector('.inc_col_desc_main_product_details_bk .inc_prd_desc_pack_of_list_bk').classList.remove('active');
                    }
                    
                })
            })
        })

        mainelQtyDownBlock.addEventListener('click', function () {
            var prod_showcased=document.querySelector('.inc_product-main_bk .inc_prd_showcase_bk')
            var prod_modald=document.querySelector('.inc_product-main_bk .inc_prd_modal_bk')
            var prod_cardmoduled=document.querySelector('.inc_product-main_bk .inc_prd_module_bk')
            if(prod_cardmoduled.querySelector('.inc_prd_modal_bk .inc_col_hdr_bk') != null){
                prod_cardmoduled.parentNode.querySelector('.inc_prd_modal_bk .inc_col_hdr_bk').click()
            }
            var elmaineltext = prod_showcased.querySelector('.inc_prd_desc_add_text')
            mainelQtyInput.value = (mainelQtyInput.value - 1 < 1) ? 1 : mainelQtyInput.value - 1;
            if (mainelQtyInput.value == 1){
                mainelQtyInput.parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            }
            prod_modald.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
            prod_showcased.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
            var id = prod_cardmoduled.getAttribute('data-id');
            var qty = parseInt(mainelQtyInput.value);
            var main_id = prod_cardmoduled.getAttribute('data-main_id');
            var bundle_id = prod_cardmoduled.getAttribute('data-bundle_id');
            var pname=prod_cardmoduled.querySelector('.inc_prd_desc_title_txt').textContent;
            var pprice=prod_cardmoduled.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('$','');
            var combo_id = prod_cardmoduled.getAttribute('data-comboid');
            if (elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.updateText || elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.UpdateText) {
                INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice,combo_id);
            }
        });

        mainelQtyUpBlock.addEventListener('click', function () {
            var prod_showcasesh=document.querySelector('.inc_product-main_bk .inc_prd_showcase_bk')
            var prod_modalsh=document.querySelector('.inc_product-main_bk .inc_prd_modal_bk')
            var prod_cardmodulesh=document.querySelector('.inc_product-main_bk .inc_prd_module_bk')
            if(prod_cardmodulesh.querySelector('.inc_prd_modal_bk .inc_col_hdr_bk') != null){
                prod_cardmodulesh.querySelector('.inc_prd_modal_bk .inc_col_hdr_bk').click()
            }
            mainelQtyInput.value = (parseInt(mainelQtyInput.value) + 1 > 100) ? 100 : parseInt(mainelQtyInput.value) + 1;

            if (mainelQtyInput.parentNode.parentNode.parentNode.parentNode.classList.contains('singleqty')){
                mainelQtyInput.parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');
            }
            prod_modalsh.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
            prod_showcasesh.querySelector('.inc_prd_desc_qty_input_bk input').value=mainelQtyInput.value
            var id = prod_cardmodulesh.getAttribute('data-id');
            var qty = parseInt(mainelQtyInput.value);
            var main_id = prod_cardmodulesh.getAttribute('data-main_id');
            var bundle_id = prod_cardmodulesh.getAttribute('data-bundle_id');
            var pname=prod_cardmodulesh.querySelector('.inc_prd_desc_title_txt').textContent;
            var pprice=prod_cardmodulesh.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('$','');
            var combo_id = prod_cardmodulesh.getAttribute('data-comboid');
            var elmaineltext = prod_showcasesh.querySelector('.inc_prd_desc_add_text')
            if (elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.updateText || elmaineltext.textContent == INC_COL.config.AddedText || elmaineltext.textContent == INC_COL.config.UpdateText) {
                INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice,combo_id);
            }
        });
        var ProdConfig;
        var elmainprod;
        var inserMainDetails;
        if(pdpBlockcol != null && pdpBlockcol != undefined){
            if(pdpBlockcol.querySelector('.inc_col_desc_main_product_details_bk') == null){
                inserMainDetails = pdpBlockcol.querySelector('.inc_bd_prd_list_bk')
                var inserMainDetailsConfigurable = pdpBlockcol.querySelector('.inc_bd_prd_list_bk')
                ProdConfig = pdpBlockcol.querySelector('.inc_product-main_bk .inc_prd_module_bk').classList.contains("configurable")
                if(ProdConfig == trueflag){
                    inserMainDetailsConfigurable.parentNode.insertBefore(descMainHTML,inserMainDetailsConfigurable)
                }else{
                    inserMainDetails.parentNode.insertBefore(descMainHTML,inserMainDetails)
                }
            }else{
                elmainprod = pdpBlockcol.querySelector('.inc_col_desc_main_product_details_bk')
                elmainprod.parentNode.removeChild(elmainprod)
                inserMainDetails = pdpBlockcol.querySelector('.inc_bd_prd_list_bk')
                var inserMainDetailsConfigurables = pdpBlockcol.querySelector('.inc_bd_prd_list_bk')
                ProdConfig = pdpBlockcol.querySelector('.inc_product-main_bk .inc_prd_module_bk').classList.contains("configurable")
                if(ProdConfig == trueflag){
                    inserMainDetailsConfigurables.parentNode.insertBefore(descMainHTML,inserMainDetailsConfigurables)
                }else{
                    inserMainDetails.parentNode.insertBefore(descMainHTML,inserMainDetails)
                }
                
            }
        }else {
            if(document.querySelector('.inc_col_desc_main_product_details_bk') == null){
                inserMainDetails = document.querySelector('.inc_bd_prd_list_bk')
                inserMainDetails.parentNode.insertBefore(descMainHTML,inserMainDetails)
            }else{
                elmainprod = document.querySelector('.inc_col_desc_main_product_details_bk')
                elmainprod.parentNode.removeChild(elmainprod)
                ProdConfig = document.querySelector('.inc_product-main_bk .inc_prd_module_bk').classList.contains("configurable")
                var inserMainDetailsConfigurabled = document.querySelector('.inc_bd_prd_list_bk')
                if(ProdConfig == trueflag){
                    inserMainDetailsConfigurabled.parentNode.insertBefore(descMainHTML,inserMainDetailsConfigurabled)
                    if (inserMainDetailsConfigurabled.parentNode.querySelectorAll('.inc_bd_prd_bk .inc_col_size_qty_details_bk select option')[1] != null){
                        if (inserMainDetailsConfigurabled.parentNode.querySelectorAll('.inc_bd_prd_bk .inc_col_size_qty_details_bk select option')[1].selected != null){
                            inserMainDetailsConfigurabled.parentNode.querySelectorAll('.inc_bd_prd_bk .inc_col_size_qty_details_bk select option')[1].selected = 'selected';
                        }
                    }
                }else{
                    inserMainDetails.parentNode.insertBefore(descMainHTML,inserMainDetails)
                }
            }
        }
        if(descMainHTML.querySelector('.inc_prd_desc_att_zero_bk.inc_active') != null){
            let elzerolist = descMainHTML.querySelectorAll('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img_bk')
            for(let z=0;z<elzerolist.length;z++){
                elzerolist[z].addEventListener('click',function(){
                    var elvariant = this;
                    var elblktype=this.getAttribute('blocktype')
                    var elvtype=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariant,elblktype,elvtype)
                })
            }
        }
        if(descMainHTML.querySelector('.inc_prd_desc_att_size_bk.inc_active') != null){
            let elsizelist = descMainHTML.querySelectorAll('.inc_prd_desc_att_size_bk .inc_prd_desc_att_size_list_item_img_bk')
            for(let s=0;s<elsizelist.length;s++){
                elsizelist[s].addEventListener('click',function(){
                    var elvariant_s = this;
                    var elblktype_s=this.getAttribute('blocktype')
                    var elvtype_s=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariant_s,elblktype_s,elvtype_s)
                })
            }
        }
        if(descMainHTML.querySelector('.inc_prd_desc_att_color_bk.inc_active') != null){
            let elcolorlist = descMainHTML.querySelectorAll('.inc_prd_desc_att_color_bk .inc_prd_desc_att_color_list_item_img_bk')
            for(let c=0;c<elcolorlist.length;c++){
                elcolorlist[c].addEventListener('click',function(){
                    var elvariant_c = this;
                    var elblktype_c=this.getAttribute('blocktype')
                    var elvtype_c=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariant_c,elblktype_c,elvtype_c)
                })
            }
        }
        if(descMainHTML.querySelector('.inc_prd_desc_att_third_bk.inc_active') != null){
            let elthirdlist = descMainHTML.querySelectorAll('.inc_prd_desc_att_third_bk .inc_prd_desc_att_third_list_item_img_bk')
            for(let t=0;t<elthirdlist.length;t++){
                elthirdlist[t].addEventListener('click',function(){
                    var elvariant_t = this;
                    var elblktype_t=this.getAttribute('blocktype')
                    var elvtype_t=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariant_t,elblktype_t,elvtype_t)
                })
            }
        }
        //inc_prd_desc_att_zero_bk inc_active inc_total_1
        //inc_prd_desc_att_size_bk inc_active
        //inc_prd_desc_att_color_bk inc_active
        //inc_prd_desc_att_third_bk
        //inc_prd_desc_att_fourth_bk
    }
    INC_COL.methods.createcolPDPBundleCartBlock = function (pdpBlock) {
        var pdpBundleCartBlock = pdpBlock.querySelector('.inc_bd_cart_bk')
        var elBundleCartTitleText = pdpBlock.querySelector('.inc_bd_cart_title_txt')
        var elBundleCartAddedBlock = pdpBlock.querySelector('.inc_bd_cart_added_bk')
        var elBundleCartSummaryViewBtnText = pdpBlock.querySelector('.inc_bd_cart_smry_view_btn_text');
        var elBundleCartAddBtnBlock = pdpBlock.querySelector('.inc_bd_cart_smry_add_btn_bk');
        elBundleCartTitleText.innerText = "Price Summary";
        elBundleCartAddedBlock.innerHTML = "";
        elBundleCartSummaryViewBtnText.innerText = "Added items";
        if(elBundleCartAddBtnBlock != null){
            elBundleCartAddBtnBlock.addEventListener("click", function (e) {
                INC_COL.methods.checkAddedProductInJustAddedcol();
                this.classList.add('inc_loading');
                INC_COL.clientConfig.offset = 0;
                INC_COL.clientConfig.slidevalue = 0;
                
                if (INC_COL.config.disablebtn == trueflag) {
                    var btn_cart = e.target
                    INC_COL.config.disablebtn = false
                    btn_cart.classList.add('inc_loading')
                    btn_cart.parentNode.parentNode.classList.add('inc_loading')
                    INC_COL.methods.addBundleToCartcol(btn_cart);
                }
            });
        }
        return pdpBundleCartBlock;
    }
    INC_COL.methods.createSidebarBlock = function () {
        var dataStore = INC_COL.dataStore;
        var sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.innerHTML = sidebar_html
        var sbBlock = sidebar_dialoge_block.querySelector('.inc_sidebar_modal_block');
        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
        var elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
        var elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        var elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        var elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
        var elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block")
        var elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
        var elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
        var elCheckoutBasketBtnText = sbBlock.querySelector(".inc_checkout_basket_btn_text");
        var elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        var elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        elheaditemblock.addEventListener('click', function () {
            var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
            if (cnt >= 1) {
                if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == trueflag) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                    var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                    var morecount = 2
                    if (window.innerWidth < 821) {
                        morecount = 1
                    }
                    if (alladdedprodlength > morecount) {
                        var tcount = alladdedprodlength - morecount + " more item(s)"
                        document.querySelector('.inc_header_item_count_title_text').innerText = "+" + tcount
                        document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
                    } else {
                        document.querySelector('.inc_header_item_count_title_text').innerText = ""
                    }
                } else {
                    document.querySelector('.inc_header_item_count_title_text').innerText = ""
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_active')
                }
            }
        })
        var close_sisebar_icon = generate_html_tag('span', 'close_sisebar_icon')
        elheadtitleblock.appendChild(close_sisebar_icon)
        elRecommendedProductsListBlock.setAttribute('role', "contentinfo")
        elRecommendedProductsListBlock.setAttribute('tabindex', 0)
        elHeaderContinueText.innerText = "Back";
        elHeaderTitleText.innerText = "Just Added To Your Bag";
        elHeaderTitleText.style.textTransform = "none"
        if(dataStore.bundleCartProducts != undefined){
            elHeaderItemCountTitleText.innerText = "Subtotal" + " " + "(" + Object.keys(dataStore.bundleCartProducts).length + " items)";
            elRecommendedTitleText.innerText = INC_COL.config.BeforeYouChecktext 
            elRecommendedTitleText.style.textTransform = "none"
            elCheckoutContinueBtnText.innerText = "Continue Shopping";
            var elCheckoutLink = elCheckoutBasketBtnText.querySelector('.view_basket_checkout')
            elCheckoutLink.setAttribute('href', INC_COL.clientConfig.checkoutLink);
            var productCategoriesArray = dataStore.methods().getUniqueCatergories();
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            var category_count = 0
            elRecommendedTabsListBlock.classList.add('inc_categ_' + Object.keys(productCategoriesArray).length)
            productCategoriesArray.forEach(function (productCategory) {
                if (category_count < 5 && productCategory != undefined) {
                    category_count++
                    var sidebarTabsListItemBlock = generate_html_tag('div','inc_recommended_tabs_list_item_block')
                    var tablistitm = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>'
                    sidebarTabsListItemBlock.innerHTML = tablistitm
                    var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector('.inc_recommended_tabs_list_item_text');
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
                    sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                    sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
                    sidebarTabsListItemBlock.addEventListener("click", function () {
                        var elRecommendedProductsListBlocks = sbBlock.querySelector(".inc_recommended_products_list_block")
                        if(elRecommendedProductsListBlocks != null){
                            elRecommendedProductsListBlocks.innerHTML = "";
                        }
                        Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll('.inc_recommended_tabs_list_item_block'), function (elTabsItemBlock) {
                            elTabsItemBlock.classList.remove("inc_active");
                        });
                        sidebarTabsListItemBlock.classList.add("inc_active");
                        INC_COL.methods.updateSidebarProductsList(elRecommendedProductsListBlocks, productCategory);
                    });
                    elRecommendedTabsListBlock.setAttribute('tabindex', 0)
                    elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                }
            });
            if (elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block').click();
            } else {
                elRecommendedTitleText.style.display = "none";
            }
            sbBlock.querySelector(".inc_header_continue_block").addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_continue_block").addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_basket_block").addEventListener("click", function () {
                this.querySelector('.inc_checkout_basket_btn_block').classList.add('inc_loading')
                window.location.href = INC_COL.clientConfig.checkoutLink;
            });
            if (document.querySelector('.sidebar_outer') != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
                    el.parentNode.removeChild(el);
                });
    
                Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el1) {
                    el1.parentNode.removeChild(el1);
                });
            }
            var body = document.querySelector('body');
            if(body != null){
                body.appendChild(sidebar_dialoge_block);
            }
            var elSideBarOverlayBlock = document.createElement('div');
            elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
            elSideBarOverlayBlock.addEventListener("click", function () {
                closesidebar()
            });
            close_sisebar_icon.addEventListener("click", function () {
                closesidebar()
            });
            elSideBarOverlayBlock.style.display = "none";
            body.appendChild(elSideBarOverlayBlock);
            if (INC_COL.dataStore.dataStoreObj.undefined != undefined) {
                if (document.querySelector('.inc_recommended_products_block') != null) {
                    document.querySelector('.inc_recommended_products_block').style.display = "none"
                }
                if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                    var p_img = document.querySelector('.s7staticimage img').src
                    document.querySelector('.inc_cart_added_product_img').src = p_img
                }
            }
        }
        setTimeout(function () {
            if (document.querySelector('.inc_recommended_products_list_block') != null) {
                document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
            }
            var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
            for (var prodimg of inc_prod_img) {
                if(prodimg){
                    prodimg.setAttribute('style','left:0 !important;position: relative;')
                }
            }
        }, 100)
    }
    function closesidebar(){
        document.querySelector('html').classList.remove('inc_overlay');
        INC_COL.methods.hideSidebar();
        INC_COL.config.pdpaddedProductList = []
        INC_COL.clientConfig.offset = 0;
        INC_COL.clientConfig.slidevalue = 0;
    }
    INC_COL.methods.updateSidebarColBlock = function (COL_dataStore) {
        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var dataStore = COL_dataStore;
        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        if (sbBlock != null) {
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            var sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
            sidebarHeaderseelesstext.innerText = ""
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal (" + Object.keys(dataStore.bundleCartProducts).length + " item)";
            var headerItemCountFigureText = 0;
            subtotalactiveprice = 0
            subtotalregukarprice = 0
            var error_message = ""
            var oosname=[]
            var oosids=[]
            var remerrorjust=document.querySelectorAll('.inc_justerror')
            for (var r of remerrorjust) {
                if(r != null){
                    r.parentNode.removeChild(r)
                }
            }
            
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) dataStore.bundleCartProducts[productSKU] = 1
                var findObj = new INC_COL.classes.FindObj({ sku: productSKU });
                var productObj = INC_COL.dataStore.methods().getProductBySKU(findObj, "collection",dataStore);
                if (INC_COL.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                    if(oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.mainId) == -1){
                        error_message = ""
                        oosids.push(productObj.mainId)
                        oosname.push(productObj.name)
                        if(error_message == ""){
                            error_message = "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        }else{
                            error_message = error_message + " <br> " + "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        }
                        var headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                        var errormes = generate_html_tag('div','inc_justerror')
                        var errorimg = generate_html_tag('img','errorimg')
                        errorimg.src = productObj.imageURL
                        errormes.appendChild(errorimg)
                        var errormestext = generate_html_tag('span','inc_justerror_text')
                        errormestext.innerHTML = error_message
                        errormes.appendChild(errormestext)
                        headertitle.parentNode.insertBefore(errormes,headertitle)
                        setTimeout(function(){
                            var remoerroblk=document.querySelectorAll('.inc_justerror')
                            for (var re of remoerroblk) {
                                if(re != null){
                                    re.parentNode.removeChild(re)
                                }
                            }
                        },5000)
                    }
                }else{
                    headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
                    var color = "";
                    var size = "";
                    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                    if (just_check_prod_block != null) {
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
                        }
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        }
                    }
                    var sel_size = ""
                    if (color != "" && color != undefined && color != null) {
                        sel_size = "Color" + color;
                    } else if (size != "" && size != undefined && size != null) {
                        sel_size = "Size" + size;
                    }
                    var activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                    subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));

                    var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'" alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+dataStore.bundleCartProducts[productSKU]+'</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+dataStore.bundleCartProducts[productSKU] + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'
                    var productBlock = generate_html_tag('div','inc_cart_added_product_block');
                    productBlock.innerHTML = addedhtml
                    productBlock.setAttribute('data-id', productObj.id);
                    productBlock.setAttribute('data-sku', productObj.sku);
                    productBlock.setAttribute('data-main_id', productObj.mainId);
                    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                    productBlock.setAttribute('data-childsku', productObj.childsku);
                    productBlock.setAttribute('data-mainsku', productObj.mainsku);
                    productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                    sbCartBlock.appendChild(productBlock);
                }
            });
            if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice)
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                elHeadersubtotalactivetext.style.color = "#ee1c31"
            } else {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalactivetext.style.color = "#000"
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice)
                elHeadersubtotalregulartext.innerHTML = ""
            }
            if (headerItemCountFigureText == 1) {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " item)";
            } else {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " items)";
            }
            if (window.innerWidth > 767) {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            } else {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            }
        }
    }
    INC_COL.methods.showSidebar = function () {
        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            if (document.querySelector('.inc_sidebar_modal_block .inc_prd_modal_bk') != null) {
                if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;
                if (document.querySelector('.sidebar_outer') != null) {
                    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if(elSidebarOverlay != null){
                        elSidebarOverlay.style.display = "block";
                    }
                    document.querySelector('.sidebar_outer').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').classList.add('inc_active')
                    document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
                    if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                    }
                }
            }
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
        }
    }
    INC_COL.methods.hideSidebar = function() {
        INC_COL.config.sidebarremovedprod = [];
        document.querySelector("html").style = "";
        document.querySelector("html").classList.remove("inc_overlay");
        document.querySelector("html").classList.remove("inc_popup_open");
        document.querySelector("body").classList.remove("inc_popup_open");
        if (document.querySelector(".sidebar_outer") != null) {
            document.querySelector(".inc_sidebar_modal_block").style.display = "none";
            document.querySelector(".sidebar_outer").style.display = "none";
            document.querySelector(".sidebar_outer").classList.remove("sidebar_outer_active");
            document.querySelector(".inc_sidebar_modal_block").classList.remove("inc_active");
            var element =  document.querySelector('.inc_sidebar_modal_block .inc_header_title_block') 
            if(element != null){
                element.scrollIntoView({ behavior: 'smooth'})
            }
        }
        if(INC_COL.config.pageType == "pdp"){
            if(document.querySelector('.inc_pdp_block') != null){
                INC_COL.methods.clear()
                INC_COL.dataStore["bundleCartProducts"] = {};
                INC_COL.config.pdpaddedProductList = [];
                INC_COL.config.bundle_tracking = [];
                INC_COL.config.bundle_skuPushed = [];
                INC_COL.config.dupBasket = [];
                INC_COL.config.pdpaddedProductList= [];
                INC_COL.config.sidebarremovedprod= [];
                onloadpdp = false
                setTimeout(function() {
                    INC_COL.methods.createSidebarBlock()
                }, 200)
            }
        }else{
            INC_COL.methods.clear()
        }
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
            elm.parentNode.removeChild(elm);
        });
        setTimeout(function() {
            if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) {
                document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.remove("is_special_ecirp");
            }
        }, 30);
    };
    INC_COL.methods.checkAddedProductInJustAddedcol = function () {
        var addCheckCategory = INC_COL.config.pdpaddedProductList;
        var productListArrayprod = INC_COL.config.sidebararray;
        var categoryList = INC_COL.dataStore.methods().getUniqueCatergories();
        for (var catlist of categoryList) {
            var count = 0;
            for (var prdlistarray of productListArrayprod) {
                var firstProductObjByMainId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: prdlistarray });
                if (firstProductObjByMainId["categoryName"] == catlist) {
                    if (addCheckCategory.indexOf(prdlistarray) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                if (document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]') != null) {
                    var categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]')
                    if (categrem != null) {
                        categrem.parentNode.removeChild(categrem)
                    }
                }
            }
        }
        INC_COL.clientConfig.offset = 0;
        INC_COL.clientConfig.slidevalue = 0;
        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
            INC_COL.clientConfig.cateClick = true;
            document.querySelector('.inc_recommended_tabs_list_item_block').click()
            INC_COL.clientConfig.cateClick = false;
            if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                var remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                if (remcateg != null) {
                    remcateg.parentNode.removeChild(remcateg)
                }
            }
        }
    }
    INC_COL.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {
        var productListArray = INC_COL.config.sidebararray;
        var dupl_sidebar_prod = []
        var addCheck = INC_COL.config.pdpaddedProductList;
        for (var pdlistarray of productListArray) {
            var firstProductObjByMainId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: pdlistarray });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC_COL.dataStore.dataStoreObj.undefined == undefined) {
                    if (addCheck.indexOf(pdlistarray) == -1) {
                        if (INC_COL.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id)
                                var prdblck = INC_COL.methods.createcolProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);
                                prdblck.querySelector('.inc_prd_desc_add_bk').addEventListener("click", function () {
                                    var productModuleBlock = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                    if (productModuleBlock.classList.contains('inc_product_module_block') == falseflag) {
                                        productModuleBlock = this.parentNode.parentNode.parentNode.parentNode.parentNode
                                    }
                                    var flag_check = INC_COL.methods.checkVariantSelection(productModuleBlock)
                                    var sku = productModuleBlock.getAttribute('data-sku');
                                    var findObj = new INC_COL.classes.FindObj({ id: sku });
                                    var qty = productModuleBlock.querySelector('input').value;
                                    var add_prod_im = productModuleBlock.querySelector('.inc_product_desc_add_img')
                                    if (flag_check == 1) {
                                        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trueflag || this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trueflag) {
                                            if (INC_COL.config.disablebtn == trueflag) {
                                                INC_COL.config.disablebtn = false;
                                                var newbtntext = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                                                var btnclick = productModuleBlock.querySelector('.inc_product_add_text')
                                                newbtntext.innerText = "Adding..."
                                                btnclick.innerText = "Adding...";
                                                var selbtn=productModuleBlock.querySelector('.inc_product_variant_simple_text')
                                                selbtn.innerText = "Adding...";
                                                INC_COL.methods.addProductToCart(findObj, qty, productModuleBlock, btnclick, add_prod_im, selbtn,newbtntext);
                                            }
                                        }
                                    }
                                });
                                elRecommendedProductsListBlock.appendChild(prdblck);
                            }
                        }
                    }
                }
            }
        }
        INC_COL.clientConfig.offset = 0;
        INC_COL.clientConfig.slidevalue = 0;
        elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')
        if((document.querySelector('.inc_recommended_tabs_list_item_block') == null && elRecommendedProductsListBlock.querySelector('.inc_product_module_block') == null)){
            elRecommendedProductsListBlock.parentNode.parentNode.parentNode.parentNode.style.display = "none"
        }
        if ((elRecommendedProductsListBlock.childNodes.length <= 2)) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
        }

        if (elRecommendedProductsListBlock.childNodes.length > 2) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
        var sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute('title', 'Scroll left')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute('title', 'Scroll right')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').addEventListener("click", function () {
            var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
            if (INC_COL.clientConfig.slidevalue + 1 < productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                INC_COL.clientConfig.slidevalue++
                var slide_w = 274
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) - slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            var cc_ount = 1;
            if (window.innerWidth > 820) {
                cc_ount = 2
            }
            if (+INC_COL.clientConfig.slidevalue + +cc_ount == productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - cc_ount) {
                sliderBtnCounter--;
            }
        });

        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').addEventListener("click", function () {
            if (INC_COL.clientConfig.slidevalue == -1) INC_COL.clientConfig.slidevalue = 0;
            if (INC_COL.clientConfig.slidevalue > 0) {
                var slide_w = 274
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:1");
                INC_COL.clientConfig.slidevalue--
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) + slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            if (INC_COL.clientConfig.slidevalue == 0) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
        });
        setTimeout(function(){
            var all_list_el = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_showcase_block')
            for (let listel of all_list_el) {
                if(listel.querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                    var prd_moduleb = listel.parentNode
                    var main_idsd = prd_moduleb.getAttribute('data-main_id')
                    if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                        if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                            prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                        }else if(listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                            listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    } else if(listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                        listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                    }
                }
            }
            var allimgSid = document.querySelectorAll('.inc_sidebar_modal_block img[data-src]')
            for (var imglist of allimgSid) {
                imglist.src = imglist.getAttribute('data-src')
            }
            setTimeout(function(){
                var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                for (var prodimg of inc_prod_img) {
                    if(prodimg){
                        prodimg.setAttribute('style','left:0 !important;position: relative;')
                    }
                }
            },2000)
        },10)
    }
    INC_COL.methods.addProductToSidebarCart = function (findObj, qty, _productBlockel, client_add_btn, btn_addtocart) {
        if (qty == 0) {
            qty = 1;
        }
        var dataStore = INC_COL.dataStore;
        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text') != null) {
            subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text').getAttribute('subtotalactiveprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text') != null) {
            subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text').getAttribute('subtotalregularprice')
        }
        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (document.querySelector('.inc_sidebar_cart_added_block.inc_active') != null) {
            if (document.querySelector('.inc_header_item_count_title_block') != null) {
                document.querySelector('.inc_header_item_count_title_block').click()
            }
        }
        if(sbBlock != null){
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = ""
            }
            var productObj = dataStore.methods().getProductById(findObj);
            var productBlock =  generate_html_tag('div','inc_cart_added_product_block');

            if (INC_COL.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                productBlock.classList.add('cross')
                for (var e = 0; e < INC_COL.clientConfig.OOS.length; e++) {
                    if (INC_COL.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust=document.querySelector('.inc_justerror')
                        if(remerrorjust != null){
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if(document.querySelector('.inc_justerror') == null){
                            var headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            var errormes = generate_html_tag('div','inc_justerror')
                            var errormestext = generate_html_tag('span','inc_justerror_text')
                                errormestext.innerHTML = "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes,headertitle)
                            setTimeout(function(){
                                var remelm=document.querySelector('.inc_justerror')
                                if(remelm != null){
                                    remelm.parentNode.removeChild(remelm)
                                }
                            },500)
                        }
                    }
                }
            }else{
                var color = "";
                var size = "";
                if (btn_addtocart != undefined) {
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == trueflag) {
                        var module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                            var sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            var zero_text = sel_attr.getAttribute('data-zero');
                            var size_text = sel_attr.getAttribute('data-size');
                            var color_text = sel_attr.getAttribute('data-color');
                            var third_text = sel_attr.getAttribute('data-third');
                            if (color_text != undefined) {
                                color = color_text
                            }
                            if (zero_text != undefined) {
                                if (size == "") {
                                    size = zero_text
                                } else {
                                    size = size + "|" + zero_text
                                }
                            }
                            if (size_text != undefined) {
                                size = size + "|" + size_text
                            }
                            if (third_text != undefined) {
                                size = size + "|" + third_text
                            }
                        }
                    }
                }
                var sel_size = "";
                if (color != "" && color != undefined && color != null) {
                    sel_size = "Color" + color;
                } else if (size != "" && size != undefined && size != null) {
                    sel_size = "Size : " + size;
                }
                var pdpprice = 0
                if (client_add_btn == "client_add_btn" && INC_COL.config.pageType == "pdp" && document.querySelector('.js-product-original-price') != null) {
                    pdpprice =  document.querySelector('.sd-product-spp__product-full .js-product-original-price').innerText.replace('£','').replace(',','').trim()
                }
                var activepriceClnt = 0
                if(document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price') != null){
                    activepriceClnt = document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price').innerText.replace('£','')
                }
                var activePrice = 0;
                var regularPrice = 0;
                if(client_add_btn == "client_add_btn"){
                    if(activepriceClnt != 0 && pdpprice != 0){
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    }else if(pdpprice != 0){
                        activePrice = parseFloat(pdpprice).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    }else if(pdpprice == 0 && activepriceClnt != 0){
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(activepriceClnt).toFixed(2).toString();
                    }
                    
                }else{
                    activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                    regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                }
                
                var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"  alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+qty+'</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+qty + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                productBlock.innerHTML = addedhtml
                productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                var subtotalactiveprice = 0;
                var subtotalregukarprice = 0;
                if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
                } else {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
                }
                var old_qty = 0
                if (document.querySelector('.inc_header_item_count_title_text') != null) old_qty = document.querySelector('.inc_header_item_count_title_text').textContent.split('(')[1].split('ite')[0].trim();
                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector('.inc_cart_added_product_block'));
                }
                if (qty < 1) qty = 1
                if (elHeaderItemCountFigureText != null) elHeaderItemCountFigureText.style.display = "none";
                if (client_add_btn == "client_add_btn") {
                    if (qty == 1) {
                        sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty)) + " item)";
                    } else {
                        sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty)) + " items)";
                    }
                } else {
                    sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty) + parseInt(old_qty)) + " items)";
                }
                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
                if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                    elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice);
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                    elHeadersubtotalactivetext.style.color = "#ee1c31"
                } else {
                    elHeadersubtotalactivetext.style.color = "#000"
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice);
                    elHeadersubtotalregulartext.innerHTML = ""
                }
                if (window.innerWidth > 767) {
                    if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                    }
                } else {
                    if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                    }
                }
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 7) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('more_than_seven')
                }
            }
        }
    }
    
    INC_COL.methods.sendBundleClickTracking = function (productId) {
        var pageType = "";
        var core_productID = INC_COL.methods.getProductIdFromWebPage();
        switch (INC_COL.config.pageType) {
            case "pdpcollection": pageType = "107"; break;
            case "productList": pageType = "101"; break;
            case "cartPage": pageType = "103"; break;
            case "ticket": pageType = "103"; break;
            case "other": pageType = "101";
        }
        if (document.querySelector('.inc_col_sidebar_modal_bk.inc_active') == null && INC_COL.config.pageType == "pdpcollection") {
            pageType = "100";
        }
        if(document.querySelector('.header-gnav-cart__overlay.visible') == null && INC_COL.config.pageType == "pdpcollection"){
            pageType = "100"
        }
        if(document.querySelector('.header-gnav-cart__overlay.visible') != null && INC_COL.config.pageType == "pdpcollection"){
            pageType = "107"
        }
        INC_COL.methods.trackingEventscol("bundleProductClickTracking", { "product_id": productId, "core_product_id": core_productID }, pageType);
    }
    INC_COL.methods.createcolProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, parentblock,mainprod) {
        if (INC_COL.dataStore.dataStoreObj.undefined == undefined) {
            var productModuleBlock = generate_html_tag('div','inc_prd_module_bk')
            var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
            var productObj = INC_COL.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock,productObj)

            var elProductShowcaseBlock = generate_html_tag('div','inc_prd_showcase_bk');
            elProductShowcaseBlock.innerHTML = showcase_productcard
            var elProductModalBlock = generate_html_tag('div','inc_prd_modal_bk');
            elProductModalBlock.innerHTML = modal_productcard
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute('role', "contentinfo")
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute('role', "contentinfo")
            }
            var productShowcaseBlock = INC_COL.methods.createcolProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, parentblock,elProductShowcaseBlock,mainprod);
            var productModalBlock = INC_COL.methods.createcolProductModalBlock(pdpProductId, blockType, bundleProductListCheck, parentblock,elProductModalBlock,mainprod);

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            productModuleBlock.appendChild(elProductShowcaseBlock)
            productModuleBlock.appendChild(elProductModalBlock)
            return productModuleBlock;
        }
    }
    function setidstoelm(productBlock,productObj){
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data-comboId', productObj.comboId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.classList.add(productObj.ProductType)
    }
    function prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock){
        var otimg = 0
        if (productObj.otherImageList.length > 1){
            productObj.otherImageList.forEach(function (otherImgURLs) {
                var otherImgURL = otherImgURLs;
                var elImgGalleryListItemBlk = generate_html_tag('div','inc_prd_img_gallery_list_item_bk')
                var imglistN = '<div class="inc_prd_img_gallery_list_item_img_bk"><div class="inc_prd_img_gallery_list_item_img"><img class="inc_lazy" data-src="'+otherImgURL+'" src="'+otherImgURL+'" role="img" aria-label="Image"  alt="'+productObj.name+'"></div></div><div class="inc_prd_img_gallery_list_item_text_bk"><div class="inc_prd_img_gallery_list_item_text"></div></div>'
                elImgGalleryListItemBlk.innerHTML = imglistN

                var elImgGalleryListItemImg = elImgGalleryListItemBlk.querySelector('.inc_prd_img_gallery_list_item_img');

                var elOtherImgTags = elImgGalleryListItemBlk.querySelector('.inc_prd_img_gallery_list_item_img img')
                elOtherImgTags.src = otherImgURL
                elOtherImgTags.setAttribute('alt', productObj.name)
                elOtherImgTags.setAttribute('role', 'img')
                elOtherImgTags.setAttribute('aria-label', 'Image')
                elOtherImgTags.setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
                

                if (productObj.otherImageList.length > 4) {
                    elImgGalleryListItemImg.classList.add('OthImg4');
                }

                elImgGalleryListItemBlk.setAttribute('index', otimg)
                elImgGalleryListItemBlk.addEventListener("click", function () {
                    Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_prd_img_gallery_list_item_bk'), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("inc_active");
                    });

                    elImgGalleryListItemBlk.classList.add("inc_active");
                    var elImgMainImg = productBlock.querySelector('.inc_prd_img_main_img')
                    elImgMainImg.querySelector('img').src = otherImgURL;
                    elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
                })
                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlk);
                
                if (otimg == 0) {
                    elImgGalleryListItemBlk.classList.add('inc_active')
                }
                otimg++;
                if (productObj.otherImageList.length > 5) {
                    elImgGalleryListItemBlk.parentNode.classList.add("flex-start")
                }
            });
        } else {
            var elImgGalleryListItemBlock = generate_html_tag('div','inc_prd_img_gallery_list_item_bk')
                var imglist = '<div class="inc_prd_img_gallery_list_item_img_bk"><div class="inc_prd_img_gallery_list_item_img"><img class="inc_lazy" data-src="'+productObj.otherImageList+'" src="'+productObj.otherImageList+'" role="img" aria-label="Image"  alt="'+productObj.name+'"></div></div><div class="inc_prd_img_gallery_list_item_text_bk"><div class="inc_prd_img_gallery_list_item_text"></div></div>'
                elImgGalleryListItemBlock.innerHTML = imglist

                var elOtherImgTag = elImgGalleryListItemBlock.querySelector('.inc_prd_img_gallery_list_item_img img')
                elOtherImgTag.src = productObj.otherImageList
                elOtherImgTag.setAttribute('alt', productObj.name)
                elOtherImgTag.setAttribute('role', 'img')
                elOtherImgTag.setAttribute('aria-label', 'Image')
                elOtherImgTag.setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
                

                elImgGalleryListItemBlock.setAttribute('index', 0)
                elImgGalleryListItemBlock.addEventListener("click", function () {
                    Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_prd_img_gallery_list_item_bk'), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("inc_active");
                    });

                    elImgGalleryListItemBlock.classList.add("inc_active");
                    var elImgMainImg = productBlock.querySelector('.inc_prd_img_main_img')
                    elImgMainImg.querySelector('img').src = productObj.otherImageList;
                    elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
                })

                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
                elImgGalleryListBlock.classList.add('SingleImage')
                elImgGalleryListItemBlock.classList.add('inc_active')
                
                if (productObj.otherImageList.length > 5) {
                    elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
                }
        }
    }
    INC_COL.methods.createcolProductShowcaseBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elProductShowcaseBlock,mainprod) {
        var productBlock = elProductShowcaseBlock.querySelector('.inc_prd_bk')
        if(window.innerWidth < 820 && mainprod != "mainprod"){
            var add_html = productBlock.querySelector('.inc_prd_desc_qty_bk').innerHTML
            var add_sibling = productBlock.querySelector('.inc_prd_desc_att_variant_add_bk')
            var html_add_block = document.createElement('div');
            html_add_block.classList.add('inc_prd_desc_qty_bk')
            html_add_block.innerHTML = add_html
            var add_html_rem = productBlock.querySelector('.inc_prd_desc_qty_bk');
            add_html_rem.parentNode.removeChild(add_html_rem);
            add_sibling.parentNode.insertBefore(html_add_block,add_sibling)
        }
        var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock,productObj)
        
        var elHeaderInfoBlck = productBlock.querySelector('.inc_prd_info_main_bk');
        var elHeader = productBlock.querySelector('.inc_prd_hdr_main_bk');
        var elImgBlock = productBlock.querySelector('.inc_prd_img_bk');
        var elImgGalleryListBlock = productBlock.querySelector('.inc_prd_img_gallery_list_bk');
        var elTitleTextBlock = productBlock.querySelector('.inc_prd_desc_title_txt_bk');
        var elTitleText = productBlock.querySelector('.inc_prd_desc_title_txt');
        var elPriceActiveText = productBlock.querySelector('.inc_prd_desc_ecirp_active_text');
        var elPriceRegularText = productBlock.querySelector('.inc_prd_desc_ecirp_regular_text');
        var elAttBlock = productBlock.querySelector('.inc_prd_desc_att_bk');
        var elAttColorBlock = productBlock.querySelector('.inc_prd_desc_att_color_bk');
        var elAttColorTitleText = productBlock.querySelector('.inc_prd_desc_att_color_title_txt');
        var elAttColorListBlock = productBlock.querySelector('.inc_prd_desc_att_color_list_bk');
        var elAttSizeBlock = productBlock.querySelector('.inc_prd_desc_att_size_bk');
        var elAttSizeTitleText = productBlock.querySelector('.inc_prd_desc_att_size_title_txt');
        var elAttSizeTitleTextSelected = productBlock.querySelector('.inc_prd_desc_att_size_title_txt_selected');
        var elAttSizeListBlock = productBlock.querySelector('.inc_prd_desc_att_size_list_bk');
        var elAtt0ListBlock = productBlock.querySelector('.inc_prd_desc_att_zero_list_bk');
        var elAtt3ListBlock = productBlock.querySelector('.inc_prd_desc_att_third_list_bk');
        var elGalleryleftArrow = productBlock.querySelector('.inc_prd_img_gallery_left_bk');
        var elGalleryRightArrow = productBlock.querySelector('.inc_prd_img_gallery_right_bk');
        var elAtt0Block = productBlock.querySelector('.inc_prd_desc_att_zero_bk');
        var elAtt3Block = productBlock.querySelector('.inc_prd_desc_att_third_bk');
        var elAtt0TitleText = productBlock.querySelector('.inc_prd_desc_att_zero_title_txt');
        var elAtt3TitleTextSelected = productBlock.querySelector('.inc_prd_desc_att_third_title_txt_selected');
        var elAtt3TitleText = productBlock.querySelector('.inc_prd_desc_att_third_title_txt');
        var elAddBlock = productBlock.querySelector('.inc_prd_desc_add_bk');
        var elAddText = productBlock.querySelector('.inc_prd_desc_add_text');
        var elAddImg = productBlock.querySelector('.inc_prd_desc_add_img');
        var elratingsBlock = productBlock.querySelector('.inc_prd_desc_ratings_bk');
        var elworthPrice = productBlock.querySelector('.inc_prd_desc_ecirp_worth_text');
        var eldetailsprodblock = productBlock.querySelector('.inc_prd_desc_att_details_bk');
        var eladdvarianttext = productBlock.querySelector('.inc_prd_variant_simple_text');
        var elconfigtitle = productBlock.querySelector('.inc_prd_desc_add_title_txt_bk');
        var elvariantaddbtn = productBlock.querySelector('.inc_prd_desc_att_variant_add_bk');
        var elvariantpopupclose = productBlock.querySelector('.inc_prd_desc_variant_popup_close_bk');
        var elselectoptaddbtn = productBlock.querySelector('.inc_prd_variant_simple_bk');
        var productDescAddText = productBlock.querySelector('.inc_prd_add_text');
        var elQtyAddBtnBlock = productBlock.querySelector('.inc_prd_desc_qty_add_btn_bk');
        var colproductHeaderMainBlockRating = productBlock.querySelector('.inc_prd_hdr_main_rating_bk');
        var colproductHeaderMainBlockTitle = productBlock.querySelector('.inc_prd_hdr_main_title_bk');
        var elPriceHrdActiveText = productBlock.querySelector('.inc_prd_hrd_desc_ecirp_active_text');
        var elPriceHrdRegularText = productBlock.querySelector('.inc_prd_hrd_desc_ecirp_regular_text');
        if(productObj.ProductType == 'simple'){
            // eledit.style.display="none"
        }
        if(mainprod == "mainprod"){
            if(productBlock.querySelector('.inc_prd_variant_simple_bk') != null){
                productBlock.querySelector('.inc_prd_variant_simple_bk').style.display = "none"
            }
            if(productBlock.querySelector('.inc_prd_desc_add_title_txt_bk') != null){
                productBlock.querySelector('.inc_prd_desc_add_title_txt_bk').style.display = "none"
            }
            if(productBlock.querySelector('.inc_add_text') != null){
                productBlock.querySelector('.inc_add_text').style.display = "none"
            }
        }
        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        // elproductPriceLabel.innerHTML = "SALE"

        elvariantpopupclose.addEventListener('click', function () {
            if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').style.position = "relative"
                document.querySelector('body').style.overflow = "auto"
            }
            this.parentNode.classList.remove('inc_active')
            productBlock.classList.remove('show_overlay')
        });
        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);
        elHeaderInfoBlck.setAttribute('data-comboId', productObj.comboId);

        elHeader.querySelector('.inc_prd_hdr_img_bk').addEventListener("click", function () {
            productBlock.parentNode.classList.remove("inc_active");
        });
        var elImgMainImg = elImgBlock.querySelector('.inc_prd_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
       
        elImgTag1.setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
        var productLink = document.createElement('a');
        productLink.target = "_blank";
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipee(productLink)

        elImgMainImg.appendChild(productLink);

        if (mainprod == "mainprod"){
            productLink.addEventListener('click', function () {
                INC_COL.methods.sendBundleClickTracking(productObj.mainId);
                getTrackingPixel();
            })
        }
        
        if(mainprod != "mainprod"){
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault();  
                if (productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_hdr_title_bk') != null) {
                    productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_hdr_title_bk').click()
                }
                Array.prototype.forEach.call(document.querySelectorAll('.inc_prd_modal_bk'), function (el) {
                    el.classList.remove("inc_active");
                });
                if (document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
                document.querySelector('html').classList.add('inc_overlay');
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_bk') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_bk').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk').classList.add("inc_active")
            });
        } 
            

        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }
        var sliderBtnCounter = 0;
        var cc_ount=1;
        if (window.innerWidth > 768) {
            cc_ount = 5
        }
        elGalleryleftArrow.addEventListener("click", function () {
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
            if (INC_COL.clientConfig.slidevalue == -1) INC_COL.clientConfig.slidevalue = 0;
            var width_slide = 67;
            
            if (INC_COL.clientConfig.slidevalue > 0) {
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_right_bk').setAttribute("style", "pointer-events: auto;opacity:1");
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue--
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) + width_slide) + 'px';
                var menu = productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk');
                menu.setAttribute('style', 'margin-top:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk.inc_active') != null) {
                    document.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue].classList.add('inc_active')
            }
            if (INC_COL.clientConfig.slidevalue == 0) {
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_left_bk').setAttribute("style", "pointer-events: none;opacity:0.5");
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

        elGalleryRightArrow.addEventListener("click", function () {
            sliderBtnCounter++;
            if (sliderBtnCounter > productObj.otherImageList.length - 1) {
                sliderBtnCounter--;
            }
            var all_p_length =  productBlock.parentNode.parentNode.querySelectorAll('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk').length
            cc_ount = 1;
            if (window.innerWidth > 768) {
                cc_ount = 5
            }
            var width_slide = 67;
            if (+INC_COL.clientConfig.slidevalue + +cc_ount < all_p_length) {
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_left_bk').setAttribute("style", "pointer-events: auto;opacity:1");
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue++
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) - width_slide) + 'px';
                var menu = productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk');
                menu.setAttribute('style', 'margin-top:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk.inc_active') != null) {
                    document.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue].classList.add('inc_active')
            }

            if (+INC_COL.clientConfig.slidevalue + +cc_ount == all_p_length) {
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_right_bk').setAttribute("style", "pointer-events: none;opacity:0.5");
                productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_img_gallery_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

        
        if ((productObj.otherImageList == null) || productObj.otherImageList.length <= 5) {
            elGalleryRightArrow.style.display = "none"
            elGalleryleftArrow.style.display = "none"
        }
        if(mainprod != "mainprod"){
            elTitleTextBlock.addEventListener("click", function (e) {
                e.preventDefault(); 
                if (productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_hdr_title_bk') != null) {
                    productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_hdr_title_bk').click()
                }
                Array.prototype.forEach.call(document.querySelectorAll('.inc_prd_modal_bk'), function (el) {
                    el.classList.remove("inc_active");
                });
                document.querySelector('html').classList.add('inc_overlay');
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_bk') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_bk').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk').classList.add("inc_active")
                setTimeout(function () {
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') != null) document.querySelector('html').classList.add('inc_overlay');
                }, 300)
            });
        }
        

        var pTitleDiv = document.createElement('div');
        if(window.innerWidth < 821 && mainprod == "mainprod" && INC_COL.config.pageType == "pdpcollection"){
            pTitleDiv.innerHTML = "<strong>This item </strong>" + productObj.nameMain;
        }else{
            pTitleDiv.innerHTML = productObj.nameMain;
        }
        if (mainprod == "mainprod"){
            INC_COL.config.MainPrdName = productObj.nameMain;
        }
        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC_COL.methods.get_product_ratingscol(field1, field2, elratingsBlock);
        if(window.innerWidth < 820){
            INC_COL.methods.get_product_ratingscol(field1,field2,colproductHeaderMainBlockRating);
        }
        var pLink = document.createElement('a');
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        pLink.setAttribute("target", "_blank");
        pLink.href = productObj.url;
        if (mainprod == "mainprod"){
            pLink.addEventListener('click', function () {
                INC_COL.methods.sendBundleClickTracking(productObj.mainId);
                getTrackingPixel();
            })
        }
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        if(window.innerWidth < 820){
            console.log("mobile working")
            var pLinkModal = document.createElement('a');
            pLinkModal.setAttribute("title", productObj.nameMain);
            pLinkModal.setAttribute("href", productObj.url);
            pLinkModal.setAttribute("target", "_blank");
            pLinkModal.innerText = productObj.nameMain;
            colproductHeaderMainBlockTitle.appendChild(pLinkModal)
        }
        
        if(productObj.PromotionalMessage != 'null' && productObj.PromotionalMessage != "" && productObj.PromotionalMessage != undefined){
            productBlock.querySelector('.pc_promo_div').classList.remove('empty');
            productBlock.querySelector('.pc_promo_div').setAttribute('style', "display:block");
            productBlock.querySelector('.pc_promo_div').innerHTML = "OFFER";
        }

        
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        var totalsaveprc = get_discount_price(productObj.regularPriceMain, productObj.activePriceMain)
        var totalsaveper = get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)
        elPriceRegularText.textContent = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceHrdActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML =  INC_COL.clientConfig.regularPricePrefix + formatter.format(regularPrice)
            elPriceHrdRegularText.innerHTML = INC_COL.clientConfig.regularPricePrefix + formatter.format(regularPrice);
            if(totalsaveper>0){
                elworthPrice.innerHTML = "<span>You save</span> " + formatter.format(totalsaveprc);
            }
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceHrdActiveText.innerHTML = formatter.format(activePrice)
            elworthPrice.innerHTML = ""
        }
        if (window.innerWidth < 821) {
            var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        productDescAddText.innerText = "Add"
        productDescAddText.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').click()
        });
        prepareqty(productBlock,blockType)

        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });

        var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj);
        var product0Obj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);
        var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findObj);
        var product3Obj = INC_COL.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType)
                }
            }
        }
        if (productSizesObj.sizeArray.length > 0) {
            if (productSizesObj["sizeArray"][0].code != "Color") {
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                elAttSizeListBlock.innerHTML = "";
                productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
            }
        }
        if (productColorsObj.colorArray.length > 0) {
            elAttColorListBlock.innerHTML = "";
            productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        }
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                elAtt3ListBlock.innerHTML = "";
                productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)
            }
        }
        if (product0Obj["att0Array"].length > 0) {
            zerotitleclickfn_(productBlock)
        }
        if (productColorsObj["colorArray"].length > 0) {
            colortitleclickfn_(productBlock)
        }
        if (product3Obj["att3Array"].length > 0) {
            threetitleclickfn_(productBlock)
        }
        if (productSizesObj["sizeArray"].length > 0) {
            sizetitleclickfn_(productBlock)
        }
        var sizezero = INC_COL.dataStore.methods().getProductopt0Obj(findObj)
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0 && product3Obj["att3Array"].length == 0 && productSizesObj["sizeArray"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.textContent = "Add"
            eladdvarianttext.textContent = "Add";
            eladdvarianttext.classList.add('simple')
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elconfigtitle.textContent = "Please select a Color";
            eladdvarianttext.textContent = "Add";
            eladdvarianttext.classList.remove('simple')
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "Size :";
            elconfigtitle.textContent = "Please select your Size";
            eladdvarianttext.textContent = "Add";
        } else if (product3Obj["att3Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "Volume :";
            elconfigtitle.textContent = "Please select your Volume";
            eladdvarianttext.textContent = "Add";
        } else {
            if (productSizesObj["sizeArray"].length > 0) {
                eladdvarianttext.classList.remove('simple')
                eladdvarianttext.textContent = "Select Option";
                eladdvarianttext.classList.add('config')
                elAttBlock.classList.add('attributes_avail')
                elAttSizeTitleText.textContent = "Weight :";
                elconfigtitle.textContent = "Please select your Weight";
                eladdvarianttext.textContent = "Add";
            }
        }

        elvariantaddbtn.addEventListener('click', function () {
            var moduleblk;
            var flag_check;
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == trueflag) && this.innerText.trim() != "Add To Bag") {
                moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                flag_check = INC_COL.methods.checkVariantSelection(moduleblk)
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                    this.parentNode.parentNode.querySelector('.inc_prd_desc_variant_popup_close_bk').click()
                    this.parentNode.parentNode.querySelector('.inc_prd_desc_variant_popup_close_bk').click()
                    productBlock.classList.remove('show_overlay')
                    if (this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').click()
                    }
                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select a Color";
                                this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style', 'border:1px solid #E52B45;')
                            }
                        }

                        if (this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk') != null) {
                            if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') != null && this.parentNode.getAttribute('data-size') != null) {
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size and Color options";
                            } else if (this.parentNode.getAttribute('data-color') != null && this.parentNode.querySelectorAll('inc_prd_desc_att_color_list_item_bk.inc_active').length > 0) {
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size";
                            } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select a Color";
                            }
                            this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').setAttribute('style', 'display:block;')
                        }

                    }
                }
            } else {
                if (this.innerText.trim() == "Add To Bag" || this.innerText.trim() == "SELECT") {
                    moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    flag_check = INC_COL.methods.checkVariantSelection(moduleblk)
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_prd_desc_variant_popup_close_bk').click()
                        this.parentNode.parentNode.querySelector('.inc_prd_desc_variant_popup_close_bk').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == "Add To Bag" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
                            this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').click()
                        }
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk') != null) {
                                if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute('data-zero') == null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size";
                                } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').setAttribute('style', 'display:block;')
                            }

                            if (flag_check == 0) {
                                if (this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk') != null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your size";
                                }
                            }
                        }
                    }
                } else {
                    moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    flag_check = INC_COL.methods.checkVariantSelection(moduleblk)
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').click()
                        this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_variant_popup_close_bk').click()
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (flag_check != 0) {
                                if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select a Color";
                                }
                            }

                            if (this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk') != null) {
                                if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute('data-color') != null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your Size";
                                } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size')) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').setAttribute('style', 'display:block;')
                            }


                            if (flag_check == 0) {
                                if (this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk') != null) {
                                    this.parentNode.querySelector('.inc_prd_desc_add_title_txt_bk').innerText = "Please select your size";
                                }
                            }
                        }
                    }
                }
            }
        })

        elselectoptaddbtn.addEventListener('click', function () {
            if (document.querySelector('.inc_prd_desc_att_bk.inc_active') != null) {
                document.querySelector('.inc_prd_desc_att_bk.inc_active').classList.remove('inc_active')
            }
            if (this.querySelector('.inc_prd_variant_simple_text.simple') != null) {
                this.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').click()
            } else {
                if (window.innerWidth < 820 && INC_COL.config.pageType != "cartPage") {
                    document.querySelector('html').classList.add('inc_overlay')
                    
                    document.querySelector('body').style.overflow = "hidden"
                    productBlock.classList.add('show_overlay')
                    this.parentNode.querySelector('.inc_prd_desc_att_bk.attributes_avail').classList.add('inc_active')
                }else{
                    document.querySelector('html').classList.add('inc_overlay');
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_prd_modal_bk').classList.add('inc_active')
                }

                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_bk')) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
            
                productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_info_main_bk').classList.add('inc_active');
                
                productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_description_main_bk').classList.remove('inc_active');
            }
        })
        eladdvarianttext.textContent = "Add";
        elAddBlock.addEventListener("click", function () {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var modalProductBlock = productModuleBlock.querySelector('.inc_prd_modal_bk').querySelector('.inc_prd_bk')
            var flag_check = INC_COL.methods.checkVariantSelection(productModuleBlock)
            var sku = productBlock.getAttribute('data-sku');
            var mainId = productBlock.getAttribute('data-main_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var combo_id = productBlock.getAttribute('data-comboid');
            var pname = productBlock.querySelector('.inc_prd_desc_title_txt').textContent;
            var pprice = productBlock.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('£', '');
            var elqtyvalue = productBlock.querySelector('.inc_prd_showcase_bk input')
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1) qty = 1
            var pListItemBlock;
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var prodflag=false;
            if (document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                if (flag_check == 1 || onloadpdp == falseflag || onloadpdp_delete == falseflag) {
                    prodflag = true
                } else {
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                        if (document.querySelector('.inc_pdp_bundle_bk.inc_active .inc_pdp_bd_cart_title_img_bk') != null) {
                            document.querySelector('.inc_pdp_bundle_bk.inc_active .inc_pdp_bd_cart_title_img_bk').click()
                        }
                        if (window.innerWidth < 821) {
                            productModuleBlock.querySelector('.inc_prd_variant_simple_text').click()
                        } else {
                            productModuleBlock.querySelector('.inc_prd_variant_simple_bk').click()
                        }
                        if(elAddText.textContent == "Add"){
                            if (document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                                if (window.innerWidth < 821) {
                                    productModuleBlock.querySelector('.inc_prd_variant_simple_text').click()
                                } else {
                                    productModuleBlock.querySelector('.inc_prd_details_prod_bk').click()
                                }
                            }
                            if (productModuleBlock.querySelector('.inc_prd_variant_simple_text').getAttribute('title') != null){
                                productModuleBlock.querySelector('.inc_prd_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_prd_variant_simple_text').getAttribute('title');
                            }
                        }
                    }
                }
                if(elAddText.textContent == "Add"){
                    if(prodflag == trueflag){
                        elAddText.textContent = "Added";
                        elAddText.classList.add('added');
                        productDescAddText.textContent = "Added"
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_prd_desc_add_bk').classList.add('Inc_checked');
                        modalProductBlock.querySelector('.inc_prd_desc_add_text').textContent = "Update";
                        pListItemBlock = document.querySelector('.inc_pdp_bd_prd_list_item_bk' + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bd_prd_list_item_added_btn_img').classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector('.inc_prd_desc_add_img').classList.add("checked");
                        if (INC_COL.config.pageType == "pdpcollection" && blockType == "pdpcollection") INC_COL.methods.updatecolBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice,combo_id);
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_prd_modal_bk.inc_active') != null) {
                                if(inc_col_scroll_height > 100){
                                    window.scrollTo(0,inc_col_scroll_height);
                                }
                                prod_card.querySelector('.inc_prd_modal_bk.inc_active').classList.remove('inc_active')
                            }
                        }
                        productModuleBlock.querySelector('.inc_prd_variant_simple_bk').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_prd_desc_qty_add_btn_bk').classList.add('added_inc')
                        if(productModuleBlock.querySelector('.inc_prd_desc_qty_add_btn_bk .inc_add_text')!=null){
                            productModuleBlock.querySelector('.inc_prd_desc_qty_add_btn_bk .inc_add_text').innerText = "Added to Bundle";
                        }
                        productModuleBlock.querySelector('.inc_prd_add_bk').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_prd_modal_bk .inc_prd_add_bk').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_prd_desc_att_variant_text').textContent = "Update"
                        productModuleBlock.querySelector('.inc_prd_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_prd_variant_simple_text').getAttribute('title')
                    }
                }else if(elAddText.textContent == "Added"){
                    if (modalProductBlock.querySelector('.inc_prd_desc_add_text').textContent != "Update" && prod_card.querySelector('.inc_prd_modal_bk.inc_active') != null) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add to Bundle"
                        elAddText.classList.remove('added');
                        elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                        modalProductBlock.querySelector('.inc_prd_desc_add_text').textContent = "Add to Bundle";
                        pListItemBlock = document.querySelector('.inc_pdp_bd_prd_list_item_bk' + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.remove('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bd_prd_list_item_added_btn_img').classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock.querySelector('.inc_prd_desc_add_img').classList.remove("checked");
                        eladdfn_(productModuleBlock)
                        if (INC_COL.config.pageType == "pdpcollection" && blockType == "pdpcollection") INC_COL.methods.updatecolBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice,combo_id);
                    } else {
                        if (prod_card.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add to Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector('.inc_prd_desc_add_text').textContent = "Add to Bundle";
                            pListItemBlock = document.querySelector('.inc_pdp_bd_prd_list_item_bk' + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.remove('product_added');
                                pListItemBlock.querySelector('.inc_pdp_bd_prd_list_item_added_btn_img').classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock)
                            if (INC_COL.config.pageType == "pdpcollection" && blockType == "pdpcollection") INC_COL.methods.updatecolBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice,combo_id);
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector('.inc_prd_modal_bk.inc_active') != null) {
                            if(inc_col_scroll_height > 100){
                                window.scrollTo(0,inc_col_scroll_height);
                            }
                            prod_card.querySelector('.inc_prd_modal_bk.inc_active').classList.remove('inc_active')
                        }
                    }
                }
            } else {
                if (flag_check == 1) {
                    elAddText.textContent = "Adding...";
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                        productModuleBlock.querySelector('.inc_prd_details_prod_bk').click()
                    }
                }
            } 
        });
        return productBlock;
    }

    function eladdfn_(productModuleBlock){
        if (productModuleBlock.querySelector('.inc_prd_variant_simple_text.simple') != null) {
            productModuleBlock.querySelector('.inc_prd_variant_simple_text.simple').textContent = "Add to Bundle"
        } else {
            productModuleBlock.querySelector('.inc_prd_variant_simple_text').textContent = "Select Option";
        }
        if (productModuleBlock.querySelector('.inc_prd_variant_simple_bk') != null) {
            productModuleBlock.querySelector('.inc_prd_variant_simple_bk').classList.remove('added_inc')
        }
        productModuleBlock.querySelector('.inc_prd_desc_qty_add_btn_bk').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_prd_add_bk').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_prd_modal_bk .inc_prd_add_bk').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_prd_desc_att_variant_text').textContent = "Add to Bundle"
    }
    function dropdownclasstoggle(elment){
        if(document.querySelector('.inc_prd_desc_att_color_bk.show_dropdown') != null){
            document.querySelector('.inc_prd_desc_att_color_bk.show_dropdown').classList.remove('show_dropdown')
        }
        elment.parentNode.classList.toggle('show_dropdown')
    }
    function zerotitleclickfn_(prdb,shdrop){
        prdb.querySelector('.inc_prd_desc_att_zero_title_bk').addEventListener('click', function (ev) {
            var elm = ev.currentTarget
            if(shdrop == undefined){
                if(document.querySelector('.inc_prd_desc_att_zero_bk.show_dropdown') != elm){
                    if(document.querySelector('.inc_prd_desc_att_zero_bk.show_dropdown') != null){
                        if(ev.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                            document.querySelector('.inc_prd_desc_att_zero_bk.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
            }
            dropdownclasstoggle(elm)
        })
    }
    function colortitleclickfn_(productBlock,show_dropdown){
        productBlock.querySelector('.inc_prd_desc_att_color_title_bk').addEventListener('click', function (e) {
            var elmc = e.currentTarget
            if(show_dropdown == undefined){
                if(document.querySelector('.inc_prd_desc_att_color_bk.show_dropdown') != elmc){
                    if(document.querySelector('.inc_prd_desc_att_color_bk.show_dropdown') != null){
                        if(e.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                            document.querySelector('.inc_prd_desc_att_color_bk.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
            }
            dropdownclasstoggle(elmc)
        })
    }
    function sizetitleclickfn_(productBlock){
        productBlock.querySelector('.inc_prd_desc_att_size_title_bk').addEventListener('click', function (es) {
            var elmS = es.currentTarget
            if(document.querySelector('.inc_prd_desc_att_size_list_bk.show_dropdown') != elmS){
                if(document.querySelector('.inc_prd_desc_att_size_list_bk.show_dropdown') != null){
                    if(es.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                        document.querySelector('.inc_prd_desc_att_size_list_bk.show_dropdown').classList.remove('show_dropdown')
                    }
                }
            }
            dropdownclasstoggle(elmS)
        })
    }
    function threetitleclickfn_(productBlock){
        productBlock.querySelector('.inc_prd_desc_att_third_title_bk').addEventListener('click', function (et) {
            var elmT = et.currentTarget
            if(document.querySelector('.inc_prd_desc_att_third_list_bk.show_dropdown') != elmT){
                if(document.querySelector('.inc_prd_desc_att_third_list_bk.show_dropdown') != null){
                    if(et.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                        document.querySelector('.inc_prd_desc_att_third_list_bk.show_dropdown').classList.remove('show_dropdown')
                    }
                }
            }
            dropdownclasstoggle(elmT)
        })
    }
    function prepareqty(productBlock,blockType){
        var elAddText = productBlock.querySelector('.inc_prd_desc_add_text');
        var productDescQtyInputText = productBlock.querySelector('.inc_prd_desc_qty_input_text');
        var productDescQtyBlock = productBlock.querySelector('.inc_prd_desc_qty_bk');
        var elQtyBlock = productBlock.querySelector('.inc_prd_desc_qty_bk');
        var elQtyDownBlock = productBlock.querySelector('.inc_prd_desc_qty_down_bk');
        var elQtyUpBlock = productBlock.querySelector('.inc_prd_desc_qty_up_bk');
        var elQtyInput = generate_html_tag('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 999);
        elQtyInput.setAttribute('maxlength', 3);
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function (event) {
            var keyCodeE = event.which || event.keyCode;
            if (keyCodeE === 13) {
                event.preventDefault();
            } else if ((window.$.inArray(event.keyCodeE, incallowedKeys) !== -1) || (keyCodeE === 65 && (event.ctrlKey || event.metaKey)) || (keyCodeE >= 35 && keyCodeE <= 40)) {
                return;
            }
            var charValuee = String.fromCharCode(keyCodeE)
                , valid = /^\d+$/.test(charValuee);
            if (!valid) {
                event.preventDefault();
            } else {
                setTimeout(function () {
                    qtyupdateInc(event.target,productBlock,elAddText,elQtyBlock)
                }, 50);
            }
        });
        elQtyInput.addEventListener('focusout', function (ev) {
            setTimeout(function () {
                qtyupdateInc(ev.target,productBlock,elAddText,elQtyBlock)
            }, 50);
        });
    
        productDescQtyInputText.appendChild(elQtyInput);
        var added_text = document.createElement('span');
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);
        if(window.innerWidth < 820){
            added_text.style.display = "none"
        }
        elQtyDownBlock.addEventListener('click', function () {
            elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_prd_showcase_bk').querySelector('.inc_prd_bk');
            var modalProductBlock = productModuleBlock.querySelector('.inc_prd_modal_bk').querySelector('.inc_prd_bk')
            
            showcaseProductBlock.querySelector('.inc_prd_desc_qty_bk').querySelector('input').value = parseInt(elQtyInput.value);
            modalProductBlock.querySelector('.inc_prd_desc_qty_input_text input').value = parseInt(elQtyInput.value);
    
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var combo_id = productBlock.getAttribute('data-comboid');
            var pname = productBlock.querySelector('.inc_prd_desc_title_txt').innerText;
            var pprice = productBlock.querySelector('.inc_prd_desc_ecirp_active_text').innerText.replace('£', '');
            if (parseInt(elQtyInput.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == trueflag) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC_COL.config.AddedText || elAddText.textContent == INC_COL.config.UpdateText) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    if (INC_COL.config.pageType == "pdpcollection" && blockType == "pdpcollection") INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice,combo_id);
                }
            } else {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC_COL.config.AddedText || elAddText.textContent == INC_COL.config.UpdateText) {
                    INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice,combo_id);
                }
            }
            if (elQtyInput.value == 1) {
                elQtyBlock.classList.add('singleqty')
                productModuleBlock.querySelector('.inc_prd_showcase_bk .inc_prd_desc_qty_bk').classList.add('singleqty')
                modalProductBlock.querySelector('.inc_prd_desc_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            }
        });
    
        elQtyUpBlock.addEventListener('click', function () {
            elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 8) ? 8 : parseInt(elQtyInput.value) + 1;
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_prd_showcase_bk').querySelector('.inc_prd_bk');
            var modalProductBlock = productModuleBlock.querySelector('.inc_prd_modal_bk').querySelector('.inc_prd_bk')
            showcaseProductBlock.querySelector('.inc_prd_desc_qty_bk').querySelector('input').value = parseInt(elQtyInput.value);
            modalProductBlock.querySelector('.inc_prd_desc_qty_input_text input').value = parseInt(elQtyInput.value);
    
            modalProductBlock.querySelector('.inc_prd_desc_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');
    
            productDescQtyBlock.classList.remove('singleqty')
            productModuleBlock.querySelector('.inc_prd_showcase_bk .inc_prd_desc_qty_bk').classList.remove('singleqty')
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var combo_id = productBlock.getAttribute('data-comboid');
            var main_id = productBlock.getAttribute('data-main_id');
            var pname = productBlock.querySelector('.inc_prd_desc_title_txt').innerText;
            var pprice = productBlock.querySelector('.inc_prd_desc_ecirp_active_text').innerText.replace('£', '');
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC_COL.config.AddedText || elAddText.textContent == INC_COL.config.UpdateText) {
                INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice,combo_id);
            }
        });
    }
    function qtyupdateInc(_elm,prdblk,eladtext,elQtyBlock){
        if (_elm.value.length == 0) _elm.value = 1;
        if (_elm.value == 0) _elm.value = 1;
        if (_elm.value > 8) _elm.value = 8;

        var productModuleBlock = prdblk.parentNode.parentNode;
        var showcaseProductBlock = productModuleBlock.querySelector('.inc_prd_showcase_bk').querySelector('.inc_prd_bk');
        var modalProductBlock = productModuleBlock.querySelector('.inc_prd_modal_bk').querySelector('.inc_prd_bk')
        showcaseProductBlock.querySelector('.inc_prd_desc_qty_bk').querySelector('input').value = parseInt(_elm.value);
        modalProductBlock.querySelector('.inc_prd_desc_qty_input_text input').value = parseInt(_elm.value);

        var id = prdblk.getAttribute('data-id');
        var qty = parseInt(_elm.value);
        var main_id = prdblk.getAttribute('data-main_id');
        var bundle_id = prdblk.getAttribute('data-bundle_id');
        var combo_id = prdblk.getAttribute('data-comboid');
        var pname = prdblk.querySelector('.inc_prd_desc_title_txt').textContent;
        var pprice = prdblk.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('£', '');
        if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
            INC_COL.methods.updatecolBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice,combo_id);
        }
        if (_elm.value == 1) {
            elQtyBlock.classList.add('singleqty')
        } else {
            elQtyBlock.classList.remove('singleqty')
        }
    }
    function productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType){
        elAtt0TitleText.innerText = product0Obj["att0Array"][0].code +':';
        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_"+product0Obj["att0Array"].length)
        product0Obj["att0Array"].forEach(function (sizeObj) {
            var attSizeImgBlock0 = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img_bk');
            var attSizeImg0 = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img');
            attSizeImgBlock0.setAttribute('blocktype', blockType)
            attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            attSizeImgBlock0.addEventListener('click',function(){
                var elvariant = this;
                var elblktype=this.getAttribute('blocktype')
                var elvtype=this.getAttribute('varianttypes')
                INC_COL.methods.mappvariants(elvariant,elblktype,elvtype)
            })
            attSizeImgBlock0.classList.add('avail')
            if (sizeObj["imgSrc"].length > 0) {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    var sizeimg = generate_html_tag('img');
                    sizeimg.setAttribute('alt', sizeObj["text"])
                    sizeimg.src = sizeObj["imgSrc"]
                    attSizeImgBlock0.setAttribute('data-optionimge', sizeObj["imgSrc"])
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add('img_tag_avail')
                    elAtt0TitleText.style.display="flex"
                    attSizeImgBlock0.classList.add('img_avail')
                }
            }
            attSizeImg0.innerText = sizeObj["text"];
            attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
            attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
            attSizeImgBlock0.setAttribute('data-option', "1");
            attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
            if (product0Obj["att0Array"][0].code == "size") {
                attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "letter") {
                attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "choose") {
                attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
            } else {
                attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
            }
            attSizeImgBlock0.appendChild(attSizeImg0);
            elAtt0ListBlock.appendChild(attSizeImgBlock0);
        });
    }
    
    function productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText){
        var one_attr_flag = false
        if (productColorsObj["colorArray"].length == 1) {
            one_attr_flag = true
        }
        if (productColorsObj["colorArray"].length > 0) {
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText = "Colour : ";
                var attColorBlock = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_bk')
                var attColorImgBlock = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_img_bk');
                var attColorImg = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_img');
                attColorImgBlock.setAttribute('blocktype', blockType)
                attColorImgBlock.setAttribute('varianttypes', 'color')
                attColorImgBlock.addEventListener('click',function(){
                    var elvariant1 = this;
                    var elblktype1=this.getAttribute('blocktype')
                    var elvtype1=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariant1,elblktype1,elvtype1)
                })
                imgcolorgen(colorObj,attColorImg)
                var colorTitle = generate_html_tag('a');
                colorTitle.innerText = colorObj["text"]
                colorTitle.title = colorObj["text"].toUpperCase();
                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");
                attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
                attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
                attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
    
                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if (one_attr_flag == trueflag) {
                    setTimeout(function () {
                        if (INC_COL.methods.getProductIdFromWebPage() == prod_id) {
                            attColorImgBlock.click()
                        }
                    }, 0)
                }
            });
        }
    }
    function imgcolorgen(colorObj,attColorImg){
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            var spancolorcode = generate_html_tag('span');
            spancolorcode.setAttribute('alt', colorObj["text"])
            spancolorcode.style.backgroundColor = colorObj["colorCode"];
            attColorImg.appendChild(spancolorcode);
        }else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "") {
                var colorImg = generate_html_tag('img');
                colorImg.setAttribute('alt', colorObj["text"])
                colorImg.src = colorObj["imgSrc"]
                attColorImg.appendChild(colorImg);
            }
        }
    }
    function productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType){
        if (productSizesObj["sizeArray"].length > 0) {
            elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code + " :";
            elAttSizeBlock.classList.add("inc_active");
            productSizesObj["sizeArray"].forEach(function (sizeObj) {
                var attSizeImgBlock = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img_bk');
                var attSizeImg = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img');
                elAttSizeTitleTextSelected.innerText = "Please select option"
                if (elAttSizeTitleTextSelected.innerText == "Please select option") {
                    // elAttSizeTitleTextSelected.setAttribute('style', 'color:#FF0000')
                }
                attSizeImgBlock.classList.add('avail')
                attSizeImgBlock.setAttribute('blocktype', blockType)
                attSizeImgBlock.setAttribute('varianttypes', 'size')
                attSizeImgBlock.addEventListener('click',function(){
                    var elvariants = this;
                    var elblktypes=this.getAttribute('blocktype')
                    var elvtypes=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvariants,elblktypes,elvtypes)
                })
                attSizeImg.innerText = sizeObj["text"];
                attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                attSizeImgBlock.setAttribute('data-option', "2");
                if (productSizesObj["sizeArray"][0].code == "size") {
                    attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                } else if (productSizesObj["sizeArray"][0].code == "letter") {
                    attSizeImgBlock.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                } else if (productSizesObj["sizeArray"][0].code == "choose") {
                    attSizeImgBlock.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                } else {
                    attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                }
                attSizeImgBlock.appendChild(attSizeImg);
                elAttSizeListBlock.appendChild(attSizeImgBlock);
    
            });
    
        }
    }
    
    function productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected){
        if (product3Obj["att3Array"].length > 0) {
            product3Obj["att3Array"].forEach(function (sizeObj) {
                elAtt3TitleTextSelected.innerText = "Please select option"
                elAtt3TitleText.innerText = product3Obj["att3Array"][0].code + " :";
                elAtt3TitleText.style.textTransform = "capitalize";
                elAtt3Block.classList.add("inc_active");
                var attSizeImgBlock3 = generate_html_tag('div', 'inc_prd_desc_att_third_list_item_img_bk');
                var attSizeImg3 = generate_html_tag('div', 'inc_prd_desc_att_third_list_item_img');
                attSizeImgBlock3.setAttribute('blocktype', blockType)
                attSizeImgBlock3.setAttribute('varianttypes', 'third')
                attSizeImgBlock3.addEventListener('click',function(){
                    var elvarianta = this;
                    var elblktypea=this.getAttribute('blocktype')
                    var elvtypea=this.getAttribute('varianttypes')
                    INC_COL.methods.mappvariants(elvarianta,elblktypea,elvtypea)
                })
                attSizeImgBlock3.classList.add('avail')
                attSizeImg3.innerText = sizeObj["text"];
                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                attSizeImgBlock3.setAttribute('data-option', "3");
    
                attSizeImgBlock3.appendChild(attSizeImg3);
                elAtt3ListBlock.appendChild(attSizeImgBlock3);
    
            });
        }
    }
    INC_COL.methods.createcolProductModalBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elmodalblock) {
        var productBlock = elmodalblock.querySelector('.inc_prd_bk')
        var prdmblock=productBlock
        var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);

        setidstoelm(productBlock,productObj)

        var elHeader = prdmblock.querySelector('.inc_prd_hdr_main_bk');
        var elImgBlock = prdmblock.querySelector('.inc_prd_img_bk');
        var elImgGalleryListBlock = prdmblock.querySelector('.inc_prd_img_gallery_list_bk');
        var elTitleBlock = prdmblock.querySelector('.inc_prd_desc_title_bk');
        var elTitleText = prdmblock.querySelector('.inc_prd_desc_title_txt');
        var elPriceActiveText = prdmblock.querySelector('.inc_prd_desc_ecirp_active_text');
        var elPriceRegularText = prdmblock.querySelector('.inc_prd_desc_ecirp_regular_text');
        var elAttBlock = prdmblock.querySelector('.inc_prd_desc_att_bk');
        var elAttColorBlock = prdmblock.querySelector('.inc_prd_desc_att_color_bk');
        var elAttColorTitleText = prdmblock.querySelector('.inc_prd_desc_att_color_title_txt');
        var elAttColorListBlock = prdmblock.querySelector('.inc_prd_desc_att_color_list_bk');
        var elAttSizeBlock = prdmblock.querySelector('.inc_prd_desc_att_size_bk');
        var elAttSizeTitleText = prdmblock.querySelector('.inc_prd_desc_att_size_title_txt');
        var elAttSizeTitleTextSelected = prdmblock.querySelector('.inc_prd_desc_att_size_title_txt_selected');
        var elAttSizeListBlock = prdmblock.querySelector('.inc_prd_desc_att_size_list_bk');
        var elAtt0ListBlock = prdmblock.querySelector('.inc_prd_desc_att_zero_list_bk');
        var elAtt3ListBlock = prdmblock.querySelector('.inc_prd_desc_att_third_list_bk');
        var elAtt0Block = prdmblock.querySelector('.inc_prd_desc_att_zero_bk');
        var elAtt3Block = prdmblock.querySelector('.inc_prd_desc_att_third_bk');
        var elAtt0TitleTextSelected = prdmblock.querySelector('.inc_prd_desc_att_zero_title_txt_selected');
        var elAtt0TitleText = prdmblock.querySelector('.inc_prd_desc_att_zero_title_txt');
        var elAtt3TitleTextSelected = prdmblock.querySelector('.inc_prd_desc_att_third_title_txt_selected');
        var elAtt3TitleText = prdmblock.querySelector('.inc_prd_desc_att_third_title_txt');
        var elAddBlock = prdmblock.querySelector('.inc_prd_desc_add_bk');
        var elworthPrice = prdmblock.querySelector('.inc_prd_desc_ecirp_worth_text');
        var eladdvarianttext = prdmblock.querySelector('.inc_prd_variant_simple_text');
        var elGalleryRightArrow = prdmblock.querySelector('.inc_prd_img_gallery_right_bk');
        var elGalleryleftArrow = prdmblock.querySelector('.inc_prd_img_gallery_left_bk');
        var colcolproductDescriptionMainBlock = prdmblock.querySelector('.inc_prd_description_main_bk');
        var productHeaderMainBlockTitle = prdmblock.querySelector('.inc_prd_hdr_main_title_bk')
        var productHeaderMainBlockRating = prdmblock.querySelector('.inc_prd_hdr_main_rating_bk')
        elHeader.querySelector('.inc_prd_hdr_img_bk').addEventListener("click", function () {
            if (document.querySelector('.inc_sidebar_modal_bk.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (document.querySelector('.inc_sidebar_modal_bk.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_bk.inc_active').classList.remove('overflow_visible')
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_desc_qty_input_text input') != null && productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_desc_qty_input_text input') != null) {
                if (productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_desc_qty_input_text input').value) {
                    productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_prd_showcase_bk .inc_prd_desc_qty_input_text input').value
                }
            }
            
            productBlock.parentNode.classList.remove("inc_active");
            productBlock.parentNode.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_hdr_title_bk_1').classList.remove('inc_active');
            if (document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                document.querySelector('html').setAttribute('style', 'overflow:auto')
            }
            if(inc_col_scroll_height > 100){
                window.scrollTo(0,inc_col_scroll_height);
            }
        });

        var promo_div = "<div class='pc_promo_div inc_active'><span class='ec_avail_offer'>Available Offer</span><span class='pc_promo_span red_promo'>Offer</span></div>";
        var pro_div = document.createElement('div');
        pro_div.classList.add('ec_promo_div_main');
        pro_div.innerHTML = promo_div;

        var view = productBlock.querySelector('.inc_prd_desc_att_details_bk');
        if(productObj.PromotionalMessage != 'null' && productObj.PromotionalMessage != "" && productObj.PromotionalMessage != undefined){
            view.parentNode.insertBefore(pro_div,view);
        }



        var elImgMainImg = elImgBlock.querySelector('.inc_prd_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
        if(elImgTag1 == trueflag){
            elImgTag1.src = productObj.imageURLMain
        }
        elImgTag1.setAttribute('onerror', "this.src='" + INC_COL.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        if(productObj.otherImageList != null && productObj.otherImageList.length < 5){
            elGalleryRightArrow.style.display ='none';
            elGalleryleftArrow.style.display ='none';
        }
        var productLink = document.createElement('a');
        productLink.target = "_blank";
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipee(productLink)
        elImgMainImg.appendChild(productLink);
        elImgMainImg.addEventListener("click", function () {
            INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        });
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }else{
            productBlock.classList.add('inc_other_noimage')
        }
        elTitleBlock.addEventListener("click", function () {
            INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        });
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        var pLinkModal = document.createElement('a');
        pLinkModal.setAttribute("title", productObj.nameMain);
        pLinkModal.setAttribute("href", productObj.url);
        pLinkModal.setAttribute("target", "_blank");
        pLinkModal.setAttribute('rel', 'noopener noreferrer')
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal)
        pLinkModal.addEventListener("click", function () {
            INC_COL.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC_COL.methods.get_product_ratingscol(field1, field2, productHeaderMainBlockRating);
        var pLinkModalSKU = document.createElement('span');
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku
        // productHeaderMainBlockRating.appendChild(pLinkModalSKU)

        var pLink = document.createElement('a');
        pLink.href = productObj.url;
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        var dochtm ;
        if(productObj.description != "" && productObj.description != undefined){
            if (isBase64(productObj.description)){
                if (productObj.description != "" && productObj.description != undefined && productObj.description != "" && productObj.description != undefined){
                    dochtm = document.createElement('div')
                    dochtm.innerHTML = atob(productObj.description) + atob(productObj.description)
                    colcolproductDescriptionMainBlock.innerHTML =  dochtm.innerHTML.replace("|",'');
                } else {
                    if (productObj.description != "" && productObj.description != undefined){
                        dochtm = document.createElement('div')
                        dochtm.innerHTML = atob(productObj.description);
                        colcolproductDescriptionMainBlock.innerHTML =  dochtm.innerHTML.replace("|",'');
                    }
                } 
            } else {
                if(window.innerWidth < 820){
                    colcolproductDescriptionMainBlock.innerHTML =  "<span>Product Description</span>" + productObj.description;
                }else{
                    colcolproductDescriptionMainBlock.innerHTML = productObj.description;
                }
            }
        } else {
            colcolproductDescriptionMainBlock.innerHTML = "<div>Description</div>" + productObj.Field1 
        }

        var totalsaveprc = get_discount_price(productObj.regularPriceMain, productObj.activePriceMain)
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        var totalsaveper =  get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)

        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML =  INC_COL.clientConfig.regularPricePrefix + formatter.format(regularPrice)
            if(totalsaveper>0){
                elworthPrice.innerHTML = "<span>You save</span> " + formatter.format(totalsaveprc);
            }
        } else {
            elworthPrice.innerHTML ='';
            elPriceActiveText.innerText = formatter.format(activePrice)
        }
        prepareqty(productBlock,blockType)
        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
        var inc_product_hdr_title_bk_1 = productBlock.querySelector('.inc_product_hdr_title_bk_1')
        var inc_product_hdr_title_txt_1 = productBlock.querySelector('.inc_product_hdr_title_txt_1')
        inc_product_hdr_title_txt_1.innerText = "Product Description";

        var descriptionhtml = generate_html_tag('div','inc_descriptionhtml')
        if(productObj.description != "" && productObj.description != undefined){
            if (isBase64(productObj.description)){
                if (productObj.description != "" && productObj.description != undefined && productObj.description != "" && productObj.description != undefined){
                    dochtm = document.createElement('div')
                    dochtm.innerHTML = atob(productObj.description) + atob(productObj.description)
                    descriptionhtml.innerHTML = dochtm.innerHTML.replace("|",'');
                } else {
                    if (productObj.description != "" && productObj.description != undefined){
                        dochtm = document.createElement('div')
                        dochtm.innerHTML = atob(productObj.description);
                        descriptionhtml.innerHTML = dochtm.innerHTML.replace("|",'');
                    }
                } 
            } else {
                if(window.innerWidth < 820){
                    descriptionhtml.innerHTML =  "<span>Product Description</span>" + productObj.description;
                }else{
                    descriptionhtml.innerHTML = productObj.description;
                }
            }
        } else {
            descriptionhtml.innerHTML = "<div>Description</div>" + productObj.Field1 
        }
        

        var inc_prd_hdr_title_bk = inc_product_hdr_title_bk_1.parentNode.querySelector('.inc_prd_hdr_title_bk');

        var inc_prd_hdr_new_page = productBlock.querySelector('.inc_prd_hdr_new_page')
        var inc_prd_hdr_new_page_text = productBlock.querySelector('.inc_prd_hdr_new_page .inc_prd_hdr_new_page_text')
        inc_prd_hdr_new_page_text.innerText = "Open in a new tab"
        inc_prd_hdr_new_page_text.setAttribute("href", productObj.url)
        inc_prd_hdr_new_page_text.setAttribute("target", "_blank")
        inc_prd_hdr_new_page_text.setAttribute('rel', 'noopener noreferrer')
        inc_prd_hdr_new_page.addEventListener("click", function () {
            INC_COL.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        inc_product_hdr_title_bk_1.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_prd_description_main_bk").classList.add("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_prd_info_main_bk").classList.remove("inc_active")
            this.parentNode.querySelector('.inc_prd_hdr_title_bk').classList.remove("inc_active");
            this.classList.add("inc_active");
        });

        inc_prd_hdr_title_bk.classList.add('inc_active');


        inc_prd_hdr_title_bk.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_prd_description_main_bk").classList.remove("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_prd_info_main_bk").classList.add("inc_active")
            inc_prd_hdr_title_bk.classList.add('inc_active');
            inc_product_hdr_title_bk_1.classList.remove('inc_active');
        });

        var product0Obj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);

        var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findObj);

        var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj);

        var product3Obj = INC_COL.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType)
                }
            }
        }

        if (productSizesObj.sizeArray.length > 0) {
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
            }
        }

        if (productColorsObj.colorArray.length > 0) {
            elAttColorListBlock.innerHTML = "";
            productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        }
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)
            }
        }
        if (product0Obj["att0Array"].length > 0) {
            zerotitleclickfn_(productBlock,"show_dropdown")
        }
        if (productColorsObj["colorArray"].length > 0) {
            colortitleclickfn_(productBlock,'show_dropdown')
        }
        if (product0Obj.att0Array.length > 0 || productColorsObj["colorArray"].length > 0 || product3Obj["att3Array"].length > 0 || productSizesObj["sizeArray"].length > 0) {
            elAtt0TitleTextSelected.addEventListener('click', function () {
                this.parentNode.parentNode.parentNode.classList.toggle('show_dropdown')
            })
            elAttBlock.classList.add('attributes_avail')
        }
        elGalleryleftArrow.setAttribute('title', 'Scroll left')
        elGalleryRightArrow.setAttribute('title', 'Scroll right')

        
        
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 5) {
            elGalleryRightArrow.style.display = "none"
            elGalleryleftArrow.style.display = "none"
        }
        eladdvarianttext.textContent = "Add";
        elAddBlock.addEventListener("click", function () {
            productBlock.parentNode.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_hdr_title_bk_1').classList.remove('inc_active');

            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check = INC_COL.methods.checkVariantSelection(productModuleBlock)
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('body').classList.remove('inc_popup_open')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_prd_showcase_bk').querySelector('.inc_prd_bk');
            
            if (INC_COL.config.pageType != "cartPage"  && INC_COL.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf('inc_af_product-list_bk') == -1) {
                showcaseProductBlock.querySelector('.inc_prd_desc_add_bk').click();
            }

            if (productModuleBlock.classList.contains('configurable') == trueflag) {
                if (flag_check == 1) {
                    setTimeout(function () {
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_prd_modal_bk.inc_active') != null) {
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_prd_modal_bk.inc_active').classList.remove('inc_active')
                            document.querySelector('body').classList.remove('inc_popup_open');
                            if(inc_col_scroll_height > 100){
                                window.scrollTo(0,inc_col_scroll_height);
                            }
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_bk').classList.remove('overflow_visible')
                        }
                    }, 200)
                } else {
                    productModuleBlock.querySelector('.inc_prd_desc_add_title_txt_bk').setAttribute('style', 'color:#E52B45')
                    var element = document.querySelector('.inc_prd_modal_bk.inc_active .inc_prd_bk .inc_prd_desc_att_color_bk')
                    if (element != null) {
                        document.querySelector('html').classList.add('inc_popup_open')
                        document.querySelector('html').classList.add('inc_overlay')
                    }
                }
            } else {
                setTimeout(function () {
                    if (document.querySelector('.inc_sidebar_modal_bk.inc_active .inc_prd_modal_bk.inc_active') != null) {
                        document.querySelector('.inc_sidebar_modal_bk.inc_active .inc_prd_modal_bk.inc_active').classList.remove('inc_active')
                        document.querySelector('body').classList.remove('inc_popup_open')
                        if(inc_col_scroll_height > 100){
                            window.scrollTo(0,inc_col_scroll_height);
                        }
                    }
                    if (document.querySelector('.inc_sidebar_modal_bk.inc_active .inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_bk') != null) {
                        document.querySelector('.inc_sidebar_modal_bk').classList.remove('overflow_visible')
                    }
                }, 100)
            }
            setTimeout(function(){
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                    document.querySelector('.inc_sidebar_modal_bk.inc_active').classList.remove('overflow_visible')
                }
            },200)
        });
        return productBlock;
    }
    INC_COL.methods.mappvariants = function (obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined && obj.parentNode.parentNode != null) {
            let productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (productModuleBlck.classList.contains('inc_prd_showcase_bk') == trueflag || productModuleBlck.classList.contains('inc_prd_modal_bk') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode
            }
            if (productModuleBlck.classList.contains('inc_prd_bk') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode
            } else if (productModuleBlck.classList.contains('inc_prd_info_main_bk') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode.parentNode
            }
            if(productModuleBlck.classList.contains('inc_bk') == true){
                productModuleBlck = document.querySelector('.inc_product-main_bk .inc_prd_module_bk')
            }
            let productblockshow = productModuleBlck.querySelector('.inc_prd_showcase_bk .inc_prd_bk')
            let productblockmod = productModuleBlck.querySelector('.inc_prd_modal_bk .inc_prd_bk')
    
            let mainprdid = productblockshow.getAttribute('data-main_id')
    
            if (type_of_variant == "zero") {
                let sel_variantz = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-zero', sel_variantz)
                productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-zero', sel_variantz)
            } else if (type_of_variant == "color") {
                let sel_variantC = obj.getAttribute('data-color')
                productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color', sel_variantC)
                productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color', sel_variantC)
            } else if (type_of_variant == "size") {
                let sel_variantS = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-size', sel_variantS.replace(/"/g, ''))
                productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-size', sel_variantS.replace(/"/g, ''))
    
            } else if (type_of_variant == "third") {
                let sel_variantT = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-third', sel_variantT)
                productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-third', sel_variantT)
            }
    
            productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-module-id', mainprdid)
    
            let main_p_id = INC_COL.dataStore.methods().getFirstProductObjByMainId({
                mainId: mainprdid
            }).id;
            let findobj = new INC_COL.classes.FindObj({
                id: main_p_id
            });
            let zero_text = productblockmod.querySelector('.inc_prd_desc_att_bk').getAttribute('data-zero');
            let size_text = productblockmod.querySelector('.inc_prd_desc_att_bk').getAttribute('data-size');
            let color_text = productblockmod.querySelector('.inc_prd_desc_att_bk').getAttribute('data-color');
            let third_text = productblockmod.querySelector('.inc_prd_desc_att_bk').getAttribute('data-third');
    
            findobj.mainId = mainprdid
            findobj.colorText = ""
            if (color_text != undefined) {
                findobj.colorText = color_text
                productblockmod.querySelector('.inc_prd_desc_att_color_title_txt_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_prd_desc_att_color_title_txt_selected').innerText = color_text
                productblockshow.querySelector('.inc_prd_desc_att_color_title_txt_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockshow.querySelector('.inc_prd_desc_att_color_title_txt_selected').innerText = color_text
            }
            if (zero_text != undefined) {
                findobj.zeroText = zero_text
                productblockshow.querySelector('.inc_prd_desc_att_zero_title_txt_selected').innerText = zero_text
                productblockshow.querySelector('.inc_prd_desc_att_zero_title_txt_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_prd_desc_att_zero_title_txt_selected').classList.add('inc_change_color');
                productblockmod.querySelector('.inc_prd_desc_att_zero_title_txt_selected').innerText = zero_text
            }
            if (size_text != undefined) {
                findobj.sizeText = size_text
                productblockshow.querySelector('.inc_prd_desc_att_size_title_txt_selected').innerText = size_text
                productblockmod.querySelector('.inc_prd_desc_att_size_title_txt_selected').innerText = size_text
                productblockshow.querySelector('.inc_prd_desc_att_size_title_txt_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_prd_desc_att_size_title_txt_selected').setAttribute('style', 'color:"#4D4D4F";')
            }
    
            if (third_text != undefined) {
                findobj.thirdText = third_text
                productblockmod.querySelector('.inc_prd_desc_att_third_title_txt_selected').innerText = third_text
                productblockshow.querySelector('.inc_prd_desc_att_third_title_txt_selected').innerText = third_text
            }
            productblockmod.querySelector('.inc_prd_desc_add_err_text_bk').innerHTML = ""
            productblockshow.querySelector('.inc_variant_error_text').innerHTML = ""
            productblockshow.querySelector('.inc_prd_variant_simple_text').setAttribute('style', '')
            productblockshow.querySelector('.inc_prd_desc_add_title_txt_bk').setAttribute('style', '')
            let elselcolortextmodal = productblockmod.querySelector('.inc_prd_desc_att_color_title_txt_selected')
            // //attribute listing
            // let productSizesObj = INC_COL.dataStore.methods().getProductColorsObj_(findobj, obj,2);
            // let productColorsObj = INC_COL.dataStore.methods().getProductColorsObj_(findobj, obj,0);
            // let product3rdObj = INC_COL.dataStore.methods().getProductColorsObj_(findobj, obj,3);
            // let product0Obj = INC_COL.dataStore.methods().getProductColorsObj_(findobj, obj,1);

            
    
            let elAttSizeBlock = productblockmod.querySelector('.inc_prd_desc_att_size_bk')
            let elAttColorBlock = productblockmod.querySelector('.inc_prd_desc_att_color_bk')
            let elAtt3rdBlock = productblockmod.querySelector('.inc_prd_desc_att_third_bk')
            let elAttSizeListBlock = productblockmod.querySelector('.inc_prd_desc_att_size_list_bk')
            let elAtt0ListBlock = productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk');
            let elAttColorListBlock = productblockmod.querySelector('.inc_prd_desc_att_color_list_bk')
            let elAtt3ListBlock = productblockmod.querySelector('.inc_prd_desc_att_third_list_bk')
            let elcolortextmodal=productblockmod.querySelector('.inc_prd_desc_att_color_title_txt')
            let elAttSizeListBlockshow = productblockshow.querySelector('.inc_prd_desc_att_size_list_bk')
            let elAtt0ListBlockshow = productblockshow.querySelector('.inc_prd_desc_att_zero_list_bk')
    
            let elAttColorListBlockshow = productblockshow.querySelector('.inc_prd_desc_att_color_list_bk')
            let elAtt3ListBlockshow = productblockshow.querySelector('.inc_prd_desc_att_third_list_bk')
            let elselcolortextshow=productblockshow.querySelector('.inc_prd_desc_att_color_title_txt_selected')
            let elcolortextshow=productblockmod.querySelector('.inc_prd_desc_att_color_title_txt')
            let zerosel=false;

            var product0Obj = INC_COL.dataStore.methods().getProductopt0Obj(findobj,obj);
            // if (type_of_variant == "color" && productblockshow.querySelector('.inc_prd_desc_att_color_bk.inc_active') != null) {
            //     elAtt0ListBlock.innerHTML = "";
            //     elAtt0ListBlockshow.innerHTML = "";
            //     if (product0Obj["att0Array"].length > 0) {
            //         product0Obj["att0Array"].forEach(function (sizeObj) {
            //             let attSizeImgBlock0 = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img_bk');
            //             let attSizeImg0 = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img');
            //             attSizeImgBlock0.setAttribute('blocktype', blocktype)
            //             attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            //             attSizeImgBlock0.addEventListener('click', function () {
            //                 let elvariantss = this;
            //                 let elblktype__ = this.getAttribute('blocktype')
            //                 let elvtype__ = this.getAttribute('varianttypes')
            //                 INC_COL.methods.mappvariants(elvariantss, elblktype__, elvtype__)
            //             })
            //             attSizeImgBlock0.classList.add('avail')
            //             attSizeImg0.innerText = sizeObj["text"];
            //             attSizeImgBlock0.setAttribute('data-size', sizeObj["text"].replace(/"/g, ''));
    
            //             attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase().replace(/"/g, ''));
            //             attSizeImgBlock0.setAttribute('data-option', "1");
            //             attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
            //             attSizeImgBlock0.setAttribute('data-optid', sizeObj["opt_id"]);
            //             attSizeImgBlock0.setAttribute('data-attrid', sizeObj["att_id"]);
            //             attSizeImgBlock0.setAttribute('data-child-price', sizeObj["prc"]);
            //             attSizeImgBlock0.appendChild(attSizeImg0);
            //             elAtt0ListBlock.appendChild(attSizeImgBlock0);
            //             let attSizeImgBlockclone0 = attSizeImgBlock0.cloneNode(attSizeImgBlock0);
            //             attSizeImgBlockclone0.addEventListener('click',function(){
            //                 let elvariants_1= this;
            //                 let elblktypes__2=this.getAttribute('blocktype')
            //                 let elvtypes__1=this.getAttribute('varianttypes')
            //                 INC_COL.methods.mappvariants(elvariants_1,elblktypes__2,elvtypes__1)
            //             })
            //             elAtt0ListBlockshow.appendChild(attSizeImgBlockclone0);
            //             if (zero_text != undefined) {
            //                 if (zero_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
            //                     zerosel = true
            //                     attSizeImgBlock0.classList.add('inc_active')
            //                     attSizeImgBlockclone0.classList.add('inc_active')
            //                 }
            //             }
            //         });
            //         if(zerosel == falseflag){
            //             let zerotxt_=productblockmod.querySelector('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img_bk').getAttribute('data-size')
            //             productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-zero',zerotxt_)
            //             productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-zero',zerotxt_)
            //             elAtt0ListBlock.querySelector('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img_bk').classList.add('inc_active')
            //             elAtt0ListBlockshow.querySelector('.inc_prd_desc_att_zero_bk .inc_prd_desc_att_size_list_item_img_bk').classList.add('inc_active')
            //         }
            //     }
            // }
            var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findobj,obj);
            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "size") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("inc_active");
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        let attSizeImgBlock = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img_bk');
                        let attSizeImg = generate_html_tag('div', 'inc_prd_desc_att_size_list_item_img');
                        attSizeImgBlock.setAttribute('blocktype', blocktype)
                        attSizeImgBlock.setAttribute('varianttypes', 'size')
                        attSizeImgBlock.addEventListener('click',function(){
                            let elvariants2 = this;
                            let elblktypes2=this.getAttribute('blocktype')
                            let elvtypes2=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvariants2,elblktypes2,elvtypes2)
                        })
                        attSizeImgBlock.classList.add('avail')
                        attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock.setAttribute('data-option', "2");
                        attSizeImgBlock.appendChild(attSizeImg);
                        let attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                        attSizeImgBlockclone.addEventListener('click',function(){
                            let elvariants_ = this;
                            let elblktypes_=this.getAttribute('blocktype')
                            let elvtypes_=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvariants_,elblktypes_,elvtypes_)
                        })
                        elAttSizeListBlock.appendChild(attSizeImgBlock);
                        elAttSizeListBlockshow.appendChild(attSizeImgBlockclone);
                        if (size_text != undefined) {
                            if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock.classList.add('inc_active')
                                attSizeImgBlockclone.classList.add('inc_active')
                            }
                        }
                    });
                }
            } else if(size_text != undefined){
                let sizelowertext = size_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockmod.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockshow.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk[datacolor="' + sizelowertext + '"]') != null){
                    productblockmod.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
                    productblockshow.querySelector('.inc_prd_desc_att_size_list_bk .inc_prd_desc_att_size_list_item_img_bk[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
                }
            }


            var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findobj,obj);

            //type_of_variant == "zero" || 
            if (type_of_variant == "zero" ||  type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_color_title_txt_selected').innerText == "" && productModuleBlck.querySelector('.inc_prd_desc_att_color_title_txt_selected').innerText == "") {
                    productModuleBlck.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_color_title_txt_selected').innerText = ""
                    productModuleBlck.querySelector('.inc_prd_desc_att_color_title_txt_selected').innerText = ""
                }
                let selcol = findobj.colorText
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    let clrselflag=false;
                    let clrarrac = 0
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"]
                            findobj.color_text = colorObj["text"]
                        } else {
                            findobj.colorText = ""
                            findobj.color_text = ""
                        }
                        let attColorBlock = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_bk')
                        let attColorImgBlock = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_img_bk');
                        let attColorImg = generate_html_tag('div', 'inc_prd_desc_att_color_list_item_img');
                        
                        attColorImgBlock.setAttribute('blocktype', blocktype)
                        attColorImgBlock.setAttribute('varianttypes', 'color')
                        attColorImgBlock.addEventListener('click',function(){
                            let elvariantc2 = this;
                            let elblktypec2=this.getAttribute('blocktype')
                            let elvtypec2=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvariantc2,elblktypec2,elvtypec2)
                        })
                        imgcolorgen(colorObj,attColorImg)
    
                        let colorTitle = generate_html_tag('a');
                        colorTitle.innerText = colorObj["text"]
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                        attColorImg.appendChild(colorTitle);
                        
                        attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                        attColorImgBlock.setAttribute('data-option', "0");
                        attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
                        attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
                        attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
                        attColorImgBlock.appendChild(attColorImg);
                        attColorBlock.appendChild(attColorImgBlock);
                        let attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone.querySelector('.inc_prd_desc_att_color_list_item_img_bk').addEventListener('click',function(){
                            let elvariantc1s = this;
                            let elblktypec2s=this.getAttribute('blocktype')
                            let elvtypec2s=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvariantc1s,elblktypec2s,elvtypec2s)
                        })
                        if(document.querySelector('.sidebar_outer.sidebar_outer_active') != null || INC_COL.config.pageType == 'cartPage'){
                            if(clrarrac > 5){
                                let inc_more_color1 = generate_html_tag('a', 'inc_more_color')
                                inc_more_color1.target = "_blank";
                                inc_more_color1.innerText = '+';
                                inc_more_color1.addEventListener('click',function(ee){
                                    if(window.innerWidth < 821){
                                        ee.preventDefault()
                                    }
                                    let hrefd2 = productblockshow.querySelector('.inc_product_img_main_img a').href
                                    this.setAttribute('href',hrefd2)
                                    INC_COL.methods.sendBundleClickTracking(productblockshow.getAttribute('data-main_id'));
                                    getTrackingPixel();
                                    if(window.innerWidth < 821){
                                        setTimeout(function(){
                                            window.location.href = hrefd2
                                        },2000)
                                    }
                                })
                                let inc_more_color1clone = inc_more_color1.cloneNode(inc_more_color1);
                                if(elAttColorListBlock.querySelector('.inc_more_color') == null){
                                    elAttColorListBlock.appendChild(inc_more_color1);
                                    elAttColorListBlockshow.appendChild(inc_more_color1clone);
                                    let cloneelinc_more_color = elAttColorListBlockshow.querySelector('.inc_more_color')
                                    cloneelinc_more_color.addEventListener('click',function(ec){
                                        if(window.innerWidth < 821){
                                            ec.preventDefault()
                                        }
                                        let hrefd1 = productblockshow.querySelector('.inc_product_img_main_img a').href
                                        this.setAttribute('href',hrefd1)
                                        INC_COL.methods.sendBundleClickTracking(productblockshow.getAttribute('data-main_id'));
                                        getTrackingPixel();
                                        if(window.innerWidth < 821){
                                            setTimeout(function(){
                                                window.location.href = hrefd1
                                            },2000)
                                        }
                                    })
                                }
                                return
                            }
                        }
                        clrarrac++
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null){
                            if(color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                elselcolortextshow.innerText= colorObj.text
                                elselcolortextmodal.innerText= colorObj.text + ":"
                                if(window.innerWidth < 821){
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                                
                            }else if(productColorsObj["colorArray"].length == 1){
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color',colorObj.text)
                                productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color',colorObj.text)
                                elselcolortextshow.innerText= colorObj.text
                                elselcolortextmodal.innerText= colorObj.text + ":"
                                if(window.innerWidth < 821){
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                            }
                        }
                    });
                    if(clrselflag == falseflag){
                        let ctext=productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk').getAttribute('data-color')
                        let color_colorcodesel = productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk').getAttribute('data-colorcode');
                        productblockmod.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color',ctext)
                        productblockshow.querySelector('.inc_prd_desc_att_bk').setAttribute('data-color',ctext)
                        elAttColorListBlock.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk').parentNode.classList.add('inc_active')
                        elAttColorListBlockshow.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk').parentNode.classList.add('inc_active')
                        elselcolortextshow.innerText= ctext
                        elselcolortextmodal.innerText= ctext
                        if(window.innerWidth < 821){
                            elcolortextmodal.style.backgroundColor = color_colorcodesel;
                            elcolortextshow.style.backgroundColor = color_colorcodesel;
                        }
                    }
                }
            } else {
                let colorlowertext = ""
                if(color_text != undefined){
                    colorlowertext = color_text.toLocaleLowerCase()
                }
                if (productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null) {
                    productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null) {
                    productblockshow.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk[datacolor="' + colorlowertext + '"]') != null){
                    productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                    if(productblockshow.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk[datacolor="' + colorlowertext + '"]') != null){
                        productblockshow.querySelector('.inc_prd_desc_att_color_list_item_bk .inc_prd_desc_att_color_list_item_img_bk[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                    }
                    
                    elselcolortextshow.innerText= colorlowertext
                    elselcolortextmodal.innerText= colorlowertext
                    if(productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active div') != null){
                        let color_colorcode = productblockmod.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active div').getAttribute('data-colorcode');
                        if(window.innerWidth < 821){
                            elcolortextmodal.style.backgroundColor = color_colorcode;
                            elcolortextshow.style.backgroundColor = color_colorcode;
                        }
                    }
                }
            }
           
            var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findobj,obj);

            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");
    
                    product3rdObj["att3Array"].forEach(function (sizeObj) {
                        let attSizeImgBlock3 = generate_html_tag('div', 'inc_prd_desc_att_third_list_item_img_bk');
                        let attSizeImg3 = generate_html_tag('div', 'inc_prd_desc_att_third_list_item_img');
                        
                        attSizeImgBlock3.setAttribute('blocktype', blocktype)
                        attSizeImgBlock3.setAttribute('varianttypes', 'third')
                        attSizeImgBlock3.addEventListener('click',function(){
                            let elvarianttd = this;
                            let elblktypetd=this.getAttribute('blocktype')
                            let elvtypetd=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvarianttd,elblktypetd,elvtypetd)
                        })
                        attSizeImg3.innerText = sizeObj["text"];
                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute('data-option', "3");
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        let attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
                        attSizeImgBlock3clone.querySelector('.inc_prd_desc_att_third_list_item_img_bk').addEventListener('click',function(){
                            let elvarianttd_ = this;
                            let elblktypetd_=this.getAttribute('blocktype')
                            let elvtypetd_=this.getAttribute('varianttypes')
                            INC_COL.methods.mappvariants(elvarianttd_,elblktypetd_,elvtypetd_)
                        })
                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                        elAtt3ListBlockshow.appendChild(attSizeImgBlock3clone);
                        if (third_text != undefined) {
                            if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock3.classList.add('inc_active')
                                attSizeImgBlock3clone.classList.add('inc_active')
                            }
                        }
                    });
                }
            } else {
                let thirdlowertext = third_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockmod.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockshow.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                productblockmod.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
                productblockshow.querySelector('.inc_prd_desc_att_third_list_bk .inc_prd_desc_att_size_list_item_img_bk[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
            }
            let checkzeroselflag=false
            if (productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') == null) {
                checkzeroselflag = true
            }
            if (type_of_variant == "zero" || checkzeroselflag == trueflag && type_of_variant != "color") {
                let zerolowertext = ""
                zero_text = ""
                if(checkzeroselflag == trueflag){
                    if(obj != null){
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    }else{
                        if(productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk') != null){
                            zero_text = productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk').getAttribute('data-size')
                            zerolowertext = zero_text.toLocaleLowerCase()
                        }
                    }
                }else{
                    if(obj != null){
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    }
                }
                if (productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    productblockshow.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk[datasize="' + zerolowertext + '"]') != null){
                    productblockmod.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                    productblockshow.querySelector('.inc_prd_desc_att_zero_list_bk .inc_prd_desc_att_size_list_item_img_bk[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                }
                if (productblockmod.querySelector('.inc_prd_desc_att_zero_title_txt_selected') != null) {
                    productblockmod.querySelector('.inc_prd_desc_att_zero_title_txt_selected').innerText = zero_text
                }
                if (productblockshow.querySelector('.inc_prd_desc_att_zero_title_txt_selected') != null) {
                    productblockshow.querySelector('.inc_prd_desc_att_zero_title_txt_selected').innerText = zero_text
                }
            }
            INC_COL.methods.updatecolProductBlock(productblockshow, findobj, blocktype);
            INC_COL.methods.updatecolProductBlock(productblockmod, findobj, blocktype);
            if(window.innerWidth < 821){
                if(document.querySelector(".inc_prd_bk.show_overlay") != null){
                    let allact = document.querySelectorAll('.inc_prd_desc_att_bk.inc_active')
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('body').classList.remove('inc_popup_open');
                    }
                    for (let actelm in allact) {
                        if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
                            allact[actelm].classList.remove('inc_active')
                        }
                    }
    
                    if (document.querySelector('.inc_prd_bk.show_overlay') != null) {
                        document.querySelector('.inc_prd_bk.show_overlay').classList.remove('show_overlay')
                    }
                }
            }
        }
    }
    INC_COL.methods.checkVariantSelection = function (prod_module_bk) {
        var attr_flag_color = false;
        var attr_flag_size = false;
        var attr__flag_zero = false;
        var attr__flag_third = false;

        var elSize = prod_module_bk.querySelector('.inc_prd_desc_att_size_bk.inc_active')
        var elColor = prod_module_bk.querySelector('.inc_prd_desc_att_color_bk.inc_active')
        var elattr0 = prod_module_bk.querySelector('.inc_prd_desc_att_zero_bk.inc_active')
        var elthird3 = prod_module_bk.querySelector('.inc_prd_desc_att_third_bk.inc_active')


        if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
            if (elColor.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null && elattr0.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null && elthird3.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null && elSize.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (elColor.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null && elattr0.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null && elSize.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null) {
            if (elColor.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null && elattr0.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr_flag_size = true;
                attr__flag_third = true;
            }
        } else {
            if (elColor != null) {
                if (elColor.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active') != null) {
                    attr_flag_color = true
                }
            } else {
                attr_flag_color = true
            }
            if (elattr0 != null) {
                if (elattr0.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    attr__flag_zero = true
                }
            } else {
                attr__flag_zero = true
            }
            if (elSize != null) {
                if (elSize.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    attr_flag_size = true
                }
            } else {
                attr_flag_size = true
            }
            if (elthird3 != null) {
                if (elthird3.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null) {
                    attr__flag_third = true
                }
                if (elthird3.querySelector('.inc_prd_desc_att_third_list_item_img_bk.inc_active') != null){
                    attr__flag_third = true
                }
            } else {
                attr__flag_third = true
            }
        }

        if (attr_flag_color == trueflag && attr__flag_zero == trueflag && attr__flag_third == trueflag) {
            return 1
        } else {
            if (attr_flag_size == falseflag) {
                return 2
            } else if (attr__flag_third == falseflag) {
                return 3
            } else if (attr_flag_color == falseflag) {
                return 0
            } else {
                return 0
            }
        }
    }
    INC_COL.methods.updatecolProductBlock = function (productBlockel, findObj, blockType) {
        var dataStore = INC_COL.dataStore;
        var productBlock = productBlockel;
        var productModuleBlock = productBlock.parentNode.parentNode;
        var modal_attr_bk = productModuleBlock.querySelector('.inc_prd_modal_bk')
        var zero_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-zero');
        var size_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-size');
        var color_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-color');
        var third_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-third');
        var sel_attr_text = ""
        if (zero_text != undefined) {
            findObj.zero_text = zero_text
            sel_attr_text = zero_text
        } else {
            findObj.zeroText = ""
            findObj.zero_text = ""
        }
        if (color_text != undefined) {
            findObj.color_text = color_text
            if (sel_attr_text == "") {
                sel_attr_text = color_text
            } else {
                sel_attr_text = sel_attr_text + " / " + color_text
            }
        } else {
            findObj.color_text = ""
        }
        if (size_text != undefined) {
            findObj.sizeText = size_text
            sel_attr_text = size_text
        } else {
            findObj.sizeText = ""
        }

        if (third_text != undefined) {
            findObj.thirdText = third_text
            sel_attr_text = third_text
        } else {
            findObj.thirdText = ""
        }
        if (productBlock.querySelector('.inc_prd_variant_simple_text') != null) {
            if(blockType == "sidebar" || blockType == "am"){
                productBlock.querySelector('.inc_prd_variant_simple_text').innerText = "Select Option"
            }else{
                productBlock.querySelector('.inc_prd_variant_simple_text').setAttribute('title', sel_attr_text)
                if(productModuleBlock.querySelector('.inc_prd_bk .inc_prd_add_bk.added_inc') != null){
                    productBlock.querySelector('.inc_prd_variant_simple_text').innerText = sel_attr_text
                }
            }
            if (color_text != null) {
                var PrdVarSimTxt = productBlock.querySelector('.inc_prd_variant_simple_text')
                var colorTitle = generate_html_tag('div');

                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle")
            }
        }
        var productObj = INC_COL.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            var previousSKU = "";
            previousSKU = productBlock.getAttribute('data-sku');
            productBlock.setAttribute('data-id', productObj.id);
            productBlock.setAttribute('data-sku', productObj.sku);
            productBlock.setAttribute('data-main_id', productObj.mainId);
            productBlock.setAttribute('data-bundle_id', productObj.bundleId);
            productBlock.setAttribute('data-comboId', productObj.comboId);
            productModuleBlock.setAttribute('data-id', productObj.id);
            productModuleBlock.setAttribute('data-sku', productObj.sku);
            productModuleBlock.setAttribute('data-main_id', productObj.mainId);
            productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
            productModuleBlock.setAttribute('data-comboId', productObj.comboId);

            if (document.querySelector('.inc_bd_cart_added_product_bk[data-main_id="' + productObj.mainId + '"]') != null && sel_attr_text != "") {
                var added_sum_prod = document.querySelector('.inc_bd_cart_added_product_bk[data-main_id="' + productObj.mainId + '"]')
                added_sum_prod.querySelector('.inc_bd_cart_added_product_att_color_text_bk').textContent = sel_attr_text
                added_sum_prod.querySelector('.inc_bd_cart_added_product_att_color_text_bk').setAttribute('style', '')
                added_sum_prod.querySelector('.inc_bd_cart_added_product_att_bk').setAttribute('title', sel_attr_text)
            }
            if (productModuleBlock.querySelector('.inc_prd_desc_att_size_title_txt') != null && sel_attr_text != "") {
                if(modal_attr_bk.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active') != null){
                    var optionimage = modal_attr_bk.querySelector('.inc_prd_desc_att_size_list_item_img_bk.inc_active').getAttribute('data-optionimge');
                    if(optionimage != undefined && optionimage != ""){
                        productModuleBlock.querySelector('.inc_prd_showcase_bk .inc_prd_desc_att_zero_title_txt').innerHTML = ""
                        productModuleBlock.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_zero_title_txt').innerHTML = ""
                        var optimg = generate_html_tag('img')
                        optimg.src = optionimage
                        productModuleBlock.querySelector('.inc_prd_showcase_bk .inc_prd_desc_att_zero_title_txt').appendChild(optimg)
                        productModuleBlock.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_zero_title_txt').appendChild(optimg)
                    }
                }
            }
            if (color_text != undefined && modal_attr_bk.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active div') != null) {
                var ccode = modal_attr_bk.querySelector('.inc_prd_desc_att_color_list_item_bk.inc_active div').getAttribute('data-colorcode');
                productModuleBlock.querySelector('.inc_prd_showcase_bk .inc_prd_desc_att_color_title_txt').style.backgroundColor = ccode
                productModuleBlock.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_color_title_txt').style.backgroundColor = ccode
            }

            var elImgBlock = productBlock.querySelector('.inc_prd_img_bk');
            var elImgGalleryListBlock = productBlock.querySelector('.inc_prd_img_gallery_list_bk');
            var elTitleText =  productBlock.querySelector('.inc_prd_desc_title_txt');
            var elPriceActiveText = productBlock.querySelector('.inc_prd_desc_ecirp_active_text');
            var elPriceRegularText = productBlock.querySelector('.inc_prd_desc_ecirp_regular_text');
            var elPrdHrdActivePrc = productBlock.querySelector('.inc_prd_hrd_desc_ecirp_active_text');
            var elAddText = productBlock.querySelector('.inc_prd_desc_add_text');
            var elworthPrice = productBlock.querySelector('.inc_prd_desc_ecirp_worth_text');
            var elGalleryRightArrow = productBlock.querySelector('.inc_prd_img_gallery_right_bk');
            var elGalleryleftArrow = productBlock.querySelector('.inc_prd_img_gallery_left_bk');
            var eladdbtnqtyblock = productBlock.querySelector('.inc_prd_desc_qty_add_btn_bk');
            if (productBlock.parentNode.className.indexOf('inc_prd_showcase_bk') >= 0) {
                if (blockType != "pdpcollection") {
                    eladdbtnqtyblock.classList.add('inc_active')
                }
            }
            if(productBlock.querySelector('.inc_col_prod_finish_text') != null){
                if(productObj.finish != null && productObj.finish != ""){
                    productBlock.querySelector('.inc_col_prod_finish_text').innerText = productObj.finish
                }else{
                    productBlock.querySelector('.inc_col_prod_finish_text').innerText =  ""
                }
            }
            if(productBlock.querySelector('.inc_col_prod_coverage_text') != null){
                if(productObj.coverage != null && productObj.coverage != ""){
                    productBlock.querySelector('.inc_col_prod_coverage_text').innerText = productObj.coverage
                }else{
                    productBlock.querySelector('.inc_col_prod_coverage_text').innerText = ""
                }
            }
            if(productBlock.querySelector('.inc_col_prod_undertone_text') != null){
                if(productObj.underTone != null && productObj.underTone != ""){
                    productBlock.querySelector('.inc_col_prod_undertone_text').innerText = productObj.underTone
                }else{
                    productBlock.querySelector('.inc_col_prod_undertone_text').innerText = ""
                }
            }
            if(productBlock.querySelector('.inc_col_prod_skinType_text') != null){
                if(productObj.skinType != null && productObj.skinType != ""){
                    productBlock.querySelector('.inc_col_prod_skinType_text').innerText = productObj.skinType
                }else{
                    productBlock.querySelector('.inc_col_prod_skinType_text').innerText = ""
                }
            }
            var elImgMainImg = elImgBlock.querySelector('.inc_prd_img_main_img');

            elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
            if (productBlock.parentNode.className.indexOf('inc_prd_showcase_bk') == -1) {
                elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
            }
            elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
            elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])

            elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
            elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])

            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])

            var prod_ids = productModuleBlock.getAttribute('data-main_id')
            if (document.querySelector('.inc_bd_prd_list_items_bk .inc_bd_prd_list_item_bk[data-main_id="' + prod_ids + '"]') != null) {
                var tab_img = document.querySelector('.inc_bd_prd_list_items_bk .inc_bd_prd_list_item_bk[data-main_id="' + prod_ids + '"]');
                if (tab_img.querySelector('img') != null) {
                    tab_img.querySelector('img').src = productObj["imageURL"]
                }
            }
            elImgGalleryListBlock.innerHTML = "";
            if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
                prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
            }else{
                productBlock.classList.add('inc_col_other_noimage')
            }
            if (window.innerWidth > 820) {
                if ((productObj.otherImageList == null) || productObj.otherImageList.length < 5 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                    elGalleryRightArrow.style.display = "none"
                    elGalleryleftArrow.style.display = "none"
                }
            } else {
                if (productObj.otherImageList == null || productObj.otherImageList.length < 5 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                    elGalleryRightArrow.style.display = "none"
                    elGalleryleftArrow.style.display = "none"
                }
            }
            elTitleText.querySelector('div').textContent = productObj.name
            elTitleText.querySelector('a').setAttribute('title', productObj.name)
            

            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            
            var totalsaveprc = get_discount_ecirp(productObj.regularPrice, productObj.activePrice)

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elPriceRegularText.textContent = "";
            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice);
                elPrdHrdActivePrc.innerHTML = formatter.format(activePrice);
                elPriceRegularText.innerHTML =  INC_COL.clientConfig.regularPricePrefix + formatter.format(regularPrice)
                elPrdHrdActivePrc.innerHTML =  INC_COL.clientConfig.regularPricePrefix + formatter.format(regularPrice)
                elworthPrice.innerHTML = "<span>You save</span> " + formatter.format(totalsaveprc);
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice);
                elPrdHrdActivePrc.innerHTML = formatter.format(activePrice);
            }
            if (productBlock.querySelector('.inc_prd_desc_add_text').textContent == "Added" || productBlock.querySelector('.inc_prd_desc_add_text').textContent == INC_COL.config.AddedText || productBlock.parentNode.parentNode.querySelector('.inc_prd_desc_add_text').textContent == INC_COL.config.AddedText) {
                if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
                    dataStore['bundleCartProducts'] = {};
                    INC_COL.config.pdpaddedProductList = []
                    INC_COL.config.bundle_tracking = []
                    INC_COL.config.bundle_skuPushed = []
                    INC_COL.config.dupBasket = []
                }
                dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
                if (productObj["sku"] != previousSKU) {
                    delete dataStore["bundleCartProducts"][previousSKU];
                }
            }
            var _elm = productBlock.parentNode.parentNode.querySelector('.inc_prd_modal_bk .inc_prd_desc_qty_input_text input');
            var sku = productBlock.getAttribute('data-sku');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var qty = parseInt(_elm.value);
            var pname = productBlock.querySelector('.inc_prd_desc_title_txt').textContent;
            var pprice = productBlock.querySelector('.inc_prd_desc_ecirp_active_text').textContent.replace('£', '');

            if (elAddText.parentNode.parentNode.querySelector('.inc_prd_desc_add_img.checked') != null) {
                INC_COL.methods.updatecolBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            setTimeout(function () {
                if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
                }
            }, 200);
        }
        if(blockType == "pdpcollection" && productModuleBlock.querySelector('.inc_prd_add_bk.added_inc') != null){
            productModuleBlock.querySelector('.inc_prd_variant_simple_bk').classList.add('added_inc')
        }
        if(productBlock.parentNode.classList.contains('inc_prd_showcase_bk') == trueflag && productBlock.parentNode.parentNode.classList.contains('main_product') == trueflag){
            var updtmainprod_html = productBlock.querySelector('.inc_prd_desc_bk').innerHTML
            INC_COL.methods.getMainProductDetails(updtmainprod_html)
        }
    }

    INC_COL.methods.createcolProductListItemBlock = function (productObjs) {
        var productListItemBlock = generate_html_tag('div','inc_bd_prd_list_item_bk');
        var findObj = new INC_COL.classes.FindObj({ id: productObjs.id, mainId: productObjs.mainId });
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var seemoreprodhtml='<div class="inc_bd_prd_list_item_added_bk"><div class="inc_bd_prd_list_item_added_btn_bk"><div class="inc_bd_prd_list_item_added_btn_img_bk"><div class="inc_bd_prd_list_item_added_btn_img"></div></div><div class="inc_bd_prd_list_item_added_btn_text_bk"><div class="inc_bd_prd_list_item_added_btn_text"></div></div></div></div><div class="inc_bd_prd_list_item_img_bk"><div class="inc_bd_prd_list_item_img"><img class="inc_col_lazy" data-src="'+productObj.imageURL+'" src="'+productObj.imageURL+'"></div></div><div class="inc_bd_prd_list_item_title_bk"><div class="inc_bd_prd_list_item_title_txt_bk"><div class="inc_bd_prd_list_item_title_txt"></div></div></div><div class="inc_bd_prd_list_item_ecirp_bk"><div class="inc_bd_prd_list_item_ecirp_active_bk"><div class="inc_bd_prd_list_item_ecirp_active_text_bk"><div class="inc_bd_prd_list_item_ecirp_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML=seemoreprodhtml
        productListItemBlock.querySelector('.inc_bd_prd_list_item_img img').setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_prd_desc_att_size_list_bk'), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });

            var elListMainBlock = document.querySelector('.inc_bd_prd_list_main_bk');
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll('.inc_prd_module_bk'), function (productBlock) {
                productBlock.setAttribute('style', 'display: none!important');
            });
            elListMainBlock.querySelector('.inc_prd_module_bk' + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll('.inc_bd_prd_list_item_bk'), function (pListItemBlock) {
                pListItemBlock.classList.remove("inc_active");
            });

            productListItemBlock.classList.add("inc_active");
        });

        return productListItemBlock;
    }
    INC_COL.methods.updatecolBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice,comboid) {
        var dataStore = INC_COL.dataStore;
        var listToDelete = []
        if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
            dataStore['bundleCartProducts'] = {};
            INC_COL.config.pdpaddedProductList = []
            INC_COL.config.bundle_tracking = []
            INC_COL.config.bundle_skuPushed = []
            INC_COL.config.dupBasket = []
        }

        switch (type) {
            case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
                if (INC_COL.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1) {
                    INC_COL.config.bundle_skuPushed.push(bundleCartObj["sku"])
                }
                if (INC_COL.config.pdpaddedProductList.indexOf(main_id) == -1) {
                    INC_COL.config.pdpaddedProductList.push(main_id)
                    INC_COL.config.bundle_tracking.push({
                        id: main_id,
                        bid: bundle_id,
                        combo_id:comboid,
                        pname: pname,
                        prc: pprice,
                        qty: bundleCartObj["qty"]

                    });
                }
                break;
            case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                INC_COL.config.pdpaddedProductList.remove_prod_list = function () {
                    var what, a = arguments, L = a.length, ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) !== -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };
                listToDelete[0] = main_id
                for (var i = 0; i < INC_COL.config.bundle_tracking.length; i++) {
                    var obj = INC_COL.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) !== -1) {
                            INC_COL.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC_COL.config.bundle_skuPushed.remove_prod_list = function () {
                    var what1, a1 = arguments, L1 = a1.length, ax1;
                    while (L1 && this.length) {
                        what1 = a1[--L1];
                        while ((ax1 = this.indexOf(what1)) !== -1) {
                            this.splice(ax1, 1);
                        }
                    }
                    return this;
                };
                INC_COL.config.pdpaddedProductList.remove_prod_list(main_id);
                INC_COL.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
                break;
        }

        if (INC_COL.config.pageType == "pdpcollection") this.calculateBundleTotalcol();
    }

    INC_COL.methods.calculateBundleTotalcol = function () {
        var dataStore = INC_COL.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var productListObj = dataStore.dataStoreObj;
        var duplicate_check_produ = []
        var totalRegularPrice = 0;
        var totalActivePrice = 0;
        var totalMainProduct = 0;
        var totalAddonProducts = 0;
        var totalAddonProductsCount = 0;
        var totalProductCount = 0;
        var total_qty = 0
        var total_collect_point = 0
        var mainId = INC_COL.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                                duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                                totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                                totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                                total_qty = total_qty + parseInt(bundleCartProducts[sku])

                                if (productListObj[mainProductId][childProductId]["worthPrice"] != "" && productListObj[mainProductId][childProductId]["worthPrice"] != null) {
                                    total_collect_point = total_collect_point + +(productListObj[mainProductId][childProductId]["worthPrice"] * parseInt(bundleCartProducts[sku]))
                                }
                                if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                    totalProductCount++;
                                    totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                                }
                                if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                    totalProductCount++;
                                    totalAddonProductsCount++;
                                    totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
                                }
                            }
                        }
                    }
                }
            });
        }
        var priceObj = {
            totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
            totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
            totalMainProduct: totalMainProduct,
            totalAddonProducts: totalAddonProducts,
            totalAddonProductsCount: totalAddonProductsCount,
            totalProductCount: totalProductCount,
            total_qty: total_qty,
            total_collect_point: total_collect_point
        }
        this.updateBundleCartBlockcol(priceObj);
    }

    INC_COL.methods.updateBundleCartBlockcol = function (priceObj) {
        var dataStore = INC_COL.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var totalRegularPrice = priceObj.totalRegularPrice;
        var totalActivePrice = priceObj.totalActivePrice;
        var totalMainProduct = priceObj.totalMainProduct;
        var totalAddonProducts = priceObj.totalAddonProducts;
        var totalAddonProductsCount = priceObj.totalAddonProductsCount;
        var elPdpBundleCartBlock = document.querySelector('.inc_bd_cart_bk');
        if (elPdpBundleCartBlock != null) {
            var elBundleCartAddedBlock = document.querySelector('.inc_bd_cart_added_bk')
            var elBundleCartSummaryViewBtnCount = document.querySelector('.inc_bd_cart_smry_view_btn_count')
            var elBundleCartPriceRegularText =document.querySelector('.inc_bd_cart_smry_ecirp_regular_text')
            var elBundleCartPriceActiveText = document.querySelector('.inc_bd_cart_smry_ecirp_active_text')
            var elBundleCartTitleTextcount = document.querySelector('.inc_bd_cart_title_txt')
            var elbundlesavetext = document.querySelector('.inc_bd_cart_smry_ecirp_save_text')
            var elCartsummaryMainPrdtxtBlock = document.querySelector('.inc_bd_cart_smry_main_prd_txt')
            var elCartsummaryMainPrdPrcBlock = document.querySelector('.inc_bd_cart_smry_main_prd_prc')
            var elCartsummaryAddonPrdtxtBlock = document.querySelector('.inc_bd_cart_smry_addon_prd_txt')
            var elCartsummaryAddonPrdPrcBlock = document.querySelector('.inc_bd_cart_smry_addon_prd_prc')

            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 821) {
                elBundleCartTitleTextcount.textContent = "Items you've added" 
            }
            for (var bundsku of INC_COL.config.bundle_skuPushed) {
                var elcont = bundsku
                for (var bundarray of bundleCartProductsArray) {
                    var findObj = new INC_COL.classes.FindObj({ sku: bundarray });
                    var productObj = INC_COL.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        var productId = productObj.id;
                        var prepen_elm = this.createBundleCartAddedProductBlockcol(productId, bundleCartProducts[bundarray], "pdpcollection")
                        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
                        }
                    }
                }
            }
            elBundleCartPriceRegularText.style.display = "none";
            if (totalActivePrice != totalRegularPrice) {
                elBundleCartPriceRegularText.style.display = "flex";
            }

            if (bundleCartProductsArray.length == 0) {
                setTimeout(function () {
                    onloadpdp_delete = false;
                    document.querySelectorAll('.inc_bk .inc_prd_desc_add_bk')[1].click();
                    onloadpdp_delete = true;
                }, 5);
            }
            elBundleCartPriceActiveText.innerHTML = formatter.format(totalActivePrice)
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            var totalsaveprcs = get_discount_ecirp(totalRegularPrice, totalActivePrice)
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML =  "Was " + formatter.format(totalRegularPrice)
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elbundlesavetext.innerHTML = "<span>You save </span>" + formatter.format(totalsaveprcs);
            } else {
                elbundlesavetext.innerHTML = ""
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
            }
            if (window.innerWidth < 821) {
                elCartsummaryMainPrdtxtBlock.innerHTML = "Main product ";
                elCartsummaryMainPrdPrcBlock.innerText = ""
                if (totalMainProduct != undefined) {
                    elCartsummaryMainPrdPrcBlock.innerText = formatter.format(totalMainProduct)
                }
                if (bundleCartProductsArray.length == 1) {

                    if (totalAddonProducts == 0 || totalAddonProducts == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = "No addon product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = ""
                    }
                    else {
                        elCartsummaryAddonPrdtxtBlock.innerText = "1 addon product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = elCartsummaryAddonPrdPrcBlock.innerText = "+ " + formatter.format(totalAddonProducts)
                    }
                }
                else if (bundleCartProductsArray.length > 1) {
                    if (totalMainProduct == 0 || totalMainProduct == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length + " " + "addon products selected ";
                    }
                    else {
                        if(bundleCartProductsArray.length == 2){
                            elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "addon product selected ";
                        }
                        else{
                            elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "addon products selected ";
                        }
                        
                    }

                    elCartsummaryAddonPrdPrcBlock.innerText = "+ " + formatter.format(totalAddonProducts)
                } else {
                    elCartsummaryAddonPrdtxtBlock.innerText = "No addon product selected ";
                    elCartsummaryAddonPrdPrcBlock.innerHTML = "$0.00"
                }
            }
            var elBundleCartTitleText = document.querySelector('.inc_bd_cart_title_txt')
            var elBundleCartAddBtnText = document.querySelector('.inc_bd_cart_smry_add_btn_text')
            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                elBundleCartAddBtnText.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnText.textContent = "Add to Basket"
            }

            var elPriceMainTitleText = elPdpBundleCartBlock.querySelector('.inc_bd-cart_ecirp_main_title_txt');
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector('.inc_bd-cart_ecirp_main_figure_text');
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector('.inc_bd-cart_ecirp_addon_title_txt');
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector('.inc_bd-cart_ecirp_addon_figure_text');
            var elPriceActiveText = elPdpBundleCartBlock.querySelector('.inc_bd_cart_smry_ecirp_active_text');

            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML = formatter.format(totalMainProduct)
            elPriceAddonFigureText.innerHTML = formatter.format(totalAddonProducts)
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice)

            setTimeout(function () {
                if (INC_COL.dataStore.bundleCartProducts != null) {
                    if (Object.keys(INC_COL.dataStore.bundleCartProducts).length == 0) {
                        elBundleCartAddBtnText.textContent = "ADD BUNDLE TO BASKET";
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: none;opacity: 0.5;')
                    } else {
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: auto;opacity: 1;')
                    }
                }
            }, 100);
        }

    }

    INC_COL.methods.createBundleCartAddedProductBlockcol = function (productId, qty) {
        var addedProductBlock = generate_html_tag('div','inc_bd_cart_added_product_bk')
        var findObj = new INC_COL.classes.FindObj({ id: productId });
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute('data-id', productObj.id);
        addedProductBlock.setAttribute('data-sku', productObj.sku);
        addedProductBlock.setAttribute('data-main_id', productObj.mainId);
        addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);


        var prod_module_elm = document.querySelector('.inc_bk .inc_prd_module_bk[data-main_id="' + productObj.mainId + '"]')
        var modal_attr_bk = prod_module_elm.querySelector('.inc_prd_modal_bk')
        var zero_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-zero');
        var size_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-size');
        var color_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-color');
        var third_text = modal_attr_bk.querySelector('.inc_prd_desc_att_bk').getAttribute('data-third');

        var sel_attr_text = ""
        if (color_text != undefined) {
            sel_attr_text = color_text
        }
        if (zero_text != undefined) {
            if (sel_attr_text == "") {
                sel_attr_text = zero_text
            } else {
                sel_attr_text = sel_attr_text + " / " + zero_text
            }
        }
        if (size_text != undefined) {
            sel_attr_text = sel_attr_text + " / " + size_text
        }
        if (third_text != undefined) {
            sel_attr_text = sel_attr_text + " / " + third_text
        }
        var addedsumprodhtml = '<div class="inc_bd_cart_added_product_img_bk"><div class="inc_bd_cart_added_product_img"><img src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"></div></div><div class="inc_bd_cart_added_product_title_bk"><div class="inc_bd_cart_added_product_title_txt_bk"><div class="inc_bd_cart_added_product_title_txt"><a title="'+productObj.name+'"><div style="text-transform: unset;"><span>'+qty+" "+' <small> x </small> </span>'+productObj.name+'</div></a></div></div></div><div class="inc_bd_cart_added_product_desc_qty_bk"><div class="inc_bd_cart_added_product_desc_qty_text_bk"><div class="inc_bd_cart_addeed_product_desc_qty_text">'+qty+'</div></div></div><div class="inc_bd_cart_added_product_ecirp_bk"><div class="inc_bd_cart_added_product_ecirp_text_bk"><div class="inc_bd_cart_added_product_ecirp_text">'+formatter.format(productObj.activePrice * qty)+'</div></div></div><div class="inc_bd_cart_added_product_att_bk" title="'+sel_attr_text+'"><div class="inc_bd_cart_added_product_att_color_bk"><div class="inc_bd_cart_added_product_att_color_text_bk" style="text-transform: none;">'+sel_attr_text+'</div></div><div class="inc_bd_cart_added_product_att_size_bk"><div class="inc_bd_cart_added_product_att_size_text_bk"><div class="inc_bd_cart_added_product_att_size_text"></div></div></div></div><div class="inc_bd_cart_added_product_edit_bk"><div class="inc_bd_cart_added_product_edit_text_bk"><div class="inc_bd_cart_added_product_edit_text"></div></div><div class="inc_bd_cart_added_product_edit_img_bk"><div class="inc_bd_cart_added_product_edit_img"></div></div></div>'

        addedProductBlock.innerHTML = addedsumprodhtml

        addedProductBlock.querySelector('.inc_bd_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" )

        var elEditTextBlock = addedProductBlock.querySelector(".inc_bd_cart_added_product_edit_text_bk") 
        var elEditImgBlock = addedProductBlock.querySelector(".inc_bd_cart_added_product_edit_img_bk");
        
        elEditTextBlock.addEventListener("click", function () {
            if (INC_COL.config.deviceType == "mobile") {
                if (document.querySelector('.inc_bd_prd_list_item_bk' + '[data-main_id="' + productObj.mainId + '"]') != null)
                    document.querySelector('.inc_bd_prd_list_item_bk' + '[data-main_id="' + productObj.mainId + '"]').click();
            }
            setTimeout(function () {
                document.querySelector('.inc_prd_bk' + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_prd_modal_bk').classList.add('inc_active');
                document.querySelector('html').classList.add('inc_overlay');
            }, 50);
        });
        elEditImgBlock.addEventListener("click", function () {
            document.querySelector('.inc_prd_bk' + '[data-id="' + productObj.id + '"]').querySelector('.inc_prd_desc_add_bk').click();
        });
        return addedProductBlock;
    }

    INC_COL.methods.clear = function () {
        if (document.querySelector('.inc_bk') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_bk'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.sidebar_outer') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.inc_sidebar_overlay_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_sidebar_overlay_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }
    INC_COL.methods.addProductToCart = function( findObjs, qty, productBlock, add_btn_click,  _add_prod_im, btn_addtocart, newbtntext) {
        INC_COL.clientConfig.OOS = []
        var findObj = new INC_COL.classes.FindObj(findObjs);
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);
        var data0 = {};
        var formData = [];
        document.querySelector('body').classList.add('adding_product_inc')
        data0["_dyncharset"] = 'UTF-8';
        data0["_dynSessConf"] = document.querySelector('input[name=_dynSessConf]').value;
        data0["/atg/commerce/order/purchase/CartModifierFormHandler.quantity"] = qty;
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.quantity"]='';
        data0["/atg/commerce/order/purchase/CartModifierFormHandler.catalogRefIds"] = productObj.mainsku;
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.catalogRefIds"]='';
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.giftlistId"]='';
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.giftlistItemId"]='';
        data0["/atg/commerce/order/purchase/CartModifierFormHandler.productId"] = productObj.mainId;
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.productId"]='';
        data0["/atg/commerce/order/purchase/CartModifierFormHandler.addItemToOrder"] = INC_COL.config.AddtocartText;
        data0["_D:/atg/commerce/order/purchase/CartModifierFormHandler.addItemToOrder"]='';
        data0["_DARGS"] = '/catalog/fragments/ajaxForms.jsp.addToCart';
        
        formData.push(data0);
    
        window.jQuery.ajax({
            type: "POST",
            url: INC_COL.config.addToBasketURL,
            data: formData[0],
    
            error: function() {
                if (INC_COL.config.pageType == "cartPage") {
                    document.querySelector("html").classList.remove("inc_overlay");
                    add_btn_click.innerText = "Not added";
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                    window.location.reload();
                }
                document.querySelector('body').classList.remove('adding_product_inc')
                add_btn_click.innerText = "Not Added";
                setTimeout(function() {
                    add_btn_click.innerText = "Not Added";
                    Array.prototype.forEach.call(add_btn_click, function(el) {
                        el.innerText = "Not Added";
                    });
                    if (btn_addtocart != undefined) {
                        btn_addtocart.parentNode.parentNode.setAttribute("style","pointer-events: auto;opacity: 1;");
                    }
                    INC_COL.config.disablebtn = true;
                }, 0);
            },
            success: function(data) {
                if(data["data"] != undefined){
                    if(data["data"]["outOfStock"] == trueflag || data["data"]["success"] == falseflag){
                        add_btn_click.innerText = "Out of stock";
                        INC_COL.clientConfig.OOS.push(productObj.mainId)
                    }
                }
                getTrackingPixel();
    
                INC_COL.config.disablebtn = true;
                document.querySelector("html").classList.add("inc_overlay");
    
                if(document.querySelector('.inc_sidebar_modal_block')!= null){
                    document.querySelector('.inc_sidebar_modal_block').scrollTo(0,0)
                }
    
                add_btn_click.innerText = INC_COL.config.AddtocartText;
                btn_addtocart.innerText = INC_COL.config.AddtocartText;
                if(newbtntext != undefined){
                    if(newbtntext.classList.contains('config') == trueflag){
                        newbtntext.innerHTML = "Select options";
                    }else{
                        newbtntext.innerHTML = INC_COL.config.AddtocartText;
                    }
                }
                
                if (INC_COL.config.pageType != "cartPage"){
                    INC_COL.methods.addProductToSidebarCart( findObj, qty, productBlock, null,btn_addtocart);
                }
                INC_COL.config.pdpaddedProductList.push(productObj.mainId)
                INC_COL.config.sidebarremovedprod.push(productObj.mainId)
                    
                if (INC_COL.config.pageType == "cartPage" || INC_COL.config.recommendation) {
                    if(document.querySelector('.inc_product_modal_block.inc_active') != null){
                        document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    }
                    document.querySelector('html').classList.remove('inc_overlay')
                    productBlock.querySelector('.inc_product_desc_add_text').innerText = INC_COL.config.AddedText;
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                }
                setTimeout(function () {
                    if (INC_COL.config.pageType == "cartPage") {
                        document.querySelector("html").classList.remove("inc_overlay");
                        add_btn_click.innerText = INC_COL.config.AddtocartText;
                        window.location.reload();
                    }
                }, 1000);
                setTimeout(function () {
                    add_btn_click.innerText = INC_COL.config.AddtocartText;
                    Array.prototype.forEach.call(add_btn_click, function (el) {
                        el.innerText = INC_COL.config.AddText;
                    });
                    if (btn_addtocart != undefined) {
                        if (btn_addtocart.parentNode.parentNode != null) btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                    }
                    INC_COL.config.disablebtn = true
                }, 2000);
                if (INC_COL.config.pageType != "cartPage") {
                    setTimeout(function () {
                        var allprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
                        if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1){
                            if(document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null){
                                var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                                if(remcat != null){
                                    remcat.parentNode.removeChild(remcat)
                                    if(document.querySelector('.inc_recommended_tabs_list_item_block') == null){
                                        INC_COL.methods.hideSidebar()
                                        window.location.href = INC_COL.clientConfig.checkoutLink; 
                                    }
                                    if(document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1){
                                        if (productBlock != null && productBlock.parentNode!=null ) {
                                            productBlock.parentNode.removeChild(productBlock);
                                        }
                                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                        }
                                    }else{
                                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                        }
                                        document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
                                    }
                                }
                            }
                        }else{
                            if (productBlock != null) {
                                productBlock.parentNode.removeChild(productBlock);
                            }
                            document.querySelector('body').classList.remove('adding_product_inc');
                        }
                        if(document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') == null){
                            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                document.querySelector('.inc_recommended_tabs_list_item_block').click()
                            }
                        }
                        document.querySelector('body').classList.remove('adding_product_inc')
                        setTimeout(function () {
                            if(document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') == null){
                                if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                }
                            }
                        },500)
                    },500)
                }
            }
        });
    
        var pageType = "";
        switch (INC_COL.config.pageType) {
            case "pdp":
                pageType = "107";
                break;
            case "productList":
                pageType = "101";
                break;
            case "cartPage":
                pageType = "103";
                break;
            case "ticket":
                pageType = "103";
                break;
            case "other":
                pageType = "101";
                break;
        }
        var eventDataObj = {};
        if (INC_COL.config.pageType == "cartPage") {
            eventDataObj["bundle_data"] = {
                id: productObj.bundleId,
                product_ids: [productObj.bundledProductId, productObj.mainId],
                product_id: productObj.mainId,
            };
        } else {
            eventDataObj["bundle_data"] = {
                id: productObj.bundleId,
                product_ids: [productObj.bundledProductId, productObj.mainId],
                product_id: productObj.bundledProductId,
            };
        }
        getTrackingPixel();
        INC_COL.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
    };
    INC_COL.methods.addBundleToCartcol = function (btn_cart) {
        if(document.querySelector('.dth-add-to-basket.-js-add-to-basket') != null){
            document.querySelector('.dth-add-to-basket.-js-add-to-basket').style.opacity="0"
        }
        INC_COL.clientConfig.OOS = []
        var storeId = window.WCParamJS.storeId;
        var catalogId = window.WCParamJS.catalogId;
        var langId = -1;
        var inventoryValidation = true;
        var pahDoInventory = 'N';
        var requesttype = 'ajax';

        var addProductURL = INC_COL.config.addToBasketURL;
        var dataStore = INC_COL.dataStore;
        var mainProductId = document.querySelector('.inc_prd_info_main_bk').getAttribute('data-main_id');
        var data0 = {};
        var data1 = {};
        var data2 = {};
        var data3 = {};
        var data4 = {};
        var data5 = {};
        var formData = []
        var count_pr_to_add = 0
        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            var findObj = new INC_COL.classes.FindObj({ id: bundleCartProduct });
            var productObj = INC_COL.dataStore.methods().getProductById(findObj);
            if (count_pr_to_add == 0) {
                data0["storeId"] = storeId;
                data0["catalogId"] = catalogId;
                data0["langId"] = langId;
                data0["orderId"] ='.';
                data0["partNumberWR"] = productObj.mainsku;
                data0["calculationUsage"] = "-1,-2,-5,-6,-7";
                data0["inventoryValidation"] = inventoryValidation;
                data0["pahDoInventory"] = pahDoInventory;
                data0["catEntryId"] = productObj.internalCategoryId;
                data0["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data0["requesttype"] = requesttype;
                formData.push(data0)
            } else if (count_pr_to_add == 1) {
                data1["storeId"] = storeId;
                data1["catalogId"] = catalogId;
                data1["langId"] = langId;
                data1["partNumberWR"] = productObj.mainsku;
                data1["inventoryValidation"] = inventoryValidation;
                data1["pahDoInventory"] = pahDoInventory;
                data1["catEntryId"] = productObj.internalCategoryId;
                data1["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data1["requesttype"] = requesttype;
                formData.push(data1)
            } else if (count_pr_to_add == 2) {
                data2["storeId"] = storeId;
                data2["catalogId"] = catalogId;
                data2["langId"] = langId;
                data2["partNumberWR"] = productObj.mainsku;
                data2["inventoryValidation"] = inventoryValidation;
                data2["pahDoInventory"] = pahDoInventory;
                data2["catEntryId"] = productObj.internalCategoryId;
                data2["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data2["requesttype"] = requesttype;
                formData.push(data2)
            } else if (count_pr_to_add == 3) {
                data3["storeId"] = storeId;
                data3["catalogId"] = catalogId;
                data3["langId"] = langId;
                data3["partNumberWR"] = productObj.mainsku;
                data3["inventoryValidation"] = inventoryValidation;
                data3["pahDoInventory"] = pahDoInventory;
                data3["catEntryId"] = productObj.internalCategoryId;
                data3["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data3["requesttype"] = requesttype;
                formData.push(data3)
            } else if (count_pr_to_add == 4) {
                data4["storeId"] = storeId;
                data4["catalogId"] = catalogId;
                data4["langId"] = langId;
                data4["partNumberWR"] = productObj.mainsku;
                data4["inventoryValidation"] = inventoryValidation;
                data4["pahDoInventory"] = pahDoInventory;
                data4["catEntryId"] = productObj.internalCategoryId;
                data4["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data4["requesttype"] = requesttype;
                formData.push(data4)
            } else if (count_pr_to_add == 5) {
                data5["storeId"] = storeId;
                data5["catalogId"] = catalogId;
                data5["langId"] = langId;
                data5["partNumberWR"] = productObj.mainsku;
                data5["inventoryValidation"] = inventoryValidation;
                data5["pahDoInventory"] = pahDoInventory;
                data5["catEntryId"] = productObj.internalCategoryId;
                data5["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
                data5["requesttype"] = requesttype;
                formData.push(data5)
            }
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart_col(formData, btn_cart, mainProductId, addProductURL)
            }
        });
        add_to_cart_tracking_multiple_col()
    }
    function ajax_add_to_cart_col(formData, btn_cart, _mainProductId, addurl) {
        INC_COL.clientConfig.OOS = []
        INC_COL.clientConfig.OOS_MESG = []
        callprodA()
        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[0],
                dataType: 'json',
                error: function () {
                    checkform(formData,'1')
                },
                success: function () {
                    checkform(formData,'1')
                }
            });
        }
    
        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[1],
                error: function () {
                    checkform(formData,'2')
                },
                success: function () {
                    checkform(formData,'2')
                }
            });
        }
    
        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[2],
                error: function () {
                    checkform(formData,'3')
                },
                success: function () {
                    checkform(formData,'3')
                }
            });
        }
        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[3],
                error: function () {
                    checkform(formData,'4')
                },
                success: function () {
                    checkform(formData,'4')
                }
            });
        }
        function callprodE() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[4],
                error: function () {
                    checkform(formData,'5')
                },
                success: function () {
                    checkform(formData,'5')
                }
            });
        }
        function callprodF() {
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: formData[5],
                error: function () {
                    INC_COL.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        window.location.href = INC_COL.clientConfig.checkoutLink;
                    }else{
                        INC_COL.methods.showSidebar();
                        INC_COL.methods.updateSidebarColBlock(INC_COL.dataStore);
                    }
                },
                success: function () {
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        window.location.href = INC_COL.clientConfig.checkoutLink;
                    }else{
                        INC_COL.methods.showSidebar();
                        INC_COL.methods.updateSidebarColBlock(INC_COL.dataStore);
                    }
                }
            });
        }
        function checkform(_formdata,ind){
            if (_formdata[ind] == undefined) {
                loadsidebarfn(btn_cart)
            }
            if (_formdata[ind] != undefined) {
                if(ind == '1'){
                    callprodB()
                }else if(ind == '2'){
                    callprodC()
                }else if(ind == '3'){
                    callprodD()
                }else if(ind == '4'){
                    callprodE()
                }else if(ind == '5'){
                    callprodF()
                }
            }
        }
    }
    function loadsidebarfn(btn_cart){
        INC_COL.config.disablebtn = true
        getTrackingPixel()
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        document.querySelector('.inc_bd_cart_smry_add_btn_bk').classList.remove('inc_loading')
        document.querySelector('.inc_bd_cart_smry_add_btn_text').classList.remove('inc_loading')
        if (document.querySelector('.inc_sidebar_recommended_block .inc_prd_module_bk') == null) {
            window.location.href = INC_COL.clientConfig.checkoutLink;
        }else{
            INC_COL.methods.showSidebar();
            INC_COL.methods.updateSidebarColBlock(INC_COL.dataStore);
        }
    }
    function add_to_cart_tracking_multiple_col() {
        var eevent_type = "collection_add_to_cart";
        var productIdsforTracking = []

        var pageType = "102";
        for (var trkdata of INC_COL.config.bundle_tracking) {
            if(trkdata.id != null){
                productIdsforTracking.push(trkdata.id)
            }
        }
        var sh_type = ""
        if(window.location.href.indexOf('incgs=1') >= 0){
            sh_type = "1"
        }else if(window.location.href.indexOf('incgs=2') >= 0){
            sh_type = "2"
        }else if(window.location.href.indexOf('incgs=3') >= 0){
            sh_type = "3"
        }
        if(INC_COL.config.pageType == "plpcollection"){
            sh_type = "2"
        }
        var all_data = [{"id":INC_COL.config.bundle_tracking[0].combo_id,"product_ids":productIdsforTracking,"incgs":sh_type}];
        var data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "combo_data": all_data
                },
                "page_type": pageType.toString(),
                "event_type": eevent_type,
                "method": "track",
                "platform": "",
                "token": INC_COL.config.clientToken
            }))),
            "vid": INC_COL.config.ivid,
            "time": getCurrentFormattedTimecol(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));
    }

    function makeTrackingApiCall(eventdata) {
        var p_url = '//optimizedby.increasingly.co/ImportData';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    if (xhr.responseText != "" && xhr.responseText != null) {
                        console.log(xhr.responseText)
                    } 
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }
    function getCurrentFormattedTimecol() {
        var d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    }
    INC_COL.methods.trackingEventscol = function (eventType, eventDataObj, pageType) {
        var importEventDataObj = {};
        var importDataObj = {};
        importEventDataObj["event_data"] = eventDataObj;
        var rt_type = "";
        if(window.location.href.indexOf('incgs=1') >= 0){
            rt_type = "4"
        }else if(window.location.href.indexOf('incgs=2') >= 0){
            rt_type = "5"
        }else if(window.location.href.indexOf('incgs=3') >= 0){
            rt_type = "6"
        }
        switch (eventType) {
            case "productPageVisit":
                importEventDataObj["event_type"] = "product_page_visit";
                importEventDataObj["method"] = "track";
                break;
            case "catalogProductView":
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
                break;
            case "bundleProductClickTracking":
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["rt"] = rt_type;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                INC_COL.methods.sendAffiliateRequest();
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC_COL.clientConfig.statusLoggedIn == trueflag) ? "1" : "0";
                importEventDataObj["method"] = "track";
                INC_COL.methods.sendAffiliateRequest();
                break;
        }

        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = INC_COL.config.clientToken;
        importEventDataObj["collection"] = '1';
        importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
        importDataObj["uri"] = window.location.href;
        importDataObj["vid"] = INC_COL.config.ivid;
        INC_COL.methods.sendTrackingEventscol(importDataObj);
    }

    INC_COL.methods.sendTrackingEventscol = function (importDataObj) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = INC_COL.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }

        xhr.send(JSON.stringify(importDataObj));
    }

    INC_COL.methods.sendAffiliateRequest = function () {
        var url = INC_COL.config.affiliateURL;
        var oImg = document.createElement("img");
        oImg.setAttribute('id', 'cstracking')
        oImg.setAttribute('src', url);
        oImg.setAttribute('height', '1px');
        oImg.setAttribute('width', '1px');
        oImg.setAttribute('style', 'display:none')
        document.body.appendChild(oImg);
    }

    INC_COL.methods.addVisitorID = function () {
        function generateUniqueINCVisitorId(len, bits) {
            var bits1 = bits || 36;
            var outStr = "";
            var newStr;
            while (outStr.length < len) {
                newStr = generateRandomString(bits1).toString().slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
            }
            return outStr;
        }
        var ivid = "";
        if(readCookie('ivid') != undefined){
            ivid = readCookie('ivid')
        }
        var clientdomain = window.location.host
        var arr = clientdomain.split(".");
        var d = new Date();
        var expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if(arr == 'com'){
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }else{
            arr.shift();
            clientdomain = arr.join(".");
            if(arr == 'com'){
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }
        INC_COL.config.ivid = ivid;
        return ivid;
    }

    document.onclick = clickListenercol;

    function clickListenercol(e) {
        var clickedElement = e.target;
        if (clickedElement != null) {
            try {
                if (clickedElement.className == "inc_prd_modal_bk inc_active") {
                    document.querySelector('body').classList.remove('inc_popup_open');
                    if (document.querySelector('.inc_col_sidebar_modal_bk.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if (clickedElement.querySelector('.inc_prd_hdr_title_bk') != null){
                        clickedElement.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
                    }
                    if (clickedElement.querySelector('.inc_product_hdr_title_bk_1') != null){
                        clickedElement.querySelector('.inc_product_hdr_title_bk_1').classList.remove('inc_active');
                    }
                    
                    clickedElement.classList.remove('inc_active')
                }
                if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
                    if(document.querySelector('.inc_header_continue_img') != null){
                        document.querySelector('.inc_header_continue_img').click()
                    }
                }
                if(clickedElement.classList.contains('quick_view_open') == trueflag){
                    if(document.querySelector('.inc_col_details_mobile_quick_view.quick_view_active') != null){
                        document.querySelector('.inc_col_details_mobile_quick_view.quick_view_active .prod_quick_view_close').click()
                    }
                }
                if (clickedElement.className == "inc_col_empty_popup") {
                    if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_col_sidebar_modal_bk.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('html').classList.remove('inc_popup_open');
                        if(document.querySelector('body.active-gnav, body.product-shades-sidebar-active') == null){
                            // document.querySelector('body').setAttribute('style', 'overflow:auto')
                        }
                    }
                    if (clickedElement.parentNode.querySelector('.inc_prd_desc_att_bk').classList.contains('inc_active')) {
                        clickedElement.parentNode.querySelector('.inc_prd_desc_att_bk').classList.remove('inc_active')
                    }
                }
                if (document.querySelector('.inc_prd_modal_bk.inc_active') != null) {
                    if (clickedElement.parentNode.classList == "inc_prd_desc_att_color_list_item_img" || clickedElement.classList == "inc_prd_desc_att_color_list_item_img" || clickedElement.parentNode.classList == "inc_prd_desc_att_zero_list_bk" || clickedElement.classList == "inc_prd_desc_att_zero_list_bk") {
                        document.querySelector('.inc_prd_desc_att_bk .show_dropdown').classList.remove('show_dropdown')
                    }
                }
                if(clickedElement != null){
                    if (clickedElement.classList == "inc_prd_desc_add_img" && document.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_bk .show_dropdown') != null) {
                        if (window.innerWidth > 1300) {
                            document.querySelector('.inc_prd_modal_bk .inc_prd_desc_att_bk .show_dropdown').classList.remove('show_dropdown');
                        }
                    }
                    if (clickedElement.className == "inc_prd_hdr_img") {
                        document.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
                        document.querySelector('.inc_product_hdr_title_bk_1').classList.remove('inc_active');
                        document.querySelector('body').classList.remove('inc_popup_open');
                    }
                    if (clickedElement.className == "sidebar_outer sidebar_outer_active" || clickedElement.classList.contains('js-gnav-header-formatter__bg-full-width') == trueflag || clickedElement.classList.contains('gnav-header-formatter__close-icon') == trueflag || clickedElement.classList.contains('js-header-gnav-cart__close') == trueflag) {
                        if(document.querySelector('.inc_col_hdr_continue_img') != null){
                            document.querySelector('.inc_col_hdr_continue_img').click()
                        }
                    }
                    if (clickedElement.className == "inc_bd_cart_overlay_bk active") {
                        document.querySelector('.inc_bd_cart_title_img_bk').click()
                    }
                    //document.querySelector('.prod_quick_view_close').click()
                    if (clickedElement.className == "inc_col_promo_popup inc_active") {
                        document.querySelector('html').classList.remove('inc_overlay_promo');
                        clickedElement.classList.remove('inc_active')
                        if (document.querySelector('.inc_col_sidebar_modal_bk.inc_active') != null) {
                            document.querySelector('.inc_col_sidebar_modal_bk.inc_active').classList.remove('overflow_visible')
                        }
                    }
                    if (clickedElement.parentNode != null) {
                        if (clickedElement.className != "inc_prd_desc_att_color_title_txt_bk" && clickedElement.className != "inc_prd_desc_att_color_title_txt_selected" && clickedElement.parentNode.className != "inc_prd_desc_att_color_title_txt_bk" && clickedElement.className != "inc_prd_desc_att_zero_title_txt" && clickedElement.className != "inc_prd_desc_att_zero_title_txt_bk" && clickedElement.className != "inc_prd_desc_add_bk" && clickedElement.className != "inc_prd_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_prd_desc_att_zero_title_txt_selected" && clickedElement.classList.contains('inc_prd_desc_att_color_list_item_img') != trueflag && clickedElement.classList.contains('inc_prd_desc_att_zero_title_txt_selected') != trueflag) {
                            if (document.querySelector('.inc_prd_desc_att_bk .show_dropdown') != null) {
                                document.querySelector('.inc_prd_desc_att_bk .show_dropdown').classList.remove('show_dropdown')
                            }
                        }


                        if (clickedElement.className == "inc_prd_desc_color_list_mobile_overlay_bk" || clickedElement.className == "inc_prd_desc_color_list_hdr_img" || clickedElement.className == "inc_prd_desc_colour_list_add_btn" || clickedElement.className == "inc_prd_desc_att_zero_list_mobile_overlay_bk" || clickedElement.className == "inc_prd_desc_att_zero_list_hdr_img" || clickedElement.className == "inc_prd_desc_att_zero_list_add_btn") {
                            if (window.innerWidth < 821) {
                                document.querySelector('.inc_prd_desc_att_bk .show_dropdown').classList.remove('show_dropdown')
                                document.querySelector('html').classList.remove('inc_overlay');
                                document.querySelector('body').classList.remove('inc_popup_open');
                            }

                        }
                    }
                    if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_prd_modal_bk.inc_active') == null) {
                        if (document.querySelector('.inc_col_sidebar_modal_bk.inc_active') != null) {
                            if (document.querySelector('.inc_colcart_added_product_bk.remove_product_conf_modal') == null) {
                                if (document.querySelector('.inc_col_promo_popup.inc_active') == null) {
                                    document.querySelector('.inc_col_sidebar_modal_bk.inc_active').classList.remove('overflow_visible')
                                }
                            }
                        }
                    } else if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_col_sidebar_modal_bk .inc_prd_modal_bk.inc_active') != null) {
                        document.querySelector('.sidebar_outer.sidebar_outer_active .inc_col_sidebar_modal_bk').classList.add('overflow_visible')
                        document.querySelector('body').classList.add('inc_popup_open');
                    }
                    if (clickedElement.className != "inc_prd_details_prod_bk" && clickedElement.className != "inc_prd_variant_simple_bk" && clickedElement.className != "inc_prd_variant_simple_text config" && clickedElement.className != "inc_prd_desc_variant_popup_close_bk" && clickedElement.className != "inc_prd_desc_add_title_txt_bk" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_col_hdr_bk active" && clickedElement.className != "inc_prd_desc_att_color_list_item_img_bk active" && clickedElement.className != "inc_prd_desc_att_bk attributes_avail active" && clickedElement.className != "inc_prd_desc_qty_bk active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_prd_desc_qty_bk" && clickedElement.className != "inc_prd_desc_att_color_list_item_img_bk" && clickedElement.className != "inc_col_hdr_bk" && clickedElement.className != "select_option_inc_col_title" && clickedElement.className != "inc_prd_desc_att_color_list_item_img" && clickedElement.className != "inc_prd_desc_att_color_title_txt" && clickedElement.className != "inc_prd_desc_att_color_list_bk" && clickedElement.classList.contains('inc_prd_desc_att_bk') == falseflag && clickedElement.className != "select_option_bk" && clickedElement.className != "inc_prd_desc_att_color_title_txt_bk" && clickedElement.className != "inc_prd_desc_att_variant_text" && clickedElement.className != "inc_prd_desc_add_img" &&clickedElement.className != "inc_prd_desc_qty_up_btn" && clickedElement.className != "inc_prd_desc_qty_down_btn") {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains('variantoption') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_size_list_item_img_bk') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_color_list_bk') == falseflag && clickedElement.className != "inc_prd_desc_add_img checked" && clickedElement.classList.contains('inc_prd_desc_add_bk') == falseflag && clickedElement.classList.contains('inc_bd_cart_added_product_edit_img') == falseflag && clickedElement.className != "inc_prd_desc_att_color_title_bk" && clickedElement.className != "inc_prd_desc_qty_up_btn" && clickedElement.className != "inc_prd_desc_qty_down_btn" && clickedElement.classList.contains('inc_prd_desc_att_color_bk') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_color_list_item_bk') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_zero_title_txt_selected') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_zero_title_txt') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_size_list_item_img') == falseflag && clickedElement.classList.contains('inc_prd_desc_att_color_list_item_img') != trueflag) {
                                var allact = document.querySelectorAll('.inc_prd_desc_att_bk.inc_active')

                                if (document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_col_sidebar_modal_bk.inc_active') == null) {
                                    document.querySelector('html').classList.remove('inc_overlay');
                                    document.querySelector('body').classList.remove('inc_popup_open');
                                }
                                for (var actel of allact) {
                                    actel.classList.remove('inc_active')
                                }

                                if (document.querySelector('.inc_prd_bk.show_overlay') != null) {
                                    document.querySelector('.inc_prd_bk.show_overlay').classList.remove('show_overlay')
                                }
                            }
                        }
                    }
                }
                if(clickedElement.className == "inc_prd_modal_bk inc_active"){
                    clickedElement.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
                    clickedElement.classList.remove('inc_active')
                    document.querySelector('html').classList.remove('inc_overlay');
                }

                
                if(clickedElement.className == "inc_prd_hdr_img"){
                    document.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active');
                }
            
                if(clickedElement.className == "inc_pdp_bd_cart_overlay_bk active"){
                    document.querySelector('.inc_bd_cart_title_img_bk').click()
                }
                if(clickedElement.className == "inc_prd_bk configurable show_overlay"){
                    clickedElement.classList.remove('show_overlay')
                    clickedElement.querySelector('.inc_prd_desc_att_bk').classList.remove('inc_active')
                    document.querySelector('html').classList.remove('inc_overlay');
                }

                if(clickedElement.className == "sidebar_outer active"){
                    document.querySelector('.inc_hdr_continue_img').click()
                }
                setTimeout(function(){
                    var inc_col_prod_img1 =  document.querySelector('.inc_prd_modal_bk.inc_active .inc_prd_img_main_img img')
                    if(inc_col_prod_img1){
                        inc_col_prod_img1.setAttribute('style','left:0 !important;position: relative;')
                    }
                },2000)
            } catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", 'JS Error on ');
                formData.append("Message", err + 'Error Stack' + err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                xhr.send(formData);
            }
        }
    }


    setTimeout(function () {
        if (window.innerWidth < 821) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    console.log("PORTRAIT")
                    INC_COL.config.deviceMode = "PORTRAIT"
                    var inc_bk_rem1 = document.querySelector(".inc_bk");
                    if (inc_bk_rem1 != null) {
                        inc_bk_rem1.parentNode.removeChild(inc_bk_rem1);
                    }
                    onloadpdp = false
                    var sidebar_reme = document.querySelector(".inc_col_sidebar_modal_bk");
                    if (sidebar_reme != null) {
                        sidebar_reme.parentNode.removeChild(sidebar_reme);
                    }
                    var over_rem = document.querySelector(".inc_col_sidebar_overlay_bk");
                    if (over_rem != null) {
                        over_rem.parentNode.removeChild(over_rem);
                    }
                    setTimeout(function () {
                        INC_COL.init();
                    },0)

                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    console.log("LANSCAPE")
                    INC_COL.config.deviceMode = "LANSCAPE";
                    onloadpdp = false
                    var inc_bk_rem = document.querySelector(".inc_bk");
                    if (inc_bk_rem != null) {
                        inc_bk_rem.parentNode.removeChild(inc_bk_rem);
                    }
                    var sidebar_rem = document.querySelector(".inc_col_sidebar_modal_bk");
                    if (sidebar_rem != null) {
                        sidebar_rem.parentNode.removeChild(sidebar_rem);
                    }
                    var over_remove = document.querySelector(".inc_col_sidebar_overlay_bk");
                    if (over_remove != null) {
                        over_remove.parentNode.removeChild(over_remove);
                    }
                    setTimeout(function () {
                        INC_COL.init();
                    }, 10)
                }
            }, {passive: true});
            document.addEventListener("touchmove", checkScrollDirection, false);
        }
        function checkScrollDirection() {
            if( inc_col_isOnScreenCol( window.jQuery( '.inc_bk'))){
                if (document.querySelector('.inc_bk') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display="none"
                    }
                }
            }else{
                if (document.querySelector('.inc_bk') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display="block"
                    }
                }
            }	
        }
        window.addEventListener('resize', function() {
            if (document.querySelector('.inc_bk .inc_bd_prd_list_main_bk') != null) {
                document.querySelector('.inc_bk .inc_bd_prd_list_main_bk').setAttribute("style", "margin-left:0");
                var prd_length = 2
                if (window.innerWidth > 1185) {
                    prd_length = 3
                }
                if (document.querySelectorAll('.inc_bk .inc_prd_module_bk').length > prd_length && document.querySelector('.inc_bk .inc_bd_prd_left-btn_bk') != null) {
                    document.querySelector('.inc_bk .inc_bd_prd_left-btn_bk').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_bk .inc_bd_prd_right-btn_bk').setAttribute("style", "pointer-events: auto;opacity:1");
                    document.querySelector('.inc_bd_prd_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_bd_prd_right-btn_img').setAttribute('style', 'opacity:1')
                }
                INC_COL.clientConfig.slidevalue = 0
                INC_COL.clientConfig.offset = 0
                INC_COL.clientConfig.slidevalue = 0
            }
        }, {passive: true})
    }, 3000)
    function inc_col_isOnScreenCol(elem) {
        if( elem.length == 0 ) {
            return;
        }
        var $window = window.jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = window.jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
    function slideToCollection(_id, _n, elm, type_of) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
            var nn2 = -1
            var indslid=INC_COL.config.inc_slideIndex += nn2
            inc_showSlidescol(indslid, nn2, elm);
        } else {
            var nn1 = 1
            var indslid1=INC_COL.config.inc_slideIndex += nn1
            inc_showSlidescol(indslid1, nn1, elm);
        }
    }

    function inc_showSlidescol(n, _ind, elm) {
        var showcase_other_img_list = elm.querySelector('.inc_prd_showcase_bk .inc_prd_img_main_img a')
        var showcase_dots=elm.querySelectorAll('.inc_prd_showcase_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk')
        var modal_dots=elm.querySelectorAll('.inc_prd_modal_bk .inc_prd_img_gallery_list_bk .inc_prd_img_gallery_list_item_bk')
        var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
        var additional_img=[]
        additional_img = otherImg_list.split(',');
        if (n > additional_img.length) {
            INC_COL.config.inc_col_slideIndex = 1
        }
        if (n < 1) {
            INC_COL.config.inc_col_slideIndex = additional_img.length
        }
        
        for (var i = 0; i < showcase_dots.length; i++) {
            showcase_dots[i].classList.remove('inc_active')
            if(modal_dots[i] != undefined){
                modal_dots[i].classList.remove('inc_active')
            }
        }
    }
    // SWIPE FEATURE
    var xDown = null;
    var yDown = null;

    function add_swipee(element) {
        element.addEventListener('touchstart', handleTouchStartCol, {passive: true});
        element.addEventListener('touchmove', handleTouchMoveCol, {passive: true});
    }
    function handleTouchStartCol(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMoveCol(evt) {
        if (!xDown || !yDown) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        var prod_card= null;
        if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) { 
            if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
                if (xDiff > 0) {
                    prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideToCollection(null,0,prod_card,"left")
                } else { /* right swipe */
                    prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideToCollection(null,0,prod_card,"right")
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
    });
    function attribute_listing_col(valueArray) {
        var items = valueArray
        var sorting = ["Colour","Color","Number of SIM", "Device", "Memory","Sim", "Connectivity",
        "Connectivity", "QLED models", "size"];
        var result = []
        sorting.forEach(function (key) {
            var found = false;
            items = items.filter(function (item) {
                if (!found && item.attributeCode == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else
                    return true;
            })
        })
        return result;
    }
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        decode: function (e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = Base64._utf8_decode(t);
            return t
        },
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
        },
        _utf8_decode: function (e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    }
    function getTrackingPixel() {
        var url = ''
        /*-------------------Tracking with Image Pixel---------------------------*/
        if(url != ''){
            var oImg = document.createElement("img");
            oImg.setAttribute('id', 'cstracking')
            oImg.setAttribute('src', url);
            oImg.setAttribute('height', '1px');
            oImg.setAttribute('width', '1px');
            oImg.setAttribute('style', 'display:none')
            document.body.appendChild(oImg);
        }
        /* -----------------------------------------------------------------------*/
    }

    function get_discount_ecirp(p_original_ecirp, p_sale_ecirp) {
        return parseFloat(+p_original_ecirp - +p_sale_ecirp)
    }

    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(+p_original_price - +p_sale_price)
    }

    function get_discount_price_percentage(p_original_price, p_sale_price) {
        return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    }


    INC_COL.methods.irbReq_is_categ_recomendation = function() {
        INC_COL.config.recommendation = true
        var elementName = "catalog_product_view";
        var productId = INC_COL.config.pdpPID;
        var apiKey = INC_COL.config.clientToken;
        var irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + INC_COL.config.ivid +
            "&rc=" + "1" 
        var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC_COL.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if (INC_COL.config.pageType == "pdpcollection") {
                        cb_tc_col(JSON.parse(xhr.response),"recommendation");
                    }
                }
            }
        }

        xhr.send(JSON.stringify(networkConfigObj["params"]));
    }

    function cb_tc_col(bundle_response,recommendation){
        var bundles_tc = bundle_response.Bundles;
        var pdpProductId = INC_COL.config.Product_id
        var bundleproductarrayTC={}
        var bundle_count = 0
        if (bundle_response.ProductsDetail != null) {
            for (var prdetails of bundle_response.ProductsDetail) {
                bundleproductarrayTC[prdetails.ProductId] = prdetails
            }
        } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
            for (var catrec of bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[catrec.ProductId] = catrec
            }
        }
        if(recommendation == "recommendation"){
            INC_COL.config.recommendation = true
            bundle_count=1
            bundles_tc = []
        }else{
            bundle_count=bundles_tc.length
        }
        for (var i = 0; i < bundle_count; i++) {
            if(recommendation == "recommendation"){
                bundles_tc.push({
                    BundleId : 11111,
                })
            }
            if(INC_COL.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1){
                INC_COL.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                var irbBundleObj = ""
                if(recommendation == "recommendation"){
                    irbBundleObj = bundle_response
                }else{
                    irbBundleObj = bundles_tc[i];
                }
                var bundleObj = {};
                if(INC_COL.config.recommendation == falseflag){
                    bundleObj.id = irbBundleObj["BundleId"];
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                
                var irbProductsArray = ""
                if(recommendation == "recommendation"){
                    irbProductsArray =  bundle_response.CategoryRecommendations
                }else{
                    irbProductsArray = irbBundleObj["ProductIds"]
                }
                if (irbProductsArray != null){
                    for (var irbprdarray of irbProductsArray) {
                        var product = "";
                        if(recommendation == "recommendation"){
                            product = irbprdarray
                        }else{
                            product = bundleproductarrayTC[irbprdarray]
                        }
                        if(INC_COL.config.comboprod.indexOf(product.ProductId) == -1){
                            if(recommendation == "recommendation"){
                                INC_COL.config.recarray.push(product.ProductId)
                            }else{
                                if(INC_COL.config.comboprod.indexOf(product.ProductId) == -1){
                                    INC_COL.config.sidebararray.push(product.ProductId)
                                }
                            }
                            if (INC_COL.config.uniqeProduct.indexOf(product["ProductId"]) == -1  && INC_COL.config.childlevelprodResc.indexOf(product["ProductId"]) == -1) {
                                INC_COL.config.uniqeProduct.push(product["ProductId"])
                                var productObj = new INC_COL.classes.ProductObj(product);
                                productObj["bundleId"] = irbBundleObj["BundleId"];
                                productObj["bundledProductId"] = pdpProductId;
                                productObj.sku = productObj.id;
                                productObj.Filed3 = product["Field5"]
                                var pAttributes = product["Attributes"] || "";
                                if(pAttributes != "" && pAttributes != null){
                                    if(pAttributes.length == 1){
                                        if(pAttributes[0].attributeCode == "Colour" || pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == 'colour'){
                                            pAttributes[0].attributeCode = "Color"
                                            pAttributes[0].frontEndLabel = "Color"
                                        }else if(pAttributes[0].attributeCode == "size"){
                                            pAttributes[0].attributeCode = "Size"
                                            pAttributes[0].frontEndLabel = "Size"
                                        } else if(pAttributes[0].attributeCode == "weight"){
                                                pAttributes[0].attributeCode = "Weight"
                                                pAttributes[0].frontEndLabel = "Weight"
                                        } else {
                                            if(pAttributes[0].attributeCode == "volume"){
                                                pAttributes[0].attributeCode = "volume"
                                                pAttributes[0].frontEndLabel = "volume"
                                            }
                                        }
                                        
                                    }else{
                                        for (var pattrbt of pAttributes) {
                                            if(pattrbt.attributeCode == "Colour" || pattrbt.attributeCode == "color" || pAttributes[0].attributeCode == 'colour'){
                                                pattrbt.attributeCode = "Color"
                                                pattrbt.frontEndLabel = "Color"
                                            }
                                            if(pattrbt.attributeCode == "size"){
                                                pattrbt.attributeCode = "Size"
                                                pattrbt.frontEndLabel = "Size"
                                            }
                                            if(pattrbt.attributeCode == "weight" || pattrbt.attributeCode == "Weight"){
                                                pattrbt.attributeCode = "Weight"
                                                pattrbt.frontEndLabel = "Weight"
                                            }
                                            if(pattrbt.frontEndLabel == "volume"){
                                                pattrbt.frontEndLabel = "Volume"
                                            }
                                        }
                                    }
                                    pAttributes = attribute_listing_col(pAttributes)
                                }
                            
                                var pAttObj = {};
                                var allsize=[]
                                var attr_values='';
                                if(pAttributes.length == 1){
                                    if(pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == 'colour' || pAttributes[0].attributeCode == 'Colour'){
                                        pAttributes[0].attributeId = 0
                                        attr_values = pAttributes[0].attributeValues;
                                        for (var av of attr_values) {
                                            av.optionId1 = av.optionId;
                                            av.optionId = 0;
                                            if(pAttributes[0].attributeCode == "Size"){
                                                allsize.push(av.optionText)
                                            }
                                        }
                                    }else if(pAttributes[0].attributeCode == "Size"){
                                        pAttributes[0].attributeId = 1
                                        attr_values = pAttributes[0].attributeValues;
                                        for (var vi of attr_values) {
                                            vi.optionId1 = vi.optionId;
                                            vi.optionId = 1;
                                            if(pAttributes[0].attributeCode == "Size"){
                                                allsize.push(vi.optionText)
                                            }
                                        }
                                    }
                                }else{
                                    for(var t=0;t<pAttributes.length;t++){
                                        pAttributes[t].attributeId = t
                                        attr_values = pAttributes[t].attributeValues;
                                        for (var v1 of attr_values) {
                                            v1.optionId1 = v1.optionId;
                                            v1.optionId = t;
                                            if(pAttributes[t].attributeCode == "Size"){
                                                allsize.push(v1.optionText)
                                            }
                                        }
                                    }
                                }
                                if (pAttributes.length) {
                                    INC_COL.config.configcount = 0
                                    for (var attrPrd of pAttributes) {
                                        var pAttributesObj = attrPrd
                                        var pAttributesValues = pAttributesObj["attributeValues"];
                                        for (var attvalues of pAttributesValues) {
                                            var pAtt;
                                            var childProduct = childproductdet_(attvalues,product)
                                            productObj = new INC_COL.classes.ProductAttObj(childProduct);
                                            productObj["bundledProductId"] = pdpProductId;
                                            productObj.mainId = product["ProductId"];
                                            productObj.bundleId = bundleObj.id;
                                            productObj.sku = productObj.id;
                                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                            if (!Object.prototype.hasOwnProperty.call(INC_COL.dataStore.dataStoreObj, product['ProductId'])) {
                                                INC_COL.dataStore.dataStoreObj[product['ProductId']] = {};
                                            }
                                            
                                            if (!Object.prototype.hasOwnProperty.call(INC_COL.dataStore.dataStoreObj[product['ProductId']],productObj['id'])) {
                                                INC_COL.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                            }
                                            pAttObj = INC_COL.dataStore.dataStoreObj[product['ProductId']][productObj['id']];

                                            
                                            for (pAtt in productObj) {
                                                if (pAtt == "option") {
                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj,'option')) {
                                                        pAttObj["option"] = {}
                                                    }
                                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                                    });
                                                } else {
                                                    pAttObj[pAtt] = productObj[pAtt];
                                                }
                                            }
                                        }
                                    }
                                }
                
                                if (pAttributes.length == 0) {
                                    productObj = new INC_COL.classes.ProductObj(product);
                                    productObj["bundleId"] = irbBundleObj["BundleId"];
                                    productObj["bundledProductId"] = pdpProductId;
                                    productObj.sku = productObj.id;
                                    if ((INC_COL.dataStore.dataStoreObj != undefined) && !Object.prototype.hasOwnProperty.call(INC_COL.dataStore.dataStoreObj, productObj['mainId'])) {
                                        INC_COL.dataStore.dataStoreObj[productObj['mainId']] = {};
                                    }
                                    INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                                        INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                    }else {
                                        INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                    }
                                }

                                if ((INC_COL.dataStore.dataStoreObj != undefined) && (!Object.prototype.hasOwnProperty.call(INC_COL.dataStore.dataStoreObj, productObj['mainId']))) {
                                    INC_COL.dataStore.dataStoreObj[productObj['mainId']] = {};
                                }
                            
                                if (INC_COL.dataStore.dataStoreObj != undefined){
                                    INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                                        INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                    }else {
                                        INC_COL.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
        setTimeout(function() {
            if(recommendation == "recommendation"){
                var recModuleArray = INC_COL.config.recarray
                INC_COL.config.recbottom = recModuleArray.splice(0,5)
                INC_COL.methods.createRECBlock();
            }else{
                INC_COL.methods.createSidebarBlock()
            }
        },2500)
    }

    INC_COL.methods.createRECBlock = function () {
        if (document.querySelector('.inc_af_block.inc_recommendations') != null) {
            var reco_block = document.querySelector('.inc_af_block.inc_recommendations')
            reco_block.parentNode.removeChild(reco_block);
            reco_block.style.display = "none"
        }

        var cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>'
        var amBlock = generate_html_tag('div','inc_af_block')
        
        amBlock.classList.add('inc_recommendations')
        amBlock.innerHTML = cart_html

        var amMainBlock = generate_html_tag('div', 'inc_af_main_block');
        amMainBlock.appendChild(amBlock);
    
        var tplayoutsibling=document.querySelector('#content[role="main"]')
        tplayoutsibling.parentNode.insertBefore(amMainBlock,tplayoutsibling)
        var recModuleArray = []
        if(INC_COL.config.recbottom != undefined && INC_COL.config.recbottom.length>0){
            recModuleArray = INC_COL.config.recbottom
        }else{
            recModuleArray = INC_COL.config.recarray
        }
        var amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
        var elAmTitleText = amBlock.querySelector(".inc_af_title_text_block")
        amProductListBlock.classList.add('inc_rec_' + recModuleArray.length)
        amBlock.classList.add('inc_rec_' + recModuleArray.length)
        recModuleArray.forEach(function (mainProductId) {
            if(INC_COL.config.duplamid.indexOf(mainProductId) == -1){
                INC_COL.config.duplamid.push(mainProductId)
                var findObj = new INC_COL.classes.FindObj({ id: mainProductId });
                
                var productObj = INC_COL.dataStore.methods().getProductById(findObj);
                
                var productModuleBlock = generate_html_tag('div','inc_product_module_block')
                var elProductShowcaseBlock = generate_html_tag('div','inc_product_showcase_block');
                amProductListBlock.appendChild(productModuleBlock);
                elAmTitleText.innerText = "Best Sellers in Category"

                var productcardhtml='<div class="inc_product_block"> <div class="inc_product_info_main_block"> <div class="inc_product_view_info_block"> <div class="inc_product_view_img_desc_block"> <div class="inc_product_img_block"> <div class="inc_product_img_main_block"> <div class="inc_product_img_main_img_block"> <div class="inc_product_img_main_img"> </div></div></div></div></div></div><div class="inc_product_desc_block"> <div class="inc_product_desc_title_block"> <div class="inc_product_desc_title_text_block"> <div class="inc_product_desc_title_text"> </div></div><div class="inc_product_manufacture_text_block"><div class="inc_product_maufacture_text"></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_price_block"> <div class="inc_product_price_label_block"></div><div class="inc_product_desc_price_active_block"> <div class="inc_product_desc_price_active_text_block"> <div class="inc_product_desc_price_active_text"></div><div class="inc_product_desc_price_active_text_msg"></div></div></div><div class="inc_product_desc_price_regular_block"> <div class="inc_product_desc_price_regular_text_block"><div class="inc_product_desc_price_regular_text"></div></div></div></div></div></div></div>'
                elProductShowcaseBlock.innerHTML = productcardhtml
                productModuleBlock.appendChild(elProductShowcaseBlock)
                var productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
                var elImgBlock = elProductShowcaseBlock.querySelector('.inc_product_img_block');
                var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
                var elTitleTextBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
                var elPriceActiveText = productBlock.querySelector('.inc_product_desc_price_active_text');
                var elPriceRegularText = productBlock.querySelector('.inc_product_desc_price_regular_text');
                var eldescBlock = productBlock.querySelector('.inc_product_desc_block');


                var product_id = productBlock.querySelector('.inc_product_maufacture_text');
                product_id.innerHTML = productObj.Field2;
                
                productBlock.setAttribute('data-id', productObj.id);
                productBlock.setAttribute('data-sku', productObj.sku);
                productBlock.setAttribute('data-main_id', productObj.mainId);
                productBlock.setAttribute('data-bundle_id', productObj.bundleId);

                productModuleBlock.setAttribute('data-id', productObj.id);
                productModuleBlock.setAttribute('data-sku', productObj.sku);
                productModuleBlock.setAttribute('data-main_id', productObj.mainId);
                productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

                var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
                var elImgTag1 = generate_html_tag('img');
                if(productObj.imageURL != undefined){
                    elImgTag1.src = productObj.imageURL
                }
                elImgTag1.setAttribute('role', 'img')
                elImgTag1.setAttribute('aria-label', 'Image')
                elImgTag1.setAttribute('alt', productObj.name)
                elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
                elImgTag1.setAttribute('data-imageURL', productObj["imageURL"])
                var productLink = document.createElement('a');
                productLink.target = "_blank";
                productLink.href = productObj.url;
                productLink.appendChild(elImgTag1);
                productLink.setAttribute('otherImageList', productObj["otherImageList"])
                productLink.setAttribute('imageURL', productObj["imageURL"])
                elImgMainImg.appendChild(productLink);
                productLink.addEventListener("click", function (e) {
                    if(window.innerWidth < 821){
                        e.preventDefault()
                    }
                })
                elImgMainImg.addEventListener("click", function () {
                    INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'),INC_COL.config.pdpPID);
                    var hrefd = productBlock.querySelector('.inc_product_img_main_img a').href
                    setTimeout(function(){
                        if(window.innerWidth < 821){
                            window.location.assign(hrefd);
                        }
                    },2000)
                });

                elTitleTextBlock.addEventListener("click", function () {
                    INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'),INC_COL.config.pdpPID, "100");
                    var hrefde = productBlock.querySelector('.inc_product_img_main_img a').href
                    setTimeout(function(){
                        if(window.innerWidth < 821){
                            window.location.assign(hrefde);
                        }
                    },2000)
                });
                var pTitleDiv = document.createElement('div');
                pTitleDiv.innerHTML = productObj.name;
                var field1 = productObj.ratingsCount
                var field2 = productObj.reviewsCount
                var elratingsBlock = productBlock.querySelector('.inc_product_desc_ratings_block');
                INC_COL.methods.get_product_ratingscol(field1, field2, elratingsBlock);
                var pLink = document.createElement('a');
                pLink.href = productObj.url;
                pLink.target = "_blank";
                pLink.setAttribute('title', productObj.name)
                pLink.setAttribute('href', productObj.url)
                pLink.appendChild(pTitleDiv);
                elTitleText.appendChild(pLink);
                pLink.addEventListener("click", function (ev) {
                    if(window.innerWidth < 821){
                        ev.preventDefault()
                    }
                })
                var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                elPriceRegularText.textContent = "";
                if(productObj.ProductType != "simple"){
                    var priceRange = get_child_product_pricescol(productObj.mainId)
                    if(priceRange.innerText.split(',')[0] != priceRange.innerText.split(',')[1] && priceRange.innerText.split(',')[1] != undefined){
                        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
                        elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
                        elPriceRegularText.innerHTML = "Was " + priceRange.innerText.split(',')[1]
                    }else{
                        elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
                    }
                }else{
                    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
                        elPriceActiveText.innerHTML = formatter.format(activePrice)
                        elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>"  + formatter.format(regularPrice)
                    } else {
                        if (productObj.pricingCount != "") {
                            elPriceActiveText.innerHTML =  formatter.format(activePrice) 
                        } else {
                            elPriceActiveText.innerText = formatter.format(activePrice)
                        }
                    }
                }
                var inc_collection_checkout_btn = generate_html_tag('a','inc_collection_checkout_btn');
                var inc_collection_checkout_btn_text = generate_html_tag('div','inc_collection_checkout_btn_text');
                inc_collection_checkout_btn_text.innerText = "Add To Bag"
                inc_collection_checkout_btn.appendChild(inc_collection_checkout_btn_text);
                eldescBlock.appendChild(inc_collection_checkout_btn);
                inc_collection_checkout_btn.addEventListener('click',function(){
                    INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'),INC_COL.config.pdpPID);
                    setTimeout(function(){
                        var href = productBlock.querySelector('.inc_product_img_main_img a').href
                        window.location.assign(href)
                    },2000)
                })
            }
        });
        amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
        var productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
        
        var sliderBtnCounter = 0;
        var prod_sl_c = 1
        if (productBlocks.length > prod_sl_c) {
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        var cc_ount = 1;
        if (window.innerWidth > 768) {
            cc_ount = 4
        }
        if (productBlocks.length <= cc_ount) {
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
        }
        amBlock.querySelector('.inc_af_right_btn_block').addEventListener("click", function () {
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - 1) {
                sliderBtnCounter--;
            }
            var all_p_length = document.querySelectorAll('.inc_af_main_block .inc_af_product-list_block .inc_product_module_block').length
            if (window.innerWidth > 768) {
                cc_ount = 4
            }else{
                cc_ount = 1;
            }
            var width_slide = ""
            if (window.innerWidth < 1440) {
                width_slide = 282
            } else {
                width_slide = 292
            }
            if (+INC_COL.clientConfig.slidevalue + +cc_ount < all_p_length) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue++
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) - width_slide) + 'px';
                var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_product-list_block');
                menu.setAttribute('style', 'margin-left:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue].classList.add('inc_active')
            }

            if (+INC_COL.clientConfig.slidevalue + +cc_ount == all_p_length) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

        amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function () {
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) {
                sliderBtnCounter = 0;
            }
            if (INC_COL.clientConfig.slidevalue == -1) {
                INC_COL.clientConfig.slidevalue = 0;
            }
            var width_slide = "";
            if (window.innerWidth < 1440) {
                width_slide = 282
            } else {
                width_slide = 292
            }
            if (INC_COL.clientConfig.slidevalue > 0) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue--
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) + width_slide) + 'px';
                var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_product-list_block');
                menu.setAttribute('style', 'margin-left:' + INC_COL.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_main_block .inc_af_product-list-dots-main_block .inc_dots')[+INC_COL.clientConfig.slidevalue].classList.add('inc_active')
            }
            if (INC_COL.clientConfig.slidevalue == 0) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector('.inc_af_main_block .inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });
        setTimeout(function(){
            document.querySelector('html').style.overflow ='';
            if(document.querySelector('.inc_af_block.inc_recommendations') != null){
                document.querySelector('.inc_af_block.inc_recommendations').style.display="block";
            }
        },3500);
    }
    function get_child_product_pricescol(productid) {
        var price_array = [];
        var x_price_array = [];
        var obj1 = INC_COL.dataStore.dataStoreObj[productid];
        for(var key in obj1){
            if(Object.prototype.hasOwnProperty.call(obj1, key)){
                var val1 = obj1[key];
                price_array.push(val1.activePrice);
                x_price_array.push(val1.regularPrice);  
            }           
        }
        
        price_array = price_array.filter(Number);
        x_price_array = x_price_array.filter(Number);
        return min_max_pricescol(price_array, x_price_array);
    }


    function min_max_pricescol(arr, arr_x) {
        var min = Math.min.apply(Math, arr);
        var max = Math.max.apply(Math, arr);
        var min1 = Math.min.apply(Math, arr_x);
        var max1 = Math.max.apply(Math, arr_x);
        var price_min_max = generate_html_tag("div", "price_min_max");
        var price = 0;
        if (min != max) {
            price = formatter.format(min) + " - " + formatter.format(max);
        } else {
            price = formatter.format(min);
        }
        var price1 =0
        if (min1 != max1) {
            price1 = formatter.format(min1) + " - " + formatter.format(max1);
        } else {
            price1 = formatter.format(min1);
        }
        price_min_max.textContent = price + "," + price1;
        return price_min_max;
    }
    setTimeout(function(){
        if (INC_COL.config.MainPrdName != "" || INC_COL.config.MainPrdName != null){
            if (document.querySelector('.inc_breadcrumb_prd') != null){
                document.querySelector('.inc_breadcrumb_prd').innerText = INC_COL.config.MainPrdName;
            }
        }
    },2000);
})();