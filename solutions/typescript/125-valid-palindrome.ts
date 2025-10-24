export function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

export function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !isAlphanumeric(s[start])) {
      start++;
    }
    while (start < end && !isAlphanumeric(s[end])) {
      end--;
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return true;
}
