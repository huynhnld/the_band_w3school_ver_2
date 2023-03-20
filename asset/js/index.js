// ẨN / HIỆN MODAL
const buyBtns = document.querySelectorAll(".js-buy-ticket-btn");
const modal = document.querySelector(".js-modal");
const modalCloses = document.querySelectorAll(".js-btn-close");
const modalContainer = document.querySelector(".js-modal-container");
//hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}
//Hàm ẩn modal mua vé (xóa class Open của modal)
function closeBuyTickets() {
  modal.classList.remove("open");
}
//chạy hàm for từng thẻ button và lắng nghe CLICK
for (let buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
modal.addEventListener("click", closeBuyTickets);
//NGhe hành vi CLICK vào button Close
for (let modalClose of modalCloses) {
  modalClose.addEventListener("click", closeBuyTickets);
}
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
//RESPONSIVE MOBILE
//ĐÓNG MỞ HEADER NAV
var header = document.getElementById("header");
var mobileMenu = document.getElementById("menu-mobile");
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
//tu dong close khi chon phan tu li trong menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log("menuItems: ", menuItems);
for (i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  console.log("menuItem: ", menuItem);
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.reventDefault();
    } else {
      header.style.height = null;
    }
  };
}
