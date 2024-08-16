<template>
  <div class="skills">
    <h3 class="skills_title">My skills</h3>
    <div class="skills_cont">
      <ul>
        <li>
          <label for="file">Downloading progress:</label>
          <progress id="file" value="80" max="100">32%</progress>
        </li>
        <li>
          <label for="file">Downloading progress:</label>
          <progress id="file" value="70" max="100">32%</progress>
        </li>
        <li>
          <label for="file">Downloading progress:</label>
          <progress id="file" value="90" max="100">32%</progress>
        </li>
        <li>
          <label for="file">Downloading progress:</label>
          <progress id="file" value="50" max="100">32%</progress>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.skills {
  width: 838px;
  height: 341px;
  .skills_title {
    font-family: "Poppins";
    font-size: 24px;
    margin-bottom: 44px;
    color: #fafafa;
  }
  .skills_cont {
    padding: 25px 30px;
    background-color: #2c3e50;
    border-radius: 18px;
    ul {
      li {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        label {
          margin-bottom: 7px;
          font-family: "Poppins";
          font-size: 15px;
          color: #fafafa;
        }
        progress {
          width: 778px;
          height: 10px;
          border-radius: 10px;
          border: 1px solid gray;
        }
      }
    }
  }
}
</style>
