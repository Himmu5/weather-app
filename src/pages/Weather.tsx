
import Input from '@/components/Input';
import { withSearch } from '@/context/hoc/withProvider';
import { FC, useState } from 'react'

type P = {}

const Weather: FC<P> = () => {

    return <div className="min-h-screen flex justify-center items-center">
        <div className="min-w-1/2 shadow-md border rounded-md h-80 flex flex-col items-center" >
            <h1 className="text-base sm:text-3xl font-bold text-center p-4 ">Weather App</h1>
            <Input placeholder="Enter the location" />
        </div>
    </div>
}
export default withSearch(Weather);