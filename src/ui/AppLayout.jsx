import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './Navbar';
import { useNavbar } from '../contexts/NavbarProvider';
import Uploader from './Uploader';
import { uploadQuestion } from '../api/uploadQuestions';

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  height: 100%;
  background-color: var(--color-bg-main);
  padding-top: 5rem;
  ${props => props.closed && 'pointer-events: none;'}
`;

const Button = styled.button`
  background-color: red;
  color: white;
`;

function AppLayout() {
  const { isNavbarOpen } = useNavbar();

  async function handleClick() {
    await uploadQuestion();
  }

  return (
    <>
      <StyledAppLayout>
        <Header closed={isNavbarOpen} />
        <NavBar />

        <Main closed={isNavbarOpen}>
          <Outlet />
        </Main>
      </StyledAppLayout>

      {/* <Uploader /> */}
    </>
  );
}

export default AppLayout;
