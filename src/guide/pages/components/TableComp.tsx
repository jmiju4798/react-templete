import { ShowcaseSection } from "./Showcase-section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

export default function TableComp() {
  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "₩250,000" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "₩150,000" },
    {
      id: "INV003",
      status: "Unpaid",
      method: "Bank Transfer",
      amount: "₩350,000",
    },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "₩450,000" },
    { id: "INV005", status: "Paid", method: "PayPal", amount: "₩550,000" },
  ];

  const users = [
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "박지성",
      email: "park@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "정수지",
      email: "jung@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 5,
      name: "최민호",
      email: "choi@example.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Basic Table */}
      <ShowcaseSection title="기본 테이블" description="기본 table 컴포넌트">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>김철수</TableCell>
              <TableCell>kim@example.com</TableCell>
              <TableCell>개발자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>이영희</TableCell>
              <TableCell>lee@example.com</TableCell>
              <TableCell>디자이너</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>박지성</TableCell>
              <TableCell>park@example.com</TableCell>
              <TableCell>PM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Table with Caption */}
      <ShowcaseSection
        title="캡션이 있는 테이블"
        description="테이블 설명이 포함된 테이블"
      >
        <Table>
          <TableCaption>최근 5개의 결제 내역</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>결제 ID</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>방법</TableHead>
              <TableHead className="text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Table with Status Badges */}
      <ShowcaseSection
        title="상태 배지가 있는 테이블"
        description="시각적 상태 표시"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>결제 ID</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>방법</TableHead>
              <TableHead className="text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      invoice.status === "Paid"
                        ? "default"
                        : invoice.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {invoice.status === "Paid"
                      ? "완료"
                      : invoice.status === "Pending"
                      ? "대기"
                      : "미납"}
                  </Badge>
                </TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Selectable Table */}
      <ShowcaseSection
        title="선택 가능한 테이블"
        description="체크박스로 행 선택"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "default" : "secondary"}
                  >
                    {user.status === "Active" ? "활성" : "비활성"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Table with Actions */}
      <ShowcaseSection
        title="액션이 있는 테이블"
        description="각 행에 액션 버튼 포함"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead className="text-right">액션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Sortable Table */}
      <ShowcaseSection
        title="정렬 가능한 테이블"
        description="컬럼 헤더를 클릭하여 정렬"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" className="h-8 px-2">
                  이름
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-8 px-2">
                  이메일
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-8 px-2">
                  역할
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "default" : "secondary"}
                  >
                    {user.status === "Active" ? "활성" : "비활성"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Compact Table */}
      <ShowcaseSection title="컴팩트 테이블" description="작은 여백의 테이블">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="h-8">제품</TableHead>
              <TableHead className="h-8">SKU</TableHead>
              <TableHead className="h-8">재고</TableHead>
              <TableHead className="h-8 text-right">가격</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableRow key={i}>
                <TableCell className="py-2">제품 {i}</TableCell>
                <TableCell className="py-2">SKU-{i}00</TableCell>
                <TableCell className="py-2">{i * 10}개</TableCell>
                <TableCell className="py-2 text-right">
                  ₩{(i * 10000).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Striped Table */}
      <ShowcaseSection
        title="줄무늬 테이블"
        description="교대로 배경색이 있는 테이블"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>부서</TableHead>
              <TableHead>직급</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <TableRow key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                <TableCell>{i}</TableCell>
                <TableCell>직원 {i}</TableCell>
                <TableCell>
                  {i % 3 === 0 ? "개발팀" : i % 3 === 1 ? "디자인팀" : "기획팀"}
                </TableCell>
                <TableCell>{i % 2 === 0 ? "주임" : "대리"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Empty State Table */}
      <ShowcaseSection
        title="빈 상태 테이블"
        description="데이터가 없을 때의 테이블"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>주문 번호</TableHead>
              <TableHead>고객명</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-muted-foreground">주문 내역이 없습니다</p>
                  <Button variant="outline" size="sm">
                    첫 주문하기
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ShowcaseSection>

      {/* Responsive Table */}
      <ShowcaseSection
        title="반응형 테이블"
        description="작은 화면에서 스크롤 가능"
      >
        <div className="w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[100px]">ID</TableHead>
                <TableHead className="min-w-[150px]">이름</TableHead>
                <TableHead className="min-w-[200px]">이메일</TableHead>
                <TableHead className="min-w-[120px]">부서</TableHead>
                <TableHead className="min-w-[120px]">직급</TableHead>
                <TableHead className="min-w-[100px]">입사일</TableHead>
                <TableHead className="min-w-[100px]">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>개발팀</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>2024-01-01</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {user.status === "Active" ? "재직" : "퇴사"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ShowcaseSection>
    </div>
  );
}
