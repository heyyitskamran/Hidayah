import { View, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import NamazHero from '../../components/NamazHero';
import SearchBar from '../../components/SearchBar';
import PromoCard from '../../components/PromoCard';
import QuickAccessGrid from '../../components/QuickAccessGrid';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <NamazHero />
                <SearchBar />
                <View style={styles.contentPadding}>
                    <PromoCard />
                    <QuickAccessGrid />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    contentPadding: {
        paddingHorizontal: 20,
    }
});
