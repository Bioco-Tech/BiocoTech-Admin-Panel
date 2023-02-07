import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
import localFont from "@next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const coco = localFont({
  src: "../public/fonts/Cocogoose-Pro-Italic-trial.ttf",
});

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <main className={`${coco}`}>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
