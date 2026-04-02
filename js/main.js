$(function () {
  // 풀페이지 초기화
  $("#water").fullpage({
    sectionsColor: ["#fff", "#fff", "#fff", "#f6f6f6 ", "#fff", "#fff"],
    anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
    navigation: true,
    showActiveTooltip: true,
    scrollOverflow: true,
    navigationPosition: "right",
    navigationTooltips: ["메인", "K-water", "서비스", "뉴스", "채용"],
    slidesNavigation: true,
    keyboardScrolling: false,
    responsiveWidth: 1080,

    // 섹션 진입 후 콜백
    afterLoad: function (anchorLink, index) {
      // 현재 섹션의 모든 .ani 요소에 애니메이션 적용
      var currentSection = $('.fp-section.active');
      currentSection.find('.ani').each(function (i) {
        var $element = $(this);
        // 약간의 지연을 두어 순차적으로 나타나도록
        setTimeout(function () {
          $element.addClass('on');
        }, 100 * i);
      });
    }
  });

  // ----- 헤더 -----
  // 서브메뉴 slide
  $('.header-menu').mouseenter(function () {
    $('.submenu-bg-box, .submenu-bg').stop(true, true).slideDown(300);
    $('header').stop().animate({
      height: '380px'
    })
  });

  $('.header-menu').mouseleave(function () {
    $('.submenu-bg-box, .submenu-bg').stop(true, true).slideUp(300);
    $('header').stop().animate({
      height: '70px'
    })
  });

  $(".search-icon").click(function () {
    $(".search-icon").toggleClass("close");
    $(".search").toggle();
  });

  // ----- 푸터 -----
  $(".footer-site").click(function () {
    $(".footer-site ul").slideToggle(300);
  });

  $(".footer-site").mouseleave(function () {
    $(".footer-site ul").stop(true, true).slideUp(300);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // 슬라이드 요소 선택
  const slideContainer = document.querySelector('.js_slides .move');
  const slideList = slideContainer.querySelector('ul');
  const slideItems = slideList.querySelectorAll('li');
  const btnLeft = document.querySelector('.btn_left');
  const btnRight = document.querySelector('.btn_right');
  const countElement = document.querySelector('.count span');

  // 슬라이드 관련 변수
  let currentPosition = 0;
  const slideWidth = 135; // 각 아이템 너비 (px)
  const visibleItems = 1; // 한 번에 보이는 아이템 수
  const totalItems = slideItems.length;
  const maxSlides = 5; // 최대 페이지 수 (원본 사이트 기준)
  let currentSlide = 0;

  // 카운트 업데이트 함수
  function updateCount() {
    countElement.textContent = `${currentSlide + 1}/${maxSlides}`;
  }

  // 슬라이드 이동 함수
  function moveSlide(direction) {
    const containerWidth = slideWidth * visibleItems;

    if (direction === 'left') {
      if (currentSlide > 0) {
        currentPosition += containerWidth;
        currentSlide--;
      }
    } else {
      if (currentSlide < maxSlides - 1) {
        currentPosition -= containerWidth;
        currentSlide++;
      }
    }

    slideList.style.transform = `translateX(${currentPosition}px)`;
    updateCount();
  }

  // 버튼 클릭 이벤트
  btnLeft.addEventListener('click', function () {
    moveSlide('left');
  });

  btnRight.addEventListener('click', function () {
    moveSlide('right');
  });

  // 화면 크기 변경시 재계산
  window.addEventListener('resize', function () {
    slideList.style.transform = `translateX(${currentPosition}px)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aniElements = document.querySelectorAll(".section .ani"); // 모든 .ani 선택

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("on"); // 화면에 보이면 .on 추가
        }
      });
    },
    { threshold: 0.1 } // 10% 노출 시 트리거
  );

  // 모든 .ani 요소 관찰
  aniElements.forEach((el) => observer.observe(el));
});