import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

import React from 'react';
import { useAppDispatch, useAppSelector } from "../redux/todo/hook";
import { addTodo } from '../redux/todo/todoSlice';
import TodoList from './TodoList';


let id = 0;

export default function AddForm() {
    const [taskName, setTaskName] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

    const dispatch = useAppDispatch()

    const addTask = () => {
        const task = {
            id: id++,
            taskName: taskName,
            deadline: deadline
        }
        dispatch(addTodo(task))
        setTaskName("")
        setDeadline("")
    }

    return (
        <View>
            <View style={styles.workField}>
                <Text style={styles.headerWorkField}>Todo APP</Text>
                <View>
                    <TextInput
                        style={styles.inputWorkField}
                        placeholder='Work to do'
                        value={taskName}
                        onChangeText={text => setTaskName(text)}>
                    </TextInput>
                    <TextInput
                        style={styles.inputWorkField}
                        placeholder='Deadline ( ... mins)'
                        value={deadline}
                        onChangeText={(text) => setDeadline(text)}>
                    </TextInput>
                </View>
                <Pressable
                    style={styles.btnAdd}
                    onPress={addTask}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#fff" }}>ADD</Text>
                </Pressable>
            </View>
            <TodoList />
        </View>

    )
}
const styles = StyleSheet.create({
    workField: {
        alignItems: 'center',
        backgroundColor: '#AEE2FF',
        padding: 10,
        marginBottom: 5,
    },
    headerWorkField: {
        fontSize: 60,
        color: '#2B2A4C',
        margin: 10,
    },
    inputWorkField: {
        height: 40,
        width: 300,
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 18,
        backgroundColor: '#ECF8F9',
        borderColor: '#ECF8F9',
    },
    btnAdd: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#F9E0BB',
        borderColor: '#9DB2BF',
        textAlign: 'center',
    },
});
