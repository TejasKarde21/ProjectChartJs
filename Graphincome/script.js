document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Monthly Sales',
            data: [63, 59, 80, 81, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const myChart = new Chart(ctx, config);

    // Add Anime.js animations
    myChart.config.options.animation = {
        onComplete: function(animation) {
            anime({
                targets: myChart.data.datasets[0].backgroundColor,
                backgroundColor: '#ffcccb',
                easing: 'easeInOutQuad'
            });
            anime({
                targets: '#chartCanvas',
                translateY: -100,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
            anime({
                targets: '#chartCanvas',
                opacity: 1,
                backgroundColor: 'rgba(216, 58, 58,0.2)',
                duration: 2000,
                easing: 'easeInOutQuad'
            });
        }
    };

    // Add tooltips and hover effects
    myChart.config.options.plugins = {
        tooltip: {
            callbacks: {
                label: function(context) {
                    return ` Sales: ${context.dataset.data[context.dataIndex]}`;
                }
            }
        }
    };
});
