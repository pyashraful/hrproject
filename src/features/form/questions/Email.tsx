import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemProps } from './type';

function Email({ item }: itemProps) {
  return (
    <FromBox>
      <QuestionInput item={item} />
      <InputDiscription />
      <AnswerInputDisable />
      <FromInputAction />
    </FromBox>
  );
}

export default Email;
