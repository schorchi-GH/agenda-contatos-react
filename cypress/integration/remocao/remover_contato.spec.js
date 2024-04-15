describe('Testes de Remoção de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('deve permitir a remoção de um contato', () => {
      // Encontrar e clicar no botão de exclusão para qualquer contato
      cy.get('button.delete').first().click();
  
      // Verificar se o contato foi removido com sucesso
      cy.contains('Felice Lacerda').should('not.exist');
    });
  });
  