"use client"
import { withSearch } from '@/context/hoc/withProvider'
import { Weather } from '@/typing/weather'
import { useSearchParams } from 'next/navigation'
import { FC, useState, useEffect, Suspense } from 'react'
import { weatherByCityName } from '@/api/weather';
import { IoIosArrowBack } from "react-icons/io";

const WeatherDetailPage = () => {
    const searchParams = useSearchParams()
    const query = searchParams?.get('query')
    const [data, setData] = useState<Weather>();

    const back = () => {
        if (typeof window !== 'undefined') {
            window.history.back(); // Use browser's history API to navigate back
        }
    }

    useEffect(() => {
        weatherByCityName(query!).then((res) => {
            setData(res);
        })
    }, [query])

    return <div className='min-h-screen flex justify-center items-center '>
        <div className='min-w-1/2 border rounded-md p-3 space-y-4'>
            <div className="flex items-center gap-1">
                <IoIosArrowBack size={35} onClick={back} className="cursor-pointer" />
                <h1 className='text-3xl font-bold'>Weather Detail</h1>
            </div>
            <div className="text-base sm:text-lg md:text-xl text-center font-bold  ">{query}</div>
            <div className='flex items-center justify-between '>
                <p className="font-bold">Country </p>
                <p>{data?.location?.country}</p>
            </div>
            <div className='flex items-center justify-between '>
                <p className="font-bold">Region </p>
                <p>{data?.location?.region}</p>
            </div>
            <div className='flex items-center justify-between '>
                <p className="font-bold">Time </p>
                <p>{data?.location?.localtime}</p>
            </div>
            <div className='flex items-center justify-between '>
                <p className="font-bold">Time zone </p>
                <p>{data?.location?.tz_id}</p>
            </div>
            <div className='flex items-center justify-between '>
                <p className="font-bold">Temperature(°C)</p>
                <p>{data?.current?.temp_c}</p>
            </div>
        </div>
    </div>
}

const WeatherDetail = () => {
    return <Suspense fallback={<div>Loading...</div>} >
        <WeatherDetailPage />
    </Suspense>
}

export default WeatherDetail;