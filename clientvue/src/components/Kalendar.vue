<template>

  <b-container style="background-color: white">

    <main class="b-calendar">
      <Add v-if="adds"
           @close="adds = false"
           @done="addManually"/>
      <Edit v-if="edit"
           @close="edit = false"
           @done="editManually"/>
      <b-row>
        <b-col md="4">
          <div class="b-calendar__information">
            <div class="today d-flex justify-content-center align-items-center">

              <div class="weekDay">
                {{selectedWeekDay | capitalize}}
              </div>
              <div class="day">
                {{selectedDayAndMonth.day}}
              </div>

              <div class="month">
                {{selectedDayAndMonth.month | capitalize}}


              </div>

              <a href="#" id="goTodayLink" @click="goToday" v-show="!todayInCurrentMonthAndYear || !todayIsEqualSelectDate">
                Today
              </a>

              <b-tooltip target="goTodayLink" v-show="!todayInCurrentMonthAndYear || !todayIsEqualSelectDate">
                Back to today
              </b-tooltip>
              <div class="weekDay">
                <ul id="example-1" >
                  <li v-for="item in tasks" :key="item.title" v-if="item.date===Select" style=" list-style-type: none;" >
                    <a href="#" @click="edit=true; Edit(item._id)">AД:  {{ item.title }}</a>
                  </li>

                </ul>
                <p>{{this.ast}}</p>
                <p>{{this.norm}}</p>
                <p> {{this.you}}</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="8">
          <b-col md="1">
          <button v-show="but===true"class="double-border-button"
        @click="Start"></button>
          </b-col>
          <b-col class="col-md-11">
            <input type="checkbox" id="hmt" class="hidden-menu-ticker">
            <label class="btn-menu" for="hmt">
              <span class="first"></span>
              <span class="second"></span>
              <span class="third"></span>
            </label>
            <ul class="hidden-menu " style="text-align: left">
              <li></li>
              <li></li>
              <li style="margin-bottom: 150px"><a href="/profil">Профіль</a></li>
              <li><a href="#" @click="Log">Вийти</a></li>

            </ul>
          </b-col>
          <div class="b-calendar__calendar">
            <div class="b-calendar__header" style="background-color: white">
              <b-row>
                <b-col class="year text-right" align-h="end">
                  <span>{{year}}</span>
                </b-col>
              </b-row>
              <b-row align-v="center">
                <b-col class="text-left" align-h="start" >
                  <b-button id="subtractMonthBtn" class="arrow arrow-left" style="background-color: lightgrey;z-index: 99999999" variant="light" @click="subtractMonth">
                    <i class="fa fa-fw fa-chevron-left"></i>
                  </b-button>
                  <b-tooltip target="subtractMonthBtn">
                    {{previousMonthAsString | capitalize}}
                  </b-tooltip>
                </b-col>
                <b-col class="text-center" align-h="center" >
                  <span class="month">{{month}}</span>
                </b-col>
                <b-col class="text-right d-flex flex-row-reverse" align-h="end">
                  <b-button id="addMonthBtn" class="arrow arrow-right" style="background-color: lightgrey;z-index: 99999999" variant="light" @click="addMonth">
                    <i class="fa fa-fw fa-chevron-right" ></i>
                  </b-button>
                  <b-tooltip target="addMonthBtn"  style="background-color: white">
                    {{nextMonthAsString | capitalize}}
                  </b-tooltip>
                </b-col>
              </b-row>
            </div>
            <div class="b-calendar__weekdays" style="background-color: white">

              <div v-show="ap!==true" class="weekday" v-for="(day, index) in days" :key="index" >
                <strong >{{day}}</strong>
              </div>
            </div>

            <div  class="b-calendar__dates" style="background-color: white">
              <div v-show="ap===true" v-if="but===true">
                <button class="_block " style="width: 50px ;padding-left: 5px;border-color:transparent;color: lightgray; background-color: transparent" @click="ap=false">X</button>


<!--                <div class="_block">  <span class="day" ></span></div>-->
<!--                <div class="_block">  <span class="day" ></span></div>-->
<!--                <div class="_block">  <span class="day" ></span></div>-->
<!--                <div class="_block">  <span class="day" >Десятирічний фатальний ризик: {{this.alg}}</span></div>-->
<!--                <div class="_block">  <span class="day" >Pизик: {{this.ryz}}</span></div>-->
                <div class="col-md-12 " >
                  <span class="day "  >Десятирічний фатальний ризик: {{this.alg}}                                    </span>
