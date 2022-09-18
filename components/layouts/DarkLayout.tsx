import { FC } from "react"


export const DarkLayout:FC = ({children}) => {
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
