import React from "react";
import { View, Text, ScrollView, Image, TextInput } from 'react-native';

export default function Cat({name, num}) {
    // const {name, num} = props;
    return(
        <View>
            <Text>Hello, I am {name}.</Text>
            <View>
                <Text>Some more text</Text>
                <Image
                    source={{
                        uri: `https://reactnative.dev/docs/assets/p_cat${num}.png`,
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
        </View>
    );
};
