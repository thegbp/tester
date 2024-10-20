// Get the canvas context for Chart.js
var ctx = document.getElementById('myChart').getContext('2d');

// Initialize a simple chart
var myChart = new Chart(ctx, {
    type: 'bar', // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['# of Loans', 'Avg Interest', 'Min Payment', 'Planned Payment'], // X-axis labels
        datasets: [{
            label: 'Loan Data',
            data: [5, 5, 200, 300], // Initial values
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
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
    var numLoans = document.getElementById('numLoans').value;
    var avgInterest = document.getElementById('avgInterest').value;
    var minPayment = document.getElementById('minPayment').value;
    var payPerMonth = document.getElementById('payPerMonth').value;

    // Update chart data with new values from inputs
    myChart.data.datasets[0].data = [numLoans, avgInterest, minPayment, payPerMonth];
    myChart.update(); // Update the chart
}

// Function to show the HubSpot form
function showHubSpotForm() {
    document.getElementById('hubspotForm').style.display = 'block';
}
