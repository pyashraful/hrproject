import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import InputDiscription from '../inputComponents/Discription';
import FromBox from '../inputComponents/FromBox';
// import { ItemProps } from './type';

function Email({ item }: { item: ItemProps }) {
  return (
    <FromBox item={item}>
      <AnswerInputDisable />
    </FromBox>
  );
}

export default Email;
