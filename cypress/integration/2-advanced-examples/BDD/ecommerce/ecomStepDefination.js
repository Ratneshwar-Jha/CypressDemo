import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 

Given('Go to google page',function()

{
    cy.visit("https://www.google.com/");
})

When('Go to flifcart page',function()

{
    cy.get('.gLFyf').type("Flifcart")
})

And('Go to Amazaon page',function()

{
    cy.get('.gLFyf').type("Amazon")
})
Then('Go to yatra page',function()

{
    cy.get('.gLFyf').clear().type("Yatra").click()
})