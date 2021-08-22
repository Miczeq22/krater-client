import styled from 'styled-components';

const PageContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.section`
  display: flex;
`;

const IconContainer = styled.section`
  flex: 1;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const FormContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  PageContainer,
  InnerContainer,
  IconContainer,
  FormContainer,
};

export default S;
