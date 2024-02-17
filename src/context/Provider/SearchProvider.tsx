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
    const [ weatherData , setWeatherData ] = useState<Weather>()
    const [ queryText , setQueryText ] = useState("Delhi")

    useEffect(()=>{
        weatherByCityName(queryText).then((res)=>{
            setWeatherData(res);
        })
    },[queryText])
    return <SearchContext.Provider value={{ 
        weatherData,
        queryText, 
        setQueryText 
    }}>
        {children}
    </SearchContext.Provider>
}
export default SearchProvider;