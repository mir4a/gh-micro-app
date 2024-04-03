import { Spinner, Text, View } from "tamagui";

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center">
      <Text fontSize={20}>Tab Two</Text>
      <Spinner size="large" />
    </View>
  );
}
