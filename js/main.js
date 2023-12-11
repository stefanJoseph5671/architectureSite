$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-container').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    switch (currentSlide) {
      case 0:
        document.getElementById("slideTwo").classList.remove("active-slide-number");
        document.getElementById("slideThree").classList.remove("active-slide-number");
        document.getElementById("slideOne").classList.add("active-slide-number");
        break;
      case 1:
        document.getElementById("slideOne").classList.remove("active-slide-number");
        document.getElementById("slideThree").classList.remove("active-slide-number");
        document.getElementById("slideTwo").classList.add("active-slide-number");
        break;
      case 2:
        document.getElementById("slideOne").classList.remove("active-slide-number");
        document.getElementById("slideTwo").classList.remove("active-slide-number");
        document.getElementById("slideThree").classList.add("active-slide-number");
        break;

      default:
        break;
    }
  });

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
});

scrollToTopBtn = document.getElementById("scrollToTopBtn");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 150) {
    scrollToTopBtn.className = "scroll-to-top-btn show-btn";
  } else {
    scrollToTopBtn.className = "scroll-to-top-btn hide-btn";
  }
};
window.addEventListener("scroll", myScrollFunc);

function featuredLinkClick(linkId) {
  switch (linkId) {
    case 1:
      document.getElementById("featuredResidential").classList.remove("featured-works-link-active");
      document.getElementById("featuredCommercial").classList.remove("featured-works-link-active");
      document.getElementById("featuredSpecial").classList.remove("featured-works-link-active");
      document.getElementById("featuredInterior").classList.remove("featured-works-link-active");
      document.getElementById("featuredAll").classList.add("featured-works-link-active");
      document.getElementById("featuredResidentialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredCommercialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredSpecialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredInteriorGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredAllGrid").classList.add("active-featured-grid");
      break;
    case 2:
      document.getElementById("featuredAll").classList.remove("featured-works-link-active");
      document.getElementById("featuredCommercial").classList.remove("featured-works-link-active");
      document.getElementById("featuredSpecial").classList.remove("featured-works-link-active");
      document.getElementById("featuredInterior").classList.remove("featured-works-link-active");
      document.getElementById("featuredResidential").classList.add("featured-works-link-active");
      document.getElementById("featuredAllGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredCommercialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredSpecialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredInteriorGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredResidentialGrid").classList.add("active-featured-grid");
      break;
    case 3:
      document.getElementById("featuredAll").classList.remove("featured-works-link-active");
      document.getElementById("featuredResidential").classList.remove("featured-works-link-active");
      document.getElementById("featuredSpecial").classList.remove("featured-works-link-active");
      document.getElementById("featuredInterior").classList.remove("featured-works-link-active");
      document.getElementById("featuredCommercial").classList.add("featured-works-link-active");
      document.getElementById("featuredAllGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredResidentialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredSpecialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredInteriorGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredCommercialGrid").classList.add("active-featured-grid");
      break;
    case 4:
      document.getElementById("featuredAll").classList.remove("featured-works-link-active");
      document.getElementById("featuredResidential").classList.remove("featured-works-link-active");
      document.getElementById("featuredCommercial").classList.remove("featured-works-link-active");
      document.getElementById("featuredInterior").classList.remove("featured-works-link-active");
      document.getElementById("featuredSpecial").classList.add("featured-works-link-active");
      document.getElementById("featuredAllGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredResidentialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredCommercialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredInteriorGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredSpecialGrid").classList.add("active-featured-grid");
      break;
    case 5:
      document.getElementById("featuredAll").classList.remove("featured-works-link-active");
      document.getElementById("featuredResidential").classList.remove("featured-works-link-active");
      document.getElementById("featuredCommercial").classList.remove("featured-works-link-active");
      document.getElementById("featuredSpecial").classList.remove("featured-works-link-active");
      document.getElementById("featuredInterior").classList.add("featured-works-link-active");
      document.getElementById("featuredAllGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredResidentialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredCommercialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredSpecialGrid").classList.remove("active-featured-grid");
      document.getElementById("featuredInteriorGrid").classList.add("active-featured-grid");
      break;
    default:
      break;
  }
}

