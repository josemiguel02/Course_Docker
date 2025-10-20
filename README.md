# Volumenes y Redes

Descargar imagen de MariaDB:

```sh
docker pull mariadb:jammy
```

Crear un contenedor con la imagen de MariaDB:

```sh
docker container run \
-dp 3306:3306 \
--name world-db \
--env MARIADB_USER=example-user \
--env MARIADB_PASSWORD=user-password \
--env MARIADB_ROOT_PASSWORD=root-secret-password \
--env MARIADB_DATABASE=world-db \
mariadb:jammy
```

Crear un Volumen para persistir data de MariaDB:

```sh
docker volume create world-db
```

Crear un contenedor con la imagen de MariaDB con un Volumen creado:

```sh
docker container run \
-dp 3306:3306 \
--name world-db \
--env MARIADB_USER=example-user \
--env MARIADB_PASSWORD=user-password \
--env MARIADB_ROOT_PASSWORD=root-secret-password \
--env MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
mariadb:jammy
```

Descargar imagen de PhpMyAdmin:

```sh
docker pull phpmyadmin:5.2.0-apache
```

Crear un contenedor con la imagen de PhpMyAdmin:

```sh
docker container run \
-dp 8080:80 \
--name phpmyadmin \
-e PMA_ARBITRARY=1 \
-e PMA_HOST=world-db \
phpmyadmin:5.2.0-apache
```

Crear una Red para que ambos contenedores se comuniquen entre si:

```sh
docker network create world-app
```

Conectar ambos contenedores a la misma Red:

```sh
docker network connect world-app phpmyadmin
docker network connect world-app world-db
```

Asignar la Red desde la inicializacion de los contenedores:

```sh
docker container run \
-dp 3306:3306 \
--name world-db \
--env MARIADB_USER=example-user \
--env MARIADB_PASSWORD=user-password \
--env MARIADB_ROOT_PASSWORD=root-secret-password \
--env MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
--network world-app \
mariadb:jammy
```

```sh
docker container run \
-dp 8080:80 \
--name phpmyadmin \
-e PMA_ARBITRARY=1 \
-e PMA_HOST=world-db \
--network world-app \
phpmyadmin:5.2.0-apache
```

## Bind Volumes
App de Node con un Bind Volume:

```sh
docker container run \
--name nest-app \
-w /app \
-p 3000:3000 \
-v "$(pwd)":/app \
node:16-alpine3.16 \
sh -c "npm install && npm run start:dev"
```

[Mas sobre Redes con Docker](https://docs.docker.com/engine/network/tutorials/standalone/)
