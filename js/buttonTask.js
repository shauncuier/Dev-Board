const mainBtn = document.getElementsByClassName("mainBtn");
const cardTitle = document.getElementsByClassName("card-title");

for (let i = 0; i < mainBtn.length; i++) {
    const button = mainBtn[i];
    button.addEventListener("click", function (e) {
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
        p.innerHTML = `<p id="text" class="p-6 m-8 text-center bg-[#F4F7FF] rounded-lg">
                        You have Complete The Task <b>${currentCardTitle}</b> at ${date}
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
    for (const element of messageChild) {
        element.classList.add('hidden');
    }
})