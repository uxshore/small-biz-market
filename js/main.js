let logoRanNum;

logoRanNum = Math.floor(Math.random() * (5 - 1) + 1);

let desktopLogo = document.getElementById("desktoplogo");
let mobileLogo = document.getElementById("mobilelogo");


desktopLogo.setAttribute("src", "/images/icons/" + "3.png");
mobileLogo.setAttribute("src", "/images/icons/" + "3.png");

let hamLogo = document.getElementById("ham");
let hamBtn = document.getElementById("hamBtn");
let mobileLinksDiv = document.getElementById("mobilelinksdiv");

let home;
let quote;
let contact;
let login;


function ham() {

    hamLogo.setAttribute("src", "/images/icons/x.png");
    hamBtn.setAttribute("onclick", "exit()");

    mobileLinksDiv.className = "mobilelinksul1";

    home = document.createElement("a");
    quote = document.createElement("a");
    contact = document.createElement("a");
    login = document.createElement("a");

    home.textContent = "Home";
    quote.textContent = "How It Works";
    contact.textContent = "Contact Us";
    login.textContent = "Signup/Login";

    contact.setAttribute("href", "/html/contact.html");
    home.setAttribute("href", "https://uxshore.com/");
    quote.setAttribute("href", "/html/how-it-works.html");
    login.setAttribute("href", "/html/login.html");

    home.className = "mobilelinksa";
    quote.className = "mobilelinksa";
    contact.className = "mobilelinksa";
    login.className = "mobilelinksa";


    mobileLinksDiv.appendChild(home);
    mobileLinksDiv.appendChild(quote);
    mobileLinksDiv.appendChild(contact);
    mobileLinksDiv.appendChild(login);


}

function exit() {

    hamLogo.setAttribute("src", "/images/icons/ham.png");
    hamBtn.setAttribute("onclick", "ham()");

    mobileLinksDiv.className = "mobilelinksul";

    mobileLinksDiv.removeChild(home);
    mobileLinksDiv.removeChild(quote);
    mobileLinksDiv.removeChild(contact);
    mobileLinksDiv.removeChild(login);
}
