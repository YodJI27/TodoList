import React, {useState} from 'react';
import Card from '../Card/Card';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Modal,
  Text,
} from 'react-native';

const List = props => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    Keyboard.dismiss();
    setTodoList([...todoList, {title: input}]);
    setInput('');
  };

  const completeTask = index => {
    let itemsCopy = [...todoList];
    itemsCopy.splice(index, 1);
    setTodoList(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Введите задачу"
          onChangeText={setInput}
          value={input}
          onSubmitEditing={addTodoItem}
          style={styles.input}></TextInput>
      </View>
      <ScrollView>
        {todoList.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <Card text={item.title} deleteTask={() => completeTask(index)} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
{
  // onPress={() => {
  //   props.navigation.navigate('Home1', {});
  // }}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    marginBottom: 40,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginRight: 15,
    paddingBottom: 6,
    marginBottom: 10,
    minWidth: 250,
    fontSize: 19,
    color: '#808080',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    width: 75,
    height: 31,
  },
  buttonText: {
    marginTop: 4,
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
  },
  modalContainer: {
    backgroundColor: '#808080',
    width: '100%',
    height: '100%',
  },
});

export default List;
