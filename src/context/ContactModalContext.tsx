import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactModalContextType {
  isOpen: boolean;
  subject: string;
  openModal: (subject?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState('Inquiry from AIRIES AI Website');

  const openModal = (newSubject?: string) => {
    if (newSubject) setSubject(newSubject);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, subject, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
