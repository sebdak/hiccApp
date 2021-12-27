import { React, html } from "../imports.js";
import supabaseClient from "../supabaseClient.js";

function HiccupChart() {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    supabaseClient
      .from("hiccups")
      .select()
      .then((data) => {
        const dataset = {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
        };
        data.body.forEach((row) => {
          const hour = new Date(row.timestamp).getHours();
          dataset[hour]++;
        });
        chartRef.current = new Chart(canvasRef.current?.getContext("2d"), {
          type: "bar",
          data: {
            labels: Object.keys(dataset),
            datasets: [
              {
                label: "Hiccups by time of day",
                data: Object.values(dataset),
                backgroundColor: "#1a1a1a",
              },
            ],
          },
        });
      });
    supabaseClient
      .from("hiccups")
      .on("INSERT", (payload) => {
        const hour = new Date(payload.new.timestamp).getHours();
        chartRef.current.data.datasets[0].data[hour]++;
        chartRef.current.update();
      })
      .subscribe();
  }, []);

  return html`<canvas ref=${canvasRef} width="400" height="300"></canvas>`;
}

export default HiccupChart;
