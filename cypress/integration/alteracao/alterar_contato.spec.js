describe('Testes de Alteração de Contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('deve permitir a alteração do contato "Felice Lacerda"', () => {
    cy.contains('Felice Lacerda').closest('div[class*="contato"]').within(() => {
      cy.get('button.edit').click();
    });

    cy.wait(2000);

    cy.get('input').first().clear().type('Parabéns Georges, nota 100!');

    cy.get('input[type="email"]').clear().type('nota100@ebac.com.br');
    cy.get('input[type="tel"]').clear().type('11987654321');

    cy.get('button[class="alterar"]').click();

    cy.contains('Parabéns Georges, nota 100!').should('be.visible');
    cy.contains('nota100@ebac.com.br').should('be.visible');
    cy.contains('11987654321').should('be.visible');
  });
});
