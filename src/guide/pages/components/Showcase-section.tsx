import { ReactNode } from "react";

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  items?: string[];
  children: ReactNode;
  className?: string;
}

export function ShowcaseSection({
  title,
  description,
  items,
  children,
}: ShowcaseSectionProps) {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 shadow p-6">
      <div className="mb-4 border-b border-gray-200 dark:border-slate-700 pb-5">
        <h2 className="text-lg font-bold">{title}</h2>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
        {items && items.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-1 ml-3">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
