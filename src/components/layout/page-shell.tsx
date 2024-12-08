import { PropsWithChildren } from "react";

import PageHeader from "../page-header";

interface PageShellProps extends PropsWithChildren {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageShell({
  children,
  title,
  description,
  actions,
  breadcrumbs,
}: PageShellProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 shadow-sm relative z-10">
      <div className="relative h-full flex flex-col">
        {/* Page Header with Title, Description, Actions */}
        {(title || description || actions || breadcrumbs) && (
          <PageHeader
            title={title}
            description={description}
            actions={actions}
            breadcrumbs={breadcrumbs}
          />
        )}

        {/* Content Container */}
        <div className="flex-1 p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
}
