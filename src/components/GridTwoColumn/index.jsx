import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridTwoColum = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
        <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title}/>
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColum.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
