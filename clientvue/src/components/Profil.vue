<!--<template>-->
<!--  <div class="container">-->
<!--    <div id="main">-->
<!--      <b-col >-->
<!--        <b-col class="col-md-11">-->
<!--          <input type="checkbox" id="hmt" class="hidden-menu-ticker">-->
<!--          <label class="btn-menu" for="hmt">-->
<!--            <span class="first"></span>-->
<!--            <span class="second"></span>-->
<!--            <span class="third"></span>-->
<!--          </label>-->
<!--          <ul class="hidden-menu " style="text-align: left">-->
<!--            <li></li>-->
<!--            <li></li>-->
<!--            <li style="margin-bottom: 150px"><a href="/kal">Головна</a></li>-->
<!--            <li><a href="#" @click="Log">Вийти</a></li>-->

<!--          </ul>-->
<!--        </b-col>-->

<!--&lt;!&ndash;    <img src="../../../uploads/74.png">&ndash;&gt;-->

<!--      </b-col>-->
<!--      <div class="row" id="real-estates-detail">-->
<!--        <div class="col-lg-4 col-md-4 col-xs-12">-->
<!--          <div class="panel panel-default">-->
<!--            <div class="panel-heading">-->
<!--              <header class="panel-title">-->
<!--                <div class="text-center">-->
<!--                  <strong></strong>-->
<!--                </div>-->
<!--              </header>-->
<!--            </div>-->
<!--            <div class="panel-body" style="margin-top: 80px; margin-left: 60px">-->
<!--              <div class="text-center" id="author">-->
<!--&lt;!&ndash;                <img :src="`../../../uploads/file-1654756921538.png`" for='file'  >&ndash;&gt;-->
<!--                <img :src="imgUrl" for='file'  >-->
<!--&lt;!&ndash;                <img  :src="/uploads/+{this.img}" />&ndash;&gt;-->

<!--              </div>-->
<!--                <b-col class="col-md-3md3">-->
<!--                  <input  type="file" single id='file' v-show="stat==true" >-->
<!--                  <button class="pressed-button"  type='submit'  v-show="stat==true" @click="uploadImage">Завантажити</button>-->
<!--                </b-col>-->
<!--              </div>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-lg-8 col-md-8 col-xs-12" style="margin-top: 50px">-->
<!--          <div class="panel">-->
<!--            <div class="panel-body">-->

<!--              &lt;!&ndash;            <h4>Інформація</h4>&ndash;&gt;-->

<!--              <form @submit.prevent="up"  class="forms">-->


<!--                <table class="table table-th-block">-->
<!--                  <tbody>-->
<!--                  <tr><td class="active" >Ім'я:</td>-->
<!--                    <td> <input type="text" id="name" class="form-control form-text" :readonly="status" v-model="name"></td></tr>-->
<!--                  <tr><td class="active">Фамілія:</td>-->
<!--                    <td> <input type="text" id="surname"  class="form-control form-text" :readonly="status" v-model="surname">-->
<!--                      <span class="error-messsage"></span></td></tr>-->
<!--                  <tr><td class="active">Вік:</td><td>-->
<!--                    <input   class="form-control form-text"  :disabled="status" v-model="vik"   :type="type" onfocus="(this.type='date')"/>-->
<!--&lt;!&ndash;                    <input type="text" id="vik"  class="form-control form-text" :readonly="status" v-model="vik">&ndash;&gt;-->
<!--                    <span class="error-messsage"></span>-->
<!--                  </td></tr>-->
<!--                  <tr><td class="active">Зріст:</td><td>-->
<!--                    <input type="text" id="height"  class="form-control form-text" :readonly="status" v-model="height">-->
<!--                    <span class="error-messsage"></span>-->
<!--                  </td></tr>-->
<!--                  <tr><td class="active">Вага:</td><td>-->
<!--                    <input type="text" id="weight"  class="form-control form-text" :readonly="status" v-model="weight">-->
<!--                    <span class="error-messsage"></span>-->
<!--                  </td></tr>-->
<!--                  <tr><td class="active">Стать:</td><td>-->
<!--                    &lt;!&ndash;                <input type="text" id="sex"  class="form-control form-text" :readonly="status" v-model="sex">&ndash;&gt;-->
<!--                    <span class="error-messsage"></span>-->
<!--                    <select   class="form-control" v-model="sex" :disabled="status">-->
<!--                      <option v-for="option in list1" :value="option.id" v-text="option.Title" />-->
<!--                    </select>-->
<!--                  </td></tr>-->
<!--                  <tr><td class="active">Паління:</td><td>-->
<!--                    &lt;!&ndash;                <input type="text" id="zvych"  class="form-control form-text" :readonly="status" v-model="zvych">&ndash;&gt;-->
<!--                    <select   class="form-control" v-model="zvych" :disabled="status">-->
<!--                      <option v-for="option in list2" :value="option.id" v-text="option.Title" />-->
<!--                    </select>-->
<!--                    <span class="error-messsage"></span>-->
<!--                  </td></tr>-->
<!--                  <tr><td class="active">Холестерин:</td><td> <input type="text" id="hol"  class="form-control form-text" :readonly="status" v-model="hol">-->
<!--                    <span class="error-messsage"></span></td></tr>-->
<!--                  <tr><td class="active">Телефон:</td><td> <input type="text" id="tel"  class="form-control form-text" :readonly="status" v-model="tel">-->
<!--                    <span class="error-messsage"></span></td></tr>-->
<!--                  </tbody>-->
<!--                </table>-->
<!--                <div class="w-50">-->
<!--                  <p style="color:red;">{{Errors}}</p>-->
<!--                  &lt;!&ndash;              <a  class="pressed-button" type="submit" >Up</a>&ndash;&gt;-->
<!--                  <button type="submit" class="pressed-button" v-show="stat==false" >Редагувати</button>-->
<!--                  <button type="submit" @click="checkForms" class="pressed-button" v-show="stat">Зберегти</button>-->
<!--                </div>-->
<!--              </form>-->

