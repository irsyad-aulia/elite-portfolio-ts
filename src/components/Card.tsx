interface CardProps {
    title: string;       
    views: number; 
    isNew?: boolean; 
}

export default function Card({ title, views, isNew }: CardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      
      {isNew && <span style={{ background: 'red', color: 'white', padding: '2px 5px', borderRadius: '4px' }}>NEW!</span>}
    
      <h2>{title}</h2>
      <p>Viewed: {views} times</p>

    </div>
  );
}