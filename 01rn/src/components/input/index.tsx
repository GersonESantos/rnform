import{ TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    icon: keyof typeof Feather.glyphMap
}

export function Input({ icon }: Props) {
    return (
       <View>
        <Feather name={icon} size={24} color="red"/>
       <TextInput style={styles.control}
       />
       </View>
    );
}