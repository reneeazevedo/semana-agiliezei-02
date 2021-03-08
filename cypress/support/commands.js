// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', ()=>{
    cy.setCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'L%2BJQvWetG3%2BEW%2BGgWmgsK4WJsfw80VzYSerb0HJvIMO1R4o8GnEMoCkAyLcAG6b2sVVf32dMcs8qVU8swh205OscY2WcMJJ2vCoD5lSfSY%2BMsjAHkAv%2BQRbBLQN7XyaKBcsH7sbAFL0DhxCtZX9RhmsUgryV8EQVqBt6pW3L31D1f%2FpfwZ16QnxZUxMzJlhBgYtAB8INJmnCBYuSo8sbTfTthuQWb8XaUrM8RYZXmWTaYd9kzkc2dROaQ1cDXOq8WEdHe55Eqw29CogDDHrkQDB1cD5yyCp2zlLrGJebIm5AUCRhVpEJjzGV6niJGi1qwLdsWVBqM4vaXfzqtJCg6Jat77kRIhha1sd0bpilbYyiBOcAg%2BNYvD5CwzDQG6MIfzctZphT36vkrWumLjSmMT8YwSMRrnQiHoHIwqttOB5ONFiqiw6zh16RCcbcUFSv000336')

})
