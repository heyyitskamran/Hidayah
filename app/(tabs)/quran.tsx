import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import QuranHero from '../../components/QuranHero';
import SearchBar from '../../components/SearchBar';
import FeatureItemCard from '../../components/FeatureItemCard';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const FEATURES = [
    {
        id: '1',
        title: 'Al-Quran',
        subtitle: 'Read & Listen',
        icon: <FontAwesome5 name="book-open" size={20} color="#10B981" />,
        color: 'rgba(16, 185, 129, 0.2)', // Green tint
        type: 'navigation' as const,
    },
    {
        id: '2',
        title: 'Search With AI360',
        subtitle: 'Smart Search',
        icon: <MaterialCommunityIcons name="robot" size={24} color="#A858DA" />,
        color: 'rgba(168, 88, 218, 0.2)', // Purple tint
        type: 'navigation' as const,
    },
    {
        id: '3',
        title: 'Seerat un Nabi',
        subtitle: 'سيرة النبي',
        icon: <Ionicons name="person" size={24} color="#3B82F6" />,
        color: 'rgba(59, 130, 246, 0.2)', // Blue tint
        type: 'download' as const,
    },
    {
        id: '4',
        title: '15 Line Quran',
        subtitle: 'PDF Format',
        icon: <FontAwesome5 name="file-pdf" size={24} color="#EAB308" />,
        color: 'rgba(234, 179, 8, 0.2)', // Yellow tint
        type: 'download' as const,
    },
    {
        id: '5',
        title: '16 Line Quran (PDF)',
        subtitle: 'Download & Read',
        icon: <FontAwesome5 name="file-pdf" size={24} color="#EC4899" />,
        color: 'rgba(236, 72, 153, 0.2)', // Pink tint
        type: 'download' as const,
    },
    {
        id: '6',
        title: 'Fahm-ul-Quran',
        subtitle: 'Understanding',
        icon: <MaterialCommunityIcons name="brain" size={24} color="#6366F1" />,
        color: 'rgba(99, 102, 241, 0.2)', // Indigo tint
        type: 'navigation' as const,
    },
];

export default function QuranScreen() {

    const renderHeader = () => (
        <View>
            <QuranHero />
            <View style={styles.searchContainer}>
                {/* Reuse SearchBar with placeholder override logic if we had it, for now generic is fine or we can update prop */}
                <SearchBar />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <FlatList
                data={FEATURES}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <FeatureItemCard
                        title={item.title}
                        subtitle={item.subtitle}
                        icon={item.icon}
                        color={item.color}
                        type={item.type}
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
    searchContainer: {
        paddingHorizontal: 0,
    },
    listContent: {
        paddingBottom: 100,
        paddingHorizontal: 20,
    },
});
