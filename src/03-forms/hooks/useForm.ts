import React, {ChangeEvent, useState} from 'react'

export const useForm = <T>( initState: T ) => {

    const [ formData, setFormData ] = useState(initState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))

        
};
  return {
    //destructuring
    ...formData, 
    //name: formData.name
    //email: formData.email
    //properties
    formData,
    //functions
    onChange, 
    
  }
}

export default useForm
