import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSettings } from '../../contexts/SettingsContext';
import { useDarkMode } from '../../contexts/DarkModeProvider';

const StyledUser = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  cursor: pointer;
  margin-right: 5rem;

  & > svg {
    font-size: 3rem;
    color: var(--color-el-main);
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    z-index: 999;
    transition: all 300ms;
  }
`;

const Username = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-el-main);

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ProfilePictureContainer = styled.div`
  overflow: hidden;
  border-radius: 50%;
  outline: 2px solid var(--color-el-main);
  outline-offset: 1.5px;
  width: 4rem;
  aspect-ratio: 1;
`;
const ProfilePicture = styled.img`
  width: 100%;
`;
function User() {
  const navigate = useNavigate();

  const { username, profilePicture } = useSettings();
  const { isDarkMode } = useDarkMode();

  const picture = isDarkMode
    ? '../src/images/icons/user-dark.png'
    : '../src/images/icons/user-light.png';

  return (
    <StyledUser onClick={() => navigate('/settings/account')}>
      <ProfilePictureContainer>
        <ProfilePicture src={picture} />
      </ProfilePictureContainer>
      {/* <VscAccount /> */}
      <Username>{username}</Username>
    </StyledUser>
  );
}

export default User;
