import { Text, ListItem, styled, View } from "tamagui";
import { StarIcon } from "../icons";
import type { Repo } from "@/api";

type RepoListItemProps = {
  item: Repo;
};

export default function RepoListItem({ item }: RepoListItemProps) {
  return (
    <Wrapper title={<Title>{item.name}</Title>}>
      <RepoStars>
        <StarIcon />
        <Text>{item.stargazers_count}</Text>
      </RepoStars>
      {item.description}
    </Wrapper>
  );
}

const Wrapper = styled(ListItem, {
  borderBottomWidth: 1,
  borderBottomColor: '$gray5',
  padding: 16,
  });

const Title = styled(Text, {
  fontSize: 16,
  fontWeight: '700',
});

const RepoStars = styled(View, {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: 6,
});
