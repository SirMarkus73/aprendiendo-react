import PropTypes from "prop-types"

export function Header({ darkMode, setDarkMode }) {
    const changeTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header
            className={
                "fixed left-0 top-0 flex w-full flex-row justify-between border-b border-black p-5 backdrop-blur-sm dark:border-white"
            }
        >
            <h2 className={"text-2xl"}>To-Do App</h2>
            <label
                className={
                    "flex flex-row gap-3 border border-black p-3 dark:border-white"
                }
            >
                DarkMode:
                <input
                    type={"checkbox"}
                    value={darkMode}
                    onClick={changeTheme}
                />
            </label>
        </header>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
}
