import { useMobileMovement } from '@/hooks/useMobileMovement';
import { ControlKeyShape, StyledButton } from '@/styles/Controls';

function UpControlButton() {
  const {
    speedDrop, backToNormalSpeed,
  } = useMobileMovement();

  return (
    <ControlKeyShape className="up">
      <StyledButton
        className="button"
        onMouseDown={speedDrop}
        onMouseUp={backToNormalSpeed}
        onTouchStart={speedDrop}
        onTouchEnd={backToNormalSpeed}
      >
        <i className="bx bx-chevron-up" />
      </StyledButton>
    </ControlKeyShape>
  );
}

export default UpControlButton;
