'use strict';
//1
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log( modal);
//clilkcuut
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//fk
const openModal = function () {
  // console.log('Buttons clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//2 
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);




// btnCloseModal.addEventListener('click', function () {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
// });
// ;overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })

// let count = 0;
document.addEventListener('keydown', function (e) {
  // console.log('keydown');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
