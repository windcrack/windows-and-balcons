function modal(open, close){
    // const callButton = document.querySelector(open);
    const closeButton = document.querySelector(close);
    open.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
}

function openModal(){
    const modal = document.querySelector('.modal-bg')
    modal.classList.toggle('show-flex');
    modal.classList.toggle('hide');
}

function closeModal(){
    const modal = document.querySelector('.modal-bg');
    modal.classList.toggle('show-flex');
    modal.classList.toggle('hide');
}

export default modal;