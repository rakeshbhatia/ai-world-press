export function cleanText(text) {
    if (typeof text !== 'string') return 'N/A';
    return text.replace(/<[^>]+>/g, '').trim() || 'N/A';
}
