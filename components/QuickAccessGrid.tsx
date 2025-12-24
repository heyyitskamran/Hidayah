import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

type GridItemProps = {
    title: string;
    icon: React.ReactNode;
    color: string;
};

const GridItem = ({ title, icon, color }: GridItemProps) => (
    <TouchableOpacity style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
            {icon}
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
);

export default function QuickAccessGrid() {
    return (
        <View style={styles.container}>
            {/* Row 1 */}
            <View style={styles.row}>
                <GridItem
                    title="Ayah of the Day"
                    color="rgba(100, 70, 180, 0.2)"
                    icon={<MaterialCommunityIcons name="book-open-page-variant" size={24} color="#A858DA" />}
                />
                <GridItem
                    title="Hadith of the Day"
                    color="rgba(34, 197, 94, 0.2)"
                    icon={<FontAwesome5 name="scroll" size={20} color="#22C55E" />}
                />
            </View>

            {/* Row 2 */}
            <View style={styles.row}>
                <GridItem
                    title="Islamic Tips"
                    color="rgba(59, 130, 246, 0.2)"
                    icon={<Ionicons name="bulb" size={24} color="#3B82F6" />}
                />
                <GridItem
                    title="Bookmarks"
                    color="rgba(234, 179, 8, 0.2)"
                    icon={<Ionicons name="bookmark" size={24} color="#EAB308" />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 80, // Space for bottom tab bar
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#111827', // Dark Blue/Black from design
        width: '48%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1.2, // Boxy shape
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30, // Circle
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
