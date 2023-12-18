import { useMobileMovement } from '@/hooks/useMobileMovement';
import { ControlKeyShape, StyledButton } from '@/styles/Controls';

function DownControlButton() {
  const { startDropping, stopDropping } = useMobileMovement();

  return (
    <ControlKeyShape className="down">
      <StyledButton
        className="button"
        onMouseDown={startDropping}
        onMouseUp={stopDropping}
        onTouchStart={startDropping}
        onTouchEnd={stopDropping}
      >
        <i className="bx bx-chevron-down" />
      </StyledButton>
    </ControlKeyShape>
  );
}

export default DownControlButton;
