

<template>
  <div class="registration-cssave">
    <b-form type="sumbit"
      @submit.prevent="checkForm">
      <div v-show="step===1" class="step">
        <b-form-group prop="name">
          <b-input class="form-control item" type="text" v-model="name" placeholder="Им'я">
          </b-input>
        </b-form-group>


        <b-form-group prop="surname">
          <b-input type="text" class="form-control item" v-model="surname" placeholder="Фамілія">

          </b-input>
        </b-form-group>
        <b-form-group prop="username">
          <b-input type="tel"
                   placeholder="+380"
                   v-model="tel"
                   class="form-control item"
                   :class="{'notvalid': failedValidation.tel, 'valid': failedValidation.tel===false}"
                   @input="onlyNumbers"
                   maxlength="13"
                   minlength="13">
          </b-input>
        </b-form-group>


        <b-form-group prop="password">
          <b-input id="password"
                   required
                   class="form-control item"
                   v-model="password"
                   prefix-icon="fas fa-lock"
                   type="password"
                   auto-complete="off"
                   placeholder="пароль"

          >

          </b-input>
        </b-form-group>
        <b-form-group>
          <p style="color:red;">{{errors}}</p>
          <b-button
            @click="nextStep"
            native-type="submit"
            block
            class="floating-button"
            @submit.prevent="checkForm"
          >Далі</b-button>
        </b-form-group>
      </div>
      <div v-show="step===2" class="step">
        <b-form-group prop="sex">
        </b-form-group>
        <b-form-group prop="vik">
<!--          <b-input type="number" class="form-control item" >-->
            <b-input  class="form-control item" v-model="vik"  :placeholder="Pl" :type="type" onfocus="(this.type='date')"/>
<!--          <input :placeholder="Pl" v-model="vik"  class="orm-control item" type="date" id="date">-->
<!--          </b-input>-->
        </b-form-group>
        <b-form-group prop="height">
          <b-input type="number" class="form-control item" v-model="height" placeholder="Зріст">

          </b-input>
        </b-form-group>
        <b-form-group prop="weight">
          <b-input type="number" class="form-control item" v-model="weight" placeholder="Вага">

          </b-input>
        </b-form-group>
        <b-form-group prop="sex">
          <b-select v-model="sex" class=" item" style="color:gray; border-color: gray" onchange="this.style.color='black'">
            <option value="" style="display:none">Стать</option>
            <option value="0" style="color:black">Чоловіча</option>
            <option value="1" style="color:black">Жіноча</option>
          </b-select>
        </b-form-group>
        <b-form-group prop="zvych">
          <b-select v-model="zvych" class=" item" style="color:gray; border-color: gray" onchange="this.style.color='black'">
            <option value="" style="display:none">Паління</option>
            <option value="0" style="color:black">Ні</option>
            <option value="1" style="color:black">Так</option>
          </b-select>
        </b-form-group>
        <b-form-group prop="hol">
          <b-input type="number"class="form-control item" v-model="hol" placeholder="Холестерин">

          </b-input>
        </b-form-group>
        <!--        <b-form-group prop="username">-->
        <!--          <b-input type="text"-->
        <!--                   placeholder="+380"-->
        <!--                   v-model="tel"-->

        <!--                   :class="{'notvalid': failedValidation.tel, 'valid': failedValidation.tel===false}"-->
        <!--                   @input="onlyNumbers"-->
        <!--                   maxlength="13"-->
        <!--                   minlength="13">-->
        <!--          </b-input>-->
        <!--        </b-form-group>-->


        <b-form-group prop="password">
          <!--          <b-input id="password"-->
          <!--                   required-->
          <!--                   v-model="password"-->
          <!--                   prefix-icon="fas fa-lock"-->
          <!--                   type="password"-->
          <!--                   auto-complete="off"-->
          <!--                   placeholder="пароль"-->

          <!--          >-->

          <!--          </b-input>-->
<!--          <div v-for="error in errors.title" class="invalid-feedback">{{ error }}</div>-->
        </b-form-group>
        <b-form-group>
          <p style="color:red;">{{Errors}}</p>
          <b-button    variant="success"


                       type="primary"
                       native-type="submit"
                       class="floating-button"
                       block
                       @click="checkForms">
<!--                       @click="addUser"-->

