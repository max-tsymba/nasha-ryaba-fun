/*====================================IMPORT MODULES====================================*/
import { burgerOpener } from './modules/libs';
/*======================================================================================*/


/*======================================DOM LOADED======================================*/
window.addEventListener('DOMContentLoaded', () => {
    burgerOpener('burger', '.header__menu', '.header__menu-close', '.header__menu-link');
    burgerOpener('reg__button', '#overlay', '.close-btn');
});
/*======================================================================================*/