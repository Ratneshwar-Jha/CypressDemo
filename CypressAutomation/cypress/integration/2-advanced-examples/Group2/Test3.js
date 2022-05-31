///<reference types="Cypress"/>

describe('My First Test Suit',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//cy.get('#checkBoxOption1').click()
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//check all checkbox with common attribute
//cy.get("input[type='checkbox']").check()
//check specific checkbox based on its value attribute
cy.get("input[type='checkbox']").check(['option2','option3'])

//Static Drop downs
cy.get('select').select('option2').should('have.value','option2')

//Dyanamic DropDowns
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($e1,index,$list) => {
   
    if($e1.text()==="India")
    {
        $e1.click()
    }
})

cy.get('#autocomplete').should('have.value','India')
//Visbsile not visisble
cy.get('#displayed-text').should('be.visible')  
cy.get('#hide-textbox').click() 
cy.get('#displayed-text').should('not.be.visible')  
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')  

//Radio button
cy.get('input[value="radio2"]').click().should('be.checked')   






})



})




