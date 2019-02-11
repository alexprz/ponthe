import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { ponthe_color } from '../constants'

class MembersOfYearItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.initCollapsed,
    }
  }

  _collapseContent() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    var members = []
    for (var i = 0; i < this.props.yearData.members.length; i++)
      members.push(
        <View key={i} style={styles.job_container}>
          <Text style={styles.job_text}>
            {this.props.yearData.members[i].split(" : ")[0]} :
          </Text>
          <Text style={styles.content_text}>
            {this.props.yearData.members[i].split(" : ")[1]}
          </Text>
        </View>
      )
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          style = {styles.year_container}
          activeOpacity = {.5}
          onPress = {() => this._collapseContent()}>
          <Text style={styles.year_text}> {this.props.yearData.year} </Text>
        </TouchableOpacity>
        <View style={styles.content_container}>
          {(!this.state.collapsed) ? members : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginBottom: 10
  },
  year_container: {
    marginBottom: 5,
    backgroundColor: ponthe_color,
  },
  year_text: {
    padding: 7,
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center'
  },
  content_container: {
    marginHorizontal: 5
  },
  job_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  job_text: {
    marginRight: 2,
    textAlign: 'left',
    fontWeight:'bold'
  },
  content_text: {
    textAlign: 'left'
  }
})

export default MembersOfYearItem
