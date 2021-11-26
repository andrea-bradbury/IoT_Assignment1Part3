//AJAX Request
//Dynamically call and update data

//URL
let url_lineDynamic = 'http://127.0.0.1:5000/api/cpu-load';

//Method
let method_lineDynamic = 'GET';

//Response type
let typeOfResponse_5 = 'json';


//Create a new request
let xhr_lineDynamic = new XMLHttpRequest();

xhr_lineDynamic.onload = function() {

    //Graph
    let lineChartCanvas1 = document.getElementById('CPU-Line-Chart')

    var lineData = {
        labels: ["Load 1", "Load 2", "Load 3","Load 4", "Load 5", "Load 6" , "Load 7", "Load 8",
        ],
        datasets: [
            {
                label: 'CPU load',
                line: '',
                data: [35, 40, 55, 64, 44, 78, 80, 65],
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

    var myDynamicLineChart = new Chart(lineChartCanvas1, {
        type: 'line',
        data: lineData,
        options: lineOptions,
    })
}

/*


//Initialise the request
xhr_lineDynamic.open(method_lineDynamic, url_lineDynamic);

xhr_lineDynamic.responseType = typeOfResponse_5;

//Send the request
xhr_lineDynamic.send();

var counter = 0
//Load

xhr_lineDynamic.onLoad = function() {
    let responseObj = xhr.response;

    for (let responseNumber in responseObj) {
        let dynamicData = responseObj[responseNumber]
        myRandomLineChart.data.labels.push(dynamicData.created_at)
        myRandomLineChart.data.datasets[0].data.push(dynamicData.load)
        if (counter >25) {
            myRandomLineChart.data.labels.pop()
            myRandomLineChart.data.datasets[0].data.pop()
            myRandomLineChart.update()
            counter ++
        }
    }

};

setInterval(lineRandomUpdate, 5000);


*/


//Error
xhr.onerror = function() {
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




var z = new Ziggurat();


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

