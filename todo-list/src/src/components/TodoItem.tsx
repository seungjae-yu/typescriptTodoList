import React from 'react';

interface Props {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

const TodoItem = ({ text, done, onToggle, onRemove }: Props) => {
    return (
        <div>
            <li>
                <b
                    onClick={onToggle}
                    style={{
                        textDecoration: done ? 'line-through' : 'none'
                    }}
                >
                    {text}
                </b>
                <button style={{ all: 'unset', marginLeft: '0.5rem' }} onClick={onRemove}>[지우기]</button>
            </li>
        </div>
    );
};

export default TodoItem;