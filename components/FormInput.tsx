import { FormInputProps } from '@/types/FormInput';
import { TextInputProps } from '@/types/TextInput';
import getIcon from '@/utils/getIcon';

export default function FormInput({
  name,
  heading,
  icon,
  type,
}: FormInputProps) {
  return (
    <div className="flex flex-col flex-1">
      <p className=" mb-1 font-medium">{heading}</p>
      <div className="flex flex-row w-full items-center bg-white p-2 px-3 border-2 border-gray-200 rounded-lg">
        <div>{getIcon({ icon, color: 'black', size: 18 })}</div>
        <input name={name} type={type} className='flex-1 ml-2'/>
      </div>
    </div>
  );
}
