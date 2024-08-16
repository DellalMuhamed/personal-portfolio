<template>
  <div class="router_container">
    <div class="side_bare">
      <div class="img_ont">
        <img src="../assets/my-avatar.png.svg" alt="" />
      </div>
      <h1 class="personel_name">Dellal Mohamed</h1>
      <p class="track">web developer</p>
      <hr />
      <div class="contact">
        <ul class="contact_list">
          <li class="contact_item">
            <div class="icon_cont">
              <img src="" alt="" />
            </div>
            <div class="contac_content">
              <p class="contact_name">EMAIL</p>
              <a href="email_link">dellalmed17@gmail.com</a>
            </div>
          </li>
          <li class="contact_item">
            <div class="icon_cont">
              <img src="" alt="" />
            </div>
            <div class="contac_content">
              <p class="contact_name">EMAIL</p>
              <a href="email_link">dellalmed17@gmail.com</a>
            </div>
          </li>
          <li class="contact_item">
            <div class="icon_cont">
              <img src="" alt="" />
            </div>
            <div class="contac_content">
              <p class="contact_name">EMAIL</p>
              <a href="email_link">dellalmed17@gmail.com</a>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div class="social_media_cont">
        <ul class="social_media_list">
          <li>
            <a href=""><img src="../assets/Vector12.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="../assets/twitter.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="../assets/instagram.svg" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.router_container {
  display: flex;
  justify-content: center;
}
hr {
  margin: 30px 40px;
}
.side_bare {
  background-color: #2c3e50;
  padding-top: 60px;
  width: 275px;
  height: 760px;
  border-radius: 20px;
  .img_ont {
    width: 150px;
    height: 147px;
    border-radius: 30px;
    background-image: linear-gradient(to right bottom, #3f3f40, #ccc);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px;
  }
  h1 {
    font-family: "Poppins";
    font-size: 26px;
    color: #fafafa;
    margin: 17px 36px;
  }
  .track {
    padding: 5px 17px 6px 18px;
    margin: 17px 72px;
    color: #fff;
    background-color: #42b983;
    border-radius: 8px;
  }
  .contact {
    .contact_list {
      .contact_item {
        width: 213px;
        height: 62px;
        margin: 30px 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon_cont {
          min-width: 46px;
          height: 46px;
          border-radius: 12px;
          margin-right: 17px;
          background-color: #2c3e50;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: -4px 8px 24px rgba(0, 0, 0, 0.12);
          img {
            width: 18px;
            height: 18px;
          }
        }
        .contac_content {
          text-align: start;
          .contact_name {
            font-family: "Poppins";
            font-size: 12px;
            color: #d6d6d6;
            margin-bottom: 3px;
          }
          a {
            text-decoration: none;
            font-family: "Poppins";
            font-size: 14px;
            color: #fafafa;
          }
        }
      }
      img {
        width: 40px;
        height: 40px;
      }
      .contac_content {
        a {
          display: inline-block;
        }
      }
    }
  }
  .social_media_cont {
    .social_media_list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      li {
        img {
          width: 18px;
          height: 18px;
          color: rgb(214, 214, 214, 0.7);
        }
      }
    }
  }
}
</style>
