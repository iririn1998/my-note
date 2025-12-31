import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";

export default function HomePage() {
  return (
    <DocsPage>
      <DocsTitle>俺のノート</DocsTitle>
      <DocsDescription>学習メモをまとめるためのノートです。</DocsDescription>
      <DocsBody>
        <p>ここでは、主にフロントエンド関連の学習メモをまとめています。</p>
      </DocsBody>
    </DocsPage>
  );
}
