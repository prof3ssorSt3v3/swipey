import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  rightAction: {
    width: 150,
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightActionText: {
    color: 'white',
  },
  swipeable: {
    backgroundColor: 'white',
  },
});

export default styles;
