import { describe, it, expect, vi, MockedFunction } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SignInPage from '../page';
import { useAuthContext } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

vi.mock('next/navigation', () => ({
    redirect: vi.fn()
}));
vi.mock('@/context/AuthContext', () => ({
    useAuthContext: vi.fn()
}))

const mockUseAuthContext = useAuthContext as MockedFunction<typeof useAuthContext>;
const mockLogin = vi.fn();
const mockGetIsLoggedIn = vi.fn();

mockUseAuthContext.mockReturnValue({
    login: mockLogin,
    getIsLoggedIn: mockGetIsLoggedIn,
    logout: vi.fn(),
    getUserName: vi.fn()
});

const mockRedirect = redirect as MockedFunction<typeof redirect>;

const setup = () => {
    render(
        <SignInPage />
    )
}

describe('<SignInPage />', () => {
    it('should render the page', () => {
        setup();
        expect(screen.getByText('Sign in to your account')).toBeDefined();
    });
    
    describe('when the form is submitted', () => {
        it('should login the user', () => {
            setup();
            fireEvent.input(screen.getByLabelText('Username'), { target: { value: 'test@test.com' } });
            fireEvent.input(screen.getByLabelText('Password'), { target: { value: 'test' } });
            fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
            expect(mockLogin).toHaveBeenCalledWith('test@test.com', 'test');
        });
        
        it('should redirect to the home page', () => {
            setup();
            fireEvent.input(screen.getByLabelText('Username'), { target: { value: 'test@test.com' } });
            fireEvent.input(screen.getByLabelText('Password'), { target: { value: 'test' } });
            fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
            expect(mockRedirect).toHaveBeenCalledWith('/photos');
        });
    })
})