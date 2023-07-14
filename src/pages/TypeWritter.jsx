import '../index.css';
import { React, useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, arta, atelierCaveDark, codepenEmbed, gml } from "react-syntax-highlighter/dist/esm/styles/hljs";

function TypeWritter() {
  const first_text = `        
                    ...:--=+++*+++=-:.                      
                  .:-=+***##*##%####*+=--.                  
                .:-+**+=-::..::-=+*#%%#+=-.                 
               :-+#+:.       .....:::=#%+-.                 
             .:-=*+.        .....::::::=#+.                 
            .-=+++:.       ......::::::::%:                 
            =++=+=.    .......:::::::::::=*                 
           :+++*+=.  :=*##%##*+----------:*.                
           -*#**+-  .:---=+*+++=-==+##@%%##.                
          :+##***.  ..:-=*###+:..:-+##*+++*                 
          :*+*##+    .--+###*-.  .:*%@@#*-+                 
           -==+#=.   ..::---:.    .-+***=-:                 
             .+*:    ...::::..    .::-=--::                 
             .:=.    ...:---:..=:.:-:---::..                
               -.    ...:==:::-=+=+*+-==-:..                
               -.   ...-+**++*##%%%%%***=:-.                
               .:.....:+##+-----=++==*%%+-=                 
                .::.::-=#*-...:=+++-::#*=+:                 
                 .=::--=**==--=*##*=-=#**=                  
                  :==-=+++**+++####**###+                   
                   .==++++++****###%%%#:                    
                    .:-=+*****##%%%%%=                      
              .:      ..:-=**#%%%%%*==-.                    
          .-+-.         ...:-=+++=-:-=*@%*=-..              
  .:-+==+***:         .....:----=--:--=%%%@%@@@%#=:....     
 .:--:-:-:-:             ......::::::::=++++++++++=:::::::.`;
  const second_text = "console.log('hello')";
  const third_text = "//This prints out Hello World";

  const textState = ["istyping", "isdeleting"];
  const [typing1, setTyping1] = useState(textState[0]);
  const [text1, setText1] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing1 === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      } else if (text1 === first_text && typing1 === "istyping") {
        sleep(2000).then(() => {
          setTyping1(textState[1]);
        });
      }
    }, 0.01);

    return () => clearTimeout(timeout);
  }, [text1, typing1]);


  return (
    <div className="flex z-0" id="TypeWritter">
      <div className="flex">
        {/* type writer display */}
        <span>
          <div className=" text-xs">
            <SyntaxHighlighter className="blinking-cursor !bg-transparent !text-[#55B0AA]" language="javascript" style={gml}  >
              {text1}
            </SyntaxHighlighter>
          </div>
        </span>
      </div>
    </div>
  );
}

export default TypeWritter;