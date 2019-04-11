<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email Address">
    <input type="password" name="password" v-model="password">
    <div class="error" v-html="error"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      //  Try and register
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        //  Catch any errors that come along
      } catch (error) {
        //  Pass along the data from Axios that has the error message we defined in
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error {
  color: red;
}
</style>
