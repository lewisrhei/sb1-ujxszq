import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from '@/components/ui/visually-hidden';

interface FormstackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'getStarted' | 'contact';
}

export function FormstackModal({ isOpen, onClose, type }: FormstackModalProps) {
  useEffect(() => {
    if (isOpen) {
      const loadForm = () => {
        const formstackContainer = document.getElementById('formstackForm');
        if (formstackContainer) {
          // Clear any existing content
          formstackContainer.innerHTML = '';
          
          // Create and append the script element
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://rheicom.formstack.com/forms/js.php/video_data_licensing';
          script.async = true;
          
          formstackContainer.appendChild(script);
        }
      };

      // Small delay to ensure the modal is rendered
      setTimeout(loadForm, 100);

      return () => {
        // Cleanup
        const formstackContainer = document.getElementById('formstackForm');
        if (formstackContainer) {
          formstackContainer.innerHTML = '';
        }
        const scripts = document.querySelectorAll('script[src*="formstack.com"]');
        scripts.forEach(script => script.remove());
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-blue-900 text-white">
        <VisuallyHidden>
          <DialogTitle>
            {type === 'getStarted' ? 'Get Started with DataStream' : 'Contact DataStream'}
          </DialogTitle>
        </VisuallyHidden>
        <div className="min-h-[600px] w-full">
          <div id="formstackForm" className="formstack-container"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}