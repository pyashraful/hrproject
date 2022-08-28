import * as React from 'react';
import { field } from '../formSlice';

export default function FormInputContainer({ item }: { item: field }) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  function handleClick() {
    setExpanded((pre) => !pre);
  }

  return (
    <div>
      <div onClick={() => handleClick()}>click</div>
      <div>
        <h2>i am going to be collapse</h2>
      </div>
      <h1>hello</h1>
      <div>
        <h2>i am going to be collapse</h2>
      </div>
    </div>
  );
}
