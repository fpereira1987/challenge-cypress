// Importamos el Page Object del Login para reutilizar la lógica de la pantalla
import LoginPage from "../support/pages/LoginPage";

// Suite de pruebas de validaciones del login
describe("Dex Manager - Login validations", () => {

    // Antes de cada test abrimos la pantalla de login usando el Page Object
    beforeEach(() => {
        LoginPage.visit();
    });

    // Caso: intentar loguear sin completar usuario ni contraseña
    it("Should show validation when fields are empty", () => {

        // Hacemos click en el botón de login sin completar campos
        LoginPage.elements.loginButton()
            .click();

        // Validamos que el login NO avanza al dashboard
        cy.location("hash")
            .should("eq", "#!/login");

    });

    // Caso: intentar loguear con credenciales inválidas
    it("Should show error with invalid credentials", () => {

        // Usamos el método login del Page Object con credenciales falsas
        LoginPage.login("usuario_fake", "password_fake");

        // Validamos que aparezca el mensaje de error del sistema
        LoginPage.elements.errorMessage()
            .should("be.visible");

    });

});