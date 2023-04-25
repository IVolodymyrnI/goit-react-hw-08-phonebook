import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { useAuth } from 'hooks';

export const NavBar = () => {
  const { token } = useAuth();

	return (
    <Breadcrumb separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} _activeLink={{ color: 'red' }} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {token && (
        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            _activeLink={{ color: 'red' }}
            to={'/contacts'}
          >
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
