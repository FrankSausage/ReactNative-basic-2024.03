import React, { useState } from "react";
import { Button, View, Text, Image} from 'react-native';

export default function State({name}) {
    const [isHungry, setIsHungry] = useState(true);
return (
    <View style={{margin: "auto"}}>
        <Image 
            source={isHungry ? require('../assets/img/Jerry_Mouse.png') : require('../assets/img/Jerry_Good.png')}
            style={{margin: 20, padding: 10}}
        />
        <Text>
         저는 {name}에요, 그리고 전 {isHungry ? '배고파요' : '배불러요'}!
        </Text>
        <Button onPress={() => {setIsHungry(false);
        }} disabled={!isHungry}
        title={isHungry ? '우유 좀 주세요!' : '고마워요!'} />
    </View>
    );
};