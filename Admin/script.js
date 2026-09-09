const ctx = document.getElementById("pemasukan");

new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],

    datasets: [
      {
        label: "Pemasukan",

        data: [12, 15, 18, 20, 17, 25],

        borderWidth: 1,
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
