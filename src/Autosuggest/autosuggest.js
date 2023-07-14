const URL = "http://localhost:8080/api/routes/";

export async function autosuggest(event){
    const response = await fetch(URL +`searchinstant/${event.target.value}`,{
        method: "get"
    })
    const data = await response.json();
    return data;
}