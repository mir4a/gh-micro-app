import { Spinner, Text, View, H6 } from "tamagui";
import { nativeApplicationVersion } from "expo-application";
import SettingsListItem from "@/components/list/settings-list-item";

export default function TabTwoScreen() {
  return (
    <View flex={1}>
      <H6 margin={10}>Support</H6>
      <SettingsListItem label="Version" value={nativeApplicationVersion} />
    </View>
  );
}
