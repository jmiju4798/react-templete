import { ShowcaseSection } from "./Showcase-section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogComp() {
  return (
    <div className="space-y-6">
      {/* Basic Dialog */}
      <ShowcaseSection
        title="기본 다이얼로그"
        description="간단한 다이얼로그 예제"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>다이얼로그 제목</DialogTitle>
              <DialogDescription>
                이것은 기본 다이얼로그입니다. 사용자에게 정보를 표시하거나
                확인을 받을 때 사용합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit">확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Form Dialog */}
      <ShowcaseSection
        title="폼 다이얼로그"
        description="입력 폼이 있는 다이얼로그"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">프로필 수정</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>
                프로필 정보를 수정하세요. 완료되면 저장을 클릭하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  이름
                </Label>
                <Input id="name" defaultValue="홍길동" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  사용자명
                </Label>
                <Input
                  id="username"
                  defaultValue="@honggildong"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Confirmation Dialog */}
      <ShowcaseSection
        title="확인 다이얼로그"
        description="사용자 확인이 필요한 작업"
      >
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">삭제</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                <DialogDescription>
                  이 작업은 되돌릴 수 없습니다. 정말로 삭제하시겠습니까?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button variant="destructive">삭제</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">로그아웃</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>로그아웃</DialogTitle>
                <DialogDescription>정말 로그아웃하시겠습니까?</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button>로그아웃</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ShowcaseSection>

      {/* Multiple Dialogs */}
      <ShowcaseSection
        title="다양한 크기의 다이얼로그"
        description="여러 스타일의 다이얼로그"
      >
        <div className="flex gap-2 flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">작은 다이얼로그</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[300px]">
              <DialogHeader>
                <DialogTitle>알림</DialogTitle>
                <DialogDescription>
                  작은 크기의 다이얼로그입니다.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">중간 다이얼로그</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>상세 정보</DialogTitle>
                <DialogDescription>
                  중간 크기의 다이얼로그입니다. 좀 더 많은 정보를 표시할 수
                  있습니다.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  여기에 추가 내용을 넣을 수 있습니다. 다이얼로그의 크기는
                  className으로 조절할 수 있습니다.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">큰 다이얼로그</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>자세한 내용</DialogTitle>
                <DialogDescription>
                  큰 크기의 다이얼로그입니다. 많은 양의 정보를 표시할 수 있습니다.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  이렇게 큰 다이얼로그에서는 여러 섹션으로 나눠서 정보를 표시할 수
                  있습니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  필요한 만큼 내용을 추가할 수 있으며, 스크롤도 자동으로
                  생성됩니다.
                </p>
              </div>
              <DialogFooter>
                <Button>확인</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ShowcaseSection>
    </div>
  );
}
