import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}