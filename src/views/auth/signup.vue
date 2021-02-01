<template>
  <!-- Container Login-->
  <div class="container">
    <!-- Start Left Container (image & text)-->
    <div class="left">
      <!-- image -->
      <img class="leftImage" src="@/assets/Signup.png" />
      <!-- text -->
      <p>
        Help us getting better by sending your thoughts about us and about our
        services,<br />
        you can also mention any other points that are related by<br />
        sending your by sending thoughts by sending your thoughts.
      </p>
      <!-- dots -->
      <div class="dots-wrapper">
        <span class="dot"></span>
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>
    </div>
    <!-- End Left Container -->
    <!-- Start Right Container -->
    <div class="right">
      <h3>Sign Up</h3>
      <!-- Social Accounts -->
      <ul class="social">
        <!-- Facebook -->
        <li>
          <a
            href="https://www.facebook.com/"
            class="facebook"
            style="  background: #4867aa;"
            ><i class="fa fa-facebook facebook-i"></i
            ><span>Login With Facebook</span></a
          >
        </li>
        <!-- Google -->
        <li>
          <a
            href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=AddSession"
            class="google"
            style="  background: #db4437;"
            ><i class="fa fa-google google-i"></i
            ><span>Login With Google</span></a
          >
        </li>
      </ul>
      <!-- End Social Accounts -->
      <!-- Or -->
      <div class="or-login clearfix">
        <span>Or</span>
      </div>
      <!-- Start Form  -->
      <form>
        <!-- Name -->
        <label>Full Name</label>
        <input type="text" required v-model="text" placeholder="full name" />
        <!-- Email  -->
        <label>Email</label>
        <input
          type="email"
          required
          v-model="email"
          placeholder="name@example.com"
        />
        <!-- Password  -->
        <label>Password</label>
        <input
          type="password"
          required
          v-model="password"
          placeholder="at least 8 charachters"
        />
        <!-- checkbox  -->
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >By creating an account you agree to our terms of
            <span class="privacy">Service</span>,
            <span class="privacy">Privacy Policy</span> , and our default
            <span class="privacy">NotificationSettings</span> .
          </label>
        </div>
        <!-- Button  -->
        <button type="submit" class="btn btn-primary">Create Account</button>
        <!-- Login -->
        <span class="alreadyhave"
          >Already Have An Account ?
          <router-link
            :to="{ name: 'login' }"
            style="color: #4378e3 ; text-decoration:none; font-weight:bold;"
            >Log In</router-link
          >
     
          </span
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style >
/* Container (left & right) */
.container {
  display: flex;
  height: 100%;
  width: 100%;
}
/* left Container */
.left {
  text-align: center;
  background-image: linear-gradient(#447ae6, #223d73);
  text-align: center;
  width: 50%;
  height: 100vh;
}
/* left Image */
.leftImage {
  padding-top: 90px;
  width: 280px;
  height: 250px;
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
/* Dot Wrapper */
.dots-wrapper {
  display: flex;
  justify-content: center;
  margin: auto;
  margin: 60px;
}
.dot {
  height: 13px;
  width: 13px;
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 50%;
  display: inline-block;
  outline: none;
  margin: 5px;
}
.dot:hover {
  background: rgba(53, 53, 53, 0.466);
}
.dot.active {
  background: white;
}
/* right Container*/
.right {
  display: block;
  width: 50%;
  text-align: center;
  align-items: center;
  font-size: 20px;
  font-family: Segoe UI;
  color: black;
  padding-top: 5px;
}

/* ul social account */
ul {
  list-style: none;
  margin: 0;
  padding: 1px;
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
}

/* inputs */
input[type="text"],
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
.privacy {
  text-decoration: underline;
  color: #4b00ff;
}

.alreadyhave {
  padding-left: 90px;
}

.i-code{
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    text-align: center;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    margin: 0 4px;
    border: 2px solid #4f5b66;
    font-size: 38px;
}

</style>