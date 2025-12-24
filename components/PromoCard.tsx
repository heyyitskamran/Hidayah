import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PromoCard() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Start Your 7 Days Free Trial</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>FREE</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Experience all premium features</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Try it for free</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3C010', // Yellow/Gold
        borderRadius: 20,
        marginVertical: 10,
        overflow: 'hidden',
    },
    content: {
        padding: 24,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937', // Dark text
        flex: 1,
        marginRight: 10,
    },
    badge: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#CEA00C',
    },
    subtitle: {
        fontSize: 14,
        color: '#4B5563',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonText: {
        color: '#D97706', // Gold-ish text
        fontWeight: 'bold',
        fontSize: 14,
    }
});
