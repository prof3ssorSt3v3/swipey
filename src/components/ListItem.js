import { View, Text, Pressable } from 'react-native';
import styles from '../theme/styles';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
//not the `react-native one
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
// import { Gesture, GestureDetector } from 'react-native-gesture-handler';

function RightAction(progress, drag) {
  const styleAnimation = useAnimatedStyle(() => {
    // console.log('showRightProgress:', progress.value);
    // console.log('appliedTranslation:', drag.value);

    return {
      transform: [{ translateX: drag.value + 150 }],
    };
    //drag.value + width from styles.rightAction
  });

  return (
    <Reanimated.View style={[styleAnimation, styles.rightAction]}>
      <Pressable onPress={() => console.log('pressed delete')}>
        <Text style={[styles.rightActionText]}>Delete</Text>
      </Pressable>
    </Reanimated.View>
  );
}

export default function ListItem({ item, index }) {
  // console.log(item);

  return (
    <Swipeable containerStyle={styles.swipeable} friction={2} enableTrackpadTwoFingerGesture rightThreshold={40} renderRightActions={RightAction}>
      <View style={{ flex: 1, paddingBlock: 12, borderBottomWidth: 1, borderBottomColor: '#999' }}>
        <Text style={{ fontSize: 40, color: '#333' }}>{item}</Text>
      </View>
    </Swipeable>
  );
}
