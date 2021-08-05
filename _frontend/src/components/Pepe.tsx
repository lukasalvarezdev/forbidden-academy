export interface PepeProps {
  pepe?: string
}

const Pepe = ({ pepe }: PepeProps) => {
  return (
    <div>
      <h2>{pepe}</h2>
    </div>
  )
}

export default Pepe
