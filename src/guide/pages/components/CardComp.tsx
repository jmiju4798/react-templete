import { ShowcaseSection } from "./Showcase-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardComp() {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <ShowcaseSection
        title="기본 카드"
        description="Card 컴포넌트의 기본 구조입니다"
      >
        <Card>
          <CardHeader>
            <CardTitle>기본 카드</CardTitle>
            <CardDescription>Card 컴포넌트의 기본 구조입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              카드는 Header, Content, Footer로 구성됩니다.
            </p>
          </CardContent>
          <CardFooter>
            <Button>자세히 보기</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* Grid Cards */}
      <ShowcaseSection title="그리드 레이아웃">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>카드 1</CardTitle>
              <CardDescription>첫 번째 카드</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">그리드 레이아웃으로 배치된 카드</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>카드 2</CardTitle>
              <CardDescription>두 번째 카드</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">반응형으로 동작합니다</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>카드 3</CardTitle>
              <CardDescription>세 번째 카드</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">모바일에서는 1줄로 표시</p>
            </CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      {/* Stats Cards */}
      <ShowcaseSection title="통계 카드">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>총 사용자</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-xs text-green-600 mt-1">+12% 증가</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>활성 세션</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">567</div>
              <p className="text-xs text-green-600 mt-1">+8% 증가</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>수익</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$12,345</div>
              <p className="text-xs text-green-600 mt-1">+23% 증가</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>전환율</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3.2%</div>
              <p className="text-xs text-red-600 mt-1">-2% 감소</p>
            </CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      {/* Feature Cards */}
      <ShowcaseSection title="기능 소개 카드">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>⚡ 빠른 성능</CardTitle>
              <CardDescription>초고속 렌더링</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                최적화된 코드로 빠른 성능을 제공합니다. 사용자 경험을 극대화할
                수 있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">더 알아보기</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 커스터마이징</CardTitle>
              <CardDescription>자유로운 스타일링</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Tailwind CSS로 쉽게 커스터마이징할 수 있습니다. 원하는 대로
                디자인을 변경하세요.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">더 알아보기</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔒 보안</CardTitle>
              <CardDescription>안전한 데이터 관리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                최신 보안 기술로 데이터를 안전하게 보호합니다. 걱정 없이
                사용하세요.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">더 알아보기</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📱 반응형</CardTitle>
              <CardDescription>모든 기기에서 완벽하게</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 화면을
                제공합니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">더 알아보기</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseSection>
    </div>
  );
}
