import { useEffect, useState } from "react"
import { getDarkMode, saveDarkMode } from "../logic/localStorageManager.js"

function DarkModeSelector() {
    const [darkMode, setDarkMode] = useState(getDarkMode())

    useEffect(() => {
        saveDarkMode(darkMode)

        if (darkMode) {
            document.querySelector("html").classList.add("dark")
        }
        return () => {
            document.querySelector("html").classList.remove("dark")
        }
    }, [darkMode])

    return (
        <fieldset
            className={
                "flex content-center justify-center border border-neutral-800 py-3 dark:border-neutral-300"
            }
        >
            <legend className={"mx-2"}>Dark Mode</legend>

            <input
                className={"h-full w-full"}
                type={"checkbox"}
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                name={"darkModeSelector"}
            />
        </fieldset>
    )
}

export default DarkModeSelector