<!--                  <span class="day" >Pизик: {{this.ryz}}</span>-->
                  <span class="day" style="color:white;" >kkkkkkkmmmmmmmmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkkkkk</span>
                </div>
                <div class="col-md-12 " >

                  <span class="day" >Pизик: {{this.ryz}}</span>
                  <div class="wrapper ">
                    <div class="blockd" style="background-color:green;"><div class="inner"><1%</div></div>
                    <div class="blockd"  style="background-color:lightgreen;">1%</div>
                    <div class="blockd"  style="background-color:yellow;">2%</div>
                    <div class="blockd"  style="background-color:orange;">3-4%</div>
                    <div class="blockd" style="background-color:orangered;">5-9%</div>
                    <div class="blockd"  style="background-color:red;">9-14%</div>
                    <div class="blockd"  style="background-color:darkred;">>15%</div>
                  </div>

                </div>
                <div style="z-index: 99999999" >
                  <!--            <div  v-for="(day, index) in days" :key="index"  v-if="index===6">-->
                  <!--              <strong >{{'day'}}</strong>-->
                  <!--            </div>-->
                  <span class="day" >  </span>

                </div>

                <apexchart  style="background-color: white;color:black;z-index:9999999; "  type="bar" :options="options" :series="series"></apexchart>

              </div>
              <div  v-show="ap!==true || but!==true " v-if="Starts" class="date text-right" :class="{
                                'today': date.today,
                                'blank': date.blank,
                                'no-border-right': date.key % 7 === 0,
                             }" v-for="date in dateList" :key="date.key"  :data-date="date.date" @click="setSelectedDate(date.moment)">

                <span class="day" >{{date.dayNumber}}</span>
                <span class="weekday">{{date.weekDay}}</span>
                <div class="additional" v-show="date.additional">
                  <span class="year" v-show="date.additional.year">{{date.additional.year}}</span>
                  <span class="month" v-show="date.additional.month">{{date.additional.month}}</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </main>
    <footer class="b-footer">
      <b-row align-v="center" align-h="center">

        <b-col md="8" class="text-center">
             <button v-if="this.month===this.today.format('MMMM')" @click="adds=true" class="block">+</button>
        </b-col>

<!--        <b-col md="6" class="text-center">-->
<!--          <button @click="ap=true" class="block">8</button>-->

<!--        </b-col>-->
<!--        <div class=" b-calendar__weekdays "  style="display:flex;position:fixed">-->
<!--&lt;!&ndash;          <apexchart style="background-color: white; "  width="600" type="bar" :options="options" :series="series"></apexchart>&ndash;&gt;-->
<!--&lt;!&ndash;          <apexchart height="400" type="candlestick" :options="chartOptions" :series="formattedData"/>&ndash;&gt;-->
<!--        </div>-->

<!--        F-->
<!--          </div>-->


      </b-row>
    </footer>
  </b-container>
</template>

