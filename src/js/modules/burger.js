class BurgerActive {
    selectorBurgerBlock; 
    selectorIconBurger;
    burgerBlock;
    burgerIcon ;
    html = document.body; 
    constructor(selectorBurgerBlock, selectorIconBurger) {
        this.selectorBurgerBlock = selectorBurgerBlock; 
        this.selectorIconBurger = selectorIconBurger; 
        this.burgerBlock = document.querySelector(this.selectorBurgerBlock);
        this.burgerIcon = document.querySelector(this.selectorIconBurger);
    }

    toggleActive () {
        this.burgerIcon.addEventListener('click', (e) => {
            this.burgerIcon.classList.toggle('active');
            this.burgerBlock.classList.toggle('active'); 
            this.html.classList.toggle('active');
        })
    }
};

export {BurgerActive}