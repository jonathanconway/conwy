import * as styles from "./modal-focus-trap-sink.css";

interface ModalFocusTrapSinkProps {
  readonly onFocus: VoidFunction;
}

export function ModalFocusTrapSink(props: ModalFocusTrapSinkProps) {
  const { onFocus } = props;

  return <input className={styles.trapInput} type="input" onFocus={onFocus} />;
}
