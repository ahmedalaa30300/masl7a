<template>
  <div class="flex-container">
    <div class="content left">
      <div class="col">
        <img src="@/assets/auth/Signup.png" />
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
        <h3>Sign Up</h3>
        <ul class="social">
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
              <span>Login With Facebook</span></a
            >
          </li>
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
              <span>Login With Google</span></a
            >
          </li>
        </ul>
        <div class="or-login clearfix">
          <span>Or</span>
        </div>
        <form>
          <label>Full Name</label>
          <input type="text" required v-model="text" placeholder="full name" />
          <label>Email</label>
          <input
            type="email"
            required
            v-model="email"
            placeholder="name@example.com"
          />
          <label>Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >By creating an account you agree to our terms of
              <span class="privacy">Service</span>,
              <span class="privacy">Privacy Policy</span> , and our default
              <span class="privacy">NotificationSettings</span> .
            </label>
          </div>
          <button>Create Account</button>
          <span class="alreadyhave"
            >Already Have An Account ?
            <router-link
              :to="{ name: 'login' }"
              style="color: #4378e3 ; text-decoration:none; font-weight:bold;"
              >Log In</router-link
            >
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.left {
  background-image: linear-gradient(to bottom , #447AE6 ,#223D73);
  align-items: center;
  margin: auto;
  padding: auto;
  text-align: center;
  color: white;
}
/* left Image */
.left img {
  height: 450px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
}
/* left Paragraph */
.left p {
  font-size: 14px;
  font-family: Segoe UI;
  color: white;
  padding-top: 80px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 500;
}
p {
  padding-top: 40px;
}
.right {
  text-align: center;
  align-items: center;
  justify-content: center;
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
.social li a span {
  margin-right: 10px;
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
  padding-top: 10px;
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


</style>
