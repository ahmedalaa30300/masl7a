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


</style>