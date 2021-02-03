<template>
  <div>
    <!--nav secion-->
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MSL7A</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Top Workers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feedback</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item ms-2 me-3">
                <a class="btn btn-primary" href="/signup">Signup</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-outline-primary" href="/login">Login</a>
              </li>
            </ul>
          </div>
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
}
.navbar-nav {
  padding: 0 10px;
}
.navbar-nav li a {
  color: white !important;
  font-weight: 600;
}
.navbar-brand {
  color: black !important;
}
.fa-bars {
  color: white;
  font-size: 30px !important;
}
.navbar-toggler {
  outline: none !important;
  border: none !important;
}
</style>
