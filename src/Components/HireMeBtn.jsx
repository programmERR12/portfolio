

function HireMeBtn() {
  return (
    <div>
      <button type="button" className="button">
        <span className="fold"></span>

        <div className="points_wrapper">
          {Array.from({ length: 10 }).map((_, i) => (
            <i key={i} className="point"></i>
          ))}
        </div>

        <span className="inner">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
          <a href="http://www.linkedin.com/in/divyanshu9782" target="_blank"
                rel="noopener noreferrer" className="full-link"> Hire Me </a>
         
        </span> 
      </button>
    </div>
  );
}

export default HireMeBtn;
