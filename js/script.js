$(document).ready(function () {
  let prtimes_color = "#2c4c7c";
  let open_menu_btn = $("#open_mobile_menu");
  let close_menu_btn = $("#close_mobile_menu");
  open_menu_btn.click(()=> {
    onToggleMenu()
  })
  close_menu_btn.click(() => {
    onToggleMenu()
  })
  // toggle menu
  var onToggleMenu = async () => {
    console.log();
    let bg_mobile_menu = $(".header_bg")[0];
    let mobile_menu = $(".mobile_menu")[0];
    let logo_bg = $(".logo")[0];
    let logo_img = logo_bg.children[0];
    let logo_des = logo_bg.children[1];
    //fill bg mobile menu
    if (open_menu_btn.css('visibility') !== "hidden") {
      
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
      $('.mobile_menu_item').slideDown('fast')
      // change logo color
      logo_img.src = "../image/logo-white.svg";
      logo_des.style.color = "#fff";
      //toggle mobile_menu
      mobile_menu.style.display = "flex";
      // change btn mobile menu
      open_menu_btn.css("visibility","hidden");
      close_menu_btn.css("visibility","visible");
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
        width: "100%",
        height: "100%",
      };
      await $('.mobile_menu_item').slideUp('fast')
      Object.assign(bg_mobile_menu.style, bg_mobile_menu_style);
      // change logo color
      logo_img.src = "../image/pr-times.svg";
      logo_des.style.color = prtimes_color;
      //toggle mobile_menu
      mobile_menu.style.display = "none";
    
      // change btn mobile menu
      open_menu_btn.css("visibility", "visible") ;
      close_menu_btn.css("visibility", "hidden") ;
      return;
    } else return;
  };
  //scroll show hide navigator
  $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $('header').slideDown("slow");
    }
    else {
        $('header').slideUp("slow");
    }
    });
});
