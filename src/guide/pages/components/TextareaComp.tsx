import { ShowcaseSection } from "./Showcase-section";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaComp() {
  return (
    <div className="space-y-6">
      {/* Basic Textarea */}
      <ShowcaseSection
        title="기본 텍스트 영역"
        description="기본 textarea 컴포넌트"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" placeholder="메시지를 입력하세요..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">설명</Label>
            <Textarea
              id="description"
              placeholder="상세한 설명을 입력하세요..."
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* Textarea with Character Count */}
      <ShowcaseSection
        title="글자 수 제한"
        description="최대 글자 수가 있는 textarea"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bio">자기소개 (최대 150자)</Label>
            <Textarea
              id="bio"
              placeholder="자기소개를 입력하세요..."
              maxLength={150}
            />
            <p className="text-sm text-muted-foreground text-right">0 / 150</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">피드백 (최대 500자)</Label>
            <Textarea
              id="feedback"
              placeholder="피드백을 입력하세요..."
              maxLength={500}
            />
            <p className="text-sm text-muted-foreground text-right">0 / 500</p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Textarea States */}
      <ShowcaseSection
        title="텍스트 영역 상태"
        description="다양한 상태의 textarea"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="normal">일반 상태</Label>
            <Textarea id="normal" placeholder="일반 상태의 textarea" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">비활성화</Label>
            <Textarea id="disabled" placeholder="비활성화 상태" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly">읽기 전용</Label>
            <Textarea
              id="readonly"
              value="이 텍스트는 읽기 전용입니다."
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="error">오류 상태</Label>
            <Textarea
              id="error"
              placeholder="오류가 있는 textarea"
              className="border-red-500 focus-visible:ring-red-500"
            />
            <p className="text-sm text-red-500">이 필드는 필수입니다</p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Textarea Sizes */}
      <ShowcaseSection
        title="텍스트 영역 크기"
        description="다양한 높이의 textarea"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="small">Small (3줄)</Label>
            <Textarea id="small" placeholder="작은 크기의 textarea" rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="medium">Medium (5줄)</Label>
            <Textarea id="medium" placeholder="중간 크기의 textarea" rows={5} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large">Large (8줄)</Label>
            <Textarea id="large" placeholder="큰 크기의 textarea" rows={8} />
          </div>
        </div>
      </ShowcaseSection>

      {/* Textarea with Helper Text */}
      <ShowcaseSection
        title="도움말 텍스트"
        description="설명이 포함된 textarea"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="comment">댓글</Label>
            <Textarea id="comment" placeholder="댓글을 입력하세요..." />
            <p className="text-sm text-muted-foreground">
              건설적이고 정중한 댓글을 작성해 주세요
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="code">코드 스니펫</Label>
            <Textarea
              id="code"
              placeholder="코드를 입력하세요..."
              className="font-mono"
            />
            <p className="text-sm text-muted-foreground">
              마크다운 코드 블록을 사용할 수 있습니다
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Form Example */}
      <ShowcaseSection title="폼 예시" description="실제 사용 예시 - 문의 양식">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Textarea
              id="name"
              placeholder="이름을 입력하세요"
              rows={1}
              className="resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">제목 *</Label>
            <Textarea
              id="subject"
              placeholder="제목을 입력하세요"
              rows={1}
              className="resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry">문의 내용 *</Label>
            <Textarea
              id="inquiry"
              placeholder="문의하실 내용을 상세히 입력해 주세요..."
              rows={6}
            />
            <p className="text-sm text-muted-foreground">
              최소 20자 이상 입력해 주세요
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Auto-resize Textarea */}
      <ShowcaseSection
        title="리사이즈 옵션"
        description="리사이즈 가능/불가능한 textarea"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resizable">리사이즈 가능 (기본)</Label>
            <Textarea
              id="resizable"
              placeholder="모서리를 드래그하여 크기를 조절할 수 있습니다"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="no-resize">리사이즈 불가</Label>
            <Textarea
              id="no-resize"
              placeholder="크기 조절이 불가능합니다"
              className="resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-vertical">세로만 리사이즈</Label>
            <Textarea
              id="resize-vertical"
              placeholder="세로로만 크기를 조절할 수 있습니다"
              className="resize-y"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* Contact Form Example */}
      <ShowcaseSection
        title="연락처 폼"
        description="실제 사용 예시 - 연락처 양식"
      >
        <div className="space-y-4 rounded-lg border p-4">
          <div>
            <h3 className="font-semibold mb-1">문의하기</h3>
            <p className="text-sm text-muted-foreground mb-4">
              궁금하신 사항을 남겨주세요. 빠른 시일 내에 답변드리겠습니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">이름 *</Label>
              <Textarea
                id="contact-name"
                placeholder="이름"
                rows={1}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">이메일 *</Label>
              <Textarea
                id="contact-email"
                placeholder="email@example.com"
                rows={1}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">메시지 *</Label>
              <Textarea
                id="contact-message"
                placeholder="문의 내용을 입력하세요..."
                rows={5}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Review Form Example */}
      <ShowcaseSection
        title="리뷰 작성 폼"
        description="실제 사용 예시 - 제품 리뷰"
      >
        <div className="space-y-4 rounded-lg border p-4">
          <div>
            <h3 className="font-semibold mb-1">제품 리뷰 작성</h3>
            <p className="text-sm text-muted-foreground mb-4">
              제품에 대한 솔직한 리뷰를 남겨주세요
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>평점</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-title">리뷰 제목</Label>
              <Textarea
                id="review-title"
                placeholder="리뷰 제목을 입력하세요"
                rows={1}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-content">리뷰 내용</Label>
              <Textarea
                id="review-content"
                placeholder="제품에 대한 자세한 리뷰를 작성해주세요..."
                rows={6}
              />
              <p className="text-sm text-muted-foreground">
                최소 50자 이상 작성해주세요
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
