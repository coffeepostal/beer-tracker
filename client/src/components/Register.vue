<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email Address">
    <input type="password" name="password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService.js";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  props: {
    msg: String
  },
  watch: {
    email(value) {
      console.log("Email has CHANGED: ", value);
    }
  },
  methods: {
    async register() {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "hello world";
    }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