<script>
import moment from "moment";
import Add from './Add';
import Edit from './Edit';
import TaskS from "../services/New";
import   "../assets/style.css";
import Slider from '@jeremyhamm/vue-slider'
import axios from "axios";
import ApexCharts from "apexcharts";
import ProfilService from "../services/ProfilService";
axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
export default {
  name: "Kalendar",
  components: {
    Add,
    Edit,
    'slider': Slider
  },
  data() {
    return {

but:false,
ap:false,
      norm:'',
      ast:'',
      you:'',
      tasks: [],
      ID: '',
      ryz:'',
      alg: '',
      sum: [],
      par: [],
      title: [],
      graf: [],
      arr1: [],
      arr2: [],
      user: [],
      titles: '',
      date: '',
      adds: false,
      edit: false,
      today: moment(),
      dateContext: moment(),
      selectedDate: moment(),
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      options: {
        chart: {
          id: 'salesChart'
        },



        xaxis: {
          categories: [
            ]
        },
        colors: '#6e3780',



      },
      series: [{
        name: 'АД',

        data: []
      }]
    }
  },
  mounted() {
    this.Find()

  },
  computed: {


    year: function() {
      return this.dateContext.format("Y");
    },

    month: function() {
      return this.dateContext.format("MMMM");
    },

    daysInMonth: function() {
      return this.dateContext.daysInMonth();
    },

    currentDate: function() {
      return this.dateContext.get("date");
    },

    firstDayOfMonth: function() {
      let firstDay = moment(this.dateContext).subtract(this.currentDate,"days");
      return firstDay.weekday();
    },

    previousMonth: function() {
      return moment(this.dateContext).subtract(1, "month");
    },
    previousMonthAsString: function() {
      return this.previousMonth.format("MMMM");
    },
    nextMonth: function() {
      return moment(this.dateContext).add(1, "month");
    },
    nextMonthAsString: function() {
      return this.nextMonth.format("MMMM");
    },

    daysInPreviousMonth: function() {
      return this.previousMonth.daysInMonth();
    },
    daysFromPreviousMonth: function() {
      let daysList = [];
      let count = this.daysInPreviousMonth - this.firstDayOfMonth;
      while (count < this.daysInPreviousMonth) {
        count++;
        daysList[count] = count;
      }

      return daysList.filter(function() {
        return true;
      });
    },

    dateList: function() {
      let $this = this;

      let dateList = [];
      let dateLists = []

      let previousMonth = this.previousMonth;
      let nextMonth = this.nextMonth;

      //dates for display
      let formattedCurrentMonth = this.dateContext.format("MMMM");
      let formattedCurrentYear = this.year;
      let formattedPreviousMonth = previousMonth.format("MMMM");
      let formattedPreviousYear = previousMonth.format("Y");
      let formattedNextMonth = nextMonth.format("MMMM");
      let formattedNextYear = nextMonth.format("Y");

      //counters
      let countDayInCurrentMonth = 0;
      let countDayInPreviousMonth = 0;

      //filling in dates from the previous month
      this.daysFromPreviousMonth.forEach(function(dayFromPreviousMonth) {
        countDayInCurrentMonth++;
        countDayInPreviousMonth++;

        let formattedDay = $this.formattingDay(dayFromPreviousMonth);
        let previousMonth =
          $this.daysFromPreviousMonth.length ===
          countDayInPreviousMonth
            ? $this.previousMonthAsString
            : false;
        let previousYear =
          formattedCurrentYear !== formattedPreviousYear &&
          $this.daysFromPreviousMonth.length ===
          countDayInPreviousMonth
            ? formattedPreviousYear
            : false;
        let additional = {
          month: previousMonth,
          year: previousYear
        };

        if (!previousMonth && !previousYear) {
          additional = false;
        }

        dateList[countDayInCurrentMonth] = {
          key: countDayInCurrentMonth,
          dayNumber: formattedDay,
          date:
            formattedDay +
            " " +
            formattedPreviousMonth +
            " " +
            formattedPreviousYear,
          blank: true,
          today: false,
          additional: additional,
          weekDay: false,
          moment: moment(
            formattedPreviousYear +
            formattedPreviousMonth +
            formattedDay
          )
        };
      });

      //filling in dates from the current month
      while (countDayInCurrentMonth < this.firstDayOfMonth + this.daysInMonth) {
        countDayInCurrentMonth++;

        let day = countDayInCurrentMonth - countDayInPreviousMonth;
        let weekDay = this.getWeekDay(countDayInCurrentMonth);
        let formattedDay = this.formattingDay(day);

        dateList[countDayInCurrentMonth] = {
          key: countDayInCurrentMonth,
          dayNumber: formattedDay,
          date:
            formattedDay +
            " " +
            formattedCurrentMonth +
            " " +
            formattedCurrentYear,
          blank: false,
          today:
            formattedDay === this.initialDate &&
            this.todayInCurrentMonthAndYear,
          additional: false,
          weekDay: weekDay,
          moment: moment(
            formattedCurrentYear +
            formattedCurrentMonth +
            formattedDay
          )
        };
      }

      let daysInNextMonth = 7 - (countDayInCurrentMonth % 7);
      let countDayInCurrentMonthSaved = countDayInCurrentMonth;
      let day = 0;

      //filling in dates from the next month
      if (daysInNextMonth < 7) {
        while (
          countDayInCurrentMonth <
          countDayInCurrentMonthSaved + daysInNextMonth
          ) {
          countDayInCurrentMonth++;
          day++;

          let formattedDay = this.formattingDay(day);
          let nextMonth = day === 1 ? this.nextMonthAsString : false;
          let nextYear =
            formattedCurrentYear !== formattedNextYear && day === 1
              ? formattedNextYear
              : false;
          let additional = {
            month: nextMonth,
            year: nextYear
          };

          if (!nextMonth && !nextYear) {
            additional = false;
          }

          dateList[countDayInCurrentMonth] = {
            key: countDayInCurrentMonth,
            dayNumber: formattedDay,
            date:
              formattedDay +
              "." +
              formattedNextMonth +
              "." +
              formattedNextYear,
            blank: true,
            today: false,
            additional: additional,
            weekDay: false,
            moment: moment(
              formattedNextYear +
              formattedNextMonth +
              formattedDay
            )
          };
        }
      }
      return dateList.filter(function() {
        return true;
      });
    },

    initialDate: function() {
      return this.formattingDay(this.today.get("date"));
    },
    initialMonth: function() {
      return this.today.format("MMMM");
    },
    initialYear: function() {
      return this.today.format("Y");
    },
    todayInCurrentMonthAndYear: function() {
      return (
        this.month === this.initialMonth &&
        this.year === this.initialYear
      );
    },
    selectedDayAndMonth: function() {
      let dayAndMonth = this.selectedDate.format("D MMMM");
      dayAndMonth = dayAndMonth.split(" ");
      dayAndMonth = {
        day: dayAndMonth[0],
        month: dayAndMonth[1]
      };

      return dayAndMonth;
    },

    selectedWeekDay: function() {
      return this.selectedDate.format("dddd");
    },
    Select: function() {
      return this.selectedDate.format("D MMMM YYYY")
    },
    todayIsEqualSelectDate: function() {
      return (
        this.selectedDate.format("YYYYMMDD") ===
        this.today.format("YYYYMMDD")
      );
    }
  },
  methods: {
    // async changeData() {
    //   var count =  moment().month(this.month).daysInMonth();
    //   var days = [];
    //   for (var i = 1; i < count+1; i++) {
    //
    //     this.graf[i-1]= String(days.push(moment().month(this.month).date(i)));
    //
    //   }
    //   this.sum=''
    //   let z=0
    //   let leng=0
    //   for(let i=0;i<this.tasks.length;i++) {
    //     if (this.tasks[i].date === this.selectedDate.format("D MMMM YYYY")) {
    //       console.log('this.tasks[i].title')
    //       this.sum = this.tasks[i].title;
    //       console.log(this.sum)
    //       z+=Number( this.sum )
    //       console.log(z)
    //       leng++
    //     }
    //   }
    //
    //   console.log('//////////////')
    //   z= z/leng;
    //   ApexCharts.exec("chart1", "updateOptions", {
    //
    //     xaxis: {
    //       categories: this.graf
    //     }
    //   })}
    // ,

    updateChart() {
      let z=0
      let leng=0
      let k=0;


      var count =  moment().month(this.month).daysInMonth();
      var days = [];
      this.graf=[]
      this.par=[]

      for (var i = 1; i < count+1; i++) {

        this.graf[i-1]= String(days.push(moment().month(this.month).date(i)));

      }
      console.log(this.graf.length)





//       let counts = 0;
//       let sum = 0;
//       for (let [key, value] of Object.entries(this.tasks)) {
//         if()
//         counts++;
//         sum += value.title;
//         console.log(value.title)
//       }
//
//       const division = sum / counts;
//
// // Log to console
//       console.log(division)
      let y=0;
      let result = this.tasks.reduce((a,c) =>
        (a[c.date] = (a[c.date] || 0) +Number( c.title), a), {});

      var results =  this.tasks.reduce(function(acc, el) {
        acc[el.date] = (acc[el.date] || 0) + 1;
        return acc;
      }, {});


      let l1=[]
      var obj = {};
      console.log(result)
      for (let [key, value] of Object.entries(result)) {
       this.arr1=value;
      }

      var res = Object.keys(result).map(function(key) {
        return result[key];
      });
      var ress = Object.keys(results).map(function(key) {
        return results[key];
      });
      var res2 = Object.keys(result).map(function(key) {
        return key;
      });
      for(let i = 0; i < res.length; i++) {
        console.log(res2[i]);

      }
      for(let i = 0; i < res.length; i++) {
        l1[i]=res[i]/ress[i]
      console.log(l1[i])
      }
      console.log(Object.assign(...res2.map((n, i) => ({ [n]: l1[i] }))))
      var objs = res2.map(function(item, index) {

        return {'date' : item, 'title' : l1[index]}

      })
      console.log(objs)


      for(let j=0;j<this.graf.length;j++) {
        this.par[j]=' ';
      for(let i=0;i<objs.length;i++) {
        var a = objs[i].date.split(' ')[1]; // 50ml
        var b = objs[i].date.split(' ')[2]; // $100
        if (b === this.year) {
          if (a === this.month) {
            // console.log(this.graf[j])

              if(this.graf[j]===objs[i].date.split(' ')[0]) {


                console.log('99999999999')
                     console.log(objs[i].title)
                     this.par[j]=objs[i].title
                   }





              }


              // else {  k=0;  z=0;   console.log('K' + this.sum)}

            }

          }

      }
      for(let j=0;j<this.par.length;j++) {
        console.log(this.par[j])
      }

      // z= z/leng;
      // console.log(z)
      // let m= ["2015", "2016", "2017", "2018", "2019","1", "2", "3", "4", "5"]

//       ApexCharts.exec('salesChart', 'updateOptions', {
//         xaxis: {
//           labels: this.graf
//         }
//       }, false, true)
// // Update values
//       ApexCharts.exec('salesChart', 'updateSeries', [{
//         data: this.sum
//       }], true);



      // const max = 90;
      // const min = 20;
      // const newData = this.series[0].data.map(() => {
      //
      //     return  z
      //
      // })

      // In the same way, update the series option
      // this.series = [{
      //   x: this.graf
      // }]

      // console.log('this.graf')
      // console.log(this.graf)
      ApexCharts.exec("salesChart", "updateOptions", {
        xaxis: {
          categories: this.graf
        }
      });

      ApexCharts.exec("salesChart", "updateSeries", [
        {
          data: this.par
        }
      ]);
      // const newDatas = this.xaxis.categories.map(() => {
      //   for (var i = 1; i < count+1; i++) {
      //     return  days.push(moment().month(this.month).date(i));
      //   }
      //
      //
      // })
      // this.xaxis = [{
      //   categories: newDatas
      // }]
    },
    async addManually(event) {
      try {
        console.log(event.data.title);
        if(event.data.title>=100 && event.data.title<=180) {
          await TaskS.add({
            title: event.data.title,
            date: this.selectedDate.format("D MMMM YYYY")
          })
        }
        this.Find()
        this.alg=''
        if(this.month!==this.today.format('MMMM')) {
          this.DoIts();
          this.DoIt()
        }
        else {this.but=false; this.par=[]}

        console.log("hhh")

      } catch (err) {
        console.log("ff")
        console.log(err.message)

      }

    },
    Edit(ID){
      this.ID=ID;
      return this.ID
    },
    async editManually(event) {
      let id=this.ID;
      console.log('nnnnnnnnnnn')
      console.log(event.data.title)
      console.log(id)

      try {
        console.log("err")
        console.log(event.data.title);
        if(event.data.title>=100 && event.data.title<=180) {
          await TaskS.update({
            id: id,
            title: event.data.title
          })
        }

        this.Find()

this.alg=''
        if(this.month!==this.today.format('MMMM')){
          this.DoIts();
          this.DoIt()

        }
        else{ this.but=false; this.par=[]}
        console.log(event.data.title)


      } catch (err) {
        console.log(err.message)

      }

    },
    async Start(){
      this.ap=true
      this.updateChart()
    },
    async Starts(){
      if(this.ap!==true || this.but!==true ) {
        this.ap = false
        this.but = false
      }else return false
    },

    async DoIts(){

      // console.log(this.today.format('MMMM'))
      this.sum=''
      this.alg=''
      this.ryz=''
      let z=0
      let leng=0
      let k=0;

      for(let i=0;i<this.tasks.length;i++) {
        var a = this.tasks[i].date.split(' ')[1]; // 50ml
        var b = this.tasks[i].date.split(' ')[2]; // $100
        if (b === this.year) {
          if (a === this.month) {
            z+=Number(this.tasks[i].title)
            // z+=Number( this.sum )
            // console.log(z)
            leng++
            k=1;

          }
        }
      }
      z= z/leng;
      var response =await ProfilService.getMe()
      // console.log(z)
      var gen,age,ad,smoke,chol
      var s0,s010,alpha,p,cs0,cs10,ncs0,ncs10,wc,wnc;
      var bchol,bsbp,bsm,cs,cs1,ncs,ncs1,r,r1;
      var today = new Date();
      var birthDate = new Date(response.data.vik);
      var age1 = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age1--;
      }
      age=Number(age1);
      gen=Number(response.data.sex)
      ad=z;
      chol=Number(response.data.hol);
      if (gen===0)
      {
        alpha=-21.0;p=4.62;

      }
      else
      {
        alpha=-28.7;p=6.23;
      }
      cs0=Math.exp(-Math.exp(alpha)*Math.pow(age-20.0,p));
      cs10=Math.exp(-Math.exp(alpha)*Math.pow(age-10.0,p));
      if (gen===0)
      {
        alpha=-25.7;p=5.47;
      }
      else
      {
        alpha=-30.0;p=6.42;
      }
      ncs0=Math.exp(-Math.exp(alpha)*Math.pow(age-20.0,p));

      ncs10=Math.exp(-Math.exp(alpha)*Math.pow(age-10.0,p));
      bchol=0.24;
      bsbp=0.018;
      smoke=Number(response.data.zvych);
      bsm=smoke*0.71;
      wc=bchol*(chol-6.0)+bsbp*(ad-120.0)+bsm;

      bchol=0.02;
      bsbp=0.022;
      bsm=smoke*0.63;
      wnc=bchol*(chol-6.0)+bsbp*(ad-120.0)+bsm;



      cs=Math.pow(cs0,Math.exp(wc));

      cs1=Math.pow(cs10,Math.exp(wc));

      ncs=Math.pow(ncs0,Math.exp(wnc));

      ncs1=Math.pow(ncs10,Math.exp(wnc));

      cs1=cs1/cs;
      ncs1=ncs1/ncs;

      r=1.0-cs1;
      r1=1.0-ncs1;


      if(z) {
console.log(k)
          if (this.today.format("MMMM")!=this.month) {

            this.but = true;

            console.log('8888888888888888')
            let num = 100.0 * (r + r1)
            this.alg = num.toFixed(2)
            if(num.toFixed(2)<1){
              this.ryz='Дуже низький'
            }
            if(num.toFixed(2)>15){
              this.ryz='Дуже високий'
            }
            if(num.toFixed(2)>=2 && num.toFixed(2)<3){
              this.ryz='Помірний'
            }
            if(num.toFixed(2)>=1 && num.toFixed(2)<2){
              this.ryz='Низький '
            }
            if(num.toFixed(2)>=3 && num.toFixed(2)<=4){
              this.ryz='Середній'
            }
            if(num.toFixed(2)>4 && num.toFixed(2)<=9){
              this.ryz='Високий'
            }
            if(num.toFixed(2)>9 && num.toFixed(2)<=14){
              this.ryz='Дуже високий'
            }
            if(num.toFixed(2)>15){
              this.ryz='Надзвичайно високий'
            }
            this.updateChart()
        }
          else  this.par=[]
      }
      else {this.but=false; this.par=[]};
    },
    async DoIt()
{
  this.sum=' '
    let z=0
  let leng=0
  for(let i=0;i<this.tasks.length;i++) {
    if (this.tasks[i].date === this.selectedDate.format("D MMMM YYYY")) {
      // console.log('this.tasks[i].title')
      this.sum = this.tasks[i].title;
      // console.log(this.sum)
      z+=Number( this.tasks[i].title )
      // console.log(z)
      leng++
    }
  }

  console.log('//////////////')
  z= z/leng;
  // console.log(leng)
  var response =await ProfilService.getMe()
  // console.log(z)
  var gen,age,ad,smoke,chol
  var today = new Date();
  var birthDate = new Date(response.data.vik);
  var age1 = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age1--;
  }
  age=Number(age1);
  gen=Number(response.data.sex)

  this.you=' '
  this.ast=' '
  this.norm=' '
  if(z) {
    if(z<120){
      this.ast='Тиск був Оптимальним'
    }
    if(z>=120 && z<=129){
      this.ast='Тиск був Нормальним'
    }
    if(z>129 && z<=139){
      this.ast='Тиск був Високим Нормальним'
    }
    if(z>139 && z<=159){
      this.ast='Є ризик артеріальної гіпертензії 1 степ.'
    }
    if(z>159 && z<=179){
      this.ast='Є ризик артеріальної гіпертензії 2 степ.'
    }
    if(z>179 && z<=180){
      this.ast='Є ризик артеріальної гіпертензії 3 степ.'
    }


    if(gen===0) {
      if (age === 20) {
        this.norm='Ваша норма АД: 123'
      }
      if (age > 20 && age<=30) {
        this.norm='Ваша норма АД: 126'
      }
      if (age > 30 && age<=40) {
        this.norm='Ваша норма АД: 129'
      }
      if (age > 40 && age<=50) {
        this.norm='Ваша норма АД: 135'
      }
      if (age > 50 && age<=60) {
        this.norm='Ваша норма АД: 142'
      }
      if (age > 60 && age<=70) {
        this.norm='Ваша норма АД: 145'
      }
    }
    else {
      if (age === 20) {
        this.norm='Ваша норма АД: 116'
      }
      if (age > 20 && age<=30) {
        this.norm='Ваша норма АД: 129'
      }
      if (age > 30 && age<=40) {
        this.norm='Ваша норма АД: 127'
      }
      if (age > 40 && age<=50) {
        this.norm='Ваша норма АД: 137'
      }
      if (age > 50 && age<=60) {
        this.norm='Ваша норма АД: 144'
      }
      if (age > 60 && age<=70) {
        this.norm='Ваша норма АД: 159'
      }
    }
    console.log('666')
    let num =z
    this.you='Ваш тиск за цей день' + num.toFixed(1)

  }



},
    async Log(){
      var response =await ProfilService.Log()
      localStorage.clear()
      // storage.clear();
      this.$router.push({name: 'Log'})

    },
    async Find(){


      this.titles='';
      var response = await TaskS.fetchTasks();
      // console.log(this.Select)
      this.tasks = response.data.tasks;
      // console.log(this.tasks)

      for(let i=0;i<this.tasks.length;i++) {
        // console.log(this.selectedDate.format("D MMMM"))
        if (this.tasks[i].date === this.selectedDate.format("D MMMM YYYY")) {
          // console.log(this.tasks[i].title)
          this.titles=this.tasks[i].title
          this.sum=this.tasks[i].title;

        }
        else this.titles=''
      }
    },

    addMonth: function() {
      this.dateContext = this.nextMonth;
      this.alg=''

      this.par=[]
      if(this.month!==this.today.format('MMMM'))
      this.DoIts();
      else {this.but=false;this.par=[]
        this.ap = false
        this.but = false}
    },
    subtractMonth: function() {

      this.dateContext = this.previousMonth;

      this.alg=''
      this.par=[]
      if(this.month!==this.today.format('MMMM'))
      this.DoIts()
      else{this.but=false;this.par=[]
        this.ap = false
        this.but = false}

    },
    setSelectedDate: function(moment) {

      var d = this.today


      // console.log('y'+this.today)
      this.selectedDate = moment;

      // console.log('y'+this.today.format('D MMMM YYYY'))
      // console.log('y'+this.selectedDate.format('D MMMM YYYY'))

      this.you=' '
      this.ast=' '
      this.norm=' '
      console.log('**************')
      // console.log('Y'+this.selectedDate)
      // console.log('y'+this.today)
      this.Find();
      var d1 = this.today
      var d2 =this.selectedDate;
 // console.log('false')
 //      console.log(d1 == d2);   // prints false (wrong!)
 //      console.log(d1);  console.log(d2);
 //      // prints true  (wrong!)
 //      console.log(d1 > d2);  // prints false (wrong!)

if(this.today>this.selectedDate&&
  this.today!=this.selectedDate){

  this.DoIt();

}

      // if(this.today.format('D MMMM YYYY')!=this.selectedDate.format('D MMMM YYYY') ){
      //
      //   this.DoIt();
      // }
    },
    goToday: function() {

      this.selectedDate = this.today;
      this.dateContext = this.today;
    },
    formattingDay(day) {
      return ("0" + day).slice(-2);
    },
    getWeekDay(day) {
      let index = day;
      if (index > 7) {
        index %= 7;
      }
      index = index === 0 ? 6 : index - 1;
      return this.days[index];
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
</script>

<style scoped >
.wrapper{
  text-align: center;
  font-size: 20px;


}
.blockd {
  color: black;
  text-align: center;
  background: blueviolet;
  width: 60px;
  height: 35px;
  display: inline-block;
}
.inner {
  vertical-align: bottom;
  /*padding-top: 5px;*/
}
</style>
