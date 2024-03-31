import {FC} from 'react'
import { Data } from '../types'

export const DataRow:FC<{data: Data}> = ( data ) => {
    return (
        <div>{JSON.stringify(data)}</div>
    )
}