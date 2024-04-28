# Trabajo Practico de la materia Desarrollo de Aplicaciones Multiplataformas

## Description
Una aplicacion desarrollada con Angular/Ionic que permite llevar un control y recopilacion de información proporcionada por un sensor que va a medir la humedad de la tierra mediante el uso de un tensiómetro el cual responde a cambios de tensión de humedad en el suelo y su funcionamiento se rige por la fuerza de succión del suelo. 

## Estructura del Proyecto

```plaintext
Copy code
app-dam/
│
├── backend/                  
│   ├── Routes
|   ├── index.js
│       ├── mediciones
│       ├── riego
│       ├── dispositivos
│    
├── frontend/dam                  
│   ├── node.modules ---> Para instalar todas las dependencias debes correr npm install
|   ├── app
│       ├── mediciones
│       ├── riego
│       ├── dispositivos   
│       ├──  nodo
│       |
│       ├── pipe
│       ├── directives   
│       ├── services
│       |
│       ├── app-rounting-modules
│       ├── app.module.ts
│       ├── app.components

```

## Instalacion
Para usar este repositorio, siga estos pasos:

1. Clone el repositorio: git clone https://github.com/macolb/DAM-TPF.git
2. Correr los contenedores de la aplicacion 
   - Ir hasta la carpeta frontend/dam donde se encunetra el archivo docker-compose.yml
   - Correr docker compose up
4. Navega hasta la carpeta del repositorio: frontend/dam
5. Instalar las dependencias que van a estar en node_modules mediante el comando en la terminal npm install

6. El proyecto se escuentra en la rama PROYECTO-TPF

## Uso
Una aplicación en ionic que permite:
- Dar un listado de dispositivos
- Al entrar a algún dispositivo, brindar el último valor de medición por sensor en el gráfico
- Tener la opción dentro de la vista del dispositivo con sus medición, de poder abrir la electroválvula que le corresponde.
- Abrir y cerrar las electrovalvulas. Se inserta un registro en la tabla Log_Riegos y Mediciones
- Tener otra opción que permita ver todas las mediciones de ese sensor como una tabla.
- Poder consultar el log de los riegos para una electroválvula

## Base de Datos
<img src="https://github.com/macolb/DAM-TPF/assets/9436321/064cc7ca-754f-4ec1-9af4-9a77699a2361" width="700" align="center">


- Tabla Mediciones
  - Tabla en donde se registra fecha y hora de la medición junto con el id perteneciente al dispositivo que registró esa medición
- Tabla Dispositivos
  - Representa a un sensor de humedad . Esta tabla va a tener el identificador único junto con un nombre y un lugar en donde esté ubicado
- Tabla Electroválvula
  - Representa a la válvula que permite el paso o no del flujo de agua. Esta tabla contiene el identificador propio junto con el identificador del dispositivo al cual está conectado.
- Tabla Log_Riegos
  - Representa al histórico de aperturas/cieres de electroválvula, por cada vezque se abra o se cierre una electroválvula, se insertará un registro en esta tabla.

## Imagenes

<img src="https://github.com/macolb/DAM-TPF/assets/9436321/6bc61e2e-18fa-47b0-b0f3-6572a5a11bdd" width="600" align="center">

<img src="https://github.com/macolb/DAM-TPF/assets/9436321/58c155c0-6a7c-446a-8694-610c6cb9f398" width="600" align="center">

<img src="https://github.com/macolb/DAM-TPF/assets/9436321/f4c14a22-f626-4c97-95b7-b37d55891f8b" width="600" align="center">

<img src="https://github.com/macolb/DAM-TPF/assets/9436321/fa52a5db-5bf1-4d74-b494-dbb3fcdb5d20" width="600" align="center">





