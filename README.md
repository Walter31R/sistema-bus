# 🚍 Sistema de Gestión de Buses

Aplicación full stack desarrollada con **Spring Boot y React**, que permite gestionar buses mediante una API REST con paginación.

---

# 🖥️ Frontend (React)

Interfaz que consume la API para mostrar la lista de buses y la busqueda por ID.

📸 Vista principal:<img width="1118" height="448" alt="react_1" src="https://github.com/user-attachments/assets/61e71980-6c6d-474b-80ce-bec54018a8b9" />

📸Busqueda por ID: 

<img width="819" height="450" alt="react_3" src="https://github.com/user-attachments/assets/c613ca53-4737-485f-b5b1-fed5343f2ccc" />

---

# 📘 Documentación de API (Swagger)

La API cuenta con documentación interactiva para probar los endpoints.
📸 Swagger UI:

<img width="545" height="486" alt="swagger_2" src="https://github.com/user-attachments/assets/de6c969c-70c2-4043-8d01-af9c001fd48d" />


<img width="482" height="253" alt="swagger_4" src="https://github.com/user-attachments/assets/15494bea-d7a3-4ec0-908a-badf9c5f82b5" />

---

# 🔍 Pruebas de API (Postman)

Se realizaron pruebas de los endpoints utilizando Postman.

📸 Ejemplo de request:
GET /bus?page=1&size=5


<img width="583" height="450" alt="postman_1" src="https://github.com/user-attachments/assets/96060cea-d1e6-450d-9460-d84c41cd03d7" />

---
# ⚙️ Tecnologías utilizadas

- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- React
- Swagger
- Postman

---

# 🧩 Funcionalidades

- Listado de buses con paginación
- Consulta de bus por ID
- Relación entre buses y marcas
- Manejo de errores

---

# 🔗 Endpoints principales

- `GET /bus` → Lista de buses (paginado)
- `GET /bus/{id}` → Obtener bus por ID

---

# 🗄️ Base de datos

Base de datos relacional en MySQL con las siguientes tablas:

- bus
- marca
  
📸Ejemplo de Realación: Muchos buses pueden pertenecer a una misma marca.

<img width="446" height="286" alt="bd" src="https://github.com/user-attachments/assets/bc43f1b1-84e6-43e1-a57b-52eaad005061" />

---

# 🚀 Cómo ejecutar el proyecto

## 🔧 Backend

1. Configurar MySQL
2. Crear base de datos (ej: `db_civa`)
3. Configurar credenciales en `application.properties`
4. Ejecutar Spring Boot
   
---

## 💻 Frontend

1. Ir a la carpeta del frontend: Frontend-Civa
2. Instalar Dependencias: npm install
3. Correr el proyecto: npm run dev
   
---

# 📁 Estructura del proyecto

- Backend-Civa/
- Frontend-Civa/
  
---

# 📌 Estado del proyecto

- ✔ API REST funcional
- ✔ Paginación implementada
- ✔ Integración con React
