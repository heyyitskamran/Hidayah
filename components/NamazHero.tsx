import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useLocation } from '../hooks/useLocation';
import { getPrayerTimes } from '../services/PrayerTimesService';

export default function NamazHero() {
    const { location, loading: locationLoading, errorMsg } = useLocation();
    const [prayerData, setPrayerData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if (!locationLoading) {
                // If location is denied/null, it might still return default coordinates logic if implemented in service
                // For now passing undefined lets the service decide or fail gracefully (assume service handles defaults)
                try {
                    const data = await getPrayerTimes(location?.latitude, location?.longitude);
                    setPrayerData(data);
                } catch (e) {
                    console.log("Error fetching prayer times", e);
                } finally {
                    setLoading(false);
                }
            }
        }
        fetchData();
    }, [location, locationLoading]);

    if (loading || locationLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#EDA05D" />
            </View>
        );
    }

    const { timings, date } = prayerData?.data || {};
    const hijriDate = date?.hijri;
    const gregorianDate = date?.gregorian;

    // TODO: Ideally calculate "Next Prayer" dynamically based on current time.
    // For this design mock, we'll hardcode or show generic info as user requested visual copy first.
    // In a real app, uses moment/date-fns to compare current time with timings.

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#A858DA', '#F5A64C']} // Purple to Orange gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <View>
                        <View style={styles.nowRow}>
                            <Ionicons name="time-outline" size={18} color="white" />
                            <Text style={styles.nowText}> Now: MAGHRIB</Text>
                        </View>
                        <Text style={styles.upcomingText}>Upcoming: ISHA - 07:25 pm</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        {/* Arabic Date Mockup - ideally comes from API */}
                        <Text style={styles.arabicDateText}>
                            {hijriDate?.day} {hijriDate?.month?.ar || 'رجب'}، {hijriDate?.year}
                        </Text>
                        <Text style={styles.gregorianDateText}>
                            {gregorianDate?.day} {gregorianDate?.month?.en}, {gregorianDate?.year}
                        </Text>
                    </View>
                </View>

                {/* Main Illustration Area */}
                <View style={styles.illustrationContainer}>
                    {/* Placeholder for the person praying illustration */}
                    <View style={styles.illustrationPlaceholder}>
                        <Ionicons name="person" size={80} color="#5E308C" />
                        <Text style={{ color: '#5E308C', marginTop: 10, fontWeight: '600' }}>Praying Illustration</Text>
                    </View>
                </View>

                {/* Background Star Watermark (Optional Visual Flair) */}
                <Ionicons name="star" size={150} color="rgba(255,255,255,0.1)" style={styles.bgStar} />

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 380, // Increased height to accommodate status bar and content
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
        // paddingBottom will be handled by search bar overlap, no margin bottom here for overlap effect
        backgroundColor: 'transparent', // Ensure no background color leaks
    },
    loadingContainer: {
        height: 380,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    gradient: {
        flex: 1,
        padding: 20,
        paddingTop: 60, // Add padding for status bar
        justifyContent: 'space-between',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 10,
    },
    nowRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    nowText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    upcomingText: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 12,
    },
    dateContainer: {
        alignItems: 'flex-end',
    },
    arabicDateText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    gregorianDateText: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 12,
    },
    illustrationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    illustrationPlaceholder: {
        width: 160,
        height: 160,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgStar: {
        position: 'absolute',
        top: -20,
        right: -30,
        transform: [{ rotate: '15deg' }],
        zIndex: 0,
    },
});
