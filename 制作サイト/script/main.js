

// 学習時間の棒グラフ

var barChartData = {
    labels: ['9/2','9/3','9/4','9/5','9/6','9/7','9/8',
             '9/9','9/10','9/11','9/12','9/13','9/14'],
    datasets: [
      {
        label: 'blue',
        data: ['0.2','0.3','0.11','0.5','0.2','0.5','0.4',
             '0.17','0.3','0.7','0.3','0.6','0.4'],
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
      labels: ["賛成", "反対", "わからない", "未回答"], //データ項目のラベル
      datasets: [{
          backgroundColor: [
              "#c97586",
              "#bbbcde",
              "#93b881",
              "#e6b422"
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

  var ctx = document.getElementById("myDoughnutChart2");
  var myDoughnutChart2= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["賛成", "反対", "わからない", "未回答"], //データ項目のラベル
      datasets: [{
          backgroundColor: [
              "#c97586",
              "#bbbcde",
              "#93b881",
              "#e6b422"
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
