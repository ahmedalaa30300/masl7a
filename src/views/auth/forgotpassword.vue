<template>
    <!-- Container Login-->
  <div class="container">
    <!-- Start Left Container (image & text)-->
    <div class="left">
      <!-- image -->
      <img class="leftImage" src="@/assets/Forgot.png" />
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
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
    </div>
    <!-- End Left Container -->
    <!-- Start Right Container -->
    <div class="right" style="padding-top:40px;">
      <h2>Forget Password</h2>
      <span
        >Please enter your e-mail address to receive a <br />
        verification code.</span
      >
      <!-- Start Form  -->
      <form style="padding-top:70px;">
        <!-- Email -->
        <label>Email</label>
        <input
          type="email"
          required
          v-model="email"
          placeholder="name@example.com"
        />
        <!-- button -->
        <router-link :to="{ name: 'vemail'}">
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </router-link>
        <!-- Link -->
        <span style="text-decoration:underline; margin-left:150px;">
          <router-link
            style="color:#4B00FF; text-decoration:none; font-weight:bold;"
          >
            Try another way
          </router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


</style>