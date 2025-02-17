import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            let {question,answers}=action.payload
            return {
                ...state,
                queue: question,
                answers
            }
        },
        MoveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        MovePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetAllAction: (state) => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const { startExamAction, MoveNextAction, MovePrevAction,resetAllAction } = questionReducer.actions;
export default questionReducer.reducer;
