import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';


const HeaderDiv = styled.div`
  color: #fff;
  font-family: Lato;
`;

const HeaderNav = styled.nav`
  padding: 0 20px;
  overflow: auto;
`;

const Logo = styled.div`
  width: 220px;
  float: left;
  .image {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HeaderDiv>
      <HeaderNav>
        <Logo>
          <Link href="/">
            <a>
              <Image src="/assets/logo.png" alt="logo" width="25" height="25" />
            </a>
          </Link>
        </Logo>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </HeaderNav>
    </HeaderDiv>
  );
}