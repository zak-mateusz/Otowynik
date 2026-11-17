console.log("Wyszukiwarka działa");
import { getLaboratories } from "./supabase.js";

async function init() {

    const laboratories = await getLaboratories();

    console.log(laboratories);

}

init();