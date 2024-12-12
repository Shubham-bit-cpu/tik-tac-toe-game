import { useState } from "react";

const Square = ({value, onclick }) => {

    
    console.log(value)

    return (
        <>

            
                <button className="square" type="button" onClick={onclick}>
                    {value}
                    </button>
            
        </>
    )

}
export default Square;