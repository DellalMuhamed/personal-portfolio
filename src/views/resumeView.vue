<template>
  <div class="resume">
    <educatio-comp />
    <experience-comp />
    <my-skills />
  </div>
</template>

<script>
import educatioComp from "@/components/educatioComp.vue";
import experienceComp from "@/components/experienceComp.vue";
import MySkills from "@/components/MySkills.vue";
export default {
  components: { educatioComp, experienceComp, MySkills },
};
</script>
