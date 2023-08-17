import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";

export const GMap = ({lat, lng, width, height}) => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY
  })

  if (!isLoaded) return <h1>Loading map...</h1>

  return (
    <GoogleMap
      zoom={10}
      center={{lat, lng}}
      mapContainerStyle={{
        width: width || "500px",
        height: height || "500px",
        margin: "0 auto",
        borderRadius: "5px"
      }}
      options={{
        disableDefaultUI: true
      }}
    >
      <MarkerF position={{lat: lat, lng: lng}} />
    </GoogleMap>
  )
}