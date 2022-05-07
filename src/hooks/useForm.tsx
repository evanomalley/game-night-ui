import { useState } from "react";

type FormProps<T extends Object = {}> = {
    defaultValues: any,
    validate?: (
        values: Partial<T>
    ) => {},
    onSubmitEndpoint?: (
        values: Partial<T>
    ) => Promise<unknown>
}

const useForm = (props: FormProps) =>{
    const {validate, onSubmitEndpoint, defaultValues} = props;
    const [values, setValues] = useState(defaultValues);

    const[errors, setErrors] = useState({} as any); //this is a sad hack and should be redone to be more TS

    const handleChange = (e: { target: { id: string; value: string; }; }) => {
        const {id, value} = e.target;

        setValues({
            ...values,
            [id]: value
        })
    }

    //handle the sumbit, if errors return them
    const handleSubmit = async () => {

        if(validate !== undefined){
            const errorsFromValidation = validate(values);
            setErrors(errorsFromValidation);
            //@ts-ignore
            if(errorsFromValidation?.isValid){
                if(onSubmitEndpoint){
                    return await onSubmitEndpoint(values);
                }
            }
        }
        if(onSubmitEndpoint){
            return await onSubmitEndpoint(values);
        } 
        return false
    }

    return {handleChange, values, handleSubmit, errors}
};

export default useForm
