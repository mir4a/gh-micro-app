import { ListIcon, SettingIcon } from '@/components/icons'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text, getTokens } from 'tamagui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: getTokens().color.$orange11Light.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Repositories',
          tabBarIcon: ({ color }) => <ListIcon />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Text padding={5}>👋🏻 Hey!</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingIcon />,
        }}
      />
    </Tabs>
  )
}
