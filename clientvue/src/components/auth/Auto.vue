<!--<template>-->
<!--  <b-container>-->
<!--    <b-row class="justify-content-center">-->
<!--      <b-col cols="12" md="6">-->
<!--        <h1>Add Task</h1>-->
<!--        <div class="form">-->
<!--          <div class="m-3">-->
<!--            <b-form-input v-model="tel"  placeholder="Telefon"></b-form-input>-->
<!--          </div>-->
<!--          <div class="m-3">-->
<!--            <b-form-input v-model="password"  placeholder="Password"></b-form-input>-->
<!--          </div>-->
<!--          <div class="m-3">-->
<!--            <b-button variant="success" @click="getUser()">Button</b-button>-->
<!--          <router-link v-bind:to="{name: 'Registr'}">Регр </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </b-col>-->
<!--  </b-row>-->
<!--</b-container>-->
<!--</template>-->
<template>
<!--  <div class="login" >-->
<!--    <b-card>-->
<!--      <b-form-->
<!--        class="login-form"-->
<!--        @submit.prevent="checkForm"-->
<!--      >-->
<!--        <b-form-group prop="username">-->
<!--          <b-input type="text"-->
<!--                 placeholder="+380"-->
<!--                 v-model="tel"-->

<!--                 :class="{'notvalid': failedValidation.tel, 'valid': failedValidation.tel===false}"-->
<!--                 @input="onlyNumbers"-->
<!--                 maxlength="13"-->
<!--                 minlength="13">-->
<!--          </b-input>-->
<!--        </b-form-group>-->


<!--        <b-form-group prop="password">-->
<!--          <b-input id="password"-->
<!--                   required-->
<!--            v-model="password"-->
<!--            prefix-icon="fas fa-lock"-->
<!--                   type="password"-->
<!--                   auto-complete="off"-->
<!--                   placeholder="пароль"-->

<!--          >-->

<!--          </b-input>-->
<!--        </b-form-group>-->
<!--        <b-form-group>-->
<!--          <p >{{errors}}</p>-->
<!--          <b-button-->
<!--            variant="success"-->
<!--            @click="getUser()"-->
<!--            class="login-button"-->
<!--            type="primary"-->
<!--            style="background-color: #3c3c3b"-->
<!--            native-type="submit"-->
<!--            block-->
<!--            @submit.prevent="checkForm"-->
<!--          >Вхід</b-button>-->
<!--        </b-form-group>-->
<!--        <a class="forgot-password" href="https://oxfordinformatics.com/">Forgot password ?</a>-->
<!--      </b-form>-->
<!--    </b-card>-->
<!--  </div>-->
  <div class="registration-cssave">
    <form
      @submit.prevent="checkForm">
<!--      <h3 class="text-center">Форма входа</h3>-->
      <div class="form-group">

        <b-input type="tel"
                 placeholder="+380"
                 v-model="tel"
                 class="form-control item"
                 :class="{'notvalid': failedValidation.tel, 'valid': failedValidation.tel===false}"
                 @input="onlyNumbers"
                 maxlength="13"
                 minlength="13">
        </b-input>
      </div>
      <div class="form-group">
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
      </div>
      <div class="form-group">
        <p style="color: red">{{errors}}</p>
        <b-button
                  variant="success"
                      @click="getUser()"

                      type="primary"
                      native-type="submit"
                  class="floating-button"
                        block
                            @submit.prevent="checkForm"
                  >Вхід</b-button>
                </div>
              </form>
            </div>
          </template>

          <script>
          // eslint-disable-next-line
          /* eslint-disable */
          import AutoService from '../../services/AutoService'
          import axios from 'axios'
          import '../../assets/auth.css'
          export default {
            name: "Auto",
            data () {
              return {
                failedValidation: {
                  tel: null
                },
                 id:'',
                errors:'',
                tel: '',
                password:'',
                user: [],


                }

            },
            methods: {
              onlyNumbers() {
                this.failedValidation.tel = !/^[\d]{13}$/.test(this.tel) ? true : false;

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
                e.preventDefault();

              },
              async getUser() {
                this.errors=''
                console.log("err.message")
                try {

                 // await AutoService.getUser({tel:this.tel,password:this.password})
                  const response = await AutoService.getUser({tel:this.tel,password:this.password})
                  this.user = response.data.user;
                  axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
                  localStorage.setItem('jwtToken', response.data.token)

                      console.log(localStorage)
                      // this.$router.push({name: 'Profil', params:{id: this.user._id}})
                      // this.$router.push({name: 'Profil', params:{id: this.user._id}})
                      this.$router.push({name: 'Profil'})



                } catch(err) {
                  console.log("ff")
                  console.log(this.errors)
                  if(this.errors===''){
                  this.errors='Не вірний номер телефону або пароль';}
                    console.log("this.errors")
                    console.log(this.errors)

                }
              },

            }
          }
          </script>
<style>
.floating-button {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  border-color: black;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
}
.floating-button:hover {
  background: mediumpurple;
  box-shadow: 0 15px 20px rgba(111, 111, 211, .4);
  color: white;
  transform: translateY(-7px);
}

</style>


