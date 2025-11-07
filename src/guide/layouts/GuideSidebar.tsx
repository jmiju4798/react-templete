import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Code2, LayoutGrid, BookOpen, Rocket } from "lucide-react";

const navigation = [
  { name: "코딩리스트", href: "/coding", icon: Code2 },
  { name: "컴포넌트 가이드", href: "/components", icon: LayoutGrid },
  { name: "퍼블리싱 가이드", href: "/publishing", icon: BookOpen },
];

export default function GuideSidebar() {
  const location = useLocation();

  return (
    <aside className="w-56 border-r bg-white dark:bg-slate-900">
      <div className="p-4">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                <div className="flex items-center gap-3">
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
