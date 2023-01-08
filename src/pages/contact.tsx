import { Form } from "react-router-dom";
import Card, { cardProps } from "../components/card/card";
import CardHandler from "../components/card/cardHandler";



export default function Contact() {
  document.title = "Contact";
  let contacts:cardProps[] = [];

  for(let i = 0; i < 10; i++) {
    let contact:cardProps = {
      title: "Test",
      description: "Test",
      image: "https://picsum.photos/200/300"
    }
    contacts.push(contact);
  }


  return (
    <>
      <div className="contact">
            <CardHandler 
            cards={contacts} 
            />
        </div>
    </>
    
  );
}

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }