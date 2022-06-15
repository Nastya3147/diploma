<template>
  <div class="manual-add">
    <b-form name="manual-form"
             ref="manualEventForm">
      <label>
        <b-input v-model="formData.title"
                  name="title"
                  placeholder="Сист.АД,мм.рт.ст." />
      </label>
      <p style="color:red;">{{Errors}}</p>
      <button type="button"
              @click="addManually()"
              class="save">Додати</button>
      <button type="button"
              class="save"
              @click="$emit('close')">
        Закрити

      </button>
    </b-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    Errors:'',
    formData: {

      title: null
    }
  }),
  methods: {
    async checkForms(e) {

      this.Errors=''
      console.log("***********");
      const { title } = this.formData;

      console.log({title})
      if( this.formData<100 || this.formData>180){
        this.Errors='Холестирин повинен бути від 3 до 8  ммоль/л';
      }

      // e.preventDefault();
      if( !  this.Errors) {
        // this.addManually()
      }

    },
    addManually() {
      const { title } = this.formData;

      console.log({title})
      let payload = {
        data: { title },
      };

        this.$emit('done', payload);


      // this.$refs.manualEventForm.resetFields();
    },
  }
}
</script>
<style>


</style>
