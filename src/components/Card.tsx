interface CardProps {
    title: string;       
    views: number; 
    isNew?: boolean;
    category: "Tech" | "Health" | "Finance";
}

export default function Card({ title, views, isNew, category }: CardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      
      <span style={{ fontSize: '12px', background: 'green', padding: '4px', borderRadius: '4px' }}>
        {category}
      </span>

      {isNew && <span style={{ background: 'red', color: 'white', padding: '2px 5px', borderRadius: '4px' }}>NEW!</span>}
    
      <h2>{title}</h2>
      <p>Viewed: {views} times</p>

    </div>
  );
}