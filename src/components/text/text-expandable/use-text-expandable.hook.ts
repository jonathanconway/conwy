import { useEffect, useRef, useState } from "react";

interface TextExpandableState {
  readonly isExpanded: boolean;
  readonly isEnabled: boolean;
}

export function useTextExpandable() {
  const [state, setState] = useState<TextExpandableState>({
    isExpanded: false,
    isEnabled: true,
  });

  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerContainerRef.current && outerContainerRef.current) {
      if (
        innerContainerRef.current.clientHeight <=
        outerContainerRef.current.clientHeight
      ) {
        setState({
          ...state,
          isEnabled: false,
        });
      }
    }

    // Only need to run on init, as content is not expected to change dynamically.

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleClick = () => {
    setState({ ...state, isExpanded: !state.isExpanded });
  };

  const { isExpanded, isEnabled } = state;

  return {
    isExpanded,
    isEnabled,
    outerContainerRef,
    innerContainerRef,

    handleToggleClick,
  };
}
