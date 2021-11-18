const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".header-cart__btn-open").onclick = function () {
  $("#cart-section").style.display = "block";
};

$(".cart-section-close").onclick = function (e) {
  e.preventDefault();
  $("#cart-section").style.display = "none";
};

$(".cart-section-body-footer-close").onclick = function (e) {
  e.preventDefault();
  $("#cart-section").style.display = "none";
};

$(".checkout-next-btn").onclick = function (e) {
  e.preventDefault();
  $(".checkout-left-address").style.display = "none";
  $(".checkout-left-payment").style.display = "block";
  $(".checkout-right-address").style.display = "block";
};

$(".checkout-right-address .checkout-right-repair").onclick = function (e) {
  $(".checkout-left-address").style.display = "block";
  $(".checkout-left-payment").style.display = "none";
  $(".checkout-right-address").style.display = "none";
};

$(".checkout-right-order .checkout-right-repair").onclick = function (e) {
  $("#cart-section").style.display = "block";
};
