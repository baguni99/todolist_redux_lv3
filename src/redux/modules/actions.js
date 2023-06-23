//action 생성 및 지정
//action생성 함수는 컴포넌트에서 받아온 인자를 전달받아 사용
export const ADD="ADD_TODO"
export const DELETE="DELETE_TODO"
export const DONE="DONE_TODO"
export const CANCEL="CANCEL_TODO"

let id=1;

export const add_todo=(todo)=>{
    return{
        type:ADD,
        todo:{
            id:id++,
            title:todo.title,
            isDone:!todo.isDone
        },
    };
};

export const delete_todo=(id)=>{
    return {
        type:DELETE,
        id,
    };
};

export const done_todo=(id,todo)=>{
    return {
        type:DONE,
        id:id,
        title:todo.title,
        isDone:todo.isDone
    };
    };
export const cancel_todo=(id,todo)=>{
    return {
        type:CANCEL,
        id:id,
        title:todo.title,
        isDone:!todo.isDone
    };
};