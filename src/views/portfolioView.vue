<template>
  <div class="Portfolio">
    <nav class="portfolio_nav">
      <button>All</button>
      <button>Web design</button>
      <button>Applications</button>
      <button>Web development</button>
    </nav>
    <project-content />
  </div>
</template>
<script>
import projectContent from "@/components/projectContent.vue";
export default {
  components: { projectContent },
};
</script>
<style lang="scss">
.Portfolio {
  .portfolio_nav {
    margin-top: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
    margin-bottom: 30px;
    button {
      font-family: "Poppins";
      font-size: 15px;
      color: #d6d6d6;
      text-decoration: none;
      border: none;
      background: none;
      cursor: pointer;
      &.active {
        color: #ffdb70;
      }
      &:hover {
        color: gray;
      }
    }
  }
}
</style>
