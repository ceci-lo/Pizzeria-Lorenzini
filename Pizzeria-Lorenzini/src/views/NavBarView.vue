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
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/">Home</router-link></a
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
                  <a class="nav-link" href="/login.html">Log in</a>
                </button>
                <button type="button" class="btn btn-dark">
                  <a class="nav-link">Register</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
