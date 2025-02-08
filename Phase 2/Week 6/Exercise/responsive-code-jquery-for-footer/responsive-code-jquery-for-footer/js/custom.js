// $("h3.shop-and-learn").click(function () {
//   $(this).toggleClass("expanded");
//   $("ul.shop-and-learn").toggleClass("display");
// });

let headings = $(".footer-links-wrapper h3");

headings.click(function () {
  $(this).toggleClass("expanded");
  var className = $(this).attr("id");
  $("ul." + className).toggleClass("display");
});
