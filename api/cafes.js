export default async function handler(req, res) {
  const { lat, lng } = req.query;
  const apiKey = "AIzaSyBjKNw_uSfSuPcEi3xLs3sp86D0Sdxk4MY";
  const endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=cafe&key=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Error fetching cafes" });
  }
}