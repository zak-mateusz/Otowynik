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
                <h1 style="color:red">TEST</h1>
            `;
            }

init();