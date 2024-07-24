import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import React from 'react'
import Task from '../../components/Task'
import { scale as hs, verticalScale as vs, moderateScale as ms } from 'react-native-size-matters';
import { useState } from 'react'

const index = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    // console.log(taskItems);
    setTaskItems([...taskItems, task]);
    setTask(null)
  }
const taskDone = (index) =>{
  let cpTask = [...taskItems];
  cpTask.splice(index,1);
  setTaskItems(cpTask);
}
  return (
    <View style={styles.container}>
      {/* today's tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.textTitle}>Today's task</Text>
        {/* all task items goes here ! */}
        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return <TouchableOpacity key={index} onPress={()=>taskDone(index)}>
                <Task  text={item} />
              </TouchableOpacity> 
            })
          }
          {/* <Task text={'tast 1'}/>
          <Task text={'tast 2'}/> */}
        </View>
      </View>
      {/* write a tast here */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'heigh'}
        style={styles.containerWriteTask}>
        <TextInput placeholder='Write a task' style={styles.input} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.containerAdd}>
            <Text style={styles.textAdd}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1
  },
  taskWrapper: {
    paddingTop: vs(54),
    paddingHorizontal: hs(20),
    marginBottom: ms(20)
  }
  ,
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  containerWriteTask: {
    position: 'absolute',
    bottom: ms(10),
    width: '100%',
    // backgroundColor:'#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    padding: 10
  },
  input: {
    backgroundColor: '#FFF',
    width: '76%',
    maxWidth: 300,
    height: 65,
    borderRadius: ms(32),
    paddingHorizontal: ms(25),
    paddingVertical: ms(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    fontSize: 18,
  },
  containerAdd: {
    height: ms(63),
    width: ms(63),
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  textAdd: {
    fontSize: 22,
    color: '#c0c0c9'
  }
})