import { NavLink } from 'react-router-dom';

export function UsersList( { users } ) {
  return (
    <>
      {
        users.map(user => (
          <li key={ user.uid }>
            <NavLink
              to={ `/dashboard/users/${ user.uid }` }
              className={ ( { isActive } ) => `block px-3 py-2 rounded ${ isActive ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100' }` }
            >{ user.name } { user.lastname }</NavLink>
          </li>
        ))
      }
    </>
  );
}