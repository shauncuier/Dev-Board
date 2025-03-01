
// Change the background color

function randomBackground() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);    
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function gotoBlog(){
    window.location.href = "./blog.html";
}

function clearHistory() {
    if (confirm("Are you sure you want to clear the history?")) {
        document.getElementById("activityLog").innerHTML = "";
        document.getElementById("activityLog").style.display = "block";
    }
    document.getElementById("activityLog").style.display = "none";

}


// Time now

function timeNow() {
    let date = new Date();
    return date.toLocaleTimeString();
}


