import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function GetDirection() {
  const position = [51.505, -0.09]; // Replace with the desired coordinates

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-black mb-6">Get Direction</h1>

      {/* Map Section */}
      <div className="w-full h-96 mb-6 overflow-hidden rounded-lg">
        <MapContainer
          center={position}
          zoom={13}
          className="h-full w-full"
          style={{ height: "384px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Selected Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Address Details */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        {[
          { label: "Address", value: "150 Main St, Downtown" },
          { label: "City", value: "Springfield" },
          { label: "State/County", value: "Greenwood County" },
          { label: "Postal Code", value: "98765" },
          { label: "Area", value: "15,000 SqFt" },
          { label: "Country", value: "United States" },
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="font-medium text-black">{item.label}:</span>
            <span className="text-black">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
