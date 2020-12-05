import React from 'react';
import { useForm,Controller } from "react-hook-form";
import AppInput from './AppInput';
import InputBox from './InputBox';

const Form2 = () => {
    const { handleSubmit, control, errors } = useForm();
    return (
        <form onSubmit={handleSubmit((data) => { console.log(data) })}>
            <Controller
                as={<InputBox type="text" name="name" />}
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                defaultValue=''
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <Controller
                as={<InputBox type="email" name="email" />}
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                defaultValue=''
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <Controller
                as={<AppInput 
                    type={'radio'}
                    radios = {[
                        {name: 'Male', key: 'radio1'},
                        {name: 'Female', key: 'radio2'},
                        {name: 'Others', key: 'radio3'}, 
                    ]} 
                />}
                name="radio"
                control={control}
                rules={{ required: "Radio is required" }}
                defaultValue=''
            />
            {errors.radio && <p className="error">{errors.radio.message}</p>}

            <Controller
                as={<AppInput 
                    type={'checkbox'}
                    checkboxes = {[
                        {name: 'Javadcript', key: 'checkbox1'},
                        {name: 'Laravel', key: 'checkbox2'},
                        {name: 'Python', key: 'checkbox3'}, 
                        {name: 'Java', key: 'checkbox4'}, 
                    ]} 
                />}
                name="checkbox"
                control={control}
                rules={{ required: "Checkbox is required" }}
                defaultValue=''
            />
            {errors.checkbox && <p className="error">{errors.checkbox.message}</p>}

            <button type="submit">submit</button>
        </form>
    );
};

export default Form2;