import App from "../App";

export default function TodoForm (value) {
        return (
            <form onSubmit={onFormSubmit}>
                <input
                    name="name"
                    value={todo.title}
                    onSave= {createTodo}
                />
                <button>Save</button>
            </form>
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault();

    };

