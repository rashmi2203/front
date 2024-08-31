const msalConfig = {
    auth: {
        clientId: '<your-client-id>', // Replace with your Azure AD app's client ID
        authority: 'https://login.microsoftonline.com/<your-tenant-id>', // Replace with your tenant ID
        redirectUri: 'https://<your-app-service-name>.azurewebsites.net', // Replace with your app service URL
    }
};

const msalInstance = new Msal.UserAgentApplication(msalConfig);

document.getElementById('loginButton').addEventListener('click', () => {
    msalInstance.loginPopup({ scopes: ["user.read"] })
        .then(response => {
            console.log('Logged in successfully:', response);
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
});

document.getElementById('alertButton').addEventListener('click', () => {
    alert('Button clicked!');
});
