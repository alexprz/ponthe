import React from 'react'
import { StyleSheet, View, Text, FlatList, SectionList,
  ImageBackground, TouchableOpacity } from 'react-native'
import GalleryEventGrid from '../components/GalleryEventGrid.js'
import ImageItem from './ImageItem'
import {ponthe_color} from '../constants'
import { List, ListItem } from 'react-native-elements'
import { BASE_URL } from '../constants.js'
import UploadItem from './UploadItem'

class GalleryUploadList extends React.Component {

    render() {
        return (
          <View style={styles.main_container}>
            <Text style={styles.year_text}> {this.props.year} </Text>
            <FlatList
              data={this.props.year_galleries}
              keyExtractor={(item) => item.slug.toString()}
              horizontal={false}
              renderItem={({item}) =>
                <TouchableOpacity
                  onPress={() => this.props.displayUploadManager(item)}>
                  <UploadItem
                    path={item.file_path }
                    title={item.name}
                  />
                </TouchableOpacity>
              }
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 25,
  },
  year_text: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 25
  },
  event_text_container: {
    flexGrow: 1
  },
  event_text: {
    fontSize: 20,
    color: 'black'
  },
  image: {
    flex: 100,
    margin: 5,
    width: 60,
    height: 60,
  }
})


export default GalleryUploadList
