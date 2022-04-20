
/// <reference types="Cypress"/>
describe('My First Test Suit',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//cy.get('#checkBoxOption1').click()

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//Alert verification 
cy.on('window:alert',(str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//Confirm Alert verification

cy.on('window:confirm',(str)=>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
cy.get('#opentab').invoke('removeAttr','target').click()

//Validating the current URL
cy.url().should('include', 'https://www.rahulshettyacademy.com/')
cy.go('back')

//Validating the current URL
cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/')
})



})




