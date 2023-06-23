//reducer에 존재하는 state인 todos를 이용해 TodoItem렌더링
//map함수를 이용해서 todo를 하나씩 받아오고, TodoItem컴포넌트에 props로 넘겨준다.

import React from "react";
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    //const todoState = useSelector((state) => state.todos);
    //const todos = todoState ? todoState : [];
    const todos = useSelector((state) => state.todos);
    const todoList = Array.isArray(todos) ? todos : []; //todos가 배열인지 확인, 아니라면 빈배열 할당
     //useSelector을 이용해서 state가져옴
    //const TodoList = todos ? todos : [];
    //console.log("TodoList:", todos);

    return(
        <div>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;