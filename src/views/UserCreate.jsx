import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline/index.js';

export function UserCreate() {
  const navigate    = useNavigate();

  return (
    <>
      <button
        className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-blue-600 text-white hover:opacity-90"
        onClick={ () => navigate('/dashboard') }
      >
        <ChevronLeftIcon className="w-4" /> <span>Volver</span>
      </button>
      <div className="flex items-center justify-center h-[calc(100%-40px)]">
        <form
          action=""
          className="flex flex-col gap-1 max-w-md"
        >
          <div className="flex gap-1">
            <div className="border border-2 border-gray-200 rounded">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                className="px-3 py-2"
              />
            </div>
            <div className="border border-2 border-gray-200 rounded">
              <label
                htmlFor="lastname" className="sr-only"
              >Lastname
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Apellido"
                className="px-3 py-2"
              />
            </div>
          </div>
          <div className="border border-2 border-gray-200 rounded">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="px-3 py-2 w-full"
            />
          </div>
          <button className="py-2 bg-blue-600 text-white text-center rounded hover:opacity-90">Create</button>
        </form>
      </div>
    </>
  );
}