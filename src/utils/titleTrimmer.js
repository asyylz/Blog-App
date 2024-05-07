export function titleTrimmer(text) {
    const words = text.split(/\s+/);
    const firstTenWords = words.slice(0, 10).join(' ');
    return firstTenWords;
  }