import Head from 'next/head';
import P from 'prop-types';
import { GridContent } from "../../components/GridContent";
import { GridImage } from "../../components/GridImage";
import { GridText } from "../../components/GridText";
import { GridTwoColum } from "../../components/GridTwoColumn";
import config from '../../config';
import { Base } from "../Base";

function Home({ data }) {

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
            <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === "section.section-two-columns") {
          return <GridTwoColum key={key} {...section} />;
        }

        if (component === "section.section-content") {
          return <GridContent key={key} {...section} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;


Home.propTypes = {
  data: P.array,
};
