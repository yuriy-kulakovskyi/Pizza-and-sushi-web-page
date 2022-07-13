$(document).ready(() => {
  // mousemove event for cart button
  $("#cart").mousemove(() => {
    $("#cart-img").attr('src', 'public/img/cart-prototype.png');
  });

  // mouseleave event for cart button
  $("#cart").mouseleave(() => {
    $("#cart-img").attr('src', 'public/img/cart.png');
  });

  // link hovers
  $("#top-today").mousemove(() => {
    $("#top-today").css('opacity', '1');
    $("#linkVal").text("TOP");
    $("#linkVal").css("opacity", "1");
    $("#linkVal").css("letter-spacing", "10px");
  });

  $("#top-today").mouseleave(() => {
    $("#top-today").css('opacity', '.7');
    $("#linkVal").text("");
    $("#linkVal").css("opacity", "0");
    $("#linkVal").css("letter-spacing", "100px");
  });


  $("#products").mousemove(() => {
    $("#products").css('opacity', '1');
    $("#linkVal").text("PRODUCTS");
    $("#linkVal").css("opacity", "1");
    $("#linkVal").css("letter-spacing", "10px");
  });

  $("#products").mouseleave(() => {
    $("#products").css('opacity', '.7');
    $("#linkVal").text("");
    $("#linkVal").css("opacity", "0");
    $("#linkVal").css("letter-spacing", "100px");
  });


  $("#faq").mousemove(() => {
    $("#faq").css('opacity', '1');
    $("#linkVal").text("FAQ");
    $("#linkVal").css("opacity", "1");
    $("#linkVal").css("letter-spacing", "10px");
  });

  $("#faq").mouseleave(() => {
    $("#faq").css('opacity', '.7');
    $("#linkVal").text("");
    $("#linkVal").css("opacity", "0");
    $("#linkVal").css("letter-spacing", "100px");
  });


  $("#about").mousemove(() => {
    $("#about").css('opacity', '1');
    $("#linkVal").text("ABOUT");
    $("#linkVal").css("opacity", "1");
    $("#linkVal").css("letter-spacing", "10px");
  });

  $("#about").mouseleave(() => {
    $("#about").css('opacity', '.7');
    $("#linkVal").text("");
    $("#linkVal").css("opacity", "0");
    $("#linkVal").css("letter-spacing", "100px");
  });



  // burger button click event
  let opened = false;
  $("#burger-btn").click(() => {
    if (!opened) {
      opened = true;
      $("#menu").css('top', '0');
    } else if (opened) {
      opened = false;
      $("#menu").css('top', '-100vh');
    }
  });

  // light/dark theme
  let theme = 'light';
  $("#checkbox").change(() => {
    if (theme === 'light') {
      $('section').css('background-color', '#111');
      $(".main__info").css("color", '#fff');
      $(".main__subtitle").css("color", 'rgba(255, 255, 255, .5)');
      $("#arrow-down").attr('src', 'public/img/Arrow-light.png');
      $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      $(".circle-wrap").css('border', '1px solid #fff');
      $("#menu").css('background-color', '#fff');
      $("#menu a").css('color', '#111');

      // mousemove event for cart button
      $("#cart").mousemove(() => {
        $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      });

      // mouseleave event for cart button
      $("#cart").mouseleave(() => {
        $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      });

      $(".label").css('background-color', "#fff");
      $(".ball").css("background-color", '#111');

      theme = 'dark';
    } else if (theme === 'dark') {
      $('section').css('background-color', '#fff');
      $(".main__info").css("color", '#111');
      $(".main__subtitle").css("color", 'rgba(0, 0, 0, 0.5)');
      $("#arrow-down").attr('src', 'public/img/arrow.png');
      $("#cart-img").attr('src', 'public/img/cart.png');
      $(".circle-wrap").css('border', '1px solid #333');
      $("#menu").css('background-color', '#111');
      $("#menu a").css('color', '#fff');

      // mousemove event for cart button
      $("#cart").mousemove(() => {
        $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      });

      // mouseleave event for cart button
      $("#cart").mouseleave(() => {
        $("#cart-img").attr('src', 'public/img/cart.png');
      });

      $(".label").css('background-color', "#111");
      $(".ball").css("background-color", '#fff');

      theme = 'light';
    }
  });
});