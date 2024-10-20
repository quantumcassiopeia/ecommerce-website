interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

interface UserAction {
  type: string;
  payload?: User; // Payload opcional para casos como "logout"
}

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        user: action.payload || null, // Garantir que payload não seja undefined
      };
    case "user/logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
