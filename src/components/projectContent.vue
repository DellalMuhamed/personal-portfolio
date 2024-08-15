<template>
  <div class="projects_cont">
    <ul>
      <li class="project_item" v-for="project in projectsData" :key="project">
        <a href="">
          <figure>
            <div class="icon_box">
              <img src="../assets/Frame45.svg" alt="" />
            </div>
            <img
              class="project_img"
              src="../assets/Item → Link → logo-1-color.png.svg"
              alt=""
            />
          </figure>
        </a>
        <h3 class="project_title">Finance</h3>
        <p class="project_category">Web development</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    const projectsData = {
      project_1: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_2: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_3: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_4: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_5: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_6: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_7: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_8: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
      project_9: {
        link: "",
        project_img: "",
        project_title: "",
        project_category: "",
      },
    };
    return { projectsData };
  },
};
</script>
<style lang="scss">
.projects_cont {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 31px;
    width: 838px;
    .project_item {
      background-color: #2c3e50;
      width: 258px;
      border-radius: 16px;
      position: relative;
      a {
        figure {
          .icon_box {
            width: 45px;
            height: 45px;
            border: none;
            border-radius: 12px;
            background-color: blueviolet;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 75px;
            left: 107px;
          }
          .project_img {
            width: 258px;
            height: 194px;
            border-radius: 12px;
            background-color: rgb(95, 101, 160);
          }
        }
      }
      .project_title {
        font-family: "Poppins";
        font-size: 15px;
        color: #fafafa;
      }
    }
  }
}
</style>
