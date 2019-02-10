import React from 'react'
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native'
import { Accordion } from 'react-native-collapsible/Accordion'
import { getMembersFromAPI } from '../API/miscFunctions.js'
import store from '../store/configureStore'

class Members extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sections: [],
      activeSections: [],
      isLoading: true
    }
    this._getMembers()
  }

  _membersDataToSections(data) {
    var sections = []
    var i
    for (i = 0; i < data.length; i++) {
      section = {
        title: data[i].year,
        content: data[i].members
      }
      sections.push(section)
    }
    return sections
  }

  _getMembers() {
    getMembersFromAPI(store.getState().userInfo.token).then(res => {
      sections = this._membersDataToSections(res.jsonData.team_ponthe)
      this.setState({
        sections: sections,
        isLoading: false
      })
    })
  }

  _renderSectionTitle = section => {
    return (
      <View style={styles.main_container}>
        <Text> {section.content} </Text>
      </View>
    )
  }

  _renderHeader = section => {
    return (
      <View style={styles.main_container}>
        <Text> {section.title} </Text>
      </View>
    )
  }

  _renderContent = section => {
    return (
      <View style={styles.main_container}>
        <Text> {section.content} </Text>
      </View>
    )
  }

  _updateSections = activeSections => {
    this.setState({ activeSections })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text> Membres </Text>
        {/*<Accordion
          sections={this.state.sections}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />*/}
        {/*<FlatList
          data={this.state.sections}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => {
            <Text> {item.title} </Text>
            <Text> {item.content} </Text>
          }}
        />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Members
