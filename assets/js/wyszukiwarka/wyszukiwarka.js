console.log("Wyszukiwarka działa");

import { getLaboratories } from "./supabase.js";

let laboratories = [];

function renderLaboratories(labs) {

    const container = document.getElementById("laboratories-container");

    let html = "";

    labs.forEach(lab => {

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
        labs.length;
}

function populateCities(labs) {

    const cityFilter =
        document.getElementById("cityFilter");

    cityFilter.innerHTML =
        '<option value="">Wszystkie miasta</option>';

    const cities = [...new Set(
        labs
            .map(lab => lab.miasto)
            .filter(Boolean)
    )];

    cities.sort();

    cities.forEach(city => {

        cityFilter.innerHTML += `
            <option value="${city}">
                ${city}
            </option>
        `;

    });

}

function applyFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const cityFilter =
        document.getElementById("cityFilter");

    const searchTerm =
        searchInput.value.toLowerCase();

    const selectedCity =
        cityFilter.value;

    const filteredLabs = laboratories.filter(lab => {

        const name =
            (lab["Nazwa Placowki"] || "").toLowerCase();

        const city =
            (lab.miasto || "").toLowerCase();

        const street =
            (lab.ulica || "").toLowerCase();

        const postCode =
            (lab.kod || "").toLowerCase();

        const matchesSearch =
            name.includes(searchTerm) ||
            city.includes(searchTerm) ||
            street.includes(searchTerm) ||
            postCode.includes(searchTerm);

        const matchesCity =
            selectedCity === "" ||
            lab.miasto === selectedCity;

        return matchesSearch && matchesCity;

    });

    renderLaboratories(filteredLabs);

}

async function init() {

    laboratories = await getLaboratories();

    console.log("Liczba rekordów:", laboratories.length);

    populateCities(laboratories);

    renderLaboratories(laboratories);

    const searchInput =
        document.getElementById("searchInput");

    const cityFilter =
        document.getElementById("cityFilter");

    searchInput.addEventListener(
        "input",
        applyFilters
    );

    cityFilter.addEventListener(
        "change",
        applyFilters
    );

}

init();