export const add = (numbers) => {
  if (!numbers) return 0; // Handle empty string

  let delimiter = /,|\n|;/; // Default delimiters: comma or newline
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(match?.[1]); // Custom delimiter
    numbers = numbers.slice(match?.[0].length);
  }
  const numArray = numbers.split(delimiter).map((num) => num.trim());
  const negatives = numArray.filter((num) => parseFloat(num) < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + (parseFloat(num) || 0), 0);
};
