export function Home() {
  return (
    <div className="p-3">
      <h1>Listado de usuarios</h1>

      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {/*{ users.map(( user ) => (*/}
          {/*  <li key={ user.uid } className="py-5">*/}
          {/*    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">*/}
          {/*      <h3 className="text-sm font-semibold text-gray-800">*/}
          {/*        <a href="#" className="hover:underline focus:outline-none">*/}
          {/*          <span className="absolute inset-0" aria-hidden="true" />*/}
          {/*          { user.name } { user.lastname }*/}
          {/*        </a>*/}
          {/*      </h3>*/}
          {/*      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{ user.email }</p>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </div>
    </div>
  );
}