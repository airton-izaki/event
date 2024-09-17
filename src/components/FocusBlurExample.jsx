
import React from 'react'
import { useState } from 'react'

const FocusBlurExample = () =>
{
     //..Estado inicial - não focado
     const [isFocused, setIsFocused] = useState(false);

     //..Estado para armazenar o valor do campo
     const [inputValue, setInputValue] = useState('');      

     //..Função chamada quando o campo recebe o foco
     const handleFocus = () =>
     {
          setIsFocused(true);
     };

     //..Função chamada quando o campo perde o foco
     const handleBlur = () =>
     {
          setIsFocused(false);
     };
      
     //..Função quando o campo é preenchido
     const handleChange = (e) =>
     {
          setInputValue(e.target.value);
     };
      
  return (
    <div  style={{ padding: '20px', textAlign: 'center' }}    >
       <h2>React onFocus and onBlur Example</h2>

       <input type="text"
           value={inputValue}
           onFocus={handleFocus}
           onBlur={handleBlur}
           onChange={handleChange}
           placeholder='Digite seu nome'
           style=
           {
               {                   
                    fontSize: '20px',
                    
               }
           }
          />
         {isFocused && <p>O campo está focado!</p>}
         {!isFocused && inputValue && <p>Olá, meu nome é {inputValue}</p>}
    </div>
  )
}

export default FocusBlurExample
