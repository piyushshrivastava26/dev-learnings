import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numAllowed, setNumAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState();

  const passwordReference = useRef(null)

  // using useCallback hook with dependencies : use to optimise the fn
  const passwordGenerator = useCallback(
    function () {
      let pwd = "";
      let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfhgkjlzxvcnbm";

      if (numAllowed == true) {
        str = str + "0123456789";
      }
      if (charAllowed === true) {
        str += "`~!@#$%&?><";
      }

      for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * str.length) + 1;
        pwd += str.charAt(random); // passing the random generated "char" to the pwd.
      }

      setPassword(pwd);

    },
    [length, numAllowed, charAllowed, setPassword]
  );

  // passwordGenerator() // won't work bcz too many re-renders. React limits the number of renders to prevent an infinite loop.

  // calling the function when dependencies clicks
  // called for the first time when page loads if no dep. but with dep. loads according to dep.
  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])


  // for copying the password
  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    // addOn's-
    passwordReference.current.select()
    passwordReference.current.setSelectionRange(0, 27)
  }, [password, setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-sm px-4 py-3 my-8">
        <h1 className="text-black text-center my-3 text-2xl font-monument">Password Generator</h1>

        <div className="flex shadow-sm border-solid border-2 border-grey-500 rounded-lg overflow-x-hidden mb-4">
          <input 
          type="text" 
          value={password}
          placeholder="Generate a new password"
          readOnly
          className="outline-indigo-300 w-full py-1 px-3"

          ref={passwordReference}
          />
          {/* button to copy the password  */}
          <button
          className="outline-none bg-indigo-200 px-3 py-1 shrink-0 hover:bg-indigo-300 active:bg-indigo-400" 

          onClick={copyPassword}
          >Copy</button>
        </div>

        <div className="flex items-center text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mx-1">
            <input 
            type="range" 
            id="len"
            min={8}
            max={28}
            value={length}
            className="cursor-pointer"

            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="len">Length : {length}</label>    
          </div>

          <div className="flex items-center gap-x-1 mx-1">
             <input 
             type="checkbox" 
            //  name=""
             defaultChecked={numAllowed} 
             id="numInput" 
             className="cursor-pointer"

             onChange={() => {setNumAllowed((def) => !def)}}
             />
             <label htmlFor="numInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 mx-1">
            <input 
            type="checkbox" 
            // name="" 
            defaultChecked={charAllowed}
            id="specialChar"
            className="cursor-pointer"

            onChange={() => {setCharAllowed((def) => !def)}}
            />
            <label htmlFor="specialChar">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
