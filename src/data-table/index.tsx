import React, {FC} from 'react'
import { useQuery } from 'react-query'
import { fetchData } from '../api'
import { categories } from '../constants'
import { DataRow } from '../data-row'

export const baseURL = 'https://www.alphavantage.co/query'

type Data = {
    "Meta Data": {
        "1. Information": string,
        "2. Symbol": string,
        "3. Last Refreshed": string,
        "4. Interval": string,
        "5. Output Size": string,
        "6. Time Zone": string
    },
    "Time Series (5min)": {
        [key: string]: {
            "1. open": string,
            "2. high": string,
            "3. low": string,
            "4. close": string,
            "5. volume": string
        }
    }
}
export const DataTable:FC = () => {
    const [category, setCategory] = React.useState(categories.CURRENCY_EXCHANGE_RATE)

    const { data, isError, isLoading } = useQuery<Data>([category], () => fetchData(`${baseURL}?function=${category}&symbol=IBM&interval=5min&apikey=demo`), {
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

