import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function QuranHero() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#A858DA', '#F5A64C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.title}>Al-Quran</Text>
                        <Text style={styles.subTitle}>Maghrib - 06:45 pm</Text>
                    </View>
                    <Text style={styles.arabicTitle}>القرآن</Text>
                </View>

                {/* Main Illustration Area */}
                <View style={styles.illustrationContainer}>
                    {/* Placeholder for the person reading quran illustration */}
                    <View style={styles.illustrationPlaceholder}>
                        <FontAwesome5 name="quran" size={60} color="#5E308C" />
                    </View>
                </View>

                {/* Background Decoration */}
                <View style={styles.circleDecoration} />

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 380,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    gradient: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        justifyContent: 'space-between',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 10,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    subTitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        marginTop: 4,
    },
    arabicTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    illustrationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    illustrationPlaceholder: {
        width: 180,
        height: 180,
        // backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleDecoration: {
        position: 'absolute',
        top: -50,
        left: -50,
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)',
        zIndex: 0,
    },
});
