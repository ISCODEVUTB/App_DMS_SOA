# App sistema de gestión documental
#### PROPIETARIOS DEL CONTENIDO
###### [Lucas Mateo Pedrozo Pertuz](mailto:lpedrozo@utb.edu.co "Lucas Mateo Pedrozo Pertuz"),[ Michael Andres Casadiegos Berrio](mailto:mcasadiegos@utb.edu.co " Michael Andres Casadiegos Berrio"), [Jose Miguel Mendoza Sepulveda](mailto:sepulvedaj@utb.edu.co "Jose Miguel Mendoza Sepulveda")
#### PROFESOR
######  [Edwin Alexander Puerdas Del Castillo](mailto:epuerta@utb.edu.co "Edwin Alexander Puerdas Del Castillo")

#### Resumen caso de estudio

###### Nuestra aplicación del sistema de gestión documental, llamada “Docs.”, es realizada con un enfoque en la arquitectura de servicios. Esta aplicación permitirá a los usuarios interactuar con los diferentes documentos que se ofrecen en ella, teniendo la posibilidad de comprar los documentos que están a la venta, como lo son libros.
###### Implementamos diferentes vistas que nos brindará una mejor experiencia, como son: iniciar sesión para el registro de nuestros usuarios, catálogo de nuestros documentos y a continuación también tenemos algunos servicios esenciales como son: Servicio stock o inventario y el servicio de carrito.
###### Al momento que los usuarios hagan su elección de los documentos, el carrito recoge toda la información de ellos para así terminar el proceso de compra y el inventario decremente. Al momento de realizar estos servicios finalizaremos el sistema de una manera exitosa.
###### Esta aplicación su código fue documentado en relación con html, css y JavaScript, para el inventario de todos nuestros documentos, donde podemos almacenar los datos, relacionados y estructurados, para poder consultarlos rápidamente, necesitamos de una base de datos, que está trabaja directamente con MySQL y es desplegada mediante el servicio en la nube llamado Heroku.


#### Objetivo
###### El objetivo de la aplicación del sistema de gestión documental es brindar a todos nuestros usuarios diferentes documentos, como puedes ser libros, artículos, revistas, audios, podcast, entre otros más. Con el fin, de que ellos puedan comprar cualquiera de esos documentos que necesite.

#### Tipos de usuarios
##### En nuestro sitio web encontramos dos tipos de roles
 - Administrador: encargado de estar al tanto del correcto funcionamiento y del contenido de la página web;
 - Usuario: Rol de las personas registradas de nuestro sitio web para realizar el proceso de compra de los documentos.


####Stakeholders del sistema
##### Stakeholder internos
- Administrador: encargado de estar al tanto del correcto funcionamiento y del contenido de la página web;
- Empleado: Prestación de servicios;
- Programador: Se aseguran de que la información del sitio web es correcta, segura y está actualizada;

##### Stakeholder externos
- Proveedores: Encargados de suministrar a la página web, los distintos documentos que serán vendidos y que incrementarán el inventario;
- Cliente: Rol de las personas registradas de nuestro sitio web para realizar el proceso de compra de los documentos;
- Distribuidores: Colocar los documentos a disposición que los clientes adquirieron;

####Responsabilidades del entorno de desarrollo
- HTML: Utilizamos este lenguaje para poder estructurar y desplegar nuestra aplicación “Docs.” como página web y sus contenidos, como lo son los textos, imágenes de nuestros documentos, etc;
- Css: Implementado para poder darle un mejor aspecto/estilo a nuestra página web, que sea mucho más atractiva;
- JavaScript: Su responsabilidad en el entorno de desarrollo es añadir características en nuestro sitio web para que sea interactiva, como por ejemplo, las animaciones.
- NodeJS:  Todas las API se desarrollaron en ella;
- MySQL: Es un sistema de gestión de base de datos, por ende, su implementación en nuestra aplicación en almacenar la cantidad de datos para poder llevar un inventario de nuestros documentos y poder consultarlos fácilmente. Además, también se implementaron variables de entorno que permiten la conexión a la base de datos, sim que los datos se vean comprometidos;

####Cobertura de requisitos
#####Requisitos funcionales
- Registrar datos del cliente;
- Consultar los documentos;
- Consultar los detalles del documento (ya sea libros, artículos, revistas, audios, podcast, entre otros más);
- Añadir los documentos al carrito;
- Modificar los documentos del carrito, como eliminar, agregar o modificar la cantidad;
- Seleccionar la forma de pago;
- Elegir la forma de envío;
- Elegir si deseamos comprar, canjear o alquilar el documento que elegimos;
- Confirmar pedido;
#####Requisitos no funcionales
- Rendimiento en el sistema;
- El sistema debe ser capaz de modificar la base de datos, dependiendo el incremento o decremento del inventario;
- El sistema es desarrollado en java, javascrip, la base de datos en MySQL y es desplegado en Heroku;

