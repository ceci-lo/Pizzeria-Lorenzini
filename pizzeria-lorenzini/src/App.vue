<script setup>
</script>

<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container">
        <a class="navbar-brand" href="Index.html">Pizzeria Lorenzini</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"
                ><router-link  to="/" style="text-decoration: none; color: inherit">home</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Carta</a>
            </li>
          </ul>
          <div class="container">
            <div class="row">
              <div class="col-3 btn-group offset-8" role="group">
                <button type="button" class="btn btn-outline-dark">
                  <router-link to="/login" style="text-decoration: none; color: inherit">Login</router-link>
                </button>
                <button type="button" class="btn btn-dark">
                  <router-link to="/register" style="text-decoration: none; color: inherit">register</router-link>
                </button>
                <li class="nav-item"  style=" list-style: none;">
                  <a class="nav-link active">
                    <router-link to="/carrito" style="text-decoration: none; color: inherit">carrito</router-link></a
                  >
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <RouterView></RouterView>
</template>
