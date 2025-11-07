import { useRef, useEffect } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageId: string;
}

export function PreviewModal({ isOpen, onClose, pageId }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] h-[800px] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">모바일 미리보기</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`/pub/${pageId}`}
            className="w-full h-full"
            style={{ transform: "scale(0.9)", transformOrigin: "top left" }}
          />
        </div>
      </div>
    </div>
  );
}
