export default function Accessibility() {
  return (
    <div className="max-w-5xl">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          시맨틱 HTML
        </h2>
        
        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            적절한 HTML 태그 사용
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            의미에 맞는 HTML 태그를 사용하여 구조를 명확하게 전달합니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border-2 border-green-500 rounded-lg overflow-hidden">
              <h4 className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-3 font-semibold">
                ✓ 좋은 예
              </h4>
              <div className="bg-gray-900 p-4">
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<header>
  <nav>
    <ul>
      <li><a href="/">홈</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>제목</h1>
    <p>내용</p>
  </article>
</main>
<footer>
  <p>Copyright 2025</p>
</footer>`}
                </pre>
              </div>
            </div>
            
            <div className="border-2 border-red-500 rounded-lg overflow-hidden">
              <h4 className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-3 font-semibold">
                ✗ 나쁜 예
              </h4>
              <div className="bg-gray-900 p-4">
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<div class="header">
  <div class="nav">
    <div class="menu">
      <div><a href="/">홈</a></div>
    </div>
  </div>
</div>
<div class="main">
  <div class="article">
    <div class="title">제목</div>
    <div>내용</div>
  </div>
</div>`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            헤딩 구조
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            제목 태그(h1~h6)를 논리적인 순서로 사용합니다.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>페이지당 h1은 하나만 사용</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>제목 단계를 건너뛰지 않음 (h1 → h2 → h3)</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>제목은 콘텐츠의 계층 구조를 반영</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          키보드 접근성
        </h2>
        
        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            키보드 네비게이션
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>모든 인터랙티브 요소는 키보드로 접근 가능해야 함</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Tab 키로 포커스 이동 가능</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Enter/Space 키로 활성화 가능</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Esc 키로 모달/팝업 닫기 가능</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            포커스 표시
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border-2 border-green-500 rounded-lg overflow-hidden">
              <h4 className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-3 font-semibold">
                ✓ 좋은 예
              </h4>
              <div className="bg-gray-900 p-4">
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`button:focus {
  outline: 2px solid #4a90e2;
  outline-offset: 2px;
}

/* 또는 */
button:focus-visible {
  box-shadow: 0 0 0 3px 
    rgba(74, 144, 226, 0.5);
}`}
                </pre>
              </div>
            </div>
            
            <div className="border-2 border-red-500 rounded-lg overflow-hidden">
              <h4 className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-3 font-semibold">
                ✗ 나쁜 예
              </h4>
              <div className="bg-gray-900 p-4">
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`button:focus {
  outline: none; 
  /* 절대 사용 금지 */
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          색상 및 대비
        </h2>
        
        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            명도 대비
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            텍스트와 배경 간 충분한 명도 대비를 유지합니다.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span><strong>일반 텍스트:</strong> 최소 4.5:1 대비율</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span><strong>큰 텍스트 (18pt 이상):</strong> 최소 3:1 대비율</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span><strong>UI 컴포넌트:</strong> 최소 3:1 대비율</span>
            </li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <div style={{background: '#ffffff', color: '#333333'}} className="border-2 border-green-500 rounded-lg p-6 mb-2 font-semibold">
                대비율: 12.6:1 ✓
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">좋은 예</span>
            </div>
            <div className="text-center">
              <div style={{background: '#ffffff', color: '#cccccc'}} className="border-2 border-red-500 rounded-lg p-6 mb-2 font-semibold">
                대비율: 1.6:1 ✗
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">나쁜 예</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            색상에만 의존하지 않기
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            정보를 전달할 때 색상 외에 추가적인 시각적 단서를 제공합니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border-2 border-green-500 rounded-lg overflow-hidden">
              <h4 className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-3 font-semibold">
                ✓ 좋은 예
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">성공</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">✗</span>
                  <span className="text-red-600 dark:text-red-400 font-semibold">오류</span>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-red-500 rounded-lg overflow-hidden">
              <h4 className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-3 font-semibold">
                ✗ 나쁜 예
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-semibold">성공</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400 font-semibold">오류</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          ARIA 속성
        </h2>
        
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 font-mono">
              aria-label
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              요소에 레이블을 제공합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<button aria-label="메뉴 열기">
  <span class="icon-menu"></span>
</button>`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 font-mono">
              aria-labelledby
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              다른 요소의 텍스트를 레이블로 사용합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<h2 id="dialog-title">알림</h2>
<div role="dialog" 
     aria-labelledby="dialog-title">
  내용...
</div>`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 font-mono">
              aria-describedby
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              추가 설명을 제공합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<input 
  type="password" 
  aria-describedby="password-help"
/>
<span id="password-help">
  8자 이상, 영문과 숫자 포함
</span>`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 font-mono">
              aria-hidden
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              스크린 리더에서 요소를 숨깁니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`<span class="icon" aria-hidden="true">
  ★
</span>
<span>즐겨찾기</span>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-slate-700">
          체크리스트
        </h2>
        
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-6">
          <div className="space-y-3">
            {[
              '모든 이미지에 적절한 alt 속성 제공',
              '키보드로 모든 기능 사용 가능',
              '포커스 표시가 명확함',
              '충분한 색상 대비 (4.5:1 이상)',
              '시맨틱 HTML 사용',
              '논리적인 헤딩 구조',
              '폼 레이블과 입력 필드 연결',
              '적절한 ARIA 속성 사용',
              '동영상에 자막 제공',
              '색상에만 의존하지 않는 정보 전달'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border-b border-gray-100 dark:border-slate-800 last:border-0">
                <input 
                  type="checkbox" 
                  id={`check${index}`}
                  className="w-5 h-5 cursor-pointer"
                />
                <label 
                  htmlFor={`check${index}`}
                  className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
