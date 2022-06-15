<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Вхід" active><Auto/></b-tab>
      <b-tab title="Реєстрація"><Registr/></b-tab>
    </b-tabs>
  </div>
</template>
<script>
import Auto from "../components/auth/Auto";
import Registr from "../components/Registr";
export default {
  name: "Log",
  components: {
    Auto,
    Registr
  },
}
</script>
<style>
body{
  background-color: transparent;

}

</style>

