// $(document).ready(function () {
//   // 캐러셀 플러그인 실행
//   $(".slider").bxSlider({
//     auto: true,
//     autoControls: true,
//     stopAutoOnClick: true,
//     pager: true,
//     speed: 300,
//     randomStart: true,
//   });
// });

// String Effect App
// 글자를 보여줄 태그
const textEl = document.getElementById("main_text");
// 화면에 보여줄 문자열
const text = "Front end 개발자\n권혜진 입니다";
// 문자열을 자를때 사용할 index값
let idx = 0;
// 문자열 변경 함수 생성
function writeText() {
  if (idx < text.length) {
    // 현재 인덱스의 문자 추가
    if (text[idx] === "\n") {
      textEl.innerHTML += "<br>"; // 줄바꿈 처리
    } else {
      textEl.innerHTML += text[idx]; // 일반 문자 추가
    }
    // idx에 1추가
    idx++;
    // 300밀리초 후에 다음 문자 출력
    setTimeout(writeText, 200);
  } else {
    // 문자열이 모두 출력된 후 idx와 내용 초기화
    setTimeout(() => {
      idx = 0;
      textEl.innerHTML = ""; // 내용을 비움
      writeText(); // 다시 타이핑 시작
    }, 1000); // 1초 대기 후 초기화
  }
}
// 함수 호출
writeText();

//  토글 메뉴 구현을 위한 제이쿼리 플러그인 스크립트 소스 연결
$(function () {
  // 토글 메뉴 플러그인 실행
  let toggle = $("#toggle");
  let menu = $("nav ul");
  $(toggle).on("click", function (e) {
    e.preventDefault(); // a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
    menu.slideToggle();
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    // $("#top_btn").show();
    $("#top_btn").fadeIn();
  } else {
    // $("#top_btn").hide();
    $("#top_btn").fadeOut();
  }
});

// 스크롤 기능을 위한 자바스크립트 제이쿼리 삽입
$(function () {
  $("nav a").click(function (e) {
    $.scrollTo(this.hash || 0, 500); // 속도 조절, 숫자가 작을수록 빠름
    e.preventDefault();
  });
});

// 휠 이벤트로 섹션 하나씩 이동하는 자바스크립트 제이쿼리 실행
window.onload = function () {
  var elm = "section";
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) {}
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }

      // 화면 이동
      $("html,body")
        .stop()
        .animate({ scrollTop: moveTop + "px" }, { duration: 600, complete: function () {} });
    });
  });
};
