<template>
  <div class="navbar">
    <nav>
      <div>
        <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
      </div>

      <div class="links">
        <div>
          <button>Log Out</button>
        </div>
        <div>
          <router-link class="btn" :to="{ name: 'login' }">LogIn</router-link>
          <router-link class="btn" :to="{ name: 'signup' }">SignUp</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
img {
  max-height: 50px;
  border-radius: 500px;
}
</style>