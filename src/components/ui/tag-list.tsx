type TagListProps = {
  tags: readonly string[];
  className?: string;
};

// Bordered monospace tags for tech stacks (Experience and Projects).
export function TagList({ tags, className = "" }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
