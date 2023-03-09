Feature('login');

const { I, login_page } = inject()

BeforeSuite(() => {
    console.log('Before Suite')
});

Before(() => {
    console.log('Before')
});

AfterSuite(() => {
    console.log('After Suite')
});

After(() => {
    console.log('After')
});

Scenario('login with success',  ({ home_page }) => {

   /*  I.runOnAndroid(() => {
        console.log('Estou no Android!')
    }), */

    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
}).tag('@loginSuccess');

Scenario('login with error',  ({ login_page }) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
}).tag('@loginError');