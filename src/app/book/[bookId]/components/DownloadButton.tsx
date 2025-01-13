"use client";
import React from "react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-10 h-10 rounded-md bg-cyan-400 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary-600 active:bg-primary-700"
    >
      Download the book
    </button>
  );
};

export default DownloadButton;
