<template>
    <!-- Container Login-->
  <div class="container">
    <!-- Start Left Container (image & text)-->
    <div class="left">
      <!-- image -->
      <img class="leftImage" src="@/assets/Login.png" />
      <!-- text -->
      <p>
        Help us getting better by sending your thoughts about us and about our
        services,<br />
        you can also mention any other points that are related by<br />
        sending your by sending thoughts by sending your thoughts.
      </p>
      <!-- dots -->
      <div class="dots-wrapper">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <!-- End Left Container -->
    <!-- Start Right Container -->
    <div class="right">
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
            <i class="fa fa-facebook facebook-i"></i>
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
            <i class="fa fa-google google-i"></i>
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
          <router-link class="forget" :to="{ name: 'forgotpassword' }" >
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
              </router-link
            >
          </div>
      </form>
      <!-- End Form  -->
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

body{
    margin: 0 auto;
}

</style>
