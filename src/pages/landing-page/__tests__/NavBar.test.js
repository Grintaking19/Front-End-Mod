import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import NavBar from '../../../layouts/navbar/NavBar';
import SignedOutNavBar from '../../../layouts/navbar/SignedOutNavBar';
import SignedInNavBar from '../../../layouts/navbar/SignedInNavBar';

describe('NavBar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders SignedOutNavBar when user is not signed in', () => {
    render(<NavBar />);
    expect(screen.getByText('Hebtus')).toBeInTheDocument();
    expect(screen.getByText('Log In / Sign Up')).toBeInTheDocument();
    expect(screen.queryByText('Manage my events')).not.toBeInTheDocument();
  });

  test('renders SignedInNavBar when user is signed in', () => {
    localStorage.setItem('user', 'fakeAccessToken');
    render(<NavBar />);
    expect(screen.getByText('Hebtus')).toBeInTheDocument();
    expect(screen.getByText(/@example.com/i)).toBeInTheDocument();
    expect(screen.getByText('Manage my events')).toBeInTheDocument();
    expect(screen.queryByText('Log In / Sign Up')).not.toBeInTheDocument();
  });

  test('clicking on Create an event button navigates to create-event page', () => {
    const mockNavigate = jest.fn();
    render(<SignedOutNavBar setAccessToken={() => {}} />);
    const createEventButton = screen.getByText('Create an event');
    fireEvent.click(createEventButton);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('clicking on Manage my events link navigates to events-list page', () => {
    const mockNavigate = jest.fn();
    localStorage.setItem('user', 'fakeAccessToken');
    render(<SignedInNavBar setAccessToken={() => {}} />);
    const manageMyEventsLink = screen.getByText('Manage my events');
    fireEvent.click(manageMyEventsLink);
    expect(mockNavigate).toHaveBeenCalledWith('/events-list');
  });

  test('clicking on Update Password link navigates to update-password page', () => {
    const mockNavigate = jest.fn();
    localStorage.setItem('user', 'fakeAccessToken');
    render(<SignedInNavBar setAccessToken={() => {}} />);
    const updatePasswordLink = screen.getByText('Update Password');
    fireEvent.click(updatePasswordLink);
    expect(mockNavigate).toHaveBeenCalledWith('/update-password');
  });

  test('clicking on Logout link clears local storage and sets access token to null', () => {
    localStorage.setItem('user', 'fakeAccessToken');
    const setAccessToken = jest.fn();
    render(<SignedInNavBar setAccessToken={setAccessToken} />);
    const logoutLink = screen.getByText('Logout');
    fireEvent.click(logoutLink);
    expect(localStorage.getItem('user')).toBe('');
    expect(setAccessToken).toHaveBeenCalledWith(null);
  });
});
