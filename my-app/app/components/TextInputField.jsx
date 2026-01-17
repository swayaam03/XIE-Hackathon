import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Animated, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const TextInputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry,
  keyboardType = 'default',
  errorMessage,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(!secureTextEntry)
  const scaleAnim = new Animated.Value(1)

  const handleFocus = () => {
    setIsFocused(true)
    Animated.spring(scaleAnim, {
      toValue: 1.02,
      useNativeDriver: false,
    }).start()
    onFocus && onFocus()
  }

  const handleBlur = () => {
    setIsFocused(false)
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: false,
    }).start()
    onBlur && onBlur()
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Animated.View
        style={[
          styles.inputWrapper,
          {
            transform: [{ scale: scaleAnim }],
            borderColor: isFocused ? '#2563EB' : errorMessage ? '#EF4444' : '#E2E8F0',
            backgroundColor: isFocused ? '#F0F9FF' : '#FFFFFF',
          },
        ]}
      >
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color={isFocused ? '#2563EB' : '#64748B'}
            style={styles.iconLeft}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#CBD5E1"
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCapitalize="none"
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            activeOpacity={0.6}
            style={styles.iconRight}
          >
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color={isFocused ? '#2563EB' : '#64748B'}
            />
          </TouchableOpacity>
        )}
      </Animated.View>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  iconLeft: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
    paddingVertical: 0,
  },
  iconRight: {
    padding: 8,
    marginLeft: 10,
  },
  errorMessage: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 6,
    fontWeight: '500',
  },
})

export default TextInputField
