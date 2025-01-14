import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header'

const App: React.FC = () => {
  return (
    <>
      {/* Header Component */}
      <Header
        title="Documentation App"
        subtitle="Components Library"
        actions={
          <Button
            label="Click Me"
            onClick={() => alert('Button Clicked!')}
            type="button"
            size="large"
            variant='primary'
          />
        }
      />

      {/* Main Content */}
      <main style={{ padding: '2rem' }}>
        <h2>Main Content</h2>
        <p>This is the main content area of the app.</p>

        {/* Button Component */}
        <Button
          label="Another Button"
          onClick={() => console.log('Another Button Clicked')}
          type="submit"
        />
      </main>
    </>
  );
};

export default App;
