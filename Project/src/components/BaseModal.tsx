// components/BaseModal.tsx
import React from 'react';

interface BaseModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BaseModal({ isVisible, onClose, children }: BaseModalProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-[1000]"
      style={{
        position: 'absolute',
        zIndex: 2,
        top: '10%',
        right: '25%',
        background: 'white',
        width: '50%',
        borderRadius: '10px',
        padding: '50px'
      }}
      onClick={onClose}
    >
      <div
        className="relative mx-auto p-8 border w-96 shadow-lg rounded-md bg-white animate-fadeIn my-8"
        style={{ height: '100%', width: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
