export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  인재채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  투자정보
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">고객센터</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  자주묻는질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  1:1 문의
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">SNS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  인스타그램
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
