<script setup>


</script>

<template>

 
  <div class="container log-bottom">

    <div
      class="row col-4 offset-4 reg-form d-flex align-content-between flex-wraps shadow p-3 mb-5 bg-body-tertiary rounded">
      <h3 class="col-6">Registrarse</h3>

      <label for="exampleDataList" class="form-label log-bottom">Nombre</label>
      <input class="form-control " list="datalistOptions" id="exampleDataList" placeholder="Nombre">

      <label for="exampleDataList" class="form-label log-bottom">Apellido</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Apellido">

      <label for="exampleDataList" class="form-label log-bottom">Ciudad</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona una sucursal</option>
        <option value="1">Santa Fe</option>
        <option value="2">Santo tome</option>
        <option value="3">Paraná</option>
      </select>

      <label for="exampleDataList" class="form-label log-bottom">Direccion de envio</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Direccion">

      <label for="exampleDataList" class="form-label log-bottom">Email</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escriba su mail">

      <label for="exampleDataList" class="form-label log-bottom">Contraseña</label>
      <input class="form-control reg-bottom" type="password" list="datalistOptions" id="exampleDataList"
        placeholder="Contraseña">

      <button type="button" class="btn btn-danger col-6 offset-3 " data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">Registrarse</button>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-body">
              Usted se ha registrado correctamente
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onclick="location.href = '/login.html';">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
