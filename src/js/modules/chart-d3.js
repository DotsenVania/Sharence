export default class ChartD3 {
  activeCartElement = 'Private Sale'.toUpperCase();
  chartDataHTMLElements;

  constructor(data) {
    this.data = data;
  }

  createArc(radius, innerRadiusFactor, outerRadiusOffset) {
    return d3
      .arc()
      .innerRadius(radius * innerRadiusFactor)
      .outerRadius(radius - outerRadiusOffset);
  }

  createPie(padAngleValue) {
    return d3
      .pie()
      .padAngle(padAngleValue / Math.PI)
      .sort(null)
      .value((d) => d.procent);
  }

  createCircle(svg) {
    svg
      .append('circle')
      .attr('fill', 'none')
      .attr('x', '50%')
      .attr('y', '50%')
      .attr('r', '35%')
      .attr('strokeWidth', '1px')
      .attr('stroke', '#ffffff52');
  }

  activeChartElement(activeElement) {
    d3.selectAll('path').attr('class', (d) => {
      if (typeof d === 'undefined') {
        return;
      }
      this.activeCartElement = activeElement;
      if (this.activeCartElement === d.data.name.toUpperCase()) {
        d3.selectAll('.text-bottom').text(
          d.data.name + ' ' + d.data.procent + '%'
        );
        return 'active';
      } else {
        return '';
      }
    });
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
  generateChartDataHTML(parentElement) {
    this.data.forEach((i) => {
      const listElement = this.createDOMElement('div', {
        class: 'tocenomics__item',
      });

      listElement.textContent = i.name;

      parentElement.append(listElement);
    });
  }

  activeChartHTMLElement() {
    this.chartDataHTMLElements.forEach((i) => {
      
      const  clickChartHTMLElement = () => {
        this.activeChartElement(i.textContent.toUpperCase());
        this.activeChartHTMLElement();
        this.chartDataHTMLElements.forEach((i) => {
          i.removeEventListener('click', clickChartHTMLElement);
        })

      } 
      
      i.addEventListener('click', clickChartHTMLElement, {once: true});
      

      if (i.textContent.toUpperCase() === this.activeCartElement) {
        i.classList.add('active');
      } else {
        i.classList.remove('active');
      }
    });
  }

  createPieChart() {
    const parentElementForChartDataHTML = document.querySelector('.left__wrapper');
    this.generateChartDataHTML(parentElementForChartDataHTML);
    this.chartDataHTMLElements = test.querySelectorAll('.tocenomics__item');
    this.activeChartHTMLElement();

    let data = this.data;
    const width = Math.min(600, 600);
    const height = Math.min(width, 600);
    const radius = Math.min(width, height) / 2;

    const arc = this.createArc(radius, 0.8, 6);

    const pie = this.createPie(0.1);

    const color = d3.scaleLinear([0, 1, 1], ['#80A0E2', '#E1C8CC', '#80CCE0']);

    const svg = d3
      .create('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('style', 'max-width: 100%; height: auto;');
    let num = 0;
    svg
      .append('g')
      .selectAll()
      .data(pie(data))
      .join('path')
      .attr('fill', (d) => {
        return color(num += 0.1);
      })
      .attr('data-name', (d) => d.data.name.toUpperCase())
      .attr('class', (d) => (d.data.name.toUpperCase() === this.activeCartElement ? 'active' : ''))
      .attr('style', (d) => 'cursor: pointer;')
      .attr('d', arc)
      .on('click', (e) => {
        d3.selectAll('path').attr('class', (d) => {
          if (typeof d === 'undefined') {
            return;
          }

          if (
            e.target.getAttribute('data-name') === d.data.name.toUpperCase()
          ) {
            this.activeCartElement = d.data.name.toUpperCase();
            this.activeChartHTMLElement();
            d3.selectAll('.text-bottom').text(
              d.data.name + ' ' + d.data.procent + '%'
            );
            return 'active';
          } else {
            return '';
          }
        });
      });

    this.createCircle(svg);

    svg
      .append('text')
      .attr('class', 'text-bottom')
      .attr('style', 'font-weight: 700; font-size: 40px;')
      .attr('fill', '#60acbe')
      .attr('x', '0%')
      .attr('y', '5%')
      .attr('strokeWidth', '1px')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(() => {
        const activeData = data.filter((item) => item.name.toUpperCase() === this.activeCartElement)[0];
        return `${activeData.name} ${activeData.procent}%`;
      });

    svg
      .append('text')
      .attr('fill', 'white')
      .attr('class', 'text-top')
      .attr('x', '0%')
      .attr('y', '-5%')
      .attr('style', 'font-weight: 400; font-size: 40px; white-space: pre;') // Додали white-space: pre
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .html(function () {
        return "<tspan x='0' dy='-1.2em'>Total supply</tspan><tspan x='0' dy='1.2em'>200 000 000</tspan>";
      });

    svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 28)
      .attr('text-anchor', 'middle')
      .selectAll()
      .data(pie(data))
      .join('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .call((text) =>
        text
          .filter((d) => d.endAngle - d.startAngle > 0.15)
          .append('tspan')
          .attr('x', 0)
          .attr('y', '0.4em')
          .attr('fill-opacity', 0.7)
          .attr('fill', 'white')
          .attr('pointer-events', 'none')
          .text((d) => d.data.procent + '%')
      );

    container.append(svg.node());
  }
}
