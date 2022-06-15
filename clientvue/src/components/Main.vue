<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <apexchart height="400" type="candlestick" :options="chartOptions" :series="formattedData"/>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    animations: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      graf:[]
    };
  },
  computed: {
    chartOptions() {
      return {
        title: {
          text: "AAPL",
          align: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: false
          }
        },
        chart: {
          animations: {
            enabled: this.animations
          },
          zoom: {
            autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566
          }
        }
      };
    },
    formattedData() {
      // var count =  moment().month(this.month).daysInMonth();
      // var days = [];
      // for (var i = 1; i < count+1; i++) {
      //
      //   this.graf[i-1]= String(days.push(moment().month(this.month).date(i)));
      //
      // }
      let d= ["2015", "2016", "2017", "2018", "2019","1", "2", "3", "4", "5"]
      const stockSeries = this.chartData.map(() => {
        return {
          x: d,
          y: d
        };
      });
      return [{ data: stockSeries }];
    }
  }
};
</script>

