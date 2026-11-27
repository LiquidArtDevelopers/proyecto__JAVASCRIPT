import { api_baseUrl } from "./config.js"

export function getHero(id){
   return fetch(`${api_baseUrl}/${id}`)
    .then (res => res.ok  ? res.json () : Promise.reject() )
    .catch( res => ({ error : "Hero not found"})  )
}

export function searchHeroe(name){
  return fetch(`${api_baseUrl}/search/${name}`)
    .then (res => res.ok  ? res.json () : Promise.reject() )
    .catch( res => ({ error : "Hero not found"})  )
}
