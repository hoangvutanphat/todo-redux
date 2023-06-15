import React, { useState } from "react";
import { TextInput, View, Text, Modal, StyleSheet, Pressable } from "react-native";
import { useAppDispatch } from "../redux/todo/hook";
import Button from "./Button";
import { updateTodoById } from "../redux/todo/todoSlice";

interface UpdateProps {
    data: {
        id: number,
        taskName: string,
        deadline: string,
    }
    show: boolean
    setShow(show: boolean): void
}
export default function EditModal(props: UpdateProps) {
    const show = props?.show
    const { id, taskName, deadline } = props?.data
    const setShow = props?.setShow

    const dispatch = useAppDispatch()

    const [newTaskName, setNewTaskName] = useState<string>(taskName)
    const [newDeadline, setNewDeadline] = useState<string>(deadline)

    const toggleModal = () => {
        setShow(!show)
    }
    const handleEdit = () => {
        const updateTask = {
            id,
            newTaskName: newTaskName,
            newDeadline: newDeadline
        }
        dispatch(updateTodoById(updateTask))
        setShow(!show)
    }
    return (
        <Modal visible={show} animationType="fade">
            <View>
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.modalTitle}>Edit task</Text>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}> Task: </Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={taskName}
                            onChangeText={setNewTaskName}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLabel}> Deadline ...min: (s)</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={deadline}
                            onChangeText={setNewDeadline}
                        />
                    </View>

                    <Button label={"Save"} theme={"primary"} icon={'pencil'} onPress={handleEdit}></Button>

                    <Button label={"Cancel"} theme={""} icon={'times'} onPress={toggleModal}></Button>
                </View>
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({
    modalContent: {
        alignItems: "center",
        justifyContent: "center",

    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,

    },
    inputLabel: {
        fontSize: 15,
        fontStyle: "italic",
    },
    input: {
        height: 60,
        width: 300,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        padding: 10,
    },

})