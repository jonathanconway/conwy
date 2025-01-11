import * as styles from "./modal-focus-trap-sink.css";

interface ModalFocusTrapSinkProps {
  readonly onFocus: VoidFunction;
}

export function ModalFocusTrapSink({ onFocus }: ModalFocusTrapSinkProps) {
  return <input className={styles.trapInput} type="input" onFocus={onFocus} />;
}
