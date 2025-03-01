// Current Date

let date = new Date();
dateSplited = date.toDateString().split(" ");
document.getElementById("date").innerHTML = `
<p class="text-[22px]">${dateSplited[0]} ,</p>
<p class="text-[22px] font-bold">${dateSplited[1]} ${dateSplited[2]} ${dateSplited[3]}</p>
`;

// Functions 

// Change the background color
function randomBackground() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// Page Redirect
function gotoBlog() {
    window.location.href = "./blog.html";
}

// Time now
function timeNow() {
    let date = new Date();
    return date.toLocaleTimeString();
}

// Functions End

// Main Button Task

const mainBtn = document.getElementsByClassName("mainBtn");
const cardTitle = document.getElementsByClassName("card-title");

for (let i = 0; i < mainBtn.length; i++) {
    const button = mainBtn[i];
    button.addEventListener("click", function () {
        alert("Board Updated Successfully");
        button.setAttribute("disabled", "");
        button.style.backgroundColor = "#3751fd85";
        button.style.cursor = "not-allowed";


        const taskAssigned = document.getElementById("taskAssigned").innerText;
        convertedTaskAssigned = parseInt(taskAssigned) - 1;


        document.getElementById("taskAssigned").innerText = convertedTaskAssigned;
        const taskDone = document.getElementById("taskDone").innerText;
        convertedTaskDone = parseInt(taskDone) + 1;
        document.getElementById("taskDone").innerText = convertedTaskDone;


        let date = timeNow();


        const currentCardTitle = cardTitle[i].innerText;
        activityLog = document.getElementById("activityLog");
        p = document.createElement("p");
        p.innerHTML = 
        `<p id="text" class="p-6 m-4 text-center bg-[#F4F7FF] rounded-lg">
            You have Complete The Task <span class="font-semibold">${currentCardTitle}</span> at <span class="font-medium">${date}</span>
        </p>`;
        p.classList.add('message-child')
        activityLog.appendChild(p);


        if (convertedTaskAssigned === 0) {
            alert("Congrates!!! You have completed all the current Task");
        }
    });
}

document.getElementById('clearBtn').addEventListener('click', function () {
    const messageChild = document.querySelectorAll('.message-child');
    for (const hidden of messageChild) {
        hidden.classList.add('hidden');
    }
})