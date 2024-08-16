<template>
  <h2>Testimonials</h2>
  <div class="testimonial_cont">
    <div
      class="testimonial"
      v-for="testimonial in testimonials"
      :key="testimonial"
    >
      <div class="img_cont">
        <img src="../assets/logo.png" alt="" />
      </div>
      <h2 class="testi_name">{{ testimonial.name }}</h2>
      <p>Testimonials</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "testi-monial",
  setup() {
    const testimonials = {
      testimonial1: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial2: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial3: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial4: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
    };
    return { testimonials };
  },
};
</script>
<style lang="scss">
h2 {
  font-family: "Poppins";
  font-size: 24px;
  color: #fafafa;
  margin-bottom: 26px;
}
.testimonial_cont {
  width: 838px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 30px;
  position: relative;
  .testimonial {
    min-width: 406px;
    height: 138px;
    position: relative;
    background-color: #2c3e50;
    padding: 25px 29px;
    border-radius: 14px;
    z-index: 2;
    .img_cont {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      position: absolute;
      top: -30px;
      left: 30px;
      z-index: 5;
      background-image: linear-gradient(to right, #3f3f40, #303030);
      img {
        width: 80px;
        height: 80px;
      }
    }
    .testi_name {
      margin-left: 124px;
      font-weight: bold;
      font-size: 18px;
      color: #fafafa;
    }
  }
}
</style>
