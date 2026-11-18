console.log("Wyszukiwarka działa");
import { getLaboratories } from "./supabase.js";

async function init() {

    const laboratories = await getLaboratories();

    console.log(laboratories[0]);

    const container = document.getElementById("laboratories-container");

    if (!container) {
        console.error("Nie znaleziono laboratories-container");
        return;
    }

            container.innerHTML = `
            <div class="laboratory-card">
                <h2>TEST LAB</h2>
                <p>${laboratories[0].miasto}</p>
                <p>${laboratories[0].ulica}</p>
                <p>${laboratories[0].kod}</p>
            </div>
`;
init();