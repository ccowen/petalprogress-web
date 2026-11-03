/**
 * Quotes from people using the texts. Fill in `text` and `name` (a first name
 * and, if they're happy to share, where they're from). An entry with no text
 * shows a "quote goes here" placeholder, so remove entries you don't use
 * rather than shipping the placeholder.
 */
export interface UserQuote {
  text: string;
  name: string;
}

export const userQuotes: UserQuote[] = [
  { text: "", name: "" },
  { text: "", name: "" },
  { text: "", name: "" },
];
