import "../styles/globals.css";

function MyApp({ Component, pageProps }: { Component: React.ComponentType<unknown>; pageProps: Record<string, unknown> }) {
  return <Component {...pageProps} />;
}

export default MyApp;