function openMenu() {
  document.getElementById("sideNav").style.display = 'flex';
  document.getElementById("menuClose").style.display = 'block';
  document.getElementById("menuOpen").style.display = 'none';
}

function closeMenu() {
  document.getElementById("sideNav").style.display = 'none';
  document.getElementById("menuClose").style.display = 'none';
  document.getElementById("menuOpen").style.display = 'block';
}

function projectsLinkClick(linkId) {
  switch (linkId) {
    case 1:
      document.getElementById("residentialProjects").classList.remove("projects-link-active");
      document.getElementById("commercialProjects").classList.remove("projects-link-active");
      document.getElementById("specialProjects").classList.remove("projects-link-active");
      document.getElementById("interiorProjects").classList.remove("projects-link-active");
      document.getElementById("allProjects").classList.add("projects-link-active");
      document.getElementById("residentialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("commercialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("specialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("interiorProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("allProjectsGrid").classList.add("active-projects-grid");
      break;
    case 2:
      document.getElementById("allProjects").classList.remove("projects-link-active");
      document.getElementById("commercialProjects").classList.remove("projects-link-active");
      document.getElementById("specialProjects").classList.remove("projects-link-active");
      document.getElementById("interiorProjects").classList.remove("projects-link-active");
      document.getElementById("residentialProjects").classList.add("projects-link-active");
      document.getElementById("allProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("commercialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("specialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("interiorProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("residentialProjectsGrid").classList.add("active-projects-grid");
      break;
    case 3:
      document.getElementById("allProjects").classList.remove("projects-link-active");
      document.getElementById("residentialProjects").classList.remove("projects-link-active");
      document.getElementById("specialProjects").classList.remove("projects-link-active");
      document.getElementById("interiorProjects").classList.remove("projects-link-active");
      document.getElementById("commercialProjects").classList.add("projects-link-active");
      document.getElementById("allProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("residentialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("specialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("interiorProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("commercialProjectsGrid").classList.add("active-projects-grid");
      break;
    case 4:
      document.getElementById("allProjects").classList.remove("projects-link-active");
      document.getElementById("residentialProjects").classList.remove("projects-link-active");
      document.getElementById("commercialProjects").classList.remove("projects-link-active");
      document.getElementById("interiorProjects").classList.remove("projects-link-active");
      document.getElementById("specialProjects").classList.add("projects-link-active");
      document.getElementById("allProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("residentialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("commercialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("interiorProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("specialProjectsGrid").classList.add("active-projects-grid");
      break;
    case 5:
      document.getElementById("allProjects").classList.remove("projects-link-active");
      document.getElementById("residentialProjects").classList.remove("projects-link-active");
      document.getElementById("commercialProjects").classList.remove("projects-link-active");
      document.getElementById("specialProjects").classList.remove("projects-link-active");
      document.getElementById("interiorProjects").classList.add("projects-link-active");
      document.getElementById("allProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("residentialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("commercialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("specialProjectsGrid").classList.remove("active-projects-grid");
      document.getElementById("interiorProjectsGrid").classList.add("active-projects-grid");
      break;
    default:
      break;
  }
}

function goToCargo() {
  window.location.href = "cargo.html";
}

function goToSangawasa() {
  window.location.href = "sangawasa.html";
}

function goToMagalwewa() {
  window.location.href = "magalwewa.html";
}

function goToTropical() {
  window.location.href = "tropical.html";
}

function goToHilltop() {
  window.location.href = "hilltop.html";
}

function goToBudget() {
  window.location.href = "budget.html";
}

function goToPractice() {
  window.location.href = "practice.html";
}


