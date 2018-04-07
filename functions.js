const selectors = require('./selectors')
/**
 * Function to login
 * @param {*} browser browser
 * @param {*} selectors selectors.login
 */
let loginFunction = (browser,selectors) => {
    browser
        .setValue(selectors.emailInput,selectors.emailAddress)
        .setValue(selectors.passwordInput,selectors.password)
        .click(selectors.loginButton)
        .pause(3000)
        .verify.containsText(selectors.header,'Cards')

}
/**
 * function to create a new deck
 * @param {*} browser browser
 * @param {*} selectors selectors.createANewDeck
 */
let createANewDeckFunction =(browser,selectors) => {
    browser
        .pause(2000)
        .verify.containsText(selectors.header,'Cards')
        .click(selectors.decks)
        .pause(2000)
        .click(selectors.addDeckButton)
        .pause(2000)
        .verify.containsText(selectors.header,'Decks')
        .setValue(selectors.nameDeckInput,'Test Deck')
        .click(selectors.saveDeckButton)
        .pause(2000)
        .verify.containsText(selectors.firstDeckName,'Test Deck')

}
/**
 * Function to add cards to a deck
 * @param {*} browser browser
 * @param {*} selectors selectors.addingNewCardsToADeck
 */
let addCardsToDeck =(browser,selectors) => {
    browser
        .pause(2000)
        .verify.containsText(selectors.header,'Cards')
        .click(selectors.decks)
        .pause(2000)
        .click(selectors.firstDeckName)
        .pause(3000)
        .click(selectors.addCardButton)
        .pause(2000)
        .setValue(selectors.frontCardInput,'Front of Card')
        .setValue(selectors.backCardInput,'Back of Card')
        .click(selectors.saveNewCard)
        .pause(2000)
        .verify.containsText(selectors.frontOfCard,'Front of Card')
        .verify.containsText(selectors.backOfCard,'Back of Card')
}
/**
 * Function to Create an account
 * @param {*} browser browser
 * @param {*} selectors selectors.login
 */
let createAccount =(browser,selectors) => {
    browser
    .click(selectors.selectSignUp)
    .setValue(selectors.emailInput,selectors.emailAddress)
    .setValue(selectors.passwordInput,selectors.password)
    .setValue(selectors.confirmPasswordInput,selectors.password)
    .click(selectors.signUpButton)
    .pause(5000)
    .verify.containsText(selectors.header,'Terms of Use')
    .click(selectors.agreeButton)
    .pause(5000)
    .verify.containsText(selectors.header,'Welcome')
    .click(selectors.getStartedButton)
    .pause(5000)
    .verify.containsText(selectors.header,'Cards')

}
/**
 * This function tests the study feature
 * @param {*} browser browser
 * @param {*} selectors selectors.study
 */
let studyFeature =(browser,selectors) => {
    browser
    .pause(2000)
    .verify.containsText(selectors.header,'Cards')
    .click(selectors.decks)
    .pause(2000)
    .click(selectors.studyButton)
    .pause(2000)
    .click(selectors.selectDeck)
    .pause(2000)
    .click(selectors.studyButton2)
    .pause(2000)
    .click(selectors.saveAndBegin)
    .pause(2000)
    .verify.containsText(selectors.header,'Study')
    .click(selectors.flip)
    .pause(2000)
    .verify.containsText(selectors.flipTop, 'FLIP')
    .click(selectors.checkMark)
    .pause(2000)
    .click(selectors.flip)
    .pause(2000)
    .click(selectors.xButton)
    .pause(2000)
    .verify.containsText(selectors.progress,'1')
    .pause(2000)
        

}

/**
 * 
 * @param {*} browser browser 
 * @param {*} selectors selectors.deleteCards
 */
let deleteCardsFromDeck =(browser,selectors) => {
    browser
    .pause(2000)
    .verify.containsText(selectors.header,'Cards')
    .click(selectors.decks)
    .pause(2000)
    .click(selectors.firstDeckName)
    .pause(2000)
    .click(selectors.editCard)
    .pause(2000)
    .click(selectors.deleteCard)
    .pause(2000)
    .verify.elementNotPresent(selectors.frontOfCard)
    .pause(2000)
}
/**
 * This function will delete a deck using a workaround method.
 * @param {*} browser browser
 * @param {*} selectors selectors.deleteDeck
 */
let deleteDeckTrick =(browser,selectors) => {
    browser
    .pause(2000)
    .verify.containsText(selectors.header,'Cards')
    .click(selectors.decks)
    .pause(2000)
    .click(selectors.editDeck)
    .pause(2000)
    .click(selectors.deckTrashCan)
    .pause(2000)
    .click(selectors.deckDeleteButton)
    .pause(2000)
    .click(selectors.deckDeleteYes)
    .pause(2000)
    .acceptAlert()
    .pause(2000)
    .refresh()
    .pause(2000)
    .verify.containsText(selectors.noDecks,'No decks')
    .pause(2000)
    }


//note to be saved

module.exports = {

    loginFunction : loginFunction,
    createANewDeckFunction : createANewDeckFunction,
    addCardsToDeck : addCardsToDeck,
    createAccount : createAccount,
    studyFeature : studyFeature,
    deleteCardsFromDeck : deleteCardsFromDeck,
    deleteDeckTrick : deleteDeckTrick    

}