const mainMenuList = document.querySelectorAll(".mainmenu:first-child>li");
const subMenu = document.querySelectorAll(".submenu");

// 브라우저 창에 마우스 클릭한 경우 실행되는 함수
function openCloseSubMenu(event) {
  // console.log(event.target);
  // event.target := 마우스로 클릭한 특정 요소 (element)
  for (var i = 0; i < mainMenuList.length; i++) {
    // 클릭한 요소가 메인 메뉴의 li이거나, li의 anchor 태그인 경우
    if (
      event.target === mainMenuList[i] ||
      event.target.parentElement === mainMenuList[i]
    ) {
      subMenu[i].classList.toggle("active");
      // console.log(subMenu[i]);
    } else {
      // 클릭한 요소가 메인 메뉴 아닌 경우일 때, 하위 메뉴가 열려 있다면
      if (subMenu[i].classList.contains("active")) {
        subMenu[i].classList.remove("active");
        // console.log(subMenu[i]);
      }
    }
  }
}

window.addEventListener("mouseup", openCloseSubMenu); // 브라우저 창에 마우스 클릭한 경우
