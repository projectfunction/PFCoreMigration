import { ReactNode } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Nav from "../Nav";

export type LayoutProps = {
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  siteTheme?: string;
  socialsCoverImage?: string;
};

export default function MainLayout({
  children,
  pageTitle,
  pageDescription,
  siteTheme,
  socialsCoverImage,
}: LayoutProps) {
  const keywords = [
    "ProjectFunction",
    "coding",
    "free",
    "courses",
    "WIT",
    "Nottingham",
    "tech",
    "programming",
    "html",
    "developer",
    "game",
    "webdev",
  ].join(",");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.svg" color="#6a64e8" />
        <link rel="me" href="https://twitter.com/projectfunction" />

        <title>
          {pageTitle ? `${pageTitle} • ProjectFunction` : "ProjectFunction"}
        </title>
        <meta
          name="description"
          content={
            pageDescription ?? "Creating pathways for the marginalised in tech"
          }
        />
        <meta
          property="og:description"
          content={
            pageDescription ?? "Creating pathways for the marginalised in tech"
          }
        />

        <meta
          property="og:title"
          content={
            pageTitle ? `${pageTitle} • ProjectFunction` : "ProjectFunction"
          }
        />
        <meta property="og:site_name" content="ProjectFunction" />
        <meta name="keywords" content={keywords} />
        <meta name="twitter:site" content="@projectfunction" />

        <meta name="theme-color" content="#ffffff" />
        {/* @ts-ignore */}
        <meta name="theme-color" content="#0f0f0f" media="(prefers-color-scheme: dark)" />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script src="/api/gascript" />
        <script src="/upghost.js" async />
        <script async data-api="/_hive" src="/bee.js" />
      </Head>
      <Nav siteTheme={siteTheme} />

      {children}

      <Footer siteTheme={siteTheme} />
    </>
  );
}
