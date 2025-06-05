let chart;

async function loadChart(algorithm) {
    // Fetch data from API
    const res = await fetch(`/api/${algorithm}`);
    // Store the response
    const data = await res.json();

    // Create chart
    const labels = data.map((step, index) => `${index}`);
    const values = data.map(step => parseInt(step.Position));

    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${algorithm.toUpperCase()} Disk Head Position`,
                data: values,
                fill: false,
                tension: 0.2,
                borderColor: '#F28C28',
                pointBackgroundColor: '#F28C28'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333'
                    }
                },
                title: {
                    display: true,
                    text: `${algorithm.toUpperCase()} Head Movement`,
                    color: '#333',
                    font: {
                        size: 18
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Step',
                        color: '#666'
                    },
                    ticks: {
                        color: '#666'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Position',
                        color: '#666'
                    },
                    ticks: {
                        color: '#666'
                    }
                }
            }
        }
    };

    // Destroy previous chart
    if (chart) chart.destroy();
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    chart = new Chart(ctx, config);
}

async function runSimulation() {
    try {
        const res = await fetch('/api/run-simulation', {
            method: 'POST'
        })
        const result = await res.json()

        if (res.ok) {
            console.log('Simulation successful')
        }
    } catch (err) {
        console.error(err)
    }
}
// Load FCFS on initial page load
loadChart('fcfs')


