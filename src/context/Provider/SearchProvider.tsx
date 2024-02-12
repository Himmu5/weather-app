"use client"
import { FC, ReactNode } from 'react'
import { SearchContext } from '../context';

type P = {
    children: ReactNode
}

const SearchProvider: FC<P> = ({ children }) => {
  
    return <SearchContext.Provider value={{}}
        >
        {children}
    </SearchContext.Provider>
}
export default SearchProvider;