function closeModalBg(bg){
    const closeBg = document.querySelector(bg);
    closeBg.addEventListener('click', function() {
        this.classList.remove('show-flex');
        this.classList.add('hide');
    })
}

export default closeModalBg;