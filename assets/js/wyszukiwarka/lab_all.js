const SUPABASE_URL = "https://davradlgcnxyghtigosg.supabase.co/";
const SUPABASE_KEY = "sb_publishable_HWTBDUTpEuwjBULWZMKdFQ_9zPRNq4Z";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

export async function getLaboratories() {

    const { data, error } = await supabase
        .from('lab_all')
        .select('*');
        console.log("Error:", error);
        console.log("Data:", data);

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}