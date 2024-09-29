// Type for login API response
export interface LoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      avatar?: string;
    };
  };
}

export interface RegisterResponse {
  data: {
    token: string;
    id: number;
  };
}

// Type for getUsers API response
export interface GetUsersResponse {
  data: {
    data: Array<{
      id: number;
      first_name?: string;
      last_name?: string;
      email?: string;
      avatar?: string;
    }>;
  };
}
