import { ShowcaseSection } from "./Showcase-section";
import { 
  Home, 
  User, 
  Settings, 
  Search, 
  Mail, 
  Bell,
  Heart,
  Star,
  Download,
  Upload,
  Trash2,
  Edit,
  Plus,
  Minus,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IconComp() {
  return (
    <div className="space-y-6">
      <ShowcaseSection title="기본 아이콘" description="Lucide React 아이콘 라이브러리">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <User className="w-6 h-6" />
            <span className="text-xs">User</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Search className="w-6 h-6" />
            <span className="text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-6 h-6" />
            <span className="text-xs">Mail</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Bell className="w-6 h-6" />
            <span className="text-xs">Bell</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Action Icons */}
      <ShowcaseSection title="액션 아이콘" description="동작을 나타내는 아이콘">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <Download className="w-6 h-6" />
            <span className="text-xs">Download</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-6 h-6" />
            <span className="text-xs">Upload</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Trash2 className="w-6 h-6" />
            <span className="text-xs">Trash</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Edit className="w-6 h-6" />
            <span className="text-xs">Edit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Plus className="w-6 h-6" />
            <span className="text-xs">Plus</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Minus className="w-6 h-6" />
            <span className="text-xs">Minus</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Status Icons */}
      <ShowcaseSection title="상태 아이콘" description="상태를 나타내는 아이콘">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <Check className="w-6 h-6 text-green-500" />
            <span className="text-xs">Check</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <X className="w-6 h-6 text-red-500" />
            <span className="text-xs">X</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <span className="text-xs">Alert</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            <span className="text-xs">Info</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-xs">Heart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="text-xs">Star</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Navigation Icons */}
      <ShowcaseSection title="네비게이션 아이콘" description="방향을 나타내는 아이콘">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <ChevronRight className="w-6 h-6" />
            <span className="text-xs">Right</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ChevronLeft className="w-6 h-6" />
            <span className="text-xs">Left</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Icon Sizes */}
      <ShowcaseSection title="아이콘 크기" description="다양한 크기의 아이콘">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-4 h-4" />
            <span className="text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-6 h-6" />
            <span className="text-xs">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-8 h-8" />
            <span className="text-xs">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-12 h-12" />
            <span className="text-xs">X-Large</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Icon Colors */}
      <ShowcaseSection title="아이콘 색상" description="색상이 적용된 아이콘">
        <div className="flex items-center gap-8">
          <Heart className="w-8 h-8 text-red-500" />
          <Star className="w-8 h-8 text-yellow-500" />
          <Check className="w-8 h-8 text-green-500" />
          <AlertCircle className="w-8 h-8 text-amber-500" />
          <Info className="w-8 h-8 text-blue-500" />
          <Mail className="w-8 h-8 text-purple-500" />
        </div>
      </ShowcaseSection>

      {/* Icons with Buttons */}
      <ShowcaseSection title="버튼과 함께" description="버튼 내부의 아이콘">
        <div className="flex gap-2 flex-wrap">
          <Button>
            <Download className="w-4 h-4 mr-2" />
            다운로드
          </Button>
          <Button variant="secondary">
            <Upload className="w-4 h-4 mr-2" />
            업로드
          </Button>
          <Button variant="destructive">
            <Trash2 className="w-4 h-4 mr-2" />
            삭제
          </Button>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            수정
          </Button>
        </div>
      </ShowcaseSection>
    </div>
  );
}
