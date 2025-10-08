
import React, { useState, useEffect } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const AgeVerification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('ageVerified');
    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-md bg-gray-900 text-white border border-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl font-bold text-white">
            Age Verification Required
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center py-4">
            <div className="mb-4">
              <div className="text-6xl mb-4">🔞</div>
              <p className="text-lg font-semibold mb-2 text-gray-100">
                You must be 18 or older to access this website.
              </p>
              <p className="text-sm text-gray-400">
                This website contains age-restricted products. By continuing, you confirm that you are of legal age to purchase these products in your jurisdiction.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col gap-2">
          <AlertDialogAction 
            onClick={handleVerify}
            className="bg-gray-200 hover:bg-white text-black w-full border border-gray-400 font-semibold"
          >
            Yes, I am 18 or older
          </AlertDialogAction>
          <AlertDialogCancel 
            onClick={handleReject}
            className="bg-black hover:bg-gray-800 text-white w-full border border-gray-700 font-semibold"
          >
            No, I am under 18
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AgeVerification;
