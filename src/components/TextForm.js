import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  //   text ="new text" --> wrong way to change the text
  //   setText('new text') --> correct way to change the text

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    // console.log(event,"value");
    // setText("Oppssssss")
    props.showalert('success', 'Text is converted into upper case!!');

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("On change");
  };

  const handleTitleCase = () => {
    const titleCaseText = text
      .split(" ")
      .map(
        (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
    setText(titleCaseText);
    props.showalert('success', 'Text is converted into title case!!');
  };

  const handleCamelCase = () => {
    const camelize = (str) => {
      return str.replace(/\W+(.)/g, function (match, chr) {
        // console.log('match',match);
        // console.log("chr", chr);
        return chr.toUpperCase();
      });
    };
    setText(camelize(text));
    props.showalert('success', 'Text is converted into camel case!!');
  };

  const handleEmailExtractor = () => {
    let element = '';
    let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const email = text.split(" ").filter((item) => {
      if(emailRegex.test(item)){
        // console.log('item',item);
        element = item;
      }
      return element;
    })
    if(email.length){
      setText(email[0]);
    }else{
      alert('String does not contain any email!!!')
    }
  };

  return (
    <>
      <div className="container mb-3" style={{color : props.mode === "light" ? "black" : 'white'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myText"
          rows="8"
          style={{color : props.mode === "light" ? "black" : 'white', background : props.mode === "light" ? "white" : 'grey' }}
        ></textarea>
        <div className="btn btn-primary mt-2 mx-2" onClick={handleUpperCase}>
          Convert To Uppercase
        </div>
        <div className="btn btn-primary mt-2 mx-2" onClick={handleTitleCase}>
          Convert To titleCase
        </div>
        <div className="btn btn-primary mt-2 mx-2" onClick={handleCamelCase}>
          Convert To camelCase
        </div>
        <div className="btn btn-primary mt-2 mx-2" onClick={handleEmailExtractor}>
          Email Extractor
        </div>
      </div>
      <div className="container" style={{color : props.mode === "light" ? "black" : 'white'}}>
        <h1>Your text summary</h1>
        <p>
          {text && text.length ? text.split(" ").length : 0} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}

TextForm.protoTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Code with harry",
};
