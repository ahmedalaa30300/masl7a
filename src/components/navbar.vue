<template>
  <div>
    <!--nav secion-->
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">MSL7A</a>
        <div class="navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <a class="router nav-link" href="/header" v-smooth-scroll>Home</a>
            </li>
            <li>
              <a class="nav-link" href="#">Our Services</a>
            </li>
            <li>
              <a class="nav-link" href="#">Top Workers</a>
            </li>
            <li>
              <a class="nav-link" href="/feedback" v-smooth-scroll="{ duration: 1000, offset: -50, container: '#container', updateHistory: false }">Feedback</a>
            </li>
            <li>
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class=" ms-2 me-3">
              <a href="/signup">
                <button
                  class="btn"
                  style="background:white; color: #3C6CCC !important;"
                >
                  Signup
                </button></a
              >
            </li>
            <li>
              <a href="/login">
                <button
                  class="btn"
                  style="border-color:white !important; color:white !important"
                >
                  Login
                </button></a
              >
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
}
.navbar {
  padding: 1 !important;
  background: #4073da;
}
.navbar-brand {
  color: white !important;
  padding-left: 15px;
  font-weight: 500;
}
.navbar-nav {
  padding: 0 10px;
}
.navbar-nav li {
  padding-right: 15px;
}
.navbar-nav li a {
  color: white !important;
  font-weight: 600;
}
</style>
