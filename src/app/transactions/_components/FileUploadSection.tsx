import React from "react";
import { Check, FileText, RefreshCw, Upload } from "lucide-react";
import { FileUpload } from "./types";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

interface FileUploadSectionProps {
  isDragging: boolean;
  file: FileUpload | null;
  uploading: boolean;
  onDragOver: (e: any) => void;
  onDragLeave: () => void;
  onDrop: (e: any) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
}

export function FileUploadSection({
  isDragging,
  file,
  uploading,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileChange,
  onUpload,
}: FileUploadSectionProps) {
  const isUploading: boolean = Boolean(uploading);
  const isDraggingState: boolean = Boolean(isDragging);

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDraggingState
            ? "border-cyan-500 bg-cyan-500/10"
            : "border-slate-700/50 hover:border-slate-600"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-slate-700/50 rounded-full">
            <Upload className="w-8 h-8 text-slate-300" />
          </div>
          <div>
            <h3 className="text-xl font-display text-slate-200">
              Upload Financial Statements
            </h3>
            <p className="text-slate-400 mt-2 max-w-md mx-auto">
              Drag & drop your bank statements, or browse to upload CSV, PDF, or
              OFX files.
            </p>
          </div>
          <input
            type="file"
            id="fileUpload"
            onChange={onFileChange}
            className="hidden"
            accept=".csv,.pdf,.ofx,.qfx"
          />
          <label htmlFor="fileUpload" className="cursor-pointer mt-2">
            <Button variant="secondary">Browse Files</Button>
          </label>
        </div>
      </div>

      {file && (
        <div className="mt-6">
          <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
            <FileText className="w-6 h-6 text-slate-300" />
            <div className="flex-1">
              <p className="font-medium text-slate-200">{file.name}</p>
              <p className="text-sm text-slate-400">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <Button
              onClick={onUpload}
              disabled={isUploading}
              variant="primary"
              icon={
                isUploading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )
              }
            >
              {isUploading ? "Processing..." : "Upload"}
            </Button>
          </div>
        </div>
      )}

      <div className="mt-6 border-t border-slate-700/50 pt-6">
        <SectionTitle title="Supported Formats" className="mb-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
          <div className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg">
            <Check className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">CSV Files</p>
              <p className="text-sm text-slate-400">
                Comma-separated values from most banks
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg">
            <Check className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">PDF Statements</p>
              <p className="text-sm text-slate-400">
                PDF bank statements (text must be extractable)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg">
            <Check className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">OFX/QFX Files</p>
              <p className="text-sm text-slate-400">
                Open Financial Exchange format
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
