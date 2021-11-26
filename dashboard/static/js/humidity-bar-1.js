
//Bar Graph for humidity

//AJAX Request

//URL
let url_humidity = 'http://127.0.0.1:5000/api/humidity';

//Method
let method_humidity  = 'GET';

//Response type
let typeOfResponse_3 = 'json';


//Create a new request
let xhr_humidity = new XMLHttpRequest();

//Initialise the request
xhr_humidity.open(method_humidity, url_humidity);

xhr_humidity.responseType = typeOfResponse_3;

//Send the request
xhr_humidity.send();

//Load
xhr_humidity.onLoad = function() {

    //Graph
    var chartCanvas2 = document.getElementById('Humidity-Bar')

    var barData = {
        labels: ['Humidity'],
        datasets: [{
            label: 'Humidity',
            data: [38,100],
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

    var myChart2 = new Chart(chartCanvas2, {
        type:'bar',
        data: barData,
        options: barOptions,
    })

     let responseObj = xhr_humidity.response;

    for (let responseNumber in responseObj) {
        let response = responseObj[responseNumber]
        console.log(response.load)
        myChart2.data.datasets[0].data.unshift(response.load)
        myChart2.update()
    }


};

//Error
xhr_humidity.onerror = function() {
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


