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

///Silnik dla wynikow

const symptomRules = {

    fatigue: [
        "Morfologia",
        "Ferrytyna",
        "Żelazo",
        "TSH",
        "Witamina B12",
        "Witamina D3"
    ],

    sleepiness: [
        "TSH",
        "Morfologia",
        "Witamina D3",
        "Witamina B12"
    ],

    noenergy: [
        "Morfologia",
        "Ferrytyna",
        "TSH",
        "Witamina D3"
    ],

    concentration: [
        "TSH",
        "Witamina B12",
        "Ferrytyna",
        "Witamina D3"
    ],

    memory: [
        "TSH",
        "Witamina B12",
        "Kwas foliowy"
    ],

    headache: [
        "Morfologia",
        "Glukoza",
        "TSH"
    ],

    migraine: [
        "Morfologia",
        "Magnez",
        "Glukoza"
    ],

    dizziness: [
        "Morfologia",
        "Ferrytyna",
        "Glukoza"
    ],

    palpitations: [
        "TSH",
        "Potas",
        "Magnez"
    ],

    dyspnea: [
        "Morfologia",
        "CRP",
        "Ferrytyna"
    ],

    thirst: [
        "Glukoza",
        "HbA1c",
        "Badanie ogólne moczu"
    ],

    urination: [
        "Glukoza",
        "HbA1c",
        "Badanie ogólne moczu"
    ],

    sweating: [
        "TSH",
        "Glukoza",
        "Morfologia"
    ],

    cold: [
        "TSH",
        "FT3",
        "FT4"
    ],

    heat: [
        "TSH",
        "FT3",
        "FT4"
    ],

    hairloss: [
        "TSH",
        "Ferrytyna",
        "Żelazo",
        "Witamina D3"
    ],

    nails: [
        "Żelazo",
        "Ferrytyna",
        "Witamina D3"
    ],

    dryskin: [
        "TSH",
        "Witamina D3"
    ],

    pale: [
        "Morfologia",
        "Żelazo",
        "Ferrytyna"
    ],

    rash: [
        "CRP",
        "OB",
        "Morfologia"
    ],

    weightgain: [
        "TSH",
        "FT3",
        "FT4",
        "Glukoza"
    ],

    weightloss: [
        "TSH",
        "CRP",
        "Glukoza"
    ],

    noappetite: [
        "CRP",
        "ALT",
        "AST"
    ],

    highappetite: [
        "Glukoza",
        "HbA1c",
        "TSH"
    ],

    sleep: [
        "TSH",
        "Magnez",
        "Witamina D3"
    ],

    insomnia: [
        "TSH",
        "Magnez",
        "Witamina D3"
    ],

    infection: [
        "Morfologia",
        "CRP",
        "Witamina D3"
    ],

    muscles: [
        "Witamina D3",
        "Magnez",
        "Potas"
    ],

    joints: [
        "CRP",
        "OB",
        "Morfologia"
    ],

    mood: [
        "TSH",
        "Witamina D3",
        "Witamina B12"
    ]

};

const additionalRules = {

    stress: [
        "Magnez",
        "Kortyzol",
        "TSH"
    ],

    sleepProblems: [
        "Magnez",
        "TSH",
        "Witamina D3"
    ],

    vegetarian: [
        "Witamina B12",
        "Żelazo",
        "Ferrytyna",
        "Kwas foliowy"
    ],

    vegan: [
        "Witamina B12",
        "Żelazo",
        "Ferrytyna",
        "Kwas foliowy",
        "Witamina D3"
    ],

    smoker: [
        "CRP",
        "Morfologia"
    ],

    thyroidDisease: [
        "TSH",
        "FT3",
        "FT4",
        "anty-TPO"
    ],

    familyDiabetes: [
        "Glukoza",
        "HbA1c",
        "Insulina"
    ],

    weightChange: [
        "TSH",
        "Glukoza",
        "CRP"
    ],

    pregnant: [
        "Morfologia",
        "Żelazo",
        "Ferrytyna",
        "TSH"
    ]

};

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

    selectedSymptoms.forEach(symptom => {

        if (symptomRules[symptom]) {
            tests.push(...symptomRules[symptom]);
        }

    });

    Object.keys(additionalRules).forEach(key => {

        const checkbox = document.getElementById(key);

        if (checkbox && checkbox.checked) {
            tests.push(...additionalRules[key]);
        }

    });


    tests.forEach(test => {
        html += `<li>${test}</li>`;
    });

    html += `
        </ul>

        <p>
            Wynik ma charakter informacyjny i nie zastępuje konsultacji lekarskiej.
        </p>

        <h3>Przydatne narzędzia</h3>

        <a href="bmi.html" class="button">
            Kalkulator BMI
        </a>
    `;

    document.getElementById("quizResult").innerHTML = html;

};

}
