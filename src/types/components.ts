export interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
  }

 export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string; // Assuming every input has a name
  }