import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { codingListData } from "../guide/data/codingListData";

// Vite의 import.meta.glob을 사용하여 모든 페이지 파일을 미리 로드
const pages = import.meta.glob("./pages/**/*.tsx");

export default function DynamicPage() {
  const { "*": path } = useParams();
  const navigate = useNavigate();
  const [Component, setComponent] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [pageInfo, setPageInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!path) {
      setIsLoading(false);
      return;
    }

    // codingListData에서 페이지 정보 찾기
    const page = codingListData.find(
      (item) => item.filePath === path || item.id === path
    );
    setPageInfo(page);

    // 컴포넌트 동적 로드
    const loadComponent = async () => {
      setIsLoading(true);
      setError("");

      try {
        // 가능한 경로 패턴들
        const possiblePaths = [
          `./pages/${path}.tsx`,
          `./pages/${path}/index.tsx`,
        ];

        let loaded = false;

        for (const testPath of possiblePaths) {
          if (pages[testPath]) {
            console.log("✅ 파일 찾음:", testPath);
            const module = await pages[testPath]();
            setComponent(() => (module as any).default);
            setError("");
            loaded = true;
            break;
          }
        }

        if (!loaded) {
          console.error("❌ 파일을 찾을 수 없음:", path);
          console.log("📁 사용 가능한 파일 목록:", Object.keys(pages));
          setError(`화면을 찾을 수 없습니다: ${path}`);
        }
      } catch (err) {
        console.error("컴포넌트 로드 실패:", err);
        setError(`화면 로드 중 오류 발생: ${path}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadComponent();
  }, [path]);

  // 로딩 중
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">로딩 중...</p>
          {pageInfo && (
            <div className="mt-4 text-sm">
              <p className="text-gray-500">
                {pageInfo.id} - {pageInfo.depth4}
              </p>
              <p className="text-gray-400 mt-1">{path}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 에러 발생
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-2xl px-4">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            화면을 찾을 수 없습니다
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              찾으려던 경로:
            </p>
            <code className="text-xs bg-white px-3 py-2 rounded block break-all mb-3">
              src/pub/pages/{path}.tsx
            </code>

            <p className="text-sm font-semibold text-gray-700 mb-2">
              사용 가능한 화면 목록:
            </p>
            <div className="max-h-40 overflow-y-auto bg-white p-2 rounded text-xs space-y-1">
              {Object.keys(pages).map((filePath) => {
                const displayPath = filePath
                  .replace("../pub/pages/", "")
                  .replace(".tsx", "");
                return (
                  <div key={filePath} className="text-gray-600">
                    📄 {displayPath}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-xs text-gray-600">
              <p className="font-semibold mb-1">확인사항:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>파일이 src/pub/pages/ 안에 있나요?</li>
                <li>파일 확장자가 .tsx 인가요?</li>
                <li>filePath가 정확한가요? (대소문자 확인)</li>
                <li>파일에 export default가 있나요?</li>
              </ul>
            </div>
          </div>

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

  // 컴포넌트가 없으면 (에러도 없고 로딩도 아닌 경우)
  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">컴포넌트를 불러올 수 없습니다.</p>
          <button
            onClick={() => navigate("/guide/coding")}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            코딩 리스트로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // 컴포넌트 렌더링
  return (
    <div>
      <Component />
    </div>
  );
}
