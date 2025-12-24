import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Navbar from './Navbar';

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Link: ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) => (
    <a href={`#${to}`} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe('Navbar Component', () => {
  test('renders navbar with logo', () => {
    render(<Navbar />);
    const logoText = screen.getByText('Vineet');
    expect(logoText).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button');
    
    fireEvent.click(hamburger);
    
    const navLinks = document.querySelector('.nav-links');
    expect(navLinks).toHaveClass('active');
    
    fireEvent.click(hamburger);
    expect(navLinks).not.toHaveClass('active');
  });

  test('adds scrolled class on scroll', () => {
    render(<Navbar />);
    
    // Simulate scroll event
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      value: 100,
    });
    
    fireEvent.scroll(window);
    
    const navbar = document.querySelector('.navbar');
    expect(navbar).toHaveClass('scrolled');
  });

  test('closes mobile menu when navigation link is clicked', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button');
    
    // Open menu
    fireEvent.click(hamburger);
    
    // Click a nav link
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    
    const navLinks = document.querySelector('.nav-links');
    expect(navLinks).not.toHaveClass('active');
  });
});
