
import { FC, PropsWithChildren  } from "react"
import React from 'react';


export const DarkLayout:FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div style = {{
            backgroundColor: '#4c4c4c8f' ,
            padding: '2em',
            borderRadius:'1em',
    }}>
        <h3>Dark-Layout</h3>

        <div>
        {children}
        </div>
    </div>
)
}