# Back-End

#### Rutas Endpoints

```javascript
router.get('/inventario', inventario)
router.get('/inventario/:id',inventario_id)
router.post('/create_inventory',create_inventory)
router.post('/update_inventory',update_inventory)
router.post('/delete_inventory',delete_inventory)
router.get('/carrito', carrito)
router.get('/carrito/:id', carrito_id)
router.post('/update_carrito', update_carrito)
router.post('/login', login)
router.post('/sigin', sigin)
router.post('/crear-orden', crearorden)
router.get('/feedback', feedback)
```

En base a que se trabajó con MYSQL para la manipulación de la base de datos, únicamente se utilizaron los métodos HTPP, GET y POST, los cuales nos permitirán obtener y enviar información a la base de datos.
#### Rutas implementadas.
- [/inventario, este lo que nos permitirá será obtener el ID, titulo, autor, categoría, detalle, cantidad, precio de compra y de venta, y la URL de la imagen asociada a cada libro, de todos los libros almacenados en la base de datos;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsin.controller.js "- /inventario, este lo que nos permitirá será obtener el ID, titulo, autor, categoría, detalle, cantidad, precio de compra y de venta, y la URL de la imagen asociada a cada libro, de todos los libros almacenados en la base de datos;")
- [/inventario/:id, por medio de esta ruta se obtendrán los mismos datos mencionados en la ruta anterior, pero mostrando únicamente la información del libro relacionada al id que se le pase por parámetro](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsin.controller.js "/inventario/:id, por medio de esta ruta se obtendrán los mismos datos mencionados en la ruta anterior, pero mostrando únicamente la información del libro relacionada al id que se le pase por parámetro");
- [/create_inventory, como su nombre lo indica, esta ruta permite la creación de un nuevo libro, teniendo en cuenta los datos mencionados anteriormente en la ruta /inventario;- /update_inventory, esta ruta permite la actualización del inventario, para esta sección se tiene en cuenta el ID para realizar la actualización, los campos permitidos para la actualización son cantidad, en caso de que se compren más stock, o precio de compra o de venta, si se requiere actualizar en algún momento;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsin.controller.js "/create_inventory, como su nombre lo indica, esta ruta permite la creación de un nuevo libro, teniendo en cuenta los datos mencionados anteriormente en la ruta /inventario;- /update_inventory, esta ruta permite la actualización del inventario, para esta sección se tiene en cuenta el ID para realizar la actualización, los campos permitidos para la actualización son cantidad, en caso de que se compren más stock, o precio de compra o de venta, si se requiere actualizar en algún momento;")
-[ /delete_inventory, por medio de la presente ruta se eliminará todo el registro de datos que exista de un libro, en esta sección solo es necesario el ID del libro que se desee borrar;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsin.controller.js " /delete_inventory, por medio de la presente ruta se eliminará todo el registro de datos que exista de un libro, en esta sección solo es necesario el ID del libro que se desee borrar;")
- [/carrito, este lo que nos permitirá será obtener el ID, titulo, cantidad, y precio de venta de los libros almacenados en la base de datos;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsca.controller.js "/carrito, este lo que nos permitirá será obtener el ID, titulo, cantidad, y precio de venta de los libros almacenados en la base de datos;")
-[ /carrito/:id, por medio de esta ruta se obtendrán los mismos datos mencionados en la ruta anterior, pero mostrando únicamente la información del libro relacionada al id que se le pase por parámetro;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsca.controller.js " /carrito/:id, por medio de esta ruta se obtendrán los mismos datos mencionados en la ruta anterior, pero mostrando únicamente la información del libro relacionada al id que se le pase por parámetro;")
-[ /update_carrito, esta ruta permite la actualización del carrito, para esta sección se tiene en cuenta el ID para realizar la actualización, el stock de productos disponibles se disminuirá de acuerdo con la cantidad que el cliente compre;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsca.controller.js " /update_carrito, esta ruta permite la actualización del carrito, para esta sección se tiene en cuenta el ID para realizar la actualización, el stock de productos disponibles se disminuirá de acuerdo con la cantidad que el cliente compre;")
-[ /login, esta ruta es la encargada de permitir a los usuarios el ingreso al sistema, se tiene en cuenta el correo y la contraseña, inicialmente se realiza una comparación de correo para validar que el usuario esté registrado en el sistema, si es así, se realiza la verificación de contraseña donde de manera cifrada se hará la comprobación de la clave almacenada en la base de datos con la que el usuario está digitando;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsus.controller.js " /login, esta ruta es la encargada de permitir a los usuarios el ingreso al sistema, se tiene en cuenta el correo y la contraseña, inicialmente se realiza una comparación de correo para validar que el usuario esté registrado en el sistema, si es así, se realiza la verificación de contraseña donde de manera cifrada se hará la comprobación de la clave almacenada en la base de datos con la que el usuario está digitando;")
-[ /sigin, la presente ruta permite la creación de nuevos usuarios al sistema, siempre y cuando el correo y el ID no se encuentren registrados con anterioridad, se requiere el ID, nombre, apellido, correo y contraseña, dicha contraseña estará cifrada por motivos de seguridad;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsus.controller.js " /sigin, la presente ruta permite la creación de nuevos usuarios al sistema, siempre y cuando el correo y el ID no se encuentren registrados con anterioridad, se requiere el ID, nombre, apellido, correo y contraseña, dicha contraseña estará cifrada por motivos de seguridad;")
- [/crear-orden, por medio de esta ruta se crear las URL que permitirán realizar y procesar los pagos por medio de Mercado Pago, se espera obtener del body, el título, cantidad y precio unitario de los artículos, donde se hace obligatorio la cantidad y precio de cada artículo para que se pueda crear la preferencia que contendrá todos los ítems seleccionados por el usuario y pueda realizar el pago;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsmerca.controller.js "/crear-orden, por medio de esta ruta se crear las URL que permitirán realizar y procesar los pagos por medio de Mercado Pago, se espera obtener del body, el título, cantidad y precio unitario de los artículos, donde se hace obligatorio la cantidad y precio de cada artículo para que se pueda crear la preferencia que contendrá todos los ítems seleccionados por el usuario y pueda realizar el pago;")
- [/feedback, esta ruta, sencillamente obtendrá los parámetros de ID, estado y número de orden por medio de URL, esto permitirá mostrarle al usuario el estado en que se encuentra su orden;](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/back-end/Endpoints_service/Endpoints_service-master/src/controller/endpointsmerca.controller.js "/feedback, esta ruta, sencillamente obtendrá los parámetros de ID, estado y número de orden por medio de URL, esto permitirá mostrarle al usuario el estado en que se encuentra su orden;")
#Front-End

