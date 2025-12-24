import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

// Mock fetch
global.fetch = vi.fn() as any;

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders contact form', () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('jethvavinit99@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+91 9510349069')).toBeInTheDocument();
    expect(screen.getByText('Ahmedabad, India')).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // HTML5 validation should prevent submission
    const nameInput = screen.getByPlaceholderText('Your Name');
    expect(nameInput).toBeRequired();
  });

  test('submits form successfully', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    } as Response);

    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText('Your Message');
    const submitButton = screen.getByText('Send Message');
    
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Test message');
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
    });
  });

  test('handles form submission error', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText('Your Message');
    const submitButton = screen.getByText('Send Message');
    
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Test message');
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
    });
  });

  test('displays loading state during submission', async () => {
    vi.mocked(fetch).mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(() => resolve({ json: () => ({ success: true }) } as any as Response), 1000))
    );

    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText('Your Message');
    const submitButton = screen.getByText('Send Message');
    
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Test message');
    
    fireEvent.click(submitButton);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('clears form after successful submission', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    } as Response);

    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Your Name') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('Your Email') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Your Message') as HTMLTextAreaElement;
    const submitButton = screen.getByText('Send Message');
    
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Test message');
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(messageInput.value).toBe('');
    });
  });
});
