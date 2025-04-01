import { nanoid } from 'nanoid';

// Function to generate a unique session token
export function generateSessionToken(): string {
  return nanoid(10); // Generate a unique session token (length 10)
}
