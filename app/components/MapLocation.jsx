const MapLocation = (props) => {
  return (
    <div className='w-full' {...props}>

      <div className="embed-responsive mb-auto">
        <iframe
          title="map"
          width="500"
          height='500'
          className='d-block embed-responsive-item mx-auto'
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/view?zoom=10&center=44.2245%2C-68.6778&key=AIzaSyApnPITKc7ruOYGRqgPsdba352tZvAIx-k">
        </iframe>
      </div>
    </div>
  )
}

export default MapLocation
