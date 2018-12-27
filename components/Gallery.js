import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GalleryYearList from '../components/GalleryYearList.js'
import years_data from '../helpers/GalleryYearsData.js'

class Gallery extends React.Component {

  _displayGalleryEvent = (item) => {
    this.props.navigation.navigate('GalleryEvent', {event: item})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={years_data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
            <GalleryYearList
              year={item.id}
              year_events={item.events}
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
