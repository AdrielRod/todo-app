import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskTypes } from "../types";
import { Dispatch, SetStateAction } from "react";

const TASKS_STORAGE_KEY = 'tasks';

export const addNewTask = async (
  text: string,
  tasks: TaskTypes[],
  setAllTasks: Dispatch<SetStateAction<TaskTypes[]>>
) => {
  try {
    const allTasks = tasks.length ? tasks : [];
    const uidTask = allTasks.length + 1;
    const newTask = {
      name: text,
      finished: false,
      key: uidTask.toString(),
    };
    const updatedTasks = [...allTasks, newTask];

    await updateAsyncStorage(updatedTasks);
    setAllTasks(updatedTasks);

    console.log(`Task ${text} adicionada com sucesso.`);
  } catch (error) {
    handleStorageError('Erro ao adicionar task:', error);
  }
};

export const getAllTasks = async () => {
  try {
    const JSONTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    return JSONTasks ? JSON.parse(JSONTasks) : [];
  } catch (error) {
    handleStorageError('Erro ao listar tasks:', error);
    return [];
  }
};

export const updateStatusTask = async (status: boolean, uid: string) => {
  try {
    const allTasks = await getAllTasks();
    const updatedTasks: TaskTypes[] = allTasks.map((task: TaskTypes) =>
      task.key === uid ? { ...task, finished: status } : task
    );

    console.log(updatedTasks);
    await updateAsyncStorage(updatedTasks);
  } catch (error) {
    handleStorageError('Erro ao atualizar status da tarefa:', error);
  }
};

export const deleteTask = async (uid: string) => {
  try {
    const allTasks = await getAllTasks();
    const updatedTasks = allTasks.filter((task: TaskTypes) => task.key !== uid);

    console.log(updatedTasks);
    await updateAsyncStorage(updatedTasks);
  } catch (error) {
    handleStorageError('Erro ao excluir task:', error);
  }
};

export const filteringTaskWithName = async (name: string) => {
  try {
    const allTasks = await getAllTasks();

    return name === '' ? allTasks : allTasks.filter((task: TaskTypes) =>
      task.name.toLowerCase().includes(name.toLowerCase())
    );
  } catch (error) {
    handleStorageError('Erro ao filtrar tasks pelo nome:', error);
    return [];
  }
};

const updateAsyncStorage = async (tasks: TaskTypes[]) => {
  try {
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    handleStorageError('Erro ao atualizar AsyncStorage:', error);
  }
};

const handleStorageError = (message: string, error: any) => {
  Alert.alert(message);
  console.log(`${message} ${error}`);
};
