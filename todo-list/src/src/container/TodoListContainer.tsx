import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import { RootState } from '../store/modules';
import { ChangeInputAction, CreateAction, RemoveAction, ToggleAction } from '../store/modules/todo';

function TodoListContainer() {

    const dispatch = useDispatch();
    const todoState = useSelector((state: RootState) => state.todoReducer);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(ChangeInputAction(e.currentTarget.value));
    }

    const onToggle = (id: number) => {
        dispatch(ToggleAction(id));
    }

    const onRemove = (id: number) => {
        dispatch(RemoveAction(id));
    }

    const onCreate = () => {
        dispatch(CreateAction(todoState.input));
    }

    return (
        <TodoList
            input={todoState.input}
            todoItems={todoState.todoItems}
            onChange={onChange}
            onCreate={onCreate}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodoListContainer;