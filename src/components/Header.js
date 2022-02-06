
function Header( {onDarkModeCLick, dkmd} ) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeCLick}>
            {dkmd ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header