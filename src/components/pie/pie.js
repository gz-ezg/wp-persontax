import F2 from '../f2-canvas/lib/f2';

let chart = null;
let count = [
  { name: '芳华', percent: 12, a: '1' },
  { name: '妖猫传', percent: 6, a: '1' },
];
function initChart(canvas, width, height) {
  const data = count
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data, {
    percent: {
      formatter(val) {
        return val * 100 + '%';
      }
    }
  });
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
    .color('name', ['#1890FF', '#13C2C2'])
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

Page({
  data: {
    opts: {
      // lazyLoad: true,
      onInit: initChart
    },
  },
  taxTotal(){
    // console.log("12")
  }
});
