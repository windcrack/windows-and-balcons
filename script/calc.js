function calc(){
    const summTotal = document.querySelector('.summ-total b');
    // Object
    const ojects = document.querySelectorAll('.oject-value');
    // window
    const windows = document.querySelectorAll('.widow-value');
    // size
    const size = document.querySelectorAll('.size');
    const width = document.querySelector('.dimensions-windth');
    const height = document.querySelector('.dimensions-height');
    // 
    let orientSumm, summDimensions, objectValue = 0, windowValue = 0;
    // convert to string
    const strToNumber = (str) => str.value ? parseInt(str.value) : 0;
    // size input for
    size.forEach(input => {
        input.addEventListener('input', ()=>{
            calcTotalDim();
        })
    })
    // oject select for
    ojects.forEach(objectSelect => {
        objectSelect.addEventListener('click', () =>{
            if(objectSelect.checked == true){
                objectValue = strToNumber(objectSelect);
            }else{
                objectValue = 0;
            }
            calcTotalDim();

        })
    })
    // window select for
    windows.forEach(windowSelect => {
        parseInt(windowSelect.value);
        windowSelect.addEventListener('click', () =>{
            if(windowSelect.checked == true){
                windowValue = strToNumber(windowSelect);
            }else{
                windowValue = 0;
            }
            calcTotalDim();

        })
    })

    const calcTotalDim = ()=>{
        summDimensions = (strToNumber(width) + strToNumber(height)) / 10;
        oreientSumm();
    }
 
    const oreientSumm = () =>{
        console.log(objectValue, windowValue);
        orientSumm = objectValue + windowValue + summDimensions;
        summTotal.textContent = orientSumm.toFixed();
    }
}

export default calc;