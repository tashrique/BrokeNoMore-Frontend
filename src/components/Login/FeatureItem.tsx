import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-white/10 hover:border-cyan-500/20 group">
    <div className="flex-shrink-0 p-2 bg-slate-800/80 rounded-lg group-hover:bg-slate-700/80 transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-white tracking-wide group-hover:text-cyan-400 transition-colors font-display text-base">
        {title}
      </h3>
      <p className="text-slate-300 font-light text-sm">{description}</p>
    </div>
  </div>
);
