let selectedSymptoms = [];

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("symptomSelect");

    if (!select) return;

    select.addEventListener("change", function () {

        const value = this.value;
        const text = this.options[this.selectedIndex].text;

        if (!value) return;

        if (!selectedSymptoms.includes(value)) {
            selectedSymptoms.push(value);
        }

        renderSymptoms();

        this.value = "";
    });
});

function renderSymptoms() {

    const list = document.getElementById("selectedSymptoms");

    list.innerHTML = "";

    selectedSymptoms.forEach(symptom => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${getSymptomName(symptom)}
            <button onclick="removeSymptom('${symptom}')">
                X
            </button>
        `;

        list.appendChild(li);
    });
}

window.removeSymptom = function(symptom) {

    selectedSymptoms =
        selectedSymptoms.filter(item => item !== symptom);

    renderSymptoms();
}

function getSymptomName(symptom) {

    const names = {
        fatigue: "Zmęczenie",
        sleepiness: "Senność",
        headache: "Bóle głowy",
        hairloss: "Wypadanie włosów",
        dizziness: "Zawroty głowy",
        concentration: "Problemy z koncentracją",
        infections: "Częste infekcje",
        thirst: "Nadmierne pragnienie"
    };

    return names[symptom];
}

window.analyzeHealth = function () {

    let tests = [];

    if (selectedSymptoms.includes("fatigue")) {
        tests.push("Morfologia");
        tests.push("Ferrytyna");
        tests.push("TSH");
    }

    if (selectedSymptoms.includes("hairloss")) {
        tests.push("TSH");
        tests.push("Żelazo");
        tests.push("Witamina D3");
    }

    if (selectedSymptoms.includes("headache")) {
        tests.push("Morfologia");
        tests.push("Glukoza");
    }

    tests = [...new Set(tests)];

    let html = `
        <h3>Zalecane badania</h3>
        <ul>
    `;

    tests.forEach(test => {
        html += `<li>${test}</li>`;
    });

    html += `
        </ul>

        <h3>Przydatne kalkulatory</h3>

        <a href="bmi.html" class="button">
            Kalkulator BMI
        </a>
    `;

    document.getElementById("quizResult").innerHTML = html;
}
