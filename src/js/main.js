/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'

import BaseHelpers from './helpers/base-helpers';
import { BurgerActive } from './modules/burger';
import './modules/swipers';
import './helpers/seventh-block-helper';
import './helpers/more-list';
// import './helpers/hammerr'
import ChartD3 from './modules/chart-d3';
import emojesMouseMove from './helpers/emojes-move';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();
emojesMouseMove();
new BurgerActive('.burger-menu', '.burger-menu__icon').toggleActiveClick();
new ChartD3([
  {
    name: 'Private Sale',
    color: '#8aa4e0',
    procent: 26,
    active: false
  },
  {
    name: 'Public Sale',
    color: '#8aa4e0',
    procent: 3,
    active: false
  },
  {
    name: 'Team',
    color: '#8aa4e0',
    procent: 15,
    active: false
  },
  {
    name: 'Partners',
    color: '#8aa4e0',
    procent: 6,
    active: false
  },
  {
    name: 'Community',
    color: '#8aa4e0',
    procent: 30,
    active: true
  },
  {
    name: 'CEX Liquidity',
    color: '#8aa4e0',
    procent: 5,
    active: false
  },
  {
    name: 'Strategic',
    color: '#8aa4e0',
    procent: 15,
    active: false
  },{
    name: 'Strategics',
    color: '#8aa4e0',
    procent: 15,
    active: false
  },
]).createPieChart(); 

// const parrentChart = document.querySelector('.chart');
// cart1.createCircleChart(parrentChart);



