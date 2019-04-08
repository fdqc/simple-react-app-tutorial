# Creando el Menú

###### Organizar el código

Antes de crear nuestro menú, vamos a crear una nueva carpeta dentro nuestro `src` que llamaremos `componentes` como dice el nombre, para guardar aquí todos nuestros componentes y moveremos nuestro archivo `App.js` dentro del mismo.

Para que nuestra aplicación siga funcionando debemos modificar nuestro `index.js` para que ahora importe nuestro componente `App` desde la carpeta `componentes`,  quedando así:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';

// Importamos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

Si corremos la aplicación, podemos ver que todo sigue funcionando.

###### Crear `Menu.js`

Ahora si, dentro de nuestra carpeta `componentes` creamos un nuevo archivo que se llame `Menu.js` que contendrá:

```react
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Menu extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
         <a href="/">Paises-React</a>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/paises">
            Listado de Paises
          </Nav.Link>
        </Nav>        
      </Navbar>
    );
  }

}

export default Menu;
```

Aquí lo que hacemos es crear un componente llamado `Menu` que contendrá nuestra barra de navegación, con la `marca(brand)` de nuestra aplicación, que debe dirigirnos al inicio de la aplicación y dos `links`, uno al inicio `Home` y otro al listado de países.

Ahora, para poder ver nuestro nuevo menú, debemos importarlo dentro de nuestro componente `App.js` y dentro del método `render` agregamos nuestro componente `Menu`.

```react
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu></Menu>
        <h1>Este es mi primer componente</h1>
      </Container>
    );
  }
}

export default App;
```

[Usar React Router](https://github.com/fdqc/simple-react-app-tutorial/blob/master/es/4-Usar%20React%20Router.md)