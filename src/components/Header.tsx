import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const HeaderDiv = styled.div`
  background: rgb(17, 30, 39);
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
      </HeaderNav>
    </HeaderDiv>
  );
}