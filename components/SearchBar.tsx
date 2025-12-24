import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                placeholder="Search Ayah or keyword in Quran"
                placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity style={styles.aiButton}>
                <Text style={styles.aiButtonText}>AI 360</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginHorizontal: 20,
        marginTop: -30, // Negative margin to overlap Hero
        marginBottom: 20,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 100, // Ensure it sits on top
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#1F2937',
        fontWeight: '500',
    },
    aiButton: {
        backgroundColor: '#CC4BE8', // Pink/Purple from design
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    aiButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }
});
