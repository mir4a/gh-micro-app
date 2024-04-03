import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export function useGetListOfRepos(org: string) {
  return useQuery({
    queryKey: ["org", org],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=org:${org}&sort=stars&order=desc`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}

export const PER_PAGE = 30;

export function useInfiniteListOfRepos(org: string) {
  return useInfiniteQuery({
    queryKey: ["org-infinite", org],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=org:${org}&sort=id&order=desc&page=${pageParam}&per_page=${PER_PAGE}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.EXPO_PUBLIC_GITHUB_TOKEN && {
              Authorization: process.env.EXPO_PUBLIC_GITHUB_TOKEN,
            }),
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return { data: result.items, total: result.total_count, page: pageParam };
    },
    initialPageParam: 1,
    getNextPageParam: ({ total, page }) => {
      const pages = Math.ceil(total / PER_PAGE);
      return page + 1 <= pages ? page + 1 : undefined;
    },
  });
}
