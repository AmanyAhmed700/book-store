import React from 'react'

export const HeadingTitle = ({title}) => {
  return (
    <div style={divStyle}>
     <h2 style={h2Style}>{title}</h2>
    </div>
  );
}

const divStyle={
    padding:"10px 30px",
    baclgroundColor:"#fff", 
}


const h2Style={
    color:"black",
    fontSize:"30px",
    fontWeight:"500",
    borderBottom:"2px soild black",
    width:"max-content",
    paddingBottom:"5px",
}