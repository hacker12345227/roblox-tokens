// Template waarschuwingsbericht
const TEMPLATE = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_";

// Token lengte (ongeveer zoals voorbeeld ±50 tekens)
const TOKEN_MIN_LENGTH = 550;
const TOKEN_MAX_LENGTH = 650;

// Mogelijke tekens voor het token
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._|:";

// Genereer een random token
function generateRandomToken() {
    const length = Math.floor(Math.random() * (TOKEN_MAX_LENGTH - TOKEN_MIN_LENGTH + 1)) + TOKEN_MIN_LENGTH;
    let token = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        token += CHARACTERS[randomIndex];
    }
    return token;
}

// Genereer RobloSecurity code voor een random account
function generateRandomRobloSecurityForAccount() {
    const accounts = ["user1", "user2", "user3", "user4", "user5"];
    const randomAccountIndex = Math.floor(Math.random() * accounts.length);
    const randomAccount = accounts[randomAccountIndex];
    const robloSecurity = TEMPLATE + generateRandomToken();
    return `RobloSecurity: ${robloSecurity}\nAccount: ${randomAccount}`;
}

// Button events
document.getElementById("generateBtn").addEventListener("click", () => {
    const result = generateRandomRobloSecurityForAccount();
    document.getElementById("output").textContent = result;
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("output").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Code gekopieerd naar klembord!");
    });
});
