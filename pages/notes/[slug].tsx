import { GetStaticPaths, GetStaticProps } from "next";
import MainLayout from "../../components/layouts/MainLayout";
import { useTheme } from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import ArticleBlock from "../../components/ArticleBlock";
import Head from "next/head";
import { isPathLocal } from "../../utils/convinienceHelper";
import {getBySlug, getNotesSummaryList} from "../../utils/localNotesCopy";

export default function NotePage({ posts, slug }) {
  const siteTheme = useTheme();
  if (!posts) return <pre>Not Found {slug}</pre>;

  const {
    summary,
    name,
    content,
    publishDate,
    category,
    coverImage,
    createdBy,
    socialsCoverImage,
  } = posts;

  return (
    <MainLayout
      siteTheme={siteTheme}
      pageDescription={summary}
      pageTitle={name}
    >
      <Head>
        <meta
          property="og:image"
          content={
            isPathLocal(socialsCoverImage ?? coverImage)
              ? `https://projectfunction.io${socialsCoverImage ?? coverImage}`
              : socialsCoverImage ?? coverImage
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content={`https://projectfunction.io/notes/${slug}`}
        />
      </Head>

      <ContentContainer>
        <ArticleBlock
          title={name}
          publishDate={publishDate}
          category={category}
          summary={summary}
          children={content}
          coverImage={coverImage}
          createdBy={createdBy}
        />
      </ContentContainer>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getNotesSummaryList();

  return {
    paths: posts.map((post) => `/notes/${post.slug}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const posts = getBySlug(slug);

  return {
    props: {
      posts: posts[0] ?? null,
      slug,
    },
    revalidate: 60,
  };
};
