import ActionButtons from '@/components/Controls/components/ActionButtons';
import ControlButtons from '@/components/Controls/components/ControlButtons';
import { Controls } from '@/styles/Controls';
import { TetrisDivider } from '@/styles/TetrisDivider';

function ControlsWrapper() {
  return (
    <>
      <TetrisDivider />

      <Controls>
        <ActionButtons />
        <ControlButtons />
      </Controls>
    </>
  );
}

export default ControlsWrapper;
