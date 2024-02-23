import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("cabins info couldn't be loaded!");
  }

  return data;
}
