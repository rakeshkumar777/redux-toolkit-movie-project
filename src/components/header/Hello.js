import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
    const navigate=useNavigate();
  return (
    <div>
      this is hello page
      <button variant="danger" onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  );
}

export default Hello;
