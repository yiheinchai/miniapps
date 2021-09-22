const containerStyle = {
  display: "flex",
  flexFlow: "row wrap",
  gap: "2rem",
};

export const AppsContainer = (props) => {
  return <div style={containerStyle}>{props.children}</div>;
};
