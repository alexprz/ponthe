import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import GalleryYearList from '../components/GalleryYearList.js'
import GalleryUploadList from '../components/GalleryUploadList.js'
//import years_data from '../helpers/GalleryYearsData.js'
import {getAllYearsFromAPI} from '../API/loadImages'
import store from '../store/configureStore'

import { List, ListItem } from 'react-native-elements'

class Upload extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          year_list: [],
          refreshing: true
      }
      this._loadYears();
  }

  _loadYears () {
    getAllYearsFromAPI(store.getState().userInfo.token).then(data => {
        this.setState({
            year_list: data.jsonData.data,
            refreshing: false,
        })
        console.log(this.state.year_list[0].year)
    })
  }

  _displayGalleryEvent = (item) => {
    this.props.navigation.navigate('GalleryEvent', {gallery: item})
  }

  _displayUploadManager = (item) => {
    this.props.navigation.navigate('UploadGallery', {gallery: item})
  }

  _refresh() {
    this.setState({
      refreshing: true
    })
    this._loadYears()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
            Upload
        </Text>
        <Text style={styles.subtitle_style}>
            Choisis une Galerie
        </Text>
        <FlatList
          data={this.state.year_list}
          keyExtractor={(item) => item.year.toString()}
          renderItem={({item}) =>
            <GalleryUploadList
              year={item.year}
              year_galleries={item.galleries}
              displayUploadManager={this._displayUploadManager}/>
            }
          onRefresh = {() => {this._refresh()}}
          refreshing = {this.state.refreshing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop: "5%",
    // backgroundColor: 'transparent',
    height: '100%',
    width: '100%'
  },
  text_style: {
    marginTop: 35,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  subtitle_style: {
      textAlign: 'center',
      // marginLeft: "3%",
      fontSize: 19
  }
})


export default Upload
