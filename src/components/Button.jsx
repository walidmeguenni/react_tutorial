import React from "react";
import "../styles/button.css";
// const Button = (props) => {
//   const { name } = props;
//   return (
//     <button type="button" className="btn">
//       {name}
//     </button>
//   );
// };

// export default Button;

class Button extends React.Component {
  render() {
    return (
      <button type="button" className={this.props.styles}>
        {this.props.name}
      </button>
    );
  }
}
export default Button;
