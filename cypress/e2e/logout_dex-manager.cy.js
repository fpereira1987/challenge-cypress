// Importamos los Page Objects
import DashboardPage from "../support/pages/DashboardPage";
import LoginPage from "../support/pages/LoginPage";

// Definimos el suite de pruebas para el Logout
describe("Dex Manager - Logout", () => {

    // Antes de cada test, nos logueamos y navegamos al dashboard
    beforeEach(() => {
        cy.login();
        cy.visit("/DexFrontEnd/#!/dashboard");
    });

    // Caso de prueba: validar logout exitoso
    it("Should logout and return to login screen", () => {

        // Hacemos click en el header profile picture
        DashboardPage.clickProfilePicture();

        // Hacemos click en Cerrar sesión
        DashboardPage.clickLogout();

        // Validamos que la URL cambie al hash del login
        cy.location("hash", { timeout: 15000 })
            .should("eq", "#!/login");

        // Validamos que el botón de login sea visible usando su Page Object
        LoginPage.elements.loginButton()
            .should("be.visible");

    });

});