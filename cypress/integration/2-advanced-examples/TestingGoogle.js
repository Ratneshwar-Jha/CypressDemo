/// <reference types="Cypress"/>
describe('My First Test Suit',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://qa1.myhcl.com/smartrecruit_CBT");
//cy.visit("https://www.google.com");

cy.get('#EmployeeCode').type("40162201")
cy.get('#Password').type("123")
cy.get('b').click()


cy.get('#SubmitButton').click()
    })
})