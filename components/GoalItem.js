import { StyleSheet } from "react-native";
import { Text, View , Pressable} from 'react-native';

function GoalItem(props) {
    return(
        <>
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}} 
                onPress={props.delete.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressed}>
            
                <Text style={styles.goalText}>
                    {props.goal.item.text}
                </Text>

            </Pressable> 
        </View>
        </>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
},
    goalText: {
    padding: 8,
    color: 'white',
  },
  pressed: {
    opacity: 0.5,
  }
})

