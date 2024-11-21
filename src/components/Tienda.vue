<template>
    <header class="storeHead container text-center my-2">
        <h1 class="storeHead__title">
            Tienda 32 bits
        </h1>
        <h4 class="storeHead__subtitle">
            Lista de juegos
        </h4>
    </header>
    <section class="storeContent container my-2">
        <table class="container border text-center m-2">
            <thead>
                <th><strong>Código</strong></th>
                <th><strong>Nombre</strong></th>
                <th><strong>Stock</strong></th>
                <th><strong>Precio</strong></th>
                <th><strong>Acciones</strong></th>
            </thead>
            <tbody>
                <tr v-for="items in inventario" :key="items.codigo">
                    <td>{{ items.codigo }}</td>
                    <td>{{ items.nombre }}</td>
                    <td>{{ items.stock }}</td>
                    <td>{{ items.precio }}</td>
                    <td>
                        <button @click="actualizarInventario(items.codigo, '+')">+</button>
                        <button @click="actualizarInventario(items.codigo, '-')">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Tienda',
        computed: {
            ...mapGetters(['inventario'])
        },
        data(){
            return{
                
            }
        },
        methods: {
            ...mapActions(['cambiarInventario']),
            actualizarInventario(codigo, stock){
                this.cambiarInventario({codigo, stock})
            }
        }
    }
</script>
<style>
/* Fondo dinámico y enérgico */
body {
    background: linear-gradient(180deg, #1a1d4e, #3a3f92);
    font-family: 'Bangers', cursive, sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
}

/* Encabezado llamativo */
.storeHead {
    background: linear-gradient(90deg, #ffcb05, #e63946);
    color: #1a1d4e;
    text-transform: uppercase;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    text-align: center;
}

.storeHead__title {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px #ffffff;
}

.storeHead__subtitle {
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 1px 1px #1a1d4e;
}

/* Tabla con bordes destacados */
.storeContent table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #3a3f92;
    color: #ffffff;
    border: 3px solid #ffcb05;
    border-radius: 10px;
    overflow: hidden;
}

thead th {
    background: #e63946;
    color: #ffffff;
    font-weight: bold;
    padding: 15px;
    border-bottom: 3px solid #ffcb05;
}

tbody td {
    padding: 10px;
    border-bottom: 1px solid #ffcb05;
    text-align: center;
}

tbody tr:hover {
    background-color: #ffcb05;
    color: #1a1d4e;
    transition: all 0.3s ease;
}

/* Botones de acción heroicos */
button {
    background-color: #e63946;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 2px 2px #ffcb05;
    transition: all 0.2s ease;
}

button:hover {
    background-color: #ffcb05;
    color: #1a1d4e;
    transform: scale(1.1);
}

button:active {
    background-color: #c21e30;
    transform: scale(0.95);
}

/* Responsivo para dispositivos más pequeños */
@media (max-width: 768px) {
    .storeHead__title {
        font-size: 2rem;
    }

    .storeHead__subtitle {
        font-size: 1.2rem;
    }

    table {
        font-size: 0.8rem;
    }

    button {
        font-size: 0.8rem;
        padding: 8px 12px;
    }
}
</style>
