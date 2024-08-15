<template>
  <div class="blog_template" v-for="blog in blogsData" :key="blog">
    <div class="img_cont">
      <img src="../assets/my-avatar.png.svg" alt="" />
    </div>
    <div class="blog_info">
      <div class="blog_meta">
        <p class="blog_category">{{ blog.blogCategory }}</p>
        <span></span>
        <time class="date_time" datetime="2022-02-23">Fab 23, 2022</time>
      </div>
      <h3 class="blog_title">Design conferences in 2022</h3>
      <p class="blog_text">
        Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const blogsData = {
      blog_1: {
        img: "",
        blogCategory: "5hjghjhg",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
      blog_2: {
        img: "",
        blogCategory: "lkflkll",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
      blog_3: {
        img: "",
        blogCategory: "lkflkll",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
      blog_4: {
        img: "",
        blogCategory: "lkflkll",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
      blog_5: {
        img: "",
        blogCategory: "csdc",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
      blog_6: {
        img: "",
        blogCategory: "lkfdscsdlkll",
        dateTime: "2024-02-28",
        blogTitle: "kjkjkjkj",
        blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
      },
    };
    return { blogsData };
  },
};
</script>

<style lang="scss">
.blog_template {
  width: 404px;
  height: 402px;
  border-radius: 16px;
  background-color: #2c3e50;
  .img_cont {
    width: 404px;
    height: 230px;
    border-radius: 16px;
    margin-bottom: 26px;
    border: 1px solid gray;
  }
  .blog_info {
    padding: 0 25px 24px;
    .blog_meta {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 7px;
      margin-bottom: 10px;
      .blog_category {
        margin: 0;
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
      span {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #d6d6d6;
        margin: 0;
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
      .date_time {
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
    }
    .blog_title {
      font-family: "Popins";
      font-size: 24px;
      line-height: 31px;
      color: #fafafa;
      margin-bottom: 11px;
    }
    .blog_text {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 24px;
      color: #d6d6d6;
    }
  }
}
</style>
