const key = "last_city"

export function saveLastCity(city){
    localStorage.setItem(key, city);
}

export function getLastCity(){
    return localStorage.getItem(key);
}