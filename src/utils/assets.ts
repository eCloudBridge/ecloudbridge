export const getImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return import.meta.env.BASE_URL + url.replace(/^\//, '');
};
