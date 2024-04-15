describe('Testes de Remoção de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('deve permitir a remoção de um contato', () => {
      cy.get('button.delete').first().click();
  

      cy.contains('Felice Lacerda').should('not.exist');
    });
  });
  