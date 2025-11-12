import React from "react";

const TEST002: React.FC = () => {
  return (
    <>
      <div id="wrap" className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-6">
          <div className="container mx-auto">
            <p className="text-lg">
              Header 영역 - 상단 헤더 콘텐츠가 들어갑니다22222222
            </p>
          </div>
        </header>

        <main className="flex-1 bg-gray-50 p-6">
          <div className="container mx-auto">
            <p className="text-lg text-gray-700">
              Main 영역 - 메인 콘텐츠가 들어갑니다2222222222
            </p>
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-6">
          <div className="container mx-auto">
            <p className="text-center">
              Footer 영역 - 하단 푸터 콘텐츠가 들어갑니다2222222222
            </p>
          </div>
        </footer>
      </div>

      {/* layer 영역 */}
      <div id="layer-wrap" className="hidden fixed inset-0 z-50"></div>

      {/* loading 영역 */}
      <div
        id="loading-wrap"
        className="hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    </>
  );
};

export default TEST002;
