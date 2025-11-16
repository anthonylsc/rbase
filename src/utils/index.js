export const createPageUrl = (pageName) => {
  const pages = {
    'Home': '/',
    'Rules': '/rules',
    'ServerPreview': '/server-preview',
  };
  return pages[pageName] || '/';
};
