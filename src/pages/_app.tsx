import { ThemeProvider } from "@/components/context";
import AppShell from "@/components/views/AppShell";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ThemeProvider>
    </SessionProvider>
  );
}
