
//Bar Graph for pressure


//AJAX Request

//URL
let url_pressure = 'http://127.0.0.1:5000/api/pressure';

//Method
let method_pressure = 'GET';

//Response type
let typeOfResponse_4 = 'json';


//Create a new request
let xhr_pressure = new XMLHttpRequest();

//Initialise the request
xhr_pressure.open(method_pressure, url_pressure);

xhr_pressure.responseType = typeOfResponse_4;

//Send the request
xhr_pressure.send();

//Load
xhr_pressure.onLoad = function() {


    //Graph


    var chartCanvas3 = document.getElementById('Pressure-Bar')

    var barData = {
        labels: ['Pressure'],
        datasets: [{
            label: 'Pressure',
            data: [60,100],
            borderWidth: 1,
            backgroundColor: [
                'rgba( 131, 56, 236, 1)',
            ],
            borderColor: [
                'rgba( 58, 134, 255, 1)',
            ],
        }],
    }

    var barOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    }

    var myChart3 = new Chart(chartCanvas3, {
        type:'bar',
        data: barData,
        options: barOptions,
    })

    let responseObj = xhr_pressure.response;

    for (let responseNumber in responseObj) {
        let response = responseObj[responseNumber]
        console.log(response.pressure)
        myChart3.data.datasets[0].data = response.pressure
        myChart3.update()
    }

};

//Error
xhr_pressure.onerror = function() {
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

