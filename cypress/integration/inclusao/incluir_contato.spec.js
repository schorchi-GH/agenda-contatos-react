describe('Testes de Inclusão de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('deve permitir a inclusão de um novo contato', () => {
      // Preencha os campos do formulário. Use seletores baseados em atributos como nome ou placeholder, se disponíveis.
      cy.get('input').first().type('Ótimo Exercício');
      cy.get('input[type="email"]').type('media@100porcento.com');
      cy.get('input[type="tel"]').type('11989118110');
  
      // Envie o formulário de adição de contato
      cy.get('button[class="adicionar"]').click();
  
      // Verifique se o novo contato foi adicionado. Esta é uma asserção simples.
      cy.contains('Ótimo Exercício').should('be.visible');
      cy.contains('media@100porcento.com').should('be.visible');
      cy.contains('11989118110').should('be.visible');
    });
  });
  