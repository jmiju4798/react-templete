import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function GuideHeader() {
  return (
    <header className="h-14 border-b bg-white dark:bg-slate-900 sticky top-0 z-50">
      <div className="h-full px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-lg">프로젝트 명칭 가이드</span>
        </Link>
      </div>
    </header>
  );
}
