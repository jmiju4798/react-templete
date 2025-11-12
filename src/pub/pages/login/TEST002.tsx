export default function LoginSign() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-xl">
        {/* 헤더 */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">회원가입</h2>
          <p className="mt-2 text-sm text-gray-600">
            새로운 계정을 만들어보세요
          </p>
        </div>

        {/* 회원가입 폼 */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* 이름 입력 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="홍길동"
              />
            </div>

            {/* 이메일 입력 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="example@email.com"
              />
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-gray-500">
                8자 이상, 영문, 숫자, 특수문자 포함
              </p>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label
                htmlFor="password-confirm"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호 확인
              </label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            {/* 전화번호 입력 */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                전화번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="010-1234-5678"
              />
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="terms-all"
                name="terms-all"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms-all"
                className="ml-2 block text-sm font-semibold text-gray-900"
              >
                전체 약관에 동의합니다
              </label>
            </div>

            <div className="ml-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms-service"
                    name="terms-service"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms-service"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    이용약관 동의 <span className="text-red-500">(필수)</span>
                  </label>
                </div>
                <a href="#" className="text-xs text-indigo-600 hover:underline">
                  보기
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms-privacy"
                    name="terms-privacy"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms-privacy"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    개인정보 수집 및 이용 동의{" "}
                    <span className="text-red-500">(필수)</span>
                  </label>
                </div>
                <a href="#" className="text-xs text-indigo-600 hover:underline">
                  보기
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms-marketing"
                    name="terms-marketing"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms-marketing"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    마케팅 정보 수신 동의{" "}
                    <span className="text-gray-500">(선택)</span>
                  </label>
                </div>
                <a href="#" className="text-xs text-indigo-600 hover:underline">
                  보기
                </a>
              </div>
            </div>
          </div>

          {/* 가입하기 버튼 */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              가입하기
            </button>
          </div>

          {/* 로그인 링크 */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{" "}
              <a
                href="/pub/login/LoginPage"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                로그인
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
