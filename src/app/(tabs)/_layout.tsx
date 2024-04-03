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
                <Text>Hello!</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingIcon />,
        }}
      />
    </Tabs>
  )
}