<!--            variant="success"-->
<!--            type="primary"-->
<!--            native-type="submit"-->
<!--            class="floating-button"-->
<!--            block-->
<!--            @click="addUser()"-->
<!--            @submit.prevent="checkForms"-->

          Готово</b-button>
          <b-button    variant="success"


                       type="primary"
                       native-type="submit"
                       class="floating-button"
                       block
                       @click="preStep">
            <!--            variant="success"-->
            <!--            type="primary"-->
            <!--            native-type="submit"-->
            <!--            class="floating-button"-->
            <!--            block-->
            <!--            @click="addUser()"-->
            <!--            @submit.prevent="checkForms"-->

            назад</b-button>
        </b-form-group>

      </div>
    </b-form>
  </div>
</template>

<script>
import '../assets/auth.css'
import RegistrService from "../services/RegistrService";
import AutoService from "../services/AutoService";
import axios from "axios";
export default {
  name: 'Registr',
  data () {
    return {
      type:'text',
      options: [
        { value: null, text: 'Стать' },
        { value: '1', text: 'Чоловіча' },
        { value: '1', text: 'Жіноча' },
          ],
      step:1,
      errors: '',
      Errors: '',
      // Модель того, что была выполнена валидация.
      wasValidated: false,
      name: '',
      surname: '',
      tel: '',
      password:'',
      zvych:'',
      hol:'',
      sex:'',
      vik:'',
      height:'',
      weight:'',
      failedValidation: {
        tel: null
      },
      user:[]



    }
  },
  computed: {

    Pl(){
      let s = 'Вік';
      return s
    },
  },
  methods: {
    nextStep(){
      console.log(this.name)
      console.log('this.name')
      this.checkForm()
      if(this.name!=='' && this.tel!=='' && this.password!=='')
      this.step++;
    },

    preStep(){

        this.step--;
    },
    onlyNumbers() {
      this.failedValidation.tel = !/^[\d]{13}$/.test(this.tel) ? true : false;
      this.failedValidation.tel = !/^\+38\d{3}\d{3}\d{2}\d{2}$/.test(this.tel) ? true : false;


    },
    async checkForm(e) {

      this.errors=''
      this.failedValidation.tel = !/^\+38\d{3}\d{3}\d{2}\d{2}$/.test(this.tel) ? true : false;
      if (this.password.length<8) {
        this.errors='Пароль не повинен бути менше 8 символів.';
        console.log("ff");
      }
      if( !this.failedValidation.tel ){
        console.log("+");
      }
      else {
        this.errors='Не вірний номер телефону';
        console.log("-");

      }
      if( this.name.length!==0 ){
        console.log("+");
      }
      else {
        this.errors="Заповніть поле Ім'я";
        console.log("-");

      }

      // e.preventDefault();

    },
    async checkForms(e) {

      this.Errors=''
      console.log("***********");
      console.log(this.vik);
      if( this.hol< 3 || this.hol>8 ){
        this.Errors='Холестирин повинен бути від 3 до 8  ммоль/л';
      }
      if( !this.zvych){
        this.Errors='Заповніть поле Паління';
      }
      if( !this.sex){
        this.Errors='Заповніть поле Стать';
      }
      if( this.weight<30){
        this.Errors='Вага не може бути менше 30';
      }
      if( this.height<100 ){
        console.log("+");
        this.Errors='Зріст не може бути менше 100';
        console.log("-");

      }
      var today = new Date();
      var birthDate = new Date(this.vik);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      console.log( age)
      if (age<20 || age>65 ) {
        this.Errors='Вік повинен бути в діаразоні від 20 до 65';

      }
      console.log('this.Errors');
      console.log(this.Errors);

     console.log( e.preventDefault());

      if(!this.Errors) {
        this.addUser()
      }

    },

    async addUser () {
      console.log(this.errors)

       try {
         console.log("err")
         const response =await RegistrService.addUser({
           name: this.name,
           surname: this.surname,
           tel: this.tel,
           password: this.password,
           vik: this.vik,
           height: this.height,
           weight: this.weight,
           sex: this.sex,
           zvych: this.zvych,
           hol: this.hol,


         })
         this.user = response.data.user;
         localStorage.setItem('jwtToken', response.data.token)
         console.log('response.data.tokens')
         console.log(response.data.token)
         console.log(localStorage)

         this.$router.push({name: 'Kalendar'})


       } catch (err) {
         console.log("ff")
         console.log(err.message)

       }


    }
  }
}
</script>
