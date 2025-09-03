export type TaskFieldProps = {
  type: 'text' | 'radio';
  label: string;
  value: any;
  options?: string[];
  onChange: (value: any) => void;
};
