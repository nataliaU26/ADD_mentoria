// src/authConfig.js
//"https://login.microsoftonline.com/8442b655-1fb3-4e98-9426-ac5282d6af51/oauth2/v2.0/authorize"

export const msalConfig = {
    auth: {
        clientId: "73f2ba71-7a26-4e70-ad04-85d9d997686f",
        authority: "https://B2CFLOWUSER.b2clogin.com/B2CFLOWUSER.onmicrosoft.com/B2C_1_registerLWT/oauth2/v2.0/authorize",
        redirectUri: "https://delightful-sand-0c067f410.4.azurestaticapps.net"
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
 };

 //{}