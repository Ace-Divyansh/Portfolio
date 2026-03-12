import './ShinyText.css';

const ShinyText = ({ text, className = '', shineColor = '#f9de58', textColor = '#ff7700', speed = 2.8 }) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        '--shine-color': shineColor,
        '--text-color': textColor,
        '--shine-duration': `${speed}s`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
