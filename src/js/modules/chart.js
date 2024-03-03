class Chart {
  activeChartId = 4;
  chartActiveText = '';
  chartDescElement;
  chartListElements;
  circleElements = [];
  constructor({ radius = 300, stroke = 40, textSize = 40 }, chartData, parent) {
    this.options = { radius, stroke, textSize };
    this.chartData =
      chartData && Array.isArray(chartData) && chartData.length > 0
        ? chartData
        : [{ name: 'value', color: '#80CCE0', procent: 100 }];
    this.parent = document.querySelector(parent);
  }

  circleLength() {
    return Math.floor(Math.PI * 2 * this.options.radius);
  }

  calculatePercentageOfCircle(procent) {
    const circleLengthValue = this.circleLength();
    return (circleLengthValue / 100) * procent;
  }

  calculateAngleFromPercentage(procent) {
    return (360 / 100) * procent;
  }

  calculateRemainingLength(procent) {
    return Math.floor(
      this.circleLength() - this.calculatePercentageOfCircle(procent)
    );
  }

  createSvgElement(element, args) {
    const elem = document.createElementNS(
      'http://www.w3.org/2000/svg',
      element
    );

    if (args && typeof args === 'object') {
      Object.entries(args).map(([key, value]) => elem.setAttribute(key, value));
    }
    return elem;
  }

  createDOMElement(elementType, args) {
    const domElem = document.createElement(elementType);

    if (args && typeof args === 'object') {
      Object.entries(args).map(([key, value]) =>
        domElem.setAttribute(key, value)
      );
    }

    return domElem;
  }

  createChartDescription() {
    const chartTitleTextElement = this.createDOMElement('div', {
      class: 'chart_text',
    });
    chartTitleTextElement.innerHTML = `Total supply <br> 200 000 000`;

    this.chartDescElement = this.createDOMElement('div', {
      class: 'chart_text_active',
    });
    this.chartDescElement.textContent = this.chartActiveText;

    chartTitleTextElement.appendChild(this.chartDescElement);
    this.parent.appendChild(chartTitleTextElement);
  }

  createChartListElements(chartData) {
    const parent = document.querySelector('.left__wrapper');
    this.chartListElements = chartData.map((i, num) => {
      const listElement = this.createDOMElement('div', {
        class: 'tocenomics__item',
        'data-id-chart': num,
      });
      listElement.textContent = i.name;
      parent.appendChild(listElement);
      return listElement;
    });
  }
  removeClass(elements) {
    elements.forEach((elem) => elem.classList.remove('active'));
  }

  activeChartElement(e) {
    this.removeClass(this.circleElements);
    this.circleElements[this.activeChartId].classList.add('active');
    this.chartDescElement.textContent = `${this.chartData[this.activeChartId].name} ${this.chartData[this.activeChartId].procent}%`;
    if(!e) {
      return; 
    }
    const {target} = e; 
    this.chartActiveText = `${this.chartData[0].name} ${this.chartData[0].procent}%`;

    this.activeChartId = target.getAttribute('id');
    this.chartData.map((chart, num) => {
      if (+this.activeChartId === num) {
        this.removeClass(this.circleElements);
        this.chartDescElement.textContent = `${chart.name} ${chart.procent}%`;
        target.classList.add('active');
      }
    });
    this.activeListElement();
  }
  activeListElement() {
    this.chartListElements.map((i, num) => {
      if (+this.activeChartId === num) {
        i.classList.add('active');
      } else {
        i.classList.remove('active');
      }
      i.addEventListener(
        'click',
        ({ target }) => {
          this.activeChartId = target.getAttribute('data-id-chart');
          this.activeChartElement();
          this.removeClass(this.chartListElements);
          if (+this.activeChartId === num) {
            i.classList.add('active');
          }
        },
        { passive: true }
      );
    });
  }
  createCircleChart() {
    const svg = this.createSvgElement('svg', {
      width: 600,
      height: 600,
      viewBox: '0 0 708 709',
      fill: 'none',
      class: 'svg__chart',
    });
    const circleGroup = this.createSvgElement('g');

    let angleValue = 0;

    this.chartData.map((i, num) => {
      const circle1 = this.createSvgElement('circle', {
        class: 'svg__circle',
        id: num,
        cx: '50%',
        cy: '50%',
        r: '300',
        stroke: i.color,
        'stroke-width': this.options.stroke,
        'stroke-dasharray': this.circleLength() - 10,
        'stroke-dashoffset': this.calculateRemainingLength(i.procent),
        style: `transform:rotate(${angleValue}deg); transform-origin: 50% 50%`,
      });
      circle1.addEventListener('click', (e) => {
        this.activeChartElement(e);
      });
      circleGroup.appendChild(circle1);
      angleValue += this.calculateAngleFromPercentage(i.procent);
    });

    this.circleElements = circleGroup.querySelectorAll('.svg__circle');
    this.createChartDescription();
    this.createChartListElements(this.chartData);
    this.activeListElement();
    this.activeChartElement();
    const circleDecor = this.createSvgElement('circle', {
      r: '240',
      cx: '50%',
      cy: '50%',
      stroke: '#ffffff52',
      'stroke-width': 1,
    });

    svg.appendChild(circleGroup);
    svg.appendChild(circleDecor);

    let angleValueText = 0;
    this.chartData.map((i, num) => {
      const gWrapperText = this.createSvgElement('g', {
        style: `transform: rotate(${
          angleValueText + this.calculateAngleFromPercentage(i.procent) / 2
        }deg); transform-origin: 50% 50%;`,
      });

      const text = this.createSvgElement('text', {
        x: '90%',
        y: '50%',
        fill: 'white',
        class: 'text',
        style: `transform: rotate(${
          360 -
          angleValueText -
          this.calculateAngleFromPercentage(i.procent) / 2
        }deg); transform-origin: 92% 49%; font-size: ${this.options.textSize}`,
      });
      text.textContent = i.procent + '%';
      gWrapperText.appendChild(text);
      angleValueText += this.calculateAngleFromPercentage(i.procent);
      svg.appendChild(gWrapperText);
    });
    this.parent.appendChild(svg);
  }
}

const cart1 = new Chart(
  {
    radius: 300,
    stroke: 55,
    textSize: 25,
  },
  [
    {
      name: 'Private Sale',
      color: '#8aa4e0',
      procent: 26,
    },
    {
      name: 'Public Sale',
      color: '#8aa4e0',
      procent: 3,
    },
    {
      name: 'Team',
      color: '#8aa4e0',
      procent: 15,
    },
    {
      name: 'Partners',
      color: '#8aa4e0',
      procent: 6,
    },
    {
      name: 'Community',
      color: '#8aa4e0',
      procent: 30,
    },
    {
      name: 'CEX Liquidity',
      color: '#8aa4e0',
      procent: 5,
    },
    {
      name: 'Strategic',
      color: '#8aa4e0',
      procent: 15,
    },
  ],
  '.chart'
);
// const cart1 = new Chart(
//   {
//       radius: 300,
//       stroke: 55,
//     },
//     [
//       {
//         name: 'value',
//         color: '#80CCE0',
//         procent: 55,
//       },
//     {
//       name: 'value 2',
//       color: '#80CCE0',
//       procent: 15,
//     },
//     {
//       name: 'value3',
//       color: '#80CCE0',
//       procent:30,
//     },

//   ]
// );

export { cart1 };
