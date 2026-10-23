const symptoms = [
    { id: "fatigue", name: "Zmęczenie" },
    { id: "sleepiness", name: "Senność" },
    { id: "noenergy", name: "Brak energii" },
    { id: "concentration", name: "Problemy z koncentracją" },
    { id: "memory", name: "Problemy z pamięcią" },
    { id: "headache", name: "Bóle głowy" },
    { id: "migraine", name: "Migreny" },
    { id: "dizziness", name: "Zawroty głowy" },
    { id: "palpitations", name: "Kołatanie serca" },
    { id: "dyspnea", name: "Duszność" },

    { id: "thirst", name: "Nadmierne pragnienie" },
    { id: "urination", name: "Częste oddawanie moczu" },
    { id: "sweating", name: "Nadmierna potliwość" },
    { id: "cold", name: "Nietolerancja zimna" },
    { id: "heat", name: "Nietolerancja ciepła" },

    { id: "hairloss", name: "Wypadanie włosów" },
    { id: "nails", name: "Łamliwe paznokcie" },
    { id: "dryskin", name: "Sucha skóra" },
    { id: "pale", name: "Bladość skóry" },
    { id: "rash", name: "Wysypka" },

    { id: "weightgain", name: "Przyrost masy ciała" },
    { id: "weightloss", name: "Utrata masy ciała" },
    { id: "noappetite", name: "Brak apetytu" },
    { id: "highappetite", name: "Zwiększony apetyt" },

    { id: "sleep", name: "Problemy ze snem" },
    { id: "insomnia", name: "Bezsenność" },
    { id: "infection", name: "Częste infekcje" },
    { id: "muscles", name: "Bóle mięśni" },
    { id: "joints", name: "Bóle stawów" },
    { id: "mood", name: "Obniżony nastrój" }
];

let selectedSymptoms = [];

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("symptomSelect");
    
    symptoms.forEach(symptom => {

    const option = document.createElement("option");

    option.value = symptom.id;
    option.textContent = symptom.name;

    select.appendChild(option);

});


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


function getSymptomName(id) {

    const symptom = symptoms.find(
        item => item.id === id
    );

    return symptom ? symptom.name : id;
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
