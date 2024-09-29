export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token:string |null;
}
