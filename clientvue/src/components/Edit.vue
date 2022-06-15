<template>
  <div class="manual-add">
    <b-form name="manual-form"
            ref="manualEventForm">
      <label>
        <b-input v-model="form.title"
                 name="title"
                 placeholder="Сист.АД,мм.рт.ст." />
      </label>
      <button type="button"
              @click="editManually()"
              class="save">Змінити</button>
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
    form: {

      title: null
    }
  }),
  methods: {
    editManually() {
      const { title } = this.form;

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
