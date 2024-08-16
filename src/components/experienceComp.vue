<template>
  <section class="education">
    <div class="title_wraper">
      <div class="icon_box">
        <img src="../assets/Img - mail outline → SVG.svg" alt="" />
      </div>
      <h3>Experience</h3>
    </div>
    <ul>
      <li>
        <h4 class="time_line">Creative director</h4>
        <span>2015 — Present</span>
        <p class="time_line_text">
          Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
          atque corrupti,<br />
          quos dolores et qvuas molestias exceptur.
        </p>
      </li>
      <li>
        <h4 class="time_line">Art director</h4>
        <span>2013 — 2015</span>
        <p class="time_line_text">
          Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
          atque corrupti,<br />
          quos dolores et qvuas molestias exceptur.
        </p>
      </li>
      <li>
        <h4 class="time_line">Web designer</h4>
        <span>2007 — 2008</span>
        <p class="time_line_text">
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti,<br />
          quos dolores et quas molestias exceptur.
        </p>
      </li>
    </ul>
  </section>
</template>
<style lang="scss">
.education {
  background-color: #313131;
  .title_wraper {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
    margin-bottom: 24px;
    .icon_box {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background-color: #2c3e50;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
    }
    h3 {
      margin: 0;
      font-family: "Poppins";
      font-size: 24px;
      color: #fafafa;
    }
  }
  ul {
    li {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -25px;
        left: 23px;
        width: 1px;
        height: 100%;
        background-color: gray;
      }
      &::after {
        content: "";
        position: absolute;
        top: 6px;
        left: 20px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fec563;
        box-shadow: 0px 0px 0px 4px #383838;
      }
    }
    .time_line {
      font-family: "Poppins";
      font-size: 15px;
      color: #fafafa;
      margin: 0 0 7px 96px;
      line-height: 20px;
    }
    span {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 24px;
      color: #ceb15a;
      margin: 0 0 2px 96px;
    }
    p {
      margin: 0 0 0 96px;
      font-family: "Poppins";
      font-size: 15px;
      line-height: 24px;
      color: #d6d6d6;
    }
  }
}
</style>
