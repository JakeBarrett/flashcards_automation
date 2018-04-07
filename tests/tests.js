const selectors = require('../source/selectors')
const functions = require('../source/functions')
const data = require('../source/data')


module.exports = {

    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager-v2/build/index.html')
    },

        after: browser => {

        browser.end()
        },


"JAKE-56 Employee List" : browser => {functions.employeeListFunction(browser,selectors,data.page)},

"JAKE-57 Add Employee" : browser => {functions.addEmployeeFunction(browser,selectors,data.Employee1)},

"JAKE-62 Delete Button/Delete Employee" : browser => {functions.deleteEmployeeFunction(browser,selectors,data)},

"JAKE-58 Edit Employee Valid Data" : browser => {functions.editEmployeeValidFunction(browser,selectors,data.Employee2)},

"JAKE-59 Edit Employee Invalid Data" : browser => {functions.editEmployeeInvalidFunction(browser,selectors,data)},

"JAKE-60 Save Button" : browser => { functions.saveButtonFunction(browser,selectors,data)},

"JAKE-61 Cancel Button" : browser => {functions.cancelButtonFunction(browser,selectors,data)},






}