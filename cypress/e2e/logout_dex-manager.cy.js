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
        cy.get(".header-profile-picture")
            .should("be.visible")
            .click();

        // Hacemos click en Cerrar sesión
        cy.get("#accountMenu")
            .contains("paper-icon-item", "Cerrar sesión")
            .should("be.visible")
            .click();

        // Validamos que la URL cambie al hash del login
        cy.location("hash", { timeout: 15000 })
            .should("eq", "#!/login");

        // Validamos que el botón de login sea visible
        cy.get(".accept-btn.login-btn")
            .first()
            .should("be.visible");

    });

});