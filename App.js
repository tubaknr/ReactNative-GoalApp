import { useState } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  // goals list
  const [ courseGoals, setCourseGoals ] = useState([]);


  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    // go back
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){

    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals, 
        {text: enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    // console.log("DELETEEE11")
    setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  };

  return (
    <>
    <StatusBar style="light"/>

    <View style={styles.appContainer}>

      {!modalIsVisible && 
      <Button 
        title="Add New Goal" 
        color='#5e0acc'
        onPress={startAddGoalHandler}/>}

      {
 
        <GoalInput 
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}/>
        
        }

      <View style={styles.goalsContainer}>

        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {

            return(
              <GoalItem 
                goal={itemData} 
                delete={deleteGoalHandler} 
                id={itemData.item.id}/>
            )
          }}/>
      </View>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 30,
    paddingTop: 70,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#1e085a'
  },

  goalsContainer:{
    flex: 1,
    marginTop: 20
  }
});
