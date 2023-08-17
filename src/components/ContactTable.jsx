import {copyToClipboard} from "../utils/index.js";
import {toast} from "sonner";

export const ContactTable = ({contact}) => {
  const {site, email, phone} = contact

  const onCopyToClipboard = async (text) => {
    await copyToClipboard(text)
    toast.success('Text copied on clipboard!')
  }
  return (
    <>
      <h4 className="text-center font-bold mb-2">Contact</h4>
      <table className="w-11/12 mx-auto">
        <tbody>
        <tr>
          <td className="text-left text-gray-700/80">Email</td>
          <td className="text-right text-gray-900 cursor-pointer hover:text-indigo-600" onClick={() => onCopyToClipboard(email)}>{email}</td>
        </tr>
        <tr>
          <td className="text-left text-gray-700/80">Phone</td>
          <td className="text-right text-gray-900 cursor-pointer hover:text-indigo-600" onClick={() => onCopyToClipboard(phone)}>{phone}</td>
        </tr>
        <tr>
          <td className="text-left text-gray-700/80">Site</td>
          <td className="text-right text-gray-900 cursor-pointer hover:text-indigo-600" onClick={() => onCopyToClipboard(site)}>{site}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}
// Brandon_Quiros@gmail.com 560 092 151 http://débora.gob.mx