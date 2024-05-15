export function createTask(data, tasks) {
    let newTasks = [...tasks]

    const newTask = {
        title: data.title,
        description: data.description,
    }

    if (newTasks.length > 0) {
        let ids = []

        newTasks.map((task) => {
            if (task) ids.push(task.id)
        })

        const sortedIds = ids.sort()

        newTask.id = sortedIds[sortedIds.length - 1] + 1
    } else {
        newTask.id = 1
    }

    newTasks.push(newTask)

    return newTasks
}

export function getTasks() {
    const tasks = localStorage.getItem("tasks")
    const parseTasks = JSON.parse(tasks)
    return tasks ? parseTasks : []
}

export function removeTask(id, tasks) {
    let newTasks = [...tasks]

    tasks.map((task, index) => {
        if (task) {
            if (task.id === id) {
                newTasks[index] = null
            }
        }
    })

    return newTasks
}

export function editTask(id, tasks) {
    let newTasks = [...tasks]

    newTasks.map((task, index) => {
        if (task.id === id) {
            const newName = prompt("Nuevo titulo", task.title)
            const newDescription = prompt("Nueva descripción", task.description)

            newTasks[index] = {
                id: task.id,
                title: newName,
                description: newDescription,
            }
        }
    })

    return newTasks
}
