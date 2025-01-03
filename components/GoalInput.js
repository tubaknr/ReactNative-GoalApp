import { StyleSheet } from "react-native";
import { Text, TextInput, TouchableOpacity, Modal,Image, Button, View } from 'react-native';
import { useState } from 'react';

function GoalInput(props){

  // single goals
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText); // doldur
    };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // boşalt
    }

    return(
        <>
        <Modal visible={props.visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <Image
                    style={styles.image} 
                    source={require('../assets/images/goal.png')} />

                <View style={styles.inputContainer}>


                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your goals!"
                        placeholderTextColor="#ccc"
                        onChangeText={goalInputHandler}
                        value={enteredGoalText}/>
                    
                </View>
                        
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={addGoalHandler}>
                           
                           <Text 
                                style={styles.buttonText}>
                                    Add Goal!
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={props.onCancel} 
                            style={styles.buttonGoBack}>
                            
                            <Text 
                                style={styles.buttonGoBackText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        
                </View>
            </View>
        </Modal>
        </>
    )
};

export default GoalInput;


const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '110%',
    alignItems: 'center',
    color: 'white',
    borderRadius: 6
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  },
  buttonContainer:{
    flexDirection: 'row',
  },
  buttonGoBack:{
    backgroundColor:'#5e0acc',
    padding: 10,
    borderRadius: 5,  
    paddingHorizontal: 25,
    width: '40%'
  },
  buttonGoBackText:{
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(49, 27, 107, 1)',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%'
},
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    width: '90%',
    backgroundColor: '#311b6b',
    padding: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#cccccc',
  },
  button:{
    width: '40%',
    backgroundColor: '#2196F3',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
    buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    margin: 2,
    textAlign: 'center',
  },
});

