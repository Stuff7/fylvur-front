import { writable } from 'svelte/store';

const router = writable(window.location.pathname);

window.addEventListener('popstate', () => router.set(window.location.pathname));

export const navigate = (href: string) => {
  history.pushState({}, '', href);
  router.set(href);
};

export default router;
