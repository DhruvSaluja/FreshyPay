// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// // import rollSound from "./roll.mp3"; // Add a rolling cylinder sound here
// // import ReactSound from "react-sound";

// // Styled-components for animation and layout
// const spinAnimation = keyframes`
//   0% { transform: translateY(0); }
//   100% { transform: translateY(-300px); }
// `;

// const ReelContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 50px;
// `;

// const Reel = styled.div`
//   width: 100px;
//   height: 100px;
//   margin: 0 10px;
//   border: 2px solid #333;
//   background: #000;
//   color: white;
//   font-size: 2em;
//   font-weight: bold;
//   overflow: hidden;
//   text-align: center;
// `;

// const ReelSlot = styled.div`
//   animation: ${(props) =>
//     props.isSpinning ? `${spinAnimation} 1s linear infinite` : "none"};
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin-top: 30px;
//   font-size: 1em;
//   background-color: #ff4500;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #ff6347;
//   }
// `;

// const Message = styled.div`
//   font-size: 1.5em;
//   margin-top: 20px;
//   font-weight: bold;
//   text-align: center;
//   color: ${(props) => (props.isWin ? "green" : "red")};
// `;

// const SlotMachine = () => {
//   const [reels, setReels] = useState(["7", "7", "7"]);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [message, setMessage] = useState("");
//   const [playSound, setPlaySound] = useState(false);

//   const symbols = ["7", "🍒", "🍋", "🔔", "💎"]; // Slot symbols

//   // Spin the reels
//   const spin = () => {
//     setIsSpinning(true);
//     setPlaySound(true);

//     setTimeout(() => {
//       const newReels = Array(3)
//         .fill(null)
//         .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

//       setReels(newReels);
//       setIsSpinning(false);
//       setPlaySound(false);

//       // Check for win condition
//       if (newReels.every((symbol) => symbol === "7")) {
//         setMessage("🎉 Jackpot! You won! 🎉");
//       } else if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
//         setMessage("✨ You got a match! ✨");
//       } else {
//         setMessage("😞 Try again!");
//       }
//     }, 2000); // Spin duration
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>🎰 777 Slot Machine 🎰</h1>
//       <ReelContainer>
//         {reels.map((symbol, index) => (
//           <Reel key={index}>
//             <ReelSlot isSpinning={isSpinning}>{symbol}</ReelSlot>
//           </Reel>
//         ))}
//       </ReelContainer>
//       <Button onClick={spin} disabled={isSpinning}>
//         {isSpinning ? "Spinning..." : "Spin"}
//       </Button>
//       <Message isWin={message.includes("won")}>{message}</Message>
//       {/* <ReactSound
//         url={rollSound}
//         playStatus={playSound ? ReactSound.status.PLAYING : ReactSound.status.STOPPED}
//       /> */}
//     </div>
//   );
// };

// export default SlotMachine;


import React from 'react'

const Slot77 = () => {
  return (
    <>
  <title>Just a moment...</title>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="robots" content="noindex,nofollow" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            * {\n                box-sizing: border-box;\n                margin: 0;\n                padding: 0\n            }\n\n            html {\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n                color: #313131;\n                font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji\n            }\n\n            body {\n                display: flex;\n                flex-direction: column;\n                height: 100vh;\n                min-height: 100vh\n            }\n\n            .main-content {\n                margin: 8rem auto;\n                max-width: 60rem;\n                padding-left: 1.5rem\n            }\n\n            @media (width <=720px) {\n                .main-content {\n                    margin-top: 4rem\n                }\n            }\n\n            .h2 {\n                font-size: 1.5rem;\n                font-weight: 500;\n                line-height: 2.25rem\n            }\n\n            @media (width <=720px) {\n                .h2 {\n                    font-size: 1.25rem;\n                    line-height: 1.5rem\n                }\n            }\n\n            #challenge-error-text {\n                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);\n                background-repeat: no-repeat;\n                background-size: contain;\n                padding-left: 34px\n            }\n\n            @media (prefers-color-scheme:dark) {\n                body {\n                    background-color: #222;\n                    color: #d9d9d9\n                }\n            }\n        "
    }}
  />
  <meta httpEquiv="refresh" content={390} />
  <div className="main-wrapper" role="main">
    <div className="main-content">
      <noscript>
        &lt;div class="h2"&gt; &lt;span id="challenge-error-text"&gt;Enable
        JavaScript and cookies to continue&lt;/span&gt; &lt;/div&gt;
      </noscript>
    </div>
  </div>
</>

  )
}

export default Slot77
