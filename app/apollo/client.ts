import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient() {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "https://graphql-pokemon2.vercel.app",
            fetchOptions: {
                cache: "force-cache",
                next: { revalidate: 3600 },
            },
        }),
    });
}
