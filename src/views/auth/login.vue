<template>
  <div class="flex-container">
    <div class="content left">
      <div class="col">
        <!-- image -->
        <img src="@/assets/Login.png" />
        <!-- text -->

        <p>
          Help us getting better by sending your thoughts about us and about our
          services,<br />
          you can also mention any other points that are related by<br />
          sending your by sending thoughts by sending your thoughts.
        </p>
      </div>
    </div>

    <div class="content right">
      <div class="col">
        <h3>Log In</h3>
        <!-- Social Accounts -->
        <ul class="social">
          <!-- Facebook -->
          <li>
            <a
              href="https://www.facebook.com/"
              class="facebook"
              style="  background: #4867aa;"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                transform="shrink-3.5 down-1.6 right-1.25"
                style="color:white; margin-right:10px;"
                size="2x"
              />
              <!-- <i class="fa fa-facebook facebook-i"></i> -->
              <span>Login With Facebook</span>
            </a>
          </li>
          <!-- Google -->
          <li>
            <a
              href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=AddSession"
              class="google"
              style="  background: #db4437;"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                transform="shrink-3.5 down-1.6 right-1.25"
                style="color:white; margin-right:10px;"
                size="2x"
              />
              <span>Login With Google</span>
            </a>
          </li>
        </ul>
        <!-- End Social Accounts -->
        <!-- Or -->
        <div class="or-login clearfix">
          <span>Or</span>
        </div>
        <!-- Start Form  -->
        <form class="form">
          <!-- Email -->
          <label for="uname">E-mail</label>
          <input
            type="email"
            required
            v-model="email"
            placeholder="name@example.com"
          />
          <!-- Password  -->
          <label for="psw">Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
          <!-- Forget Password  -->
          <router-link class="forget" :to="{ name: 'forgotpassword' }">
            Forget Password
          </router-link>
          <!-- CheckBox Remember Me -->
          <label class="checkbox">
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label>
          <!-- Button  -->
          <button>Login</button>
          <!-- Create New Account  -->
          <div class="createNew">
            Don't have an account?
            <router-link class="signupLink" :to="{ name: 'signup' }">
              Sign Up
            </router-link>
          </div>
        </form>
        <!-- End Form  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left {
  background: #4378e3;
  align-items: center;
  margin: auto;
  padding: auto;
  text-align: center;
  color: white;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.flex-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.content {
  height: 100%;
  width: 100%;
  -webkit-flex: 1; /* Safari */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Standard syntax */
  display: flex;
}
.left img {
  height: 450px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
}
p {
  padding-top: 40px;
}
.right {
  text-align: center;
  align-items: center;
  justify-content: center;
}
/* left Paragraph */
.left p {
  font-size: 12px;
  font-family: Segoe UI;
  color: white;
  padding-top: 60px;
  text-align: center;
  letter-spacing: 1px;
}

h3 {
  font-weight: 700;
}
/* ul social account */
ul {
  list-style: none;
  margin: 0;
  padding: 1px;
  padding-top: 30px;
}
.social li {
  display: inline-block;
  margin: 2px 20px 5px 0;
}
.social li a {
  font-size: 12px;
  font-weight: 600;
  width: 180px;
  margin: 1px 0 8px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.social li a i {
  height: 35px;
  width: 35px;
  line-height: 35px;
  float: left;
  color: #fff;
  border-radius: 10px;
}
.social li a span {
  margin-right: 10px;
  color: #fff;
}
.facebook-i {
  color: #fff;
}
.google-i {
  color: #fff;
}
.facebook {
  color: #4867aa;
}
.google {
  color: #db4437;
}
/* or login with email & pass */
.or-login {
  width: 100%;
  margin: 10px 0 5px;
  text-align: center;
  position: relative;
}
.or-login::before {
  position: absolute;
  left: 0;
  top: 10px;
  width: 100%;
  height: 1px;
  background: #d8dcdc;
  content: "";
}
.or-login > span {
  width: auto;
  float: none;
  display: inline-block;
  background: #fff;
  padding: 1px 20px;
  z-index: 1;
  position: relative;
  font-family: Open Sans;
  font-size: 15px;
  color: #616161;
  text-transform: capitalize;
}
/* form */
form {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  font-size: 13px;
  font-family: "Segoe UI";
  padding-top: 30px;
}
/* inputs */
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
}
/* forget design*/
.forget {
  color: #4378e3;
  font-size: 12px;
  padding-left: 310px;
  text-align: right;
  text-decoration: none;
}
/* button */
button {
  background-color: #4378e3;
  opacity: 0.5;
  color: white;
  padding: 14px 20px;
  margin: 25px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
}
button:hover {
  opacity: 1;
}
/* create new account */
.createNew {
  margin: 15px;
  text-align: center;
}
/* link signup design */
.signupLink {
  text-decoration: none;
  font-weight: bold;
  color: #4378e3;
}
</style>
