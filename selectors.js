module.exports = {
   
    login : {
        selectSignUp : 'label[data-bind="text: strings.signUpTab"]',
        emailInput : 'input[type="email"]',
        emailAddress : 'thisisatest303@gmail.com',
        passwordInput : 'input[placeholder="Password"]',
        confirmPasswordInput : 'input[placeholder="Confirm Password"]',
        password: 'Password',
        signUpButton : 'body > div.main > div.content > div > div.tabsContainer > div:nth-child(7) > div > button:nth-child(3)',
        loginButton : 'body > div.main > div.content > div > div.tabsContainer > div:nth-child(5) > div > button:nth-child(1)',
        header : 'label[data-bind="text: strings.title"]',
        agreeButton : 'body > div.main > div.content > div > div.bottomSection > button.primary',
        getStartedButton : 'body > div.main > div.content > div > div.grid > div > div > button'
    },

    createANewDeck : {
        header : 'label[data-bind="text: strings.title"]',
        decks : 'body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12 > label',
        addDeckButton : 'body > div.main > div.header > div > div.col-3-12.align-right > button > i',
        nameDeckInput : 'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(2) > div > textarea',
        saveDeckButton : 'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(7) > div > div > button.primary',
        firstDeckName : 'body > div.main > div.content > div > div.grid-list > div:nth-child(1) > div.col-12-12 > label'
    },

    addingNewCardsToADeck : {
        header : 'label[data-bind="text: strings.title"]',
        decks : 'body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12 > label',
        firstDeckName : 'body > div.main > div.content > div > div.grid-list > div:nth-child(1) > div.col-12-12 > label',
        addCardButton : 'body > div.main > div.header > div > div.col-3-12.align-right > button > i',
        frontCardInput : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(2) > div > textarea',
        backCardInput : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(4) > div > textarea',
        saveNewCard : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(5) > div > div > button.primary',
        frontOfCard : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(2) > div > pre',
        backOfCard : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(4) > div > pre',

    },

    study : {
        studyButton2 : 'body > div.main > div.content > div > div:nth-child(4) > div > div > button',
        studyButton : 'button[data-bind="click: clickStudy, disable: studyDisabled, text: strings.study"]',
        selectDeck : 'body > div.main > div.content > div > div.grid-list > div > div > div.grid.align-center > div.col-4.align-center > div > i',
        saveAndBegin : 'body > div.main > div.content > div > div:nth-child(2) > div > div > button.primary.study',
        flip : 'body > div.main > div.content > div > div.bottomSection > button',
        flipTop : 'body > div.main > div.header > div > div.col-3-12.align-right > button',
        checkMark: 'body > div.main > div.content > div > div.bottomSection > button.correct > i',
        xButton: 'body > div.main > div.content > div > div.bottomSection > button.incorrect > i',
        progress : 'body > div.main > div.content > div > div.topSection > div.progress > span.progress-value',
        header : 'label[data-bind="text: strings.title"]',
        decks : 'body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12 > label',

    },

    deleteCards : {
        header : 'label[data-bind="text: strings.title"]',
        decks : 'body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12 > label',
        firstDeckName : 'body > div.main > div.content > div > div.grid-list > div:nth-child(1) > div.col-12-12 > label',
        editCard : 'body > div.main > div.content > div > div.grid-list > div:nth-child(1) > div.col-4.align-right > label',
        deleteCard : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(5) > div > div > button.destructive',
        frontOfCard : 'body > div.main > div.content > div > div:nth-child(2) > div:nth-child(2) > div > pre',

    },
       
    deleteDeck : {
        header : 'label[data-bind="text: strings.title"]',
        decks : 'body > div.main > div.content > div > div > div:nth-child(1) > div.col-12-12 > label',
        editDeck : 'body > div.main > div.content > div > div.grid-list > div:nth-child(1) > div.col-4.align-right > label > i',
        deckTrashCan : 'body > div.main > div.content > div > div:nth-child(3) > div.grid.align-center > div.col-4.align-center > div > i',
        deckDeleteButton : 'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(7) > div > div > button:nth-child(3)',
        deckDeleteYes : 'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(7) > div > div > button:nth-child(4)',
        noDecks : 'label[data-bind="text: strings.noDecks"]'

    },


}