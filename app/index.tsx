import React, { 
  useState, 
  useEffect 
} from 'react';
import { 
  Container, 
  FabButton, 
  IconAdd, Logo, 
  Modal, 
  ModalBackArea, 
  ModalContainer,
  ModalContent, 
  ModalOutside, 
  SubText, 
  Text 
} from '../src/styles';
import { 
  Alert, 
  FlatList, 
  Keyboard 
} from 'react-native';
import CardTask from '../src/components/CardTask';
import InputText from '../src/components/Input';
import { 
  addNewTask, 
  filteringTaskWithName, 
  getAllTasks 
} from '../src/function/tasks';
import { TaskTypes } from '../src/types';

const Home: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [keybordIsActive, setKeyboardIsActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [allTasks, setAllTasks] = useState<TaskTypes[]>([]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    function keyboardDidShow() {
      setKeyboardIsActive(true);
    }

    function keyboardDidHide() {
      setKeyboardIsActive(false);
    }

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    handleGetTasks();
  }, []);

  useEffect(() => {
    handleFilteringTask();
  }, [searchText]);

  const handleGetTasks = async () => {
    const data = await getAllTasks();
    setAllTasks(data);
  };

  const handleFilteringTask = async () => {
    console.log(searchText);
    const tasksFiltered = await filteringTaskWithName(searchText);
    setAllTasks(tasksFiltered);
  };

  const handleAddNewTask = async (task: string) => {
    if (task) {
      try {
        await addNewTask(task, allTasks, setAllTasks);
        setNewTaskText('');
        setIsVisibleModal(false);
      } catch (error) {
        Alert.alert('Erro ao adicionar tarefa');
      }
      return;
    }
    Alert.alert('Digite algo para adicionar.');
  };

  return (
    <Container>
      <Logo source={require('../assets/images/logo.png')} />

      <InputText
        type="search"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Buscar tarefa"
      />

      <Text type="primary">Tarefas do dia</Text>
      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <CardTask data={item} updateTasks={handleGetTasks} />}
      />

      <FabButton onPress={() => setIsVisibleModal(true)}>
        <IconAdd />
      </FabButton>

      <Modal visible={isVisibleModal} animationType="fade" transparent={true}>
        <ModalContainer>
          <ModalOutside isActive={keybordIsActive}>
            <ModalBackArea onPress={() => setIsVisibleModal(false)} />
          </ModalOutside>

          <ModalContent isActive={keybordIsActive}>
            <Logo source={require('../assets/images/logo.png')} />
            <Text type="secondary">Nova tarefa</Text>
            <SubText>Adicione sua nova tarefa</SubText>
            <InputText
              type="send"
              onChangeText={(text) => setNewTaskText(text)}
              value={newTaskText}
              placeholder="Adicionar nova tarefa"
              onPress={handleAddNewTask}
            />
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Home;
