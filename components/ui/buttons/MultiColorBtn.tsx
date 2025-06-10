import clsx from "clsx";
import "./MultiColorBtn.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MultiColorBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "xx relative cursor-pointer bg-main rounded-lg hover:rounded-lg px-4 py-2 text-sm font-medium",
                className
            )}
        >
            <span />
            <span />
            <span />
            <span />
            {children}
        </button>
    );
}