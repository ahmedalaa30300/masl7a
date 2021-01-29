<template>
   <div class="container">
    <div class="left">
      <img class="leftImage" src="@/assets/Create.png" />
      <p>
        Help us getting better by sending your thoughts about us and about
        our<br />
        services, you can also mention any other points that are related by<br />
        sending your by sending thoughts by sending your thoughts.
      </p>

      <div class="dots-wrapper">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
    </div>
    <div class="right" style="padding-top:40px;">
      <h2>Create new password</h2>
      <span>Your new password must be different from<br />
        previously used password.</span
      >
      <form style="padding-top:70px;">
        <div class="form-group">
               <label for="psw">New Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
             <label for="psw">Confirm Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
        </div>
        <router-link :to="{ name: 'login' }"
          ><button type="submit" class="btn btn-primary">
            Save
          </button></router-link
        >
        <span style="text-decoration:underline; margin-left:150px;">
          <router-link
            :to="{}"
            style="color:#4B00FF; text-decoration:none; font-weight:bold;"
            >Change Password</router-link
          ></span
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>