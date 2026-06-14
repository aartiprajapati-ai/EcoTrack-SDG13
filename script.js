function calculate() {

    let bike = Number(document.getElementById("bike").value);

    let car = Number(document.getElementById("car").value);

    let electricity = Number(document.getElementById("electricity").value);

    let total =
        (bike * 0.08) +
        (car * 0.20) +
        (electricity * 0.82);

    let level = "";

    if (total < 50) {
        level = "🟢 Low";
    }
    else if (total < 100) {
        level = "🟡 Medium";
    }
    else {
        level = "🔴 High";
    }

    document.getElementById("result").innerHTML =

        `Your Carbon Footprint is
        ${total.toFixed(2)} kg CO₂
        <br><br>
        Carbon Level: ${level}`;

        document.getElementById("dashboardTotal").innerHTML =
        total.toFixed(2) + " kg CO₂";

    let tip = "";

    if (total < 50) {
        tip = "✅ Excellent! Keep following eco-friendly habits.";
    }
    else if (total < 100) {
        tip = "🌱 Try reducing electricity usage and use public transport.";
    }
    else {
        tip = "⚠ High emissions detected. Reduce vehicle usage and save energy.";
    }

    document.getElementById("tips").innerHTML = tip;
    let history =
JSON.parse(localStorage.getItem("history")) || [];

history.push(total.toFixed(2));

history = history.slice(-5);


localStorage.setItem(
    "history",
    JSON.stringify(history)
);

showHistory();
}
function showHistory(){

    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    let output = "";

    for(let i=0;i<history.length;i++){

        output += `
        <p>
        ${i+1}. ${history[i]} kg CO₂
        </p>
        `;
    }

    document.getElementById("history").innerHTML =
    output;
}

showHistory();
function toggleDarkMode(){

    document.body.classList.toggle("dark");

}