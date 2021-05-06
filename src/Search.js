import React, { useState } from 'react'
import './Search.css'
function Search({getQuery}) {
    const [text,setText]=useState('Batman');
    const onchange=(q)=>{
        setText(q);
        getQuery(q);
    }
    return (
        <div className="Search">
            <form action="">
                <input value={text} onChange={(e)=>{
                    onchange(e.target.value)
                }
                } type="text"/>
            </form>
        </div>
    )
}

export default Search
