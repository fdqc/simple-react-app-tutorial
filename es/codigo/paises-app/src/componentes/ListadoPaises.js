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
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {this.state.listadoPaises.map( pais => (
                <ListGroupItem key={pais.codigoPais} header={pais.nombreCortoPais}>
                  <strong>Nombre Largo: </strong>{pais.nombreLargoPais} <br/>
                  <strong>Abreviatura: </strong>{pais.abreviaturaPais} <br/>
                  <strong>Bandera: </strong> <img width="32px" alt={"Bandera de" + pais.nombreCortoPais } src={pais.imgUrl}></img>
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
