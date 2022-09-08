/**
* Template Name: Siimple - v4.7.0
* Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  const toogleNav = function() {
    let navButton = select('.nav-toggle')
    navButton.classList.toggle('nav-toggle-active')
    navButton.querySelector('i').classList.toggle('bx-x')
    navButton.querySelector('i').classList.toggle('bx-menu')

    select('.nav-menu').classList.toggle('nav-menu-active')
  }
  on('click', '.nav-toggle', function(e) {
    toogleNav();
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('drop-down-active')
    this.parentElement.classList.toggle('active')
  }, true)

  /**
   * Scrool links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      select('.nav-menu .active').classList.remove('active')
      this.parentElement.classList.toggle('active')
      toogleNav();
    }
  }, true)

})()

// 지점 선택시 지도 이동.
let offices = document.querySelectorAll(".accordion-body");
offices.forEach(function (office) {
  office.addEventListener("click", function () {
    viewMarker(this);
  });
});

function viewMarker(office) {
  officeLatLng = officePosition[office.textContent];
  marker.setMap(null);
  myLatLng = new kakao.maps.LatLng(officeLatLng.lat, officeLatLng.lng);
  let message = `<div style="padding:5px;">${office.textContent}</div>`;
  const imageSrc = "../assets/img/my_position.png"; // 마커이미지의 주소입니다
  let imageSize = new kakao.maps.Size(50, 54); // 마커이미지의 크기입니다
  let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

  displayMarker(myLatLng, message, markerImage);
}



function regist() {
  // 문서에서 id 로 input data 가져오기
  let id = document.getElementById("inputName").value;
  let password = document.getElementById("inputPassword").value;
  let name = document.getElementById("inputUserName").value;
  let address = document.getElementById("inputAddress").value;
  let tel = document.getElementById("inputTel").value;

  // 입력값 검증
  if (!id || !password || !name || !address || !tel) {
    alert("빈칸이 없도록 입력해주세요.");
    return;
  } else {
    // input data로 user 만들기
    const userObj = [];

    const user = {
      id: id,
      password: password,
      name: name,
      address: address,
      tel: tel,
    };

    // user 객체 문자열로 바꿔서 로컬스토리지에 저장
    localStorage.setItem(userObj);
    localStorage.setItem("user", JSON.stringify(user));
    alert("사용자 등록 성공!");
    // 로그인 화면으로 돌아가기
    window.location.replace("signin.html");
  }
}

function login() {
  // 문서에서 id로 input data 가져오기
  let id = document.getElementById("floatingInput").value;
  let password = document.getElementById("floatingPassword").value;

  // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
  const user = JSON.parse(localStorage.getItem("user"));

  // 입력값 검증
  if (user.id && user.password && user.id === id && user.password === password) {
    alert("로그인 성공 !");
    
    document.querySelector(".nav-menu a.beforeLogin").style.display = "none";
    localStorage.setItem("login", true);
    var con = document.getElementsByClassName("afterLogin");
    
    for(let i=0;i<con.length;i++){
        const el = con[i];
        el.style.display = "block";      
    }

    window.location.replace('index.html');

  } else {
    alert("로그인 실패 !");
  }
}


function logout() {
  
    localStorage.setItem("login", false);
    
}
