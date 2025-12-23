import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function NamazHero() {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
            <View style={styles.topRow}>
                <View>
                    <Text style={[styles.dateText, { color: colors.text }]}>14 Ramadan 1445</Text>
                    <Text style={[styles.subDateText, { color: 'gray' }]}>23 December 2025</Text>
                </View>
                <ThemeToggle />
            </View>

            <View style={styles.timesContainer}>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Fajr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>05:30</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Dhuhr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>12:30</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Asr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>03:45</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Maghrib</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>06:15</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Isha</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>08:00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50, // For status bar
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subDateText: {
        fontSize: 14,
    },
    timesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeBox: {
        alignItems: 'center',
    },
    timeLabel: {
        fontSize: 12,
        marginBottom: 4,
    },
    timeValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
