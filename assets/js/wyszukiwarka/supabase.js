const SUPABASE_URL = "TU_WKLEJ_URL";
const SUPABASE_KEY = "TU_WKLEJ_ANON_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

export async function getLaboratories() {

    const { data, error } = await supabase
        .from('laboratoria')
        .select('*');

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}