import { FC } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setType } from '../../features/filters/FilterSlice'

interface TypeFilterProps {
    types: string[];
  }
  
  export const TypeFilter: FC<TypeFilterProps> = ({ types }) => {
    const dispatch = useDispatch();
    const filterState = useSelector((state: RootState) => state.filter);
  
    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setType(event.target.value));
    };
  console.log(filterState.type);
  
    return (
      <>
        <label>
          Type:
          <select value={filterState.type} onChange={handleTypeChange}>
            <option value="">All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <h1>{filterState.type}</h1>
        </label>
      </>
    );
  };
  