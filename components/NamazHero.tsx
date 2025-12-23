import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { useLocation } from '../hooks/useLocation';
import { getPrayerTimes } from '../services/PrayerTimesService';

export default function NamazHero() {
    const { colors } = useTheme();
    const { location, loading: locationLoading, errorMsg } = useLocation();
    const [prayerData, setPrayerData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // Even if location is null (denied/loading), we might want to try fetching with defaults
            // But ideally we wait for location check to finish
            if (!locationLoading) {
                const data = await getPrayerTimes(location?.latitude, location?.longitude);
                setPrayerData(data);
                setLoading(false);
            }
        }
        fetchData();
    }, [location, locationLoading]);

    if (loading || locationLoading) {
        return (
            <View style={[styles.container, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
                <View style={styles.topRow}>
                    <View>
                        <Text style={[styles.dateText, { color: colors.text }]}>Loading...</Text>
                    </View>
                    <ThemeToggle />
                </View>
                <ActivityIndicator size="small" color={colors.primary} />
            </View>
        );
    }

    const { timings, date } = prayerData?.data || {};
    const hijriDate = date?.hijri;
    const gregorianDate = date?.gregorian;

    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
            <View style={styles.topRow}>
                <View>
                    <Text style={[styles.dateText, { color: colors.text }]}>
                        {hijriDate?.day} {hijriDate?.month?.en} {hijriDate?.year}
                    </Text>
                    <Text style={[styles.subDateText, { color: 'gray' }]}>
                        {gregorianDate?.day} {gregorianDate?.month?.en} {gregorianDate?.year}
                        {errorMsg ? ' (Default Location)' : ''}
                    </Text>
                </View>
                <ThemeToggle />
            </View>

            <View style={styles.timesContainer}>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Fajr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>{timings?.Fajr}</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Dhuhr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>{timings?.Dhuhr}</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Asr</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>{timings?.Asr}</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Maghrib</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>{timings?.Maghrib}</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={[styles.timeLabel, { color: colors.text }]}>Isha</Text>
                    <Text style={[styles.timeValue, { color: colors.primary }]}>{timings?.Isha}</Text>
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