<!--            </div>-->


<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->
<!--    </div>-->
<!--  -->
<template>
  <div class="container">
    <div id="main">
      <b-col >
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
            <li style="margin-bottom: 150px"><a href="/kal">Головна</a></li>
            <li><a href="#" @click="Log">Вийти</a></li>

          </ul>
        </b-col>

        <!--    <img src="../../../uploads/74.png">-->

      </b-col>
      <div class="row" id="real-estates-detail">
        <div class="col-lg-4 col-md-4 col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <header class="panel-title">
                <div class="text-center">
                  <strong></strong>
                </div>
              </header>
            </div>
            <div class="panel-body" style="margin-top: 80px; margin-left: 60px">
              <div class="text-center" id="author">

                <img :src="imgUrl" for='file'  >
                <b-col >
                  <input class="form-control form-text"  type="file" single id='file' v-show="stat==true">
<!--                  <button class="pressed-button"  type='submit'  v-show="stat==true" @click="uploadImage">Завантажити</button>-->
                </b-col>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-xs-12" style="margin-top: 50px">
          <div class="panel">
            <div class="panel-body">

              <!--            <h4>Інформація</h4>-->

              <form @submit.prevent="up"  class="forms">

                <!--            <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">-->

                <!--            <div class="d-flex py-4">-->
                <!--              &lt;!&ndash; <img class="profile" src="/img/profile.jpg" alt="" > &ndash;&gt;-->
                <!--              <div>-->
                <!--                  <div class="profile"></div>-->
                <!--              </div>-->
                <!--              <div class="my-auto ml-5">-->
                <!--                <button type="submit" class="btn upload text"><i class="fas fa-upload fa-sm pr-2"></i>Upload new picture</button>-->
                <!--              </div>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0">-->
                <!--                <label  class="text">Name</label>-->
                <!--                <input type="text" id="name" class="form-control form-text" :readonly="status" v-model="name">-->
                <!--                <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->
                <!--                <label class="text">Surname</label>-->
                <!--                <input type="text" id="email"  class="form-control form-text" :readonly="status" v-model="surname">-->
                <!--                <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->
                <!--              <label class="text">Vik</label>-->
                <!--              <input type="text" id="vik"  class="form-control form-text" :readonly="status" v-model="vik">-->
                <!--              <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->
                <!--              <label class="text">height</label>-->
                <!--              <input type="text" id="height"  class="form-control form-text" :readonly="status" v-model="height">-->
                <!--              <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->
                <!--              <label class="text">weight</label>-->
                <!--              <input type="text" id="weight"  class="form-control form-text" :readonly="status" v-model="weight">-->
                <!--              <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->
                <!--              <label class="text">sex</label>-->
                <!--              <input type="text" id="sex"  class="form-control form-text" :readonly="status" v-model="sex">-->
                <!--              <span class="error-messsage"></span>-->
                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->

                <!--              <label class="text">Telefoh</label>-->
                <!--              <input type="text" id="tel"  class="form-control form-text" :readonly="status" v-model="tel">-->
                <!--              <span class="error-messsage"></span>-->

                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->

                <!--              <label class="text">Zvych</label>-->
                <!--              <input type="text" id="zvych"  class="form-control form-text" :readonly="status" v-model="zvych">-->
                <!--              <span class="error-messsage"></span>-->

                <!--            </div>-->
                <!--            <div class="form-group col-10 p-0 m-0 mt-4">-->

                <!--              <label class="text">Hol</label>-->
                <!--              <input type="text" id="hol"  class="form-control form-text" readonly v-model="hol">-->
                <!--              <span class="error-messsage"></span>-->

                <!--            </div>-->
                <table class="table table-th-block">
                  <tbody>
                  <tr><td class="active" >Ім'я:</td>
                    <td> <input type="text" id="name" class="form-control form-text" :readonly="status" v-model="name"></td></tr>
                  <tr><td class="active">Фамілія:</td>
                    <td> <input type="text" id="surname"  class="form-control form-text" :readonly="status" v-model="surname">
                      <span class="error-messsage"></span></td></tr>
                  <tr><td class="active">Вік:</td><td>
                    <input type="text" id="vik"  class="form-control form-text" :readonly="status" v-model="vik">
                    <span class="error-messsage"></span>
                  </td></tr>
                  <tr><td class="active">Зріст:</td><td>
                    <input type="text" id="height"  class="form-control form-text" :readonly="status" v-model="height">
                    <span class="error-messsage"></span>
                  </td></tr>
                  <tr><td class="active">Вага:</td><td>
                    <input type="text" id="weight"  class="form-control form-text" :readonly="status" v-model="weight">
                    <span class="error-messsage"></span>
                  </td></tr>
                  <tr><td class="active">Стать:</td><td>
                    <!--                <input type="text" id="sex"  class="form-control form-text" :readonly="status" v-model="sex">-->
                    <span class="error-messsage"></span>
                    <select   class="form-control" v-model="sex" :disabled="status">
                      <option v-for="option in list1" :value="option.id" v-text="option.Title" />
                    </select>
                  </td></tr>
                  <tr><td class="active">Паління:</td><td>
                    <!--                <input type="text" id="zvych"  class="form-control form-text" :readonly="status" v-model="zvych">-->
                    <select   class="form-control" v-model="zvych" :disabled="status">
                      <option v-for="option in list2" :value="option.id" v-text="option.Title" />
                    </select>
                    <span class="error-messsage"></span>
                  </td></tr>
                  <tr><td class="active">Холестерин:</td><td> <input type="text" id="hol"  class="form-control form-text" :readonly="status" v-model="hol">
                    <span class="error-messsage"></span></td></tr>
                  <tr><td class="active">Телефон:</td><td> <input type="text" id="tel"  class="form-control form-text" :readonly="status" v-model="tel">
                    <span class="error-messsage"></span></td></tr>
                  </tbody>
                </table>
                <div class="w-50">
                  <p style="color:red;">{{Errors}}</p>
                  <!--              <a  class="pressed-button" type="submit" >Up</a>-->
                  <button type="submit" class="pressed-button" v-show="stat==false" >Редагувати</button>
                  <button type="submit" @click="checkForms" class="pressed-button" v-show="stat">Зберегти</button>
                </div>
              </form>

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>

