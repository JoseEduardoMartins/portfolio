// jest-dom adds custom matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";

// jsdom não implementa IntersectionObserver, usado por useReveal /
// useActiveSection. Stub mínimo para os componentes renderizarem nos testes.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
