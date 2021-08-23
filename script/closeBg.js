
function closeModalBg(bg){
    const closeBg = document.querySelector(bg);
    closeBg.addEventListener('click', function(e) {
        if(e.target.classList.contains('modal-bg')){
            this.classList.remove('show-flex');
            this.classList.add('hide');
        }else{
            return
        }
    })
}

export default closeModalBg;