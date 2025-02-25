document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerText = "Click here";
    button.onclick = function () {
        alert("Button clicked!");
    };
    document.body.appendChild(button);
});
