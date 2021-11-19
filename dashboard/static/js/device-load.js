/* This script performs the AJAX requests */

//When running
//Make sure that the monitor/monitor.py is running
//Now start the dashboard/app.py flask app
//Open http://127.0.0.1:5000 and load the dynamic chart page


//Pie chart
var pieChartCanvas = document.getElementById('Device-Load-Pie')
var pieData = {
    labels: ['CPU Use', 'Idle'],
    datasets: [{
    data: [36, 64],
    borderWidth: 2,
    borderAlign: 'inner',
    borderWidth: 2,
    borderAlign: 'inner',
    backgroundColor: [
        'rgba( 255, 190, 11, 1)',
        'rgba( 251, 86, 7, 1)',
    ],
    borderColor: [
        'rgba( 255, 0, 110, 1)',
        'rgba( 131, 56, 236, 1)',
    ],
  }],
}


var pieOptions = {}

var myPieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: pieData,
    options: pieOptions,
})




