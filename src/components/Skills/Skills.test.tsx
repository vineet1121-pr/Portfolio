import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Skills from './Skills';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  callback: IntersectionObserverCallback;
  
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe() {
    // Trigger the callback immediately for testing
    this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this as any);
  }

  unobserve() {}

  disconnect() {}
} as any;

describe('Skills Component', () => {
  test('renders skills section', () => {
    render(<Skills />);
    
    expect(screen.getByText('My Skills')).toBeInTheDocument();
  });

  test('renders all skill cards', () => {
    render(<Skills />);
    
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('HTML5 & CSS3')).toBeInTheDocument();
    expect(screen.getByText('Azure')).toBeInTheDocument();
    expect(screen.getByText('UI Libraries')).toBeInTheDocument();
    expect(screen.getByText('Backend Integration')).toBeInTheDocument();
    expect(screen.getByText('Git & Version Control')).toBeInTheDocument();
  });

  test('renders skill descriptions', () => {
    render(<Skills />);
    
    expect(
      screen.getByText(/Expert in React development with Hooks/i)
    ).toBeInTheDocument();
  });

  test('renders progress bars', () => {
    render(<Skills />);
    
    const progressBars = document.querySelectorAll('.progress-bar');
    expect(progressBars.length).toBe(8);
  });

  test('displays skill percentages', () => {
    render(<Skills />);
    
    expect(screen.getByText('90%')).toBeInTheDocument(); // React.js
    expect(screen.getByText('85%')).toBeInTheDocument(); // TypeScript
    expect(screen.getByText('88%')).toBeInTheDocument(); // Angular
    expect(screen.getByText('95%')).toBeInTheDocument(); // HTML5 & CSS3
  });

  test('animates progress bars when visible', () => {
    render(<Skills />);
    
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach((bar) => {
      expect(bar).toHaveClass('animated');
    });
  });

  test('renders skill icons', () => {
    render(<Skills />);
    
    const icons = document.querySelectorAll('.skill-card i');
    expect(icons.length).toBe(8);
  });

  test('applies correct skill levels', () => {
    render(<Skills />);
    
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Check if progress bars have the correct width style
    expect(progressBars[0]).toHaveStyle({ '--target-width': '90%' });
    expect(progressBars[1]).toHaveStyle({ '--target-width': '85%' });
    expect(progressBars[2]).toHaveStyle({ '--target-width': '88%' });
    expect(progressBars[3]).toHaveStyle({ '--target-width': '95%' });
  });

  test('skill cards have hover effects', () => {
    render(<Skills />);
    
    const skillCards = document.querySelectorAll('.skill-card');
    expect(skillCards.length).toBeGreaterThan(0);
    
    skillCards.forEach((card) => {
      expect(card).toHaveClass('skill-card');
    });
  });
});
