import { useDispatch, useSelector } from 'react-redux';
import { Label } from './Filter.styled';
// import PropTypes from 'prop-types';
import { getVisibleContact } from 'redux/filterSlice/filterSlice';

export function Filter() {
  const filter = useSelector(state => state.filterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(getVisibleContact(e.target.value))}
        />
      </Label>
    </>
  );
}

// Filter.propTypes = {
//   changeFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
