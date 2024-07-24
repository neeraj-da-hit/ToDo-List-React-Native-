import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale as hs, verticalScale as vs, moderateScale as ms} from 'react-native-size-matters';

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <View style={styles.box}/>
        <Text style={styles.itemsText}>{props.text}</Text>
      </View>
      <View style={styles.tiniBox}/>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  items:{
    backgroundColor:'#FFF',
    padding:ms(15),
    borderRadius:ms(10),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:8
  },
  box:{
    height:ms(24),
    width:ms(24),
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:ms(5),
    marginRight:ms(10),
  },
  itemsLeft:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
  },
  tiniBox:{
    height:ms(15),
    width:ms(15),
    borderRadius:ms(5),
    borderWidth:ms(2),
    borderColor:'#55BCF6'
  },
  itemsText:{
    maxWidth:'80%',
  }
})