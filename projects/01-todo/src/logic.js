export function createTask(data) {
    const tasks = localStorage.getItem("tasks")

    const task = {
        title: data.title,
        description: data.description,
    }

    const parseTasks = JSON.parse(tasks)

    let newTasks = []

    if (tasks) {
        let ids = []
        parseTasks.map((task) => {
            ids.push(task.id)
        })

        const sortedIds = ids.sort()

        task.id = sortedIds[sortedIds.length - 1] + 1
    } else {
        task.id = 1
    }

    tasks ? newTasks.push(task, ...parseTasks) : newTasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(newTasks))

    location.reload()
}

export function getTasks() {
    const tasks = localStorage.getItem("tasks")
    const parseTasks = JSON.parse(tasks)
    return tasks ? parseTasks : []
}

export function removeTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))

    let newTasks = []

    tasks.map((task) => {
        if (task.id !== id) {
            newTasks.push(task)
        }
    })

    if (newTasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    } else {
        localStorage.removeItem("tasks")
    }

    location.reload()
}