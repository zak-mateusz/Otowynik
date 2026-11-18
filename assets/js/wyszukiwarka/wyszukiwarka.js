console.log("Wyszukiwarka działa");
import { getLaboratories } from "./supabase.js";

async function init() {

    const laboratories = await getLaboratories();

    console.log(laboratories);
    console.log("Pierwszy rekord:");
    console.log(laboratories[0]);

}

init();