



(function($) {
    "use strict"

    let ctx = document.getElementById("chart_widget_2");
    ctx.height = 280;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
            datasets: [{
                data: [0, 15, 57, 12, 85, 10, 50],
                label: "StriveCoin",
                backgroundColor: 'transparent', // Removed fill
                borderColor: 'Red',
                borderWidth: 1.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'red',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: true, // Display x-axis
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true, // Display y-axis
                    gridLines: {
                        display: true,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true, // Ensures Y-axis starts at zero
                        autoSkip: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });
})(jQuery);

(function ($) {
    "use strict";

    $(".year-calendar").pignoseCalendar({
        theme: "blue"
    }), $("input.calendar").pignoseCalendar({
        format: "YYYY-MM-DD"
    });

})(jQuery);


