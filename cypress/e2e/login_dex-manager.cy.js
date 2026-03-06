// Importamos el Page Object del Login para reutilizar la lógica de la pantalla
import LoginPage from "../support/pages/LoginPage";

// Suite de pruebas del login
describe("Dex Manager - Login", () => {

  // Antes de cada test abrimos la pantalla de login
  beforeEach(() => {
    LoginPage.visit();
  });

  // Caso: validar login exitoso
  it("Should login and land on dashboard", () => {

    // Credenciales obtenidas desde variables de entorno
    const user = Cypress.env("USER");
    const password = Cypress.env("PASSWORD");

    // Ejecuta el flujo de login definido en el Page Object
    LoginPage.login(user, password);

    // Validamos redirección al dashboard
    cy.location("hash", { timeout: 15000 })
      .should("eq", "#!/dashboard");

    // Validamos que el título sea "Dashboard"
    LoginPage.elements.pageTitle()
      .should("be.visible")
      .and("have.text", "Dashboard");

  });

});