import { User } from "./stores";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'large'|'medium';
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string; // Assuming every input has a name
}

export interface NavLinkProps {
  to: string;
  text: string;
}


export interface CardProps {
  img: string;
  title: string;
  desc: string;
}

export interface UserCardsListProps {
  users: User[];
}