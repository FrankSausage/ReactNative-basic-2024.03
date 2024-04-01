import React from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, },
  sectionHeader: { paddingTop:2, paddingRight: 10, paddingBottom: 2, paddingLeft: 10, 
    fontSize: 16, fontWeight: 'bold', backgroundColor: 'rgba(247, 247, 247, 1.0)'},
  item: { padding: 10, fontSize: 20, height: 40, },
});

export default function SectionListBasic() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:20, padding:15,fontWeight:2}}>내가 좋아하는 과일</Text>
      <SectionList
        sections={[
          {title:'토종', data:['참외','감','배']},
          {title:'수입', data:['Banana','Mango','Orange']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        res
        keyExtractor={item => `basicListEntry: ${item}`}
      />
    </View>
  );
};

