import { motion } from "framer-motion";

interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  tier: string;
}

const tierColors: Record<string, string> = {
  Advanced: "stroke-accent",
  Intermediate: "stroke-primary",
  Learning: "stroke-muted-foreground",
};

const tierBadge: Record<string, string> = {
  Advanced: "bg-accent/15 text-accent",
  Intermediate: "bg-primary/15 text-primary",
  Learning: "bg-muted text-muted-foreground",
};

export default function CircularProgress({ value, size = 90, strokeWidth = 6, label, tier }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow cursor-default group"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-muted"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className={tierColors[tier] || "stroke-accent"}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - value / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading font-bold text-sm">{value}%</span>
        </div>
      </div>
      <span className="font-medium text-xs text-center leading-tight group-hover:text-primary transition-colors">{label}</span>
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${tierBadge[tier] || tierBadge.Learning}`}>
        {tier}
      </span>
    </motion.div>
  );
}
