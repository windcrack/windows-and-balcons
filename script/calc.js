function calc(){
    const nexBtn1 = document.querySelector('.next-btn1');
    const nexBtn2 = document.querySelector('.next-btn2');
    const nexBtn3 = document.querySelector('.next-btn3');
    const nexBtn4 = document.querySelector('.next-btn4');
    const step1 = document.querySelector('.calck-oject');
    const step2 = document.querySelector('.calck-type-window');
    const step3 = document.querySelector('.calck-dimensions');
    const step4 = document.querySelector('.calck-summ');
    const step5 = document.querySelector('.calck-form');
    const objectValue = document.querySelectorAll('.oject-value');
    const windowValue = document.querySelectorAll('.window-value');
    const dimensionsValue = document.querySelectorAll('.dimensions-value');
    const summValue = document.querySelectorAll('.summ-value');

    function changeBlock(button, blockPrev, blockNext){
        button.addEventListener('click', ()=>{
            blockPrev.style.display = 'none';
            blockNext.style.display = 'flex';
        })
    }

    function checkSelect(arrVal, button, blockPrev, blockNext){
        arrVal.forEach(item =>{
            item.addEventListener('input', ()=>{
                if(item.checked === true){
                    changeBlock(button, blockPrev, blockNext);
                }
            })
        })
    }

    checkSelect(objectValue, nexBtn1, step1, step2);
    checkSelect(windowValue, nexBtn2, step2, step3);
    checkSelect(dimensionsValue, nexBtn3, step3, step4);
    checkSelect(summValue, nexBtn4, step4, step5);

    // changeBlock(nexBtn3, step3, step4);
    // changeBlock(nexBtn4, step4, step5);
}


export default calc