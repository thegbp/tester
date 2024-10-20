// Get the canvas context for Chart.js
var ctx = document.getElementById('myChart').getContext('2d');

// Initialize a simple chart
var myChart = new Chart(ctx, {
    type: 'bar', // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['Value'], // X-axis label
        datasets: [{
            label: '# of Votes',
            data: [10], // Initial value
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the chart based on user input
function updateGraph() {
    var inputValue = document.getElementById('inputValue').value;
    myChart.data.datasets[0].data[0] = inputValue;
    myChart.update(); // Update the chart
}
