import produce from 'immer';

export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";

export interface TodoItemDataParams {
    id: number,
    text: string,
    done: boolean;
};

export type TodoState = {
    todoItems: TodoItemDataParams[],
    input: string;
};

export const CreateAction = (text: string) => ({ type: CREATE, payload: text });
export const RemoveAction = (id: number) => ({ type: REMOVE, payload: id });
export const ToggleAction = (id: number) => ({ type: TOGGLE, payload: id });
export const ChangeInputAction = (input: string) => ({ type: CHANGE_INPUT, payload: input });

type TodoActionTypes =
    | ReturnType<typeof CreateAction>
    | ReturnType<typeof RemoveAction>
    | ReturnType<typeof ToggleAction>
    | ReturnType<typeof ChangeInputAction>;

const initialState: TodoState = {
    todoItems: [],
    input: ''
};

let autoId = 0;

export function todoReducer(
    state: TodoState = initialState,
    action: TodoActionTypes
): TodoState {
    return produce(state, draft => {
        switch (action.type) {
            case CREATE:
                draft.todoItems.push({
                    done: false,
                    id: autoId++,
                    text: action.payload.toString()
                })
                break;

            case REMOVE:
                draft.todoItems = draft.todoItems.filter(todo => todo.id !== action.payload);
                break;

            case CHANGE_INPUT:
                draft.input = action.payload as string;
                break;

            case TOGGLE:
                draft.todoItems.map(todo => {
                    if (todo.id === action.payload) {
                        todo.done = !todo.done;
                    }
                    return todo;
                });
                break;
            default:
                break;
        }
    });
}

export default todoReducer;