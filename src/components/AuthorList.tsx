interface AuthorListProps {
  authors: string[];
  highlight?: string;
}

/**
 * Renders a comma-separated author list with the given name (defaults to
 * Francesco Dorati) bolded, so it's easy to spot on multi-author papers.
 */
export default function AuthorList({ authors, highlight = 'Francesco Dorati' }: AuthorListProps) {
  return (
    <>
      {authors.map((author, i) => (
        <span key={i}>
          {author === highlight ? (
            <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{author}</strong>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  );
}
