import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 md:px-8 mt-auto bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-body text-muted">
          &copy; {currentYear} Muhammad Absar Siddiqui
        </p>
      </div>
    </footer>
  );
}

