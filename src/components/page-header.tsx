"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  actions,
  breadcrumbs,
}) => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 px-6 py-4">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700 flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gray-700">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-600">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Header Content */}
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          {title && (
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          )}
        </div>

        {/* Actions */}
        {actions && (
          <div className="ml-4 flex-shrink-0 flex space-x-3">{actions}</div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
