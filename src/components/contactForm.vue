<template>
  <div class="form_cont">
    <figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
        loading="lazy"
      ></iframe>
    </figure>
    <div class="contact_cont">
      <h2>Contact Form</h2>
      <div class="input_grp">
        <input type="text" />
        <input type="text" />
      </div>
    </div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>
      <img src="../assets/Frame.svg" alt="" />
      <span>Send Message</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "contact-form",
};
</script>
<style lang="scss">
.form_cont {
  margin: 30px 31px 57px;
  padding-bottom: 30px;
  figure {
    iframe {
      width: 838px;
      height: 380px;
      border-radius: 18px;
      margin-bottom: 31px;
    }
  }
  .contact_cont {
    h2 {
      font-family: "Poppins";
      font-size: 24px;
      color: #fafafa;
      margin-bottom: 18px;
    }
    .input_grp {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      input {
        width: 404px;
        height: 55px;
        border: 1px solid #808080;
        border-radius: 14px;
        background-color: transparent;
        padding: 15px 20px;
      }
    }
  }
  textarea {
    width: 838px;
    height: 120px;
    border: 1px solid #808080;
    border-radius: 14px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px 20px;
  }
  button {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 182px;
    height: 55px;
    margin-left: auto;
    border: none;
    border-radius: 18px;
    box-shadow: 0 0 0 1px #808080;
    background-color: transparent;
    cursor: pointer;
    span {
      flex-flow: "Poppins";
      font-size: 16px;
      color: #ffdb70;
    }
  }
}
</style>
