export const PauseButton = ({ width = '2rem' }) => (
  <i>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: width }}
      fill="#fff"
      className="bi bi-pause"
      viewBox="0 0 16 16"
    >
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
    </svg>
  </i>
)
export const PlayButton = ({ width = '2rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-play"
    viewBox="0 0 16 16"
  >
    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
  </svg>
)
export const RelodButton = ({ width = '2rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-arrow-clockwise"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
    />
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
  </svg>
)
export const MuteButton = ({ width = '2rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-volume-mute"
    viewBox="0 0 16 16"
  >
    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
  </svg>
)
export const FullScreen = ({ width = '1.5rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-fullscreen"
    viewBox="0 0 16 16"
  >
    <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
  </svg>
)
export const ShareIcon = ({ width = '1.5rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-share"
    viewBox="0 0 16 16"
  >
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
)
export const UnmuteIcon = ({ width = '2rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width }}
    fill="#fff"
    className="bi bi-volume-down"
    viewBox="0 0 16 16"
  >
    <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
  </svg>
)
