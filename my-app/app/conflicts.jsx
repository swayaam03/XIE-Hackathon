import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Link } from 'expo-router'

const Conflicts = () => {
  const [resolved, setResolved] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Conflict Workbench</Text>
          <Text style={styles.subtitle}>Target: calc.py (Branch: main vs feature/divide)</Text>
        </View>

        {/* Diff Cards */}
        <View style={styles.diffBox}>
          <View style={styles.diffHeader}>
            <Text style={styles.diffHeaderTitle}>Branch: main (Local)</Text>
          </View>
          <Text style={styles.codeText}>{`def calculate(a, b):\n    return a * b`}</Text>
        </View>

        <View style={styles.diffBox}>
          <View style={styles.diffHeader}>
            <Text style={styles.diffHeaderTitle}>Branch: feature/divide (Incoming)</Text>
          </View>
          <Text style={styles.codeText}>{`def calculate(a, b):\n    return a / b`}</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.resolveBtn} 
          onPress={() => setResolved(!resolved)}
        >
          <Text style={styles.resolveBtnText}>
            {resolved ? '↺ Reset Conflict' : '✨ Resolve with MergeMind AI'}
          </Text>
        </TouchableOpacity>

        {/* Result */}
        {resolved && (
          <View style={[styles.diffBox, styles.resolvedBox]}>
            <View style={[styles.diffHeader, styles.resolvedHeader]}>
              <Text style={styles.resolvedHeaderTitle}>✅ MergeMind Resolution</Text>
            </View>
            <Text style={styles.codeText}>{`def calculate(a, b, op="multiply"):\n    if op == "divide":\n        return a / b\n    return a * b`}</Text>
          </View>
        )}

        {/* Back Link */}
        <Link href="/dashboard" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back to Dashboard</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  )
}

export default Conflicts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F0F6FC',
  },
  subtitle: {
    fontSize: 13,
    color: '#8B949E',
    marginTop: 4,
  },
  diffBox: {
    backgroundColor: '#161B22',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#30363D',
    marginBottom: 16,
    overflow: 'hidden',
  },
  resolvedBox: {
    borderColor: '#238636',
    marginTop: 8,
  },
  diffHeader: {
    backgroundColor: '#21262D',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#30363D',
  },
  resolvedHeader: {
    backgroundColor: 'rgba(35, 134, 54, 0.2)',
    borderBottomColor: '#238636',
  },
  diffHeaderTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8B949E',
  },
  resolvedHeaderTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3FB950',
  },
  codeText: {
    padding: 12,
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#E6EDF3',
    lineHeight: 18,
  },
  resolveBtn: {
    backgroundColor: '#7C3AED',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  resolveBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  backButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#58A6FF',
    fontSize: 14,
  },
})

