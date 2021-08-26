import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface MenuItemsProps {
  children: ReactNode,
  to: string
}

const MenuItem = (props: MenuItemsProps) => {
  const {children, to = '/', ...rest } = props;
  return (
    <Text
      mx={{ base: 0, md: 4 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

export default MenuItem;