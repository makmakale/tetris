import Cell from '@/components/Screen/components/Cell';
import { getUpcomingBlock } from '@/store/selectors';
import { UpcomingBlockGrid } from '@/styles/GameStatus';
import { useSelector } from 'react-redux';

function UpcomingBlock() {
  const upcomingBlock = useSelector(getUpcomingBlock);

  return (
    <div className="upcoming">
      <UpcomingBlockGrid width={upcomingBlock[0].length} height={upcomingBlock.length}>
        {upcomingBlock.map((row) => row.map((cell, x) => (
          <Cell key={x} type={cell[0] || 'hidden'} />
        )))}
      </UpcomingBlockGrid>
    </div>
  );
}

export default UpcomingBlock;
