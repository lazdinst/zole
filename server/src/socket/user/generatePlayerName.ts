import { nanoid } from 'nanoid';

// Function to generate a unique player name
export function generatePlayerName(): string {
  return `Player-${nanoid(5)}`; // Generate a unique player name (e.g., Player-xyz12)
}
