export interface CodingItem {
  category: string;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  id: string;
  filePath: string; // 파일 경로
  preview: string;
  manager: string;
  status: "컨펌대기" | "진행중" | "완료";
  note: string;
}

export const codingListData: CodingItem[] = [
  {
    category: "회원관리",
    depth1: "로그인",
    depth2: "일반로그인",
    depth3: "로그인폼",
    depth4: "유효성검사",
    id: "MCEM001",
    filePath: "login/TEST001",
    preview: "",
    manager: "홍길동",
    status: "완료",
    note: "",
  },
  {
    category: "회원관리",
    depth1: "로그인",
    depth2: "일반로그인",
    depth3: "로그인결과",
    depth4: "유효성검사",
    id: "MCEM002",
    filePath: "login/TEST002",
    preview: "",
    manager: "홍길동",
    status: "완료",
    note: "",
  },
  {
    category: "회원관리",
    depth1: "로그인",
    depth2: "ID 찾기",
    depth3: "로그인폼",
    depth4: "유효성검사",
    id: "MCEM003",
    filePath: "main/TEST003",
    preview: "",
    manager: "홍길동",
    status: "진행중",
    note: "",
  },
  {
    category: "게시판",
    depth1: "공지사항",
    depth2: "목록",
    depth3: "페이징처리",
    depth4: "검색기능",
    id: "MCBD001",
    filePath: "login/TEST001",
    preview: "",
    manager: "김철수",
    status: "진행중",
    note: "",
  },
  {
    category: "게시판",
    depth1: "공지사항",
    depth2: "결과",
    depth3: "페이징처리",
    depth4: "검색기능",
    id: "MCBD002",
    filePath: "main/TEST003",
    preview: "",
    manager: "김철수",
    status: "컨펌대기",
    note: "",
  },
  {
    category: "민원접수",
    depth1: "접수",
    depth2: "목록",
    depth3: "페이징처리",
    depth4: "검색기능",
    id: "MCCP001",
    filePath: "login/TEST001",
    preview: "",
    manager: "김철수",
    status: "컨펌대기",
    note: "",
  },
  {
    category: "민원접수",
    depth1: "접수",
    depth2: "결과",
    depth3: "페이징처리",
    depth4: "검색기능",
    id: "MCCP002",
    filePath: "login/TEST001",
    preview: "",
    manager: "김철수",
    status: "완료",
    note: "",
  },
  {
    category: "민원접수",
    depth1: "신청",
    depth2: "",
    depth3: "페이징처리",
    depth4: "검색기능",
    id: "MCCP003",
    filePath: "main/TEST003",
    preview: "",
    manager: "김철수",
    status: "완료",
    note: "",
  },
];
