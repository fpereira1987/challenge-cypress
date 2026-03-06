// ***********************************************
// Comandos personalizados de Cypress
//
// Este archivo permite definir comandos reutilizables
// que pueden ser utilizados en múltiples tests.
// ***********************************************

// Importamos el Page Object del Login para reutilizar
// los selectores y la lógica ya definida en el POM
import LoginPage from "./pages/LoginPage";

// Comando de Login
// Este comando realiza la autenticación utilizando
// credenciales almacenadas en las variables de entorno de Cypress.
// Se utiliza cy.session() para guardar la sesión y evitar
// repetir el login en cada test.

Cypress.Commands.add("login", () => {

    const user = Cypress.env("USER");
    const password = Cypress.env("PASSWORD");

    cy.session([user, password], () => {

        // Navegar a la pantalla de login utilizando el método del Page Object
        LoginPage.visit();

        // Ejecutar el flujo de login reutilizando el método del Page Object
        LoginPage.login(user, password);

        // Validar login exitoso verificando que se cargue el dashboard
        cy.location("hash", { timeout: 15000 })
            .should("eq", "#!/dashboard");

    });

});