import { FlatList } from 'react-native';
import ListItem from './ListItem';
import styles from '../theme/styles';

const SET = new Set(['ape', 'baboon', 'bonobo', 'chimp', 'gibbon', 'gorilla', 'lemur', 'macaque', 'marmoset', 'orangutan', 'tamarin', 'tarsier']);
const DATA = Array.from(SET);

export default function List() {
  return (
    <FlatList
      data={DATA}
      renderItem={ListItem}
      keyExtractor={(item, index) => item}
      ListEmptyComponent={() => (
        <View>
          <Text>No Primates for You!</Text>
        </View>
      )}
      style={{ width: '100%', paddingInline: 12 }}
    />
  );
}
