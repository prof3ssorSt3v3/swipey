import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './theme/styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import List from './components/List';

export default function App() {
  //version 2 of GestureHandler events
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      console.log('tap start');
    })
    .onEnd(() => {
      console.log('tap end');
    });

  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingBlockStart: top }]}>
      <GestureDetector gesture={tapGesture}>
        <Text style={styles.title}>Title</Text>
      </GestureDetector>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}
