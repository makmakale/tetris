import { useMobileMovement } from '@/hooks/useMobileMovement';
import { ControlKeyShape, StyledButton } from '@/styles/Controls';

function RightControlButton() {
  const { move } = useMobileMovement();

  return (
    <ControlKeyShape className="right">
      <StyledButton className="button" onClick={() => move(1)}>
        <i className="bx bx-chevron-right" />
      </StyledButton>
    </ControlKeyShape>
  );
}

export default RightControlButton;
