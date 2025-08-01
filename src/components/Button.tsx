import { ButtonHTMLAttributes } from "react";

export const Button = ({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}) => {
    return(
        <button className="bg-primary rounded-[8px] py-[13px] max-h-[44px] text-white font-bold cursor-pointer hover:bg-primary/80" {...props}>
            {children}
        </button>
    )

}