###### En la carpeta [front-end](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end "front-end") se encuentra el codigo indexado para las vistas por el lado del cliente



## Caracteristicas de la interfaz

- Diseño responsivo y adaptable a cualquier pantalla;
- Conexion a las APIs;
- Gama de colores conocidas;



## Guia de uso y acceso a cada una de las carpetas

### Carpeta public
- [index.html](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/front-end/index.html "index.html")
- [index-login.html](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/front-end/index-login.html "index-login.html")
- [inventario.html](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/front-end/inventario.html "inventario.html")
- [sesion.html](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/front-end/sesion.html "sesion.html")

#### Carpetas indexadas en public
- [scripts](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/scripts "scripts")
- [styles](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/styles "styles")
- [img](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/img "img")
- [Dashboard](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/Dashboard "Dashboard")

#### Descripcion de cada carpeta

- En la carpeta de [scripts](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/scripts "scripts") se encuentran todos los archivos con javascript.
- En la carpeta[ styles](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/styles " styles") se encuentran todas las hojas de estilo.
- En la carpeta[ img](https://github.com/ISCODEVUTB/App_DMS_SOA/tree/main/front-end/img " img") se encuentran las imagenes usadas en el proyecto.

#####Documentación completa [aquí](https://github.com/ISCODEVUTB/App_DMS_SOA/blob/main/Documento%20de%20Arquitectura%20de%20Software.docx "aquí")

###Agradecimiento
 Agradecer a nuestro profesor de Arquitectura de Software, Edwin Alexander Puertas del Castillo, por su dedicación y tiempo hacia nosotros en cada una de las reuniones de trabajo con el equipo de trabajo compuesto por: Lucas Mateo Pedrozo Pertuz, José Miguel Mendoza Sepúlveda y Michael Andres Casadiegos Berrio. Para así, poder realizar cada una de las incidencias y lograr llegar con éxito al trabajo final de la Aplicación de gestión documental.


###End
