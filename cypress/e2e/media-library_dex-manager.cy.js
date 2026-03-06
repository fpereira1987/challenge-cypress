// Suite de pruebas de navegación a Media Library
describe("Dex Manager - Media Library", () => {

    // Antes de cada test abrimos la pantalla de login usando el Page Object
    beforeEach(() => {
        cy.login();
        cy.visit("/DexFrontEnd/#!/dashboard");
    })

    // Caso: navegar hacia la sección Media Library
    it("Should navigate to Media Library", () => {

        // Hacemos click en el menú CONTENIDO
        cy.contains(".nav-menu-trigger", "CONTENIDO", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Dentro del menú desplegable seleccionamos Librería de Medias
        cy.contains("paper-icon-item", "Librería de Medias", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Validamos que la URL cambie a la sección de media library
        cy.location("hash", { timeout: 15000 })
            .should("eq", "#!/media");

    });

});