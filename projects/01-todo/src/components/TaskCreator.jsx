import { useForm } from "react-hook-form"
import PropTypes from "prop-types"
import { createTask } from "../logic.js"

export function TaskCreator({ tasks, setTasks, className }) {
    const { register, handleSubmit } = useForm()

    const updateTasks = (data) => {
        let newTasks = createTask(data, tasks)
        setTasks(newTasks)
    }

    return (
        <fieldset
            className={
                "mx-3 border border-black p-3 dark:border-white " + className
            }
        >
            <legend className={"px-1 font-mono text-xl font-semibold"}>
                Creador de tareas
            </legend>
            <form
                className={"mx-3 flex flex-col items-center gap-5"}
                onSubmit={handleSubmit(updateTasks)}
            >
                <label className={"flex items-center gap-2"}>
                    Titulo de la tarea:
                    <input
                        type={"text"}
                        name={"title"}
                        {...register("title")}
                        className={"text-black"}
                        required
                    />
                </label>

                <label className={"flex items-center gap-2"}>
                    Cuerpo de la tarea:
                    <textarea
                        name={"description"}
                        className={"text-black"}
                        {...register("description")}
                        required
                    />
                </label>

                <button
                    type="submit"
                    className={
                        "w-2/3 border border-black transition-colors hover:bg-orange-400 dark:border-white dark:hover:bg-neutral-400"
                    }
                >
                    Enviar
                </button>
            </form>
        </fieldset>
    )
}

TaskCreator.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
    className: PropTypes.string,
}
