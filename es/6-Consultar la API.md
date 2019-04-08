# Consultar la API

Para consultar una `API` que puede estar escrita usando cualquier tecnología para el `Backend` como `PHP`, `Python`, `JavaScript`, entre otros, vamos a utilizar `Axios`. `Axios` es un cliente `HTTP` con el que podemos hacer llamadas `get`, `post`, entre otros. En este caso, solo usaremos el método `get` para obtener la lista de países junto a su información.

Primero, tenemos que instalar `Axios`, y lo hacemos ejecutando:

```shell
npm install --save axios
```

###### Modificar `ListadoPaises.js`

Modificamos nuestro componente `ListadoPaises`, hacemos varios cambios. Primero importamos `Axios`, para que podamos usarlo mas tarde. A continuación, vamos a definir un estado interno para nuestro componente. Dentro de nuestra clase declaramos `state` que tendrá un arreglo que llamaremos `listadoPaises` y una variable booleana que llamaremos `estaCargando` que inicializaremos en `false`.

```react
class ListadoPaises extends Component {
  state = {
    listadoPaises: [],
    estaCargando: false,
  }
...
}
```

En el siguiente paso, utilizaremos un método especial en nuestra clase, llamado `componentDidMount()`. Este es uno de los métodos del "ciclo de vida" de `React`. Estos métodos, se utilizan para correr código cuando un componente es montado o desmontado por ejemplo. En nuestro caso, queremos obtener el listado de países y sus atributos luego de que la salida del componente ha sido renderizada en el `DOM`.

Dentro de `componentDidMount()` cambiamos el estado de nuestra variable `estaCargando` a `true` para que con esto mostremos el mensaje "Obteniendo listado...". A continuación hacemos una petición a nuestra `API` mediante `Axios` usando el método `get`. Cuando obtengamos la `respuesta` de nuestra `API` actualizamos el estado del componente asignando el arreglo que se encuentra en `respuesta.data` a `listadoPaises` y cambiando el valor de `estaCargando` a `false`.

```react
class ListadoPaises extends Component {
  state = {
    listadoPaises: [],
    estaCargando: false,
  }

  componentDidMount() {
    this.setState({ estaCargando: true });

    axios.get('http://localhost:3004/paises')
      .then(respuesta => {
        this.setState({
          listadoPaises: respuesta.data,
          estaCargando: false,
        });
      });
  }
...
}
```

Como ultimo paso, en el método `render()` escribimos una condición. Si nuestro estado `estaCargando` es verdadero mostramos el mensaje de que se esta obteniendo el listado de países, en caso contrario, mostramos el listado de países junto a sus atributos. El estado final de nuestro componente debe verse así:

```react
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class ListadoPaises extends Component {
  state = {
    listadoPaises: [],
    estaCargando: false,
  }

  componentDidMount() {
    this.setState({ estaCargando: true });

    axios.get('http://localhost:3004/paises')
      .then(respuesta => {
        this.setState({
          listadoPaises: respuesta.data,
          estaCargando: false,
        });
      });
  }

  render() {
    if (this.state.estaCargando) {
      return (
        <Container>
          <h1>Obteniendo listado...</h1>
        </Container>
      )
    }
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>
              Listado de Paises
            </Card.Title>
          </Card.Heading>
          <Card.Body>
            <ListGroup>
              {this.state.listadoPaises.map( pais => (
                <ListGroupItem key={pais.codigoPais} header={pais.nombreCortoPais}>
                  <strong>Nombre Largo: </strong>{pais.nombreLargoPais} <br/>
                  <strong>Abreviatura: </strong>{pais.abreviaturaPais} <br/>
                  <strong>Bandera: </strong> <img alt={"Bandera " + pais.nombreCortoPais } src={pais.imgUrl}></img>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    );
  }

}

export default ListadoPaises;
```

Utilizamos el método `map()` para iterar en el arreglo de países, mostrando para cada uno su nombre corto, nombre largo, abreviatura y bandera. El atributo `key` se utiliza porque cada `item` debe tener un único identificador.

Si corremos nuestra aplicación y vamos al listado de países, deberíamos ver que por un momento se muestra el mensaje de que el listado esta siendo obtenido y luego se muestra la lista de países con sus respectivos atributos.