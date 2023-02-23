export interface Props {
  type: string;
  name: string;
  placeholder: string;
}

const Input = (props: Props) => {
  return <input maxLength={24} {...props} />;
};

export default Input;
