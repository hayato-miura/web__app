

// 学習時間の棒グラフ

var barChartData = {
    labels: ['2','4','6','8','10','12','14','16','18','20','22','24','26','28','30','32'],
    datasets: [
      {
        label: 'blue',
        data: ['0.2','0.3','0.11','0.5','0.2','0.5','0.4',
             '0.17','0.3','0.7','0.3','0.6','0.4',],
        borderColor : "rgba(54,164,235,0.8)",
        backgroundColor : "rgba(54,164,235,0.5)",
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
      options: complexChartOption
    });
  };


//   学習コンテンツドーナツグラフ
  var ctx = document.getElementById("myDoughnutChart1");
  var myDoughnutChart1= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["JavaScript", "CSS", "PHP", "HTML"], //データ項目のラベル
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
      }
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
