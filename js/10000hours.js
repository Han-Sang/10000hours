const modal = document.getElementById('modal');
const modalOpenBtn = document.querySelector('.btn-go');

//modal 창 오픈
modalOpen.addEventListener('click', (event) => {
   event.preventDefault();
   modal.classList.add('active');
});