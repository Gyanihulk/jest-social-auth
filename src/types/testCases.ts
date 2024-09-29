export interface MockIntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

export type MockIntersectionObserverCallback = (
  entries: MockIntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
