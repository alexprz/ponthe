import React from 'react'
import { StyleSheet, View, Text, FlatList, SectionList,
  ImageBackground, TouchableOpacity } from 'react-native'
import GalleryEventGrid from '../components/GalleryEventGrid.js'
import ImageItem from './ImageItem'
import {ponthe_color} from '../constants'
import { List, ListItem } from 'react-native-elements'

class GalleryUploadList extends React.Component {
  render() {

    console.log(this.props.year_galleries)
    return (

        // <View style={styles.container}>
        //         <FlatList
        //           data={[
        //             {key: 'Devin'},
        //             {key: 'Jackson'},
        //             {key: 'James'},
        //             {key: 'Joel'},
        //             {key: 'John'},
        //             {key: 'Jillian'},
        //             {key: 'Jimmy'},
        //             {key: 'Julie'},
        //           ]}
        //           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        //         />
        // </View>

    // <View style={styles.container}>
    //     <SectionList
    //       sections={[
    //         {title: 'D', data: ['Devin']},
    //         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    //       ]}
    //       renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    //       renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    //       keyExtractor={(item, index) => index}
    //     />
    //  </View>
      <View style={styles.main_container}>
        <Text style={styles.year_text}> {this.props.year} </Text>
        <FlatList

          data={this.props.year_galleries}
          keyExtractor={(item) => item.toString()}
          horizontal={true}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => this.props.displayUploadManager(item)}>
              <ImageItem
                path={item.file_path}
                style={styles.image}
                textStyle={styles.event_text}
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
    marginTop: 25
  },
  year_text: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 25
  },
  event_text_container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  event_text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textShadowColor: "black",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  image: {
    flex: 1,
    margin: 5,
    width: 226,
    height: 226,
  }
})

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

export default GalleryUploadList
