const selectors = require('..//selectors')
const functions = require('..//functions')


module.exports = {

    beforeEach : browser => {
        browser.url('https://cards-beta.devclock.com/')
    },

        after: browser => {

        browser.end()
        },


    'App Opens Test' : browser => {
        browser.assert.elementPresent("body")

    },


// If you run JAKE-39, you will need to change the login.emailAddress selector to a different address
   
    /*
    'JAKE-39 CREATE AN ACCOUNT' : browser => {
        functions.createAccount(browser,selectors.login)

    }, 
    */

// User logs in
     'JAKE-40 LOGIN' : browser => {
        functions.loginFunction(browser,selectors.login)

    }, 
  
// User creates a new deck
    'JAKE-41 CREATE A NEW DECK' : browser => {
      functions.createANewDeckFunction(browser,selectors.createANewDeck)

    },

 // User adds cards to the deck
    'JAKE-42 ADDING CARDS TO A DECK' : browser => {
        functions.addCardsToDeck(browser,selectors.addingNewCardsToADeck)
    },

// User studies deck    
    'JAKE-44 STUDY FEATURE' : browser=> {
        functions.studyFeature(browser,selectors.study)
        
    },

// User deletes cards from the deck    
    'JAKE-43 DELETING CARDS FROM DECK' : browser => {
        functions.deleteCardsFromDeck(browser,selectors.deleteCards)

    },

// User deletes the entire deck
    'JAKE-53 DELETE DECK WORKAROUND' : browser => {
        functions.deleteDeckTrick(browser,selectors.deleteDeck)

    },


}