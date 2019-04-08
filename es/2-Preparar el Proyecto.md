# Preparar el Proyecto

###### Eliminar archivos innecesarios

Ahora eliminaremos los archivos que no son necesarios para esta aplicación. Ingresamos al directorio `src` y borraremos los archivos `App.css`, `App.test.js`, `index.css` y `serviceWorkers.js` y nuestro directorio debería quedar así:

![](../img/directorio1.png)

Ahora abrimos nuevamente la consola y escribimos:

```shell
npm install --save react-bootstrap bootstrap
```

Lo cual instalará en nuestro proyecto `React-Bootstrap`, que no es mas que los componentes de `Bootstrap` hechos pensando en `React`, y `Bootstrap` para poder usar todos sus estilos.

###### Modificar `index.js`

Ahora abrimos el archivo `index.js` y lo modificamos para que quede de la siguiente manera:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importamos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

###### Modificar `App.js`

Abrimos nuestro archivo `App.js` y lo modificamos para que se vea así:

```react
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Este es mi primer componente</h1>
      </Container>
    );
  }
}

export default App;
```

También podemos borrar `logo.svg` que ya no es necesario.

Ahora, si volvemos a la consola y corremos `npm run start` deberíamos ver en nuestro navegador una pantalla en blanco con un `Header` que dice "Este es mi primer componente".

[Crear el Menu](./3-Creando el Menu.md)