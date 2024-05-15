import DarkModeSelector from "./DarkModeSelector.jsx"

function Header() {
    return (
        <header
            className={
                "fixed left-0 top-0 flex w-full flex-row justify-between border-b border-black p-5 backdrop-blur-sm dark:border-white"
            }
        >
            <h2 className={"text-2xl"}>To-Do App</h2>
            <DarkModeSelector />
        </header>
    )
}

export default Header
