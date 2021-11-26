/* This script performs the AJAX requests */

//When running
//Make sure that the monitor/monitor.py is running
//Now start the dashboard/app.py flask app
//Open http://127.0.0.1:5000 and load the dynamic chart page

//AJAX Request

//URL
let url_deviceLoad = 'http://127.0.0.1:5000/api/cpu-load';

//Method
let method_deviceLoad = 'GET';

//Response type
let typeOfResponse_1 = 'json';

//Create a new request
let xhr_deviceLoad = new XMLHttpRequest();

//Initialise the request
xhr_deviceLoad.open(method_deviceLoad, url_deviceLoad);

xhr_deviceLoad.responseType = typeOfResponse_1;

//Send the request
xhr_deviceLoad.send();

//Load
xhr_deviceLoad.onLoad = function() {

    //Pie chart
    var pieChartCanvas = document.getElementById('Device-Load-Pie')
    var pieData = {
        labels: ['CPU Use', 'Idle'],
        datasets: [{
        data: [13, 100],
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

    let responseObj = xhr_deviceLoad.response;

    for (let responseNumber in responseObj) {
        let response = responseObj[responseNumber]
        console.log(response.created_at)
        console.log(response.load)
        myPieChart.data.labels = response.created_at
        myPieChart.data.datasets[responseNumber].data = response.load
        myPieChart.update()
    }


};

//Error
xhr_deviceLoad.onerror = function() {
    alert('Request Failed');
};

/*
//Progress
xhr.onprogress function(event) {
    if (event.lengthComputable) {
        alert('Received ${event.loaded} of ${event.total}');
    } else{
        alert('Received ${event.loaded} bytes');
    }

};
*/





