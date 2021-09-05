import styled from 'styled-components';

const Container = styled.section`
  button {
    width: 100%;
    height: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;

const TagsHeader = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.fontGrey};
`;

const TagList = styled.ul`
  list-style: none;
`;

const TagListItem = styled.li`
  .ant-tag {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    height: 40px;
    line-height: 40px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

const S = {
  Container,
  TagsHeader,
  TagList,
  TagListItem,
};

export default S;
