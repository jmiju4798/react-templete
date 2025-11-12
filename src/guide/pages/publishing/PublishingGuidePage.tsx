import Structure from './Structure';
import Accessibility from './Accessibility';

interface PublishingGuidePageProps {
  selectedTab?: string | null;
}

export default function PublishingGuidePage({ selectedTab }: PublishingGuidePageProps) {
  const renderContent = () => {
    switch (selectedTab) {
      case 'structure':
        return <Structure />;
      case 'accessibility':
        return <Accessibility />;
      default:
        return <Structure />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {selectedTab === 'structure' && '퍼블리싱 파일 구조'}
          {selectedTab === 'accessibility' && '접근성 가이드'}
          {!selectedTab && '퍼블리싱 파일 구조'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {selectedTab === 'structure' && '프로젝트의 파일 및 폴더 구조와 네이밍 규칙'}
          {selectedTab === 'accessibility' && '웹 접근성 표준(WCAG 2.1) 준수 가이드'}
          {!selectedTab && '프로젝트의 파일 및 폴더 구조와 네이밍 규칙'}
        </p>
      </header>

      {/* 선택된 탭 렌더링 */}
      {renderContent()}
    </div>
  );
}
