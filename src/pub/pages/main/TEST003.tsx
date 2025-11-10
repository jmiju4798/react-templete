import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          환영합니다! 🚀
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          이곳은 실제 작업 페이지입니다. 
          원하는 콘텐츠로 자유롭게 커스터마이징하세요.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/pub/login">시작하기</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/">가이드 보기</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg bg-card">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">빠른 속도</h3>
          <p className="text-muted-foreground">
            최적화된 성능으로 빠른 사용자 경험을 제공합니다.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg bg-card">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">아름다운 디자인</h3>
          <p className="text-muted-foreground">
            세련된 UI/UX로 사용자를 사로잡습니다.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg bg-card">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold mb-2">안전한 보안</h3>
          <p className="text-muted-foreground">
            최신 보안 기술로 데이터를 안전하게 보호합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
