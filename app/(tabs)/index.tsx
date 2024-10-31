
import { StyleSheet, View } from 'react-native';
import {SetupProvider} from "@/api/provider/setup";
import { Text } from '@li/src/components/Text';
import { Surface } from '@/kandit-theme/src/components/Surface';

export default function HomeScreen() {
  return (<View style={styles.container}>
    <SetupProvider>
      <View >
          <Text>text(provider): hi</Text>
        <Text>global(provider):hi</Text>
        <Surface style={{width:100,height:100}}></Surface>
      </View>
    </SetupProvider>
    <Text>U8</Text>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});