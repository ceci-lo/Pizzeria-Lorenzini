<script setup>
import { ref } from "vue";

let productos = [
  {
    id: 1,
    Nombre: "Pizza Calabreza",
    Ingredientes: "Salsa de tomate, oregano, muzarella, Calabreza y aceitunas",
    Porciones: "8 porciones",
    Precio: "2050",
    img: "img/pizzaCalabreza.jpg",
  },
  {
    id: 2,
    Nombre: "Pizza Cuatro Quesos",
    Ingredientes:
      "Salsa de tomate, Holanda, muzarella, Roquefort y queso parmesano",
    Porciones: "8 porciones",
    Precio: "2150",
    img: "img/pizzaCuatroQuesos.jpg",
  },
  {
    id: 3,
    Nombre: "Pizza Especial",
    Ingredientes: "Salsa de tomate, muzarella, jamon cocido  y morrones",
    Porciones: "8 porciones",
    Precio: "1900",
    img: "img/pizzaEspecial.jpg",
  },
  {
    id: 4,
    Nombre: "Pizza Margaritha",
    Ingredientes: "Salsa de tomate, muzarella, Tomate cubeteado y alabahaca",
    Porciones: "8 porciones",
    Precio: "1900",
    img: "img/pizzaMargarita.jpg",
  },
  {
    id: 5,
    Nombre: "Pizza Napolitana",
    Ingredientes:
      "Salsa de tomate, rodajas de Tomate, oregano y aceitunas negras",
    Porciones: "8 porciones",
    Precio: "1500",
    img: "img/pizzaNapolitana.jpg",
  },
  {
    id: 6,
    Nombre: "Pizza Pepperoni",
    Ingredientes: "Salsa de tomate, muzarella, peperoni",
    Porciones: "8 porciones",
    Precio: "1900",
    img: "img/pizzaPepperoni.webp",
  },
  {
    id: 7,
    Nombre: "Pizza Toscana",
    Ingredientes:
      "Salsa de tomate, muzarella, rucula, jamon crudo, tomates cherrys y aceitunas negras",
    Porciones: "8 porciones",
    Precio: "2500",
    img: "img/pizzaToscana.jpg",
  },
];

let count = ref(0);
let cantidad;

function aumentar() {
  cantidad = document.getElementById("cantidad").value = ++count;
}
function disminuir() {
  cantidad = document.getElementById("cantidad").value = --count;
}

const pizza = ref({});

const seleccionPizza = (producto) => {
  pizza.value = producto;
  console.log(pizza);
};

</script>

<template>
  <div class="divPizzeria">
    <img
      src="/img/pizza.jpg"
      alt="pizzeria lorenzini imagen principal"
      class="imgPizzeria"
    />
  </div>

  <div class="container second-part">
    <div class="input-group">
      <input type="text" class="form-control" />

      <span class="input-group-text"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          /></svg
      ></span>
    </div>
  </div>

  <div id="productos" class="container productoSection">
    <div class="row">
      <div
        class="card col-6 productoRow"
        style="max-width: 500px"
        v-for="producto in productos"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="producto.img" class="img-fluid img-card" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ producto.Nombre }}</h5>
              <p class="card-text">{{ producto.Ingredientes }}</p>
              <p>
                <strong>$ {{ producto.Precio }}</strong>
              </p>
              <div>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  @click.prevent="seleccionPizza(producto)"
                >
                  +
                </button>

                <!--modal boton +-->
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                          {{ pizza.Nombre }}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="box-modal-img">
                          <img class="img" :src="pizza.img"  />
                        </div>
                        <div class="box-modal-ingredientes">
                          {{ pizza.Ingredientes }}
                        </div>
                        <div class="mb-3 box-modal-unidades">
                          <h4>Unidades</h4>
                          <div>
                          <button
                            id="disminuir"
                            @click="disminuir()"
                            class="btn btn-danger"
                          >
                            -</button
                          ><input
                            class="cantidad"
                            type="text"
                            value="0"
                            id="cantidad"
                          /><button
                            class="btn btn-danger"
                            id="aumentar"
                            @click="aumentar()"
                          >
                            +
                          </button>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label"
                            >Nota para producto</label
                          >
                          <textarea
                            class="form-control"
                            id="message-text"
                          ></textarea>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger">
                          Aceptar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-text">
                <small class="text-muted">Envio en 30-40 min</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>Copyrigth Cecilia Lorenzini 2022</p>
  </div>
</template>
<style>

<!--MODAL STYLE-->
  .img{
    width: 400px;
    height: 200px;
    align-content: center;
  }
  .box-modal-img{
    padding-bottom: 20px;
  }
.box-modal-ingredientes{
  padding-bottom: 20px;
}
  .box-modal-unidades{
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  .cantidad{
    width: 25px;
  }

</style>