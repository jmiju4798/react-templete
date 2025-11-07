export default function CodingListPage() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">코딩리스트</h1>
        <p className="text-lg text-muted-foreground">
          코딩 표준과 가이드라인을 확인하세요
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg border p-8">
        <p className="text-muted-foreground">
          코딩 가이드 내용이 여기에 표시됩니다.
        </p>
      </div>
    </div>
  );
}
