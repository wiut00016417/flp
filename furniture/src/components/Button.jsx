import { Children } from "react"

function Button({children, onCLick}){
    return (
        <button onClick={onCLick} className="buy">
            {children}
        </button>
    )
}

export default Button