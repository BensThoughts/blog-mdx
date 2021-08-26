import { MouseEventHandler, ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface MenuItemsProps {
  children: ReactNode,
  to: string,
  onClick?: MouseEventHandler<HTMLParagraphElement>
}

const MenuItem = (props: MenuItemsProps) => {
  const {children, to = '/', onClick, ...rest } = props;
  return (
    <Text
      mx={{ base: 0, md: 4 }}
      display="block"
      onClick={onClick}
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

export default MenuItem;