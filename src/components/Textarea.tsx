import { memo } from "react";

interface TextareaProps {
  updateValue: (value: string) => void;
  value: string;
}

const Textarea = memo((props: TextareaProps) => {
  return (
    <textarea
      value={props.value}
      onChange={(e) => props.updateValue(e.target.value)}
      className="textarea"
      placeholder="Ваш комментарий:"
    />
  );
});

export default Textarea;
