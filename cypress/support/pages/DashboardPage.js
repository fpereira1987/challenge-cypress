// Definición de la clase DashboardPage siguiendo el patrón Page Object Model
class DashboardPage {

    // Selectores centralizados
    elements = {
        // Elementos de la barra superior (Header)
        profilePicture: () => cy.get('.header-profile-picture').should('be.visible'),
        accountMenu: () => cy.get('#accountMenu').should('be.visible'),
        logoutMenuItem: () => cy.get('#accountMenu').contains('paper-icon-item', 'Cerrar sesión').should('be.visible'),

        // Elementos del menú de navegación (Sidebar)
        navMenuContent: () => cy.contains('.nav-menu-trigger', 'CONTENIDO'),
        mediaLibraryMenuItem: () => cy.contains('paper-icon-item', 'Librería de Medias')
    }

    // Navega directamente a la pantalla de dashboard
    visit() {
        cy.visit('/DexFrontEnd/#!/dashboard');
    }

    // Acciones principales del Dashboard
    // Ejecuta el click en el perfil de usuario del header
    clickProfilePicture() {
        this.elements.profilePicture().click();
    }

    // Ejecuta el click en "Cerrar sesión" en el menú de cuenta
    clickLogout() {
        this.elements.logoutMenuItem().click();
    }

    // Navega a la sección de Librería de Medias desde el menú lateral
    navigateToMediaLibrary() {
        this.elements.navMenuContent()
            .should("be.visible")
            .click();

        this.elements.mediaLibraryMenuItem()
            .should("be.visible")
            .click();
    }
}

export default new DashboardPage();
