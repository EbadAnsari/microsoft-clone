import { ButtonInterface } from "@interfaces/interface";
import { PropsWithChildren } from "react";

function Button({
    to,
    link,
    children: buttonContent,
}: ButtonInterface & PropsWithChildren) {
    return (
        <a
            href={to}
            className={
                link
                    ? "font-semibold text-[#0f70bc]"
                    : "rounded-sm bg-[#0067b8] px-4 py-2 font-semibold text-white"
            }
        >
            {buttonContent}
        </a>
    );
}

export default Button;
