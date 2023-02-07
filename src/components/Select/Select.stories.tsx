import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'Select stories',
    component:  Select,
}


export const WithValue = () => {
  const [value, setValue] = useState('')

    return (
        <Select
            onChange={setValue}
            value={value}
            item={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Msk'},
                {value: '3', title: 'Kiev'},
                {value: '4', title: 'ldasdas'},

            ]}/>
    )
}




export const WithoutValue = () => {

    const [value, setValue] = useState('')

   return (
       <Select
           value={value}
           onChange={setValue}
           item={[
               {value: '1', title: 'Minsk'},
               {value: '2', title: 'Msk'},
               {value: '3', title: 'Kiev'},
               {value: '4', title: 'ldasdas'},

           ]}/>

   )
}
