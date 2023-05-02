import React, { Children } from 'react'

export const Layouy = ({ Children }) => {
    return (<>
        <h1>Navart</h1>
        <div className="container mx-auto h-full">
            {Children}
        </div>
    </>)
}
