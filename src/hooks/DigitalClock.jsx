import * as React from 'react';
import ThemedDigitalClock from 'themed-digital-clock';

class DigitalClock extends React.Component {
  render() {
    return (
      <div className="DigitalClock">
        <ThemedDigitalClock
          description="The time now in New York"
          timezoneName="America/New_York"
          useDarkTheme={true}
          size={400}
        />
      </div>
    );
  }
}

export default DigitalClock;