export function titleTrimmer(text,numberOfWords) {
    const words = text.split(/\s+/);
    const firstTenWords = words.slice(0, numberOfWords).join(' ');
    return firstTenWords;
  }