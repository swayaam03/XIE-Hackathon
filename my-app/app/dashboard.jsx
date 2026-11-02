import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Test2 Branch Alternative Dashboard implementation (Conflicts with main)
export default function Dashboard() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>⚠️ Conflicting Dashboard Version from test2 branch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: { flex: 1, backgroundColor: '#ffeedd', padding: 20 },
  text: { fontSize: 18, color: '#aa3300', fontWeight: 'bold' }
})
