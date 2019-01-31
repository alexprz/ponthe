import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import {getLatestImagesFromAPI} from '../API/loadImages'
import ImageItem from './ImageItem'

class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          file_list: [],
          isLoading: false
      }
      this._loadImages()
  }

  _loadImages () {
    this.setState({isLoading: true})
    getLatestImagesFromAPI().then(data => {
        this.setState({
            file_list: data.jsonData.latest_files,
            isLoading: false
        })
    })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
          Dernières photos ajoutées
        </Text>
        <View style={styles.main_container}>
          <FlatList
            data={this.state.file_list}
            keyExtractor={(item) => item.file_path.toString()}
            numColumns={numColumns}
            renderItem={({item}) => <ImageItem file_info={item}/>}
          />
        </View>
      </View>
    )
  }
}

const numColumns = 2

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 10,
  },
  text_style: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)
