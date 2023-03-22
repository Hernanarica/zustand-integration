import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-blue-600">
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" className="inline-block py-3 px-3 text-white">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="inline-block py-3 px-3 text-white">Login</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="inline-block py-3 px-3 text-white">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}