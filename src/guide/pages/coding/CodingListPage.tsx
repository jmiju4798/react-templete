import { useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { codingListData, CodingItem } from "../../data/codingListData";
import { PreviewModal } from "../../components/PreviewModal";
import { PreviewTooltip } from "../../components/PreviewTooltip";

// 상태별 색상을 컴포넌트 외부로 이동 (재생성 방지)
const STATUS_COLORS = {
  완료: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  진행중:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  컨펌대기: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
} as const;

type StatusType = keyof typeof STATUS_COLORS;

interface CodingListPageProps {
  selectedCategory?: string | null;
}

export default function CodingListPage({
  selectedCategory = null,
}: CodingListPageProps) {
  const navigate = useNavigate();
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [selectedManager, setSelectedManager] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);

  // 고유한 담당자 목록 추출
  const managers = useMemo(() => {
    const uniqueManagers = Array.from(
      new Set(codingListData.map((item) => item.manager))
    );
    return uniqueManagers.sort();
  }, []);

  // 필터링된 데이터 (중복 로직 제거)
  const filteredData = useMemo(() => {
    return codingListData.filter((item) => {
      const managerMatch =
        selectedManager === "all" || item.manager === selectedManager;
      const statusMatch =
        selectedStatus === null || item.status === selectedStatus;
      const categoryMatch =
        !selectedCategory || item.category === selectedCategory;
      return managerMatch && statusMatch && categoryMatch;
    });
  }, [selectedManager, selectedStatus, selectedCategory]);

  // 카테고리별 그룹화
  const groupedData = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, CodingItem[]>);
  }, [filteredData]);

  // 각 아이템에 전체 번호를 미리 할당
  const dataWithNumbers = useMemo(() => {
    return filteredData.map((item, index) => ({
      ...item,
      globalNum: index + 1,
    }));
  }, [filteredData]);

  // 번호가 포함된 카테고리별 그룹화
  const groupedDataWithNumbers = useMemo(() => {
    return dataWithNumbers.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, (CodingItem & { globalNum: number })[]>);
  }, [dataWithNumbers]);

  // 통계 계산
  const statistics = useMemo(() => {
    const total = codingListData.length;
    const inProgress = codingListData.filter(
      (item) => item.status === "진행중"
    ).length;
    const pending = codingListData.filter(
      (item) => item.status === "컨펌대기"
    ).length;
    const completed = codingListData.filter(
      (item) => item.status === "완료"
    ).length;
    const progressRate = total > 0 ? Math.floor((completed / total) * 100) : 0;

    return {
      total,
      inProgress,
      pending,
      completed,
      progressRate,
    };
  }, []);

  // 상태별 색상 반환 (useCallback으로 메모이제이션)
  const getStatusColor = useCallback((status: string) => {
    return STATUS_COLORS[status as StatusType] || STATUS_COLORS.컨펌대기;
  }, []);

  // 페이지 이동 핸들러 (Ctrl 키 누르면 새 창으로 열림)
  const handleNavigateToPage = useCallback(
    (filePath: string, event?: React.MouseEvent | React.KeyboardEvent) => {
      const url = `/pub/${filePath}`;
      
      // Ctrl(Windows/Linux) 또는 Cmd(Mac) 키가 눌렸는지 확인
      if (event && (event.ctrlKey || event.metaKey)) {
        window.open(url, '_blank');
      } else {
        navigate(url);
      }
    },
    [navigate]
  );

  // 미리보기 열기 핸들러
  const handleOpenPreview = useCallback((pageId: string) => {
    setPreviewId(pageId);
  }, []);

  // 미리보기 닫기 핸들러
  const handleClosePreview = useCallback(() => {
    setPreviewId(null);
  }, []);

  // 상태 필터 변경 핸들러
  const handleStatusFilter = useCallback((status: StatusType | null) => {
    setSelectedStatus(status);
  }, []);

  // 테이블 렌더링 (useCallback으로 메모이제이션)
  const renderTable = useCallback(
    (
      data: (CodingItem & { globalNum: number })[],
      showCategoryHeader?: string
    ) => {
      // 이전 값을 추적하기 위한 변수
      let prevDepth1 = "";
      let prevDepth2 = "";
      let prevDepth3 = "";

      return (
        <div className="mb-8">
          {showCategoryHeader && (
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {showCategoryHeader}
            </h2>
          )}
          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg shadow border dark:border-slate-700">
            <table className="min-w-full table-auto">
              <thead className="bg-slate-600 dark:bg-slate-800">
                <tr>
                  <th className="w-16 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    NUM
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    1Depth
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    2Depth
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    3Depth
                  </th>
                  <th className="w-40 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    4Depth
                  </th>
                  <th className="w-48 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    화면 ID
                  </th>
                  <th className="w-28 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    미리보기
                  </th>
                  <th className="w-24 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    담당자
                  </th>
                  <th className="w-28 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    진행상태
                  </th>
                  <th className="w-32 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={10}
                      className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      데이터가 없습니다.
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => {
                    // 현재 행의 depth 값들
                    const currentDepth1 = item.depth1;
                    const currentDepth2 = item.depth2;
                    const currentDepth3 = item.depth3;

                    // 이전 행과 같으면 빈 문자열, 다르면 현재 값
                    const displayDepth1 =
                      currentDepth1 === prevDepth1 ? "" : currentDepth1;
                    const displayDepth2 =
                      currentDepth1 === prevDepth1 &&
                      currentDepth2 === prevDepth2
                        ? ""
                        : currentDepth2;
                    const displayDepth3 =
                      currentDepth1 === prevDepth1 &&
                      currentDepth2 === prevDepth2 &&
                      currentDepth3 === prevDepth3
                        ? ""
                        : currentDepth3;

                    // 다음 비교를 위해 현재 값 저장
                    prevDepth1 = currentDepth1;
                    prevDepth2 = currentDepth2;
                    prevDepth3 = currentDepth3;

                    return (
                      <tr
                        key={`${item.filePath}-${index}`}
                        className="hover:bg-gray-50 dark:hover:bg-slate-800"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                          {item.globalNum}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {displayDepth1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {displayDepth2}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {displayDepth3}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {item.depth4}
                        </td>
                        <td
                          className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400 underline cursor-pointer hover:text-blue-800 dark:hover:text-blue-300"
                          onClick={(e) => handleNavigateToPage(item.filePath, e)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              handleNavigateToPage(item.filePath, e);
                            }
                          }}
                        >
                          {item.filePath}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          <PreviewTooltip pageId={item.filePath}>
                            <button
                              onClick={() => handleOpenPreview(item.filePath)}
                              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs transition-colors"
                              aria-label={`${item.filePath} 미리보기`}
                            >
                              미리보기
                            </button>
                          </PreviewTooltip>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {item.manager}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {item.note || "-"}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    },
    [getStatusColor, handleNavigateToPage, handleOpenPreview]
  );

  return (
    <div className="container">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            코딩 리스트{selectedCategory && ` - ${selectedCategory}`}
          </h1>
        </div>
      </header>

      <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg shadow p-6 border dark:border-slate-700">
        {/* 진행률 및 상태 카운트 표시 */}
        <div className="flex gap-8 flex-wrap mb-4">
          <button
            onClick={() => handleStatusFilter(null)}
            className={`text-lg font-medium transition-colors ${
              selectedStatus === null
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            aria-label="전체 항목 보기"
            aria-pressed={selectedStatus === null}
          >
            전체: {statistics.total}
          </button>
          <button
            onClick={() => handleStatusFilter("진행중")}
            className={`text-lg font-medium transition-colors ${
              selectedStatus === "진행중"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            aria-label="진행중인 항목만 보기"
            aria-pressed={selectedStatus === "진행중"}
          >
            진행중: {statistics.inProgress}
          </button>
          <button
            onClick={() => handleStatusFilter("컨펌대기")}
            className={`text-lg font-medium transition-colors ${
              selectedStatus === "컨펌대기"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            aria-label="컨펌대기 항목만 보기"
            aria-pressed={selectedStatus === "컨펌대기"}
          >
            컨펌대기: {statistics.pending}
          </button>
          <button
            onClick={() => handleStatusFilter("완료")}
            className={`text-lg font-medium transition-colors ${
              selectedStatus === "완료"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            aria-label="완료된 항목만 보기"
            aria-pressed={selectedStatus === "완료"}
          >
            완료: {statistics.completed}
          </button>
          <div
            className="text-lg font-medium text-gray-800 dark:text-gray-100"
            aria-label={`전체 진행률 ${statistics.progressRate}퍼센트`}
          >
            진행률: {statistics.progressRate}%
          </div>
        </div>

        {/* 담당자 필터 */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="manager"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            담당자
          </label>
          <select
            id="manager"
            value={selectedManager}
            onChange={(e) => setSelectedManager(e.target.value)}
            className="form-select rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            aria-label="담당자 선택"
          >
            <option value="all">전체</option>
            {managers.map((manager) => (
              <option key={manager} value={manager}>
                {manager}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 테이블 렌더링 */}
      <div role="tabpanel">
        {selectedCategory
          ? // 특정 카테고리 선택 시
            renderTable(dataWithNumbers)
          : // 전체 선택 시 - 카테고리별로 구분해서 표시
            Object.entries(groupedDataWithNumbers).map(([category, items]) => (
              <div key={category}>{renderTable(items, category)}</div>
            ))}
      </div>

      {/* 미리보기 모달 */}
      <PreviewModal
        isOpen={!!previewId}
        onClose={handleClosePreview}
        pageId={previewId || ""}
      />
    </div>
  );
}
