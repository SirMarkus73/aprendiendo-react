import PropTypes from "prop-types"

export function Header({ darkMode, setDarkMode }) {
    const changeTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header className={"mx-5 flex flex-row justify-between"}>
            <h2>To-Do App</h2>
            <a onClick={changeTheme} className={"cursor-pointer "}>
                Turn Dark Mode
            </a>
        </header>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
}
