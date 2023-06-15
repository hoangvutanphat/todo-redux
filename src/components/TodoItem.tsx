import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useAppDispatch } from "../redux/todo/hook";
import { deleteTodoById } from '../redux/todo/todoSlice';
import EditModal from './EditModal';


interface TodoItemProps {
    data: {
        id: number;
        taskName: string;
        deadline: string;
    }
}

export default function TodoItem(props: TodoItemProps) {
    const { id, taskName, deadline } = props?.data
    const task = { id, taskName, deadline }
    const dispatch = useAppDispatch()

    const handleCompletedTask = (completedTaskId: number) => {
        dispatch(deleteTodoById(completedTaskId))
    }

    const [stateShow, setStateShow] = useState(false)

    const toggleModal = () => {
        setStateShow(!stateShow)
    }
    return (
        <View style={styles.todoItem}>
            <Text style={styles.taskInfo}>{taskName} </Text>
            <Text style={styles.taskInfo}> {deadline} min(s)</Text>
            <View>
                <Button icon='check' label="Done" theme="primary"
                    onPress={() => handleCompletedTask(id)}></Button>
                <Button icon='pencil' label="Edit" theme="secondary"
                    onPress={toggleModal}></Button>
                <EditModal data={task} show={stateShow} setShow={setStateShow} />
            </View>

        </View >

    )
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: "center",
    },
    taskInfo: {
        fontSize: 16,
        fontWeight: "bold",
        width: "35%",
    },
})