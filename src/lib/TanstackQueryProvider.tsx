import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanstackQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: true,
                        refetchOnReconnect: true,
                        refetchOnMount: true,
                    },
                },
            }),
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
