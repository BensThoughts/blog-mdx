import Image from 'next/image';

export default function Logo() {
  return (
    <>
      <Image src="/assets/logo.png" alt="logo" width="25" height="25" />
    </>
  );
}