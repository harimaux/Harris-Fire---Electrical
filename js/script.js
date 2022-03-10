$(document).ready(function () {
  let navToggle = document.getElementById("menu_toggle");
  let menuBtn = document.getElementById("btnMobileMenu");
  let menuBtnClose = document.getElementById("btnMobileMenu_b");

  navToggle.classList.add("toggleMenuBack");
  //Mobile menu
  menuBtn.addEventListener("click", () => {
    navToggle.classList.remove("toggleMenuBack");
    navToggle.classList.add("toggleMenu");
    menuBtn.style.visibility = "hidden";
    menuBtnClose.style.visibility = "visible";
    menuBtnClose.classList.add("btnMobileMenu_b");
  });

  menuBtnClose.addEventListener("click", () => {
    navToggle.classList.remove("toggleMenu");
    navToggle.classList.add("toggleMenuBack");
    menuBtnClose.style.visibility = "hidden";
    menuBtn.style.visibility = "visible";
  });
  // SHOWCAST FUNCTION
  $("#slideshow > div:gt(0)").hide();

  setInterval(function () {
    $("#slideshow > div:first")
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo("#slideshow");
  }, 3500);

  // Fire Extinguishers png images display - desktop version

  $(".subsection img").on("click", function () {
    let exImageValue = $(this).attr("data-value");
    let exImageDiv = document.getElementById("exImages");
    let screenRes = window.screen.width;
    //Mobile modal
    let modalDiv = document.getElementById("exDivModal");
    let exImageDivMobile = document.getElementById("exImagesMobile");

    /* $("#exImagesMobile").on("click", function () {}); */
    $(".fire_ex_dummy_img").hide();

    if (screenRes > 960) {
      if (exImageValue == "water") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/water.png">`;
      } else if (exImageValue == "waterplus") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/water plus.png">`;
      } else if (exImageValue == "foam") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/foam.png">`;
      } else if (exImageValue == "carbon") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/carbon.png">`;
      } else if (exImageValue == "powder") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/powder.png">`;
      } else if (exImageValue == "wetchemical") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/wetchemical.png">`;
      } else if (exImageValue == "chemical") {
        exImageDiv.innerHTML = `<img src="images/fire_ex/chemical.png">`;
      }
    } else if (screenRes <= 960) {
      modalDiv.classList.add("exBackgrounModal");
      //Mobile version
      if (exImageValue == "water") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/water.png">`;
      } else if (exImageValue == "waterplus") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/water plus.png">`;
      } else if (exImageValue == "foam") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/foam.png">`;
      } else if (exImageValue == "carbon") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/carbon.png">`;
      } else if (exImageValue == "powder") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/powder.png">`;
      } else if (exImageValue == "wetchemical") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/wetchemical.png">`;
      } else if (exImageValue == "chemical") {
        exImageDivMobile.innerHTML = `<img src="images/fire_ex/chemical.png">`;
      }
    }

    //Reset Modal
    $("#exDivModal, #exImagesMobile img").on("click", function () {
      modalDiv.classList.remove("exBackgrounModal");
      exImageDivMobile.innerHTML = ``;
    });
  });
});
