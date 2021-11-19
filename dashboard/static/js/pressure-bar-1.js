
//Bar Graph for pressure

var chartCanvas1 = document.getElementById('Pressure-Bar')

var barData = {
    labels: ['Pressure'],
    datasets: [{
        label: 'Pressure',
        data: [50, 100],
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
