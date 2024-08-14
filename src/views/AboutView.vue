<template>
  <info-intro />
  <my-services />
  <testi-monial />
  <clients-comp />
</template>

<script>
// @ is an alias to /src
import infoIntro from "@/components/InfoIntro.vue";
import MyServices from "@/components/MyServices.vue";
import testiMonial from "@/components/testiMonial.vue";
import ClientsComp from "@/components/ClientsComp.vue";
export default {
  name: "aboutView",
  components: { infoIntro, MyServices, testiMonial, ClientsComp },
};
</script>
<style lang="scss">
* {
  widows: 800px;
}
</style>
