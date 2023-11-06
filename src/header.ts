const headerDiv:HTMLDivElement = document.createElement("div");
const homeBtn:HTMLButtonElement = document.createElement("button");
const infoBtn:HTMLButtonElement = document.createElement("button");

function createHeader():void
{
    document.body.style.height = "100%";
    headerDiv.style.top = "0";
    headerDiv.style.left= "0";
    headerDiv.style.height = "50px";
    headerDiv.style.width = "100%";
    headerDiv.style.backgroundColor = "#CBB5FA";
    
    homeBtn.textContent = "Home"
    homeBtn.style.position = "absolute";
    homeBtn.style.top = "20px";
    homeBtn.style.right = "20px"
    
    infoBtn.textContent = "infoBtn";
    infoBtn.style.position = "absolute";
    infoBtn.style.top = "20px";
    infoBtn.style.right = "70px"

    headerDiv.appendChild(homeBtn);
    headerDiv.appendChild(infoBtn);
    document.body.appendChild(headerDiv);
}

createHeader();

homeBtn.addEventListener("click", gohome => {window.location.href = "index.html"});
infoBtn.addEventListener("click", goinfo => {window.location.href = "info.html"});
