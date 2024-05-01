let desktopLogo = document.getElementById("desktoplogo");
let mobileLogo = document.getElementById("mobilelogo");


desktopLogo.setAttribute("src", "/images/icons/" + "logo.jpeg");
mobileLogo.setAttribute("src", "/images/icons/" + "logo.jpeg");

let hamLogo = document.getElementById("ham");
let hamBtn = document.getElementById("hamBtn");
let mobileLinksDiv = document.getElementById("mobilelinksdiv");

let home;
let gallery;


function ham() {

    hamLogo.setAttribute("src", "/images/icons/x.png");
    hamBtn.setAttribute("onclick", "exit()");

    mobileLinksDiv.className = "mobilelinksul1";

    home = document.createElement("a");
    gallery = document.createElement("a");

    home.textContent = "Home";
    gallery.textContent = "Past Markets";

    home.setAttribute("href", "https://smallbizmarket.netlify.app/");
    gallery.setAttribute("href", "/html/gallery.html");

    home.className = "mobilelinksa";
    gallery.className = "mobilelinksa";


    mobileLinksDiv.appendChild(home);
    mobileLinksDiv.appendChild(gallery);


}

function exit() {

    hamLogo.setAttribute("src", "/images/icons/ham.png");
    hamBtn.setAttribute("onclick", "ham()");

    mobileLinksDiv.className = "mobilelinksul";

    mobileLinksDiv.removeChild(home);
    mobileLinksDiv.removeChild(gallery);
}
