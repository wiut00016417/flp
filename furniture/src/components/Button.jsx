
function Button({children, ...otherProps}){
    return (
        <button {...otherProps} className="buy">
            {children}
        </button>
    )
}

export default Button