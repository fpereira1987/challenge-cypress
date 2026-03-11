# Dex Manager – UI Automation Testing con Cypress

## Descripción
Este proyecto contiene pruebas automatizadas de interfaz desarrolladas con Cypress como parte de un challenge técnico.

El objetivo del proyecto es validar el comportamiento de las funcionalidades principales del sistema Dex Manager relacionadas con la gestión de contenidos multimedia.

La suite de pruebas cubre los siguientes escenarios principales:

- Autenticación de usuario
- Validación de error de login
- Logout
- Acceso a la librería de medios

## Estructura del Proyecto
Se ha organizado el código siguiendo los estándares modernos de Cypress para asegurar mantenibilidad:
```
challenge-cypress/
├── cypress/
│   ├── e2e/                      # Scripts de pruebas (Test Specs)
│   │   ├── login_dex-manager.cy.js
│   │   ├── login-error_dex-manager.cy.js
│   │   ├── logout_dex-manager.cy.js
│   │   └── media-library_dex-manager.cy.js
│   ├── support/
│   │   ├── pages/                # Page Object Model (POM)
│   │   │   ├── LoginPage.js
│   │   │   └── DashboardPage.js
│   │   ├── commands.js           # Comandos personalizados (Login Session)
│   │   └── e2e.js                # Configuración de soporte
├── cypress.config.js             # Configuración global de Cypress
├── cypress.env.json              # Variables de entorno (No trackeado en Git)
├── package.json
└── README.md

```

## Empezando

### Dependencias

Antes de ejecutar el proyecto, asegurarse de tener instalado:

* Node.js (Versión LTS recomendada)
* npm
* Google Chrome (Navegador sugerido para la ejecución)

### Instalación

1. Clonar o descargar este repositorio.
2. Navegar a la carpeta raíz del proyecto
3. Instalar las dependencias del Node.js:

```
npm install
```

## Configuración de Credenciales (IMPORTANTE)
Siguiendo los requisitos del challenge, las credenciales no están hardcodeadas en el código. Para que los tests funcionen, debe crear un archivo llamado cypress.env.json en la raíz del proyecto con el siguiente formato:

Cargar el usuario y password en las variables de entorno correspondientes

```
{
  "USER": "challengeqa",
  "PASSWORD": "xxxxxxx"
}

```
Este archivo está excluido del repositorio por razones de seguridad (ver archivo .gitignore).

### Ejecución

#### Modo Interactivo
Para ver la ejecución de las pruebas en tiempo real con el Cypress Runner:

```
npx cypress open

```
### Modo Headless (Línea de comandos)
Para ejecutar todos los tests en segundo plano y ver el reporte en la terminal:


```
npx cypress run

```

### Consideraciones Técnicas
* Page Object Model (POM): Se centralizaron los selectores y métodos de interacción en las clases `LoginPage` y `DashboardPage` para evitar duplicidad de código en múltiples tests, asegurar alta escalabilidad y facilitar cambios futuros.
* Mantenibilidad y Selectores: Se evitaron selectores frágiles y hardcodeados, priorizando la búsqueda sobre atributos estables, verificaciones de visibilidad y el uso de `.find()` para sortear con éxito los Web Components (Shadow DOM) del framework Polymer utilizados en la UI.
* Sesiones: Se utilizó cy.session() en los comandos personalizados para optimizar la velocidad de los tests, evitando realizar el flujo de login completo innecesariamente.

## Autor:

### Federico Alan Pereira

* GitHub: https://github.com/fpereira1987

### Historial de Versiones

#### 0.1

* Implementación de arquitectura base y Page Object Model
* Automatización de escenarios de Login, Logout y Navegación
* Gestión de credenciales mediante variables de entorno

## Licencia

Este proyecto fue desarrollado únicamente con fines de evaluación técnica.