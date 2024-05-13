import { useForm } from "react-hook-form"

export function TaskCreator() {
    const { register, handleSubmit } = useForm()

    function sendForm(data) {
        const task = {
            title: data.title,
            description: data.description,
        }

        console.log(task)
    }

    return (
        <fieldset className={"mx-3 border p-3"}>
            <legend>Creador de tareas</legend>
            <form
                className={"mx-3 flex flex-col items-center gap-5"}
                onSubmit={handleSubmit(sendForm)}
            >
                <label className={"flex items-center gap-2"}>
                    Titulo de la tarea:
                    <input
                        type={"text"}
                        name={"title"}
                        {...register("title")}
                        className={"text-black"}
                    />
                </label>

                <label className={"flex items-center gap-2"}>
                    Cuerpo de la tarea:
                    <textarea
                        name={"description"}
                        className={"text-black"}
                        {...register("description")}
                    />
                </label>

                <button
                    type="submit"
                    className={
                        "w-2/3 border transition-colors hover:bg-orange-400 dark:hover:bg-neutral-400"
                    }
                >
                    Enviar
                </button>
            </form>
        </fieldset>
    )
}
