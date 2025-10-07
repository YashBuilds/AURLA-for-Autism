export default function BackgroundShapes() {
  const shapes = [
    { type: 'triangle', color: '#ffd54f', top: '15%', left: '10%', delay: '0s', rotate: '0deg' },
    { type: 'triangle', color: '#64b5f6', top: '20%', left: '15%', delay: '2s', rotate: '180deg' },
    { type: 'triangle', color: '#81c784', top: '25%', right: '20%', delay: '4s', rotate: '0deg' },
    { type: 'triangle', color: '#e57373', bottom: '20%', left: '15%', delay: '6s', rotate: '0deg' },
    { type: 'triangle', color: '#ba68c8', bottom: '25%', right: '15%', delay: '8s', rotate: '0deg' },
    { type: 'circle', color: '#ff6b9d', top: '30%', right: '10%', delay: '1s' },
    { type: 'circle', color: '#4fc3f7', bottom: '30%', left: '8%', delay: '3s' },
    { type: 'circle', color: '#ffb74d', top: '60%', right: '25%', delay: '5s' },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-40"
          style={{
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
            animationDelay: shape.delay,
          }}
        >
          {shape.type === 'triangle' ? (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: '25px solid transparent',
                borderRight: '25px solid transparent',
                borderBottom: `43px solid ${shape.color}`,
                transform: `rotate(${shape.rotate})`,
              }}
            />
          ) : (
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: shape.color }}
            />
          )}
        </div>
      ))}
    </div>
  )
}