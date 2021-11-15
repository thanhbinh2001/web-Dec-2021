$(document).ready(function () {
  const formBtn = $(".form-content-right__item-button");
  formBtn.click(function (e) {
    e.preventDefault();
    $(".content-right-address").hide();
    $(".content-right-payment").show();

    $(".header-right-address").hide();
    $(".header-right-methodpay").css("display", "flex");
    $(".content-left-payment").show();
  });

  $(".content-left-payment-address").click(function (e) {
    e.preventDefault();
    $(".content-left-payment").hide();
    $(".content-right-payment").hide();
    $(".content-right-address").show();
    $(".header-right-methodpay").hide();
    $(".header-right-address").css("display", "flex");
  });

  const loginBtns = $(
    ".header-right-address .header-right-item .header-right-item__link"
  );

//   $.map(loginBtns, function (btn, index) {
//     if (index === 0) {
//       $(btn).click(function (e) {
//         e.preventDefault();
//         $(".header-right-address").hide();
//         $(".header-right-login").show();
//         $(".header-right-login").css("display", "flex");

//         $(".content-right-address").hide();
//         $(".content-right-login").show();
//       });
//     }
//   });
});
