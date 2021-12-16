import './topBarComponent.css'

const TopBarComponent = (): JSX.Element => {
  return (
    <>
      <img
        className="class-image"
        width={200}
        src={process.env.PUBLIC_URL + '/logo512.png'}
        alt="logo-reddit"
      />
      <h1>
        <span>Reddit</span>Minimal
      </h1>
    </>
  )
}

export default TopBarComponent
