// src/authConfig.js
export const msalConfig = {
    auth: {
        clientId: "7d6bbc08-42af-481b-9bce-b4a521cdfd45",
        authority: "https://login.microsoftonline.com/21ae5a36-8b25-4a5e-95b3-a1181c56061c/oauth2/v2.0/authorize",
        redirectUri: "https://proud-bush-0271aa20f.4.azurestaticapps.net"
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
 };

 //{}