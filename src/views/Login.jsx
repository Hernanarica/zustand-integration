import { useStore } from 'jotai';

export function Login() {
  const store = useStore();
  console.log(store);
  return (
    <>
      <h2>Login :)</h2>
    </>
  );
}