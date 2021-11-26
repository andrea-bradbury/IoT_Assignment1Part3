
//Bar Graph for temp

//AJAX Request

//URL
let url = 'http://127.0.0.1:5000/api/temperature';

//Method
let method = 'GET';

//Response type
let typeOfResponse = 'json';


//Create a new request
let xhr = new XMLHttpRequest();

//Initialise the request
xhr.open(method, url);

xhr.responseType = typeOfResponse;

//Send the request
xhr.send();

//Load
xhr.onLoad = function() {
    let responseObj = xhr.response;

    for (let responseNumber in responseObj) {
        let response = responseObj[responseNumber]
        console.log(response.created_at)
        console.log(response.load)
        myChart1.data.labels.pop(response.created_at)
        myChart1.data.datasets[0].data.pop(response.load)
        myChart1.update()
    }

};

//Error
xhr.onerror = function() {
    alert('Request Failed');
};

//Progress
xhr.onprogress function(event) {
    if (event.lengthComputable) {
        alert('Received ${event.loaded} of ${event.total}');
    } else{
        alert('Received ${event.loaded} bytes');
    }

};


//Creating Graph

var chartCanvas1 = document.getElementById('Temperature-Bar')
var barData = {
    labels: ['Temperature'],
    datasets: [{
        label: 'Temperature',
        data: [23, 100],
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

