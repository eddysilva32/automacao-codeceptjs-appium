Feature('students');

const { I } = inject()
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Add student with success', ({ login_page, home_page }) => {

    const myCode = code.getCode()
    const myName = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(myCode, myName)
    home_page.searchStudent(myName, myCode)
});