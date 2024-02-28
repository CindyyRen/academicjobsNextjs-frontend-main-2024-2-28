const PostAJobIcon = ({ width = 32, height = 32, dimensions }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={dimensions ? dimensions : width}
    height={dimensions ? dimensions : height}
    viewBox="0 0 512 512"
    className="nav-icon"
    {...props}
  >
    <path
      fill="currentColor"
      d="M224 32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h377.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32m256 224c0-17.7-14.3-32-32-32H288v-32h-64v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32zM288 480v-96h-64v96c0 17.7 14.3 32 32 32s32-14.3 32-32"
    ></path>
  </svg>
);

export default PostAJobIcon;
