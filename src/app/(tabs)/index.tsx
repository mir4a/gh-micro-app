import { useInfiniteListOfRepos } from "@/api";
import { View } from "react-native";
import { Spinner, Text } from "tamagui";
import { FlashList } from "@shopify/flash-list";

export default function TabOneScreen() {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isLoading,
    isError,
    ...result
  } = useInfiniteListOfRepos("facebook");

  const renderItem = ({ item }) => (
    <View>
      <Text>
        {/* {JSON.stringify(item)} */}
        {item.name} - Stars: {item.stargazers_count}
      </Text>
      <Text>{item.description}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View>
        <Spinner size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>There was an error fetching the data</Text>
      </View>
    );
  }

  if (!result) {
    return null;
  }

  const flattenData = result.data?.pages.flatMap((page) => page.data);

  const loadNextPageData = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={flattenData}
        renderItem={renderItem}
        // estimatedItemSize={300}
        keyExtractor={(item) => item?.id}
        onEndReached={loadNextPageData}
      />
      {isFetching && (
        <View>
          <Spinner size="small" />
        </View>
      )}
    </View>
  );
}
