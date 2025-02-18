// import { useState, useEffect } from 'react';

// const CursorFollower = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updatePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', updatePosition);
//     return () => window.removeEventListener('mousemove', updatePosition);
//   }, []);

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: position.y - 10, // Offset for centering
//         left: position.x - 10,
//         width: '15px',
//         height: '15px',
//         backgroundColor: '#06402B',
//         borderRadius: '50%',
//         pointerEvents: 'none', // Prevent interaction
//         transition: 'transform 0.1s ease-out',
//       }}
//     />
//   );
// };

// export default CursorFollower;








import { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 500);
    };

    let timeout;
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timeout);
    };
  }, []);

  return visible ? (
    <div
      style={{
        position: 'fixed',
        top: position.y - 10, // Offset for centering
        left: position.x - 10,
        width: '20px',
        height: '20px',
        backgroundColor: '#06402B',
        borderRadius: '50%',
        pointerEvents: 'none', // Prevent interaction
        transition: 'transform 0.1s ease-out',
      }}
    />
  ) : null;
};

export default CursorFollower;
