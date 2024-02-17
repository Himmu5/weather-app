import axios from "axios"

export const weatherByCityName = (query: string) => {
    return axios.get(`current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${query}`).then((r) => {
        return r.data
    }).catch(()=>{
        return undefined    
    })
}