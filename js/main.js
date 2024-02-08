$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    cssEase: 'ease-in-out'
  });

  $('.slider-container').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    switch (currentSlide) {
      case 0:
        document.getElementById("imageSliderTwo").classList.remove("slide-in-right");
        document.getElementById("imageSliderThree").classList.remove("slide-in-right");
        document.getElementById("imageSliderOne").classList.add("slide-in-right");
        document.getElementById("slideTwo").classList.remove("active-slide-number");
        document.getElementById("slideThree").classList.remove("active-slide-number");
        document.getElementById("slideOne").classList.add("active-slide-number");
        break;
      case 1:
        document.getElementById("imageSliderOne").classList.remove("slide-in-right");
        document.getElementById("imageSliderThree").classList.remove("slide-in-right");
        document.getElementById("imageSliderTwo").classList.add("slide-in-right");
        document.getElementById("slideOne").classList.remove("active-slide-number");
        document.getElementById("slideThree").classList.remove("active-slide-number");
        document.getElementById("slideTwo").classList.add("active-slide-number");
        break;
      case 2:
        document.getElementById("imageSliderTwo").classList.remove("slide-in-right");
        document.getElementById("imageSliderOne").classList.remove("slide-in-right");
        document.getElementById("imageSliderThree").classList.add("slide-in-right");
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

  $('#open-sangawasa-popup-one').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-sangawasa-popup-two').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-three').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-four').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-five').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-six').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-seven').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-eight').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-sangawasa-popup-nine').magnificPopup({
    items: [
      {
        src: './images/sangawasa/sangawasa_9.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_1.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_2.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_3.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_4.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_5.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_6.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_7.jpg'
      },
      {
        src: './images/sangawasa/sangawasa_8.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-one').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-magalwewa-popup-two').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-three').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-four').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-five').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-six').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-seven').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-eight').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-magalwewa-popup-nine').magnificPopup({
    items: [
      {
        src: './images/magalwewa/magalwewa_9.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_1.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_2.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_3.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_4.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_5.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_6.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_7.jpg'
      },
      {
        src: './images/magalwewa/magalwewa_8.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
    
  $('#open-hilltop-popup-one').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-hilltop-popup-two').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-three').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-four').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-five').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-six').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-seven').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-eight').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-hilltop-popup-nine').magnificPopup({
    items: [
      {
        src: './images/hilltop/hilltop_9.jpg'
      },
      {
        src: './images/hilltop/hilltop_1.jpg'
      },
      {
        src: './images/hilltop/hilltop_2.jpg'
      },
      {
        src: './images/hilltop/hilltop_3.jpg'
      },
      {
        src: './images/hilltop/hilltop_4.jpg'
      },
      {
        src: './images/hilltop/hilltop_5.jpg'
      },
      {
        src: './images/hilltop/hilltop_6.jpg'
      },
      {
        src: './images/hilltop/hilltop_7.jpg'
      },
      {
        src: './images/hilltop/hilltop_8.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
      
  $('#open-cargo-popup-one').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-cargo-popup-two').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-cargo-popup-three').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-cargo-popup-four').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-cargo-popup-five').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-cargo-popup-six').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_6.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-cargo-popup-seven').magnificPopup({
    items: [
      {
        src: './images/cargo/cargo_7.jpg'
      },
      {
        src: './images/cargo/cargo_1.jpg'
      },
      {
        src: './images/cargo/cargo_2.jpg'
      },
      {
        src: './images/cargo/cargo_3.jpg'
      },
      {
        src: './images/cargo/cargo_4.jpg'
      },
      {
        src: './images/cargo/cargo_5.jpg'
      },
      {
        src: './images/cargo/cargo_6.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
       
  $('#open-tropical-popup-one').magnificPopup({
    items: [
      {
        src: './images/tropical/tropical_1.jpg'
      },
      {
        src: './images/tropical/tropical_2.jpg'
      },
      {
        src: './images/tropical/tropical_3.jpg'
      },
      {
        src: './images/tropical/tropical_4.jpg'
      },
      {
        src: './images/tropical/tropical_5.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-tropical-popup-two').magnificPopup({
    items: [
      {
        src: './images/tropical/tropical_2.jpg'
      },
      {
        src: './images/tropical/tropical_1.jpg'
      },
      {
        src: './images/tropical/tropical_3.jpg'
      },
      {
        src: './images/tropical/tropical_4.jpg'
      },
      {
        src: './images/tropical/tropical_5.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-tropical-popup-three').magnificPopup({
    items: [
      {
        src: './images/tropical/tropical_3.jpg'
      },
      {
        src: './images/tropical/tropical_1.jpg'
      },
      {
        src: './images/tropical/tropical_2.jpg'
      },
      {
        src: './images/tropical/tropical_4.jpg'
      },
      {
        src: './images/tropical/tropical_5.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-tropical-popup-four').magnificPopup({
    items: [
      {
        src: './images/tropical/tropical_4.jpg'
      },
      {
        src: './images/tropical/tropical_1.jpg'
      },
      {
        src: './images/tropical/tropical_2.jpg'
      },
      {
        src: './images/tropical/tropical_3.jpg'
      },
      {
        src: './images/tropical/tropical_5.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-tropical-popup-five').magnificPopup({
    items: [
      {
        src: './images/tropical/tropical_5.jpg'
      },
      {
        src: './images/tropical/tropical_1.jpg'
      },
      {
        src: './images/tropical/tropical_2.jpg'
      },
      {
        src: './images/tropical/tropical_3.jpg'
      },
      {
        src: './images/tropical/tropical_4.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
      
  $('#open-budget-popup-one').magnificPopup({
    items: [
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $('#open-budget-popup-two').magnificPopup({
    items: [
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-budget-popup-three').magnificPopup({
    items: [
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-budget-popup-four').magnificPopup({
    items: [
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-budget-popup-five').magnificPopup({
    items: [
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-budget-popup-six').magnificPopup({
    items: [
      {
        src: './images/budget/budget_6.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_7.jpg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
  $('#open-budget-popup-seven').magnificPopup({
    items: [
      {
        src: './images/budget/budget_7.jpg'
      },
      {
        src: './images/budget/budget_1.jpg'
      },
      {
        src: './images/budget/budget_2.jpg'
      },
      {
        src: './images/budget/budget_3.jpg'
      },
      {
        src: './images/budget/budget_4.jpg'
      },
      {
        src: './images/budget/budget_5.jpg'
      },
      {
        src: './images/budget/budget_6.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });
  
});

function goToSlideOne() {
  $('.slider-container').slick('slickGoTo', 0);
}

function goToSlideTwo() {
  $('.slider-container').slick('slickGoTo', 1);
}

function goToSlideThree() {
  $('.slider-container').slick('slickGoTo', 2);
}

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

function goToProjects() {
  window.location.href = "practice.html";
}

function goToFbPage() {
  window.open("https://www.facebook.com/IndeetsArchitect/", "_blank");
}

function goToInstaPage() {
  window.open("https://www.instagram.com/indeets_architect/", "_blank");
}

function goToLinkedinPage() {
  window.open("https://www.linkedin.com/in/dahamthisula/", "_blank");
}


