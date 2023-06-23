// 리덕스 스토어에 reducer을 넣어주는 작업
import { createStore } from "redux"
import { reducer } from "../modules/reducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    todos:reducer
})
const store = createStore(rootReducer)

export default store