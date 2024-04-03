import { Image, ImageSourcePropType, useColorScheme } from 'react-native'

type ThemedIconProps = {
  lightSource: ImageSourcePropType;
  darkSource: ImageSourcePropType;
}
export function ThemedIcon({ lightSource, darkSource }: ThemedIconProps) {
  const scheme = useColorScheme()

  const source = scheme === 'dark' ? darkSource : lightSource
  
  return <Image source={source} />
}

export const ListIcon = () => (
  <ThemedIcon
    lightSource={require('../../assets/icons/list.png')}
    darkSource={require('../../assets/icons/list-dark.png')}
  />
)

export const SettingIcon = () => (
  <ThemedIcon
    lightSource={require('../../assets/icons/setting.png')}
    darkSource={require('../../assets/icons/setting-dark.png')}
  />
)

export const StarIcon = () => (
  <ThemedIcon
    lightSource={require('../../assets/icons/star.png')}
    darkSource={require('../../assets/icons/star-dark.png')}
  />
)


