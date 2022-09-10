import "./style.scss";

interface Props {
  label: string;
  className?: string;
  onClick?: any;
  disabled?: boolean;
}

const CustomButton = ({ label, className, onClick, disabled }: Props) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          cursor: "pointer",
          backgroundColor: disabled
            ? "rgba(229, 229, 229, 0.4)"
            : "transparent",
          color: disabled ? "black" : "#fff",
          border: disabled ? "none" : "1px solid #fff",
        }}
        className={`${className} custom-btn`}
      >
        {" "}
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
