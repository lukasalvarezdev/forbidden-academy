import SectionsList from '../components/SectionsList'

const SectionsAside = () => {
  return (
    <div>
      <div
        className="p-20"
        style={{
          backgroundColor: 'var(--medium-blue)',
          width: '25%',
          minWidth: '380px',
          height: '100%',
        }}
      >
        <SectionsList />
      </div>
    </div>
  )
}

export default SectionsAside
