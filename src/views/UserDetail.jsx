import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeftIcon, EnvelopeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline/index.js';

export function UserDetail() {
  const { userId } = useParams();
  const navigate   = useNavigate();

  return (
    <>
      <button
        className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-blue-600 text-white hover:opacity-90"
        onClick={ () => navigate('/dashboard') }
      >
        <ChevronLeftIcon className="w-4" /> <span>Volver</span>
      </button>
      <div className="h-[calc(100%-40px)]">
        <div className="my-6">
          {/*<h2 className="text-xl">{ `${ user.name } ${ user.lastname }` }</h2>*/}
          <span className="flex items-center justify-start gap-2 text-gray-400">
            <EnvelopeIcon className="w-4" />
            {/*{ user.email }*/}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex justify-center items-center gap-2 px-3 py-2 w-1/2 bg-red-600 text-white rounded hover:opacity-90"
          >
            <TrashIcon className="w-5" /> <span>Eliminar</span>
          </button>
          <Link
            className="flex justify-center items-center gap-2 px-3 py-2 w-1/2 bg-blue-600 text-white rounded hover:opacity-90"
            to={ `/dashboard/users/${ userId }/edit` }
          > <PencilIcon className="w-5" /> <span>Editar</span> </Link>
        </div>
      </div>
    </>
  );
}