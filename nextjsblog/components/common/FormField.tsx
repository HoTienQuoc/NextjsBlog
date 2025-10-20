import { cn } from "@/lib/utils";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface LoginValues{
    email: string;
    password: string;
}

interface FormFieldProps{
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder: string;
    label?: string;
    inputClassName?: string;
    register: UseFormRegister<LoginValues>;
    errors: FieldErrors;
}

const FormField = ({id,type,disabled,placeholder,label,inputClassName,register,errors}:FormFieldProps) => {
    const message = errors[id] && errors[id]?.message as string;
    return (
        <div>
            {label && <span className="block text-sm">{label}</span>}
            <input className={cn("w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300 dark:border-slate-700",
                errors[id] && "border-rose-400",inputClassName
            )}
            id={id} disabled={disabled} placeholder={placeholder} type={type} {...register(id as Path<LoginValues>)}/>
            {message && <span className="text-sm text-rose-400">{message}</span>}
        </div>
    );
}

export default FormField;