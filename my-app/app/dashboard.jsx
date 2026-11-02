import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Link } from 'expo-router'

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>MergeMind Dashboard</Text>
          <Text style={styles.subtitle}>Intelligent Branch & Conflict Testing Console</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Active Branches</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>96%</Text>
            <Text style={styles.statLabel}>Auto-Resolved</Text>
          </View>
        </View>

        {/* Action Cards */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Conflict Workbench</Text>
          <Text style={styles.cardText}>
            Simulate and test 3-way semantic Git conflict resolutions with MergeMind.
          </Text>
          <Link href="/conflicts" asChild>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Open Conflict Workbench</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Navigation</Text>
          <View style={styles.linksRow}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Back to Login</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/signup" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Create Account</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Dashboard

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
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F0F6FC',
  },
  subtitle: {
    fontSize: 14,
    color: '#8B949E',
    marginTop: 6,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#161B22',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  statNumber: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7C3AED',
  },
  statLabel: {
    fontSize: 12,
    color: '#8B949E',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#161B22',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F0F6FC',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#8B949E',
    marginBottom: 16,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#7C3AED',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  linksRow: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#21262D',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#30363D',
  },
  secondaryButtonText: {
    color: '#F0F6FC',
    fontSize: 13,
  },
})

