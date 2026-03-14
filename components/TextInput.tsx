import { TextInputProps } from '@/types/TextInput';
import getIcon from '@/utils/getIcon';

export default function TextInput({
  heading,
  icon,
  type,
  value,
  setValue,
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xs mb-1 font-medium">{heading.toUpperCase()}</p>
      <div className="flex flex-row w-full items-center bg-white p-2 border-2 border-gray-200 rounded-lg">
        <div>{getIcon({ icon, color: 'black', size: 18 })}</div>
        {/* <div> */}
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mx-2 outline-none flex-1"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
