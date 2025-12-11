// Lengte van de code zoals jouw voorbeeld (~550+ tekens)
const CODE_LENGTH = 600;

// Genereer een lange RobloSecurity code
function generateRandomRobloSecurity() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._|:";
    let robloSecurity = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_";
    while (robloSecurity.length < CODE_LENGTH) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        robloSecurity += characters.charAt(randomIndex);
    }
    return robloSecurity;
}

// Genereer code voor een random account
function generateRandomRobloSecurityForAccount() {
    const accounts = ["user1", "user2", "user3", "user4", "user5"];
    const randomAccountIndex = Math.floor(Math.random() * accounts.length);
    const randomAccount = accounts[randomAccountIndex];
    const robloSecurity = generateRandomRobloSecurity();
    return `RobloSecurity: ${robloSecurity}\nAccount: ${randomAccount}`;
}

// Button click events
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
