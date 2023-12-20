'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Budget", "Spent"],
                datasets: [{
                    data: [704, 46],
                    borderColor: [
                        "rgb(134 239 172)",
                        "rgb(255, 205, 86)",

                    ],
                    backgroundColor: [
                        "rgb(134 239 172)",
                        "rgb(255, 205, 86)",
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            <h1 className="w-[65%] mx-auto mt-10 text-xl font-semibold capitalize items-center">Budget Breakdown</h1>
            <div className="w-[65%] flex mx-auto my-auto mt-6 justify-center items-center">
                <div className='border border-gray-200 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2 justify-center'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;