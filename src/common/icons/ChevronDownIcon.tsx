interface Props {
  className: string;
}

export const ChevronDownIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="16"
    height="9"
    viewBox="0 0 15 9"
    fill="none"
  >
    <path
      d="M6.79289 8.70711C7.18342 9.09763 7.81658 9.09763 8.20711 8.70711L14.5711 2.34315C14.9616 1.95262 14.9616 1.31946 14.5711 0.928932C14.1805 0.538408 13.5474 0.538408 13.1569 0.928932L7.5 6.58579L1.84315 0.928932C1.45262 0.538408 0.819457 0.538408 0.428932 0.928932C0.0384081 1.31946 0.0384081 1.95262 0.428932 2.34315L6.79289 8.70711ZM6.5 7L6.5 8L8.5 8L8.5 7L6.5 7Z"
      fill="black"
    />
  </svg>
);
