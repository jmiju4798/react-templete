import { ShowcaseSection } from "./Showcase-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Lock } from "lucide-react";

export default function TabsComp() {
  return (
    <div className="space-y-6">
      {/* Basic Tabs */}
      <ShowcaseSection title="기본 탭" description="기본 tabs 컴포넌트">
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">탭 1</TabsTrigger>
            <TabsTrigger value="tab2">탭 2</TabsTrigger>
            <TabsTrigger value="tab3">탭 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p className="text-sm text-muted-foreground">
              첫 번째 탭의 내용입니다.
            </p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p className="text-sm text-muted-foreground">
              두 번째 탭의 내용입니다.
            </p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p className="text-sm text-muted-foreground">
              세 번째 탭의 내용입니다.
            </p>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      {/* Tabs with Icons */}
      <ShowcaseSection
        title="아이콘이 있는 탭"
        description="아이콘으로 시각적 구분"
      >
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              설정
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              알림
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="h-4 w-4 mr-2" />
              보안
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-4">
            <div className="space-y-2">
              <h3 className="font-semibold">프로필 정보</h3>
              <p className="text-sm text-muted-foreground">
                프로필 설정을 관리하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="space-y-2">
              <h3 className="font-semibold">설정</h3>
              <p className="text-sm text-muted-foreground">
                애플리케이션 설정을 변경하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4">
            <div className="space-y-2">
              <h3 className="font-semibold">알림</h3>
              <p className="text-sm text-muted-foreground">
                알림 설정을 관리하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="security" className="mt-4">
            <div className="space-y-2">
              <h3 className="font-semibold">보안</h3>
              <p className="text-sm text-muted-foreground">
                보안 설정을 강화하세요.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      {/* Full Width Tabs */}
      <ShowcaseSection title="전체 너비 탭" description="균등하게 분배된 탭">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="reports">리포트</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">개요</h3>
              <p className="text-sm text-muted-foreground">
                대시보드 개요를 확인하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">분석</h3>
              <p className="text-sm text-muted-foreground">
                상세한 분석 데이터를 확인하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">리포트</h3>
              <p className="text-sm text-muted-foreground">
                생성된 리포트를 확인하세요.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      {/* Tabs with Cards */}
      <ShowcaseSection
        title="카드형 탭 콘텐츠"
        description="각 탭마다 카드 스타일의 콘텐츠"
      >
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>계정 정보</CardTitle>
                <CardDescription>계정 정보를 수정하세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" defaultValue="홍길동" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="hong@example.com"
                  />
                </div>
                <Button>저장</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>비밀번호 변경</CardTitle>
                <CardDescription>새로운 비밀번호를 입력하세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">현재 비밀번호</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">새 비밀번호</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">비밀번호 확인</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button>변경</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      {/* Product Details Example */}
      <ShowcaseSection
        title="제품 상세 예시"
        description="실제 사용 예시 - E-커머스"
      >
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="specs">사양</TabsTrigger>
            <TabsTrigger value="reviews">리뷰</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="space-y-4">
              <h3 className="font-semibold">제품 설명</h3>
              <p className="text-sm text-muted-foreground">
                이 제품은 최고 품질의 소재로 만들어졌으며, 뛰어난 내구성과
                편안함을 제공합니다. 일상생활은 물론 다양한 활동에 적합합니다.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>고품질 소재 사용</li>
                <li>우수한 내구성</li>
                <li>세련된 디자인</li>
                <li>다양한 색상 옵션</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specs" className="mt-4">
            <div className="space-y-4">
              <h3 className="font-semibold">제품 사양</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">크기</span>
                  <span>M, L, XL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">무게</span>
                  <span>500g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">소재</span>
                  <span>폴리에스터 100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">원산지</span>
                  <span>대한민국</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">고객 리뷰</h3>
                <div className="flex items-center gap-1">
                  <span className="text-lg">⭐</span>
                  <span className="font-semibold">4.5</span>
                  <span className="text-sm text-muted-foreground">(128)</span>
                </div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">사용자 {i}</span>
                      <span className="text-xs text-muted-foreground">
                        {"⭐".repeat(5)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      좋은 제품입니다. 만족스럽게 사용하고 있어요!
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="qa" className="mt-4">
            <div className="space-y-4">
              <h3 className="font-semibold">자주 묻는 질문</h3>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <p className="text-sm font-medium mb-1">
                    배송은 얼마나 걸리나요?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    일반 배송은 2-3일, 빠른 배송은 익일 배송이 가능합니다.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm font-medium mb-1">
                    교환/반품이 가능한가요?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    수령 후 7일 이내 교환/반품이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      {/* Dashboard Example */}
      <ShowcaseSection
        title="대시보드 예시"
        description="실제 사용 예시 - 관리자 대시보드"
      >
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="sales">판매</TabsTrigger>
            <TabsTrigger value="users">사용자</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "총 매출", value: "₩12,345,678", change: "+12.5%" },
                { title: "신규 사용자", value: "1,234", change: "+5.2%" },
                { title: "활성 세션", value: "567", change: "+2.1%" },
              ].map((stat, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sales" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">판매 통계</h3>
              <p className="text-sm text-muted-foreground">
                이번 달 판매 실적이 표시됩니다.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="users" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">사용자 관리</h3>
              <p className="text-sm text-muted-foreground">
                등록된 사용자 목록과 상태를 확인하세요.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">상세 분석</h3>
              <p className="text-sm text-muted-foreground">
                트래픽, 전환율 등 상세 분석 데이터를 확인하세요.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>
    </div>
  );
}
