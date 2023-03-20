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
