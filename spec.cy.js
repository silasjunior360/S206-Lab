describe("Teste da criaçao, resgistro de login com sucesso",()=>{
  it("Teste de criaçao de usuario com sucesso",()=>{
      cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('.btn-link').click()
      cy.get('#firstName').type('Silas')
      cy.get('#Text1').type("Junior")
      cy.get('#username').type("Silas.junior")
      cy.get('#password').type("123456")
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text","Registration successful")
  })
  it("Teste de criaçao de usuario com falha",()=>{
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Silas')
    cy.get('#Text1').type("Junior")
    cy.get('#username').type("Silas.junior")
    cy.get('.btn-primary').should("be.disabled")
    
})
  it("Teste de login com sucesso",()=>{
    let infos =criarUsers()
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])
    cy.get('.ng-binding > a').click()
  })
  it("Teste de login com falha",()=>{
    let infos=criarUsers()
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[0])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text","Username or password is incorrect")
  })

})
function criarUsers(){
  let hora = new Date().getHours().toString()
  let minuto =new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto +seg + "ID"
  let Senha = hora + minuto +seg + "Senha"
  let infos =[ID,Senha]
  cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('.btn-link').click()
      cy.get('#firstName').type(ID)
      cy.get('#Text1').type(ID)
      cy.get('#username').type(ID)
      cy.get('#password').type(Senha)
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text","Registration successful")
      return infos
}

  
