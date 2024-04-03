import { Text, View, H4, Paragraph } from "tamagui";

export default function ModalScreen() {
  return (
    <View padding={20}>
      <H4 marginBottom={20}>Hey there! 👋🏻</H4>
      <Paragraph marginBottom={10}>
        This app fetching data from GitHub API and displaying it in a list. The
        data is paginated and fetched in an infinite scroll fashion.
      </Paragraph>
      <Paragraph marginBottom={10}>
        If you hit rate limit, you can add .env file with
        `EXPO_PUBLIC_GITHUB_TOKEN` which can be granual-permission token without
        any rights. This will increase rate limits.
      </Paragraph>
      <Paragraph marginBottom={10}>
        For demo purposes, the org is set to Facebook, which has 125 public
        repos. Given that default items per page is 30, you can observe infinite
        loading in action.
      </Paragraph>
      <Paragraph marginBottom={10}>
        You can navigate to the settings tab to see the version of the app.
      </Paragraph>
    </View>
  );
}
