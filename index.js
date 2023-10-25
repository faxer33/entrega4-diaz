const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 8080;

app.use(express.json());

// Rutas para productos
const productsRouter = express.Router();

// Obtener todos los productos
productsRouter.get('/', async (req, res) => {
  try {
    // Implementa la lógica para obtener todos los productos
    // Puedes utilizar fs para leer el archivo "productos.json"
    // y enviar los datos como respuesta.
    res.send('Implementar lógica para obtener todos los productos');
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Obtener un producto por ID
productsRouter.get('/:pid', async (req, res) => {
  try {
    // Implementa la lógica para obtener un producto por ID
    // Puedes utilizar fs para leer el archivo "productos.json"
    // y filtrar el producto por el ID proporcionado en req.params.pid
    res.send(`Implementar lógica para obtener el producto con ID ${req.params.pid}`);
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Agregar un nuevo producto
productsRouter.post('/', async (req, res) => {
  try {
    // Implementa la lógica para agregar un nuevo producto
    // Asegúrate de validar y procesar correctamente los datos del cuerpo (req.body)
    // Puedes utilizar fs para leer y escribir en el archivo "productos.json"
    res.send('Implementar lógica para agregar un nuevo producto');
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Actualizar un producto por ID
productsRouter.put('/:pid', async (req, res) => {
  try {
    // Implementa la lógica para actualizar un producto por ID
    // Asegúrate de no actualizar el ID y valida y procesa correctamente los datos del cuerpo (req.body)
    // Puedes utilizar fs para leer y escribir en el archivo "productos.json"
    res.send(`Implementar lógica para actualizar el producto con ID ${req.params.pid}`);
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Eliminar un producto por ID
productsRouter.delete('/:pid', async (req, res) => {
  try {
    // Implementa la lógica para eliminar un producto por ID
    // Puedes utilizar fs para leer y escribir en el archivo "productos.json"
    res.send(`Implementar lógica para eliminar el producto con ID ${req.params.pid}`);
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Rutas para carritos
const cartsRouter = express.Router();

// Crear un nuevo carrito
cartsRouter.post('/', async (req, res) => {
  try {
    // Implementa la lógica para crear un nuevo carrito
    // Asegúrate de validar y procesar correctamente los datos del cuerpo (req.body)
    // Puedes utilizar fs para leer y escribir en el archivo "carrito.json"
    res.send('Implementar lógica para crear un nuevo carrito');
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Obtener productos de un carrito por ID
cartsRouter.get('/:cid', async (req, res) => {
  try {
    // Implementa la lógica para obtener productos de un carrito por ID
    // Puedes utilizar fs para leer el archivo "carrito.json"
    // y filtrar los productos por el ID de carrito proporcionado en req.params.cid
    res.send(`Implementar lógica para obtener productos del carrito con ID ${req.params.cid}`);
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Agregar un producto a un carrito por ID
cartsRouter.post('/:cid/product/:pid', async (req, res) => {
  try {
    // Implementa la lógica para agregar un producto a un carrito por ID
    // Asegúrate de validar y procesar correctamente los datos del cuerpo (req.body y req.params)
    // Puedes utilizar fs para leer y escribir en el archivo "carrito.json"
    res.send(`Implementar lógica para agregar el producto con ID ${req.params.pid} al carrito con ID ${req.params.cid}`);
  } catch (error) {
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

// Agrega las rutas de productos al grupo /api/products/
app.use('/api/products', productsRouter);

// Agrega las rutas de carritos al grupo /api/carts/
app.use('/api/carts', cartsRouter);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
