$(document).ready(() => {
  $("#cart").mousemove(() => {
    $("#cart-img").attr('src', 'public/img/cart-prototype.png');
  });

  $("#cart").mouseleave(() => {
    $("#cart-img").attr('src', 'public/img/cart.png');
  });
});