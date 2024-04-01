import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, },
  item: { padding: 10, fontSize: 20, height: 40, },
});

export default function FlatListBasics() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:20, padding:15,fontWeight: 'bold'}}>내가 좋아하는 과일</Text>
      <FlatList
        data={[
          {key: '애플'},
          {key: '망고'},
          {key: '애플망고'},
          {key: '바나나'},
          {key: '포도'},
          {key: '오렌지'},
          {key: '감귤'},
          {key: '레몬'},
          {key: '자몽'},
          {key: '몽키바나나'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

