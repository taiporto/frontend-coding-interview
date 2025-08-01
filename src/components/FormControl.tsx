import { InputHTMLAttributes } from "react";

export const FormControl = ({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
    return (
        <div className="flex flex-col gap-[11px]">
            <div className="flex justify-between max-h-[16px]">
                <label htmlFor={props.id} className="text-sm font-bold">{label}</label>
                {props.type === 'password' &&
                    <button type="button" className="text-sm text-primary cursor-pointer hover:underline hover:text-primary/80">Forgot password?</button>
                }
            </div>
            <input className="border border-secondary rounded-[8px] px-[10px] py-[13px] max-h-[44px]" {...props} />
        </div>
    )
}