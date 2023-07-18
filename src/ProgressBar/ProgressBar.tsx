import "./ProgressBar.css";

interface ProgressBarProps {
  value: number;
  max: number;
}

export const ProgressBar = ({ value, max }: ProgressBarProps) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};
