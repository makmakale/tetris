import DownControlButton from '@/components/Controls/components/ControlButtons/components/DownControlButton';
import LeftControlButton from '@/components/Controls/components/ControlButtons/components/LeftControlButton';
import RightControlButton from '@/components/Controls/components/ControlButtons/components/RightControlButton';
import RotateControlButton from '@/components/Controls/components/ControlButtons/components/RotateControlButton';
import UpControlButton from '@/components/Controls/components/ControlButtons/components/UpControlButton';
import { ControlKeys, ControlsButtonGroup } from '@/styles/Controls';

function ControlButtons() {
  return (
    <ControlsButtonGroup>
      <ControlKeys>
        <UpControlButton />
        <LeftControlButton />
        <RightControlButton />
        <DownControlButton />

        <div className="icon"><i className="bx bx-move" /></div>
      </ControlKeys>

      <RotateControlButton />
    </ControlsButtonGroup>
  );
}

export default ControlButtons;