</template>




<script>
import Slider from '@jeremyhamm/vue-slider'
import ProfilService from "../services/ProfilService";
import axios from "axios";

export default {

  name: "Profil",
  data () {

    return {
      type:'text',
      Errors:'',
      dialogImageUrl: '',
      dialogVisible: false,
      list1: [ { id: 0, Title: 'Чоловіча' }, { id: 1, Title: 'Жіноча' } ],
      list2: [ { id: 0, Title: 'Ні' }, { id: 1, Title: 'Так' } ],
      file: [],
      status: true,
      stat: false,
      id:'',

      img:'',
      name: '',
      surname: '',
      tel:'',
      zvych:'',
      hol:'',
      weight:'',
      height:'',
      vik:'',
      sex:'',
    }
  },
  mounted() {
    this.getMe()

  },
  computed:{
    Pl(){
      let s = 'Вік';
      return s
    },
    imgUrl() {
      console.log(this.img)
      var path = 'D/uploads/'+this.img
      // return require(`../../../uploads/${this.img}`)

      return  "http://localhost:8081/uploads/"+this.img
      // return require(`../../../uploads/${this.img}`)
    }
  },
  components:{
    'slider': Slider
  },
  methods: {
    async checkForms(e) {

      this.Errors=''
      console.log("***********");
      console.log(this.vik);
      if( this.hol<3 || this.hol>8 ){
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
      if (age<20 || age>65 ) {
        this.Errors='Вік повинен бути в діаразоні від 20 до 65';

      }
      console.log('this.Errors');
      console.log(this.Errors);

      // e.preventDefault();
      if( !  this.Errors) {
        this.updateUser()
      }

    },
   async getMe() {
     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
     console.log(localStorage.id)
     localStorage.id
console.log( localStorage.getItem('jwtToken') )

     try {



       var response =await ProfilService.getMe()
       localStorage.setItem('id', response.data._id)
       console.log('response.data.tokens')
       console.log(response.data._id)
       console.log("???????????????")
       this.name = response.data.name;
       this.img = response.data.img;
       console.log("???????????????")
       console.log(this.img)
       this.surname = response.data.surname;
       this.tel = response.data.tel;
       this.zvych = response.data.zvych;
       this.hol = response.data.hol;
       this.height = response.data.height;
       this.weight = response.data.weight;
       this.vik = response.data.vik;
       this.sex = response.data.sex;
     } catch (err) {
       console.log(err.message)

     }
    },


    uploadImage() {
      const files = document.getElementById("file");
      const formData = new FormData();
      formData.append("name",localStorage.id);
      console.log(localStorage.id)
        formData.append("file", files.files[0]);
      console.log(files.files[0])
      fetch("http://localhost:8081/user/upload_files/"+localStorage.id, {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // }
      })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));


      // let data = new FormData();
      // data.append('name', 'my-picture');
      // data.append('file', event.target.files[0]);
      // const URL = ProfilService.Img( )
      // let config = {
      //   header : {
      //     'Content-Type' : 'image/png'
      //   }
      // }

      // axios.put(
      //   URL,
      //   data,
      //   config
      // ).then(
      //   response => {
      //     console.log('image upload response > ', response)
      //   }
      // )
    },

    up(){

      // localStorage.id = this.$route.params.id;
      console.log('***********')
      console.log(this.img)
       console.log(localStorage.id)
      this.status=false;
      this.stat=true;
    },
    async updateUser () {
      try {
        const files = document.getElementById("file");


        if(files.files[0]) {
          const formData = new FormData();
          formData.append("name",localStorage.id);
          formData.append("file", files.files[0]);
          console.log(files.files[0])
          ProfilService.Img({id: localStorage.id, body:formData})
        }
        //   fetch("http://localhost:8081/user/upload_files/" + localStorage.id, {
        //     method: 'POST',
        //     body: formData,
        //     // headers: {
        //     //   "Content-Type": "multipart/form-data"
        //     // }
        //   })
        //     .then((res) => console.log(res))
        //     .catch((err) => ("Error occured", err));
        // }
        console.log("s1s");
        await ProfilService.updateUser({
          id: localStorage.id,
          // id: this.$route.params.id,
          name: this.name,

          surname:this.surname,
            tel:this.tel,
            zvych:this.zvych,
            hol:this.hol,
            weight:this.weight,
          height:this.height,
            vik: this.vik,
            sex:this.sex,
        })

        console.log("hhhhhhh");
        // this.getMe()
        this.status=true;
        this.stat=false;
        this.getMe()
       // this.$router.push({ name: 'Profil' })
      } catch(err) {
        console.log(err.message)
      }
    },
    async Log() {
      try{
        var response =await ProfilService.Log()
        localStorage.clear()
        // storage.clear();
        this.$router.push({name: 'Log'})
      }catch (e) {
        console.log(e.message)
      }
    }

  }
}
</script>

<style scoped>
body{background:url(https://bootstraptema.ru/images/bg/bg-1.png)}

#main {
  background-color: #f2f2f2;
  padding: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  border-bottom: 4px solid #ddd;
}
#real-estates-detail #author img {
  width: 200px;
  height: 200px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  border: 5px solid #ecf0f1;
  margin-bottom: 10px;
}
#real-estates-detail .sosmed-author i.fa {
  width: 30px;
  height: 30px;
  border: 2px solid #bdc3c7;
  color: #bdc3c7;
  padding-top: 6px;
  margin-top: 10px;
}
.panel-default .panel-heading {
  background-color: #fff;

}
#real-estates-detail .slides li img {
  height: 450px;
}
.forms{
  margin-left: 50px;
  /*padding-left: 200px;*/
  background-color:  #f2f2f2;
}
.pressed-button {
  text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
}
.pressed-button:hover {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
}

</style>
