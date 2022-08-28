import { useState } from 'react';
export default function TextInput() {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    // <Box
    //   sx={{
    //     py: 2,
    //     display: 'grid',
    //     gap: 2,
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    //   }}
    // >
    //   <TextField
    //     label="Solid"
    //     placeholder="Type in here…"
    //     variant="plain"
    //     value={value}
    //     onChange={(e) => handleChange(e)}
    //   />

    //   {/* <Field label="Outlined" /> */}
    // </Box>
    <div>hello</div>
  );
}
