import { tv } from "tailwind-variants";

type ButtonType = {
  onClick?: () => void;
  btnType: "primary" | "secondary" | "tertiary";
  label: string;
};

function Button({ onClick, btnType, label }: ButtonType) {
  const button = tv({
    base: "bg-red-400/70 px-2 py-1 text-white",
    variants: {
      color: {
        primary: "bg-blue-400/60",
        secondary: "bg-yellow-400/70",
        tertiary: "bg-red-400/70",
      },
    },
  });

  return (
    <button onClick={onClick} className={button({ color: btnType })}>
      {label}
    </button>
  );
}

export default Button;
