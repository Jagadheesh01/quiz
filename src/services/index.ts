
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://ttlezxgqrqheyyfxccwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bGV6eGdxcnFoZXl5ZnhjY3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwODMyOTcsImV4cCI6MjAyODY1OTI5N30.MTnyvZq50oPWLTepX7xrb1rgPl-8KGle9JH8huBXpbA'
const supabase = createClient(supabaseUrl, supabaseKey)

export const signUpUser = async(payload:any) => {
    try {
      const { data } = await supabase
        .from("auth")
        .insert([payload])
        .select();
      return data;
    } catch (err) {
      console.log("something went wrong!", err);
      return err;
    }
}

export const loginUser = async(payload:any) => {
    try {
      let { data: auth } = await supabase
        .from("auth")
        .select("*")
        .eq("email_id", payload.email_id)
        .eq("password", payload.password)
      return auth;
    } catch (err) {
      console.log("something went wrong!", err);
      return err;
    }
}

/* data get from supabase */

export const easyQuestions = async(diff:string) =>{
  try{
// let { data: easy } = await supabase
// .from('easy')
// .select('*')
//         return easy;
let { data: auth } = await supabase
        .from("easy")
        .select("*").eq('toughness',diff)
        return auth
  }catch (err){
    console.log("something went wrong!",err)
  }
}

/* update scorepoints in supabase */

