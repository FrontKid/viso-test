import Button from '@mui/material/Button/Button';
import { useAppDispatch } from '../../../../shared/model/hooks';
import { deleteAllMarkers } from '../../model/slice';

const DeleteAll = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        zIndex: 1000,
      }}
      onClick={() => dispatch(deleteAllMarkers())}
      variant="contained"
      color="error"
    >
      Delete All Markers
    </Button>
  );
};

export { DeleteAll };
