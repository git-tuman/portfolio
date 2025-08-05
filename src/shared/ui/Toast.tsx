import { VISIBLE } from "../constants";

const Toast = ({ text, visible }: { text: string; visible: boolean }) => (
  <div className={`toast ${visible ? VISIBLE : ""}`}>{text}</div>
);

export default Toast;
