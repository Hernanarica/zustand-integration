import { useState } from 'react';

function useForm( fields ) {
  const [ formValues, setFormValues ] = useState(fields);

  const handleInputChange = ( e ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const reset = () => {
    console.log(fields);
  };


  return { formValues, setFormValues, handleInputChange, reset };
}

export default useForm;