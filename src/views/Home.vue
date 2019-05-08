<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    sayHello() {
      console.log("大家好啊");
    },
    getData() {
      window.localStorage.setItem("liveToken", "ohshnqu3h0pje2h1rsdtr9qu63");
      this.ajax.post(
        "/agent/index/sms_mobile",
        {
          sms_code: 123,
          mobile: 456
        },
        data => {
          setTimeout(() => {
            this.getData();
          }, 200);
        }
      );
    }
  },
  create() {},
  mounted() {
    this.sayHello();
    this.getData();
  }
};
</script>
