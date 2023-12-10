$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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