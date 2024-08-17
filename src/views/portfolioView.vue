<template>
  <div class="Portfolio">
    <nav class="portfolio_nav">
      <button>All</button>
      <button>Web design</button>
      <button>Applications</button>
      <button>Web development</button>
    </nav>
    <div class="projects_cont">
      <project-content
        v-for="(project, key) in projectsData"
        :key="key"
        :project="project.project_title"
      />
    </div>
  </div>
</template>
<script>
import projectContent from "@/components/projectContent.vue";
import { ref } from "vue";
export default {
  components: { projectContent },
  setup() {
    const projectsData = ref({
      project_1: {
        link: "",
        project_img: "",
        project_title: "Finance",
        project_category: "Web development",
      },
      project_2: {
        link: "",
        project_img: "",
        project_title: "Orizon",
        project_category: "Web development",
      },
      project_3: {
        link: "",
        project_img: "",
        project_title: "Fundo",
        project_category: "Web design",
      },
      project_4: {
        link: "",
        project_img: "",
        project_title: "Brawlhalla",
        project_category: "Applications",
      },
      project_5: {
        link: "",
        project_img: "",
        project_title: "DSM",
        project_category: "Web design",
      },
      project_6: {
        link: "",
        project_img: "",
        project_title: "MetaSpark",
        project_category: "Web design",
      },
      project_7: {
        link: "",
        project_img: "",
        project_title: "Summary",
        project_category: "Web development",
      },
      project_8: {
        link: "",
        project_img: "",
        project_title: "Task Manager",
        project_category: "Applications",
      },
      project_9: {
        link: "",
        project_img: "",
        project_title: "Arrival",
        project_category: "Web development",
      },
    });

    return {
      projectsData,
    };
  },
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
  .projects_cont {
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
