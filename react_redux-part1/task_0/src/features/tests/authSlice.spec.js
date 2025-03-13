import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
    const initialState = {
        user: { email: '', password: '' },
        isLoggedIn: false,
    };

    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle login', () => {
        const loginAction = login({ email: 'test@test.com', password: 'password123' });
        const newState = authReducer(initialState, loginAction);
        expect(newState.user.email).toBe('test@test.com');
        expect(newState.user.password).toBe('password123');
        expect(newState.isLoggedIn).toBe(true);
    });

    it('should handle logout', () => {
        const loggedInState = {
            user: { email: 'test@test.com', password: 'password123' },
            isLoggedIn: true,
        };
        const newState = authReducer(loggedInState, logout());
        expect(newState).toEqual(initialState);
    });
});