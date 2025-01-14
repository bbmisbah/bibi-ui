import React from "react";
import Button from "../../../../packages/button/src/lib/button";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
      <Button variant="primary" onClick={() => alert("Primary Button")}>
        Primary
      </Button>
      <Button variant="secondary" size="large" fullWidth>
        Secondary
      </Button>
      <Button variant="danger" disabled>
        Disabled
      </Button>
    </div>
  );
};

// export default App;
