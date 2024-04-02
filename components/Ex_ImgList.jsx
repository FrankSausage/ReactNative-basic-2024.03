import React, { useState } from "react";
import { Image, FlatList, View, Text, StyleSheet, TextInput } from "react-native";

export default function Ex_ImgList() {
    const [fruit, setFruit] = useState('');
    const [fruitList, setFruitList] = useState([{key: '사과'},{key: '바나나'},{key: '망고'},]);

    const addfruit = () => {
        let checkFruit = fruitList.filter(item => item.key.match(fruit));
        if(checkFruit.length > 0){
            setFruit('');
            return;
        }
        setFruitList([...fruitList, {key: fruit}])
        setFruit('');
    }
    return(
        <View style={styles.view}>
            <Image 
                style={styles.image}
                source={{uri: 'https://picsum.photos/200/200'}} />
            <TextInput 
                style={styles.input} 
                value={fruit}
                onChangeText={e => setFruit(e)}
                onSubmitEditing={() => addfruit()}
                placeholder="과일 이름을 입력하세요"/>
           <FlatList data={fruitList}
        renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}/>
        </View>
    );
}

const styles = StyleSheet.create({  
    image: {width:200, height:200, borderRadius: 200/2, margin: 'auto'},
    input: {height: 40, margin: 'auto', marginVertical: 20 , borderWidth: 1, padding: 5},
    text: {fontSize: 20, fontWeight: 'bold', marginBottom: 10, margin: 'auto'},
});
