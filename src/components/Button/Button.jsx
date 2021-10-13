function Button({ type, onClick, buttonName, disabled }) {
    return (
        <button
            type={type}
            className={disabled}
            onClick={onClick}
            disabled={disabled}
        >{buttonName}</button>
    )
}

export {Button}