import type { ReactNode } from "react";

export function PostProse({ children }: { children: ReactNode }) {
  return (
    <article className="prose-post mx-auto max-w-2xl">
      {children}
      <style>{`
        .prose-post p {
          margin-top: 1.25rem;
          color: var(--text-secondary);
          font-size: 1.0625rem;
          line-height: 1.75;
        }
        .prose-post p:first-child {
          margin-top: 0;
        }
        .prose-post strong {
          color: var(--text-primary);
          font-weight: 600;
        }
        .prose-post em {
          color: var(--text-primary);
        }
        .prose-post a {
          color: var(--accent-primary);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: opacity 0.15s;
        }
        .prose-post a:hover {
          opacity: 0.8;
        }
        .prose-post code {
          font-family: var(--font-mono), ui-monospace, monospace;
          background-color: var(--bg-subtle);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          color: var(--text-primary);
        }
        .prose-post pre {
          margin: 1.5rem 0;
          padding: 1rem 1.25rem;
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-default);
          border-radius: 10px;
          overflow-x: auto;
        }
        .prose-post pre code {
          background-color: transparent;
          padding: 0;
          font-size: 0.875rem;
          color: var(--text-primary);
        }
        .prose-post table {
          margin: 0;
        }
      `}</style>
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 mb-3 font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[color:var(--text-primary)] leading-tight">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 mb-2 text-lg sm:text-xl font-semibold text-[color:var(--text-primary)]">
      {children}
    </h3>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="!mt-0 !text-lg sm:!text-xl !leading-[1.6] !text-[color:var(--text-primary)] font-medium">
      {children}
    </p>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-[color:var(--accent-primary)] bg-[color:var(--bg-subtle)] pl-5 pr-4 py-4 rounded-r-lg">
      <p className="!mt-0 font-serif text-lg sm:text-xl italic leading-relaxed !text-[color:var(--text-primary)]">
        {children}
      </p>
    </blockquote>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="my-5 space-y-2.5 list-disc pl-6 text-[color:var(--text-secondary)] text-[1.0625rem] leading-[1.7] marker:text-[color:var(--accent-primary)]">
      {children}
    </ul>
  );
}
