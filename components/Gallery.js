import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GalleryYearList from '../components/GalleryYearList.js'
import years_data from '../helpers/GalleryYearsData.js'
import {getAllYearsFromAPI} from '../API/loadImages'

class Gallery extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          year_list: [],
          isLoading: false
      }
      this._loadYears()
      console.log("chibre")
      // console.log(this.state.year_list)
  }

  _loadYears () {
    this.setState({isLoading: true})
    getAllYearsFromAPI().then(data => {
        this.setState({
            year_list: data.jsonData.data,
            isLoading: false
        })
        console.log(this.state.year_list[0].year)
    })
  }

  _displayGalleryEvent = (item) => {
    this.props.navigation.navigate('GalleryEvent', {gallery: item})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.year_list}
          keyExtractor={(item) => item.year.toString()}
          renderItem={({item}) =>
            <GalleryYearList
              year={item.year}
              year_galleries={item.galleries}
              displayGalleryEvent={this._displayGalleryEvent}/>
            }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default Gallery
