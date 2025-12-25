import { View, Text, StyleSheet, FlatList, StatusBar, Platform } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../../components/SearchBar';
import HadithBookCard from '../../components/HadithBookCard';
import NamazHero from '../../components/NamazHero';

const HADITH_BOOKS = [
    { id: '1', title: 'Sahih Al-Bukhari', arabicTitle: 'صحيح البخاري', count: '7,563', color: '#10B981' }, // Emerald
    { id: '2', title: 'Sahih Muslim', arabicTitle: 'صحيح مسلم', count: '7,563', color: '#3B82F6' }, // Blue
    { id: '3', title: 'Sunan An-Nasa\'i', arabicTitle: 'سنن النسائي', count: '5,758', color: '#8B5CF6' }, // Violet
    { id: '4', title: 'Sunan Abi Dawud', arabicTitle: 'سنن أبي داود', count: '5,274', color: '#F59E0B' }, // Amber
    { id: '5', title: 'Jami\' At-Tirmidhi', arabicTitle: 'جامع الترمذي', count: '3,956', color: '#EF4444' }, // Red
    { id: '6', title: 'Sunan Ibn Majah', arabicTitle: 'سنن ابن ماجه', count: '4,341', color: '#EC4899' }, // Pink
    { id: '7', title: 'Muwatta Malik', arabicTitle: 'موطأ مالك', count: '1,720', color: '#6366F1' }, // Indigo
    { id: '8', title: '40 Hadith Nawawi', arabicTitle: 'الأربعون النووية', count: '42', color: '#14B8A6' }, // Teal
];

export default function HadithScreen() {

    const renderHeader = () => (
        <View>
            <NamazHero />
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hadith Collections</Text>
                <Text style={styles.headerSubtitle}>Explore the authentic sayings of the Prophet ﷺ</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <FlatList
                data={HADITH_BOOKS}
                keyExtractor={(item) => item.id}
                numColumns={2}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <HadithBookCard
                        title={item.title}
                        arabicTitle={item.arabicTitle}
                        hadithCount={item.count}
                        color={item.color}
                        onPress={() => console.log(`Pressed ${item.title}`)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 4,
        paddingTop: 0,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 4,
    },
    searchContainer: {
        paddingHorizontal: 0,
        zIndex: 20, // Ensure search bar sits on top of hero
    },
    listContent: {
        paddingHorizontal: 0, // Removed to allow full-width Hero
        paddingBottom: 100, // Increased padding to clear bottom tab bar
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: 12, // Added to align cards with header (12 + 8 margin = 20)
    },
});
