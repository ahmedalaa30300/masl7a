<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-brand">
            <strong class="navbar-item">MSL7A</strong>
          </div>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" :to="{name: 'header'}">Home</router-link>

          <router-link class="navbar-item" to="#">Our Services</router-link>

          <router-link class="navbar-item" to="#">Top Worker</router-link>

          <router-link class="navbar-item" to="#">FeedBack</router-link>

          <router-link class="navbar-item" to="#">Contact</router-link>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
