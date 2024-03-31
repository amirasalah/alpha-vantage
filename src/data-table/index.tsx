import React, {FC} from 'react'
import { useQuery } from 'react-query'
import { fetchData } from '../api'
import { categories } from '../constants' 
import { DataRow } from '../data-row'
import { Data } from '../types'

export const baseURL = 'https://www.alphavantage.co/query'


export const DataTable:FC = () => {
    const [category, setCategory] = React.useState(categories.CURRENCY_EXCHANGE_RATE)

    const { data, isError, isLoading } = useQuery<Data>([category], () => fetchData(`${baseURL}?function=${category}&symbol=IBM&interval=5min&apikey=BV9AYZ6GN9Y2RQJI`), {
        retry: false
    })
 
    console.log(data);

    if (!data) return (<div>Loading...</div>)
    if (isError || isLoading) return null

    return (
        <>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {Object.values(categories).map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <DataRow data={data} />
        </>
    )
}

