import styled from 'styled-components';

const Container = styled.section``;

const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.fontGrey};
`;

const CarouselItem = styled.div`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

const S = {
  Container,
  Title,
  CarouselItem,
};

export default S;
