import React, {FC} from 'react'

export const DataRow:FC = ({ data }) => {
    return (
        <div>{JSON.stringify(data)}</div>
    )
}