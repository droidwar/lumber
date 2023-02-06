import styled from '@emotion/styled';
import MyComponent from '../components/sample/sample';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <MyComponent />
    </StyledPage>
  );
}

export default Index;
