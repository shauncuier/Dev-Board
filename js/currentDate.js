let date = new Date();
dateSplited = date.toDateString().split(" ");
document.getElementById("date").innerHTML = `
<p>${dateSplited[0]},</p>
<p class="font-bold">${dateSplited[1]} ${dateSplited[2]} ${dateSplited[3]}</p>
`;