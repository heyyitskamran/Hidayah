import { Tabs } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import NamazHero from '../../components/NamazHero';

export default function TabLayout() {
    // using direct colors as per design since ThemeContext might not have exact matches or we want to override for this specific look
    const activeColor = '#A858DA';
    const inactiveColor = '#9CA3AF';

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0, // Clean look as per image
                    height: 60, // Sligthly taller for comfort
                    paddingBottom: 8,
                    paddingTop: 8,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                headerShown: false, // We handle headers individually or not at all (Index/Hadith have custom)
            }}
        >
            <Tabs.Screen
                name="quran"
                options={{
                    title: 'Quran',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="book" size={24} color={color} />,
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
                    tabBarIcon: ({ color }) => <FontAwesome5 name="mosque" size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({ color }) => <Ionicons name="ellipsis-horizontal" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
