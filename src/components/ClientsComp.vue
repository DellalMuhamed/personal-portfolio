<template>
  <h2>Clients</h2>
  <di class="clients_cont">
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-1-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-2-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-3-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-4-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/my-avatar.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/my-avatar.png.svg" alt="" />
    </div>
  </di>
</template>
<script>
export default {
  name: "clients-comp",
};
</script>
<style lang="scss">
h2 {
  font-family: "Poppins";
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #fafafa;
}
.clients_cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 898px;
  padding: 45px;
  background-color: #383838;
  overflow-x: auto;
}
</style>
