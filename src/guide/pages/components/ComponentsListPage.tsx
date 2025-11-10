export default function ComponentsListPage() {
  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          컴포넌트
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          재사용 가능한 UI 컴포넌트 라이브러리
        </p>
      </header>

      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-8 text-center">
        <svg
          className="w-24 h-24 mx-auto mb-4 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          컴포넌트 페이지
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          컴포넌트 가이드 페이지를 준비 중입니다.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          Coming Soon
        </div>
      </div>
    </div>
  );
}
