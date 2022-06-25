### BACKEND

    Backend creado usando nodejs, express y postgres
    para proyecto de fin del curso de Desarrollo de Software de DUOCUC

### CORRER EL PROYECTO

    1. Clonar el proyecto usando git
    2. El proyecto requiere que la maquina reconozca nodejs y npm.
    instaladores para esos programas se encuentran en el siguiente [link](https://nodejs.org/es/)
    4. Tambien se necesita o una base de datos [PostgreSQL](https://www.postgresql.org/download/) localmente o datos de acceso de una maquina remota con la base de datos corriendo
    5. Para configuracion basica de cada ambiente es necesario crear un archivo `.env` en la raiz del proyecto, este archivo contiene las configuraciones iniciales especificas del ambiente.
        ..* los valores de incluidos en el archivo .env son los siguiente
            ..1. PORT //puerto donde correra el backend, default 3001
            ..2. SECRET //llave para encriptar las passwords de los usuarios
            ..3. DBUSER // usuario para acceder a la base de datos
            ..4. DBPASS //password para acceder a la base de datos
            ..5. DBHOST //host donde se encuentra la base de datos
            ..6. DBPORT //port donde corre la base de datos
            ..7. DBNAME //nombre en especifico de la base de datos
    6. Para que se instalen las dependencias del proyecto ejecutar el comando `npm install` solo hace falta correrlo una vez
    7. Para ejecutar el proyecto en modo produccion corre `npm start` en una terminal
    8. Para ejecutar el proyecto en modo desarrollo corre `npm run dev`. En el modo de desarrollo el proyecto se reinicia automaticamente despues de cada cambio
