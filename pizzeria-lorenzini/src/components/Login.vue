<script setup>
function password() {
  let show = document.getElementById("inputPassword2");

  if (show.type == "password") {
    show.type = "text;";
  } else {
    show.type = "password";
  }
}
</script>

<template>
  <div class="log d-flex align-items-center">
    <div class="container ">

      <div class="row ">
        <div class="col-5 offset-3 log-form shadow p-3 mb-5 bg-body-tertiary rounded">
          <h3 class="col-6 offset-5">Ingresar</h3>
          <label for="exampleDataList" class="form-label col-6 offset-3">Email</label>
          <div class="col-6 offset-3">
            <label for="email" class="visually-hidden"></label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com" />
          </div>
          <label for="exampleDataList" class="form-label col-6 offset-3">Contraseña</label>
          <div class="col-6 offset-3 ">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
          </div>
          <div class="form-check col-6 offset-3">
            <input class="form-check-input" type="checkbox" value="" @click="password()" id="flexCheckChecked">
            <label class="form-check-label log-bottom" for="flexCheckChecked">
              Mostrar Contraseña
            </label>
          </div>
          <div class="col-4 offset-5 log-bottom ">
            <button type="submit" class="btn btn-primary">Confirmar</button>

          </div>
          <div class="col-6 offset-3 log-bottom"><a href="#">¿Olvidaste tu contraseña?</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
