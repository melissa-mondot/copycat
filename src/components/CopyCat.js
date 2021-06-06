import React from "react";
import PropTypes from "prop-types";
import { styles } from "../styles.js";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};
class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const input = this.props.input;
    const catOnChange = this.props.onChange;
    const catName = this.props.name;

    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80, color: "red" }}>
          Copy Cat {catName || ""}
        </h1>
        <form>
          <input type="text" value={input} onChange={catOnChange} />
        </form>
        <img
          style={styles.imgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{!copying ? null : input}</p>
      </div>
    );
  }
}

export default CopyCat;

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  catOnChange: PropTypes.any,
  name: PropTypes.string,
};
