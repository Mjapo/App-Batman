import React from 'react';
import { View ,Text ,Image} from 'react-native';

import { styles } from './BatLogoStyles';
import batLog from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <View >
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
 
 
<Image 
source={batLog}
style={{resizeMode:'contain',height:200}}
/>
    </View>
  );
}



