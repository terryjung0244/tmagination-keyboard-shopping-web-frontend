import React from 'react';

const CreateKeyboard = () => {
  const handleCreateKeyboard = async () => {
    const response = await fetch(
      'http://localhost:8070/api/keyboard/createKeyboard',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name: 'hong' }),
      },
    );
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <button onClick={handleCreateKeyboard}>Create Keyboard</button>
    </div>
  );
};

export default CreateKeyboard;
