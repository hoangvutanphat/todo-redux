import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task } from "../../interface/model"
import { RootState } from '../store'
type RecordType = {
    id: number
    taskName: string,
    deadline: string,
}
const initialState = {
    tasks: [],
} as {
    tasks: RecordType[],
}

const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTask = {
                id: action.payload.id,
                taskName: action.payload.taskName,
                deadline: action.payload.deadline,
            }
            state.tasks = [...state.tasks, newTask]
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((task: RecordType) => task.id !== action.payload)
        },
        deleteTodoById: (state, action) => {
            const index = state.tasks.map((task: RecordType) => task.id).indexOf(action.payload)
            state.tasks.splice(index, 1)
        },
        updateTodoById: (state, action) => {
            const updateTask = {
                id: action.payload.id,
                taskName: action.payload.newTaskName,
                deadline: action.payload.newDeadline,
            }
            state.tasks.forEach((task, index) => { if (task.id === updateTask.id) { state.tasks[index] = updateTask } })
        },
    },
}
)
export const { addTodo, deleteTodo, deleteTodoById, updateTodoById } = todoSlice.actions
export const selectTasks = (state: RootState) => state.tasks
export const selectTaskById = (state: RootState, id: number) => state.tasks[id]
export default todoSlice.reducer  