import P from 'prop-types';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
