import { ShowcaseSection } from "./Showcase-section";
import { useState } from "react";

export default function InputComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-6">
      {/* Basic Input */}
      <ShowcaseSection
        title="기본 입력 필드 (Basic Input)"
        description="다양한 타입의 입력 필드"
      >
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="텍스트 입력"
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="number"
            placeholder="숫자 입력"
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
        </div>
      </ShowcaseSection>

      {/* Input with Label */}
      <ShowcaseSection
        title="라벨이 있는 입력 필드 (Input with Label)"
        description="라벨과 함께 사용하는 입력 필드"
      >
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              이름
            </label>
            <input
              type="text"
              placeholder="홍길동"
              className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* Input Sizes */}
      <ShowcaseSection
        title="입력 필드 크기 (Input Sizes)"
        description="다양한 크기의 입력 필드"
      >
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Small"
            className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="text"
            placeholder="Medium"
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="text"
            placeholder="Large"
            className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
        </div>
      </ShowcaseSection>

      {/* Input States */}
      <ShowcaseSection
        title="입력 필드 상태 (Input States)"
        description="다양한 입력 필드 상태"
      >
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="일반 상태"
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="text"
            placeholder="비활성화 상태"
            disabled
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-gray-100 dark:bg-slate-700 cursor-not-allowed text-gray-500 dark:text-gray-400"
          />
          <input
            type="text"
            placeholder="에러 상태"
            className="w-full px-3 py-2 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800 dark:text-gray-100"
          />
          <input
            type="text"
            placeholder="성공 상태"
            className="w-full px-3 py-2 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-800 dark:text-gray-100"
          />
        </div>
      </ShowcaseSection>

      {/* Textarea */}
      <ShowcaseSection
        title="텍스트 영역 (Textarea)"
        description="여러 줄 입력이 가능한 텍스트 영역"
      >
        <div className="space-y-3 max-w-md">
          <textarea
            placeholder="메시지를 입력하세요..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-slate-800 dark:text-gray-100"
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}
