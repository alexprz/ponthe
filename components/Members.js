import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import MembersOfYearItem from '../components/MembersOfYearItem.js'
import { getMembersFromAPI } from '../API/miscFunctions.js'
import store from '../store/configureStore'

class Members extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      membersByYears: [],
      isLoading: true
    }
    this._getMembers()
  }

  _getMembers() {
    getMembersFromAPI(store.getState().userInfo.token).then(res => {
      data = res.jsonData.team_ponthe
      var membersByYears = []
      for (var i = 0; i < data.length; i++) {
        yearData = {
          year: data[i].year,
          members: data[i].members,
          initCollapsed: (i < 1) ? false : true
        }
        membersByYears.push(yearData)
      }
      this.setState({
        membersByYears: membersByYears,
        isLoading: false
      })
    })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}> Membres du Ponthé </Text>
        <FlatList
          data={this.state.membersByYears}
          keyExtractor={(item) => item.year}
          renderItem={({item}) =>
            <MembersOfYearItem
              yearData={item}
              initCollapsed={item.initCollapsed}
            />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 10,
    marginTop: 25,
    alignItems: 'stretch'
  },
  text_style: {
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  }
})

export default Members
