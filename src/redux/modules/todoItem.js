//리듀서에서 정의한 state의 todo 렌더링
import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "./actions";

const TodoItem=({ todo }) => {
    const dispatch = useDispatch();

    const { id, title, isDone }= todo;

    const handleClick =() => {
        dispatch(delete_todo(id));
    };

    return(
        <div>
            <div>
                <div>
                    <div>{title}</div>
                </div>
                <button onClick={handleClick}>{isDone || "X"}</button>
            </div>
        </div>
    );
};

export default TodoItem;