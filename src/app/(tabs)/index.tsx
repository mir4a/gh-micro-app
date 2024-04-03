import { useGetListOfRepos, useInfiniteListOfRepos } from "@/api";
import { VirtualizedList } from "react-native";
import { ScrollView, Spinner, Text, View } from "tamagui";

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

  const renderItem = ({item}) => (
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
      <View flex={1} alignItems="center" justifyContent="center">
        <Spinner size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View flex={1} alignItems="center">
        <Text>There was an error fetching the data</Text>
      </View>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <View flex={1} alignItems="center">
      <VirtualizedList
        data={result?.data?.pages.reduce((acc, page) => [...acc, ...page.data], [])}
        renderItem={renderItem}
        keyExtractor={(item) => { 
          // debugger;
           return item?.id?.toString()}}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        onEndReached={() => fetchNextPage()}
        // onRefresh={() => fetchNextPage()}
      />
      {/* <ScrollView>
        <Text>{JSON.stringify(result)}</Text>
      </ScrollView> */}
    </View>
  );
}
