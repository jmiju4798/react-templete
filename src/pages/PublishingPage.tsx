import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { codingListData } from "../guide/data/codingListData";

export default function PublishingPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();
  const [pageInfo, setPageInfo] = useState<any>(null);

  useEffect(() => {
    // codingListData에서 해당 pageId 찾기
    const page = codingListData.find((item) => item.id === pageId);
    setPageInfo(page);
  }, [pageId]);

  if (!pageInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            화면 ID: <span className="font-mono font-semibold">{pageId}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
            코딩 리스트에 등록되지 않은 화면입니다.
          </p>
          <button
            onClick={() => navigate("/guide/coding")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            코딩 리스트로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* 네비게이션 바 */}
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/guide/coding")}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            코딩 리스트로 돌아가기
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300">
              {pageId}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                pageInfo.status === "완료"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : pageInfo.status === "진행중"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {pageInfo.status}
            </span>
          </div>
        </div>
      </nav>

      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* 페이지 헤더 */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {pageId}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {pageInfo.depth1} &gt; {pageInfo.depth2} &gt; {pageInfo.depth3}{" "}
              &gt; {pageInfo.depth4}
            </p>
          </div>

          {/* 페이지 정보 */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              페이지 정보
            </h2>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  담당자
                </dt>
                <dd className="text-gray-900 dark:text-gray-100">
                  {pageInfo.manager}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  카테고리
                </dt>
                <dd className="text-gray-900 dark:text-gray-100">
                  {pageInfo.category}
                </dd>
              </div>
              {pageInfo.note && (
                <div className="col-span-2">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    비고
                  </dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    {pageInfo.note}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* 실제 퍼블리싱 화면 영역 */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              화면 미리보기
            </h2>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-16 text-center bg-gray-50 dark:bg-slate-800">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                여기에 실제 퍼블리싱된 화면이 표시됩니다
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                화면 ID: <span className="font-mono">{pageId}</span>
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
                실제 화면 컴포넌트를 import하여 렌더링하세요
              </p>
            </div>
          </div>

          {/* 개발 가이드 */}
          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
              💡 개발 가이드
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              실제 화면을 렌더링하려면 PublishingPage.tsx에서 동적으로
              컴포넌트를 import 하세요.
            </p>
            <pre className="mt-2 text-xs bg-blue-100 dark:bg-blue-900/40 p-2 rounded overflow-x-auto">
              {`// 예시:
import { lazy, Suspense } from "react";
const PageComponent = lazy(() => import(\`./screens/\${pageId}\`));

<Suspense fallback={<div>Loading...</div>}>
  <PageComponent />
</Suspense>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
