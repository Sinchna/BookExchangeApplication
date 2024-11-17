import React from 'react';  //Imported from the react package.

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email us at support@bookexchange.com</p>
    </div>
  );
};
/*/Contact: This is a functional component in React. Functional components are a simpler way to define components in React.
The function does not manage state or lifecycle methods, making it ideal for displaying static content like contact information.
The component returns a JSX block, which will render HTML-like syntax.
<div>: A container element for the content.
<h2>: This header displays the title "Contact Us".
<p>: A paragraph element containing an email address "support@bookexchange.com" for users to contact the support team./*/
export default Contact;
//export default: This syntax makes the Contact component the default export of the module, allowing it to be imported into other files within the project.