"use client"
import { FC, ReactNode, useState } from 'react'
import { SearchContext } from '../context';

type P = {
    children: ReactNode
}

const SearchProvider: FC<P> = ({ children }) => {
    const [ queryText , setQueryText ] = useState("Delhi")
    return <SearchContext.Provider value={{ 
        queryText, 
        setQueryText 
    }}>
        {children}
    </SearchContext.Provider>
}
export default SearchProvider;