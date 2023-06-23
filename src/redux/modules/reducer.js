//action이 어떤 결과를 내어야 하는지 정의 
//리듀서 생성
import { ADD,CANCEL,DELETE,DONE } from "./actions";

const initialState={ //초기상태
    todos:[
        {
            id:1,
            text:"todolist만들기",
            isDone:false,
        },
    ],
};

export const reducer=(state=initialState,action) => {
    if(action.type === ADD){
        return {
            todos:[...state.todos,action.todo], //initialState의 todo배열에 새로운 항목을 추가한 state반환
    };
}   else if (action.type===DELETE){
    return {
        todos:[...state.todos.filter((todo)=>todo.id !== action.id)],  //action이 넘겨줄 id를 가지고 Array.filter()메서드 이용해서 id가 동일한 todo 객체를 삭제한 todo반환
    };
}   else if (action.type === DONE){
    return {
        todos:[...state.todos.map((todo)=>todo.id===action.id)]
    };
} else if (action.type === CANCEL){
    return{
        todos:[...state.todos.map((todo)=>todo.id!==action.id)]
    };
} else {
    return state;
}
};