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

          let html = '';

            laboratories.forEach(lab => {

                html += `
                    <div class="laboratory-card">
                        <h2>${lab["Nazwa Placowki"]}</h2>
                        <p>${lab.miasto}</p>
                        <p>${lab.ulica}</p>
                        <p>${lab.kod}</p>
                    </div>
                `;

            });

            container.innerHTML = html;
}   
init();