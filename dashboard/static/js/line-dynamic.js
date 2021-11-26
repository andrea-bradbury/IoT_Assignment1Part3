//AJAX Request
//Dynamically call and update data
var lineDynamicUpdate = function() {
     //URL
    let url = 'http://127.0.0.1:5000/api/cpu-load';

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
}



//Load
xhr.onLoad = function() {
    let responseObj = xhr.response;

    for (let responseNumber in responseObj) {
        let dynamicData = responseObj[responseNumber]
        myRandomLineChart.data.labels.unshift(dynamicData.created_at)
        myRandomLineChart.data.datasets[0].data.unshift(dynamicData.load)
        if (counter >25) {
        myRandomLineChart.data.labels.pop()
        myRandomLineChart.data.datasets[0].data.pop()
        myRandomLineChart.update()
        counter ++
        }
    }

};

setInterval(lineRandomUpdate, 5000);

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


let lineChartCanvas1 = document.getElementById('CPU-Chart')
var lineData = {
    datasets: [
        {
            label: 'Data',
            line: '',
            data: [0],
            borderWidth: 2,
            lineTension: 0.2,
            fill: false,
            borderColor: [
                'rgba(128, 64, 65, 1)',
            ],
        },
    ],
}

var lineOptions = {
    legend: {display: false},
    title: {
        display: true,
        text: 'CPU Load'
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Time',
            },
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Percentage',
            },
            ticks: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 100,
            },
        }],
    },
}

var myRandomLineChart = new Chart(lineChartCanvas1, {
    type: 'line',
    data: lineData,
    options: lineOptions,
})

var z = new Ziggurat();

var counter = 0
var lineRandomUpdate = function () {
    var randomData = clamp(z.nextGaussian()*5,-5,10)
    myRandomLineChart.data.labels.push(counter)
    myRandomLineChart.data.datasets[0].data.push(randomData)
    if (counter > 25) {
        myRandomLineChart.data.labels.shift()
        myRandomLineChart.data.datasets[0].data.shift()
    }
    myRandomLineChart.update()
    counter++
}

setInterval(lineRandomUpdate, 1000);