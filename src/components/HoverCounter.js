import React from 'react';

const HoverCounter=({theme})=>{
    console.log(theme);
    const style=theme === 'dark' ? {backgroundColor:"#222"} : {backgroundColor:"#455"} ;
    return(
        <div>
            <h1 style={style} >Hello i am HoverCounter</h1>
        </div>
    )
}

export default HoverCounter;