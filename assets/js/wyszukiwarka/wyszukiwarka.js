console.log("Wyszukiwarka działa");

import { getLaboratories } from "./supabase.js";

function renderLaboratories(laboratories) {

    const container = document.getElementById("laboratories-container");

    let html = "";

    laboratories.forEach(lab => {

        html += `
            <div class="laboratory-card">

                <h2>${lab["Nazwa Placowki"]}</h2>

                <p><strong>Miasto:</strong> ${lab.miasto}</p>

                <p><strong>Ulica:</strong> ${lab.ulica}</p>

                <p><strong>Kod:</strong> ${lab.kod}</p>

            </div>
        `;
    });

    container.innerHTML = html;

    document.getElementById("resultsCount").textContent =
        laboratories.length;
}

async function init() {

    const laboratories = await getLaboratories();

    console.log("Liczba rekordów:", laboratories.length);

    renderLaboratories(laboratories);

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function () {

        const searchTerm = this.value.toLowerCase();

        const filteredLabs = laboratories.filter(lab => {

            const name = (lab["Nazwa Placowki"] || "").toLowerCase();
            const city = (lab.miasto || "").toLowerCase();
            const street = (lab.ulica || "").toLowerCase();
            const postCode = (lab.kod || "").toLowerCase();

            return (
                name.includes(searchTerm) ||
                city.includes(searchTerm) ||
                street.includes(searchTerm) ||
                postCode.includes(searchTerm)
            );

        });

        renderLaboratories(filteredLabs);

    });

}

init();