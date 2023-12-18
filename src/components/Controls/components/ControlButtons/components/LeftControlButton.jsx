import { useMobileMovement } from '@/hooks/useMobileMovement';
import { ControlKeyShape, StyledButton } from '@/styles/Controls';

function LeftControlButton() {
  const { move } = useMobileMovement();

  return (
    <ControlKeyShape className="left">
      <StyledButton className="button" onClick={() => move(-1)}>
        <i className="bx bx-chevron-left" />
      </StyledButton>
    </ControlKeyShape>
  );
}

export default LeftControlButton;
