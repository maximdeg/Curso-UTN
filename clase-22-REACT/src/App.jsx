import React from "react";
import Button from "./components/Button";
import Layout from "./components/Layout";
import CodePointInfo from "./components/CodePointInfo";
import RowInfo from "./components/RowInfo";
import ColorCard from "./components/ColorCard/ColorCard";
import ColorCardList from "./components/ColorCardList/ColorCardList";

function App() {
  const colors = [
    {
      color: ["#01204e", "#028391", "#f6dcac", "#feae6f"],
      likes: 28,
      fecha: "23 hours",
    },
    {
      color: ["#240750", "#344C64", "#577B8D", "#57A6A1"],
      likes: 23443,
      fecha: "25 hours",
    },
    {
      color: ["#C40C0C", "#FF6500", "#FF8A08", "#FFC100"],
      likes: 6574,
      fecha: "20 hours",
    },
    {
      color: ["#A34343", "#E9C874", "#FBF8DD", "#C0D6E8"],
      likes: 9999,
      fecha: "15 hours",
    },
  ];

  return <ColorCardList colors={colors} />;
}
// function App() {
//   const names = ["Juan", "Pedro", "Maria"];
//   const listJSXNames = names.map(name => <div>{name}</div>);

//   return (
//     <div>
//       <h2>NAMES</h2>
//       {listJSXNames}
//     </div>
//   );
// }

// function App() {
//   return (
//     <CodePointInfo>
//       <span>Unicode: value</span>
//       <span>CSS: value</span>
//       <span>JS: value</span>
//       <span>HTML: value</span>
//     </CodePointInfo>
//   );
// }

// function App() {
//   return (
//     <>
//       <RowInfo title="Icon font">
//         <p>Using web font? Copy, paste, and go.</p>
//         <code>{`<i class="bi bi-window-sidebar"></i>
// `}</code>
//       </RowInfo>
//       <RowInfo title="Code point">
//         <span>Unicode: value</span>
//         <span>CSS: value</span>
//         <span>JS: value</span>
//         <span>HTML: value</span>
//       </RowInfo>
//       <RowInfo title="Copy HTML">
//         <p>Paste the SVG right into your project's code.</p>
//         <code>{`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
//                   <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
//                   <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
//                 </svg>`}</code>
//       </RowInfo>
//     </>
//   );
// }

// function App() {
//   return <ContactScreen />;
// }

const ContactScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <form action=""></form>
      <Button>
        Click <i class="bi bi-window-sidebar"></i>
      </Button>
    </Layout>
  );
};
const ProductsScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de productos</h2>
      <h3>Este es el subtitulo</h3>
    </Layout>
  );
};

export default App;
