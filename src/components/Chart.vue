<template>
  <div id="chart" class="bg-white mt-7 rounded-lg mb-40 !font-['rubik']">
    <apexchart
      type="line"
      height="402"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let series = [
  {
    name: "Homiylar",
    data: [
      4000,
      8700,
      33800,
      34500,
      44800,
      44250,
      46000,
      55300,
      34000,
      32000,
      37000,
      39000,
    ],
  },
  {
    name: "Talabalar",
    data: [
      5000,
      11500,
      12000,
      14500,
      12600,
      16000,
      18000,
      21000,
      40000,
      43000,
      40000,
      54000,
    ],
  },
];
let chartOptions = {
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "red ",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#4C6FFF", "#FF92AE"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Homiylar va talabalar soni",
    margin: 24,
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2E384D",
    },
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "Aprel",
      "May",
      "June",
      "July",
      "August",
      "Sentabr",
      "October",
      "November",
      "December",
    ],
    title: {},
  },
  yaxis: {
    type: "category",
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    floating: true,
    offsetY: -27,
    offsetX: -20,
  },
  toolbar: {
    show: true,
  },
};
</script>
