//텍스트 필드가 변경될 떄, 추가버튼을 클릭했을 떄, state조작
import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "./actions";
import { styled } from "styled-components";

const InputBox = styled.input `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const InputForm=()=>{
    const dispatch=useDispatch();

    const[text,setText] = useState('');

    const handleChange=(e)=>{
        const { value } = e.target;

        setText(value);
    };

    const handleClick=()=> {
        const todo={
            title:text,
            isDone:false,
        };

        dispatch(add_todo(todo));
        setText('');
    };

    const handleKeyPress = (e) => {
        if(e.key==="Enter"){
            handleClick();
        }
    };

    const handleDelete =() => {
        
    };

    return (
        <div>
            <InputBox
             type="text"
             placeholder="할 일을 입력하세요"
             onChange={handleChange}
             value={text}
             onKetDown={handleKeyPress}/>
            <Button onClick={handleClick}>추가하기</Button>
        </div>
    );
};

export default InputForm;