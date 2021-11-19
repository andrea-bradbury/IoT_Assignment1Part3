
//Bar Graph for temp

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

