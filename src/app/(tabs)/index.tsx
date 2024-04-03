import { Repo, useInfiniteListOfRepos } from "@/api";
import { View } from "react-native";
import { Spinner, Text, styled } from "tamagui";
import { FlashList } from "@shopify/flash-list";

import RepoListItem from "@/components/list/repo-list-item";

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

  const renderItem = ({ item }: {item: Repo}) => (
    <RepoListItem item={item} />
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
      {/* <RepoListItem item={{ id: 13434, name: "testName", description: "lorem imoioausd oiausd oiasud ioasuodi uasiodu", stargazers_count: 1344 }} />
      <RepoListItem item={{ id: 13434, name: "testName", description: "lorem imoioausd oiausd oiasud ioasuodi uasiodu", stargazers_count: 1344 }} />
      <RepoListItem item={{ id: 13434, name: "testName", description: "lorem imoioausd oiausd oiasud ioasuodi uasiodu", stargazers_count: 1344 }} />
      <RepoListItem item={{ id: 13434, name: "testName", description: "lorem imoioausd oiausd oiasud ioasuodi uasiodu", stargazers_count: 1344 }} /> */}
      <FlashList
        data={flattenData}
        renderItem={renderItem}
        estimatedItemSize={100}
        keyExtractor={(item) => item?.id.toString()}
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

