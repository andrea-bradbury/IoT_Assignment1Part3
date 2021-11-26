//Bar Graph for temp

//AJAX Request

//URL
let url_temperature = 'http://127.0.0.1:5000/api/temperature';

//Method
let method_temperature = 'GET';

//Response type
let typeOfResponse_2 = 'json';

//Create a new request
let xhr_temperature = new XMLHttpRequest();

//Load
xhr_temperature.onLoad = function() {

    //Creating Graph

    var chartCanvas1 = document.getElementById('Temperature-Bar')
    var barData = {
        labels: ['Temperature'],
        datasets: [{
            label: 'Temperature',
            data:  [25,100],
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

    var myChart1 = new Chart(chartCanvas1, {
        type:'bar',
        data: barData,
        options: barOptions,
    })



    //Initialise the request
    xhr_temperature.open(method_temperature, url_temperature);

    xhr_temperature.responseType = typeOfResponse_2;

    //Send the request
    xhr_temperature.send();
        let responseObj = xhr_temperature.response;

    for (let responseNumber in responseObj) {
        let response = responseObj[responseNumber]
        console.log(response.temperature)
        myChart1.data.datasets[responseNumber].data = response.temperature
        myChart1.update()
    }


};

//Error
xhr_temperature.onerror = function() {
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


