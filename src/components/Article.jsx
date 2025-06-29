import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  width: 100%;
`;

const Article = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default Article;
