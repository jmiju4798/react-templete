import { ShowcaseSection } from "./Showcase-section";
import { useState } from "react";

export default function AccordionComp() {
  const [openSingle, setOpenSingle] = useState<string>("item-1");
  const [openMultiple, setOpenMultiple] = useState<string[]>(["item-1"]);

  const toggleSingle = (item: string) => {
    setOpenSingle(openSingle === item ? "" : item);
  };

  const toggleMultiple = (item: string) => {
    if (openMultiple.includes(item)) {
      setOpenMultiple(openMultiple.filter((i) => i !== item));
    } else {
      setOpenMultiple([...openMultiple, item]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Single Open Accordion */}
      <ShowcaseSection
        title="단일 열림 아코디언"
        description="한 번에 하나의 항목만 열립니다"
        items={['type="single"', "collapsible: 다시 클릭했을 때 닫을 수 있는지 여부"]}
      >
        <div className="space-y-2">
          {["item-1", "item-2", "item-3"].map((item, index) => (
            <div
              key={item}
              className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSingle(item)}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-left font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex justify-between items-center"
              >
                <span>아코디언 항목 {index + 1}</span>
                <span className="text-gray-400">
                  {openSingle === item ? "−" : "+"}
                </span>
              </button>
              {openSingle === item && (
                <div className="px-4 py-3 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    {index === 0 &&
                      "첫 번째 아코디언 항목의 내용입니다. 한 번에 하나의 항목만 열립니다."}
                    {index === 1 &&
                      "두 번째 아코디언 항목의 내용입니다. 다른 항목을 클릭하면 이전 항목은 자동으로 닫힙니다."}
                    {index === 2 && "세 번째 아코디언 항목의 내용입니다."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Multiple Open Accordion */}
      <ShowcaseSection
        title="다중 열림 아코디언"
        description="여러 항목을 동시에 열 수 있습니다"
        items={['type="multiple"']}
      >
        <div className="space-y-2">
          {["item-1", "item-2", "item-3"].map((item, index) => (
            <div
              key={item}
              className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleMultiple(item)}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-left font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex justify-between items-center"
              >
                <span>{["첫 번째", "두 번째", "세 번째"][index]} 섹션</span>
                <span className="text-gray-400">
                  {openMultiple.includes(item) ? "−" : "+"}
                </span>
              </button>
              {openMultiple.includes(item) && (
                <div className="px-4 py-3 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    {index === 0 &&
                      "여러 섹션을 동시에 열 수 있습니다. 다른 섹션을 열어도 이 섹션은 닫히지 않습니다."}
                    {index === 1 &&
                      "원하는 만큼 많은 섹션을 동시에 열어둘 수 있습니다."}
                    {index === 2 && "각 섹션은 독립적으로 작동합니다."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* FAQ Example */}
      <ShowcaseSection
        title="FAQ 예시"
        description="실제 사용 예시"
      >
        <div className="space-y-2">
          {[
            {
              id: "faq-1",
              question: "배송은 얼마나 걸리나요?",
              answer:
                "일반 배송은 주문 후 2-3일, 빠른 배송은 익일 배송이 가능합니다. 지역에 따라 배송 기간이 다를 수 있습니다.",
            },
            {
              id: "faq-2",
              question: "반품 정책은 어떻게 되나요?",
              answer:
                "상품 수령 후 7일 이내 반품이 가능합니다. 단, 상품의 태그가 제거되지 않고 사용하지 않은 상태여야 합니다.",
            },
          ].map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleMultiple(faq.id)}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{faq.question}</span>
                <span className="ml-auto text-gray-400">
                  {openMultiple.includes(faq.id) ? "−" : "+"}
                </span>
              </button>
              {openMultiple.includes(faq.id) && (
                <div className="px-4 py-3 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}
