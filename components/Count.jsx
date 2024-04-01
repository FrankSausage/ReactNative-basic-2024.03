import React, { useState } from "react";
import { Image, Button, View, Text } from "react-native";

export default function Count() {
    const [num, setNum] = useState(0);
    return(
        <View style={{margin: "auto", textAlign: "center"}}>
             <Image 
            source={num !== 5 ? require('../assets/img/Jerry_Mouse.png') : require('../assets/img/Jerry_Good.png')}
            style={{margin: 20, padding: 10}}
            />
            <Text style={{textAlign: "center"}}>
            저는 Jerry에요!, 그리고 전 {num !== 5 ? '배고파요' : '배불러요'}!
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: "center"}}>{num}잔</Text>
            <Button 
                onPress={() => {setNum(num+1)}}
                disabled={num >= 5}
                title={num >= 5 ? '잘 먹었습니다!' : '우유 주기'}
            />        
        </View>
    );
}