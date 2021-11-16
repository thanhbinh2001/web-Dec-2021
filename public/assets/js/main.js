$(document).ready(function () {
  const showCart = $(".shoptool-cart-show");

  showCart.click(function () {
    $("#cart-section").show();
  });

  $(".cart-section-close").click(function () {
    $("#cart-section").hide();
  });
  $(".cart-section-body-footer-close").click(function (e) {
    e.preventDefault();
    $("#cart-section").hide();
  });

  var bookNewCount = 0;
  var comingSoonCount = 0;
  var bestSellerCount = 0;
  // book new
  $(".book-new .product-arrow-right").click(function () {
    if (bookNewCount < $(".book-new .product-item").length - 5) {
      $(".book-new .product-list").css(
        "transform",
        `translateX(calc(-${++bookNewCount}*220px))`
      );
    }
  });
  $(".book-new .product-arrow-left").click(function () {
    if (bookNewCount >= 1) {
      $(".book-new .product-list").css(
        "transform",
        `translateX(calc(-${--bookNewCount}*220px))`
      );
    }
  });
  // sắp phát hành

  $(".comingsoon-book .product-arrow-right").click(function () {
    if (comingSoonCount < $(".comingsoon-book .product-item").length - 5) {
      $(".comingsoon-book .product-list").css(
        "transform",
        `translateX(calc(-${++comingSoonCount}*220px))`
      );
    }
  });
  $(".comingsoon-book .product-arrow-left").click(function () {
    if (comingSoonCount >= 1) {
      $(".comingsoon-book .product-list").css(
        "transform",
        `translateX(calc(-${--comingSoonCount}*220px))`
      );
    }
  });

  //best seller
  $(".best-seller .product-arrow-right").click(function () {
    if (bestSellerCount < $(".best-seller .product-item").length - 5) {
      $(".best-seller .product-list").css(
        "transform",
        `translateX(calc(-${++bestSellerCount}*220px))`
      );
    }
  });
  $(".best-seller .product-arrow-left").click(function () {
    if (bestSellerCount >= 1) {
      $(".best-seller .product-list").css(
        "transform",
        `translateX(calc(-${--bestSellerCount}*220px))`
      );
    }
  });

  // responsive
  // $(".header-menubar").click(function () {
  //   $(".submenubar-list").show();
  // });
  // $(".close-submenubar").click(function () {
  //   $(".submenubar-list").css("display", "none");
  //   console.log(this);
  // });
});
