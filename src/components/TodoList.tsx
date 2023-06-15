import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../redux/todo/hook";
import { selectTasks } from "../redux/todo/todoSlice";

export default function TodoList() {
    const todoList = useAppSelector(selectTasks);
    return (
        <View>
            <ScrollView style={styles.listItem}>
                {todoList.map((task, key) =>
                    <TodoItem key={key} data={task} />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginHorizontal: 20,
    }
})