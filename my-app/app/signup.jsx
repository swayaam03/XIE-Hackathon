import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import TextInputField from './components/TextInputField'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSignup = () => {
    const newErrors = {}

    if (!name) {
      newErrors.name = 'Name is required'
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the Terms of Service'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Signup attempt:', { name, email, password, agreeTerms })
      // Add signup logic here
    }
  }

  const handleGoBack = () => {
    // Handle back navigation
    console.log('Go back to login')
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#64748B" />
          </TouchableOpacity>
          <Text style={styles.appName}>Civic Report</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Card Container */}
        <View style={styles.cardContainer}>
          {/* Heading */}
          <Text style={styles.heading}>Create an Account?</Text>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Name Input */}
            <TextInputField
              label="Name"
              placeholder="Johan orindo"
              icon="person"
              value={name}
              onChangeText={(text) => {
                setName(text)
                if (errors.name) setErrors({ ...errors, name: '' })
              }}
              errorMessage={errors.name}
            />

            {/* Email Input */}
            <TextInputField
              label="Email"
              placeholder="joedoe75@gmail.com"
              icon="email"
              value={email}
              onChangeText={(text) => {
                setEmail(text)
                if (errors.email) setErrors({ ...errors, email: '' })
              }}
              keyboardType="email-address"
              errorMessage={errors.email}
            />

            {/* Password Input */}
            <TextInputField
              label="Password"
              placeholder="••••••••"
              icon="lock"
              value={password}
              onChangeText={(text) => {
                setPassword(text)
                if (errors.password) setErrors({ ...errors, password: '' })
              }}
              secureTextEntry={true}
              errorMessage={errors.password}
            />

            {/* Terms Agreement */}
            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={[styles.checkbox, agreeTerms && styles.checkboxActive]}
                onPress={() => {
                  setAgreeTerms(!agreeTerms)
                  if (errors.terms) setErrors({ ...errors, terms: '' })
                }}
              >
                {agreeTerms && (
                  <MaterialIcons name="check" size={14} color="#2563EB" />
                )}
              </TouchableOpacity>
              <View style={styles.termsTextContainer}>
                <Text style={styles.termsText}>I agree to the </Text>
                <TouchableOpacity>
                  <Text style={styles.termsLink}>Terms of Service</Text>
                </TouchableOpacity>
              </View>
            </View>
            {errors.terms && <Text style={styles.errorMessage}>{errors.terms}</Text>}

            {/* Create Account Button */}
            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignup}
              activeOpacity={0.8}
            >
              <Text style={styles.signupButtonText}>Create account</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>Or Sign in with</Text>
              <View style={styles.divider} />
            </View>

            Social Login Buttons
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="facebook" size={24} color="#1877F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="google" size={24} color="#EA4335" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="apple" size={24} color="#000000" />
              </TouchableOpacity>
            </View>

            {/* Login Link */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleGoBack}>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#707070',
  },
  content: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 28,
    textAlign: 'center',
  },
  formSection: {
    gap: 0,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: -4,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginRight: 8,
    flexShrink: 0,
  },
  checkboxActive: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
  },
  termsTextContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  termsText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  termsLink: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: -12,
    marginBottom: 12,
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  signupButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 13,
    color: '#64748B',
  },
  loginLink: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
  },
})