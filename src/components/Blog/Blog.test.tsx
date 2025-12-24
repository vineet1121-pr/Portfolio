import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Blog from './Blog';

describe('Blog Component', () => {
  test('renders blog section', () => {
    render(<Blog />);
    expect(screen.getByText('Blog & Insights')).toBeInTheDocument();
  });

  test('renders blog intro text', () => {
    render(<Blog />);
    expect(
      screen.getByText(/Sharing my knowledge and experiences/i)
    ).toBeInTheDocument();
  });

  test('renders all filter buttons', () => {
    render(<Blog />);
    
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
  });

  test('displays all blog posts initially', () => {
    render(<Blog />);
    
    expect(screen.getByText('Building Scalable React Applications')).toBeInTheDocument();
    expect(screen.getByText('TypeScript Tips for Frontend Developers')).toBeInTheDocument();
    expect(screen.getByText('Modern CSS Techniques for 2025')).toBeInTheDocument();
  });

  test('filters posts by category', () => {
    render(<Blog />);
    
    const reactButton = screen.getByText('React');
    fireEvent.click(reactButton);
    
    expect(screen.getByText('Building Scalable React Applications')).toBeInTheDocument();
    expect(screen.queryByText('TypeScript Tips for Frontend Developers')).not.toBeInTheDocument();
  });

  test('All filter shows all posts', () => {
    render(<Blog />);
    
    // First filter by React
    const reactButton = screen.getByText('React');
    fireEvent.click(reactButton);
    
    // Then click All
    const allButton = screen.getByText('All');
    fireEvent.click(allButton);
    
    // All posts should be visible
    const blogCards = document.querySelectorAll('.blog-card');
    expect(blogCards.length).toBe(6);
  });

  test('active filter has active class', () => {
    render(<Blog />);
    
    const reactButton = screen.getByText('React');
    fireEvent.click(reactButton);
    
    expect(reactButton).toHaveClass('active');
  });

  test('renders blog post metadata', () => {
    render(<Blog />);
    
    expect(screen.getByText('Dec 20, 2025')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  test('renders blog tags', () => {
    render(<Blog />);
    
    expect(screen.getByText('#React')).toBeInTheDocument();
    expect(screen.getByText('#Architecture')).toBeInTheDocument();
    expect(screen.getByText('#Best Practices')).toBeInTheDocument();
  });

  test('renders Read More buttons', () => {
    render(<Blog />);
    
    const readMoreButtons = screen.getAllByText('Read More');
    expect(readMoreButtons.length).toBe(6);
  });

  test('renders blog images', () => {
    render(<Blog />);
    
    const images = document.querySelectorAll('.blog-image img');
    expect(images.length).toBe(6);
  });

  test('renders category badges on blog cards', () => {
    render(<Blog />);
    
    const categoryBadges = document.querySelectorAll('.blog-category');
    expect(categoryBadges.length).toBe(6);
  });
});
