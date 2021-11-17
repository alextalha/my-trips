import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'

import { CloseOutline } from '@styled-icons/evaicons-outline/CLoseOutline'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} arial-label="About" />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren IpsunLoren
      IpsunLoren IpsunLoren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren
      IpsunLoren IpsunLoren IpsunLoren Ipsun
    </S.Body>
  </S.Content>
)

export default AboutTemplate
