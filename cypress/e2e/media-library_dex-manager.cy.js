// Importamos el Page Object del Dashboard
import DashboardPage from "../support/pages/DashboardPage";

// Suite de pruebas de navegación a Media Library
describe("Dex Manager - Media Library", () => {

    // Antes de cada test abrimos la pantalla de login usando el Page Object
    beforeEach(() => {
        cy.login();
        cy.visit("/DexFrontEnd/#!/dashboard");
    })

    // Caso: navegar hacia la sección Media Library
    it("Should navigate to Media Library", () => {

        // Navegamos usando el método del Page Object (elimina selectores y timeouts locales)
        DashboardPage.navigateToMediaLibrary();

        // Validamos que la URL cambie a la sección de media library
        cy.location("hash", { timeout: 15000 })
            .should("eq", "#!/media");

    });

});