import EDTLogo from "../assets/logo.svg"
export const Header = () => {
  return (
      <header className="bg-white shadow flex justify-center items-center fixed z-10 top-0 w-full py-3 px-8 text-sm">
        <img src={EDTLogo} alt="edt logo" className="w-10 h-auto"/>
        <h2 className="text-xl">EDT Test Front End</h2>
      </header>
  )
}