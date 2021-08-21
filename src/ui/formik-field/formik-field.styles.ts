import styled from 'styled-components';

export const FORMIK_INPUT_HEIGHT = 55;

interface StyledDivProps {
  isErrorOccured?: boolean;
}

const Container = styled.div<StyledDivProps>`
  margin-bottom: ${({ theme }) => theme.spacing.base};
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 100%;
  }

  > input[type='checkbox'] {
    width: 20px;
    height: 20px;
    display: block;
  }

  .ant-input {
    ${({ isErrorOccured, theme }) => isErrorOccured && `border: 1px solid ${theme.color.error}`};
    height: ${() => `${FORMIK_INPUT_HEIGHT}px`};
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: ${({ theme }) => theme.radius.medium};
  }

  .ant-input-password {
    border-radius: ${({ theme }) => theme.radius.medium};
    background-color: ${({ theme }) => theme.color.grey};
    ${({ isErrorOccured, theme }) => isErrorOccured && `border: 1px solid ${theme.color.error}`};
    padding: 0 11px;
  }

  .ant-checkbox-wrapper {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  .ant-picker {
    width: 100%;
    height: ${() => `${FORMIK_INPUT_HEIGHT}px`};
  }

  .ant-input-number {
    display: block;
    height: 45px;
    width: 100%;

    .ant-input-number-input-wrap {
      height: ${() => `${FORMIK_INPUT_HEIGHT}px`};

      > input {
        height: ${() => `${FORMIK_INPUT_HEIGHT}px`};
      }
    }
  }

  .ant-checkbox-wrapper {
    margin-left: ${({ theme }) => theme.spacing.small};
  }

  .ant-select {
    min-height: ${() => `${FORMIK_INPUT_HEIGHT}px`};

    .ant-select-selector {
      min-height: ${() => `${FORMIK_INPUT_HEIGHT}px`};
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.fontPrimary};
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

const InlineError = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
`;

const S = {
  Container,
  Label,
  InlineError,
};

export default S;
