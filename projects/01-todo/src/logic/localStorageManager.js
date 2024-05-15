export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function getTasks() {
    const TasksFromLocalStorage = localStorage.getItem("tasks")

    return TasksFromLocalStorage ? JSON.parse(TasksFromLocalStorage) : []
}

export function saveDarkMode(mode) {
    mode
        ? localStorage.setItem("darkMode", JSON.stringify(mode))
        : localStorage.setItem("darkMode", JSON.stringify(false))
}

export function getDarkMode() {
    const darkModeFromLocalStorage = localStorage.getItem("darkMode")
    return darkModeFromLocalStorage
        ? JSON.parse(darkModeFromLocalStorage)
        : false
}
