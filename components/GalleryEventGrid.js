import React from 'react'
import { StyleSheet, View, Text, FlatList,
  ImageBackground, TouchableOpacity } from 'react-native'
import event_data from '../helpers/GalleryEventData.js'

class GalleryEventGrid extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={event_data.images}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          renderItem={({item}) =>
            <ImageBackground style={styles.image}>
              <View style={styles.image_text_container}>
                <Text style={styles.image_text}> {item.id} </Text>
              </View>
            </ImageBackground>}
        />
      </View>
    )
  }
}

const numColumns = 2

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: 'white'
  },
  image_text_container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
    color: 'white'
  },
  image: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: '#DDDDDD'
  }
})

export default GalleryEventGrid
