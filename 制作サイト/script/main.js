

// 学習時間の棒グラフ

var barChartData = {
  // からの配列を作る
    labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','26','','28','','30',''],
    datasets: [
      {
        label: 'blue',
        data: ['3','5','5','4','2','5','4','7','3','7','3','6','4','2','3','1','5','2','5','4','2','3','5','5','2','3','4','2','3','8','5'],
        borderColor : "rgba(54,164,235,0.8)",
        backgroundColor : "rgba(54,164,235,0.5)"
      },
    ],
  };
  
  var complexChartOption = {
    responsive: true,
  };
  
  window.onload = function() {
    ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      // options: complexChartOption
      options :{
        scales: {
          xAxes: [{
            display: true,
            stacked: false,
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 8,
              stepSize: 2
            }
          }]
        }
      }
    });
  };


//   学習コンテンツドーナツグラフ



  var ctx = document.getElementById("myDoughnutChart1");
  var myDoughnutChart1= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["JavaScript", "CSS", "PHP", "HTML"], 
      //データ項目のラベル
      // ラベルを消してHTMLCSSで調整する
      datasets: [{
          backgroundColor: [
              "#0345ec",
              "#0f71bd",
              "#20bdde",
              "#3cccefe"
          ],
          data: [45, 32, 18, 5] //グラフのデータ
      }]
    },
    options: {
      title: {
        display: true,

        //グラフタイトル
      },
      legend:{
        display:false
      },
    }
  });

  var ctx = document.getElementById("myDoughnutChart2");
  var myDoughnutChart2= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["賛成", "反対", "わからない", "未回答"], //データ項目のラベル
      datasets: [{
          backgroundColor: [
            "#0345ec",
            "#0f71bd",
            "#20bdde",
            "#3cccefe"
          ],
          data: [45, 32, 18, 5] //グラフのデータ
      }]
    },
    options: {
      title: {
        display: true,
        //グラフタイトル
        text: '新法案賛否'
      }
    }
  });




//  モーダルローディング
var button = $('.button'),
    spinner = '<span class="spinner"></span>';

button.click(function() {
  if (!button.hasClass('loading')) {
    button.toggleClass('loading').html(spinner);
  }
  else {
    button.toggleClass('loading').html("Load");
  }
}) 