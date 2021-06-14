$(document).ready(function () {
  let prtimes_color = "#2c4c7c";
  let open_menu_btn = $("#open_mobile_menu");
  let close_menu_btn = $("#close_mobile_menu");
  open_menu_btn.click(() => {
    onToggleMenu();
  });
  close_menu_btn.click(() => {
    onToggleMenu();
  });
  // toggle menu
  var onToggleMenu = async () => {
    console.log();
    let bg_mobile_menu = $(".header_bg")[0];
    let mobile_menu = $(".mobile_menu")[0];
    let logo_bg = $(".logo")[0];
    let logo_img = logo_bg.children[0];
    let logo_des = logo_bg.children[1];
    //fill bg mobile menu
    if (open_menu_btn.css("visibility") !== "hidden") {
      bg_mobile_menu.animate(
        [
          {
            width: "0",
            height: "0",
            backgroundColor: prtimes_color,
          },

          {
            width: "100%",
            height: "100%",
            backgroundColor: prtimes_color,
          },
        ],
        {
          duration: 1000,
          easing: "ease",
        }
      );
      let bg_mobile_menu_style = {
        backgroundColor: prtimes_color,
        width: "100%",
        height: "100%",
      };
      Object.assign(bg_mobile_menu.style, bg_mobile_menu_style);
      $(".mobile_menu_item").slideDown("fast");
      // change logo color
      logo_img.src = "../image/logo-white.svg";
      logo_des.style.color = "#fff";
      //toggle mobile_menu
      mobile_menu.style.display = "flex";
      // change btn mobile menu
      open_menu_btn.css("visibility", "hidden");
      close_menu_btn.css("visibility", "visible");
      return;
    } else if (close_menu_btn.css("visibility") === "visible") {
      bg_mobile_menu.animate(
        [
          {
            width: "100%",
            height: "100%",
            backgroundColor: prtimes_color,
          },
          {
            width: "0",
            height: "0",
            backgroundColor: "transparent",
          },
        ],
        {
          duration: 1000,
          easing: "ease",
        }
      );
      let bg_mobile_menu_style = {
        backgroundColor: "transparent",
        width: "0",
        height: "0",
      };
      await $(".mobile_menu_item").slideUp("fast");
      Object.assign(bg_mobile_menu.style, bg_mobile_menu_style);
      // change logo color
      logo_img.src = "../image/pr-times.svg";
      logo_des.style.color = prtimes_color;
      //toggle mobile_menu
      mobile_menu.style.display = "none";

      // change btn mobile menu
      open_menu_btn.css("visibility", "visible");
      close_menu_btn.css("visibility", "hidden");
      return;
    } else return;
  };
  //scroll show hide navigator
  $(window).bind("mousewheel", function (event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $("nav").slideDown("slow");
    } else {
      $("nav").slideUp("slow");
    }
  });
  //carousel
  let index = 0;
  //slide number
  let slide_number = $(".slide_number")[0];
  // slide show
  let slide_list = $(".slide_item");
  let current_slide = slide_list[index];
  $(current_slide).fadeIn(700);
  let next_slide = $(".next_slide");
  let previous_slide = $(".previous_slide");
  let onNextSlide = () => {
    if (index < slide_list.length - 1) {
      index++;
    } else {
      index = 0;
    }
    temp = current_slide;
    current_slide = slide_list[index];
    $(slide_number).fadeOut(350, function () {
      $(slide_number).text(index + 1);
      $(slide_number).fadeIn(350);
    });
    $(temp).fadeOut(700, function () {
      $(current_slide).fadeIn(700);
    });
  };
  let onPreviousSlide = () => {
    if (index > 0) {
      index--;
    } else {
      index = slide_list.length - 1;
    }
    temp = current_slide;
    current_slide = slide_list[index];
    $(slide_number).fadeOut(350, function () {
      $(slide_number).text(index + 1);
      $(slide_number).fadeIn(350);
    });
    $(temp).fadeOut(700, function () {
      $(current_slide).fadeIn(700);
    });
  };
  next_slide.click(() => {
    onNextSlide();
  });
  previous_slide.click(() => {
    onPreviousSlide();
  });
  setInterval(() => {
    onNextSlide();
  }, 5000);
  //on Toppage
  $(".page_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    $("nav").slideDown("slow");
  });
  // flickity
  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    autoPlay: 4000,
  });
});
