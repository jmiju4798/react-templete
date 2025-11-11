import { ShowcaseSection } from "./Showcase-section";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchComp() {
  return (
    <div className="space-y-6">
      {/* Basic Switch */}
      <ShowcaseSection title="기본 스위치" description="기본 switch 컴포넌트">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="cursor-pointer">
              비행기 모드
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="wifi" defaultChecked />
            <Label htmlFor="wifi" className="cursor-pointer">
              Wi-Fi (기본 켜짐)
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Switch with Description */}
      <ShowcaseSection
        title="설명이 있는 스위치"
        description="라벨과 부가 설명이 함께 있는 스위치"
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <Label
                htmlFor="notifications"
                className="cursor-pointer font-medium"
              >
                알림 받기
              </Label>
              <p className="text-sm text-muted-foreground">
                새로운 메시지와 업데이트에 대한 알림을 받습니다
              </p>
            </div>
            <Switch id="notifications" />
          </div>
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <Label
                htmlFor="marketing-emails"
                className="cursor-pointer font-medium"
              >
                마케팅 이메일
              </Label>
              <p className="text-sm text-muted-foreground">
                프로모션과 특별 혜택에 대한 이메일을 받습니다
              </p>
            </div>
            <Switch id="marketing-emails" />
          </div>
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <Label
                htmlFor="security-emails"
                className="cursor-pointer font-medium"
              >
                보안 알림
              </Label>
              <p className="text-sm text-muted-foreground">
                계정 보안과 관련된 중요한 알림을 받습니다
              </p>
            </div>
            <Switch id="security-emails" defaultChecked />
          </div>
        </div>
      </ShowcaseSection>

      {/* Switch States */}
      <ShowcaseSection title="스위치 상태" description="다양한 상태의 스위치">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="switch-off" className="cursor-pointer">
              꺼짐 상태
            </Label>
            <Switch id="switch-off" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="switch-on" className="cursor-pointer">
              켜짐 상태
            </Label>
            <Switch id="switch-on" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="switch-disabled-off"
              className="cursor-not-allowed opacity-50"
            >
              비활성화 (꺼짐)
            </Label>
            <Switch id="switch-disabled-off" disabled />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="switch-disabled-on"
              className="cursor-not-allowed opacity-50"
            >
              비활성화 (켜짐)
            </Label>
            <Switch id="switch-disabled-on" disabled defaultChecked />
          </div>
        </div>
      </ShowcaseSection>

      {/* Settings Example */}
      <ShowcaseSection title="설정 예시" description="실제 사용 예시 - 앱 설정">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label
                htmlFor="dark-mode"
                className="cursor-pointer text-base font-medium"
              >
                다크 모드
              </Label>
              <p className="text-sm text-muted-foreground">
                어두운 테마로 전환합니다
              </p>
            </div>
            <Switch id="dark-mode" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label
                htmlFor="auto-save"
                className="cursor-pointer text-base font-medium"
              >
                자동 저장
              </Label>
              <p className="text-sm text-muted-foreground">
                변경사항을 자동으로 저장합니다
              </p>
            </div>
            <Switch id="auto-save" defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label
                htmlFor="analytics"
                className="cursor-pointer text-base font-medium"
              >
                사용 통계
              </Label>
              <p className="text-sm text-muted-foreground">
                앱 개선을 위한 익명 데이터 수집에 동의합니다
              </p>
            </div>
            <Switch id="analytics" />
          </div>
        </div>
      </ShowcaseSection>

      {/* Grouped Switches */}
      <ShowcaseSection
        title="그룹화된 스위치"
        description="카테고리별로 그룹화된 설정"
      >
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 font-semibold">개인정보</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="profile-public" className="cursor-pointer">
                  프로필 공개
                </Label>
                <Switch id="profile-public" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-email" className="cursor-pointer">
                  이메일 표시
                </Label>
                <Switch id="show-email" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-activity" className="cursor-pointer">
                  활동 내역 표시
                </Label>
                <Switch id="show-activity" defaultChecked />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">알림 설정</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="cursor-pointer">
                  푸시 알림
                </Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="cursor-pointer">
                  이메일 알림
                </Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="cursor-pointer">
                  SMS 알림
                </Label>
                <Switch id="sms-notifications" />
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Switch Sizes */}
      <ShowcaseSection
        title="스위치 크기"
        description="다양한 크기의 스위치 (커스텀)"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="small" className="scale-75" />
            <Label htmlFor="small" className="cursor-pointer text-sm">
              Small
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="default" />
            <Label htmlFor="default" className="cursor-pointer">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="large" className="scale-125" />
            <Label htmlFor="large" className="cursor-pointer text-lg">
              Large
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Privacy Settings Example */}
      <ShowcaseSection
        title="개인정보 설정"
        description="개인정보 관련 설정 예시"
      >
        <div className="space-y-4 rounded-lg border p-4">
          <div>
            <h3 className="font-semibold mb-1">데이터 수집</h3>
            <p className="text-sm text-muted-foreground mb-4">
              서비스 개선을 위한 데이터 수집 관련 설정
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 flex-1">
                <Label htmlFor="usage-data" className="cursor-pointer">
                  사용 데이터
                </Label>
                <p className="text-sm text-muted-foreground">
                  앱 사용 패턴 및 기능 사용 통계
                </p>
              </div>
              <Switch id="usage-data" defaultChecked />
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 flex-1">
                <Label htmlFor="crash-reports" className="cursor-pointer">
                  오류 보고서
                </Label>
                <p className="text-sm text-muted-foreground">
                  앱 충돌 및 오류 정보 전송
                </p>
              </div>
              <Switch id="crash-reports" defaultChecked />
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 flex-1">
                <Label htmlFor="location-data" className="cursor-pointer">
                  위치 정보
                </Label>
                <p className="text-sm text-muted-foreground">
                  위치 기반 서비스를 위한 위치 정보 수집
                </p>
              </div>
              <Switch id="location-data" />
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
