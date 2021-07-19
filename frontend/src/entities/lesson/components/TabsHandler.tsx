export interface TabsHandlerProps {
  tab: string
}

const TabsHandler: React.SFC<TabsHandlerProps> = ({ tab }) => {
  return (
    <>
      <h3>pepe, {tab}</h3>
    </>
  )
}

export default TabsHandler
