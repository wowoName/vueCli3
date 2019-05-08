<template>
  <div class="hello">
    <div class="vux1-name">你好啊ddd--ddsdd</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vux1-name {
  width: 100%;
  padding: 0 50px;
  margin: 90px 0 104px 0;
  box-sizing: border-box;
  font-size: 78px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  background: url(../../public/img/bg.jpg) no-repeat center center / 100% 100%;
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
}
</style>
