// Definición de la clase LoginPage siguiendo el patrón Page Object Model
class LoginPage {

    // Selectores centralizados para facilitar el mantenimiento
    elements = {
        usernameInput: () => cy.get('input[autocomplete="on"]').first(), // Campo de usuario
        passwordInput: () => cy.get('input[type="password"]').first(),   // Campo de contraseña
        loginButton: () => cy.get('.accept-btn.login-btn').first(),      // Botón de login
        errorMessage: () => cy.contains("User or password do not match"), // Mensaje de error de autenticación
        pageTitle: () => cy.get('#pageTitle') // Título del Dashboard
    }

    // Navega directamente a la pantalla de login del sistema
    visit() {
        cy.visit('/DexFrontEnd/#!/login');
    }

    // Escribe el usuario en el campo correspondiente
    typeUsername(username) {
        if (username) {
            this.elements.usernameInput()
                .should("be.visible")
                .clear()
                .type(username);
        }
    }

    // Escribe la contraseña en el campo correspondiente
    typePassword(password) {
        if (password) {
            this.elements.passwordInput()
                .should("be.visible")
                .clear()
                .type(password);
        }
    }

    // Ejecuta el click en el botón de login
    clickLogin() {
        this.elements.loginButton()
            .should("be.visible")
            .click();
    }

    // Método compuesto que ejecuta el flujo completo de login
    // Se usa para simplificar los tests evitando repetir pasos
    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

}

export default new LoginPage();