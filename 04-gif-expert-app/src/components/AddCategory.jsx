import { useState } from "react"

export const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(); 

    if(inputValue.trim().length <= 1) return;

    props.onAddCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form aria-label="form" onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        // onChange={ (event) => onInputChange(event)}
        onChange={ onInputChange }
      />
    </form>
  )
}
