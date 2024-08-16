<template>
  <div class="blog">
    <blog-comp />
  </div>
</template>
<script>
import blogComp from "@/components/blogComp.vue";
export default {
  components: { blogComp },
};
</script>
<style lang="scss">
.blog {
  width: 863px;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  gap: 55px;
  flex-wrap: wrap;
}
</style>
