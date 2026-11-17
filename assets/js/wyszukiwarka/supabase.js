const SUPABASE_URL = "https://davradlgcnxyghtigosg.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_HWTBDUTpEuwjBULWZMKdFQ_9zPRNq4Z";

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