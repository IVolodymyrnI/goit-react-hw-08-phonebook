import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} _activeLink={{ color: 'red' }} to="/login">
          Log in
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NavLink}
          _activeLink={{ color: 'red' }}
          to="/signup"
        >
          Sign up
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
