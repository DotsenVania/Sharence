export default function emojesMouseMove() {
    const emojesItemOne = document.querySelector('.img_1'); 
    const emojesItemTwo = document.querySelector('.img_2'); 
    const emojesItemThree = document.querySelector('.img_3'); 
    const emojesItemFour = document.querySelector('.img_4'); 
    const emojesItemFive = document.querySelector('.img_5'); 

    document.addEventListener('mousemove', (e) => {
        console.log(`translate(${e.offsetX / 2}px, ${e.offsetY / 2}px);`); 
        let valuesBack = {
            x: e.clientX / 13 + '%',
            y: e.clientY / 13 + '%'
        }
        let valuesFront = {
            x: e.clientX / 5 + '%',
            y: e.clientY / 5 + '%'
        }
        moveSelector(emojesItemOne, valuesBack)
        moveSelector(emojesItemTwo, valuesBack)
        moveSelector(emojesItemThree, valuesFront)
        moveSelector(emojesItemFour, valuesFront)
        moveSelector(emojesItemFive, valuesBack)
    })
    function moveSelector( selector, values) {
        selector.style.transform = `translate(${values.x}, ${values.y})`
    }

}
