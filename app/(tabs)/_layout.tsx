import { Tabs } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import NamazHero from '../../components/NamazHero';

export default function TabLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: colors.border,
                },
                header: () => <NamazHero />,
                headerStyle: {
                    height: 'auto', // Allow header to determine its own height
                    backgroundColor: colors.card,
                },
            }}
        >
            <Tabs.Screen
                name="quran"
                options={{
                    title: 'Quran',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="book-open" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="hadith"
                options={{
                    title: 'Hadith',
                    tabBarIcon: ({ color }) => <MaterialIcons name="library-books" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="ibadaat"
                options={{
                    title: 'Ibadaat',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="praying-hands" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({ color }) => <Ionicons name="menu" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
