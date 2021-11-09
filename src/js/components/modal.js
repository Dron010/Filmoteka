import refs from "../refs/refs"

const { openModalBtn, closeModalBtn, modal, backdrop } = refs
  
openModalBtn.addEventListener('click', openModalWindow);
closeModalBtn.addEventListener('click', closeModalWindow);
backdrop.addEventListener('click', closeToBackdrop);

function openModalWindow(e) {
  modal.classList.remove('visually-hidden');
  window.addEventListener('keydown', onEscKeyPress);
}

function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}

function closeModalWindow() {
  modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
