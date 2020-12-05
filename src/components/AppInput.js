import React, { useState } from 'react';

  // Check Component
  const Checkbox = React.forwardRef(
    ({ type, name, checked = false, onChange, id, ...rest }, forwardedRef) => {
    // { type, name, checked = false, onChange, id }

      return (
        <input type={type} id={id} name={name} checked={checked} onChange={onChange} ref={forwardedRef} />
      );
  }
  )
  
  const AppInput = React.forwardRef(
    ({ radios, value,inline, checkboxes, onChange, type, ...rest }, forwardedRef) => {
    

    // {radios, type, inline, checkboxes}
  //  Radio State And Event
    const [checkRadioValue, setCheckRadioValue] = useState({});
    const handleRadioChange = event => {
      setCheckRadioValue({
        //  ...checkRadioValue,
        [event.target.name]: event.target.checked
      });
    };

    // CheckBox State and Event
    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = event => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked
        });
      };
      
      React.useEffect(() => {
        if (onChange) {
          onChange(checkRadioValue);
        }
      }, [checkRadioValue, onChange]);
      React.useEffect(() => {
        if (onChange) {
          onChange(checkedItems);
        }
      }, [checkedItems, onChange]);
    return (
        <>
        {/* If Checkbox -- */}
        {
            (type === 'checkbox') && (
                checkboxes.map(item => (
                  <div key={item.key} className={`form-check ${inline ? 'form-check-inline': ''}`}>
                    <Checkbox
                          ref={forwardedRef}
                          type = {type}
                          id ={item.key}
                          name={item.name}
                          checked={checkedItems[item.name]}
                          onChange={handleChange}
                          value={checkedItems}
                          
                      />
                    <label htmlFor={item.key}  className={`form-check-label ml-1`}>{item.name}</label>
                  </div>
                    
                ))
            )
        }

        {/* If Radio */}
        { 
            (type === 'radio') && (
              radios.map(item => (
                    <div key={item.key} className={`form-check ${inline ? 'form-check-inline': ''}`}>
                    <Checkbox
                          ref={forwardedRef}
                          type = {type}
                          id ={item.key}
                          name={item.name}
                          checked={checkRadioValue[item.name]}
                          onChange={handleRadioChange}
                          value={checkRadioValue}
                      />
                    <label htmlFor={item.key}  className={`form-check-label ml-1`}>{item.name}</label>
                  </div>
                ))
            )
        }
       </>
    );
      
}
)

export default AppInput;