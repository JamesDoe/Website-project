const config = {
    tabs: {
        "Login": {background: "red", default: true},
        "About": {background: "orange"},
        "Contact": {background: "blue"}
    }
};

// const links = ["Login", "About", "Contact"];
const nav = document.getElementById("nav");
// config.tabs.forEach((obj,index) => {
// TODO: Use map/weak map to ensure element order
for (let tab in config.tabs) {
    let b = document.createElement('button'), buttonText = document.createTextNode(tab), tabContainer = document.getElementById('buttonContainer');
    b.appendChild(buttonText);
    b.setAttribute("class","tablink");
    b.setAttribute("onclick","openPage(this)");
    if (config.tabs[tab].default) b.setAttribute("id","defaultOpen");
    
    buttonContainer.appendChild(b);
    // let a = document.createElement('a'), node = document.createElement("li"), linkText = document.createTextNode(element);
    // a.appendChild(linkText);
    // a.href = "http://example.com";
    // node.appendChild(a);
    // node.setAttribute("class","nav_link");
    // nav.appendChild(node);
// });
};
// function openPage(pageName, elmnt, color) {
//     // Hide all elements with class="tabcontent" by default */
//     let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("content");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Remove the background color of all tablinks/buttons
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].style.backgroundColor = "";
//     }

//     // Show the specific tab content
//     document.getElementById(pageName).style.display = "block";

//     // Add the specific color to the button used to open the tab content
//     elmnt.style.backgroundColor = color;
// }

function openPage(element) {
    // Hide all elements with class="tabcontent" by default */
    let i, pageName = element.innerText, color = config.tabs[pageName].background, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();