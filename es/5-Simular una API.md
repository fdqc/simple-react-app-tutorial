# Simular una API

###### Simulemos una `API`

Ya que este trabajo solo se centra en el `Frontend`, y no queremos desarrollar toda una `API` para hacer pruebas, vamos a utilizar `JSON Server`. Con el, podemos crear una `API` de prueba en muy poco tiempo.

Para esto, debemos crear un nuevo proyecto, por lo que debemos salir del directorio que contiene nuestra aplicación de `React`.

Asumiendo que estas en el directorio de nuestra aplicación, corremos en la consola:

```shell
cd ..
mkdir testAPI
cd testAPI
npm init
```

Con esto:

1. Volvemos atrás un directorio.
2. Creamos un directorio nuevo, que se llama `testAPI`.
3. Nos movemos a `testAPI`.
4. Inicializamos un nuevo paquete.

`npm init` nos va a hacer varias preguntas, podemos darle `enter` a todo y confirmar, dado que es solo para nuestras pruebas. Al terminar, corremos en la consola:

```shell
npm install --save json-server
```

Ahora vamos a crear un archivo llamado `db.json` y dentro definiremos un arreglo de países, con los objetos y atributos de unos países de prueba:

```json
{
  "paises": [
    {
      "codigoPais": 1,
      "nombreLargoPais": "Republica Argentina",
      "nombreCortoPais": "Argentina",
      "abreviaturaPais": "AR",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
    },
    {
      "codigoPais": 2,
      "nombreLargoPais": "Republica de Zimbabwe",
      "nombreCortoPais": "Zimbabwe",
      "abreviaturaPais": "ZW",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg"
    }
  ]
}

```

Para correr nuestra `API` de prueba, abrimos el archivo `package.json` que se encuentra en el proyecto y agregamos un `script`.  El archivo debería verse así:

```json
{
  "name": "testapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 3004"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.14.2"
  }
}
```

Ahora, si escribimos en la consola:

```shell
npm run start
```

Vemos que podemos consultar nuestra `API` de pruebas en http://localhost:3004/paises.

[Consultar API](./6-Consultar la API.md)