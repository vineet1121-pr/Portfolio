import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import Hero from './Hero';

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={`#${to}`}>{children}</a>,
}));

describe('Hero Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test('renders hero section', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('region');
    expect(heroSection).toHaveClass('hero');
  });

  test('displays typing animation text', async () => {
    render(<Hero />);
    
    // Fast-forward time for typing animation
    vi.advanceTimersByTime(2000);
    
    await waitFor(() => {
      expect(screen.getByText(/Hi, I'm Vineet/i)).toBeInTheDocument();
    });
  });

  test('renders role rotation', () => {
    render(<Hero />);
    
    // Check if at least one role is present
    const roleElement = document.querySelector('.rotating-role');
    expect(roleElement).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  test('download resume button triggers download', () => {
    render(<Hero />);
    
    // Mock document.createElement
    const createElementSpy = vi.spyOn(document, 'createElement');
    
    const downloadButton = screen.getByText('Download Resume');
    downloadButton.click();
    
    expect(createElementSpy).toHaveBeenCalledWith('a');
  });

  test('renders particles background', () => {
    render(<Hero />);
    
    const particles = document.querySelector('.particles');
    expect(particles).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Hero />);
    
    const socialLinks = document.querySelectorAll('.social-link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});
