import { ButtonHTMLAttributes } from "react";

export const Button = ({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}) => {
    return(
        <button className="bg-primary rounded-lg py-[13px] max-h-[44px] text-white font-bold cursor-pointer" {...props}>
            {children}
        </button>
    )

}