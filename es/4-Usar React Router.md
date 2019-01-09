# Usar React Router

Si corremos nuestra aplicación como la dejamos en el paso anterior, podemos ver que al hacer clic en los `links` la página vuelve a cargarse (No es una `single page application` aún), y además, no nos lleva a ningún lado.  Ahora vamos a arreglar eso.

###### Crear `Home.js`

Vamos a modificar nuestro componente `App` para que solo contenga el menú y luego muestre los demás componentes dependiendo de la ruta a la que se acceda. Para esto vamos a crear un nuevo componente `Home.js` que contendrá lo nuestro `Grid` y `Header`.

```react
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Home extends Component {

  render() {
    return (
      <Grid>
        <h1>Este es mi primer componente</h1>
      </Grid>
    );
  }

}

export default Home;
```

###### Modificar `App.js`

Ahora, antes de modificar nuestro componente `App` vamos a instalar `react-router-dom` en nuestro proyecto. Desde la consola corremos:

```shell
npm install --save react-router-dom
```

`react-router-dom` contiene los componentes de ruteo que usaremos en nuestra aplicación.

Ahora modificamos el archivo  `App.js` de la siguiente forma:

```react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import ListadoPaises from './ListadoPaises';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/paises" component={ListadoPaises}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```

Si tratamos de correr ahora nuestra aplicación obtendríamos un error informando que no se puede resolver `ListadoPaises`. Para arreglar esto, vamos a copiar el contenido de nuestro componente `Home` y lo pegamos dentro de un nuevo componente `ListadoPaises.js` y hacemos unos cambios:

```react
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class ListadoPaises extends Component {

  render() {
    return (
      <Grid>
        <h1>Listado de Paises</h1>
      </Grid>
    );
  }

}

export default ListadoPaises;
```

Ahora, si corremos la aplicación vemos que dependiendo de la ruta que visitemos, vamos a ver el componente adecuado pero, el navegador aún sigue recargando la página.

###### Actualizar `Menu.js`

```react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/">Paises-React</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem componentClass={Link} href="/paises" to="/paises">
            Listado de Paises
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

}

export default Menu;
```

Aquí importamos el componente `Link` de `reat-router-dom` y cambiamos la "etiqueta" `<a>` por `<Link>` agregando un nuevo atributo `to`. Además, agregamos a el atributo `componentClass={Link}` a nuestros componentes `<NavItem>`. Ahora si, si corremos nuestra aplicación, al navegar mediante los `links`, la página no vuelve a cargarse.

###### La página no existe

Cuando intentamos navegar a una dirección que no existe, nuestra aplicación nos muestra una pagina en blanco. Arreglemos eso creando un nuevo componente `NoExiste.js`.

```react
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class NoExiste extends Component {

  render() {
    return (
      <Grid>
        <h1>La página que buscas no existe!</h1>
      </Grid>
    );
  }

}

export default NoExiste;
```

Ahora, como hemos hecho con los componentes anteriores, importamos `NoExiste` en nuestro `App.js`.

```react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import ListadoPaises from './ListadoPaises';
import NoExiste from './NoExiste';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/paises" component={ListadoPaises}></Route>
            <Route component={NoExiste}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```

Notemos, que agregamos un `Route` nuevo, donde no especificamos el `path`, pero si el componente. De esta forma, le decimos a `React` que cuando reciba el pedido de cualquier ruta que no este definida, debe mostrar el componente `NoExiste`.

[^Nota]: El componente `NoExiste` debe ir siempre al final.