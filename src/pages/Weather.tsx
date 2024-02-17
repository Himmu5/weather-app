"use client"
import Input from '@/components/Input';
import { withSearch } from '@/context/hoc/withProvider';
import { Weather } from '@/typing/weather';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

type P = {
    queryText: string
    setQueryText: (text: string) => void;
    weatherData: Weather;
    loading: boolean;
}

const Weather: FC<P> = ({ queryText, setQueryText, weatherData, loading }) => {

    if (loading) {
        return <>Loading...</>
    }
    return <div className="min-h-screen flex justify-center items-center">
        <div className="min-w-1/2 shadow-md border rounded-md flex flex-col p-3 " >
            <h1 className="text-base sm:text-3xl font-bold text-center p-4 ">Weather App</h1>
            <Input placeholder="Enter the location" value={queryText} onChange={(e) => setQueryText(e.target.value)} />
            {weatherData ? <div className='flex flex-col space-y-4 my-5'>
                <div className='flex items-center gap-1 justify-center font-bold'>
                    <p className='text-sm sm:text-xl md:text-2xl'>{weatherData?.location?.name}</p>
                    <Image src={"https:" + weatherData?.current?.condition?.icon} width={40} height={50} alt="weather" />
                </div>
                <div className='flex items-center justify-between '>
                    <p>country </p>
                    <p>{weatherData?.location?.country}</p>
                </div>
                <div className='flex items-center justify-between '>
                    <p>Region </p>
                    <p>{weatherData?.location?.region}</p>
                </div>
                <div className='flex items-center justify-between '>
                    <p>Time </p>
                    <p>{weatherData?.location?.localtime}</p>
                </div>
                <div className='flex items-center justify-between '>
                    <p>Time zone </p>
                    <p>{weatherData?.location?.tz_id}</p>
                </div>
                <div>
                    <Link
                        href={"/weather?query=" + queryText}
                        className='text-sm sm:text-base md:text-lg text-red-400 border w-fit p-1 rounded-md shadow-md self-center'
                    >
                        View details
                    </Link>
                </div>
            </div> :
                <div className='m-4 text-center'>Data not found</div>
            }
        </div>
    </div>
}

export default withSearch(Weather);