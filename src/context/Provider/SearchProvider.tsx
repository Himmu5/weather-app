"use client"
import { FC, ReactNode, useEffect, useState } from 'react'
import { SearchContext } from '../context';
import axios from 'axios';
import { weatherByCityName } from '@/api/weather';
import { Weather } from '@/typing/weather';

type P = {
    children: ReactNode
}

const SearchProvider: FC<P> = ({ children }) => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const [weatherData, setWeatherData] = useState<Weather>()
    const [queryText, setQueryText] = useState("Delhi")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const delayInMilliseconds = 2000; // 2 seconds
        setTimeout(()=>{
            setLoading(true);
        weatherByCityName(queryText).then((res) => {
            setWeatherData(res);
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
        }, delayInMilliseconds);
    }, [queryText])
    
    return <SearchContext.Provider value={{
        weatherData,
        queryText,
        setQueryText,
        loading
    }}>
        {children}
    </SearchContext.Provider>
}
export default SearchProvider;