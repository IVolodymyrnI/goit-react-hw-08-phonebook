import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box, FormControl, Input } from '@chakra-ui/react';

import { setFilter } from 'redux/filter/filterSlice';

export function FilterByName() {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  const filter = watch('searchName', '');

  useEffect(() => {
    dispatch(setFilter(filter));
  }, [dispatch, filter]);

  return (
    <Box width={200} mr={4}>
      <form>
        <FormControl>
          <Input
            placeholder="Search"
            defaultValue=""
            {...register('searchName')}
          />
        </FormControl>
      </form>
    </Box>
  );
}
