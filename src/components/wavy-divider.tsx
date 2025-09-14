interface WavyDividerProps {
  className?: string;
}

const WavyDivider = ({ className = "" }: WavyDividerProps) => {
  return <div className={`wavy-line ${className}`} />;
};

export default WavyDivider;