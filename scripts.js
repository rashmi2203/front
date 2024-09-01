const msalConfig = {
    auth: {
        clientId: '8d2a547f-27d9-46ee-8a09-7f9f7e951dd3', // Your Azure AD app's client ID
        authority: 'https://login.microsoftonline.com/64465d85-01e4-4334-957c-b6acd6361647', // Your tenant ID
        redirectUri: 'https://front-akeqf7f9ahg9drd7.eastasia-01.azurewebsites.net', // Your app service URL
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

document.getElementById('loginButton').addEventListener('click', () => {
    msalInstance.loginPopup({
        scopes: ["user.read"]
    }).then(response => {
        console.log('Logged in successfully:', response);
        document.getElementById('loginStatus').textContent = 'Logged in successfully';
    }).catch(error => {
        console.error('Login failed:', error);
        document.getElementById('loginStatus').textContent = 'Login failed';
    });
});
