export default function intersection<
  T extends HTMLElement
>(node: T, callback: (node: T) => void): SvelteActionReturnType {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(node);
      }
    });
  });

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    },
  };
}
