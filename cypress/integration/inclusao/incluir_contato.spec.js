describe('Testes de Inclusão de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('deve permitir a inclusão de um novo contato', () => {
      cy.get('input').first().type('Ótimo Exercício');
      cy.get('input[type="email"]').type('media@100porcento.com');
      cy.get('input[type="tel"]').type('11989118110');
  
      cy.get('button[class="adicionar"]').click();
  
      cy.contains('Ótimo Exercício').should('be.visible');
      cy.contains('media@100porcento.com').should('be.visible');
      cy.contains('11989118110').should('be.visible');
    });
  });
  