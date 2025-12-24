import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

type FeatureItemCardProps = {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string; // Icon bg color
    type: 'navigation' | 'download';
    onPress?: () => void;
};

export default function FeatureItemCard({ title, subtitle, icon, color, type, onPress }: FeatureItemCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.leftContent}>
                <View style={[styles.iconContainer, { backgroundColor: color }]}>
                    {icon}
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>

            <View style={styles.rightContent}>
                {type === 'download' ? (
                    <View style={styles.downloadButton}>
                        <Text style={styles.downloadText}>Download</Text>
                    </View>
                ) : (
                    <Ionicons name="chevron-forward" size={20} color="#6B7280" />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1F2937', // Dark card
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContent: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#9CA3AF',
        fontSize: 12,
        marginTop: 2,
    },
    rightContent: {
        paddingLeft: 10,
    },
    downloadButton: {
        backgroundColor: '#22C55E', // Green
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    downloadText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }
});
