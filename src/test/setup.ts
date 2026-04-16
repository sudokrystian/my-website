import "@testing-library/jest-dom/vitest";

// Mock PageMeta globally so tests don't need HelmetProvider
vi.mock("../components/page-meta/PageMeta", () => ({
  default: () => null,
}));
