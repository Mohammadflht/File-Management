
<template>
  <div id="app">
  <div class="background">
      <div class="login-side-shape"></div>
      <div class="login-side-shape"></div>
  </div>
  <form @submit.prevent="login()">
      <h3>Login Here</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Username" id="username" v-model="username" required class="input-username">

      <label for="password">Password</label>
      <div style="cursor: pointer;" class="password-division">
          <div @click="changeEye()">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"> <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/> <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/> <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/> </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
          </div>
          <input type="password" placeholder="Password" id="password" v-model="password" required class="input-password">
      </div>
      <p class="error-message"></p>

      <button class="login-btn" type="submit">Log In</button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
  return {
      username: '',
      password: ''
  }
  },
  methods: {
  login() {
    const errorMessage = document.querySelector(".error-message");
    const inputUsername = document.querySelector(".input-username");
    const inputPassword = document.querySelector(".input-password");

      if (this.username === "admin" && this.password === "admin") {
          this.$router.push('/admin-panel/file-management');
          errorMessage.style.visibility = "hidden";
        } else if (this.username === "mohammadflht" && this.password !== "123456789") {
          inputUsername.style.borderColor = "rgba(255, 255, 255, 0.07)";
          inputPassword.style.borderColor = "#ff715b80";
          errorMessage.style.visibility = "visible";
          errorMessage.innerHTML = "Invalid Password";
        } else if (this.username !== "mohammadflht" && this.password === "123456789") {
          inputUsername.style.borderColor = "#ff715b80";
          inputPassword.style.borderColor = "rgba(255, 255, 255, 0.07)";
          errorMessage.style.visibility = "visible";
          errorMessage.innerHTML = "Invalid Username";
        } else {
          errorMessage.style.visibility = "visible";
          errorMessage.innerHTML = "Invalid Username and Password";
          inputUsername.style.borderColor = "#ff715b80";
          inputPassword.style.borderColor = "#ff715b80";
      }

      // const user = this.$store.state.usersData.find(user => user.username === this.username && user.password === this.password);
      // if (user) {
      //   this.$store.commit('setLoggedIn', true)
      //   this.$router.push('/admin-panel/file-management');
      // } else {
      //   alert('Invalid username or password')
      // }
  },
  changeEye() {
    const eyeSlash = document.querySelector(".bi-eye-slash");
      const eye = document.querySelector(".bi-eye");
      const password = document.querySelector("#password");

      if (password.type === "text"){
      password.type = "password";
      eyeSlash.style.display = "none";
      eye.style.display = "";
      } else if (password.type === "password"){
      password.type = "text";
      eyeSlash.style.display = "block";
      eye.style.display = "none";
      }
  },
  }
}
</script>

<style media="screen">
#app {
  width: 100%;
  height: 100vh;
  background-color: #080710;
}
.background{
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
}
.login-side-shape{
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.login-side-shape:first-child{
  background: linear-gradient(to left,#f8e356, #ff4f8b);
  left: -80px;
  top: -80px;
}
.login-side-shape:last-child{
  background: linear-gradient(to right, #e3b1f6,#ff4f8b);
  right: -30px;
  bottom: -80px;
}
form{
  height: 520px;
  width: 400px;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
}
form *{
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3{
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label{
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input{
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255,0.07);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  transition: all .2s;
}
:placeholder{
  color: #e5e5e5;
  opacity: 60%;
}
.login-btn{
  margin-top: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #efefef;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  background: linear-gradient(70deg, #f8e356d2, #ff4f8ad2, #e3b1f6d2);
  transition: all .3s;
  text-shadow: 0 0 1px #efefef;
}
.login-btn:hover {
  background: linear-gradient(70deg, #f8e356, #ff4f8b, #e3b1f6);
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover{
  background-color: rgba(255,255,255,0.47);
}
.social .fb{
  margin-left: 25px;
}
.social i{
  margin-right: 4px;
}
.password-division {
  display: flex;
  position: relative;
}
.password-division svg {
  position: absolute;
  right: 12px;
  top: 26px;
}
.bi-eye-slash {
  display: none;
}
.error-message {
  margin-top: 12px;
  color: #FF715B;
  font-size: 14px;
  visibility: hidden;
}
</style>