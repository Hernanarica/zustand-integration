import { Link, Outlet } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/20/solid/index.js';
import { UsersList } from '../components/index.js';

export function Dashboard() {
  const users = [];

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-3 p-3 max-w-[280px] w-full min-h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3">
            <form action="">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="px-3 py-2 border border-2 border-gray-300 rounded-xl"
              />
            </form>
            <button className="p-1 rounded-full hover:bg-blue-100">
              <Link to="/dashboard/users/create">
                <PlusIcon className="w-6" />
              </Link>
            </button>
          </div>
          <hr/>
          <aside className="max-h-[475px] h-full overflow-auto">
            <ul>
              {
                ( users.length > 0 )
                  ? <UsersList users={ users }/>
                  : <span className="bg-blue-200 block px-3 py-2 rounded text-center">Sin Usuarios</span>
              }
            </ul>
          </aside>
        </div>
        <div className="min-h-[calc(100vh-48px)] w-full p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}