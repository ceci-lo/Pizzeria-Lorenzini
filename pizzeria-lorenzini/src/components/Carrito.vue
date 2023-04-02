
<script setup>


</script>
<template>
  <div class="container">
    <div class="row">
  <h2 class="col-6 offset-3">Carrito de Compra</h2>
  <ul v-for="a in pizza">
  <RouterLink :to="{name:'home', params:{id:a}}"></RouterLink>
 </ul>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td colspan="1"></td>
      <td colspan="1"><h3>Total:</h3></td>
      <td>$0</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>
