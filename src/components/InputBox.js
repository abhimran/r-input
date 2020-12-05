import React from 'react';
const InputBox = React.forwardRef(
    ({ name, value, onChange, type, ...rest }, forwardedRef) => {
      const [checked, setChecked] = React.useState('');
  
      React.useEffect(() => {
        if (onChange) {
          onChange(checked);
        }
      }, [checked, onChange]);
  
      return (
        <div>
          <input
            ref={forwardedRef}
            type={type}
            name={name}
            value={checked}
            onChange={e => {
              setChecked(e.target.value);
            }}
          />
        </div>
      );
    }
  );
export default InputBox;