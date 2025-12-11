function generateRandomRobloSecurity() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const codeLength = 10;
    let robloSecurity = "";
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        robloSecurity += characters.charAt(randomIndex);
    }
    return robloSecurity;
}

function generateRandomRobloSecurityForAccount() {
    const accounts = ["user1", "user2", "user3", "user4", "user5"];
    const randomAccountIndex = Math.floor(Math.random() * accounts.length);
    const randomAccount = accounts[randomAccountIndex];
    const robloSecurity = generateRandomRobloSecurity();
    return `RobloSecurity: ${robloSecurity}, Account: ${randomAccount}`;
}

// Button click
document.getElementById("generateBtn").addEventListener("click", () => {
    const result = generateRandomRobloSecurityForAccount();
    document.getElementById("output").textContent = result;
});
