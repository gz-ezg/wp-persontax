import F2 from '../f2-canvas/lib/f2';

let chart = null;
let count = [
  { name: '应纳个税', percent: 12, a: '1' },
  { name: '税后工资', percent: 6, a: '1' },
];
function initChart(canvas, width, height) {
  const data = count
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data);
  chart.legend({
    position: 'right',
    // itemFormatter(val) {
    //   return val + '  ' + map[val];
    // }
  });
  // chart.tooltip(false);
  chart.coord('polar', {
    transposed: true,
    radius: 1
  });
  chart.axis(false);
  chart.interval()
    .position('a*percent')
    .color('name', ['#f64a42', '#666666'])
    .adjust('stack')
    .style({
      lineWidth: 2,
      stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round'
    })
    .animate({
      appear: {
        duration: 1200,
        easing: 'bounceOut'
      }
    });

  chart.render();
  return chart;
}

Component({
  data: {
    opts: {
      // lazyLoad: true,
      onInit: initChart
    },
  },
  properties: {
    taxTotal: Number || String,
    taxAfter: Number || String
  },
  ready(){
    console.log(this.data.taxTotal)
    console.log(this.data.taxAfter)
    count[0].percent = this.data.taxAfter
    count[1].percent = this.data.taxTotal
  }
});
