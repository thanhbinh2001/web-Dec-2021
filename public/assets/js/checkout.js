const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".header-cart__btn-open").onclick = function () {
  $("#cart-section").style.display = "block";
};
$(".checkout-right-address .checkout-right-repair").onclick = function (e) {
  $(".checkout-left-address").style.display = "block";
  $(".checkout-left-payment").style.display = "none";
  $(".checkout-right-address").style.display = "none";
};

$(".checkout-right-order .checkout-right-repair").onclick = function (e) {
  $("#cart-section").style.display = "block";
};
