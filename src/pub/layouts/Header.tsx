import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/pub" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Rocket className="h-5 w-5" />
          <span className="text-xl font-bold">사이트 이름</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link 
            to="/pub" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            홈
          </Link>
          <Link 
            to="/pub/about" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            소개
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/pub/login">로그인</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/">가이드 보기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
