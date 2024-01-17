import React, { useState } from "react";


// using the useState where the component has control over the input element

export default function AddColorForm({ onNewColor = f => f }) {

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("")
        setColor("#000000")
    };
    return (
        <form onSubmit={submit}>
            <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="color title..." required />
            <input value={color} onChange={event => setColor(event.target.value)} type="color" required />
            <button>ADD</button>
        </form>
    )
}



/// using the useRef which is imperative and not declarative as 
/// the DOM is manipulated with the component and the component has no control over
/// the input elements


// export default function AddColorForm({ onNewColor = f => f }) {
//     const txtTitle = useRef();
//     const hexColor = useRef();
//     const submit = e => {
//         e.preventDefault();
//         const title = txtTitle.current.value;
//         const color = hexColor.current.value;
//         onNewColor(title, color);
//         txtTitle.current.value = "";
//         hexColor.current.value = "";
//     };
//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexColor} type="color" required />
//             <button>ADD</button>
//         </form>
//     )
// }