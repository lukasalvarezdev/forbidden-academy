import Sections from './Sections'

const SectionsAside = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'var(--medium-blue)',
          width: '25%',
          minWidth: '380px',
          height: '100%',
        }}
      >
        <Sections />
      </div>
    </div>
  )
}

export default SectionsAside
