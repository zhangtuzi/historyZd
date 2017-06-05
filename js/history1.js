$(function(){
  $('.dateUL>li').on('touchend',function(){
    $('.dateUL>li').removeClass('dateS');
    $(this).addClass('dateS');
  })

  $('#historyBill').highcharts({
      chart: {
          //  type: 'line',
          margin: [0, 2, 2, 2],

          //距离上下左右的距离值
          plotBackgroundColor: null,
          plotBorderWidth: null

      },

      title: {
          text: '',
          style: {
              "fontSize": ".66rem",
              "color": "#666",
              "fontfamily": "微软雅黑"
          },
          align: 'center',
          verticalAlign: 'middle',
          x: 0,
          y: 10
      },

      tooltip: {
          pointFormat: ': <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              size: "100%",
              center: ['50%', '50%'],
              dataLabels: {
                  enabled: false,
              },
              showInLegend: true,
              innerSize: '50'
          }
      },

      legend: {
          enabled: false
      },
      credits: {
          enabled: false
      },
      series: [{
          type: 'pie',
          name: 'TITLE',
          innerSize: '60%',
          data: [{name: '月固定费',y: 20,color:'#ff7744'},//月固定费名称、比例、颜色
                 {name: '可视电话费',y: 30,color:'#44c8ff'},//可视电话费名称、比例、颜色
                 {name: '违约金',y: 50,color:'#76d84b'}//违约金名称、比例、颜色
               ]
      }]
  });

})
