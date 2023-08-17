import {copyToClipboard} from "../utils/index.js";
import {toast} from "sonner";

export const AddressTable = ({address}) => {
  const {street, city, state} = address

  const onCopyToClipboard = async (text) => {
    await copyToClipboard(text)
    toast.success('Text copied on clipboard!')
  }
  return (
    <>
      <h4 className="text-center font-bold mb-2">Address</h4>
      <table className="w-11/12 mx-auto">
        <tbody>
        <tr>
          <td className="text-left text-gray-700/80">Street</td>
          <td className="text-right text-gray-900 hover:text-indigo-600 cursor-pointer" onClick={() => onCopyToClipboard(street)}>{street}</td>
        </tr>
        <tr>
          <td className="text-left text-gray-700/80">State</td>
          <td className="text-right text-gray-900 hover:text-indigo-600 cursor-pointer" onClick={() => onCopyToClipboard(city)}>{city}</td>
        </tr>
        <tr>
          <td className="text-left text-gray-700/80">City</td>
          <td className="text-right text-gray-900 hover:text-indigo-600 cursor-pointer" onClick={() => onCopyToClipboard(state)}>{state}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}