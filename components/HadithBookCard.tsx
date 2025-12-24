import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HadithBookCardProps = {
    title: string;
    arabicTitle: string;
    hadithCount: string;
    color: string;
    onPress?: () => void;
};

export default function HadithBookCard({ title, arabicTitle, hadithCount, color, onPress }: HadithBookCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <MaterialCommunityIcons name="book-open-page-variant" size={32} color="white" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.arabicTitle}>{arabicTitle}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{hadithCount} Hadiths</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        margin: 8,
        flex: 1, // Logic handled by parent FlatList column wrapper
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        alignItems: 'center',
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    textContainer: {
        alignItems: 'center',
    },
    arabicTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 4,
        fontFamily: 'System', // Or a custom Arabic font if available
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 4,
        textAlign: 'center',
    },
    count: {
        fontSize: 12,
        color: '#6B7280',
    },
});
