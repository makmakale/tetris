import { useMobileMovement } from '@/hooks/useMobileMovement';
import { RotateButton } from '@/styles/Controls';

function RotateControlButton() {
  const { rotate } = useMobileMovement();

  return (
    <RotateButton onClick={rotate}>
      <i className="bx bx-rotate-left" />
    </RotateButton>
  );
}

export default RotateControlButton;
